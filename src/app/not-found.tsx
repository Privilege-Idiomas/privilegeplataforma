import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start gap-4">
      <h1 className="font-serif text-3xl font-semibold">
        Página não encontrada
      </h1>
      <p className="text-muted">O endereço acessado não existe.</p>
      <ButtonLink href="/">Voltar ao início</ButtonLink>
    </Container>
  );
}
