/**
 * Infraestrutura dos testes de banco (F2.0).
 *
 * A MESMA suíte roda em dois backends:
 * - **pglite** (padrão, local e job `check` do CI): PostgreSQL em WASM com
 *   emulação mínima do Supabase — papéis `anon`/`authenticated`/`service_role`,
 *   permissões padrão do schema `public` e um *stub* do schema `auth`
 *   (`auth.users`, `auth.uid()`), aplicando migrações e seed a partir dos arquivos;
 * - **supabase** (job `db-integration` do CI): Supabase local real iniciado pelo
 *   CLI (`supabase start`), que já aplicou migrações e seed. Ativado quando
 *   `SUPABASE_DB_URL` está definido.
 *
 * Testes que alteram dados devem usar `inTransaction`/`asRole`/`asUser`, que
 * sempre terminam em ROLLBACK — o banco compartilhado nunca é modificado.
 */
import { PGlite } from "@electric-sql/pglite";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import pg from "pg";

export const SUPABASE_DIR = join(process.cwd(), "supabase");
export const MIGRATIONS_DIR = join(SUPABASE_DIR, "migrations");

export const migrationFiles = readdirSync(MIGRATIONS_DIR)
  .filter((f) => f.endsWith(".sql"))
  .sort();

export const read = (path: string) => readFileSync(path, "utf8");

export type DbMode = "pglite" | "supabase";

export const DB_MODE: DbMode = process.env.SUPABASE_DB_URL
  ? "supabase"
  : "pglite";

export interface QueryResult<T> {
  rows: T[];
  affectedRows: number;
}

export interface TestDb {
  readonly mode: DbMode;
  query<T = Record<string, unknown>>(
    sql: string,
    params?: unknown[],
  ): Promise<QueryResult<T>>;
  exec(sql: string): Promise<void>;
  close(): Promise<void>;
}

/**
 * Emulação do que o Supabase provê antes das migrações do projeto.
 * Espelha as definições públicas do Supabase (papéis, grants padrão e
 * `auth.uid()` lendo `request.jwt.claims`). Não emula GoTrue, JWT nem PostgREST —
 * esses caminhos são cobertos no modo `supabase`.
 */
const SUPABASE_EMULATION_SQL = `
  create role anon nologin noinherit;
  create role authenticated nologin noinherit;
  create role service_role nologin noinherit bypassrls;
  grant usage on schema public to anon, authenticated, service_role;
  alter default privileges in schema public
    grant all on tables to anon, authenticated, service_role;
  alter default privileges in schema public
    grant all on functions to anon, authenticated, service_role;
  alter default privileges in schema public
    grant all on sequences to anon, authenticated, service_role;

  create schema auth;
  grant usage on schema auth to anon, authenticated, service_role;
  create table auth.users (
    instance_id uuid,
    id uuid primary key,
    aud varchar(255),
    role varchar(255),
    email varchar(255),
    encrypted_password varchar(255),
    raw_app_meta_data jsonb,
    raw_user_meta_data jsonb,
    created_at timestamptz,
    updated_at timestamptz
  );
  create function auth.uid() returns uuid language sql stable as $$
    select coalesce(
      nullif(current_setting('request.jwt.claim.sub', true), ''),
      (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub')
    )::uuid
  $$;
  grant execute on function auth.uid() to anon, authenticated, service_role;
`;

class PgliteTestDb implements TestDb {
  readonly mode = "pglite" as const;
  constructor(private readonly db: PGlite) {}

  async query<T>(sql: string, params?: unknown[]): Promise<QueryResult<T>> {
    const r = await this.db.query<T>(sql, params);
    return { rows: r.rows, affectedRows: r.affectedRows ?? 0 };
  }

  async exec(sql: string): Promise<void> {
    await this.db.exec(sql);
  }

  close(): Promise<void> {
    return this.db.close();
  }
}

class PgTestDb implements TestDb {
  readonly mode = "supabase" as const;
  constructor(private readonly client: pg.Client) {}

  async query<T>(sql: string, params?: unknown[]): Promise<QueryResult<T>> {
    const r = await this.client.query(sql, params);
    return { rows: r.rows as T[], affectedRows: r.rowCount ?? 0 };
  }

  async exec(sql: string): Promise<void> {
    await this.client.query(sql);
  }

  close(): Promise<void> {
    return this.client.end();
  }
}

/** Abre o banco de testes do modo corrente, já migrado e com seed. */
export async function openTestDatabase(): Promise<TestDb> {
  if (DB_MODE === "supabase") {
    const client = new pg.Client({
      connectionString: process.env.SUPABASE_DB_URL,
    });
    await client.connect();
    return new PgTestDb(client);
  }
  const db = new PGlite();
  await db.exec(SUPABASE_EMULATION_SQL);
  for (const file of migrationFiles) {
    await db.exec(read(join(MIGRATIONS_DIR, file)));
  }
  await db.exec(read(join(SUPABASE_DIR, "seed.sql")));
  return new PgliteTestDb(db);
}

/** Executa `fn` dentro de uma transação que é SEMPRE revertida. */
export async function inTransaction<T>(
  db: TestDb,
  fn: () => Promise<T>,
): Promise<T> {
  await db.exec("begin");
  try {
    return await fn();
  } finally {
    await db.exec("rollback");
  }
}

/** Executa `fn` como um papel do banco (anon, authenticated, service_role). */
export function asRole<T>(
  db: TestDb,
  role: "anon" | "authenticated" | "service_role",
  fn: () => Promise<T>,
  claims?: Record<string, unknown>,
): Promise<T> {
  return inTransaction(db, async () => {
    if (claims) {
      await db.query(`select set_config('request.jwt.claims', $1, true)`, [
        JSON.stringify(claims),
      ]);
    }
    await db.exec(`set local role ${role}`);
    return fn();
  });
}

/** Executa `fn` como usuário autenticado `userId` (como o PostgREST faria). */
export function asUser<T>(
  db: TestDb,
  userId: string,
  fn: () => Promise<T>,
): Promise<T> {
  return asRole(db, "authenticated", fn, {
    sub: userId,
    role: "authenticated",
  });
}
