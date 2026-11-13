/** Identidades FICTÍCIAS do seed (supabase/seed.sql) usadas nos testes da F2.A. */
export const U = {
  alunoA: "00000000-0000-4000-8000-00000000a001",
  alunoB: "00000000-0000-4000-8000-00000000a002",
  pagador: "00000000-0000-4000-8000-00000000a003",
  professor: "00000000-0000-4000-8000-00000000a004",
  admin: "00000000-0000-4000-8000-00000000a005",
  semPapel: "00000000-0000-4000-8000-00000000a006",
} as const;

export const ROLE_ROW = {
  alunoA: "00000000-0000-4000-8000-00000000b001",
  pagador: "00000000-0000-4000-8000-00000000b003",
} as const;

export const LINK = {
  pagadorAlunoA: "00000000-0000-4000-8000-00000000c001",
  pagadorAlunoB: "00000000-0000-4000-8000-00000000c002",
} as const;
