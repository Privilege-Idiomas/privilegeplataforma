# F2.B — Diretrizes técnicas de segurança aprovadas por Marina (sem autorização de execução)
**Privilège · 13/11/2026 · PM/ChatGPT · Status: DIRETRIZES TÉCNICAS APROVADAS por Marina · ARQUITETURA/CUSTOS/IMPLEMENTAÇÃO AINDA NÃO APROVADOS**

> **DECISÃO EXPRESSA MAIS RECENTE (13/11/2026):** Marina respondeu **“sim”** à pergunta exata: **“Você aprova esses parâmetros como diretrizes técnicas para a F2.B, mantendo a escolha final da arquitetura, os custos e a implementação sujeitos a aprovações separadas?”**. **SIM: parâmetros SEC-01–SEC-13, SEC-15, SEC-17–SEC-19 e controles de segurança correspondentes de SEC-14 aprovados como diretrizes para planejamento, não como configurações já implantadas;** valores de sessão e quotas sujeitos à verificação de capacidade do provedor, custo e arquitetura. **SEC-14 NÃO escolhe BFF vs SSR**, só registra requisitos de proteção; **SEC-16 NÃO aprova a hipótese de retenção de 30 dias, excluída da aprovação por depender de JUR-07/08/09**. A retenção, acesso e descarte reais de logs seguem pendentes. Confirmação técnica **não aprova plano Supabase Pro, fornecedor, serviço pago, ajustes em `supabase/config.toml`, código F2.B, branch, migração, UI ou deploy**. F2.0/F2.A já integradas. **F2.B.1/B.2, F2.C, F2.D e F3–F8 permanecem NÃO AUTORIZADAS.** Caso a arquitetura ou o plano disponível não possam cumprir um controle aprovado, documentar a incompatibilidade e retornar à Marina; **não suavizar silenciosamente os requisitos.**
>
> **HISTÓRICO:** o texto original desta proposta foi redigido antes do “sim” de Marina, em resposta ao “ok” que autorizava apenas elaborar o documento. Referências abaixo a “aguardando aceite dos parâmetros” são históricas e superadas pelo registro acima, **sem** alterar pendências jurídicas ou de viabilidade/custo.

## 1. Diretrizes técnicas aprovadas — implementação sujeita a gates
| ID | Controle | Diretriz aprovada para planejamento | Condição/restrição |
|---|---|---|---|
| SEC-01 | Autenticação cotidiana | **E-mail + senha**, sem login social ou magic link como alternativa regular | **Já aprovado** (DEC-039); não é nova escolha |
| SEC-02 | Senha | Mínimo **12 caracteres**, máximo operacional **128**, permitir gerenciadores/frases e Unicode seguro; sem regras artificiais de composição nem rotação periódica obrigatória | Validar suporte real do GoTrue, força, comprimento em bytes e tratamento de senha comprometida; apenas provedor faz hash, nunca código próprio |
| SEC-03 | Access token JWT | **30 minutos** | Balancear janela de exposição e carga de refresh; JWT pode continuar aceito após logout até expirar em recursos que não consultam estado de sessão |
| SEC-04 | Refresh token | **Rotação ligada**, refresh de uso único com janela de tolerância **10 segundos** para concorrência legítima | Alinhado ao `supabase/config.toml` atual; testar replay, offline e concorrência |
| SEC-05 | Inatividade | Proposta inicial para contas comuns: **8 horas** de inatividade, confirmada no servidor | O recurso nativo hospedado pode exigir **plano Pro**; se houver custo não aprovado, apresentar arquitetura alternativa efetiva e respectivo esforço, **não prometer controle inexistente** |
| SEC-06 | Duração absoluta | Proposta inicial para contas comuns: **24 horas** por sessão, mesmo com atividade contínua | Mesma dependência de plano/arquitetura de SEC-05; distinguir sessão de prazo do JWT |
| SEC-07 | Manter conectado | **Desligado** nesta fase; nenhuma opção de sessão estendida | Não armazenar token em `localStorage` por conveniência |
| SEC-08 | Logout e comprometimento | Logout revoga refresh/session conforme escopo; em suspeita de invasão, **invalidar todas as outras sessões**; revalidar sessão no servidor antes de operações protegidas | **Já aprovado quanto à revogação** na DEC-078.2; mecanismo de efeito imediato e acessos diretos à API precisam de prova end-to-end, não apenas chamar `signOut` |
| SEC-09 | Links de recuperação | **20 minutos**, uso único, invalidação após utilização; reenvio com descarte da credencial anterior quando o provedor garantir | Condicionado à capacidade GoTrue/local e diferenças entre ação OTP/PKCE; não simular segurança na UI |
| SEC-10 | Link de ativação | **30 minutos** e validação comprovada de controle do e-mail por ambas as rotas aprovadas | F2.B.2; não ativar direito sem evento de contratação confiável |
| SEC-11 | Proteção antiabuso | **Até 5 falhas/15 min por par IP+identificador** → espera progressiva até 15 min; **30 tentativas/5 min por IP** no login como teto inicial, revisável com testes; **reenvio: 60 s entre pedidos, teto 5/h por identidade/IP**, mensagens neutras | Não fazer bloqueio permanente por e-mail que permita negação de serviço; preservar controles nativos GoTrue e verificar limites suportados. Proposta inicial, não afirmar que `config.toml` já os implementa |
| SEC-12 | Resposta a conta existente/inexistente | Resposta externa equivalente em recuperação e confirmação; sem revelar identidade ou existência por payload/status; medir diferenças excessivas de tempo | DEC-039/078; proteção também no backend |
| SEC-13 | MFA | **TOTP obrigatório para professor e administrador antes de permitir ações privilegiadas; exigir `aal2` no servidor e RLS quando houver privilégios**. Para aluno/pagador: **opcional, em fase posterior** | Não habilitar login privilegiado real sem fluxo de inscrição/recuperação MFA aprovado; nenhuma nova permissão admin em F2.B.1 |
| SEC-14 | Cookies/sessão no Next.js | **Preferência: BFF/backend como fronteira de segurança**, cookies de sessão **HttpOnly, Secure, SameSite=Lax** em HTTPS, escopo mínimo e proteção CSRF/Origin em mudanças; **avaliar viabilidade antes do código** | `@supabase/ssr` padrão pode precisar de cookies visíveis ao JS para o refresh; **não afirmar que este modo entrega HttpOnly puro**. Exigir relatório comparativo BFF vs SSR supabase padrão e custo/complexidade antes de definir implementação |
| SEC-15 | Auditoria | Gravar eventos de segurança mínimos de autenticação, negação, revogação e alteração sensível com ID correlacionável, horário UTC, ator quando autenticado e categoria; **sem senha, JWT, reset token, e-mail em claro desnecessário, CPF, documento ou corpo sensível** | `audit_events` hoje só cobre triggers de F2.A; persistência operacional da aplicação ainda não existe. Sem interface de leitura ou autorização admin genérica |
| SEC-16 | Retenção e acesso de logs | **Proposta para discutir com jurídico:** janela operacional de **30 dias** para eventos simples de autenticação; eventos de incidentes por política própria. Em ambiente de teste, **descartar ao encerrar a execução** | **NÃO APROVADO**: JUR-07/08/09 e LGPD podem requerer prazo diferente; **não automatizar exclusão definitiva nem implementar retenção em produção** sem parecer/decisão |
| SEC-17 | Dados de teste e envio | **Somente contas fictícias `@example.invalid` e servidor de captura local de e-mail**; cadastro público continua desligado | Nada de SMTP externo, SMS, gateway, usuário/menor real, fornecedor pago, domínio de produção ou envio real |
| SEC-18 | Acesso comercial e menores | Login **não concede** direito a curso; papéis não autoatribuídos; `guardian` segue bloqueado no banco. Pagador não recebe dados acadêmicos por ser pagador | DEC-036/040–043, F2.A, JUR-02/11: não remover os bloqueios |
| SEC-19 | Admin/docente (limites especiais) | **Sessão privilegiada: alvo de inatividade 30 min e duração absoluta 8 h; operações sensíveis exigem autenticação recente/MFA** | **Candidato condicionado** a custos/infra/plano, alçada JUR-06 e definição de ações privilegiadas. Não habilitar acesso real de admin/docente até possível controle demonstrado |

### Por que esta configuração?
O JWT curto (30 min) limita o intervalo máximo **somente para recursos que dependem exclusivamente do JWT**; não dá revogação instantânea. Para cumprir a DEC-078 em operações protegidas, testar checagem de `session_id` contra estado confiável do servidor e evitar acesso direto client→PostgREST a recursos sensíveis sem uma regra equivalente. Os controles de timebox/inactivity da hospedagem Supabase podem exigir plano pago; não ocultar custo ou substituí-los por UI.

## 2. Compatibilidade real com o repositório em 13/11/2026 — apenas diagnóstico
**Não houve alteração no arquivo:** `supabase/config.toml` mantém:
- `[auth] jwt_expiry=3600` (**60 min**, diferente da proposta SEC-03 de 30 min);
- `enable_refresh_token_rotation=true`; `refresh_token_reuse_interval=10` (**alinhados** com SEC-04);
- `enable_signup=false` e `[auth.email] enable_signup=false` (**preservar**, cadastro aberto segue proibido);
- `minimum_password_length=6` (**abaixo da proposta SEC-02**); requisitos de composição vazios;
- `[auth.email] double_confirm_changes=true` (**alinhado com DEC-078.1**);
- `[auth.email] enable_confirmations=false` (**incompatível com ativação real de e-mail verificado; não mudar até escopo B.2**);
- `[auth.email] secure_password_change=false` (**reavaliar** antes do fluxo de troca de senha);
- `otp_expiry=3600` (**60 min**, diferente dos prazos propostos; verificar se tal parâmetro vale para reset/convite e ativação no GoTrue instalado);
- `[auth.rate_limit] sign_in_sign_ups=30` por 5 minutos por IP e `token_verifications=30`/5 min; `email_sent=2`/h no modo local. **SEC-11 tem camadas adicionais não cobertas automaticamente**;
- `[auth.mfa.totp] enroll_enabled=false, verify_enabled=false`; **não habilitar MFA real sem fluxos e decisão**;
- `[auth.sessions]` com `timebox` e `inactivity_timeout` **comentados**;
- `[local_smtp] enabled=true`, ambiente de captura **local sem envio real**.
**Todos os valores acima são estado observado, NÃO mudanças autorizadas.** Uma implementação posterior exigirá decidir que campos alterar, se o provedor realmente entrega os comportamentos, como evitar regressão nos 120 testes F2.A e quais custos decorrem.

## 3. Arquitetura e pontos de validação obrigatória antes do handoff ao Claude
1. **Escolha técnica:** apresentar comparativo de duas opções: **(A) backend-for-frontend com cookies HttpOnly e validação de sessão/CSRF**, ou **(B) padrão Supabase SSR com cookies geridos pelo SDK**, indicando diferença real de proteção contra XSS, refresh, SSR, possível acesso direto à API com JWT, esforço de engenharia e compatibilidade com F2.C futura. PM recomenda A para operações sensíveis, **sujeita ao diagnóstico do Claude e aprovação específica**, sem assumir que cabe nos 3–4 dias úteis históricos.
2. **Revogação:** definir verificação de sessão ativa por operação protegida e demonstrar que revogar sessões faz cessar autorização antes de expirar o JWT. Supabase documenta que JWTs previamente emitidos podem sobreviver à revogação; verificação de `auth.sessions` ou controle equivalente tem custo/complexidade. Se não for viável em todas as rotas, **bloquear publicação/acesso real** e sinalizar claramente a janela residual, sem chamar a política de “imediata”.
3. **MFA:** `aal2` somente para ações autorizadas após decisão de alçadas; não adicionar políticas RLS que impeçam todos os usuários de ler seus próprios dados por engano. Profissionais sem MFA devem receber **acesso negado a operações privilegiadas**, sem habilitar conta admin automaticamente.
4. **Senhas:** usar GoTrue; verificar min 12, comprimento, recuperação/entregabilidade de e-mail local, eventos de sessão e se controle de senhas vazadas exige serviço pago. Não criar hash de senha próprio.
5. **Proteção de fluxos:** CSRF em endpoints que usam cookies, redirect allow-list exata, proteção contra open redirect, log redaction, e-mails de teste não expostos no PR/CI. Nunca enviar/armazenar tokens em URL de páginas públicas ou logs.
6. **Testabilidade/CI:** rodar Supabase local real com dados descartáveis e testes negativos de JWT expirado/revogado, perda de sessão, tokens reutilizados, duas contas distintas, tentativas, responsividade do middleware/SSR quando aplicável, RLS F2.A preservada e F1 inalterada.

## 4. Critérios de aceite propostos para B.1 — somente se houver autorização futura
- [ ] README/ADR com arquitetura da sessão, cookie/SSR, origem da identidade e limites de revogação; custo/plano/capacidade verificados.
- [ ] Login normal de contas **fictícias** com senha correta, incorreta e tentativas abusivas; sem cadastro público; nenhuma conta ou acesso acadêmico criado por simples login.
- [ ] JWT validado, assinatura inválida negada, usuário diferente isolado no banco e API; nenhum segredo `service_role` no browser; sem SQL direto de usuário final.
- [ ] Logout, renovação e revogação das demais sessões comprovadas com múltiplos dispositivos de teste, incluindo chamadas ainda com JWT anterior, **sem promessa de revogação instantânea se o backend não a garantir**.
- [ ] Recuperação comum de senha: neutralidade para e-mails existentes/inexistentes; link expirado, reutilizado, reenvio e abuso testados, com e-mail capturado localmente.
- [ ] `AuditSink` de aplicação persistente ou caminho rastreável de eventos de segurança demonstrado em teste; sem logs sensíveis e com leitura bloqueada; retenção jurídica de produção **não implementada**.
- [ ] Administração/docência: sem privilégio novo, MFA apenas testado em dados fictícios se escolhido; proteção por AAL demonstrada, sem desbloquear menor.
- [ ] Execução de CI/linters/testes existentes, PR pequeno para revisão PM, merge somente mediante novo aceite de Marina.
- [ ] **F2.B.2, F2.C/D e F3–F8 não iniciadas**, sem e-mail real, SMS, checkout, dados reais ou deploy.

## 5. Matriz de decisões para Marina — pendentes
| Gate docs/44 | Proposta atual | Situação |
|---|---|---|
| F2B-G01 sessões e revogação | SEC-03 a SEC-08/SEC-19: JWT 30 min, inatividade 8h, máximo 24h, sem “manter conectado”, revogação real no servidor | **DIRETRIZ APROVADA**; viabilidade/custos do controle efetivo ainda por decidir |
| F2B-G02 validade e abuso | SEC-02, SEC-09 a SEC-12: senha 12+, reset 20 min, ativação 30 min, quotas e backoff | **DIRETRIZ APROVADA**; provar viabilidade GoTrue e distinguir B.1/B.2 |
| F2B-G03 MFA privilegiada | SEC-13/SEC-19: TOTP AAL2 para ações de professor/admin, bloqueio até inscrição segura | **DIRETRIZ APROVADA**; JUR-06/alçadas permanecem pendentes |
| F2B-G08 auditoria | SEC-15/SEC-16: logs mínimos, sem segredos, nenhuma consulta indiscriminada; retenção **30 dias é mera hipótese jurídica** | **AUDITORIA MÍNIMA APROVADA COMO DIRETRIZ**; retenção/leitura/expurgo reais NÃO aprovados antes JUR-08 |
| Arquitetura | SEC-14 e seção 3: preferência BFF, comparar com Supabase SSR e custos | **AGUARDA DIAGNÓSTICO READ-ONLY DO CLAUDE E DECISÃO ESPECÍFICA** |
| Fornecedor, menores, contrato, dados reais | F2B-G04–G07/G09 | **BLOQUEADOS** até decisões e validações próprias; sem aprovação implícita |

## 6. Fontes externas de verificação (documentação oficial Supabase)
- [User sessions — JWT, refresh, timebox/inactivity, planos e revogação](https://supabase.com/docs/guides/auth/sessions). Regra importante: **timebox/inactivity hospedados documentados como recurso Pro+**, e tokens JWT podem permanecer válidos até expiração sem checagem adicional.
- [Server-side rendering — cookies em vez de localStorage e fluxo PKCE](https://supabase.com/docs/guides/auth/server-side).
- [Creating a Supabase client for SSR (Next.js)](https://supabase.com/docs/guides/auth/server-side/creating-a-client).
- [MFA Auth — níveis AAL1/AAL2 e enforcement em backend/RLS](https://supabase.com/docs/guides/auth/auth-mfa) e [MFA TOTP](https://supabase.com/docs/guides/auth/auth-mfa/totp).
- [Rate limits — valores e âmbito de quotas nativas](https://supabase.com/docs/guides/auth/rate-limits).

**Conclusão vigente após aceite de Marina:** as diretrizes de segurança SEC-01–SEC-19 foram **aprovadas para o planejamento técnico**, com a ressalva específica de que o prazo de **retenção de 30 dias em SEC-16 é apenas hipótese e NÃO foi aprovado**, e que **SEC-14 não decide arquitetura BFF/SSR**. Implementação de sessões, revogação e MFA depende de compatibilidade comprovada, orçamento e validação de riscos; nenhuma alternativa mais fraca está implicitamente permitida. **F2.B.1/B.2 e fases posteriores NÃO autorizadas.** Um diagnóstico de viabilidade/estimativa deve preceder a **autorização separada de execução na Issue #7**, conforme DEC-029.
