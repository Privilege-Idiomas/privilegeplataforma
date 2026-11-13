import type { AuditSink } from "./audit";
import type {
  AuthorizationPolicy,
  Decision,
  DenialReason,
} from "./authorization";
import type { Actor, ResourceRef } from "./types";

/**
 * Ações sobre dados do PRÓPRIO titular, permitidas a qualquer usuário
 * autenticado quando o recurso pertence a ele (espelha as políticas RLS da
 * F2.A). Tudo o que não está listado é negado.
 */
const OWN_RESOURCE_ACTIONS: Readonly<Record<string, string>> = {
  "profile:read": "profile",
  "profile:update_display_name": "profile",
  "roles:read": "profile",
};

/**
 * Ações privilegiadas: NEGADAS para todos, inclusive `admin`, até que as
 * alçadas sejam decididas (DEC-071, B-P04-01/02, JUR-06). Nenhum usuário
 * atribui papéis nem cria vínculos pela aplicação nesta fase.
 */
const PRIVILEGED_ACTIONS = new Set([
  "role:grant",
  "role:revoke",
  "link:create",
  "link:revoke",
  "link:create_guardian",
  "profile:read_any",
  "audit:read",
]);

/**
 * Política do servidor (F2.A): nega por padrão, permite apenas acesso ao
 * próprio recurso e envia toda negação ao AuditSink fornecido (OBRIGATÓRIO).
 * Se o registro falhar, o erro é propagado (falha fechada): a chamada nunca
 * prossegue como se a negação tivesse sido auditada. Persistência dessas
 * negações só existirá na F2.B (ver audit.ts). Não substitui o RLS —
 * é a primeira barreira; o banco é a segunda.
 */
export class RoleBasedPolicy implements AuthorizationPolicy {
  constructor(private readonly audit: AuditSink) {
    // Defesa também em tempo de execução (chamadas JS ou com `as any`).
    if (!audit || typeof audit.record !== "function") {
      throw new TypeError(
        "RoleBasedPolicy exige um AuditSink explícito; não há auditoria silenciosa.",
      );
    }
  }

  async can(
    actor: Actor,
    action: string,
    resource: ResourceRef,
  ): Promise<Decision> {
    const decision = this.decide(actor, action, resource);
    if (!decision.allowed) {
      await this.audit.record({
        actorId: actor.session?.userId ?? null,
        action,
        objectType: resource.type,
        objectId: resource.id,
        outcome: "denied",
        reason: decision.reason,
      });
    }
    return decision;
  }

  private decide(
    actor: Actor,
    action: string,
    resource: ResourceRef,
  ): Decision {
    const deny = (reason: DenialReason): Decision => ({
      allowed: false,
      reason,
    });
    const session = actor.session;
    if (!session) return deny("not_authenticated");
    if (PRIVILEGED_ACTIONS.has(action)) return deny("pending_authority");

    const ownType = OWN_RESOURCE_ACTIONS[action];
    if (!ownType || ownType !== resource.type) return deny("no_policy");
    if (resource.id !== session.userId) return deny("not_owner");
    return { allowed: true };
  }
}
