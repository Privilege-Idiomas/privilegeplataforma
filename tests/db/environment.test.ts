/**
 * F2.0 — fidelidade do ambiente de testes. Roda nos dois modos: no Supabase
 * real confirma o comportamento de referência; no PGlite confirma que a
 * emulação se comporta da mesma forma.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  DB_MODE,
  type TestDb,
  asRole,
  asUser,
  inTransaction,
  openTestDatabase,
} from "./support";

const SOME_USER = "00000000-0000-4000-8000-00000000f200";

let db: TestDb;

beforeAll(async () => {
  db = await openTestDatabase();
});

afterAll(async () => {
  await db.close();
});

describe(`ambiente de testes (${DB_MODE})`, () => {
  it("expõe os papéis do Supabase", async () => {
    const { rows } = await db.query<{ rolname: string }>(
      `select rolname from pg_roles
       where rolname in ('anon', 'authenticated', 'service_role') order by rolname`,
    );
    expect(rows.map((r) => r.rolname)).toEqual([
      "anon",
      "authenticated",
      "service_role",
    ]);
  });

  it("auth.uid() devolve o 'sub' do JWT do usuário autenticado", async () => {
    const { rows } = await asUser(db, SOME_USER, () =>
      db.query<{ uid: string | null; who: string }>(
        `select auth.uid() as uid, current_user as who`,
      ),
    );
    expect(rows[0]).toEqual({ uid: SOME_USER, who: "authenticated" });
  });

  it("auth.uid() é nulo para visitante anônimo", async () => {
    const { rows } = await asRole(db, "anon", () =>
      db.query<{ uid: string | null }>(`select auth.uid() as uid`),
    );
    expect(rows[0]?.uid).toBeNull();
  });

  it("transações de teste são sempre revertidas", async () => {
    await inTransaction(db, () =>
      db.query(
        `insert into public.courses (slug, title) values ('temporario-f2', 'x')`,
      ),
    );
    const { rows } = await db.query<{ n: number }>(
      `select count(*)::int as n from public.courses where slug = 'temporario-f2'`,
    );
    expect(rows[0]?.n).toBe(0);
  });
});
