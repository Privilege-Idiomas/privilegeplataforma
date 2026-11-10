# F1 — Fundação técnica: arquitetura, execução local e evidências
**Data:** 2026-11-10 · **Executor:** Claude Code · **Issue:** [#6](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/6) · **Branch:** `f1/fundacao-tecnica`
**Status:** **EM VALIDAÇÃO** — parecer técnico favorável da PM (10/11) com verificações complementares atendidas nas seções 9–13; **aceite formal pendente**. F2–F8 não iniciadas.

## 1. O que a F1 entrega
| Item | Onde |
|---|---|
| Next.js 16.4.3 (App Router) + React 19 + TypeScript `strict` (+ `noUncheckedIndexedAccess`) | `package.json`, `tsconfig.json`, `next.config.ts` |
| Tailwind CSS v4 com tokens de identidade **provisória** (sem logotipo aprovado no repositório) | `src/app/globals.css` |
| Layout responsivo navegável: Início, Cursos (catálogo fictício), Entrar (placeholder da F2), 404, `/api/health` | `src/app/`, `src/components/` |
| Módulos de domínio desacoplados com interfaces (ports) e adaptadores seguros | `src/modules/{catalog,access,payments,scheduling}` |
| Esquema inicial versionado (Supabase CLI) + seed 100% fictício | `supabase/migrations/`, `supabase/seed.sql`, `supabase/config.toml` |
| Testes (Vitest + Testing Library + PGlite) e CI (GitHub Actions) | `src/**/*.test.ts(x)`, `tests/db/`, `.github/workflows/ci.yml` |
| `.env.example` sem credenciais | `.env.example` |
| Screenshots locais | `docs/evidencias/f1/` |

## 2. Estrutura
```
src/
  app/                 rotas (App Router) — apresentação apenas
  components/          layout e UI base (ui/ = primitivos)
  lib/env.ts           leitura de variáveis PÚBLICAS de ambiente
  modules/
    catalog/           curso → módulo → aula; trilhas referenciam cursos (sem duplicar)
    access/            AuthProvider (anônimo) + AuthorizationPolicy (nega tudo)
    payments/          PaymentGateway: Disabled (padrão, recusa tudo) e Mock (testes)
    scheduling/        VideoConferenceProvider: Disabled (padrão) e Mock (.invalid)
supabase/
  config.toml          stack local (signup, realtime e vetores desativados)
  migrations/          SQL aditivo, sem DROP/TRUNCATE/CASCADE
  seed.sql             dados [FICTÍCIO], espelhados em src/modules/catalog/fixtures.ts
tests/db/              aplica migrações + seed em PostgreSQL (PGlite) e valida
```
**Regra de dependência:** `app/` e `components/` importam `modules/`; módulos não importam `app/`. Cada porta tem um adaptador padrão **desativado** — trocar de fornecedor = novo adaptador, sem mexer em regras.

## 3. Banco de dados (estrutura inicial)
- Tabelas: `courses`, `course_modules`, `lessons`, `learning_paths`, `learning_path_courses`.
- Sem pessoas, perfis, direitos, planos, preços, pagamentos, agenda, avaliações ou progresso (fases seguintes).
- **RLS habilitado em todas as tabelas, sem políticas** → negado por padrão para `anon`/`authenticated` até a F2. Detalhe do que foi testado na seção 9.
- FKs `ON DELETE RESTRICT`; posições únicas por pai; `slug` validado; `updated_at` por trigger.
- Testes automatizados verificam: nome dos arquivos de migração, ausência de comandos destrutivos, tabelas esperadas, RLS sem políticas, ausência de colunas de dados pessoais, restrições, sincronia seed × fixtures e marcação `[FICTÍCIO]`.

## 4. Execução local
Pré-requisito: Node.js ≥ 22.12 (CI usa Node 24 LTS, ver `.nvmrc`).
```bash
npm install          # instala dependências
npm run dev          # http://localhost:3000
npm run check        # lint + format:check + typecheck + test
npm run build        # build de produção local
```
| Script | Função |
|---|---|
| `lint` | ESLint (regras Next.js + TypeScript; estilo delegado ao Prettier) |
| `format` / `format:check` | Prettier (com ordenação de classes Tailwind) |
| `typecheck` | `next typegen` + `tsc --noEmit` |
| `test` / `test:watch` | Vitest (unidade, componentes e migrações SQL em PGlite) |
| `db:start` / `db:stop` / `db:reset` | **Opcional.** Supabase local completo via CLI (`supabase@2.122.0`); **requer Docker**. `db:reset` recria apenas o banco **local** e aplica migrações + seed |

Nenhuma variável de ambiente é necessária na F1. Para personalizar, copie `.env.example` para `.env.local` (ignorado pelo Git).

## 5. Escolhas técnicas desta fase
**Aceitas pela PM para a F1 na revisão do PR #14 (10/11/2026):** npm, Vitest, Testing Library, PGlite, fontes provisórias e cabeçalhos básicos.
Escolhas de ferramenta dentro da stack aprovada, reversíveis e sem custo:
1. **npm** (lockfile `package-lock.json`) — já instalado com Node; pnpm não necessário.
2. **Next.js 16.4.3** — release com mais de 2 semanas; padrões do template (`cacheComponents`, `partialPrefetching`) mantidos.
3. **Vitest + Testing Library** — recomendados pela documentação do Next.js.
4. **PGlite** para validar SQL sem Docker (local e CI). Limite: não reproduz o schema `auth`/extensões do Supabase; políticas RLS com `auth.uid()` (F2) precisarão de Supabase local ou Postgres de CI.
5. **Fontes do sistema** (sem Google Fonts) — nenhuma chamada externa em build/execução.
6. **Cabeçalhos de segurança básicos** e `robots: noindex`. CSP completa fica para homologação.
7. **Autorização deny-by-default** e adaptadores de pagamento/videochamada **desativados por padrão**, sem leitura de variáveis que possam ativá-los.

## 6. Custos (DEC-032)
- **Implantação:** apenas horas de execução/revisão (não monetizadas aqui).
- **Fixo mensal:** R$ 0 de serviços — nenhum serviço contratado. GitHub Actions sem custo de minutos por o repositório ser **público** (se ficar privado, passa a consumir a cota do plano GitHub da organização — verificar antes).
- **Variável por aluno:** inexistente (sem produção).
- **Docker Desktop** (opcional, para `db:start`): licença gratuita somente para organizações pequenas segundo os termos da Docker; alternativas gratuitas (Colima, OrbStack para uso pessoal) — **verificar enquadramento antes de adotar**.

## 7. Riscos e limitações conhecidos
- `npm audit`: 7 alertas **moderados** (ReDoS em `minimatch`), só em ferramentas de desenvolvimento — análise completa e acompanhamento na seção 10.
- Supabase local **não foi executado** neste ambiente (sem Docker); `config.toml` foi gerado pelo CLI oficial e as migrações foram validadas em PGlite.
- Screenshots de celular foram capturados com 500 px (largura mínima do Chrome headless), abaixo do breakpoint `sm` (640 px).
- Identidade visual é placeholder; substituir quando houver logotipo/manual aprovados.

## 8. Proposta para F2 (não iniciada; depende de aceite da F1 e liberação expressa)
**Estimativa: 7–10 dias úteis**, condicionada a:
- PM confirmar as regras aplicáveis de `docs/19-p02-jornadas-identidade-contas.md` e `docs/21-p04-matriz-permissoes-seguranca.md` (método de login, vínculo pagador/aluno, proteção de menores) sem itens REVISAR/SEM RESPOSTA bloqueantes;
- ambiente com Docker (ou equivalente) para Supabase Auth local; no CI, Supabase CLI em runner do GitHub (gratuito em repositório público).
Escopo técnico previsto: adaptador Supabase Auth, tabelas de perfis/vínculos sem dados reais, políticas RLS por perfil com testes negativos, guarda de autorização no servidor, telas de login/cadastro em ambiente local com usuários fictícios.

## 9. RLS para `anon` e `authenticated` — o que foi testado e o que depende da F2
*(Adicionado em 10/11/2026 a pedido da PM na revisão do PR #14.)*

**Conclusão:** com a configuração atual, `anon` e `authenticated` **não leem nem escrevem nenhuma linha** das 5 tabelas, mesmo tendo os privilégios de tabela que o Supabase concede por padrão. A configuração é segura para a F1.

**Efetivamente testado** (`tests/db/rls.test.ts`, PostgreSQL 17 via PGlite, executado local e no CI):
| Verificação | Como |
|---|---|
| Emulação fiel das permissões do Supabase | Papéis `anon`, `authenticated` (NOINHERIT) e `service_role` (BYPASSRLS) criados **antes** das migrações, com `ALTER DEFAULT PRIVILEGES ... GRANT ALL` em tabelas/funções/sequências do `public`, como faz o Supabase. Teste de pré-condição confirma que ambos têm SELECT/INSERT/UPDATE/DELETE nas 5 tabelas — logo, **somente o RLS** os bloqueia. |
| Leitura negada | `SET ROLE anon`/`authenticated` → `count(*)` = 0 em cada tabela, com seed presente (3 cursos visíveis ao dono). |
| Inserção negada | INSERT com linha válida em cada tabela → erro `row-level security`. |
| Alteração/exclusão negadas | UPDATE e DELETE em cada tabela → 0 linhas afetadas. |
| Teste consegue falhar | Prova de mutação: política temporária `FOR SELECT TO anon USING (true)` fez o teste falhar; arquivo removido em seguida (não versionado). |
| Função `set_updated_at` | Não pode ser chamada diretamente (função de trigger) — sem superfície RPC. |
| Limite documentado | `service_role` **ignora** RLS (comportamento do Supabase). Nenhuma chave `service_role` existe na F1; quando existir, apenas no servidor, nunca `NEXT_PUBLIC_`. |
| Estático | `relrowsecurity = true` nas 5 tabelas e `pg_policies` vazio no `public`. |

**NÃO testado na F1 / depende da F2:**
- Stack Supabase real (`supabase start`): PostgREST, GoTrue/Auth, JWT, Storage — não executada (sem Docker no ambiente do executor). A emulação cobre o banco; não cobre o caminho HTTP do Data API.
- Schema `auth`, `auth.uid()`, claims do JWT e qualquer **política** por perfil — não existem na F1.
- `FORCE ROW LEVEL SECURITY`: não aplicado; o dono das tabelas (`postgres`, usado em migrações) ignora RLS — avaliar na F2 junto com o papel usado pelo servidor.
- Exposição de schemas, views e funções `SECURITY DEFINER` futuras — revisar a cada migração.

## 10. Alertas do `npm audit` (7, todos moderados)
Origem única: **GHSA-g3hv-75wg-m249 / CVE-2026-118764** — "minimatch has potential denial of service via globparts amplification" (publicado em 30/10/2026). Afeta `minimatch >=7.0.0 <11.0.1`; o único caminho no projeto é `eslint-config-next → typescript-eslint → @typescript-eslint/typescript-estree → minimatch@10.2.6`. Os outros 6 alertas são os pacotes que dependem dele (contagem em cascata):

| # | Pacote | Versão instalada | Tipo | Motivo |
|---|---|---|---|---|
| 1 | `minimatch` | 10.2.6 | transitivo (dev) | vulnerabilidade original |
| 2 | `@typescript-eslint/typescript-estree` | 8.72.2 | transitivo (dev) | exige `minimatch ^10.2.2` |
| 3 | `@typescript-eslint/utils` | 8.72.2 | transitivo (dev) | depende de #2 |
| 4 | `@typescript-eslint/type-utils` | 8.72.2 | transitivo (dev) | depende de #2/#3 |
| 5 | `@typescript-eslint/parser` | 8.72.2 | transitivo (dev) | depende de #2 |
| 6 | `@typescript-eslint/eslint-plugin` | 8.72.2 | transitivo (dev) | depende de #3/#4 |
| 7 | `typescript-eslint` | 8.72.2 | transitivo (dev) | depende de #2/#5/#6 |

**Impacto:** baixo para o projeto. O ataque exige que um invasor controle o **padrão de glob** passado ao `minimatch`; aqui os padrões vêm só da configuração do ESLint escrita pela equipe. São ferramentas de **desenvolvimento**: `npm ls minimatch --omit=dev` retorna vazio, e as dependências de execução são apenas `next`, `react` e `react-dom`. Nada disso vai para o navegador nem para o servidor da aplicação. O pior cenário realista é um lint lento ou travado na máquina do desenvolvedor ou no CI.

**Por que não corrigido agora:** a correção existe só em `minimatch` 11.0.1+ (versão major, publicada em 27/10/2026), e `typescript-estree` 8.72.2 (a última) exige `^10`. `npm audit fix` não altera nada; forçar com `overrides` quebraria o contrato de versão do `typescript-eslint` sem teste do mantenedor.

**Acompanhamento:**
1. Revisar a cada PR de dependências e no início de cada fase (`npm audit`); se `typescript-eslint` publicar versão compatível com `minimatch` ≥ 11.0.1, atualizar em PR próprio.
2. Proposta (não ativada nesta PR, aguardando aceite): habilitar Dependabot no GitHub (gratuito) para alertas e PRs de segurança.
3. Gatilho de escalonamento: qualquer alerta **alto/crítico** ou que atinja dependência de execução (`--omit=dev`) bloqueia o aceite da fase até ser tratado.

## 11. Estratégia recomendada para testar Supabase Auth na F2
Objetivo: testar Auth e políticas RLS reais **sem contratar serviço** e sem depender de licença paga.

**Recomendação — três camadas:**
1. **Testes rápidos de políticas (sem Docker), em todo PR:** continuar com PGlite e adicionar um *stub* mínimo do schema `auth` (`auth.uid()`/`auth.jwt()` lendo `request.jwt.claims`, como faz o Supabase). Valida cada política por perfil com casos positivos e **negativos**. Risco: o *stub* difere do Supabase real → mitigado pela camada 2.
2. **Integração real no CI, em todo PR que toque auth/migrações:** job do GitHub Actions com `supabase start` (o runner Ubuntu já traz Docker Engine; gratuito em repositório público). Testa Supabase Auth real (cadastro/login de **usuários fictícios**, e-mails capturados pela caixa local do Supabase, sem envio externo), JWT real e PostgREST com RLS. Custo: R$ 0; só adiciona alguns minutos por execução para baixar imagens.
3. **Desenvolvimento local (opcional), com runtime de contêiner gratuito:**

| Opção | Licença / custo | Observação |
|---|---|---|
| **Colima** (recomendado para macOS) | Código aberto (MIT), gratuito | Leve, linha de comando; compatível com o Supabase CLI segundo a documentação do Supabase — **confirmar no piloto da F2** |
| Rancher Desktop | Código aberto (Apache 2.0), gratuito | Interface gráfica; alternativa para Windows/macOS |
| Podman Desktop | Código aberto (Apache 2.0), gratuito | Compatibilidade com o Supabase CLI menos madura; não recomendado como primeira opção |
| Docker Desktop | Gratuito apenas dentro dos limites de "pequena empresa" dos termos da Docker; acima disso, assinatura paga | Usar **somente** após verificar o enquadramento da Privilège |
| OrbStack | Gratuito só para uso pessoal; uso comercial pago | Não recomendado sem licença |

**Não recomendado:** usar um projeto Supabase na nuvem (mesmo no plano gratuito) para testes. Seria banco remoto e serviço externo, fora da autorização atual, e exigiria liberação expressa.

Sem Docker local, a F2 continua viável com as camadas 1 e 2 (o CI vira a fonte de verdade dos testes de integração).

## 12. Decisões para o Decision Log — classificação proposta
O Claude **não registrou** nenhuma decisão; a titularidade e o registro cabem a Marina/PM (docs/10). Classificação proposta:

**Arquiteturais — recomendo registro (status: proposta / a confirmar com Marina):**
| Item | Por que é arquitetural | Observação |
|---|---|---|
| **A1. Stack-base:** Next.js App Router + TypeScript + Tailwind + Supabase/PostgreSQL | Define a base de todas as fases | **Divergência a sinalizar:** `docs/04` ainda indexa **DEC-008 (Stack tecnológica) como SEM RESPOSTA**, enquanto docs/34 §9 registra a autorização de Marina de 09/11 para a F1 com essa stack. Sugestão: nova entrada vinculada à DEC-008, deixando explícito o alcance (F1 local) e o que segue aberto (hospedagem, vídeo, e-mail, produção). |
| **A2. Fornecedores externos atrás de interfaces substituíveis**, com adaptador padrão **desativado** (pagamento, videochamada; depois vídeo e e-mail) | Define como toda integração será construída e trocada | Já é diretriz de docs/34/CLAUDE.md; falta entrada própria no índice. |
| **A3. Modelo de autorização:** nega por padrão, verificação no servidor + RLS como segunda barreira; `service_role` só no servidor | Afeta todos os dados e fases; base de REQ de segurança e DEC-027 | Detalhamento por perfil será da F2. |
| **A4. Política de migrações:** versionadas pelo Supabase CLI, aditivas, sem `CASCADE`; mudança destrutiva só com aprovação | Governa a evolução e a integridade dos dados | Formaliza a regra 7 do CLAUDE.md no nível do banco. |

**Já coberto (não precisa de nova decisão):** curso, trilha e direito de acesso como conceitos separados; trilha referenciando cursos (CLAUDE.md §7 / requisitos).

**Operacionais — não registrar como decisão estratégica** (ficam neste documento e no PR): npm; Vitest/Testing Library; PGlite; ESLint/Prettier; Node 24 no CI; versão fixada do Next.js; fontes do sistema; cabeçalhos de segurança básicos; ajustes do `supabase/config.toml` local; telemetria; método de captura de screenshots.

## 13. Confirmação de escopo e dependências externas (verificado em 10/11/2026)
- **Somente F1:** rotas `/`, `/cursos`, `/entrar` (só texto informativo, sem formulário), `/api/health` e 404. Não há login, cadastro, sessão, direitos de curso, player, exercícios, avaliações, planos, preços, checkout, agenda nem painel administrativo. O banco tem só as 5 tabelas de catálogo.
- **Dependências de execução:** apenas `next`, `react`, `react-dom`. Nenhum SDK de Supabase, pagamento, vídeo, e-mail ou IA está instalado.
- **Chamadas externas no código:** nenhuma (`fetch`, URLs ou WebSocket). A única URL é `https://meet.example.invalid/...` no mock, que usa domínio reservado e não resolve.
- **Variáveis de ambiente:** só `NEXT_PUBLIC_APP_ENV` (rótulo da faixa). Pagamento e videochamada retornam sempre o adaptador desativado, sem ler variáveis.
- **Credenciais:** nenhuma versionada. O único arquivo de ambiente no Git é `.env.example`, sem valores sensíveis. As referências `env(...)` do `supabase/config.toml` são marcadores do modelo oficial e resolvem para vazio. Twilio e Apple estão desativados.
- **`supabase/config.toml`:** todos os serviços ativos são contêineres **locais** do `supabase start`. Nesta revisão foram desativados o runtime de Edge Functions (não há funções) e a chave de IA do Studio (DEC-030), além de cadastro, realtime e vetores, já desativados antes.
- **Telemetria (fluxo externo anônimo, sem dados de alunos):** o Next.js e o Supabase CLI enviam telemetria anônima por padrão. No CI, a do Next.js já está desligada (`NEXT_TELEMETRY_DISABLED=1`). Localmente, recomenda-se executar uma vez `npx next telemetry disable` e `npx supabase@2.122.0 telemetry disable` (ver README). A configuração global da máquina do desenvolvedor não foi alterada.
- **Deploy/serviços:** nenhum. Não existe configuração de Vercel, de banco remoto nem de secrets no GitHub. O workflow de CI tem apenas `contents: read`.
