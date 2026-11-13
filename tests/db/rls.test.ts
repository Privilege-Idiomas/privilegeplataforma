/**
 * Teste COMPORTAMENTAL do RLS na F1: executa leituras e escritas como os
 * papéis `anon` e `authenticated`, com as mesmas permissões de tabela que o
 * Supabase concede por padrão. Resultado esperado: nenhuma linha visível e
 * nenhuma escrita possível, porque não existem políticas (nega por padrão).
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { type TestDb, asRole as runAs, openTestDatabase } from "./support";

const ID = (n: number) =>
  `00000000-0000-4000-8000-${String(n).padStart(12, "0")}`;

/** Uma linha válida por tabela, para que só o RLS possa barrar a escrita. */
const TABLES: Record<string, { insert: string; update: string }> = {
  courses: {
    insert: `insert into public.courses (slug, title) values ('novo-curso', 'x')`,
    update: `update public.courses set title = 'x'`,
  },
  course_modules: {
    insert: `insert into public.course_modules (course_id, position, title) values ('${ID(101)}', 99, 'x')`,
    update: `update public.course_modules set title = 'x'`,
  },
  lessons: {
    insert: `insert into public.lessons (module_id, position, title) values ('${ID(201)}', 99, 'x')`,
    update: `update public.lessons set title = 'x'`,
  },
  learning_paths: {
    insert: `insert into public.learning_paths (slug, title) values ('nova-trilha', 'x')`,
    update: `update public.learning_paths set title = 'x'`,
  },
  learning_path_courses: {
    insert: `insert into public.learning_path_courses (learning_path_id, course_id, position) values ('${ID(401)}', '${ID(102)}', 99)`,
    update: `update public.learning_path_courses set position = position`,
  },
};

let db: TestDb;

const asRole = <T>(
  role: "anon" | "authenticated" | "service_role",
  fn: () => Promise<T>,
) => runAs(db, role, fn);

beforeAll(async () => {
  db = await openTestDatabase();
});

afterAll(async () => {
  await db.close();
});

describe("pré-condição: emulação fiel das permissões do Supabase", () => {
  it.each(["anon", "authenticated"])(
    "%s tem privilégios de tabela (logo, só o RLS o impede)",
    async (role) => {
      const { rows } = await db.query<{ ok: boolean }>(
        `select bool_and(has_table_privilege($1, 'public.' || table_name, 'select,insert,update,delete')) as ok
         from information_schema.tables where table_schema = 'public'`,
        [role],
      );
      expect(rows[0]?.ok).toBe(true);
    },
  );

  it("o seed existe (há linhas a esconder)", async () => {
    const { rows } = await db.query<{ n: number }>(
      `select count(*)::int as n from public.courses`,
    );
    expect(rows[0]?.n).toBe(3);
  });
});

describe.each(["anon", "authenticated"] as const)("papel %s", (role) => {
  describe.each(Object.entries(TABLES))("tabela %s", (table, sql) => {
    it("não enxerga nenhuma linha", async () => {
      const { rows } = await asRole(role, () =>
        db.query<{ n: number }>(
          `select count(*)::int as n from public.${table}`,
        ),
      );
      expect(rows[0]?.n).toBe(0);
    });

    it("não consegue inserir", async () => {
      await expect(asRole(role, () => db.query(sql.insert))).rejects.toThrow(
        /row-level security/,
      );
    });

    it("não consegue alterar nem excluir (0 linhas afetadas)", async () => {
      const updated = await asRole(role, () => db.query(sql.update));
      const deleted = await asRole(role, () =>
        db.query(`delete from public.${table}`),
      );
      expect(updated.affectedRows ?? 0).toBe(0);
      expect(deleted.affectedRows ?? 0).toBe(0);
    });
  });
});

describe("limites conhecidos (documentados)", () => {
  it("service_role ignora o RLS — chave deve permanecer só no servidor (nenhuma na F1)", async () => {
    const { rows } = await asRole("service_role", () =>
      db.query<{ n: number }>(`select count(*)::int as n from public.courses`),
    );
    expect(rows[0]?.n).toBe(3);
  });

  it("a função de trigger não pode ser chamada diretamente via RPC", async () => {
    await expect(
      asRole("anon", () => db.query(`select public.set_updated_at()`)),
    ).rejects.toThrow(/trigger/);
  });
});
