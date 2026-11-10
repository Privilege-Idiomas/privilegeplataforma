/**
 * Leitura centralizada de variáveis PÚBLICAS de ambiente.
 * Segredos nunca devem usar o prefixo NEXT_PUBLIC_ (seriam expostos ao navegador).
 */
export type AppEnv = "local" | "test" | "preview" | "production";

const APP_ENVS: readonly AppEnv[] = ["local", "test", "preview", "production"];

export function parseAppEnv(value: string | undefined): AppEnv {
  return APP_ENVS.includes(value as AppEnv) ? (value as AppEnv) : "local";
}

export const appEnv: AppEnv = parseAppEnv(process.env.NEXT_PUBLIC_APP_ENV);
