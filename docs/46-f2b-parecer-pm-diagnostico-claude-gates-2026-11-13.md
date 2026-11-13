# F2.B — Parecer técnico da PM sobre diagnóstico do Claude (somente leitura)
**Projeto:** Privilège Plataforma · **Data:** 13/11/2026 · **Responsável:** PM/ChatGPT · **Status:** DIAGNÓSTICO RECEBIDO E REVISADO, PLANO CONDICIONAL; SEM AUTORIZAÇÃO DE IMPLEMENTAÇÃO

> **DECISÃO DA PM:** aceitar o relatório do Claude **como diagnóstico preparatório e fonte de riscos/estimativas**, não como validação integral de implementação nem escolha definitiva de arquitetura. A estratégia **A-lite (BFF server-only com tokens inacessíveis ao JavaScript)** é a hipótese preferida para uma **prova técnica reversível B1-0**, mas somente se Marina autorizar separadamente esse trabalho futuro. **Não iniciar B1-0, demais PRs da F2.B, F2.C/D ou produção agora.** A arquitetura, fornecedores, gastos, mudanças de parâmetros e exceções jurídicas continuam sujeitos aos gates explícitos.

## 1. Procedência, reconciliação e evidências verificadas pela PM
- O Claude entregou à PM um diagnóstico textual read-only, com comparação A-lite x SSR, sessões/JWT, GoTrue, MFA, auditoria, custo e estimativa de F2.B.1/F2.B.2; declarou não ter alterado repositório, instalado dependências ou executado serviços, e ter realizado 30 verificações adversariais. **A PM não presenciou o ambiente local; o cumprimento do read-only é sustentado pelo relatório do executor.**
- Baseline examinado pelo Claude: remoto **`aa1723339555d85cc176c1d93340aaf8fecd65bb`**, local **`81a87fc`**. A PM verificou que, antes deste parecer, o intervalo `aa17233...main` tinha **um único commit adicional alterando `docs/09-decisoes-matheus.md`** (confirmação de custos de Matheus informada por Marina), **sem alterações técnicas** nas fontes analisadas. Portanto não invalida o diagnóstico técnico; Claude **não precisa sincronizar ou executar código sem autorização**.
- Fontes locais da `main` confirmadas pela PM: `package.json` tem Next **16.4.3** e Supabase CLI **2.122.0** (comando de teste); `supabase/config.toml` mantém JWT **3600 s**, refresh rotation on/reuse **10 s**, senha mínima **6**, `otp_expiry=3600`, `double_confirm_changes=true`, cadastro público desativado, MFA TOTP desligado e sessão `timebox`/inatividade comentados. **Nenhum parâmetro foi alterado**.
- `src/modules/access/role-based-policy.ts` ainda exige `AuditSink` explícito e nega ações privilegiadas; `src/modules/access/audit.ts` só dispõe de `InMemoryAuditSink` para servidor, enquanto a migração da F2.A persiste grants/revokes por trigger. A tabela `audit_events` valida ação `^[a-z_]+\.[a-z_]+$`, resultado permitido/negado, campo `actor_db_role` e `object_id` UUID. A porta TS atual usa ação com `:`, `objectId` texto e não dispõe dos demais campos. **Há incompatibilidade de contrato que deve ser resolvida no futuro, não silenciosamente**.

## 2. Conclusões da revisão
| Tema | Parecer da PM | Próxima evidência exigida |
|---|---|---|
| **A-lite com cookies HttpOnly** | **Boa hipótese, NÃO solução provada.** `@supabase/ssr` documenta o modelo habitual com cliente do navegador e cookies legíveis pelo JS; usá-lo apenas no servidor com `httpOnly=true` é candidato a teste e manutenção própria. | PoC de login, refresh concorrente, logout, Server Actions, Route Handlers, proxy, `Set-Cookie` e cache, sem nenhum refresh/access token legível ao JS |
| **Revogação de JWT** | **Risco confirmado e crítico:** `signOut` não invalida o access JWT até `exp`; só a verificação pela DAL não protege chamadas diretas PostgREST/API. | Provar restrição no RLS/servidor com sessão válida e revogada, teste com JWT antigo ainda criptograficamente válido; inventariar **todas** as superfícies de dados, inclusive funções/RPC/Storage se usadas |
| **Sessão por papel** | Supabase hospedado oferece timebox/inatividade nativos em Pro+, mas sem distinção por papel; controles customizados podem evitar upgrade **com custo de código, banco, latência e manutenção**, não custo operacional comprovadamente zero. | Ensaiar clock, race, múltiplas sessões, inatividade, tempo absoluto, banco/conexões/índices e falha-fechada; determinar frequência de consulta e custo |
| **RLS de sessão ativa** | Proposta `session_is_live()` **não validada**: possível checagem de `session_id` contra estado do Auth via `SECURITY DEFINER`; exige modelo de privilégios, search_path vazio, segurança, escopo e desempenho. | Prova isolada em dados fictícios. **Não modificar as políticas F2.A agora**; testes atuais com JWT sintético sem `session_id` precisariam ser adaptados sem reduzir cobertura; minimizar trabalho de RLS por linha |
| **TOTP/AAL2** | TOTP é gratuito no Supabase; comentário antigo do `config.toml` sobre Pro está incorreto. A exigência de MFA para operações privilegiadas continua **diretriz aprovada**, mas sem conceder permissões a admin ou professores. | Testes com conta fictícia e política server/RLS e `aal2`; fluxo de inscrição e perda de fator exige projeto separado; alçadas/JUR-06 continuam bloqueadas |
| **Auditoria** | Diagnóstico identificou incompatibilidades reais entre `AuditSink` e tabela SQL; a ideia de gravação fora da transação revertida procede. Extender `audit_events` ou criar `security_events` é **alternativa**, não decisão. | ADR de contrato/privilege design/eventual migração aditiva, idempotência e trilha, minimização e anti-inundação; **retenção, leitura e expurgo não autorizados** |

## 3. Três incompatibilidades das diretrizes SEC, devolvidas a Marina (sem correção tácita)
### P1 — SEC-02, máximo de senha 128 caracteres
O GoTrue `master` define `MaxPasswordLength=72` e usa `len(password)` de Go, que conta **bytes UTF-8**, não caracteres. A versão da imagem empacotada no Supabase CLI 2.122.0 **ainda precisa ser testada**. O campo `minimum_password_length` também pode efetuar checagem por bytes — o mínimo de **12 caracteres** só estará garantido se houver validação consistente no servidor/BFF e no provedor, sem truncamento silencioso. **Não usar hash próprio como atalho**.
- **Recomendação da PM para decisão:** preservar mínimo de **12 caracteres Unicode** (sujeito ao tratamento de normalização e regras da implementação) e ajustar o máximo para **72 bytes UTF-8**, com explicação amigável e contagem validada, **apenas se confirmado na versão local**. Caso Marina queira realmente 128 caracteres, será necessário avaliar outro provedor/mecanismo e custos; essa alternativa **não está autorizada**.

### P2 — SEC-09/10, reset 20 min e ativação 30 min
O `supabase/config.toml` atual tem apenas `otp_expiry=3600`, compartilhado pelos fluxos relevantes do GoTrue. **Não presumir que simples `recovery_sent_at` no BFF faça o reset vencer aos 20 minutos se o cliente conseguir enviar o token diretamente ao endpoint público `/verify` do Auth**, que ainda o aceitaria até 30 min. A proteção deve existir em toda via possível.
- **Recomendação conservadora:** se não for demonstrado um controle inviolável por canal/provedor, **configurar 20 minutos como validade global de OTP** para reset e ativação, **alterando a diretriz SEC-10 de 30 para 20 min mediante decisão expressa**. Alternativa de manter 30/20 só com mecanismo seguro completo demonstrado e medição de custo, sem confiar em bloqueio de interface. **A PM não mudou a política.**

### P3 — SEC-11, limitações por IP+identificador, atraso e antienumeração
Os limites nativos do GoTrue não oferecem automaticamente o `5 falhas/15 min por IP+identificador` com backoff aprovado. Limitador próprio no BFF parece necessário, porém **pode ser contornado** se `/auth/v1/token` ou `/recover` continuam acessíveis diretamente ao usuário, com a chave/endpoint do projeto. Respostas neutras na camada BFF não neutralizam diferenças do endpoint direto.
- **Recomendação:** **manter a diretriz SEC-11 sem enfraquecê-la**, mas **não declarar atendimento até demonstrar a impossibilidade/mitigação de bypass** (proxy/gateway, proteção do endpoint, desenho de credenciais e controle de origem) e testar abuso distribuído, IP compartilhado e enumeração. A necessidade de infraestrutura/edge limit, plano ou outra arquitetura volta para análise de custos. **Não considerar o rate-limit do BFF suficiente por si só.**

## 4. Ajustes e riscos adicionais a tratar no PoC
1. **`@supabase/ssr` server-only não equivale a suporte oficial garantido para HttpOnly.** Verificar APIs e armazenamento de tokens no servidor, refresh com cookies HttpOnly, corrida de refresh entre abas/requisições, `proxy.ts`, invalidação e rollback. Cuidado com cache da CDN: uma resposta personalizada com `Set-Cookie` jamais pode ser cacheada e entregue a outro usuário.
2. **Auth e PostgREST diretos**: além da revogação de sessão, verificar se toda superfície (auth endpoints, REST, RPC, storage, fluxos anônimos) é mediada ou aplica verificação equivalente. Um JWT sem `session_id` não deve ser aceito por política que exige sessão ativa. **Evitar `service_role` para acessos de dados do usuário**.
3. **Escopo de privilégios e segurança do `SECURITY DEFINER`**: função em esquema não exposto, `search_path` restrito, `GRANT EXECUTE` mínimo, nunca aceitar `user_id`/UUID de terceiros como prova; basear no `auth.uid()` e `auth.jwt()` validados. Os dados de `auth.sessions` e eventuais registros de app devem ser restritos; teste de IDOR e de sessão não pertencente ao usuário.
4. **Falha de auditoria**: `RoleBasedPolicy` atualmente propaga falha de `AuditSink` quando nega; a decisão sobre bloquear **login legítimo** se a auditoria falhar não é equivalente a falhar fechado na autorização. PM recomenda manter negação de acesso em operações sensíveis sem log persistente confiável, mas requer decidir disponibilidade/autenticação sob falha da trilha, sem `NoopAuditSink` e sem alegar retenção jurídica.
5. **TOTP e administração**: custo zero do fator não cobre recuperação/atendimento; privilegiados seguem sem alçadas definidas, sem tela de inscrição MFA; não habilitar agora.
6. **Economia**: evitar confundir “sem preço de licença do TOTP” e “testes locais sem tarifa incremental” com “sistema em produção sem custo”. Contratos, domínio, hospedagem, SMTP, monitoramento, controle contra abuso, latência de RLS e esforço de desenvolvimento ainda precisam de orçamento.
7. **Plano de testes**: incluir versões do GoTrue empacotado, senhas com UTF-8 de 1/2/3/4 bytes e limites exatos, OTP expirado/reutilizado e token direto, bloqueio sob login correto e IP compartilhado, session replay com JWT antigo, cache/CDN, CSRF/Origin, base RLS F2.A preservada e testes artificiais atuais sem `session_id`.

## 5. Estimativas consolidadas — NÃO aprovam cronograma ou mão de obra
| Lote | Claude (execução sem revisão PM) | Estado |
|---|---:|---|
| **F2.B.1**, núcleo seguro e testes | **8–11 dias úteis** | Estimativa preliminar **revisada**, substitui previsão original F2.B inteira de 3–4 dias |
| **F2.B.2**, ativação/troca/recuperação com fixtures | **4–5 dias úteis** | Condicionado ao escopo dos fluxos e gates |
| **F2.B.2**, com fontes reais | **5–7 dias úteis** | **Não autorizada**; contratos, SMTP, usuários e menores pendentes |
| **F2.B total** | **12–18 dias úteis** | Parcial, sem revisão PM, custos, incidentes e possíveis +2–3 dias de BFF completo se A-lite falhar |
| **F2.C/D históricas** | **5–7 + 2–3 dias úteis** | Permanecem preliminares e NÃO autorizadas |
| **F2 restante B+C+D** | **19–28 dias úteis** | Soma apenas das estimativas de execução, **não** cronograma comprometido, exclui PM e riscos |

**O menor trabalho de engenharia candidato, se Marina autorizar no futuro, é o PR B1-0 de prova técnica (1–1,5 dia útil) — não implementar produto nem abrir login público, não mudar direitos comerciais ou alçadas.** Antecedentes: docs/44-45, decisão de arquitetura condicionada, prova do GoTrue local e gates de segurança. Essa autorização **ainda não existe**.

## 6. Gatilhos e quadro financeiro — competência e limitações
- Marina informou e confirmou que **Matheus aprovou os custos**; registro canônico em [docs/09 — MAT-011](09-decisoes-matheus.md). **Não foi entregue ainda à PM o orçamento discriminado/serviços/cotas aprovado**, portanto isso **não prova** que Supabase Pro, SMTP, Vercel, segurança adicional ou contratação possam ser ativados sem novo gate.
- **Sem custo de serviço externo durante testes locais** com CLI, Mailpit e contas fictícias. **Há custo de trabalho/infra/tempo**, inclusive CI conforme quotas, não mensurado nesta etapa. Não afirmar “custo total zero”.
- Supabase Pro para timebox/inatividade seria **opcional somente caso a aplicação demonstre controles equivalentes**; caso contrário, não é opcional sob diretrizes aprovadas. Fonte oficial: https://supabase.com/docs/guides/auth/sessions.
- TOTP gratuito segundo https://supabase.com/docs/guides/auth/auth-mfa/totp. SMTP padrão não é de produção segundo https://supabase.com/docs/guides/auth/auth-smtp. Abuso de endpoint e encaminhamento de IP via gateway devem ser validados com documentação atual: https://supabase.com/docs/guides/auth/rate-limits.
- Requisito de consentimento/menores (JUR-02/11), auditoria/retensão (JUR-07/08/09), alçadas (JUR-06) e direitos comerciais/ativação permanecem pendentes.

## 7. Matriz de próximos gates (não há autorização tácita)
| Gate | Quem valida | Decisão/resultado esperado | Estado |
|---|---|---|---|
| **G-SEC02** | Marina | 72 bytes de senha (com mínimo 12 caracteres) vs novo provedor | **ABERTO** |
| **G-SEC09/10** | Marina | 20 min global seguro vs 20/30 com garantia demonstrada | **ABERTO** |
| **G-SEC11** | PM/Claude + Marina se alterar custo/arquitetura | Plano de mitigação real de bypass e limitação; manter o alvo | **ABERTO** |
| **G-ARCH** | PM revisa → Marina aprova | A-lite como arquitetura condicional **somente após prova** ou alternativa BFF completo | **ABERTO** |
| **G-REVOKE** | PM/Claude, Marina para escopo de controles | RLS+DAL e revogação real comprovada em todos os dados sensíveis | **ABERTO** |
| **G-AUDIT** | JUR-07/08/09 + Marina | Mínimo de campos, leitura, base legal, retenção/expurgo e estratégia de persistência | **ABERTO** |
| **G-COST** | Marina e Matheus dentro de alçada e quadro aprovado | Conciliação MAT-011 e custos incrementais/fornecedores | **ABERTO** |
| **G-B1-0** | Marina **em autorização separada** | Executar PoC específica, apenas em branch/PR após aprovação de escopo | **NÃO AUTORIZADO** |
| **F2.B.1/B.2**, demais fases | Marina **em autorizações separadas** | Implementar depois de resultado do PoC, análise PM e gates necessários | **NÃO AUTORIZADAS** |

## 8. Referências externas oficiais
- Supabase [User sessions](https://supabase.com/docs/guides/auth/sessions), [Signout](https://supabase.com/docs/guides/auth/signout), [SSR advanced guide](https://supabase.com/docs/guides/auth/server-side/advanced-guide), [SSR server client](https://supabase.com/docs/guides/auth/server-side/creating-a-client), [Rate limits](https://supabase.com/docs/guides/auth/rate-limits), [TOTP MFA](https://supabase.com/docs/guides/auth/auth-mfa/totp), [SMTP](https://supabase.com/docs/guides/auth/auth-smtp).
- Supabase Auth upstream [`internal/api/password.go` no `master`](https://github.com/supabase/auth/blob/master/internal/api/password.go) — **não confundir `master` com versão empacotada do CLI**, verificar teste real.
- Next.js [Authentication](https://nextjs.org/docs/app/guides/authentication), [Proxy](https://nextjs.org/docs/app/getting-started/proxy).
- Repositório [docs/44](44-f2b-plano-preparatorio-autenticacao-sessoes-gate-2026-11-13.md), [docs/45](45-f2b-proposta-parametros-seguranca-para-aprovacao-2026-11-13.md), [Issue #7](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/7).

**Síntese da PM:** diagnóstico concluído e tecnicamente útil; **arquitetura A-lite é candidata, não aceita em definitivo**. Necessário resolver **G-SEC02**, **G-SEC09/10**, mitigar endpoint direto e definir o escopo de **G-B1-0** antes de solicitar autorização de código. **Nenhuma fase nova autorizada.** GitHub fonte canônica, Notion somente extrato executivo.
