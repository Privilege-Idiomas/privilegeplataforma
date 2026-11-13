/**
 * F2.0 — smoke da API de dados (PostgREST) do Supabase local real.
 * Só roda no job `db-integration` do CI, onde SUPABASE_API_URL e
 * SUPABASE_ANON_KEY são lidos de `supabase status` (chaves locais de
 * desenvolvimento, nunca de produção). No modo PGlite fica como "skipped".
 */
import { describe, expect, it } from "vitest";

const API_URL = process.env.SUPABASE_API_URL;
const ANON_KEY = process.env.SUPABASE_ANON_KEY;

describe.skipIf(!API_URL || !ANON_KEY)("API REST do Supabase local", () => {
  const get = (path: string) =>
    fetch(`${API_URL}/rest/v1/${path}`, {
      headers: { apikey: ANON_KEY!, Authorization: `Bearer ${ANON_KEY}` },
    });

  it.each([
    "courses",
    "course_modules",
    "lessons",
    "learning_paths",
    "learning_path_courses",
  ])("visitante anônimo recebe lista vazia em %s (RLS)", async (table) => {
    const res = await get(`${table}?select=*`);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual([]);
  });

  it("schema privado/auth não é exposto pela API", async () => {
    const res = await get("users?select=*");
    expect(res.status).toBeGreaterThanOrEqual(400);
  });
});
