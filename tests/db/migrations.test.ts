/**
 * Valida as migrações SQL versionadas e o seed em PostgreSQL — PGlite (local)
 * ou Supabase real (CI, job db-integration). Ver tests/db/support.ts.
 */
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  FICTIONAL_COURSES,
  FICTIONAL_LEARNING_PATHS,
} from "@/modules/catalog/fixtures";
import {
  MIGRATIONS_DIR,
  type TestDb,
  inTransaction,
  migrationFiles,
  openTestDatabase,
  read,
} from "./support";

let db: TestDb;

beforeAll(async () => {
  db = await openTestDatabase();
});

afterAll(async () => {
  await db.close();
});

describe("arquivos de migração", () => {
  it("seguem o padrão de nome do Supabase CLI (<timestamp>_<nome>.sql)", () => {
    expect(migrationFiles.length).toBeGreaterThan(0);
    for (const file of migrationFiles) {
      expect(file).toMatch(/^\d{14}_[a-z0-9_]+\.sql$/);
    }
  });

  it("não contêm comandos destrutivos", () => {
    for (const file of migrationFiles) {
      const sql = read(join(MIGRATIONS_DIR, file))
        .replace(/--.*$/gm, "")
        .toLowerCase();
      expect(sql).not.toMatch(/\b(drop|truncate)\b/);
      expect(sql).not.toMatch(/\bdelete\s+from\b/);
      expect(sql).not.toMatch(/on\s+delete\s+cascade/);
    }
  });
});

describe("esquema inicial", () => {
  const TABLES = [
    "course_modules",
    "courses",
    "learning_path_courses",
    "learning_paths",
    "lessons",
  ];

  it("cria somente as tabelas de catálogo da F1", async () => {
    const { rows } = await db.query<{ table_name: string }>(
      `select table_name from information_schema.tables
       where table_schema = 'public' order by table_name`,
    );
    expect(rows.map((r) => r.table_name)).toEqual(TABLES);
  });

  it("habilita RLS em todas as tabelas, sem políticas (nega por padrão)", async () => {
    const { rows } = await db.query<{
      relname: string;
      relrowsecurity: boolean;
    }>(
      `select c.relname, c.relrowsecurity from pg_class c
       join pg_namespace n on n.oid = c.relnamespace
       where n.nspname = 'public' and c.relkind = 'r' order by c.relname`,
    );
    expect(rows).toEqual(
      TABLES.map((relname) => ({ relname, relrowsecurity: true })),
    );
    const policies = await db.query(
      `select 1 from pg_policies where schemaname = 'public'`,
    );
    expect(policies.rows).toHaveLength(0);
  });

  it("não possui colunas de dados pessoais", async () => {
    const { rows } = await db.query<{ column_name: string }>(
      `select column_name from information_schema.columns where table_schema = 'public'`,
    );
    const pii =
      /(email|e_mail|phone|telefone|cpf|rg|birth|nascimento|address|endereco|password|senha)/;
    expect(rows.filter((r) => pii.test(r.column_name))).toEqual([]);
  });

  it("rejeita slug inválido", async () => {
    await expect(
      inTransaction(db, () =>
        db.query(
          `insert into public.courses (slug, title) values ('Slug Inválido', 'x')`,
        ),
      ),
    ).rejects.toThrow();
  });

  it("rejeita posição duplicada de módulo no mesmo curso", async () => {
    await expect(
      inTransaction(db, () =>
        db.query(
          `insert into public.course_modules (course_id, position, title)
           values ('00000000-0000-4000-8000-000000000101', 1, 'duplicado')`,
        ),
      ),
    ).rejects.toThrow();
  });

  it("impede excluir curso referenciado por trilha ou módulo (ON DELETE RESTRICT)", async () => {
    await expect(
      inTransaction(db, () =>
        db.query(
          `delete from public.courses where id = '00000000-0000-4000-8000-000000000101'`,
        ),
      ),
    ).rejects.toThrow();
  });

  it("atualiza updated_at automaticamente", async () => {
    const { rows } = await inTransaction(db, async () => {
      await db.query(
        `update public.courses set updated_at = '2000-01-01', title = title
         where slug = 'travel'`,
      );
      return db.query<{ recent: boolean }>(
        `select updated_at > '2000-01-02' as recent from public.courses where slug = 'travel'`,
      );
    });
    expect(rows[0]?.recent).toBe(true);
  });
});

describe("seed fictício", () => {
  it("está em sincronia com as fixtures TypeScript", async () => {
    const courses = await db.query<{ id: string; slug: string; title: string }>(
      `select id, slug, title from public.courses order by id`,
    );
    expect(courses.rows).toEqual(
      FICTIONAL_COURSES.map(({ id, slug, title }) => ({ id, slug, title })),
    );

    const lessons = await db.query<{ id: string }>(
      `select id from public.lessons order by id`,
    );
    expect(lessons.rows.map((r) => r.id)).toEqual(
      FICTIONAL_COURSES.flatMap((c) =>
        c.modules.flatMap((m) => m.lessons.map((l) => l.id)),
      ),
    );

    const pathCourses = await db.query<{ course_id: string }>(
      `select course_id from public.learning_path_courses order by learning_path_id, position`,
    );
    expect(pathCourses.rows.map((r) => r.course_id)).toEqual(
      FICTIONAL_LEARNING_PATHS.flatMap((p) => p.courseIds),
    );
  });

  it("marca todos os títulos como fictícios", async () => {
    const { rows } = await db.query<{ title: string }>(
      `select title from public.courses union all select title from public.course_modules
       union all select title from public.lessons union all select title from public.learning_paths`,
    );
    expect(rows.every((r) => r.title.startsWith("[FICTÍCIO]"))).toBe(true);
  });
});
