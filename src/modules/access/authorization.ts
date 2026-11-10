import type { Actor, ResourceRef } from "./types";

export type Decision =
  | { allowed: true }
  | { allowed: false; reason: "not_authenticated" | "no_policy" };

/**
 * Porta de autorização, verificada no servidor (nunca só na interface).
 * Direitos comerciais de curso e permissões por perfil entram na F2/F3.
 */
export interface AuthorizationPolicy {
  can(actor: Actor, action: string, resource: ResourceRef): Promise<Decision>;
}

/**
 * F1: nega TUDO por padrão (menor privilégio). Nenhuma regra de negócio é
 * presumida; cada permissão precisará de política explícita e testes negativos.
 */
export class DenyAllPolicy implements AuthorizationPolicy {
  async can(
    actor: Actor,
    action: string,
    resource: ResourceRef,
  ): Promise<Decision> {
    // Ação e recurso só serão avaliados quando houver políticas explícitas (F2).
    void action;
    void resource;
    if (!actor.session) return { allowed: false, reason: "not_authenticated" };
    return { allowed: false, reason: "no_policy" };
  }
}
