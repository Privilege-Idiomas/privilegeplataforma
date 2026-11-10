import Link from "next/link";
import { Container } from "./ui/container";

export const NAV_ITEMS = [
  { href: "/", label: "Início" },
  { href: "/cursos", label: "Cursos" },
  { href: "/entrar", label: "Entrar" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-border bg-surface border-b">
      <Container className="flex flex-wrap items-center justify-between gap-3 py-4">
        <Link
          href="/"
          className="flex items-baseline gap-2"
          aria-label="Privilège — página inicial"
        >
          <span className="text-brand font-serif text-xl font-semibold tracking-wide">
            Privilège
          </span>
          <span className="text-accent text-xs tracking-widest uppercase">
            Idiomas
          </span>
        </Link>
        <nav aria-label="Principal">
          <ul className="flex gap-1 text-sm sm:gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted hover:text-foreground focus-visible:outline-brand rounded-md px-2 py-1 focus-visible:outline-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
