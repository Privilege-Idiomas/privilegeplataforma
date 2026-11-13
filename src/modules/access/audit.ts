/**
 * Porta de auditoria de DECISÕES do servidor (F2.A). Campos mínimos de P-04 §3.
 * Nunca registrar senhas, tokens, e-mails, documentos ou conteúdo sensível.
 *
 * O que está PERSISTIDO hoje (banco, por trigger, tabela `audit_events`):
 * concessão/revogação de papéis e criação/revogação de vínculos.
 *
 * O que AINDA NÃO é persistido: negações decididas pelo servidor
 * (`RoleBasedPolicy`). Não existe adaptador persistente nesta fase — ele será
 * implementado na F2.B, junto com a sessão real. Até lá a política não está
 * ligada a nenhuma rota, e o único adaptador disponível é o em memória,
 * destinado a TESTES.
 *
 * Não há adaptador "silencioso": quem usa a política precisa fornecer
 * explicitamente um AuditSink, e falhas ao registrar são propagadas.
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
  /** Deve lançar erro se não conseguir registrar (nunca descartar em silêncio). */
  record(event: AuditEvent): Promise<void>;
}

/** SOMENTE PARA TESTES: guarda eventos em memória, sem persistência. */
export class InMemoryAuditSink implements AuditSink {
  readonly events: AuditEvent[] = [];

  async record(event: AuditEvent): Promise<void> {
    this.events.push(structuredClone(event));
  }
}
