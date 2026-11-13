/**
 * F2.A — isolamento de identidades, papéis e vínculos (RLS + privilégios +
 * triggers). Contas FICTÍCIAS do seed. Roda em PGlite e no Supabase real (CI).
 * Critérios: docs/42 §5 e P-04 §4.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { LINK, ROLE_ROW, U } from "./identities";
import {
  type TestDb,
  asRole,
  asUser,
  becomeOwner,
  becomeUser,
  inTransaction,
  openTestDatabase,
} from "./support";

let db: TestDb;

beforeAll(async () => {
  db = await openTestDatabase();
});

afterAll(async () => {
  await db.close();
});

const ids = (rows: { id: string }[]) => rows.map((r) => r.id).sort();
/** Negação de privilégio na tabela/schema exato (não aceita erro de outro objeto). */
const denied = (name: string) =>
  new RegExp(`permission denied for (table|schema) ${name}\\b`);

describe("perfis", () => {
  it("cada usuário enxerga somente o próprio perfil", async () => {
    for (const userId of Object.values(U)) {
      const { rows } = await asUser(db, userId, () =>
        db.query<{ id: string }>(`select id from public.profiles`),
      );
      expect(ids(rows)).toEqual([userId]);
    }
  });

  it("IDOR: consultar o perfil de outro titular pelo ID não retorna nada", async () => {
    const { rows } = await asUser(db, U.alunoA, () =>
      db.query(`select * from public.profiles where id = $1`, [U.alunoB]),
    );
    expect(rows).toEqual([]);
  });

  it("visitante anônimo não tem acesso algum", async () => {
    await expect(
      asRole(db, "anon", () => db.query(`select * from public.profiles`)),
    ).rejects.toThrow(denied("profiles"));
  });

  it("usuário altera o próprio nome de exibição", async () => {
    const r = await asUser(db, U.alunoA, () =>
      db.query(
        `update public.profiles set display_name = '[FICTÍCIO] Novo nome' where id = $1`,
        [U.alunoA],
      ),
    );
    expect(r.affectedRows).toBe(1);
  });

  it("não altera o perfil de outro titular (0 linhas)", async () => {
    const r = await asUser(db, U.alunoA, () =>
      db.query(`update public.profiles set display_name = 'x' where id = $1`, [
        U.alunoB,
      ]),
    );
    expect(r.affectedRows).toBe(0);
  });

  it("não altera colunas além do nome (ex.: trocar o próprio ID)", async () => {
    await expect(
      asUser(db, U.alunoA, () =>
        db.query(`update public.profiles set id = $1 where id = $2`, [
          U.alunoB,
          U.alunoA,
        ]),
      ),
    ).rejects.toThrow(denied("profiles"));
  });

  it("não cria nem exclui perfis", async () => {
    await expect(
      asUser(db, U.semPapel, () =>
        db.query(
          `insert into public.profiles (id, display_name) values ($1, 'x')`,
          [U.semPapel],
        ),
      ),
    ).rejects.toThrow(denied("profiles"));
    await expect(
      asUser(db, U.alunoA, () =>
        db.query(`delete from public.profiles where id = $1`, [U.alunoA]),
      ),
    ).rejects.toThrow(denied("profiles"));
  });
});

describe("papéis", () => {
  it("usuário vê somente os próprios papéis", async () => {
    const { rows } = await asUser(db, U.pagador, () =>
      db.query<{ user_id: string; role: string }>(
        `select user_id, role from public.user_roles`,
      ),
    );
    expect(rows).toEqual([{ user_id: U.pagador, role: "payer" }]);
  });

  it.each(Object.entries(U))(
    "autopromoção negada: %s não consegue se atribuir 'admin'",
    async (_name, userId) => {
      await expect(
        asUser(db, userId, () =>
          db.query(
            `insert into public.user_roles (user_id, role) values ($1, 'admin')`,
            [userId],
          ),
        ),
      ).rejects.toThrow(denied("user_roles"));
    },
  );

  it("não consegue transformar o próprio papel em outro", async () => {
    await expect(
      asUser(db, U.alunoA, () =>
        db.query(`update public.user_roles set role = 'admin' where id = $1`, [
          ROLE_ROW.alunoA,
        ]),
      ),
    ).rejects.toThrow(denied("user_roles"));
  });

  it("admin sem alçada definida não lê papéis nem perfis de terceiros", async () => {
    const { roles, profiles } = await asUser(db, U.admin, async () => ({
      roles: await db.query<{ user_id: string }>(
        `select user_id from public.user_roles`,
      ),
      profiles: await db.query<{ id: string }>(
        `select id from public.profiles`,
      ),
    }));
    expect(roles.rows.map((r) => r.user_id)).toEqual([U.admin]);
    expect(ids(profiles.rows)).toEqual([U.admin]);
  });

  it("papel concedido é imutável e revogado não volta (nem para o dono)", async () => {
    await expect(
      inTransaction(db, () =>
        db.query(`update public.user_roles set role = 'admin' where id = $1`, [
          ROLE_ROW.alunoA,
        ]),
      ),
    ).rejects.toThrow(/imutável/);

    await expect(
      inTransaction(db, async () => {
        await db.query(
          `update public.user_roles set revoked_at = now() where id = $1`,
          [ROLE_ROW.alunoA],
        );
        await db.query(
          `update public.user_roles set revoked_at = null where id = $1`,
          [ROLE_ROW.alunoA],
        );
      }),
    ).rejects.toThrow(/não pode ser reativado/);
  });

  it("papéis não podem ser excluídos (histórico preservado)", async () => {
    await expect(
      inTransaction(db, () =>
        db.query(`delete from public.user_roles where id = $1`, [
          ROLE_ROW.alunoA,
        ]),
      ),
    ).rejects.toThrow(/não podem ser excluídos/);
  });
});

describe("vínculos pagador → aluno", () => {
  it("pagador com dois alunos vê os dois vínculos", async () => {
    const { rows } = await asUser(db, U.pagador, () =>
      db.query<{ id: string }>(`select id from public.account_links`),
    );
    expect(ids(rows)).toEqual([LINK.pagadorAlunoA, LINK.pagadorAlunoB].sort());
  });

  it("cada aluno vê só o próprio vínculo, não o do outro aluno", async () => {
    const { rows } = await asUser(db, U.alunoA, () =>
      db.query<{ id: string }>(`select id from public.account_links`),
    );
    expect(ids(rows)).toEqual([LINK.pagadorAlunoA]);
  });

  it("pagamento ≠ acesso acadêmico: pagador não lê o perfil nem os papéis dos alunos", async () => {
    const { profiles, roles } = await asUser(db, U.pagador, async () => ({
      profiles: await db.query<{ id: string }>(
        `select id from public.profiles where id in ($1, $2)`,
        [U.alunoA, U.alunoB],
      ),
      roles: await db.query(
        `select * from public.user_roles where user_id = $1`,
        [U.alunoA],
      ),
    }));
    expect(profiles.rows).toEqual([]);
    expect(roles.rows).toEqual([]);
  });

  it("terceiros (professor, admin, sem papel) não veem vínculos", async () => {
    for (const userId of [U.professor, U.admin, U.semPapel]) {
      const { rows } = await asUser(db, userId, () =>
        db.query(`select * from public.account_links`),
      );
      expect(rows).toEqual([]);
    }
  });

  it("usuário não cria vínculo nem revoga/transfere vínculo existente", async () => {
    await expect(
      asUser(db, U.pagador, () =>
        db.query(
          `insert into public.account_links (kind, holder_id, student_id) values ('payer', $1, $2)`,
          [U.pagador, U.semPapel],
        ),
      ),
    ).rejects.toThrow(denied("account_links"));
    await expect(
      asUser(db, U.pagador, () =>
        db.query(
          `update public.account_links set student_id = $1 where id = $2`,
          [U.professor, LINK.pagadorAlunoA],
        ),
      ),
    ).rejects.toThrow(denied("account_links"));
  });

  it("transferência é bloqueada até para o canal privilegiado", async () => {
    await expect(
      asRole(db, "service_role", () =>
        db.query(
          `update public.account_links set student_id = $1 where id = $2`,
          [U.alunoB, LINK.pagadorAlunoA],
        ),
      ),
    ).rejects.toThrow(/não pode ser transferido/);
  });

  it("vínculo exige pagador e aluno com papéis ativos", async () => {
    await expect(
      asRole(db, "service_role", () =>
        db.query(
          `insert into public.account_links (kind, holder_id, student_id) values ('payer', $1, $2)`,
          [U.professor, U.alunoA],
        ),
      ),
    ).rejects.toThrow(/papel de pagador/);
  });
});

describe("menores e responsáveis — bloqueados no banco (JUR-02/JUR-11)", () => {
  it.each(["service_role", "dono das tabelas"])(
    "vínculo de responsável legal é rejeitado mesmo para %s",
    async (who) => {
      const insert = () =>
        db.query(
          `insert into public.account_links (kind, holder_id, student_id) values ('guardian', $1, $2)`,
          [U.pagador, U.alunoA],
        );
      const run =
        who === "service_role"
          ? asRole(db, "service_role", insert)
          : inTransaction(db, insert);
      await expect(run).rejects.toThrow(/responsável legal\/menor bloqueado/);
    },
  );

  it("vínculo existente não pode ser convertido em responsável legal", async () => {
    await expect(
      inTransaction(db, () =>
        db.query(
          `update public.account_links set kind = 'guardian' where id = $1`,
          [LINK.pagadorAlunoA],
        ),
      ),
    ).rejects.toThrow(/responsável legal\/menor bloqueado/);
  });

  it("nenhuma coluna pública armazena idade ou data de nascimento", async () => {
    const { rows } = await db.query<{ column_name: string }>(
      `select column_name from information_schema.columns
       where table_schema = 'public' and column_name ~* '(birth|nascimento|idade|age|minor|menor)'`,
    );
    expect(rows).toEqual([]);
  });
});

describe("revogação encerra o acesso em novas operações", () => {
  it("revogar o vínculo tira a visibilidade das duas pontas", async () => {
    const seen = await inTransaction(db, async () => {
      await db.query(
        `update public.account_links set status = 'revoked', revoked_at = now() where id = $1`,
        [LINK.pagadorAlunoA],
      );
      await becomeUser(db, U.pagador);
      const payer = await db.query<{ id: string }>(
        `select id from public.account_links`,
      );
      await becomeOwner(db);
      await becomeUser(db, U.alunoA);
      const student = await db.query(`select id from public.account_links`);
      return { payer: ids(payer.rows), student: student.rows };
    });
    expect(seen.payer).toEqual([LINK.pagadorAlunoB]);
    expect(seen.student).toEqual([]);
  });

  it("revogar o papel de pagador encerra a visibilidade dos vínculos", async () => {
    const rows = await inTransaction(db, async () => {
      await db.query(
        `update public.user_roles set revoked_at = now(), revoked_by = $2 where id = $1`,
        [ROLE_ROW.pagador, U.admin],
      );
      await becomeUser(db, U.pagador);
      return (await db.query(`select id from public.account_links`)).rows;
    });
    expect(rows).toEqual([]);
  });
});

describe("auditoria mínima", () => {
  it("registra concessão e revogação de papel, sem dados sensíveis", async () => {
    const events = await inTransaction(db, async () => {
      const granted = await db.query<{ id: string }>(
        `insert into public.user_roles (user_id, role) values ($1, 'student') returning id`,
        [U.semPapel],
      );
      await db.query(
        `update public.user_roles set revoked_at = now() where id = $1`,
        [granted.rows[0]!.id],
      );
      return (
        await db.query<{ action: string; object_id: string; outcome: string }>(
          `select action, object_id, outcome from public.audit_events
           where object_id = $1 order by id`,
          [granted.rows[0]!.id],
        )
      ).rows;
    });
    expect(events.map((e) => e.action)).toEqual(["role.grant", "role.revoke"]);
    expect(events.every((e) => e.outcome === "allowed")).toBe(true);
  });

  it("registra a criação dos vínculos do seed", async () => {
    const { rows } = await db.query<{ n: number }>(
      `select count(*)::int as n from public.audit_events
       where action = 'link.create' and object_id = any($1::uuid[])`,
      [[LINK.pagadorAlunoA, LINK.pagadorAlunoB]],
    );
    expect(rows[0]?.n).toBe(2);
  });

  it("é append-only (nem o dono altera ou apaga)", async () => {
    await expect(
      inTransaction(db, () =>
        db.query(`update public.audit_events set reason = 'x'`),
      ),
    ).rejects.toThrow(/imutáveis/);
    await expect(
      inTransaction(db, () => db.query(`delete from public.audit_events`)),
    ).rejects.toThrow(/imutáveis/);
  });

  it("nenhum usuário comum ou anônimo lê a auditoria", async () => {
    for (const userId of [U.admin, U.alunoA]) {
      await expect(
        asUser(db, userId, () => db.query(`select * from public.audit_events`)),
      ).rejects.toThrow(denied("audit_events"));
    }
    await expect(
      asRole(db, "anon", () => db.query(`select * from public.audit_events`)),
    ).rejects.toThrow(denied("audit_events"));
  });

  it("não possui colunas de senha, token, e-mail ou documento", async () => {
    const { rows } = await db.query<{ column_name: string }>(
      `select column_name from information_schema.columns
       where table_schema = 'public' and table_name = 'audit_events'
         and column_name ~* '(password|senha|token|email|cpf|document)'`,
    );
    expect(rows).toEqual([]);
  });
});

describe("funções auxiliares", () => {
  it("schema private não é acessível a visitantes anônimos", async () => {
    await expect(
      asRole(db, "anon", () =>
        db.query(`select private.has_active_role($1, 'admin')`, [U.admin]),
      ),
    ).rejects.toThrow(denied("private"));
  });
});
