# Plataforma Digital Privilège

Projeto de desenvolvimento de uma plataforma digital de ensino de idiomas da Privilège.

## Objetivo
Disponibilizar cursos online, aulas em vídeo, exercícios e avaliações, com acesso para alunos atuais e novos alunos e gestão de conteúdo pela equipe administrativa.

## Referência vigente para início do desenvolvimento — 2026-11-09
A plataforma **pode começar a ser construída em fases curtas, localmente e sem serviços pagos**, enquanto preços, contratação docente, fornecedores, conteúdo audiovisual e jurídico seguem sendo definidos. Ver [cronograma por lotes](docs/34-prontidao-desenvolvimento-cronograma-e-lotes-2026-11-09.md), [instruções atualizadas ao Claude](CLAUDE.md) e [Issue F1](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/6). As regras antigas do histórico abaixo são superadas pela ata de 03/11 e DEC-074–083: avaliação obrigatória **não eliminatória**, tentativas ilimitadas, vídeo 100% não obrigatório, Plano 1 só digital, Plano 2 com 2 plantões/mês, Plano 3 com 4 plantões/mês + 2 particulares de 50min. Travel/Business são ofertas por curso, Basic bônus aos assinantes. **Nenhuma função financeira ou com dados reais pode entrar em produção sem homologação própria.**

## Estado atual
**Documentação inicial — versão 0.2.** Este repositório registra o entendimento atual, propostas e decisões pendentes. As definições de produto informadas pela responsável ainda aguardam aprovação formal do patrocinador quando indicado no Decision Log.

## Definições de produto informadas
- Público de lançamento: alunos atuais e novos alunos.
- Modelo comercial: Travel/Business vendidos separadamente por curso/trilha; Basic/Start bônus aos assinantes; nível de serviços do plano separado de direito de curso, conforme reunião de 03/11.
- Gestão de cursos e aulas: restrita à equipe administrativa.
- Catálogo inicial: Basic English, Travel e Business.
- Jornada: teste de nivelamento, início pela base (Basic English) ou entrada direta em Travel ou Business.
- Trilhas: os mesmos cursos poderão ser organizados em sequências e prioridades diferentes conforme o objetivo do aluno.
- Aprendizagem: prática opcional, avaliação obrigatória **não eliminatória** e tentativas ilimitadas; nota inferior a 6/10 gera recomendação pedagógica, sem impedir progresso.
- Após desempenho inferior a 6 em três módulos distintos do mesmo curso (nota mais recente por módulo), recomendar apoio pedagógico, respeitando o nível do plano, sem bloquear progresso.

## Ferramentas e fontes de verdade
- **GitHub (principal e completo):** fonte **única** de verdade do projeto: **todas** as tarefas (inclusive marcos executivos), responsáveis, status, cronograma, riscos, decisões, requisitos, documentos, código, testes, evidências e histórico. Nada pode existir somente no Notion.
- **Notion (somente relatório derivado):** visão executiva resumida para Matheus, **extraída exclusivamente de fatos já registrados no GitHub**. Não armazena informação original, não modifica o fluxo do GitHub e não é repositório paralelo. Decisão DEC-026; implantação ainda não concluída.
- **Claude Code:** executor técnico; atualiza primeiro no GitHub as tarefas, status, previsões, impedimentos e evidências. Se um marco sob sua responsabilidade aparecer no Notion, pode atualizar ali o resumo executivo **somente depois** de registrar a mesma informação no GitHub, quando autorizado/conectado.

## Execução local (F1 — em validação)
Aplicação Next.js (App Router) + TypeScript + Tailwind, com esquema inicial Supabase/PostgreSQL versionado. **Somente desenvolvimento local, dados fictícios, sem cobranças nem deploy.** Detalhes, arquitetura e evidências em [docs/35](docs/35-f1-fundacao-tecnica.md).

```bash
npm install       # Node.js >= 22.12 (CI: Node 24, ver .nvmrc)
npm run dev       # http://localhost:3000
npm run check     # lint + format:check + typecheck + testes (inclui migrações SQL)
npm run build     # build de produção local
npm run test:e2e  # smoke e2e + acessibilidade (Playwright/axe; usa o Google Chrome instalado)
```
Testes de banco rodam localmente em PostgreSQL WASM (PGlite) com emulação do Supabase; no CI, a mesma suíte roda também contra o **Supabase local real** (ver [docs/43](docs/43-f2-ambiente-testes-identidade-rls.md)).

Nenhuma variável de ambiente é necessária; ver [.env.example](.env.example). Supabase local completo (`npm run db:start`) é opcional e requer Docker.

**Privacidade:** Next.js e Supabase CLI enviam telemetria anônima por padrão. Recomenda-se desativar uma vez por máquina: `npx next telemetry disable` e `npx supabase@2.122.0 telemetry disable`.

## Documentação
- [Termo de Abertura](docs/01-project-charter.md)
- [Escopo do MVP](docs/02-scope.md)
- [Requisitos do Produto](docs/03-requirements.md)
- [Registro de Decisões](docs/04-decision-log.md)
- [Riscos e Problemas](docs/05-risks-and-issues.md)
- [Roadmap Preliminar](docs/06-roadmap.md)
- [Trilhas de Aprendizagem](docs/07-learning-paths.md)
- [Orientações para Claude Code](CLAUDE.md)
- [Estrutura do relatório executivo no Notion](docs/11-estrutura-notion.md)
- [Relatório executivo canônico (origem da projeção para Notion)](docs/12-relatorio-executivo.md)
- [F1 — Fundação técnica (arquitetura, execução e evidências)](docs/35-f1-fundacao-tecnica.md)
- [F2.0/F2.A — Ambiente de testes, identidade e RLS](docs/43-f2-ambiente-testes-identidade-rls.md)

## Separação de fontes de verdade
- **GitHub é a fonte única e completa:** todas as tarefas, marcos, alterações de status, previsões, decisões, requisitos, documentação, execução e evidências devem estar registrados nele. Cada decisão possui uma única ficha Markdown canônica por responsável, com índice geral.
- **Notion é somente apresentação executiva:** ChatGPT/PM seleciona e resume marcos e resultados **já documentados no GitHub**; o relatório canônico também reside no GitHub. Atualizações de Claude/Marina devem chegar primeiro ao GitHub; qualquer atualização posterior no Notion é reflexo, jamais fonte primária.

## Regra de governança
Não tratar propostas ou hipóteses como requisitos aprovados. Decisões de negócio, orçamento e escopo precisam de aprovação do patrocinador e devem ser registradas no Decision Log.

## Segurança
Nunca versionar senhas, tokens, chaves, credenciais ou dados pessoais reais de alunos.
