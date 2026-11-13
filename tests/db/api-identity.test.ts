/**
 * F2.A — isolamento pela API de dados (PostgREST), como um navegador faria
 * manipulando IDs e chamando a API diretamente. Só roda no job
 * `db-integration` (Supabase local real); no modo PGlite fica "skipped".
 *
 * O JWT de cada usuário FICTÍCIO é assinado (HS256) com o segredo local que o
 * próprio `supabase start` gera no runner — nunca com segredo real.
 */
import { createHmac, randomUUID } from "node:crypto";
import pg from "pg";
import { describe, expect, it } from "vitest";
import { LINK, U } from "./identities";

const API_URL = process.env.SUPABASE_API_URL;
const ANON_KEY = process.env.SUPABASE_ANON_KEY;
const JWT_SECRET = process.env.SUPABASE_JWT_SECRET;
const DB_URL = process.env.SUPABASE_DB_URL;

const b64url = (v: string | Buffer) => Buffer.from(v).toString("base64url");

function userJwt(sub: string): string {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = b64url(
    JSON.stringify({
      sub,
      role: "authenticated",
      aud: "authenticated",
      iat: now,
      exp: now + 300,
    }),
  );
  const signature = createHmac("sha256", JWT_SECRET!)
    .update(`${header}.${payload}`)
    .digest("base64url");
  return `${header}.${payload}.${signature}`;
}

function api(path: string, init: RequestInit & { as?: string } = {}) {
  const { as, ...rest } = init;
  return fetch(`${API_URL}/rest/v1/${path}`, {
    ...rest,
    headers: {
      apikey: ANON_KEY!,
      Authorization: `Bearer ${as ? userJwt(as) : ANON_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...rest.headers,
    },
  });
}

describe.skipIf(!API_URL || !ANON_KEY || !JWT_SECRET)(
  "API REST — isolamento de identidades (Supabase real)",
  () => {
    it("usuário lê apenas o próprio perfil", async () => {
      const res = await api("profiles?select=id", { as: U.alunoA });
      expect(res.status).toBe(200);
      expect(await res.json()).toEqual([{ id: U.alunoA }]);
    });

    it("IDOR via filtro na URL não retorna perfil de outro titular", async () => {
      const res = await api(`profiles?id=eq.${U.alunoB}`, { as: U.alunoA });
      expect(res.status).toBe(200);
      expect(await res.json()).toEqual([]);
    });

    it("PATCH no perfil de outro titular não altera nada", async () => {
      const res = await api(`profiles?id=eq.${U.alunoB}`, {
        as: U.alunoA,
        method: "PATCH",
        body: JSON.stringify({ display_name: "x" }),
      });
      expect(res.status).toBe(200);
      expect(await res.json()).toEqual([]);
    });

    it("autopromoção a admin via API é recusada", async () => {
      const res = await api("user_roles", {
        as: U.alunoA,
        method: "POST",
        body: JSON.stringify({ user_id: U.alunoA, role: "admin" }),
      });
      expect(res.status).toBe(403);
    });

    it("pagador não obtém perfis dos alunos vinculados", async () => {
      const res = await api(
        `profiles?id=in.(${U.alunoA},${U.alunoB})&select=id`,
        { as: U.pagador },
      );
      expect(await res.json()).toEqual([]);
    });

    it("aluno vê só o próprio vínculo", async () => {
      const res = await api("account_links?select=id", { as: U.alunoB });
      expect(await res.json()).toEqual([{ id: LINK.pagadorAlunoB }]);
    });

    it("vínculo de responsável legal é recusado pela API", async () => {
      const res = await api("account_links", {
        as: U.pagador,
        method: "POST",
        body: JSON.stringify({
          kind: "guardian",
          holder_id: U.pagador,
          student_id: U.alunoA,
        }),
      });
      expect(res.status).toBeGreaterThanOrEqual(400);
    });

    it("auditoria não é legível pela API", async () => {
      const res = await api("audit_events?select=id", { as: U.admin });
      expect(res.status).toBe(403);
    });

    it("visitante anônimo não lê perfis", async () => {
      const res = await api("profiles?select=id");
      expect(res.status).toBeGreaterThanOrEqual(400);
    });

    it.skipIf(!DB_URL)(
      "revogar o papel do pagador oculta o vínculo também para o aluno, pela API",
      async () => {
        // Par FICTÍCIO exclusivo deste teste (IDs aleatórios), criado no banco
        // descartável do CI: a API não roda dentro de transação revertível.
        const payer = randomUUID();
        const student = randomUUID();
        const link = randomUUID();
        const payerRole = randomUUID();
        const client = new pg.Client({ connectionString: DB_URL });
        await client.connect();
        try {
          for (const [id, label] of [
            [payer, "pagador-revogacao"],
            [student, "aluno-revogacao"],
          ] as const) {
            await client.query(
              `insert into auth.users (instance_id, id, aud, role, email, encrypted_password,
                 raw_app_meta_data, raw_user_meta_data, created_at, updated_at)
               values ('00000000-0000-0000-0000-000000000000', $1, 'authenticated',
                 'authenticated', $2, '', '{}', '{}', now(), now())`,
              [id, `${label}.${id.slice(0, 8)}@example.invalid`],
            );
            await client.query(
              `insert into public.profiles (id, display_name) values ($1, $2)`,
              [id, `[FICTÍCIO] ${label}`],
            );
          }
          await client.query(
            `insert into public.user_roles (id, user_id, role) values ($1, $2, 'payer'), ($3, $4, 'student')`,
            [payerRole, payer, randomUUID(), student],
          );
          await client.query(
            `insert into public.account_links (id, kind, holder_id, student_id) values ($1, 'payer', $2, $3)`,
            [link, payer, student],
          );

          const before = await api("account_links?select=id", { as: student });
          expect(await before.json()).toEqual([{ id: link }]);

          await client.query(
            `update public.user_roles set revoked_at = now() where id = $1`,
            [payerRole],
          );

          for (const who of [student, payer]) {
            const after = await api("account_links?select=id", { as: who });
            expect(after.status).toBe(200);
            expect(await after.json()).toEqual([]);
          }
          const history = await client.query(
            `select status from public.account_links where id = $1`,
            [link],
          );
          expect(history.rows).toEqual([{ status: "active" }]);
        } finally {
          await client.end();
        }
      },
    );

    it("funções do schema private não são expostas como RPC", async () => {
      for (const fn of ["payer_link_is_effective", "has_active_role"]) {
        const res = await api(`rpc/${fn}`, {
          as: U.pagador,
          method: "POST",
          body: JSON.stringify({ link_id: LINK.pagadorAlunoA }),
        });
        expect(res.status).toBe(404);
      }
    });

    it("token com assinatura inválida é rejeitado", async () => {
      const forged = userJwt(U.admin).slice(0, -4) + "AAAA";
      const res = await fetch(`${API_URL}/rest/v1/profiles?select=id`, {
        headers: { apikey: ANON_KEY!, Authorization: `Bearer ${forged}` },
      });
      expect(res.status).toBe(401);
    });
  },
);
