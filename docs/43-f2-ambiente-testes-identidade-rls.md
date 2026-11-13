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

## F2.A — Identidade, papéis, vínculos e RLS

### Modelo (migração `20261113000000_f2a_identidade_papeis_rls.sql`, aditiva)
| Tabela | Conteúdo | Observações |
|---|---|---|
| `profiles` | 1:1 com `auth.users`; **só nome de exibição** | Sem e-mail, documento, telefone ou data de nascimento no schema público; e-mail fica em `auth` (não exposto pela API) |
| `user_roles` | `student` / `payer` / `teacher` / `admin`, com `granted_at/by` e `revoked_at/by` | Histórico preservado: imutável exceto a revogação; sem reativação nem exclusão; no máximo 1 papel ativo por tipo |
| `account_links` | vínculo **pagador → aluno** (`kind = payer`) | Exige pagador e aluno com papéis ativos; sem transferência, reativação ou exclusão. `kind = guardian` existe só para ser **rejeitado** |
| `audit_events` | eventos mínimos de P-04 §3 | Append-only (nem o dono altera ou apaga); sem senhas, tokens, e-mails ou documentos; ninguém lê pela API |

Identidade está **separada** de direitos comerciais, matrícula e progresso, que não existem nesta fase. Catálogo da F1 e rota `/cursos` intocados.

### Políticas e privilégios (nega por padrão)
- Os grants amplos padrão do Supabase são **revogados** nas tabelas novas. Ficam apenas `SELECT` em `profiles`/`user_roles`/`account_links` e `UPDATE (display_name)` em `profiles` para `authenticated`. `anon` não tem nenhum acesso.
- **Perfil:** cada usuário lê e edita (só o nome) o **próprio** perfil.
- **Papéis:** cada usuário lê só os próprios papéis. **Não há política nem privilégio de escrita** → autopromoção impossível pela API.
- **Vínculos:** visíveis às duas pontas só enquanto o vínculo **e** o papel correspondente estão ativos. Revogar qualquer um encerra a visibilidade.
- **Admin:** o papel existe, mas **não concede leitura de terceiros** até as alçadas serem decididas (DEC-071, B-P04-01/02, JUR-06).
- **Professor:** sem modelo de atribuição (F6) → só os próprios dados.
- **Pagador ≠ acesso acadêmico:** o vínculo não dá leitura do perfil nem dos papéis do aluno.
- **Menores/responsáveis:** trigger rejeita `guardian` para **qualquer papel, inclusive `service_role` e dono das tabelas**, até JUR-02/JUR-11 e decisão de Marina. Desbloquear exigirá nova migração aprovada.
- **Auditoria por trigger:** `role.grant`, `role.revoke`, `link.create`, `link.revoke`, com `auth.uid()` e o papel do banco que executou.
- Funções auxiliares no schema `private` (fora da API); `anon` não tem acesso.

### Servidor (TypeScript)
- `RoleBasedPolicy` (`src/modules/access/role-based-policy.ts`):
  - nega por padrão;
  - permite só ações sobre o **próprio** perfil e os próprios papéis;
  - ações privilegiadas (conceder/revogar papel, criar vínculo, ler auditoria ou perfis de terceiros) são **negadas para todos**, com motivo `pending_authority`;
  - toda negação vai para uma porta `AuditSink`.
- `DenyAllPolicy` continua como padrão. A política é usada a partir da F2.B, quando houver sessão real. Negações não podem ser gravadas pelo banco dentro de uma transação revertida; por isso, o registro de negações fica no servidor.

### Testes (contas fictícias do seed, `@example.invalid`, sem senha utilizável)
| Arquivo | Modos | Cobertura |
|---|---|---|
| `tests/db/identity.test.ts` (37) | pglite + supabase | acesso próprio; IDOR; anônimo; edição só do nome; autopromoção negada para os 6 usuários; papel imutável/sem reativação/sem exclusão; admin sem alçada; pagador com 2 alunos; aluno só vê o próprio vínculo; pagador não lê perfis/papéis dos alunos; terceiros sem vínculos; transferência bloqueada até para `service_role`; vínculo exige papéis; responsável legal bloqueado para `service_role` e dono; nenhuma coluna de idade; revogação de vínculo e de papel encerra acesso; auditoria registrada, append-only, ilegível, sem colunas sensíveis; schema `private` fechado |
| `tests/db/api-identity.test.ts` (10) | só supabase | os mesmos riscos **pela API REST**, com JWT HS256 assinado com o segredo local gerado pelo `supabase start`: IDOR por filtro na URL, PATCH em terceiro, POST de autopromoção (403), pagador × perfis, vínculo de responsável, auditoria (403), anônimo, token forjado (401) |
| `src/modules/access/role-based-policy.test.ts` | unidade | própria × alheia, anônimo, ações privilegiadas negadas para os 4 papéis, admin sem alçada, ação/tipo desconhecidos, auditoria só de negações |
| `tests/db/migrations.test.ts` / `rls.test.ts` (F1) | pglite + supabase | atualizados para listar **exatamente** as 9 tabelas e as 5 políticas existentes; catálogo segue sem políticas e sem acesso |

**Provas de mutação** (migração temporária, removida em seguida; não versionada):

| Mutação | Testes que falharam |
|---|---|
| M1 — perfil visível a todos | 4 |
| M2 — autopromoção liberada (grant + política de INSERT) | 6 |
| M3 — pagador lê perfis dos alunos vinculados | 2 |
| M4 — bloqueio de responsável legal removido | 5 |

A M2 revelou uma asserção fraca: o teste aceitava qualquer "permission denied", e a inserção estava sendo barrada pelo trigger de auditoria. As asserções agora exigem a **tabela exata** (`permission denied for table user_roles`, etc.).

### Pendências para a PM / Marina (defaults conservadores já aplicados; não bloqueiam este lote)
1. **Pagador ver o nome dos alunos vinculados?** Hoje não vê; só o vínculo. A tela de conta do pagador (F2.C) pode precisar disso.
2. **Alçadas de admin** e equivalência com os grupos G1–G5 (DEC-071, B-P04-01/02, JUR-06): hoje o admin não tem nenhum poder adicional.
3. **Retenção e leitura da auditoria** (JUR-08, B-P04-04): hoje ninguém lê e nada é apagado.
4. **Menores:** nenhum atributo de idade é armazenado. A forma de identificar menor (e se haverá coleta de data de nascimento) depende de JUR-02/11.
5. **UI provisória da F1** tem 2 violações de acessibilidade (seção F2.0), a resolver na F2.C.

### Riscos e limitações
- O *stub* de `auth` no PGlite não reproduz GoTrue. Por isso, os mesmos testes rodam no Supabase real no CI.
- As contas de seed não têm senha nem tokens de confirmação. Na F2.B, o seed de usuários de login deverá ser revisto conforme o fluxo do GoTrue.
- `FORCE ROW LEVEL SECURITY` não aplicado: o dono das tabelas (migrações/seed) ignora RLS, mas os triggers de bloqueio valem para ele.
- O papel de banco usado pelo servidor na F2.B (preferir JWT do usuário a `service_role`) será definido nessa fase.

### Estimativa restante da F2 (preliminar, não aprovada)
F2.B 3–4 · F2.C 5–7 · F2.D 2–3 dias úteis. Total da F2 mantido em **13–18 dias úteis**. F2.0 + F2.A executadas dentro da janela prevista (0,5–1 + 2–3).
