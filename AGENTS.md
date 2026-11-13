<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Privilège: DEC-086 — protocolo permanente obrigatório de eficiência do Claude Code

**Regra principal para todo agente e toda fase:** ler [docs/52 — diretriz permanente de eficiência](docs/52-diretriz-permanente-eficiencia-claude-execucao.md) e [CLAUDE.md](CLAUDE.md), respeitando autorizações de Marina e documentação canônica. **Um Claude integrador principal**; não iniciar cinco agentes de pesquisa por padrão. Agentes auxiliares somente por demanda para tarefas independentes, delimitadas e mensuráveis; justificar qualquer ampliação em tarefas críticas. Usar contexto mínimo relevante; consultar decisões aprovadas antes de pesquisar; evitar investigação/documentação repetitiva; entregar lotes pequenos autorizados, com testes negativos/CI, PR e evidências verificáveis, integrando continuamente.

**Segurança, RLS, autenticação, pagamentos, privacidade e operações concorrentes exigem revisão apropriada, mesmo com custo adicional de tokens.** Não confundir mocks/telas com entrega operacional. O integrador responde por contratos e conflitos de worktrees; agentes compartilham quotas do Claude. PM/ChatGPT centraliza decisões de execução e design, Marina mantém autorizações, GitHub registra tudo e Notion só espelha o executivo. O regime 15h/dia/Ultra é premissa do sprint, não uma autorização permanente nem garantia de capacidade. **F2.B–F8 sem autorização de implementação; o protocolo não libera código, contratação, gastos, merge, dados reais ou deploy por si só.**
