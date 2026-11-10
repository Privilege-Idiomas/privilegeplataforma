import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const MODULES = [
  {
    title: "Catálogo",
    text: "Cursos, módulos, aulas e trilhas que referenciam cursos existentes.",
  },
  {
    title: "Acesso",
    text: "Perfis e autorização no servidor, negando tudo por padrão até a F2.",
  },
  {
    title: "Pagamentos",
    text: "Interface neutra de fornecedor; nenhuma cobrança habilitada.",
  },
  {
    title: "Agenda",
    text: "Interface de videochamada desacoplada; nenhum fornecedor escolhido.",
  },
];

export default function HomePage() {
  return (
    <Container className="flex flex-col gap-12">
      <section className="flex flex-col gap-5">
        <p className="text-accent text-xs font-semibold tracking-widest uppercase">
          Fase 1 · Fundação técnica
        </p>
        <h1 className="max-w-2xl font-serif text-3xl leading-tight font-semibold sm:text-5xl">
          Plataforma Privilège de ensino de idiomas
        </h1>
        <p className="text-muted max-w-2xl">
          Esta é a base técnica da plataforma, executada apenas em ambiente
          local. Conteúdo, textos e identidade visual são provisórios.
        </p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/cursos">Ver catálogo de exemplo</ButtonLink>
          <ButtonLink href="/entrar" variant="secondary">
            Área do aluno
          </ButtonLink>
        </div>
      </section>

      <section aria-labelledby="modulos" className="flex flex-col gap-4">
        <h2 id="modulos" className="font-serif text-xl font-semibold">
          Módulos da fundação
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {MODULES.map((m) => (
            <li key={m.title}>
              <Card className="h-full">
                <h3 className="font-semibold">{m.title}</h3>
                <p className="text-muted mt-1 text-sm">{m.text}</p>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
