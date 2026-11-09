# Roadmap Preliminar — Plataforma Privilège

**Versão:** 0.3 — gates atuais e fases históricas identificadas  
**Status:** definição funcional em consolidação; **nenhuma data de entrega, MVP ou execução aprovada**  
**Última atualização:** 2026-11-02

## Princípios
- O roadmap representa fases e dependências, não uma promessa de entrega.
- A meta de referência de 30 dias só poderá ser confirmada após aprovação do escopo e estimativa.
- Itens não validados devem permanecer identificados como pendentes.
- **Todo o roadmap, todas as tarefas (técnicas e executivas), status, responsáveis, estimativas, prazos, dependências e decisões ficam no GitHub** como fonte única de verdade. O Notion apresenta **somente um relatório executivo derivado** dos marcos e entregas relevantes já registrados no GitHub.

## Sequência de planejamento aprovada — DEC-035

**Marina definiu que não se deve dividir o produto entre MVP e versões finais enquanto o escopo integral, a stack e o comparativo de custos não estiverem concluídos.** A sequência obrigatória de gestão é:

1. **Definir o produto completo:** documentar todas as funcionalidades desejadas, inclusive futuras, requisitos, regras de negócio, segurança, dados, experiências de alunos/professores/administração, integrações e pendências de validação. Não selecionar ainda o subconjunto do MVP.
2. **Definir a stack completa:** escolher arquitetura e fornecedores compatíveis com todo o produto, com atenção a segurança, confiabilidade, evolução e escalabilidade. Escolha formal sujeita à aprovação pertinente.
3. **Comparar e estimar custos:** para cada componente/funcionalidade, calcular ou sinalizar incertezas de produção, mínimo mensal fixo, variável por aluno, variável administrativo, cenários de escala e alternativas. Manter toda análise no GitHub. Nenhum custo indefinido se torna R$0.
4. **Aprovar custos e separar entregas por versão:** Marina decide, com o comparativo em mãos, o que será primeira versão e o que ficará para versões posteriores; então definir prioridades, cronograma realista e orçamento.
5. **Auditar e autorizar execução:** antes de enviar pacotes ao Claude, aplicar DEC-029 e gates financeiros da DEC-032; registrar a decisão e suas aprovações no GitHub. Notion mostra somente relatórios derivados.

**Durante a descoberta do escopo:** cada decisão funcional ainda deve ter mapeados seus possíveis gatilhos de custo, sem necessidade de inventar estimativas monetárias antes da stack. A análise financeira consolidada ocorre na fase 3; aprovação financeira é independente da funcional e precede execução e contratação. Fases abaixo são referências de execução **posteriores à fase de definição**, não autorização para iniciar implementação agora.

## Painel vigente de gates — DEC-035

| Gate | Critério de passagem | Situação em 2026-11-02 |
|---|---|---|
| G1 — Escopo integral | Cobertura e regras funcionais completas, com titularidades e exceções discriminadas; reunião única de Matheus sobre pendências comerciais/pedagógicas | **Em consolidação** — AUD-001/002/003 em correção; cinco frentes operacionais detalhadas em `docs/11-detalhamento-final-operacional.md`, dependências ainda abertas |
| G2 — Arquitetura e stack | Escolher tecnologias, infraestrutura e serviços para o produto inteiro, com segurança, privacidade e escalabilidade | **Não iniciado/aprovado** |
| G3 — Estimativa de custo | Comparativo por funcionalidade e cenários: implantação, mensal fixo mesmo ocioso, variável por aluno/professor/administrador/serviço | **Não aprovado**; gatilhos qualitativos registrados |
| G4 — Orçamento e versões | Aprovação financeira expressa; **depois** decidir MVP, versões, cronograma e metas | **Não autorizado** |
| G5 — Auditoria e autorização de execução | Checklist DEC-029, dependências resolvidas, custos aprovados e liberação expressa para Claude | **Não autorizado** |

**Bloqueios de governança:** decisões DEC-024 e DEC-067 permanecem sob Matheus; notas acadêmicas, contratos/planos, cancelamentos e demais parâmetros não podem ser presumidos. Estimativas não são compromisso de pagamento. O GitHub contém o planejamento integral; Notion somente status executivo derivado.

## Fases históricas de implementação — cenário preliminar, sem compromisso

As atividades e marcos abaixo permanecem como referência anterior para preservar rastreabilidade. **Não são uma seleção de MVP, um cronograma aprovado nem autorização para iniciar tarefas.** A implantação real será replanejada após G1–G4.

## Fases propostas

| Fase | Atividades principais | Saída esperada |
|---|---|---|
| 1. Alinhamento e descoberta | Validar objetivos, público, escopo, jornadas, regras comerciais, avaliação e critérios de sucesso | Project Charter e baseline do MVP aprovados |
| 2. Definição do produto e arquitetura | Modelar catálogo, planos/direitos de acesso, teste de nivelamento, trilhas, progressão, avaliações e integrações | Requisitos priorizados e decisões técnicas registradas |
| 3. Fundação técnica | Preparar repositório, ambientes, autenticação, estrutura da aplicação e banco de dados | Base técnica testável |
| 4. Experiência de aprendizagem | Construir catálogo, cursos, módulos, aulas, vídeo, **prática opcional**, avaliações obrigatórias, tentativas e desbloqueio sequencial; avaliar esforço da aba geral de exercícios e revisão por módulo | Jornada principal de aprendizagem funcional, com escopo complementar sujeito a priorização |
| 5. Trilhas, administração e comercial | Construir trilhas reutilizando cursos, gestão administrativa, assinatura recorrente e controle de acesso | Operação administrativa e comercial integrada |
| 6. Qualidade e lançamento | Testes funcionais, regras de avaliação, permissões, segurança, responsividade, revisão de conteúdo e piloto | MVP validado para lançamento controlado |

## Marcos de controle propostos
1. **M1 — Escopo aprovado:** público, proposta de valor, catálogo inicial e funcionalidades do MVP aprovados.
2. **M2 — Regras comerciais aprovadas:** planos, preços, acesso ao catálogo/cursos, recorrência, cobrança e serviços adicionais definidos.
3. **M3 — Regras pedagógicas aprovadas:** teste de nivelamento, trilhas, nota mínima, tentativas e conclusão de aula definidos.
4. **M4 — Arquitetura definida:** stack, serviços externos, custos e responsabilidades documentados.
5. **M5 — Fluxo principal implementado:** aluno acessa curso, conclui aula e realiza atividades/avaliações.
6. **M6 — Operação administrativa e assinatura testadas:** gestão de conteúdo, planos e direitos de acesso validados.
7. **M7 — Piloto concluído:** critérios de aceite, problemas críticos e plano de lançamento avaliados.

## Dependências críticas
- Aprovação do patrocinador.
- Disponibilidade de conteúdo e equipe para revisão.
- Decisão sobre hospedagem e entrega de vídeos.
- Definição do provedor de pagamento recorrente.
- Regras de assinatura, cancelamento, inadimplência e acesso.
- Definição de nota mínima, critério de conclusão e política de tentativas.
- Definição de trilhas e critérios do teste de nivelamento.
- Disponibilidade de usuários para testes de aceitação.

## Necessidades adicionais de exercícios — aguardando dimensionamento

- **DEC-025 / REQ-012:** exercícios de prática **opcionais**; avaliação da aula **obrigatória** e determinante para conclusão/desbloqueio.
- **DEC-027 / REQ-018:** biblioteca geral de exercícios com filtros por curso, módulo, aula e dificuldade.
- **DEC-028 / REQ-019:** listas de revisão por módulo integrando conteúdos das aulas de cada módulo.
- **Regra de autorização já definida por Marina (DEC-027):** exercícios herdam acesso do curso ao qual pertencem; nunca permitir prática de um curso não contratado, inclusive pela biblioteca e revisões de módulos.
- **Apresentação definida por Marina (DEC-027):** somente **indicadores agrupados de exercícios adicionais em cursos bloqueados** devem ficar visíveis, com convite para conhecer planos mais abrangentes. **Não listar individualmente exercícios de cursos não contratados**, nem expor enunciados/respostas ou permitir prática.
- **Dependências antes de estimar/programar:** quantidade de exercícios, estrutura de metadados/dificuldade, criação das listas, modelo de upgrade e ofertas comerciais reais (a definir), além dos detalhes da experiência de prática.
- **Controle de escopo:** são definições de produto aprovadas por Marina, **não** compromisso automático de inclusão no MVP nem extensão aprovada do prazo de 30 dias. Registrar estimativas, prioridades e tarefas no GitHub antes de assumir cronograma.

## Planejamento detalhado
O planejamento detalhado e o próprio resumo executivo permanecerão documentados e versionados no GitHub. O PM apresentará no Notion somente datas e previsões dos **marcos de alto nível** que já constem do GitHub, e os desvios relevantes para Matheus, também registrados previamente lá. Não atribuir datas definitivas nem declarar andamento «em dia» sem cronograma de referência validado; a meta preliminar de 30 dias não é uma baseline confirmada.


## Atualização de acompanhamento G1 — 2026-11-05 (auditoria incremental)
- **G1 permanece EM CONSOLIDAÇÃO / NÃO HOMOLOGADO.** Foram confirmadas por Marina as decisões funcionais DEC-074–079 e os complementos comunicados de 03–05/11 sobre plantões, avaliação não eliminatória, progressão e certificados. Não confundir conclusão desses blocos com aprovação integral do escopo.
- **Checklist de reconciliação:** consultar `docs/25-p08-checklist-aceitacao-funcional.md` (auditoria incremental de 05/11). Há critérios de aceite históricos obsoletos (plantão sem reserva, nota eliminatória, duas tentativas) nos documentos base que precisam ser harmonizados com as decisões prevalentes.
- **Bloqueios atuais:** validar titularidades/respostas comerciais atribuídas a Matheus, políticas comerciais remanescentes, desenho de trilhas/nivelamento, parâmetros de avaliação interrompida e alteração de gabarito, fluxos operacionais de menores e dependências jurídicas JUR-01–11. O parecer jurídico foi solicitado pela equipe, mas não há aprovação jurídica comprovada por este acompanhamento.
- **G2–G5:** não autorizados por este registro. Sequência obrigatória preservada: concluir e homologar G1, definir stack integral, estimar/analisar custos, decidir versões/MVP, auditar e autorizar execução.
- **Sem alteração de prazo:** meta antiga de 30 dias permanece apenas referência não aprovada; nenhuma data de entrega ou custo foi assumida.


## Status de gestão após DEC-080 — 2026-11-05
- Foram confirmadas **15 novas diretrizes do G1** (6 de nivelamento/trilhas, 4 de avaliações/conteúdo, 5 de contratação/operação). O GitHub contém o registro vinculante em `docs/08-decisoes-marina.md`, requisitos em `docs/03-requirements.md`, índice em `docs/04-decision-log.md`, trilhas em `docs/07-learning-paths.md` e auditoria em `docs/25-p08-checklist-aceitacao-funcional.md`.
- **G1 continua não homologado**, porque há parâmetros concretos de conteúdo, regras comerciais/financeiras de contrato e pareceres JUR-01–11 pendentes, além da reconciliação dos trechos históricos conflitantes.
- **Próximo trabalho interno da PM:** consolidar textos operativos de requisitos/testes antigos sem reabrir escolhas, classificar pendências por alçada e preparar pacote de validação formal para Matheus/jurídico.
- **G2, G3, G4 e G5:** nenhum autorizado. Não escolher stack, estimar custos como aprovados, assumir cronograma, definir MVP ou encaminhar ordem de execução ao Claude.


## Atualização de gestão — 2026-11-07
Marina autorizou acelerar a consolidação gerencial interna de G1 e preparar **propostas G2 e G3 para Matheus**, considerando que o Claude Code já está disponível como executor. Proposta arquitetural e tabela de custos públicos com cenários em `docs/27-proposta-stack-e-custos-2026-11-07.md`. **Nenhum fornecedor, stack, orçamento, contrato ou execução foi aprovado por essa autorização de análise.** G1 integral permanece condicionado às decisões externas e auditoria de consistência documental; G4 e G5 seguem dependentes de aprovações posteriores.


## Auditoria pós-reunião 03/11 — status corrigido (2026-11-08)
**Documento de referência atualizado:** `docs/33-auditoria-pendencias-reais-pos-reuniao-2026-11-08.md`. A ata e transcrição da reunião de 03/11 comprovam que **DEC-024/MAT-009 (vídeo completo) foi resolvida por Matheus: NÃO exigir 100% da reprodução**; o pacote DEC-067/MAT-014 foi **parcialmente resolvido**, completado por DEC-082 (Plano 1 digital) e DEC-083 (Plano 3 com duas particulares de 50min). Comercialização separada de Travel/Business com Basic bônus já definida; cancelamento com aviso 30 dias e referência de 20% para quebra antecipada também alinhados, sujeitos a jurídico. **Não transformar o histórico pendente deste roadmap em pauta de nova reunião.** Faltam valores finais, fórmulas/contratos, parâmetros pedagógicos concretos, disponibilidade/custo docente, fornecedores, jurídico e liberação de gates G1–G5. Nenhum prazo de execução aprovado.
