import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = { title: "Entrar" };

export default function SignInPage() {
  return (
    <Container className="max-w-md">
      <Card className="flex flex-col gap-4">
        <h1 className="font-serif text-2xl font-semibold">Entrar</h1>
        <p className="text-muted text-sm">
          O acesso de alunos, responsáveis, professores e administração será
          construído na próxima fase (F2). Nenhum cadastro ou login está
          disponível nesta versão.
        </p>
        <ButtonLink href="/" variant="secondary" className="self-start">
          Voltar ao início
        </ButtonLink>
      </Card>
    </Container>
  );
}
