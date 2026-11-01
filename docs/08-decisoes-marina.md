# Decisões da Marina a Tomar — Plataforma Privilège

**Última consolidação:** 2026-10-31  
**Responsável pelas respostas:** Marina  
**Finalidade:** registrar as decisões efetivamente atribuídas a Marina e as pendências sob sua responsabilidade. Se Marina indicar que a definição depende de Matheus ou da validação dele, o registro canônico da decisão pertence exclusivamente ao arquivo do Matheus, sem cópias, espelhos ou blocos de histórico no arquivo da Marina. O histórico de mudanças é preservado no Git e no próprio registro canônico.

## Como usar este arquivo
- Quando Marina disser "isso é uma decisão minha, mas vou responder depois" ou "coloca nas minhas decisões", adicionar um item aqui.
- Quando Marina responder a um item, registrar a decisão, a data, sua aprovação (quando indicada) e os documentos afetados, sem apagar o histórico. Decisões dela podem mudar depois e toda revisão deve ser rastreada.
- Somente Marina determina se a decisão pertence a ela ou a Matheus. Tanto decisões exclusivas de Matheus quanto respostas provisórias dela que precisem de validação dele ficam na lista do Matheus. Não presumir participações ou validações por tema.
- Não tratar sugestões do assistente como decisões aprovadas.
- Itens com responsável ainda não confirmado ficam identificados como "a confirmar".

## Tags de situação
- ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) decisão tomada e resolvida
- ![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800) decisão respondida provisoriamente, ainda em revisão
- ![SEM RESPOSTA](https://img.shields.io/badge/STATUS-SEM%20RESPOSTA-d73a49) decisão sem resposta

## Decisões resolvidas da Marina

### DEC-026 — Adoção do Notion como painel complementar de execução e transparência
- **Responsável único:** Marina.
- **Data de definição e comunicação:** 2026-10-31.
- **Tag de resposta:** ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** — ferramenta escolhida, implantação ainda não concluída.
- **Contexto:** a configuração inicial previa ClickUp para tarefas; Marina decidiu usar Notion para permitir a Matheus acompanhar execução, mantendo o GitHub como principal fonte de verdade de todo o projeto.
- **Alternativas efetivamente consideradas:** manter ClickUp (ferramenta anteriormente prevista) ou adotar Notion como substituto. Não existe avaliação técnica comparativa formal documentada.
- **Decisão:** substituir ClickUp por Notion **exclusivamente como relatório executivo de acompanhamento do projeto para Matheus**, não como backlog técnico. GitHub continua como ferramenta principal e fonte canônica de tarefas técnicas, documentos, decisões e código.
- **Justificativa comunicada no contexto:** dar transparência ao Matheus sobre o andamento do projeto sem abandonar o GitHub. Não foram informadas métricas quantitativas de comparação.
- **Decisora/aprovadora:** Marina; nenhuma aprovação adicional de Matheus foi informada ou presumida.
- **Comunicado por:** Marina.
- **Decisão anterior:** DEC-002 — escolha operacional do ClickUp, agora com ciclo de vida **Substituída**; preservar o histórico.
- **Condição de execução:** acesso e permissões ao workspace do Notion ainda precisam ser configurados; preparação de esquema/documentação no GitHub não equivale a implantação no Notion.
- **Esclarecimento definitivo de Marina (2026-10-31):** **o GitHub contém ABSOLUTAMENTE TUDO sobre o projeto**: tarefas técnicas e executivas, marcos, responsáveis, status, atualizações, prazos, cronograma, riscos, decisões, requisitos, código, evidências, documentação e histórico. O Notion não substitui nenhuma dessas informações e não pode possuir dados exclusivos. Sua única função é exibir a Matheus um **relatório executivo resumido extraído dos registros já existentes no GitHub** (situação geral, cronograma, entregas, desvios, próximos passos e pontos que dependam dele). ChatGPT/PM organiza e registra tarefas e marcos no GitHub e prepara, também no GitHub, a versão canônica do relatório. Quando um marco atribuído a Claude Code aparecer no Notion, ele poderá atualizar somente o resumo derivado, após registrar no GitHub o mesmo status, previsão, bloqueios e evidências. Qualquer divergência deve ser corrigida a partir do GitHub; jamais usar o Notion para substituir registro oficial.
- **Status de execução:** política e relatório executivo canônico registrados no GitHub; publicação/compartilhamento no Notion ainda pendentes. Não migrar nem retirar NADA do GitHub.
- **Critério de validação:** todos os itens e atualizações (inclusive os dados resumidos no Notion) existem previamente no GitHub; Matheus consegue identificar no relatório executivo se há cronograma validado e se está sendo cumprido, avanços, próximos marcos e impedimentos; Claude pode refletir no Notion somente a versão já registrada no GitHub, após conexão; nenhum dado exclusivo ou aprovação presumida.
- **Documentos afetados:** README.md, docs/04-decision-log.md, docs/06-roadmap.md, docs/08-decisoes-marina.md, docs/11-estrutura-notion.md, docs/12-relatorio-executivo.md e CLAUDE.md.

## Pendências consolidadas da Marina

### MAR-001 — Stack tecnológica
- **Tema:** frontend, backend, banco de dados, autenticação e infraestrutura.
- **Pergunta:** quais tecnologias serão utilizadas?
- **Responsável registrado:** Marina. Qualquer outra validação deverá ser indicada explicitamente por ela.
- **Status:** ![SEM RESPOSTA](https://img.shields.io/badge/STATUS-SEM%20RESPOSTA-d73a49) Em aberto.
- **Origem:** DEC-008.

### MAR-002 — Solução de vídeo
- **Tema:** geração, edição, hospedagem e entrega dos vídeos.
- **Pergunta:** qual solução será adotada e quais requisitos de proteção, qualidade, legendas e acessibilidade serão exigidos?
- **Responsável registrado:** Marina; eventual validação externa somente quando Marina indicar.
- **Status:** ![SEM RESPOSTA](https://img.shields.io/badge/STATUS-SEM%20RESPOSTA-d73a49) Em aberto.
- **Origem:** DEC-010; REQ-011.

### MAR-003 — Jornada operacional dos alunos atuais
- **Tema:** cadastro, migração e concessão inicial de acesso aos alunos que já estudam na Privilège.
- **Pergunta:** como esses alunos serão cadastrados/migrados e quais condições de acesso terão no lançamento?
- **Responsável registrado:** Marina para a parte operacional; eventual decisão comercial de Matheus será separada somente se Marina atribuí-la.
- **Status:** ![SEM RESPOSTA](https://img.shields.io/badge/STATUS-SEM%20RESPOSTA-d73a49) Em aberto.
- **Origem:** REQ-001; seção 8 de docs/02-scope.md.

### MAR-004 — Detalhamento operacional da autenticação
- **Tema:** método de login, recuperação de senha e eventual login social.
- **Pergunta:** quais métodos serão oferecidos no lançamento?
- **Responsável:** Marina, com validação técnica.
- **Status:** ![SEM RESPOSTA](https://img.shields.io/badge/STATUS-SEM%20RESPOSTA-d73a49) Em aberto.
- **Origem:** REQ-002.

### MAR-006 — Produção e formato dos resumos escritos
- **Tema:** operação de criação e publicação dos resumos de aula.
- **Pergunta:** quem produzirá/revisará os resumos, em qual formato e com quais padrões editoriais?
- **Responsável registrado:** Marina para o processo; eventual validação externa a confirmar apenas se Marina indicar.
- **Status:** ![SEM RESPOSTA](https://img.shields.io/badge/STATUS-SEM%20RESPOSTA-d73a49) Em aberto / decisão compartilhada.
- **Origem:** REQ-017; DEC-023.
- **Observação:** já está definido que o resumo escrito será usado para revisão antes da segunda tentativa e que não será necessário rever o vídeo.

### MAR-007 — Prioridades e planejamento de entrega
- **Tema:** priorização do backlog, fases e capacidade de execução.
- **Pergunta:** quais funcionalidades entram primeiro após estimativa de esforço e dependências?
- **Responsável registrado:** Marina; qualquer encaminhamento a Matheus deverá ser indicado por ela.
- **Status:** ![SEM RESPOSTA](https://img.shields.io/badge/STATUS-SEM%20RESPOSTA-d73a49) A definir após decomposição dos requisitos.
- **Origem:** roadmap e RSK-003.

## Registro de novas decisões
Adicionar novos itens no formato:
- **ID:** MAR-XXX
- **Tema / pergunta:**
- **Contexto e alternativas:**
- **Responsável / participantes:**
- **Tag colorida:** RESOLVIDO / REVISAR / SEM RESPOSTA
- **Status do ciclo:** pendente / em revisão / aprovada / etc.
- **Autoria / responsabilidade / comunicado por:** registrar conforme Marina informar
- **Data da decisão:**
- **Decisão e justificativa:**
- **Documentos/requisitos afetados:**

## Histórico
Apenas constar nesta fila não significa aprovação. Respostas e alterações dependem do que Marina comunicar. Transferências de responsabilidade não devem deixar cópias da decisão neste arquivo; o histórico de alterações permanece no versionamento Git.
