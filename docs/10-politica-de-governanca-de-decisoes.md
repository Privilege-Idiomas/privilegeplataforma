# Política de Governança de Decisões — Plataforma Privilège

**Versão:** 1.0  
**Data de adoção:** 2026-10-31  
**Status:** Diretriz de gestão definida por Marina para o projeto

## 1. Objetivo

Manter um histórico completo, íntegro e rastreável de todas as decisões do projeto, desde o problema inicial e as alternativas consideradas até a aprovação, execução, validação e eventuais revisões.

O histórico decisório é permanente. Uma decisão substituída, rejeitada ou cancelada não deve ser apagada nem reescrita como se nunca tivesse existido.

## 2. Princípios obrigatórios

1. **Não apagar histórico:** preservar decisões aprovadas, rejeitadas, adiadas, canceladas e substituídas.
2. **Registrar alternativas:** listar as opções efetivamente consideradas, sem inventar alternativas retrospectivamente.
3. **Explicar descartes:** registrar por que cada alternativa foi rejeitada, quando essa justificativa for conhecida.
4. **Distinguir estados:** proposta, em análise, adiada, aprovada, rejeitada, em execução, executada, validada e substituída são estados diferentes.
5. **Identificar autoridade:** registrar quem propôs, quem avaliou, quem decidiu e quem aprovou.
6. **Não presumir aprovação:** conversa, sugestão ou preferência preliminar não equivale a autorização formal.
7. **Rastrear execução:** relacionar a decisão às tarefas, requisitos, commits, entregas e evidências pertinentes.
8. **Registrar mudanças:** quando uma decisão mudar, criar novo registro vinculado ao anterior; não sobrescrever o histórico.
9. **Transparência sobre lacunas:** quando não houver informação sobre uma alternativa ou motivo de descarte, registrar “não informado/não documentado”, sem preencher por suposição.

## 3. Estrutura mínima de cada registro decisório

- **ID único:**
- **Data de abertura e última atualização:**
- **Tema:**
- **Contexto / problema / necessidade:**
- **Objetivo e critérios de decisão:**
- **Proponente:**
- **Responsável pela decisão:**
- **Consultados:**
- **Alternativas consideradas:**
  - Opção:
  - Benefícios:
  - Desvantagens / riscos:
  - Custos / impactos:
- **Alternativas descartadas e justificativas:**
- **Opção selecionada:**
- **Justificativa da escolha:**
- **Comunicado por (fonte da resposta):**
- **Aprovador e data da aprovação:**
- **Status da decisão:**
- **Plano de execução / responsável / prazo:**
- **Evidência de execução (tarefas, PRs, commits, documentos):**
- **Validação / critério de aceite / evidência:**
- **Impactos em escopo, prazo, custo, qualidade, riscos e operação:**
- **Decisões relacionadas / decisão anterior substituída:**
- **Observações e pendências:**

Campos sem informação devem permanecer identificados como pendentes ou não documentados.

## 4. Ciclo de vida e estados

- **Proposta:** ideia registrada, ainda sem análise suficiente.
- **Em análise:** alternativas e impactos estão sendo avaliados.
- **Adiada:** decisão conscientemente postergada; registrar motivo e, se possível, gatilho/data para retomada.
- **Aguardando aprovação:** recomendação ou decisão proposta aguarda autoridade competente.
- **Aprovada:** autorizada explicitamente pelo responsável competente.
- **Rejeitada:** alternativa ou proposta descartada, com justificativa.
- **Em execução:** opção aprovada está sendo implementada.
- **Executada:** implementação concluída, ainda sujeita à validação.
- **Validada:** execução verificada contra critérios de aceite.
- **Substituída:** decisão posterior alterou a anterior; ambas permanecem no histórico.
- **Cancelada:** iniciativa interrompida; registrar motivo e impactos.

## 5. Separação de responsabilidades

- **Marina:** fonte única que comunica a atribuição, resposta e aprovação de cada decisão, independentemente de quem a tenha tomado; pode ser também a própria decisora/aprovadora.
- **Matheus:** decisor/aprovador somente de itens que Marina informar expressamente como da responsabilidade dele.
- **Equipe pedagógica:** participação e validação registradas somente quando Marina assim indicar.
- **Apoio técnico:** analisa e implementa conforme as decisões documentadas; não define por conta própria a autoridade decisória.

**Não atribuir por tema:** o fato de uma decisão ser pedagógica, comercial, técnica, estratégica ou orçamentária não determina que seja de Matheus, de Marina ou compartilhada. Somente Marina define essa classificação.

**Separar decisor, aprovador e comunicador:** quando Marina informar uma decisão de Matheus, registrar `Decisor: Matheus; Comunicado por: Marina` e a situação da aprovação conforme informado. Quando for decisão dela, registrar `Decisor: Marina; Comunicado por: Marina`. Não presumir aprovação nem participação externa. Se faltarem indicação de decisor ou aprovação, perguntar a Marina e marcar `a confirmar com Marina`.

## 6. Relação entre os registros do projeto

- `docs/04-decision-log.md`: **apenas índice de navegação** com ID, link para registro canônico, status visual e referência ao único responsável; não manter decisões completas ou recontar a resposta neste arquivo.
- `docs/08-decisoes-marina.md`: **registros canônicos exclusivos** das decisões cuja responsabilidade final Marina tenha atribuído a si mesma.
- `docs/09-decisoes-matheus.md`: **registros canônicos exclusivos** das decisões atribuídas por Marina a Matheus, inclusive quando a resposta provisória foi definida por ela e aguarda confirmação.
- Este documento: política permanente para registrar e manter o histórico.
- Requisitos, escopo, roadmap e documentação técnica: devem apontar para os IDs das decisões que os fundamentam.

Os arquivos de decisão por responsável são o registro canônico, não cópias de um índice. **Cada decisão existe em apenas um arquivo Markdown de decisões, com um único responsável final.** Quando for resolvida, atualizar seu registro único e o link/status do índice; manter o histórico no próprio registro e no Git. Outros documentos, como requisitos e trilhas, podem referenciar o ID como rastreabilidade, mas não devem duplicar fichas de decisão.

## 7. Procedimento para mudanças

1. Criar um novo ID para a nova decisão ou revisão.
2. Referenciar o ID da decisão anterior.
3. Registrar o que mudou e por quê.
4. Preservar as opções e justificativas já registradas.
5. Atualizar o status da decisão anterior para “Substituída” apenas quando a nova decisão estiver efetivamente aprovada.
6. Atualizar requisitos, backlog, plano e documentação afetados.
7. Registrar evidência da implementação e validação.

## 8. Regra para o apoio de IA e ferramentas

O assistente e ferramentas de desenvolvimento devem:
- Registrar fielmente o que foi dito e distinguir fato, proposta, hipótese e decisão.
- Não inventar opções consideradas, justificativas, aprovações ou evidências.
- Perguntar a Marina quando a autoridade, aprovação, motivo do descarte ou decisão efetiva não estiverem claros; nunca atribuir a Matheus por inferência temática.
- Registrar em campos separados quem decidiu/aprovou e que Marina comunicou a decisão, inclusive quando o decisor foi Matheus.
- Atualizar os arquivos pertinentes sem apagar entradas anteriores.
- Confirmar o resultado da atualização e apontar o que continua pendente.

## 9. Modelo rápido para novas decisões

```markdown
### DEC-XXX — Título
- Data:
- Contexto/problema:
- Proponente:
- Responsável pela decisão:
- Consultados:
- Critérios:
- Opções consideradas:
  - A:
  - B:
- Opções descartadas e motivos:
- Opção aprovada:
- Justificativa:
- Comunicado por:
- Aprovador/data:
- Status:
- Execução/responsável/prazo:
- Evidências:
- Validação:
- Impactos:
- Decisão anterior relacionada:
- Pendências:
```

**Regra final:** o histórico deve permitir que alguém que não participou das conversas entenda o que foi decidido, por que foi decidido, quais alternativas foram descartadas, quem autorizou, como foi executado e como sua conclusão foi verificada.

## 10. Esclarecimento de governança de autoria e fonte — 2026-10-31

Marina determinou que continuará existindo separação entre decisões dela e de Matheus, mas **ela é a única pessoa que determina quais itens pertencem a cada um e a única fonte que comunica as respostas de ambos**. Ela poderá informar posteriormente uma decisão tomada por Matheus, caso em que o decisor registrado será Matheus, o comunicador será Marina e o histórico de alternativas e justificativas será preservado. Quando Marina não indicar o decisor ou a aprovação, o assistente deve cobrar essa informação, sem classificar nem aprovar por suposição.

**Retificação histórica:** a DEC-024 foi inicialmente atribuída a Matheus por inferência. Marina exigiu que a classificação partisse apenas dela; posteriormente, em 2026-10-31, atribuiu explicitamente a DEC-024 à lista de Matheus, com resposta provisória definida por ela e status REVISAR. O histórico dessas etapas não deve ser apagado. Outros itens antigos classificados por inferência continuam sujeitos à conferência com Marina.

## 11. Duas categorias de titularidade de decisão — orientação de Marina (2026-10-31)

1. **Decisões da Marina:** decisões cuja palavra final pertence a Marina; a definição pode ser revista futuramente, sem atribuir automaticamente aprovação a Matheus.
2. **Decisões do Matheus:** incluem tanto (a) decisões que só Matheus pode tomar quanto (b) decisões cuja resposta provisória Marina formula, mas precisa validar com Matheus. A inclusão nessa categoria é determinada **exclusivamente por Marina**. Em ambos os casos, a pauta ativa fica em `docs/09-decisoes-matheus.md`, não em `docs/08-decisoes-marina.md`. A resposta pode chegar sempre por Marina, mesmo quando a aprovação é de Matheus.

**Campos distintos:** categoria/quem deve confirmar; autoria da resposta provisória; responsável pela aprovação final; comunicado por; status; justificativas e alternativas efetivamente discutidas. Não declarar que Matheus participou ou concordou sem relato explícito de Marina.

**Status REVISAR:** resposta provisória já informada por Marina, mas requer discussão/validação de Matheus. Pode orientar planejamento sujeito à revisão; **não é aprovação final de Matheus nem autorização implícita de implementação**. Quando Marina informar a confirmação de Matheus, registrar data, `Aprovador: Matheus`, `Comunicado por: Marina` e mover para resolvido. Se Matheus alterar a resposta, preservar integralmente a anterior, as alternativas, o motivo da mudança quando conhecido e o vínculo entre registros.

## 12. Tags coloridas para os arquivos Markdown de decisões

Exibir em `docs/04-decision-log.md`, `docs/08-decisoes-marina.md` e `docs/09-decisoes-matheus.md` uma tag colorida por item; o texto é parte essencial do status e a cor é um auxílio visual:

- 🟢 **RESOLVIDO:** decisão tomada e questão resolvida pelo responsável informado; não confundir aprovação com implementação/validação técnica.
- 🟡 **REVISAR:** existe resposta provisória/diretriz, mas ela ainda precisa ser discutida, revisada ou aprovada; inclui resposta de Marina aguardando Matheus.
- 🔴 **SEM RESPOSTA:** ainda não há resposta efetiva à questão registrada.

Usar badges Markdown visíveis no GitHub, respectivamente:
- `![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e)`
- `![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800)`
- `![SEM RESPOSTA](https://img.shields.io/badge/STATUS-SEM%20RESPOSTA-d73a49)`

O badge **não substitui** o registro de responsável, origem da resposta, justificativa, alternativas e data de aprovação. Um item parcialmente respondido pode usar REVISAR e enumerar os subitens ainda sem resposta. Não marcar como verde pela simples existência de uma proposta, nem presumir a titularidade de itens legados por estarem em uma fila.

## 13. Unicidade obrigatória — instrução explícita de Marina (2026-10-31)

**Regra:** exatamente **um responsável final por decisão** e **um único arquivo Markdown canônico**. Não criar a mesma decisão em `docs/08-decisoes-marina.md` e `docs/09-decisoes-matheus.md`, nem manter uma ficha espelhada de transferência ou histórico da decisão no arquivo da outra pessoa.

- O **responsável final** define em qual arquivo a decisão é registrada: Marina → `docs/08-decisoes-marina.md`; Matheus → `docs/09-decisoes-matheus.md`.
- **Autoria da resposta provisória**, **quem comunicou** (Marina), consultados e participantes **não são responsáveis adicionais**. Uma decisão de Matheus respondida provisoriamente por Marina continua **exclusivamente de Matheus**, com status **REVISAR**, até validação comunicada por Marina.
- **Fluxo de perguntas:** perguntar normalmente sobre o conteúdo da decisão, sem exigir que Marina classifique o responsável antes de responder. Se Marina responder sem indicar Matheus, tratar como decisão sob responsabilidade de Marina, sem presumir aprovação final quando ela não estiver clara. Se ela disser que depende de Matheus, que trará a resposta dele depois ou que precisa revisar/confirmar com ele, classificar como decisão final de Matheus. Não presumir por inferência temática. Se um item antigo contém múltiplos responsáveis ou titularidade presumida, classificá-lo como **pendente de saneamento**; não inventar uma transferência.
- O `docs/04-decision-log.md` é **índice**, não um segundo registro: conter somente ID, tema curto, link para a ficha canônica e tag de situação. As fichas e alternativas completas ficam apenas no arquivo do responsável.
- Requisitos, trilhas e instruções para IAs podem **referenciar** uma decisão, sem recriar uma segunda ficha de decisão.
- Se mudar o responsável, mover a ficha canônica para o novo arquivo de titularidade **somente com indicação explícita de Marina**, removendo o registro ativo do arquivo anterior. O histórico não deve ser destruído: preservar sequência de mudanças, justificativas e versões no Git, junto da ficha canônica atual.
- Manter todos os estados e alternativas considerados no histórico único da ficha. Mudanças de resposta, revisão ou aprovação não criam uma ficha espelhada em outro arquivo.
- **Aplicação confirmada:** a decisão `DEC-024` (pauta `MAT-009`) pertence a Matheus, com resposta provisória informada por Marina e status **REVISAR**. A ficha completa está somente em `docs/09-decisoes-matheus.md`. Não manter `MAR-005` como cópia histórica dessa decisão em `docs/08-decisoes-marina.md`; versões anteriores permanecem acessíveis pelo histórico do Git. O índice `docs/04-decision-log.md` guarda apenas o link.

**Migração de legados:** anteriores a esta regra, há entradas do índice com responsável atribuído por inferência, por mais de uma pessoa ou sem ficha canônica única. Elas exigem conferência com Marina e consolidação progressiva; **não presumir que a migração esteja concluída** até auditá-las e receber as confirmações necessárias.

## 14. Fluxo natural de perguntas e sinalização automática de revisão (2026-10-31)

Marina orientou que o assistente **faça as perguntas de produto normalmente, como se a resposta dependesse apenas dela**, sem interromper cada questão para perguntar previamente a quem ela pertence.

- **Resposta de Marina sem sinalização de Matheus:** prosseguir como decisão de responsabilidade de Marina, respeitando o status de aprovação informado. Não presumir automaticamente que a resposta é aprovação formal se for apresentada como hipótese, dúvida ou proposta.
- **“A decisão é do Matheus; trarei a resposta dele depois” (ou equivalente):** registrar a decisão exclusivamente no arquivo do Matheus, inicialmente **SEM RESPOSTA**, aguardando Marina comunicar a resposta.
- **Marina responde e diz que é preciso “revisar com Matheus”, “confirmar com Matheus” ou equivalente:** classificar **automaticamente como decisão do Matheus**, com **resposta provisória de Marina** e status **REVISAR**. O responsável único pela confirmação final é Matheus; a fonte que comunica a decisão continua sendo Marina.
- **Revisão final recebida de Marina:** registrar o que Matheus confirmou ou alterou, a data e os motivos conhecidos; somente então mudar para **RESOLVIDO** se o assunto estiver efetivamente encerrado. Preservar integralmente a resposta provisória e todas as alternativas efetivamente consideradas.
- **Sem duplicações:** uma decisão sob responsabilidade final de Matheus não deve ser copiada para o arquivo de Marina, mesmo quando ela tiver dado a resposta provisória. O registro geral permanece como índice de todas as decisões.
- **Ambiguidade real:** pedir esclarecimento apenas quando necessário para registrar corretamente o estado ou responsável; não tornar a classificação uma pergunta obrigatória para toda definição.

**Registro histórico da DEC-025:** inicialmente Marina respondeu provisoriamente que exercícios eram obrigatórios, atribuindo confirmação a Matheus (REVISAR). Depois Marina transferiu explicitamente a decisão para si e definiu exercícios opcionais e avaliação obrigatória, sem necessidade de confirmação de Matheus (RESOLVIDO). Registro canônico atual: `docs/08-decisoes-marina.md`; o registro anterior no arquivo de Matheus foi retirado sem apagar o histórico de Git.


## 15. GitHub integral e Notion exclusivamente executivo — esclarecimento de Marina (2026-10-31)

A adoção do Notion (DEC-026) **não altera, reduz nem substitui absolutamente nenhum registro ou processo do GitHub**. O GitHub é a fonte **única e integral** de todas as informações do projeto, incluindo tarefas técnicas e não técnicas, responsáveis, marcos, status, cronograma, decisões e seus históricos, evidências, riscos, requisitos, documentação e código.

O Notion é um **relatório executivo extraído de informações que já estejam registradas no GitHub** para oferecer transparência a Matheus. Não será usado como fonte independente de tarefas, decisões, aprovações ou situação das entregas. Informações vistas no Notion — mesmo as atualizadas pelo Claude Code — precisam existir antes no GitHub. Qualquer divergência é resolvida corrigindo o relatório derivado conforme o GitHub.

O documento canônico de síntese é `docs/12-relatorio-executivo.md` e o esquema de publicação está em `docs/11-estrutura-notion.md`. Não confundir publicar um resumo no Notion com aprovar/registrar uma decisão ou concluir uma tarefa. O status `RESOLVIDO` de DEC-026 atesta a escolha do uso, **não** a implantação técnica do Notion, ainda pendente.

As regras anteriores de um único responsável, ficha canônica exclusiva por decisor e índice geral no GitHub permanecem integralmente em vigor.

## 16. Revisão expressa de DEC-025 e novas decisões de exercícios — 2026-10-31

Marina transferiu **DEC-025** da pauta de Matheus para suas próprias decisões. A resposta provisória antiga — exercícios obrigatórios, sob revisão de Matheus — foi substituída por decisão final de Marina: **exercícios de prática opcionais, avaliação da aula obrigatória**. A ficha completa fica só em `docs/08-decisoes-marina.md`, com o histórico da mudança; a antiga cópia do arquivo de Matheus foi retirada, preservando o histórico Git. Status: **RESOLVIDO**.

Também são decisões de Marina, sem validação de Matheus indicada: **DEC-027**, aba “Exercícios” com filtros de curso, módulo, aula e dificuldade; e **DEC-028**, lista de revisão por módulo combinando questões de várias aulas. Não inferir bloqueio adicional de progresso pelas listas. **Histórico de pendência de acesso (posteriormente resolvida):** a primeira versão da DEC-027 deixou em aberto se a biblioteca de exercícios poderia liberar conteúdos de cursos não contratados; o possível conflito com REQ-003/REQ-004 foi sinalizado. Em seguida, Marina esclareceu expressamente que cada exercício pertence a uma aula, módulo e curso e **herda as mesmas permissões do curso**. Quem não acessa o curso não acessa seus exercícios, inclusive pela biblioteca ou pelas revisões de módulo. A regra ficou registrada como complemento da própria DEC-027 em seu único arquivo canônico (`docs/08-decisoes-marina.md`), com status RESOLVIDO. Não criar registro duplicado de decisão para essa complementação.

**Esclarecimento adicional de interface, comunicado por Marina em 2026-10-31:** o aluno deve saber que há mais exercícios em cursos não contratados e poder conhecer opções de planos maiores, **mas não deve visualizar cada exercício bloqueado individualmente**. A biblioteca deve apresentar **somente indicação agregada de existência de exercícios adicionais bloqueados por curso/área**, sem listar questões, identificadores, enunciados, alternativas ou respostas dos exercícios protegidos. Nenhum direito de acesso extra é concedido pela descoberta comercial. Nomes/preços de planos, elegibilidade e caminho de upgrade continuam pendentes. Trata-se de complemento da **única DEC-027** no arquivo da Marina, não de decisão duplicada. A versão anterior admitia interpretação de exibição individual e foi esclarecida expressamente; manter o histórico no Git. Aprovação de regra não equivale a implementação.


## 17. Consulta obrigatória ao GitHub antes de propor decisões ou próximos passos — 13/11/2026

**Instrução expressa de Marina à PM:** “SEMPRE CONFIRA O GITHUB”; não recircular etapas realizadas nem repetir perguntas já respondidas. A PM deve ser o mecanismo de organização e controle de memória operacional do projeto, não um novo gerador de pautas genéricas a cada conversa.

**Procedimento obrigatório de abertura de trabalho:**
1. Consultar primeiro a **main efetiva** do repositório e os **PRs ainda abertos** (conteúdo em revisão não é automaticamente vigente); inspecionar as **Issues** relevantes e seus comentários recentes.
2. Reconciliar **decisões canônicas de Matheus/Marina (docs/09 e docs/08), índice docs/04, requisitos docs/03, escopo/roadmap e artefatos técnicos**. Quando o usuário questionar algo já feito, verificar a evidência antes de sugerir repetição.
3. Separar de modo explícito **(a) concluído/validado, (b) definido mas não executado, (c) tecnicamente em análise, (d) efetivamente sem decisão, (e) bloqueado por autorização**. Não chamar todo (b)/(c)/(e) de “pendência de definição”.
4. Para ata nova, comparar com a última decisão existente e só criar novo **DEC** se houver **nova escolha ou alteração de regra**, com um único registro canônico por responsável confirmado por Marina. Endossos, hipóteses, propostas, preços ilustrativos e ações de acompanhamento permanecem como notas/links, sem duplicar DEC.
5. Atualizar **GitHub primeiro**: fonte de reunião, decisão, índice, requisitos afetados, Issue/cronograma e controles de gate. Verificar a leitura final dos arquivos/Issues modificados. **Notion é apenas projeção executiva dos dados já persistidos no GitHub**, nunca substitui documentação/Issues.
6. Nenhuma ata ou decisão de produto autoriza automaticamente **programação, compra, custo adicional, acesso a dados reais, migração, merge, publicação ou deploy**. Manter aprovação de execução por lote e evidência separada.

**Baseline comunicado em 13/11:** stack e orçamento já foram trabalhados/apresentados a Matheus; aprovação de custos MAT-011 comunicada por Marina; jurídico OK informado por Marina; pedagógico e financeiro pertencem a Matheus. Reunião de 11/11 registrada em [docs/51](51-registro-reuniao-semanal-2026-11-11.md), **DEC-084/085 em docs/09**, com reflexo em docs/04, docs/03 e Issues. Essas frentes **não devem ser devolvidas como macroblocos de discussão genérica**.
