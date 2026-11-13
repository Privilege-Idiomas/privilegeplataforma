# Orientações para Claude Code — Plataforma Privilège

> **ATUALIZAÇÃO VIGENTE — 13/11/2026:** Marina determinou que **o design da plataforma é de responsabilidade exclusiva da PM/ChatGPT**. Claude **NÃO executa design ou protótipos D1** e **NÃO tem autorização de implementação F2–F8**. Direção visual A aprovada; aceite final das telas ainda pendente. Ler [docs/39](docs/39-d1-design-system-direcao-a-para-aceite-2026-11-13.md), [protótipo D1/F2](docs/prototipos/d1-f2-prototipo-direcao-a-2026-11-13.html) e [handoff técnico bloqueado docs/40](docs/40-f2-handoff-ux-tecnico-sem-autorizacao-2026-11-13.md). A liberação da F2 exige autorização expressa **separada** na Issue #7.

## INSTRUÇÕES PRIORITÁRIAS ATUALIZADAS — 2026-11-09 (LER ANTES DE PROGRAMAR)
**Este guia tinha premissas de outubro que foram substituídas.** A fonte atual para a execução é `docs/34-prontidao-desenvolvimento-cronograma-e-lotes-2026-11-09.md`, com a reunião de 03/11 e DEC-074–083. Quando seção histórica abaixo conflitar com estas instruções, **a regra mais recente prevalece**; não reabrir decisões aprovadas.

- **A plataforma pode começar a ser construída de modo incremental, local e reversível** enquanto preços, parametrização pedagógica, escalas, gateway, videochamada e jurídico são concluídos em paralelo. Esses itens **não bloqueiam F1**; funcionalidades específicas ficam desativadas/mocadas até validadas. **Não** cobrar, contratar, usar dados reais ou publicar produção sem autorização.
- **Serviços:** Plano 1 só vídeos e recursos digitais, sem plantões ou particulares (DEC-082). Plano 2: **2 plantões de 20min/mês**, sem particular incluída. Plano 3: **4 plantões de 20min/mês + 2 particulares de 50min/mês** (DEC-083). Plantões exigem reserva, até 10 participantes, cancelamento com >=2h devolve crédito; benefício não acumula mês a mês.
- **Comercialização dos cursos:** Basic/Start como bônus para todos os assinantes, Travel e Business vendidos separadamente por curso/trilha (reunião de 03/11); mostrar curso não contratado em vitrine, mas negar acesso pedagógico inclusive URL/API e exercícios. Plano de serviços e direito de curso são dimensões independentes.
- **Aprendizagem:** avaliação da aula **obrigatória, mas não eliminatória**, sem nota mínima para prosseguir; tentativas **ilimitadas**, sem revisão obrigatória antes de refazer. Nota <6 orienta revisão, e em 3 módulos distintos do mesmo curso com nota mais recente <6 recomenda apoio. Progresso conserva histórico. Teste de nivelamento **opcional**, recomenda sem bloquear; questões preparadas previamente, nunca IA por interação.
- **Vídeo:** Matheus confirmou em 03/11 que **reproduzir 100% da aula NÃO é obrigatório** para conclusão (DEC-024 resolvida).
- **Tecnologias de partida a avaliar em F1:** Next.js/TypeScript/Tailwind, Supabase/Postgres/RLS, Cloudflare Stream; pagamento e videoconferência **via interfaces substituíveis, ainda não escolher fornecedores**. Trabalhar sem contas/credenciais pagas nesta primeira fase.
- **Processo:** uma Issue/fase por vez, estimativa inicial antes de código, branch/PR, testes e evidência; **aguardar autorização específica da fase** antes de implementar e aceite antes da próxima. GitHub sempre fonte principal e completa, Notion apenas resumo executivo derivado. Não haver migrações destrutivas, dados reais ou deploy em produção.

## 1. Contexto do projeto
A Plataforma Privilège é uma plataforma digital de ensino de idiomas. O produto prevê cursos online, aulas em vídeo, exercícios, avaliações, trilhas de aprendizagem, assinaturas recorrentes e operação administrativa.

Este repositório GitHub é a **fonte principal de verdade para o projeto**, incluindo código, requisitos, escopo, decisões, governança e documentação técnica. Consulte o README e os documentos em `docs/` antes de implementar mudanças, especialmente requisitos, escopo, trilhas e Decision Log.

## 1.1. GitHub é o registro integral; Notion é somente relatório derivado — DEC-026
- **GitHub é a fonte ÚNICA, oficial e COMPLETA de tudo sobre o Privilege:** **todas** as tarefas, marcos (inclusive executivos), responsabilidades, status, prazos, dependências, aprovações, bloqueios, requisitos, decisões canônicas, histórico, arquitetura, código, testes, documentação e evidências. Não retirar nem omitir dados do GitHub porque aparecem no Notion.
- **Notion substitui apenas a antiga função de apresentação executiva pensada para o ClickUp:** uma visão resumida do andamento para Matheus, **estritamente derivada de informações que já estão no GitHub**. Não é backlog original, repositório de documentação, fonte paralela nem lugar para armazenar progresso exclusivo.
- **ChatGPT/PM** registra e atribui no GitHub as tarefas a Marina ou Claude Code, mantém roadmap e andamento e consolida **também no GitHub** o relatório executivo canônico `docs/12-relatorio-executivo.md`. A apresentação no Notion exibe apenas os destaques do relatório e links de apoio.
- **Claude Code, executor técnico, atualiza PRIMEIRO o GitHub**: status das próprias tarefas, previsões fundamentadas, impedimentos, PRs/commits, testes e critérios de aceite. Quando um marco de Claude estiver representado no relatório Notion, ele pode **refletir** o status executivo ali somente se a informação já estiver registrada e verificável no GitHub, após integração autorizada. Nenhuma alteração no Notion substitui um registro oficial do GitHub.
- **Atualizações de conclusão:** não declarar Concluído sem registro de aceite/evidência correspondente no GitHub. Em andamento, Em validação e Bloqueado exigem atualização oficial primeiro.
- **Divergência GitHub × Notion:** GitHub prevalece; corrigir o Notion com base na informação oficial. Nunca usar status isolado do Notion para alterar decisões ou planejar/aceitar entregas.
- **Sem acesso ao Notion**, não alegar que foi atualizado; comunicar impedimento ao PM/Marina. A conexão do PM com Notion foi utilizada anteriormente; Claude só reflete nele marcos verificados no GitHub se sua própria conexão estiver autorizada.
- Fichas completas de decisão pertencem apenas a seu arquivo Markdown único (docs/08 para Marina; docs/09 para Matheus); `docs/04-decision-log.md` é índice. A apresentação no Notion pode mostrar IDs de pendências relevantes, com links e sem duplicação integral.
- Ver `docs/11-estrutura-notion.md` para o formato executivo e `docs/12-relatorio-executivo.md` para o conteúdo oficial a resumir.

## 2. Papéis e autoridade
- **Matheus — patrocinador:** decide/aprova os itens atribuídos expressamente a ele por Marina, inclusive respostas provisórias de Marina que exijam a validação dele. Não atribuir automaticamente a ele todo tema comercial, pedagógico ou estratégico.
- **Marina — responsável pela condução do projeto e produto:** decide suas próprias questões; é a única fonte que classifica quem decide cada item e comunica as respostas/aprovações dela ou de Matheus.
- **Claude Code — apoio técnico:** analisa, propõe e implementa soluções técnicas conforme requisitos e decisões registrados.

Não tome decisões de negócio por conta própria. Quando uma regra de produto, cobrança, acesso, avaliação, progressão, conteúdo ou escopo estiver ambígua, sinalize e solicite esclarecimento antes de implementar essa parte.

## 3. Regras obrigatórias
1. Leia o README e os documentos relevantes em `docs/` antes de iniciar uma tarefa.
2. Diferencie requisitos confirmados pela responsável, propostas, hipóteses e decisões formalmente aprovadas.
3. Não transforme uma sugestão em requisito aprovado.
4. Não altere escopo, regras comerciais, preços, planos, permissões ou arquitetura aprovada sem autorização.
5. Antes de mudanças relevantes, explique a abordagem, arquivos afetados, riscos e testes previstos.
6. Prefira mudanças pequenas, rastreáveis e reversíveis.
7. Não faça deploy, migrações destrutivas, exclusões de dados ou alterações de produção sem aprovação explícita.
8. Escreva e execute testes apropriados; informe claramente o que foi e não foi testado.
9. Atualize a documentação quando uma implementação alterar comportamento, arquitetura ou configuração.
10. Não inclua segredos, tokens, chaves, senhas, dados pessoais reais de alunos ou credenciais no repositório.

## 4. Segurança e privacidade
- Utilize variáveis de ambiente para segredos e documente apenas nomes de variáveis e instruções seguras.
- Não registre dados reais de alunos em logs, fixtures, screenshots ou exemplos.
- Aplique princípio do menor privilégio em autenticação e autorização.
- Considere proteção de dados pessoais e requisitos aplicáveis da LGPD.
- Nunca exponha credenciais ou conteúdo privado em respostas, commits ou arquivos.

## 5. Estado vigente do produto para implementação (reunião 03/11 e DEC-074–083)
- Cursos Basic/Start como bônus a todos os assinantes; Travel e Business separadamente por curso/trilha. Acesso por curso distinto do nível de serviços.
- Plano 1 digital, sem docentes; Plano 2 com 2 plantões mensais; Plano 3 com 4 plantões mensais e 2 particulares de 50min mensais. Plantão de 20min, até 10 vagas, requer reserva.
- Exercícios de prática opcionais; avaliação da aula obrigatória **não eliminatória**; tentativas ilimitadas; gabarito/explicação após envio; sem vídeo 100% obrigatório.
- Teste de nivelamento opcional, não bloqueante, com questões/gabaritos previamente aprovados; trilhas não duplicam cursos e não ampliam acesso sem contrato.
- Respostas de avaliações auto-salvas por questão, tentativa expira 30 dias após início com aviso e direito de nova tentativa; preservar histórico/progresso e certificação válida.
- Perfis aluno, pagador/responsável, professor e admins, com proteção de menores, permissões por dado/ação, segregação de contas e auditoria. Não usar dados reais antes de revisão jurídica pertinente.

## 6. Parâmetros ainda configuráveis (NÃO são bloqueio de F1)
- Preços, descontos, modalidades comerciais e contratos; preparar dados e configurações sem fazer cobrança real.
- Banco, faixas e valores reais do nivelamento; configurar com conteúdo fictício em ambiente de teste sem publicar como material aprovado.
- Escala, horas, nomes e remuneração de professores; construir agenda com parâmetros, sem contratação.
- Gateway, vídeo ao vivo e licenças; criar interfaces desacopladas, mocks e testes locais.
- Certos detalhes de notificação, retenção e parecer jurídico; construir com privacidade conservadora, manter funções de exposição pública e dados reais desativadas até validação.

## 7. Orientações de modelagem
- Trate **curso**, **trilha** e **assinatura/direito de acesso** como conceitos distintos.
- Uma trilha deve referenciar cursos existentes e definir ordem/prioridade; não duplique cursos ou aulas para formar trilhas.
- Direitos comerciais devem ser verificados independentemente da recomendação pedagógica da trilha.
- Progresso deve ser preservado no nível do conteúdo e associado à jornada/trilha do aluno, sem duplicar registros quando a trilha mudar.
- **Tentativas de avaliação da aula são ilimitadas** (DEC-074–080); aplicar controle no backend apenas a direitos de curso, validade da tentativa e segurança, **não** limitar a duas tentativas.

## 8. Processo de implementação
Para cada tarefa:
1. Identifique requisitos e critérios de aceitação relacionados.
2. Aponte dúvidas e dependências antes de codificar.
3. Proponha solução proporcional ao MVP.
4. Implemente em etapas pequenas.
5. Execute testes e registre resultados.
6. Resuma alterações, limitações e próximos passos.

## 9. Documentação
Registre decisões relevantes em `docs/04-decision-log.md`. Além do ciclo de vida (proposta, aprovada, rejeitada, substituída etc.), use a tag colorida de situação definida em `docs/10-politica-de-governanca-de-decisoes.md`: **RESOLVIDO (verde)**, **REVISAR (amarelo)** ou **SEM RESPOSTA (vermelho)**. Não classificar a decisão provisória como aprovada.

Quando houver conflito entre código, documentação e instruções informais, não escolha silenciosamente: sinalize a divergência e peça orientação.

## Fonte e atribuição de decisões — regra explícita de Marina
- Marina é a única fonte que comunica quem decide e quem aprova, inclusive decisões tomadas por Matheus e transmitidas por ela.
- Manter a separação Marina / Matheus. Somente atribuir um item a Matheus quando Marina indicar expressamente. Não usar natureza pedagógica, comercial ou estratégica como critério automático.
- Registrar separadamente **decisor**, **aprovador**, **comunicado por (Marina)** e **status**, sem presumir aprovação. **Não perguntar a titularidade antes de cada definição:** faça perguntas de produto normalmente. Se Marina responder sem mencionar validação por Matheus, trate como decisão de Marina, considerando o grau de certeza/aprovação que ela comunicar. Se disser que a decisão é de Matheus e trará a resposta depois, registrar no arquivo dele como **SEM RESPOSTA**. Se ela responder e disser que precisa revisar/confirmar com Matheus, **classificar automaticamente como decisão de Matheus**, com resposta provisória de Marina e status **REVISAR** até ela comunicar a decisão final dele. Se houver ambiguidade real, pedir esclarecimento.
- A DEC-024 foi atribuída a Matheus e **foi confirmada por ele em 03/11: assistir 100% do vídeo NÃO é obrigatório**. A antiga situação REVISAR consta somente no histórico Git; não ressuscitar essa pendência.
- A lista de Matheus inclui tanto decisões que só ele pode tomar quanto decisões que Marina decidiu provisoriamente e precisa validar com ele. A lista de Marina contém decisões realmente dela, mesmo que possam ser modificadas futuramente.

## Decision traceability — mandatory
- Follow `docs/10-politica-de-governanca-de-decisoes.md` for every product, business, pedagogical, operational, and technical decision.
- Never delete or silently overwrite decision history. A changed decision must be recorded as a new linked entry; preserve the prior entry and mark it superseded only after the replacement is explicitly approved.
- Record alternatives actually considered, their known trade-offs, rejected options and reasons, selected option, approver, approval date, implementation evidence, and validation evidence.
- Never invent an option, rationale, approval, or execution evidence. Mark unknown information as pending/not documented.
- Distinguish proposal, deferred, awaiting approval, approved, rejected, in execution, executed, validated, superseded, and cancelled. Separately display decision-response tags: green RESOLVIDO, yellow REVISAR, red SEM RESPOSTA.
- Do not implement unresolved business or pedagogical rules by assumption. Ask for clarification or leave a clear TODO.
- **Exactly one final owner and exactly one canonical decision record per decision.** Marina-owned decisions exist only in `docs/08-decisoes-marina.md`; Matheus-owned decisions exist only in `docs/09-decisoes-matheus.md`, **including provisional answers supplied by Marina and awaiting Matheus confirmation**. Never mirror or repeat the same decision in both files, even as a transfer-history block. Preserve its complete history in the canonical file and Git.
- `docs/04-decision-log.md` is the sole exception: it indexes **all decisions** with ID, brief summary, link, status and owner. It must not duplicate the full decision record. Other requirements/docs may refer to decision IDs only.
- If an old entry lists multiple possible owners, mark it `a confirmar com Marina` and ask Marina for the definitive single owner; do not silently select one, split the same decision into copies, or imply approval.
- DEC-024 (MAT-009) tem registro canônico em `docs/09-decisoes-matheus.md`, titular Matheus, **RESOLVIDO na reunião de 03/11/2026** (vídeo integral não obrigatório).
- **DEC-025 — latest approved correction (2026-10-31):** previously owned by Matheus (MAT-013) with a provisional Marina answer **mandatory**, but Marina **explicitly transferred the decision to herself** and **replaced the answer: practice exercises are optional; assessment mandatory**. Current final owner **Marina**, green **RESOLVIDO**. Its single canonical record, with the entire earlier Matheus/provisional history, is now in `docs/08-decisoes-marina.md`; the old DEC-025 decision block was removed from `docs/09-decisoes-matheus.md`. Do **not** require Matheus confirmation or retain an active MAT-013 duplicate. The Git history preserves the old original. `docs/04-decision-log.md` indexes the change.
- **DEC-027 — access rights resolved by Marina (2026-10-31):** global exercises tab supports filters by course/module/lesson/difficulty, **but does not bypass entitlements**. Each exercise is linked to a lesson → module → course and **inherits access from the parent course**. If a student lacks course access, they must not open, answer or retrieve that course's exercises, including via the global tab, review list, direct URL or API. Enforce authorization server-side and in queries, not solely via UI filtering. This aligns with REQ-003/REQ-004; no special exercise subscription was authorized. **Marina resolved and clarified the UI choice:** show **only an aggregate locked course/category indicator that additional exercises exist**, not individual exercise cards, titles, IDs or a browsable list of restricted exercises. Offer a contextual option to discover eligible plans for broader access; the plan/price/checkout details remain undecided. Never return protected question text, options, solutions, answer attempts or individual exercise payloads without server-side entitlement checks. Plan names, upgrade offers, pricing and purchase flow remain undecided; do not fabricate any of them.
- **DEC-028:** Marina decided each module gets a mixed-content chapter-style review exercise list. Do not infer any compulsory grade or progress gate for this list; practice is optional under DEC-025 unless a future explicit exception is approved.
- There must be no DEC-024/MAR-005 mirror in `docs/08-decisoes-marina.md`.
- Keep `docs/04-decision-log.md` as the official index and maintain `docs/08-decisoes-marina.md` and `docs/09-decisoes-matheus.md` as mutually exclusive decision queues.


## Controle obrigatório pré-execução — DEC-029
Antes de repassar uma tarefa ao Claude, a PM confere todas as decisões, requisitos, aprovações e pendências aplicáveis no GitHub, sem presumir respostas. Itens relevantes em REVISAR ou SEM RESPOSTA bloqueiam a parte dependente, até Marina esclarecer. A PM prepara escopo, critérios de aceitação, referências e checklist e recebe autorização de Marina para o pacote. EXCEÇÃO: Marina pode delegar explicitamente autonomia para uma tarefa específica e delimitar os aspectos abertos que podem ser decididos pela PM/Claude conforme boas práticas, priorizando baixo custo, alta segurança e coerência com decisões já aprovadas. Autonomia não é geral, não revoga requisitos aprovados, nem autoriza publicar em produção. Registrar escopo da delegação, escolhas e justificativas no GitHub; se surgir conflito ou risco relevante fora da autorização, voltar a Marina. Toda publicação continua exigindo revisão e aprovação prévia.
Fonte canônica: docs/08-decisoes-marina.md; índice: docs/04-decision-log.md.


## DEC-030 — Arquitetura de baixo custo operacional
A arquitetura deve priorizar conteúdos, gabaritos, explicações e regras preparados e armazenados antecipadamente para servir os alunos sem chamadas de IA ou consumo de tokens por interação. Toda proposta de recurso com IA em tempo real, tokens, API paga por uso ou outro custo variável relevante exige sinalização prévia à Marina com finalidade, alternativas sem IA, estimativa de custo por uso e em escala, limites e medidas de controle; só poderá ser executada após aprovação explícita específica. Isso não significa custo operacional zero: tráfego, armazenamento, banco e infraestrutura também escalam e devem ser monitorados. Otimizar custo sem sacrificar segurança e qualidade.

## DEC-031 — Exercícios opcionais em cards
Nos exercícios opcionais em cards, após erro ocultar gabarito e oferecer 'Tentar novamente' ou 'Ver resposta e explicação'. Tentativas adicionais são ilimitadas, sem obrigar revelação; registrar histórico. Gabarito e explicação devem estar pré-aprovados e armazenados, sem IA em tempo real. Acerto posterior retira a pendência e marca questão como concluída; visualização da resposta não é acerto. Manter avaliações obrigatórias em fluxo separado, com regras próprias de tentativas.
Documentação canônica: docs/08-decisoes-marina.md e índice docs/04-decision-log.md. Não confundir prática com avaliações obrigatórias.


## DEC-032 — Gate financeiro por decisão
Toda decisão proposta, inclusive visual ou comercial, deve receber análise proporcional dos impactos financeiros imediatos e futuros antes da aprovação: implantação/desenvolvimento, custo mensal fixo em repouso, custos variáveis por uso de alunos e custos variáveis administrativos, com gatilhos, premissas, horizonte, cenários de escala, alternativas seguras e confiáveis e incertezas. Custos precisam de aprovação explícita de Marina, separada da aprovação funcional; custos não estimados permanecem pendentes, nunca presumidos como R$0. Registrar as estimativas e seus ajustes no GitHub com ID da funcionalidade/decisão, origem, versão, data e autorização; somente funcionalidades E custos aprovados entram no painel executivo Notion, como cópia resumida derivada do GitHub, sem substituir nenhum registro. Para não distorcer totais, distinguir aprovado, implementado e em produção, e estimado versus efetivamente medido. Consolidar mensalidade fixa compartilhada uma única vez e alocar custos compartilhados sem dupla contagem; calcular custo mensal estimado total no cenário de alunos ativos e custo por aluno ativo como total dividido pelo número de ativos, evitando tratar indevidamente custos fixos como variáveis por usuário. Priorizar minimização do custo variável provocado pelos alunos, com aprovação prévia de Marina para qualquer novo custo desse tipo (inclusive pequeno).
Registro canônico em docs/08-decisoes-marina.md e índice docs/04-decision-log.md; Notion é exclusivamente espelho executivo de custos aprovados.

## DEC-035 — Escopo integral antes de stack, orçamento e recorte de versões
Marina definiu a ordem vinculante de planejamento: **(1) escopo completo de todas as funcionalidades desejadas, inclusive futuras → (2) stack/arquitetura para esse escopo → (3) comparação e estimativas de custos de ciclo de vida e escala → (4) escolha do que entra na primeira versão e nas posteriores → (5) cronograma, auditoria e autorização de execução**. Não proponha recorte automático do MVP durante o levantamento de escopo. **DEC-032 permanece válida para despesas e ativação comercial:** não assumir custo zero, inventar taxas nem contratar serviços. **Esclarecimento gerencial 09/11:** parâmetros de fornecedor/precificação/jurídico em aberto não impedem desenvolvimento **local, reversível e sem serviços pagos**, desde que a fase corrente seja explicitamente liberada e permaneça sem dados reais/operação comercial. Não confundir aprovação do produto com liberação da implementação. GitHub registra tudo; Notion apenas espelha custos aprovados e relatório executivo.
Fonte canônica: docs/08-decisoes-marina.md (DEC-035); roadmap docs/06-roadmap.md.



## Autorização operacional recebida — F1 em 09/11/2026
Marina **AUTORIZOU executar a F1**, com Next.js App Router, TypeScript, Tailwind e esquema inicial Supabase/Postgres local; ver [Issue #6](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/6) e `docs/34-prontidao-desenvolvimento-cronograma-e-lotes-2026-11-09.md`. **Não exigir nova permissão para iniciar codificação de F1 dentro do escopo.** Apresentar avaliação técnica/estimativa, perguntar apenas se houver impedimento material, executar F1 em branch/PR, registrar testes/evidências e aguardar aceite antes de F2. Não fazer deploy público, contratação, acesso a dados reais ou despesas. O status autorizado não equivale a trabalho iniciado enquanto o Claude Code não tiver sido acionado.


## Atualização prioritária D1/F2 — 13/11/2026 (ler antes de iniciar qualquer nova fase)

**Ordem expressa da Marina:** a identidade visual, layouts, design system e protótipos da Privilège **não serão desenhados pelo Claude**. A criação visual é responsabilidade exclusiva da PM/ChatGPT, sob aceite final de Marina. **NÃO criar/reinterpretar/reestilizar a D1**, alterar tokens, layouts ou logos por conta própria. Claude é candidato a **implementador técnico** das especificações aprovadas, **somente quando houver autorização da fase**.

**Direção A aprovada pela Marina:** marinho editorial, dourado discreto, superfícies claras quentes, imagens originais de logotipos, aparências Claro/Escuro/Sistema; **protótipos essenciais ainda dependem de aceite visual final**.
- [docs/39 — Design system v1](docs/39-d1-design-system-direcao-a-para-aceite-2026-11-13.md)
- [Protótipo D1/F2 em HTML, somente demonstrativo](docs/prototipos/d1-f2-prototipo-direcao-a-2026-11-13.html)
- [docs/40 — Handoff F2, leitura preparatória](docs/40-f2-handoff-ux-tecnico-sem-autorizacao-2026-11-13.md)
- [Issue #15 — Gate de aceite visual](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/15)

**F2–F8 continuam NÃO AUTORIZADAS.** Nenhuma issue, handoff, aprovação da paleta, meta de cinco semanas ou protótipo constitui ordem para escrever código F2. Se e quando Marina liberar expressamente a **Issue #7**, implementar exatamente o escopo autorizado, via branches/PRs e testes, sem design autônomo, sem dados reais, provedores pagos ou deploy público.
