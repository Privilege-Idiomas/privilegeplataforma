# F1 — Fundação técnica: arquitetura, execução local e evidências
**Data:** 2026-11-10 · **Executor:** Claude Code · **Issue:** [#6](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/6) · **Branch:** `f1/fundacao-tecnica`
**Status:** **EM VALIDAÇÃO** — entregue em PR para revisão; **não aceita** até registro de aceite de PM/Marina. F2–F8 não iniciadas.

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
- **RLS habilitado em todas as tabelas, sem políticas** → negado por padrão para `anon`/`authenticated` até a F2.
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

## 5. Escolhas técnicas desta fase (para aceite junto com o PR)
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
- `npm audit`: 7 alertas **moderados** (ReDoS em `minimatch`) somente na cadeia do ESLint (ferramenta de desenvolvimento, não vai ao navegador/servidor). Correção exige versão major não suportada pelo `typescript-eslint` atual; reavaliar em atualização futura.
- Supabase local **não foi executado** neste ambiente (sem Docker); `config.toml` foi gerado pelo CLI oficial e as migrações foram validadas em PGlite.
- Screenshots de celular foram capturados com 500 px (largura mínima do Chrome headless), abaixo do breakpoint `sm` (640 px).
- Identidade visual é placeholder; substituir quando houver logotipo/manual aprovados.

## 8. Proposta para F2 (não iniciada; depende de aceite da F1 e liberação expressa)
**Estimativa: 7–10 dias úteis**, condicionada a:
- PM confirmar as regras aplicáveis de `docs/19-p02-jornadas-identidade-contas.md` e `docs/21-p04-matriz-permissoes-seguranca.md` (método de login, vínculo pagador/aluno, proteção de menores) sem itens REVISAR/SEM RESPOSTA bloqueantes;
- ambiente com Docker (ou equivalente) para Supabase Auth local; no CI, Supabase CLI em runner do GitHub (gratuito em repositório público).
Escopo técnico previsto: adaptador Supabase Auth, tabelas de perfis/vínculos sem dados reais, políticas RLS por perfil com testes negativos, guarda de autorização no servidor, telas de login/cadastro em ambiente local com usuários fictícios.
