/**
 * F2.A — isolamento pela API de dados (PostgREST), como um navegador faria
 * manipulando IDs e chamando a API diretamente. Só roda no job
 * `db-integration` (Supabase local real); no modo PGlite fica "skipped".
 *
 * O JWT de cada usuário FICTÍCIO é assinado (HS256) com o segredo local que o
 * próprio `supabase start` gera no runner — nunca com segredo real.
 */
import { createHmac } from "node:crypto";
import { describe, expect, it } from "vitest";
import { LINK, U } from "./identities";

const API_URL = process.env.SUPABASE_API_URL;
const ANON_KEY = process.env.SUPABASE_ANON_KEY;
const JWT_SECRET = process.env.SUPABASE_JWT_SECRET;

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

    it("token com assinatura inválida é rejeitado", async () => {
      const forged = userJwt(U.admin).slice(0, -4) + "AAAA";
      const res = await fetch(`${API_URL}/rest/v1/profiles?select=id`, {
        headers: { apikey: ANON_KEY!, Authorization: `Bearer ${forged}` },
      });
      expect(res.status).toBe(401);
    });
  },
);
