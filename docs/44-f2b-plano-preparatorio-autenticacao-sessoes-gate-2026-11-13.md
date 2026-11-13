> **DIRETRIZES TÉCNICAS F2.B APROVADAS POR MARINA (13/11/2026) — IMPLEMENTAÇÃO NÃO AUTORIZADA.** Marina respondeu **“sim”** à aprovação das diretrizes de segurança de [docs/45](45-f2b-proposta-parametros-seguranca-para-aprovacao-2026-11-13.md), mantendo **arquitetura BFF/SSR, custos, contratação, mudança de `supabase/config.toml` e implementação sujeitos a novas aprovações separadas**. JWT/sessões/tokens/antiabuso/MFA aprovados como parâmetros de referência, **condicionados à verificação de capacidade e custo**; a hipótese de retenção de logs por **30 dias NÃO foi aprovada** (JUR-07/08/09). Os gates **G01/G02/G03/G08 passam a ter diretrizes técnicas definidas**, porém **não estão encerrados para execução**: ainda exigem diagnóstico técnico, decisões de viabilidade/arquitetura e, onde pertinente, jurídico. **F2.B.1/B.2, F2.C/D e F3–F8 NÃO AUTORIZADAS**, sem branch/código/produção/serviços. O “ok” anterior autorizou apenas elaborar a proposta, e o “sim” posterior a aprovou como diretriz; nenhum dos dois autoriza implementação.

# F2.B — Plano preparatório de autenticação, sessões e recuperação (SEM AUTORIZAÇÃO)
**Privilège · 13/11/2026 · Responsável por escopo/gates: PM/ChatGPT · Executor futuro: Claude Code · Estado: PREPARAÇÃO DOCUMENTAL, F2.B NÃO AUTORIZADA**

> **REGRA OPERACIONAL:** este arquivo é um plano e matriz de decisões, **não** autorização de desenvolvimento. A única entrega F2 vigente em `main` é o lote integrado **F2.0** (PR #16, `81a87fc7`) e **F2.A** (PR #17, `0f964e0`); ambos foram aceitos tecnicamente. **F2.B (inteira), F2.C, F2.D e F3–F8 continuam bloqueados** até ordem específica de Marina na [Issue #7](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/7). Não iniciar código, migrations, UI, serviços pagos ou conexão com usuários reais por causa deste arquivo.

## 1. Fontes canônicas e decisões já aprovadas
1. [DEC-039, DEC-036, DEC-038, DEC-040–043, DEC-070/071/072/078 e DEC-029/032/035 — docs/08](08-decisoes-marina.md), além de [REQ-002/020–024 — docs/03](03-requirements.md).
2. [P-02 — sete jornadas e exceções](19-p02-jornadas-identidade-contas.md) e [P-04 — papéis, RLS e operações sensíveis](21-p04-matriz-permissoes-seguranca.md).
3. [F2.0/F2.A integrado — docs/43](43-f2-ambiente-testes-identidade-rls.md), [ordem histórica executada — docs/42](42-f2-ordem-execucao-lote-0-a-2026-11-13.md), [design canônico D1 R2 — docs/41](41-d1-revisao-2-design-system-f2-2026-11-13.md), [handoff histórico — docs/40](40-f2-handoff-ux-tecnico-sem-autorizacao-2026-11-13.md) e [CLAUDE.md](../CLAUDE.md).
4. A F1/F2.0/F2.A já usa **Next.js/TypeScript/PostgreSQL e Supabase local para testes**, mas isso **não é licença para contratar serviços, alterar stack, implantar a produção ou presumir parâmetros finais**.

### Funcionalidade já decidida, não recolocar em votação
| Assunto | Diretriz aprovada | Referência |
|---|---|---|
| Login rotineiro | **e-mail + senha**. Não acrescentar login social/magic link/OTP como alternativa habitual por iniciativa técnica. | DEC-039 / REQ-002 |
| Primeiro acesso após contratação | Link no e-mail **ou continuidade no site**; as duas rotas precisam comprovar **posse do e-mail**, e a compra deve vir de fonte confiável. | DEC-036 / P-02 J-01 |
| Recuperação comum | Link/token **temporário de uso único**, sem enumeração de conta e sem enviar senha em texto claro. | DEC-039/070/071 / P-02 J-03 |
| Troca normal de e-mail | Confirmar **endereço atual E novo endereço**. Perda do atual encaminha a recuperação excepcional, não troca automática. | DEC-078.1 |
| Comprometimento de senha | Revogar **demais sessões existentes**, exigir novo login nelas e registrar evento seguro. | DEC-078.2 |
| E-mail já cadastrado | **Não duplicar conta**; orientar login/recuperação sem expor existência/titularidade em endpoints anônimos. | DEC-078.3 |
| Identidades e acesso | Conta individual do aluno, pagador e aluno com e-mails de finalidade distinta quando aplicável; sem direito acadêmico presumido; sem foto/avatar enviada pelo usuário. | DEC-037/040–043 / P-04 |
| Menores | Contratação por responsável e conta individual com e-mail exclusivo, **mas fluxo jurídico/representação ainda condicionado**; bloquear criação/vínculo de menor sem validação. | DEC-040–043, JUR-02/11 |
| Cadastro e faixa etária | Nome completo do aluno e **faixa etária obrigatória no cadastro** definidos funcionalmente; telefone opcional, CPF do pagador apenas quando necessário. **Não introduzir formulário/dado real agora sem base e aprovação para o fluxo.** | DEC-038 / REQ-021 |
| Auditoria | Concessões e revogações de papéis/vínculos já gravadas por triggers; negações de aplicação ainda não persistidas. Leitura/retensão jurídica permanece pendente. | docs/43 / JUR-08 |

## 2. Recorte técnico candidato para F2.B (sem autorização)
**A distinção B.1/B.2 é proposta da PM para gestão de risco, não uma nova fase aprovada.** Claude só poderá executar aquilo que a autorização futura discriminar.

### F2.B.1 — Núcleo de autenticação em ambiente isolado (candidato à primeira autorização)
- Adaptador de **Supabase Auth/GoTrue local** conectado à camada `AuthProvider` existente. Testes server-side/headless, sem telas novas nem alterações do design (F2.C).
- Fluxos de **e-mail e senha, autenticação, sessão, renovação/validação, logout e revogação** somente com identidades fictícias e perfis autorizados em teste. Sessão real e autenticação **sem conceder matrículas, cursos, permissões de admin ou papel a partir do login**.
- **Recuperação comum de senha** por canal **local de captura de e-mail para testes** e token de uso único quando o mecanismo escolhido fornecer garantia testável; exigir política de expiração/revogação e resposta neutra. Sem provedor externo ou e-mail de verdade.
- Em caso de senha comprometida, teste de **revogação das outras sessões** e proteção contra reuso/refresh indevido, com desenho compatível com o provedor; **não prometer revogação imediata de JWT já emitido sem barreira adicional no servidor**. Testar na API/servidor, não só no navegador.
- Implementar/validar **AuditSink persistente de decisões de aplicação em ambiente descartável**, com trilha mínima, tratamento de falha e segurança de logs, **somente após parâmetros de acesso e retenção mínimos**. Não conceder interface de consulta a logs nem decidir retenção jurídica unilateralmente.
- **Segredos e fronteira de confiança:** credenciais admin/service_role nunca no cliente; JWT do usuário validado pelo provedor; autorização da F2.A (RLS e titularidade) usada na API/servidor, **sem consultar dados do usuário com service_role irrestrita**. Nenhuma conexão SQL direta para usuários finais.
- **Abuso e engenharia de segurança:** respostas neutras a pedidos anônimos, limites contra tentativa de login e envio de mensagens, proteção CSRF/cookies adequados à arquitetura proposta, proteção contra vazamento por redirect/log/URL, e testes adversariais. Definir números de limites e regras antes de liberar código.
- **CI:** adicionar job/testes integrados locais em Supabase real, cobrindo login certo/errado, perfis distintos, logout, reset expirado/reutilizado, tentativa de enumeração, sessão revogada, rate-limit e acesso direto por API com JWT de usuário; sem desabilitar testes F1/F2.A.
- **Artefatos:** branch própria, PR pequeno, evidência do CI, desenho do fluxo de tokens/sessões, riscos, limites e custo projetado. **Sem merge automático**; aceite PM + aprovação expressa de Marina.
- **Não implementar** páginas de login/conta: todo trabalho visual é F2.C, usando exclusivamente D1 Revisão 2 sob autoria da PM.

### F2.B.2 — Fluxos de ativação, comunicação e recuperação sensível (candidato condicionado)
- Preparar como **interfaces/testes/fixtures**: ativação de conta após **direito contratual confirmado por fonte confiável**, dois caminhos de verificação do e-mail, reenvio seguro, duplicidade tratada e direito não concedido por cadastro.
- **Não conectar checkout real, gateway, aquisição pública, alunos atuais reais, migração de identidade ou criação de direitos**; cada uma dessas fontes depende de decisões operacionais/comerciais da pessoa competente e integrações futuras. Sem prova confiável de compra, **não ativar direito**.
- Troca de e-mail com confirmação dupla aprovada, mas reautenticação, revogação e confirmação/expiração de links necessitam decisão técnica. Recuperação excepcional sem acesso ao e-mail: **somente estado de bloqueio/encaminhamento**, sem liberar procedimentos ou alçadas não validados com jurídico.
- Menores e vínculo `guardian`: **continuar bloqueados no banco**, sem coleta/ativação de menores reais e sem portal parental.
- E-mail transacional real: selecionar e aprovar fornecedor, domínio remetente, confiabilidade, limites e custos **antes de contratar/ativar**, conforme DEC-032.
- Se os condicionantes não estiverem resolvidos, B.2 **não deve ser implicitamente incorporado à primeira ordem B.1**.

## 3. Decisões e dependências reais: quem decide e como manter seguro
| ID de gate | Ponto que falta fechar | Responsável pela decisão | Estado seguro enquanto pendente |
|---|---|---|---|
| F2B-G01 | **Parâmetros de sessão:** validade/ociosidade/renovação, revogação servidor, comportamento entre dispositivos, sinalização de comprometimento e política de “manter conectado” | Marina com proposta técnica PM/Claude; conciliar JUR-06/08 | Sem sessão persistente longa nem opção “manter conectado”; **B.1 não executar sem política definida** |
| F2B-G02 | **Prazos e controles de tokens/recuperação:** expiração, uso único, reenvio, retentativas, quotas, redirecionamentos e proteção antifraude | Marina com recomendação técnica PM/Claude | Somente especificação/testes negativos; não assumir duração nem fornecedor |
| F2B-G03 | **MFA e tratamento de papéis privilegiados:** MFA obrigatória para docentes/admin? como negar/login quando fator ausente | Marina, avaliação de segurança e eventual JUR-06 | Sem login privilegiado administrativo real, sem elevação de papel |
| F2B-G04 | **Notificações e e-mail transacional:** fornecedor/SMTP, política de volume/entregabilidade, domínio, custo mensal e por mensagem | Marina + orçamento DEC-032; Matheus apenas se Marina lhe atribuir ponto comercial/fornecedor | Local/captura de mensagens fictícias; zero envio/contratação real |
| F2B-G05 | **Ativação e entitlement de contrato:** fonte comercial confiável de compra, estados pós-checkout, alunos atuais e migração | Matheus quando alçada contratual expressa; Marina operação; JUR-03 para transição | Sem cadastro público livre, sem direito por criar usuário, sem vincular menor |
| F2B-G06 | **Representação de menor e identificação legal:** JUR-02/11; dados etários mínimos e fundamento, recuperação de acesso de criança | Marina após validação jurídica | `guardian` e fluxo real de menor bloqueados no backend |
| F2B-G07 | **Recuperação excepcional/alteração de titular:** provas aceitáveis, revisão independente, alçadas e retenção | Marina + JUR-01/02/06/08 | Nenhum reset ou troca manual sem protocolo jurídico/segurança |
| F2B-G08 | **Auditoria e logs:** mínimos, onde persistir negação, quem pode ler, expurgo, retenção, segurança do incidente | Marina após JUR-07/08, com PM/Claude técnico | Sem endpoint de leitura, sem prometer retenção definitiva; não usar evento em memória como auditoria operacional |
| F2B-G09 | **Cadastros mínimos e dados reais:** nome completo, faixa etária obrigatória, telefone opcional e CPF só de pagador quando necessário; relação com perfis mínimos F2.A | Marina e JUR-01/02/11; Matheus só para fluxo comercial se indicado | F2.A guarda somente nome de exibição; não fazer cadastro público nem coletar idade real |

**Prioridade para preparar o lote B.1:** F2B-G01/G02/G03 e arquitetura de sessão/autenticação em ambiente local; confirmar também política mínima de log (G08) antes de alegar trilha operacional. **B.2 exige G04/G05/G06/G07/G09 conforme fluxo.** Isso separa *poder começar um núcleo técnico isolado* de *poder oferecer acesso real em produção*.

## 4. Alternativas técnicas conservadoras para discussão — NÃO DECIDIDAS
1. **Sessões:** avaliar sessão curta, revogação verificável no backend, expiração por inatividade e teto absoluto; “manter conectado” desligado. *Nenhum número de minutos/dias é canônico até aceite de Marina.*
2. **Senhas e recuperação:** delegar hash/verificação ao Supabase Auth (não construir criptografia própria), proteger contra enumeração, confirmar uso único e reuso/expiração na prática; autenticação normal somente por e-mail/senha. Determinar concretamente expiração e limites de abuso antes de integrar.
3. **Cookies/refresh/CSRF:** optar após exame da stack/SSR existente, sem guardar JWT em `localStorage` como atalho; proteger revogação no servidor e documentar o comportamento de tokens já emitidos.
4. **Auditoria:** evento mínimo estruturado sem tokens/senhas/dados excessivos, persistência de negações fora de transações revertidas e acesso aos logs bloqueado até alçada/retensão legal aprovadas.
5. **Admin e docentes:** preferir exigir MFA por segurança, mas **não interpretar preferência técnica como decisão de produto**; autenticação privilegiada continua negada até aprovação específica.

## 5. Checklist para autorização separada e execução posterior
- [x] F1 + F2.0 + F2.A integradas em `main`, CI e testes RLS positivos/negativos revisados.
- [x] D1 visual essencial F2 aprovado; este lote **não é execução de design/UI**.
- [x] Login rotineiro e-mail/senha, duas formas de ativação, troca de e-mail dupla e revogação de outras sessões em comprometimento já definidos funcionalmente.
- [x] Marina aprovou **as diretrizes técnicas SEC-01–SEC-19 do docs/45**, com exceção expressa da hipótese de retenção definitiva de 30 dias (SEC-16), sem escolher arquitetura ou custo. **Isso não libera B.1**.
- [ ] PM/Claude realizam diagnóstico preparatório read-only e apresentam à Marina viabilidade de **G01/G02/G03/G08**, revogação efetiva, BFF vs SSR, custos e trade-offs; só depois fechar a arquitetura e os gates de execução pela DEC-029.
- [ ] Claude apresenta **plano de implementação e estimativa confirmada** com os controles do Supabase local, sem executar antes do gate.
- [ ] Se B.2 for incluído, comprovar gates adicionais e definir limites de funcionalidades bloqueadas no backend.
- [ ] Marina dá **autorização expressa e independente na Issue #7**, especificando B.1/B.2 e limites; só então Claude abre branch e altera código.
- [ ] Cada PR tem escopo verificável, testes no Supabase real, revisão PM, autorização de merge de Marina e nenhum deploy.
- [ ] F2.C/D e demais fases continuam não autorizadas.

**Estimativa histórica do executor:** F2.B 3–4 dias úteis, F2.C 5–7, F2.D 2–3 (excluindo revisão PM), a revalidar após definição de escopo. **Não assumir que B.2 cabe em B.1 ou que o prazo total de cinco semanas esteja aprovado.**

**Governança:** GitHub canônico. Notion é exclusivamente painel executivo derivado dos registros GitHub, sem substituí-los e sem transferir tarefas técnicas. Nenhum registro aqui é aprovação de custos, parecer jurídico, senha de usuário real, publicação ou execução da F2.B.
