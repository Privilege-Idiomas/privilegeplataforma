/**
 * Porta de auditoria do servidor (F2.A). Campos mínimos de P-04 §3.
 * Nunca registrar senhas, tokens, e-mails, documentos ou conteúdo sensível.
 * No banco, concessões/revogações de papéis e vínculos já são auditadas por
 * trigger; esta porta cobre DECISÕES do servidor, inclusive negações (que não
 * podem ser gravadas dentro de uma transação que o próprio banco reverte).
 * O adaptador persistente (Supabase) será ligado na F2.B.
 */
export interface AuditEvent {
  actorId: string | null;
  action: string;
  objectType: string;
  objectId: string | null;
  outcome: "allowed" | "denied";
  reason?: string;
}

export interface AuditSink {
  record(event: AuditEvent): Promise<void>;
}

/** Padrão enquanto não há persistência: descarta eventos. */
export class NoopAuditSink implements AuditSink {
  async record(): Promise<void> {}
}

/** Para testes: guarda eventos em memória. */
export class InMemoryAuditSink implements AuditSink {
  readonly events: AuditEvent[] = [];

  async record(event: AuditEvent): Promise<void> {
    this.events.push(structuredClone(event));
  }
}
