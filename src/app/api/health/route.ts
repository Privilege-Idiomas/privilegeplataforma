import { connection } from "next/server";

/** Verificação simples de disponibilidade. Não expõe dados internos. */
export async function GET() {
  await connection();
  return Response.json({ status: "ok", time: new Date().toISOString() });
}
