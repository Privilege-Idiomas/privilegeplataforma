# F2.0 / F2.A — Ambiente de testes, identidade e RLS
**Data:** 13/11/2026 · **Executor:** Claude Code · **Issue:** [#7](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/7) · **Ordem:** [docs/42](42-f2-ordem-execucao-lote-0-a-2026-11-13.md)
**Status:** **EM VALIDAÇÃO** — entregue em PR para revisão PM/Marina; **não aceito**. F2.B, F2.C, F2.D e F3–F8 **não iniciadas**.

## F2.0 — Ambiente de testes e CI

### Preparação verificada
- `main` local limpa, 0 commits à frente / 22 atrás de `origin/main` → sincronizada por **fast-forward** (`git merge --ff-only`). Branch da F1 preservada.
- Ambiente do executor sem Docker/Colima/Podman. **Nenhum software foi instalado no sistema**; a integração com Supabase real roda no runner do GitHub (Docker incluso, gratuito em repositório público).

### Testes de banco em dois backends
A mesma suíte (`tests/db/`) roda em:

| Modo | Onde | Como |
|---|---|---|
| **pglite** (padrão) | local e job `check` | PostgreSQL WASM com emulação mínima do Supabase: papéis `anon`/`authenticated`/`service_role`, grants padrão do schema `public` e *stub* de `auth.users` + `auth.uid()` (mesma definição do Supabase). Aplica migrações e seed a partir dos arquivos. |
| **supabase** | job `db-integration` | Supabase local **real** (`supabase start`: Postgres, Auth, PostgREST, Kong); conexão via `SUPABASE_DB_URL`. Testes da API REST rodam apenas aqui. |

Cada caso que altera dados roda numa transação **sempre revertida** (`inTransaction`/`asRole`/`asUser` em `tests/db/support.ts`), e a troca de usuário reproduz o PostgREST: `request.jwt.claims` + `SET LOCAL ROLE authenticated`. O teste `environment.test.ts` confirma que a emulação se comporta como o Supabase real (papéis, `auth.uid()` para usuário e anônimo, reversão das transações).

### Jobs de CI
| Job | Conteúdo |
|---|---|
| `check` (F1, inalterado) | lint, format, typecheck, testes (modo pglite), build |
| `db-integration` (novo) | `supabase start` sem serviços desnecessários (realtime, storage, imgproxy, mailpit, studio, edge runtime, logs, pooler) → aplica migrações + seed → `npm run test:db:supabase`. Telemetria do CLI desativada; chaves locais mascaradas no log |
| `e2e` (novo) | build + `next start`; Playwright com o **Chrome do runner** (sem download de navegador), desktop e celular (Pixel 7) |

### Smoke e2e + acessibilidade (`e2e/smoke.spec.ts`)
- Rotas `/`, `/cursos`, `/entrar`: HTTP 200, título, **sem erros de console** e **sem rolagem horizontal**; 404 próprio; cabeçalhos de segurança da F1.
- **axe (WCAG 2.1 A/AA):** reprova qualquer violação grave ou crítica, exceto duas **pré-existentes da UI provisória da F1**, listadas de forma explícita e estreita (regra + seletor):

| Violação | Onde | Detalhe |
|---|---|---|
| `color-contrast` | `.text-accent` (rótulos dourados) | `#b08d3c` sobre `#fff`/`#fbfaf7`: 2,99–3,12:1 (mínimo 4,5:1) |
| `label-content-name-mismatch` | link do logotipo | `aria-label` não contém o texto visível "Privilège Idiomas" |

Não corrigidas porque alterar UI é escopo da **F2.C** (não autorizada), que substituirá esta interface pelo design D1 R2. Remover as exceções ao entregar a F2.C.

### Novas dependências (somente desenvolvimento, gratuitas)
| Pacote | Licença | Uso |
|---|---|---|
| `pg` + `@types/pg` | MIT | conexão ao Postgres do Supabase real nos testes |
| `@playwright/test` | Apache-2.0 | smoke e2e |
| `@axe-core/playwright` | MPL-2.0 | varredura de acessibilidade |

Nenhuma dependência de execução foi adicionada. Custo: R$ 0 (Actions gratuito em repositório público).

### Comandos
```bash
npm test                 # unidade + banco (pglite)
npm run test:e2e         # smoke e2e + axe (requer Google Chrome instalado)
npm run test:db:supabase # suíte de banco; usa Supabase real se SUPABASE_DB_URL estiver definido
```
Opcional, com runtime de contêiner local (ex.: Colima): `npm run db:start`, depois exportar `SUPABASE_DB_URL`, `SUPABASE_API_URL`, `SUPABASE_ANON_KEY` e `SUPABASE_JWT_SECRET` a partir de `npx supabase@2.122.0 status -o env` e rodar `npm run test:db:supabase`.
