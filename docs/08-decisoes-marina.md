# Decisões da Marina a Tomar — Plataforma Privilège

**Última consolidação:** 2026-10-31  
**Responsável pelas respostas:** Marina  
**Finalidade:** registrar as decisões efetivamente atribuídas a Marina e as pendências sob sua responsabilidade. Se Marina indicar que a definição depende de Matheus ou da validação dele, a decisão deve constar na lista do Matheus, preservando aqui apenas o histórico da eventual transferência.

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

## Histórico de encaminhamentos transferidos

### MAR-005 — Histórico de acompanhamento da conclusão de aula
- **Status:** ![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800) **REVISAR** (DEC-024 na lista do Matheus); demais componentes sem resposta.
- **Tema original:** definição operacional do que o aluno precisa cumprir em cada aula.
- **Histórico:** a MAR-005 reunia vídeo, exercícios e outros componentes e registrava equivocadamente aprovação pedagógica presumida de Matheus. Depois, Marina esclareceu que apenas ela classifica as decisões. Em 2026-10-31, Marina atribuiu **expressamente a DEC-024 (dispensa de vídeo integral) à lista do Matheus**, com resposta provisória formulada por ela. A partir daí, a DEC-024 é acompanhada em MAT-009, não como decisão independente de Marina.
- **Resposta provisória comunicada por Marina:** o vídeo não precisa ser assistido integralmente se as atividades obrigatórias forem cumpridas e a avaliação for aprovada.
- **Pendente:** confirmar com Matheus a resposta da DEC-024; detalhar quais outras atividades são obrigatórias e confirmar com Marina a titularidade desses outros detalhes.
- **Referências:** DEC-024, MAT-009, DEC-020, REQ-015 e REQ-017.
- **Histórico de versões:** informações anteriores preservadas no Git e no log de decisões.

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
Apenas constar nesta fila não significa aprovação. Respostas e alterações dependem do que Marina comunicar. A DEC-024 foi transferida à pauta Matheus (MAT-009) com status REVISAR, sem apagar a MAR-005 histórica.
