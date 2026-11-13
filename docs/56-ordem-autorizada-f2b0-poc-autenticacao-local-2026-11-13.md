# ORDEM DE EXECUÇÃO AUTORIZADA — F2.B-0 — PoC técnica de autenticação em ambiente local

**Privilège Plataforma | 13/11/2026 | Direção: Marina | Executor: Claude Code | PM: ChatGPT**
**STATUS: AUTORIZADA PARA EXECUÇÃO LOCAL, EXCLUSIVAMENTE O LOTE F2.B-0.** Ainda não iniciada ou executada pelo Claude neste registro. Não é autorização de F2.B.1/B.2, F2.C/D, F3–F8, serviços reais, contratação, merge ou deploy.

## 1. Fonte e alcance da autorização

**Pergunta exata da PM a Marina:** “Você autoriza especificamente o Claude a executar a prova técnica F2.B-0, exclusivamente em ambiente local, com dados fictícios, testes de segurança e sem contratação, pagamentos reais, merge automático ou deploy?”

**Resposta expressa de Marina: “sim”.**

A autorização abrange **somente uma prova de conceito reversível e isolada** para obter evidências das incompatibilidades e riscos de autenticação do Supabase/Next.js já identificados. Não aprova arquitetura final, altera direitos comerciais nem libera novos lotes.

**Issue executiva específica:** [#21 — F2.B-0](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/21). **Issue-mãe:** [#7 — F2 identidade e acesso](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/7).

**Referências obrigatórias:** docs/45 (diretrizes SEC-01–19), docs/46 (parecer PM do diagnóstico Claude), docs/55 (pacotes prontos), docs/52 (DEC-086, eficiência permanente), `CLAUDE.md`, `AGENTS.md`, docs/41 (D1 R2 já aprovada; fora da PoC). **DEC-087 docs/53–54 estão em branch documental** `pm/fechamento-blocos-1a7-2026-11-13` e podem ser consultados em leitura como requisitos; **não misturar/mergir aquela branch nem presumir que seus arquivos já estão na main**.

## 2. Ambiente e operações permitidas

- Trabalhar **apenas em ambiente local de desenvolvimento** e dados completamente sintéticos e descartáveis, com Supabase CLI local, captura de e-mail local e testes/experimentos restritos.
- **ANTES** de começar: verificar `git status`, `git branch`, `git remote -v`, integridade do trabalho atual e `main` remota. É permitido `git fetch`/atualizar a cópia local **somente de modo seguro e sem descartar trabalho não commitado**; se houver divergência/alteração local importante, reportar e interromper em vez de forçar/resetar ou sobrescrever.
- Criar **branch/worktree isolada** a partir de uma base `main` confirmada, por exemplo `f2/poc-auth-seguranca-b0`; alterações de código/testes **somente para a PoC**. Não trabalhar diretamente na main.
- É permitido instalar/rodar **dependências e serviços locais necessários já previstos no repositório** e executar testes de desenvolvimento; dependência adicional gratuita só se justificada, necessária ao teste e documentada; não contratar serviços nem habilitar cobrança. **Não usar projetos Supabase hospedados** ou credenciais/dados reais.
- Configurações alternativas (JWT/OTP/MFA etc.) podem ser verificadas em **fixtures/configuração local temporária isolada** para comparação, com restauração e registro da variação. **Não declarar que os valores finais SEC foram escolhidos nem alterar a configuração canônica de produção como decisão aprovada.**
- Preparar testes e um relatório de evidências com status PASS/FAIL/UNTESTED e, se útil, **abrir uma PR em rascunho ou PR normal claramente rotulada “PoC experimental — não fazer merge”**, vinculada à Issue #21, para revisão da PM. Sem merge automático/manual pela iniciativa do Claude. Nenhum deploy.

## 3. Experimentos obrigatórios B1-01 a B1-07 (com limites explícitos)

| ID | Hipótese a provar/refutar localmente | Evidência necessária |
|---|---|---|
| **B1-01** | Comprimento de senha em GoTrue real do ambiente: mínimo 12 caracteres vs máximo SEC-02 de 128 caracteres, possível teto de 72 bytes UTF-8 | Testes ASCII/multibyte, pela rota direta; comportamento exato e erros; nunca truncar/hachear senha no app |
| **B1-02** | Tokens de recuperação 20 min vs ativação 30 min; `otp_expiry` global e bypass por rota direta `/verify` | Reprodutibilidade com tempo controlado; se alternativa global 20min for tecnicamente necessária, registrá-la somente como opção **pendente de aprovação** |
| **B1-03** | A-lite server-only vs SSR padrão: login, refresh, refresh concorrente, cookies HttpOnly/Secure/SameSite, Proxy, Server Actions/Route Handlers, CSRF/Origin, cache e logout | Capturas de headers e assertions sem expor segredos; provar se token aparece em JS, HTML, armazenamento ou endpoints indevidos |
| **B1-03b** | JWT anteriormente válido após revogação/logout, inclusive chamadas diretas PostgREST/API e RPC/Storage quando aplicáveis | Teste negativo de replay com sessão revogada, isolamento cross-account e `session_id` ausente/de outro usuário; hipótese de RLS restritiva demonstrada sem fragilizar F2.A |
| **B1-04** | Antiabuso e enumeração SEC-11/12 com GoTrue público: possível bypass do limitador BFF, limites/IP compartilhado e resposta de contas inexistentes | Testes controlados e limitados no serviço local; documentar limites da mitigação sem automação agressiva ou ataque a serviços externos |
| **B1-05** | TOTP/AAL2 em cenário falso de admin/professor, sempre sem concessão real de direitos | Verificar existência/ausência de fator e negação de operação privilegiada em caso inadequado; não ativar admin real |
| **B1-06/B1-07** | Compatibilidade auditoria TypeScript/SQL; eventos de falha, sessões 8h/24h comuns e 30min/8h privilegiadas; custo operacional/performance de checagem | Evidência ou lacunas honestas, desenho de segurança e possíveis alternativas, sem criar retenção definitiva nem liberar conta real |

**Escopo de teste, NÃO implementação de produto:** não construir agora tela de login, registro/ativação pública, recuperação final, custom auth persistente de produção, pagamento, direitos de curso, UI F2.C ou perfis de menores. Se for necessário simular um fluxo técnico, fazê-lo com harness/fixtures efêmeros, sem convertê-lo em funcionalidade comercial nem conferir privilégios reais.

## 4. Critérios de aceite e documentação do handoff

Entregar à PM, via Issue #21/PR e relatório sintético:
1. **Base Git / branch / alterações exatas**; listar dependências e configurações locais alteradas para teste.
2. Matriz de cada B1 com **PASS / FAIL / UNTESTED**, comando reprodutível e resultado concreto, incluindo versão instalada GoTrue/Supabase CLI, tipos de token/cookie, restrições e endpoints relevantes.
3. Comparação A-lite vs SSR padrão e recomendação técnica **não vinculante**, explicitando custos/complexidade e quando BFF completo se torna necessário; não afirmar que A-lite é seguro antes de prová-lo.
4. Resultados de suíte preexistente (F1 e F2.A/120 testes, se reproduzíveis), lint/typecheck/CI, e lista franca de testes não executados e por quê; sem segredo em output/log/PR.
5. Riscos P0/P1, incompatibilidades concretas, alternativas com critérios de decisão (SEC-02, SEC-09/10, SEC-11, revogação JWT, auditoria, TOTP/AAL2, conta/quotas), impacto esperado no cronograma integral.
6. Estimativa realista da PoC remanescente e dos futuros F2.B.1/B.2, distinguindo dias de engenharia, integração, revisão/QA e bloqueios externos.
7. Diff e PR para revisão; **parar após entregar a PoC** e solicitar à PM/Marina as decisões sobre arquitetura e configuração e eventual nova autorização de desenvolvimento.

A PM deverá revisar testes/segurança e registrar a aprovação do resultado técnico em ato próprio. **Somente Marina** aprova eventuais alterações de política, arquitetura/custo, merge e novo lote. Falha de experimento exige evidência, não permissões ampliadas.

## 5. Restrições invariantes e protocolo de eficiência DEC-086

- **Sem** contratos, assinaturas, Ultra, Supabase Pro, SMTP real, gateways, serviços pagos ou despesas; sem PII real, menor, contas de clientes/docentes reais, migrações em produção, deploy, alterações permanentes de SEC não aprovadas, merge ou push para main.
- Sem `git reset --hard`/force push ou descartar o trabalho local/branch existente; se ambiente divergir, parar e relatar.
- Um **Claude integrador**, auxiliares só se necessidade real e independência justificada; evitar repetir cinco agentes pesquisadores para produzir o mesmo diagnóstico. Resultados concretos de testes em vez de nova pesquisa bibliográfica longa.
- Preservar F1/F2.0/F2.A e migrações já aprovadas, inclusive isolamento RLS. Não usar `service_role` para burlar RLS de usuário final e chamar isso de sucesso.
- GitHub contém todo código, testes, decisões e evidências. Notion somente resumo executivo. Respeitar design PM D1 R2, não redesenhar.
- **Autorização limitada ao lote F2.B-0** é a novidade; todas as antigas proibições em `CLAUDE.md` e nas Issues permanecem válidas **exceto onde esta autorização posterior e específica permite executar a PoC local**.

## 6. Estado de outros lotes

| Lote | Situação após a autorização de Marina |
|---|---|
| **F2.B-0** | **AUTORIZADA PARA PoC LOCAL**, Claude aguardando acionamento |
| **F2.B.1** | **NÃO AUTORIZADA** |
| **F2.B.2** | **NÃO AUTORIZADA** |
| **F2.C / F2.D** | **NÃO AUTORIZADAS** |
| **F3–F8** | **NÃO AUTORIZADAS** |
| Compra Ultra, fornecedores, dados reais, produção, merge | **NÃO AUTORIZADOS** |
