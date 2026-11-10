import type { Metadata } from "next";
import { DevBanner } from "@/components/dev-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { appEnv } from "@/lib/env";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Privilège Idiomas", template: "%s · Privilège Idiomas" },
  description:
    "Plataforma digital de ensino de idiomas — versão de desenvolvimento.",
  // Ambiente de desenvolvimento: não indexar.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <DevBanner env={appEnv} />
        <SiteHeader />
        <main className="flex-1 py-10 sm:py-14">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
