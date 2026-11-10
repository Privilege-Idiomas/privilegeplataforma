import { Container } from "./ui/container";

export function SiteFooter() {
  return (
    <footer className="border-border text-muted mt-auto border-t py-6 text-xs">
      <Container className="flex flex-col gap-1 sm:flex-row sm:justify-between">
        <span>Plataforma Privilège — versão de desenvolvimento (F1).</span>
        <span>Identidade visual provisória.</span>
      </Container>
    </footer>
  );
}
