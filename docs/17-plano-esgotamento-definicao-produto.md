# Plano de esgotamento das definições de produto — Privilège
**Preparação de PM:** 2026-11-02 | **Situação:** PLANO DE TRABALHO, não homologação de escopo.
**Objetivo:** chegar à reunião com Matheus com tudo que possa ser preparado de forma autônoma pronto, e deixar somente decisões de sua alçada expressamente confirmada e dependências externas (especialmente jurídico/privacidade) para validação. Não afirmar que toda pendência pertence a Matheus.

## 1. Distinção dos marcos
- **Produto pronto para decisão:** documentação e recomendações com critérios de aceite completos; pendências explicitamente classificadas.
- **G1 — escopo integral fechado:** após decisões necessárias, validações e homologação expressa.
- **G2 — arquitetura/stack:** comparação após G1, sem pressupor fornecedores.
- **G3 — custos:** implantação, fixo mensal em ociosidade, variável por aluno/professor/atendimento/armazenamento/integração e operação, com cenários de uso.
- **G4 — versões/MVP:** só depois de stack e custos.
- **G5 — auditoria e autorização:** DEC-029; depois disso, eventual handoff para Claude.

## 2. Trabalho preparável imediatamente sem Matheus
| Pacote | Entregável verificável | Fonte | Estado |
|---|---|---|---|
| P-01 | Revisão cruzada requisitos–decisões–escopo–trilhas–riscos, apontando contradições e IDs canônicos | docs/02,03,04,07,08,09,10 | PREPARAR/REVISAR |
| P-02 | Jornadas completas de cadastro, recuperação, migração e representação de menores, com condições, erros e reversão | AUD-004, DEC-071–073 | BASE EXISTENTE; aprofundar e validar |
| P-03 | Operações de particulares e plantões: estados, eventos, escalas, falhas, moderação e comunicação | AUD-007, REQ-048 | BASE EXISTENTE; aprofundar e validar |
| P-04 | Matriz de autorização por recurso, operação e papel, incluindo exceção, negação e auditoria | AUD-008, JUR-06 | BASE EXISTENTE; falta matriz exaustiva |
| P-05 | Proteção de média docente: cenários de reidentificação, atualização, exclusões e contramedidas, com limiar condicional >=5 | DEC-073, JUR-05 | BASE EXISTENTE; avaliação de privacidade pendente |
| P-06 | Dicionário dos KPIs e regras de disponibilidade, exportação, filtros e visibilidade | AUD-009, REQ-052 | BASE EXISTENTE; detalhar fórmulas não comerciais |
| P-07 | Matriz de direitos de alunos, certificados e impactos de mudanças editoriais, sem decidir cobrança ou nota mínima | DEC-052–063, DEC-071–073 | PREPARAR |
| P-08 | Checklist de aceite funcional por jornada e cenários adversos, sem transformar em tarefas de desenvolvimento | docs/12 e REQ-001–052 | PARCIAL |
| P-09 | Matriz jurídica com questões concretas, alternativas e evidências para parecer | docs/16 | PREPARADA; parecer externo pendente |
| P-10 | Material executivo para Matheus: perguntas unificadas, alternativas, impacto nas regras, consequências de não decidir e ata | docs/09,13 | PAUTA PREPARADA; revisar respostas e titularidades |
| P-11 | Cenários para futura comparação de stack e estimativa de custos sem escolher stack, valores ou fornecedores | docs/12, DEC-032/035 | BASE CONCEITUAL EXISTENTE |
| P-12 | Controle de pendências e pacote de aceite para handoff futuro ao Claude | docs/10,14,16 | PREPARAR; execução não autorizada |

## 3. Dependências externas que não podem ser declaradas concluídas
| Dependência | Quem responde | Status | Como adiantar |
|---|---|---|---|
| DEC-024 (exigência de vídeo completo) e DEC-067/MAT-014 (comercial de aulas/plantões) | Matheus, expressamente atribuído por Marina | EM ABERTO | Preparar alternativas e impacto |
| MAT-001–012 históricos: modelo comercial, pedagogia, catálogo, orçamento e outros | Titularidade precisa ser confirmada por Marina; não atribuir indiscriminadamente a Matheus | EM ABERTO | Agrupar questões sem presumir aprovador |
| JUR-01 a JUR-11, em especial menores, recuperação sem e-mail, médias docentes e ECA Digital | Assessoria jurídica/privacidade | SEM PARECER | Preparar documentação e evidências; decisões operacionais finais dependem do resultado |
| Política de média docente >=5 | Marina aprovou condicionalmente | BLOQUEADA PARA IMPLEMENTAÇÃO | Testar ameaça de inferência e apresentar mitigação para parecer |
| Stack, custo, MVP, baseline e implementação | Gates DEC-035/029 | NÃO AUTORIZADOS | Levantar hipóteses e critérios sem decidir |

## 4. Definição de pronto documental (para apresentar a Marina)
- [ ] Cada requisito vigente rastreável a uma decisão competente e a cenários de aceite.
- [ ] Regras vigentes separadas de propostas, parâmetros condicionados e pendências.
- [ ] Fluxos principais e exceções cobertos com entradas, estados, saídas e erros.
- [ ] Permissões, menores, retenção, auditoria e privacidade mapeados para parecer.
- [ ] Riscos operacionais e dependências comerciais/pedagógicas classificados.
- [ ] Pauta Matheus com perguntas que possam ser respondidas em uma sessão.
- [ ] Matriz de pendências aponta responsável, gatilho de fechamento e efeito sobre G1.
- [ ] Ao final, somente assinalar G1 como concluído após todas as validações necessárias e aprovação expressa.

## 5. Próxima sequência de PM
1. Conferir P-01 e identificar lacunas reais, evitando repetição dos requisitos já aprovados.
2. Fechar internamente especificações e propostas P-02 a P-08, agrupadas para confirmação de Marina quando alterarem regra de produto.
3. Formalizar pacote de parecer P-09 (jurídico externo permanece pendente).
4. Refinar e congelar pauta de Matheus P-10 após confirmação de titularidades por Marina.
5. Preparar P-11/P-12 para transição rápida após G1. Handoff para Claude somente após G5.

GitHub é a fonte integral; Notion apenas visão executiva derivada. Nenhuma decisão automática de Matheus, aprovação jurídica, custo, stack, MVP ou implementação.
