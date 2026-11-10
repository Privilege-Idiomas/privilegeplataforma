import type { Session } from "./types";

/**
 * Porta de autenticação. O adaptador Supabase Auth será implementado na F2.
 */
export interface AuthProvider {
  getCurrentSession(): Promise<Session | null>;
}

/** F1: ninguém está autenticado. Nunca cria sessões. */
export class AnonymousAuthProvider implements AuthProvider {
  async getCurrentSession(): Promise<Session | null> {
    return null;
  }
}
