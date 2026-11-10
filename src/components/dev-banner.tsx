import type { AppEnv } from "@/lib/env";

export function DevBanner({ env }: { env: AppEnv }) {
  if (env === "production") return null;
  return (
    <div
      role="note"
      className="bg-notice text-notice-foreground px-4 py-2 text-center text-xs sm:text-sm"
    >
      Ambiente de desenvolvimento ({env}) — todos os dados exibidos são
      fictícios. Sem cobranças e sem dados reais.
    </div>
  );
}
