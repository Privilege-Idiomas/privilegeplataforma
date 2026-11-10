/**
 * Acesso: identidade (autenticação) e autorização.
 * Perfis previstos (CLAUDE.md §5): aluno, pagador/responsável, professor, admin.
 * F1 apenas declara contratos; regras e fluxos reais são escopo da F2.
 */

export type Role = "student" | "payer" | "teacher" | "admin";

export interface Session {
  /** Identificador opaco do usuário no provedor de autenticação. */
  userId: string;
  roles: Role[];
}

export interface Actor {
  /** null = visitante anônimo. */
  session: Session | null;
}

export interface ResourceRef {
  type: string;
  id: string;
}
