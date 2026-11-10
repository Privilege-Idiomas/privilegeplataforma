import { PGlite } from "@electric-sql/pglite";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

export const SUPABASE_DIR = join(process.cwd(), "supabase");
export const MIGRATIONS_DIR = join(SUPABASE_DIR, "migrations");

export const migrationFiles = readdirSync(MIGRATIONS_DIR)
  .filter((f) => f.endsWith(".sql"))
  .sort();

export const read = (path: string) => readFileSync(path, "utf8");

/**
 * Emulação dos papéis do Supabase e das permissões padrão que a plataforma
 * concede no schema `public` (tabelas criadas pelo dono recebem ALL para
 * anon/authenticated/service_role). Com isso, os testes reproduzem o cenário
 * real do Data API: a única barreira para anon/authenticated é o RLS.
 * `service_role` tem BYPASSRLS, como no Supabase.
 * Não reproduz o schema `auth` (auth.uid(), JWT) — isso fica para a F2.
 */
const SUPABASE_ROLES_SQL = `
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
`;

export async function createMigratedDatabase(
  options: { supabaseRoles?: boolean; seed?: boolean } = {},
): Promise<PGlite> {
  const db = new PGlite();
  if (options.supabaseRoles) await db.exec(SUPABASE_ROLES_SQL);
  for (const file of migrationFiles) {
    await db.exec(read(join(MIGRATIONS_DIR, file)));
  }
  if (options.seed ?? true) await db.exec(read(join(SUPABASE_DIR, "seed.sql")));
  return db;
}
