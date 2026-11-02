# P-01 — Revisão cruzada do planejamento funcional da Privilège
Data: 2026-11-02. Status: DIAGNÓSTICO DE PM, sem novas aprovações. Escopo da revisão: documentos de escopo, requisitos, índice de decisões, trilhas, decisões de Matheus, auditoria de cobertura e plano de esgotamento de produto. Não examina software em execução.

## Conferências concluídas
1. O índice geral contém **73 entradas únicas DEC-001–DEC-073**, e a DEC-073 está registrada. Isto confirma presença dos IDs, não consistência integral de cada conteúdo.
2. O arquivo principal de requisitos contém **51 seções de REQ-001–REQ-051**; a **REQ-052 está registrada em `docs/15-requisitos-operacionais-dec-073.md`** e referenciada no arquivo principal, porém não possui seção própria `### REQ-052`. Ajuste de consolidação pendente, sem nova decisão funcional.
3. `docs/02-scope.md` diferencia escopo integral vigente e bloco histórico de MVP; porém o corpo histórico conserva títulos e perguntas que, lidos isoladamente, podem parecer regras atuais. Manter história e reforçar precedência quando consolidar.
4. `docs/07-learning-paths.md` ainda contém perguntas pedagógicas em aberto (teste de nivelamento, pré-requisitos, nota mínima e integração de direitos). Não completá-las sem decisão competente.
5. `docs/09-decisoes-matheus.md` mantém DEC-024 e DEC-067/MAT-014 explicitamente atribuídas a Matheus; MAT-001–012 são histórico de titularidade a confirmar por Marina. Não reinterpretar o índice antigo como atribuição definitiva.
6. `docs/10-auditoria-cobertura-funcional.md`: AUD-001/002/003 resolvidos documentalmente; AUD-004/007/008/009 têm diretrizes aprovadas pela DEC-073, mas validações/parametrizações abertas; AUD-005/006/010 pendentes.
7. `docs/16-matriz-validacao-juridica-privacidade.md` contém onze temas JUR-01 a JUR-11 sem parecer recebido: são dependências externas distintas da reunião de Matheus.

## Achados de reconciliação e correção sem redecidir produto
| ID | Achado | Gravidade documental | Ação segura | Próximo responsável | Estado |
|---|---|---|---|---|---|
| P01-01 | REQ-052 reside em documento complementar, não como seção numerada no principal | Média | Incorporar referência canônica com rastreabilidade completa, sem duplicar texto contraditório; preservar suplemento histórico | PM | RESOLVIDO — seção REQ-052 e suplemento preservados |
| P01-02 | Documento de escopo preserva perguntas e MVP antigo; risco de leitura isolada | Média | Inserir tabela de precedência e marcação explícita de trechos históricos sem apagar conteúdo | PM | RESOLVIDO — nota de precedência adicionada |
| P01-03 | Baseline inicial do arquivo de requisitos pode parecer pendência genérica, embora várias regras já estejam aprovadas | Média | Especificar que o status geral é de **homologação integral pendente**, com aprovação por regra/DEC prevalecendo | PM | RESOLVIDO — status de governança esclarecido |
| P01-04 | Pauta histórica MAT possui titularidades a confirmar | Alta — governança | Apresentar separadamente as decisões expressamente atribuídas e as de titularidade ainda não confirmada | Marina valida titularidade; PM prepara | PENDENTE |
| P01-05 | Trilhas/nivelamento e avaliação possuem lacunas pedagógicas reais | Alta — produto | Apresentar alternativas e critérios de impacto sem decidir nota, teste ou vídeo | Decisor competente após confirmação; DEC-024 Matheus | PENDENTE |
| P01-06 | Matriz jurídica foi preparada, mas sem parecer | Alta — privacidade | Preparar evidência e controles candidatos; não afirmar conformidade ou liberar média docente de cinco avaliações | Jurídico/privacidade; Marina | PENDENTE |
| P01-07 | Escopo aprovado não se traduz ainda em catálogo completo de estados, erros e testes de aceite | Alta — prontidão | Desenvolver P-02–P-08 usando requisitos vigentes e sinalizando decisões não tomadas | PM; Marina para novas regras | EM PLANEJAMENTO |

## Domínios e fontes que devem permanecer consistentes
| Domínio | Requisitos e decisões de referência | Condicionantes |
|---|---|---|
| Identidade/alunos/responsáveis | REQ-001/002/020–024/049–052; DEC-036–043/070–073 | Alunos atuais, segurança, representação, jurídico e comercial |
| Compra e direitos | REQ-003/004/020/045; DEC-067 | Planos, preço, inadimplência, créditos; titularidades confirmadas |
| Catálogo, trilhas e nivelamento | REQ-005–011; trilhas `docs/07` | MAT-004–008 conforme atribuições confirmadas |
| Aula, questões e progressão | REQ-012–019/029–031/041; DEC-024/025/063 | Vídeo DEC-024, nota e recuperação |
| Certificado | REQ-032–040; DEC-052–062 | Juridico, menores, retenção, pedagogia |
| Professor e atendimento | REQ-042–045/048/052; DEC-064–067/069/072/073 | DEC-067/MAT-014; moderação e limiar docente condicionado |
| Administração, suporte e dados | REQ-046/047/049–052; DEC-068–073 | Permissões, retenção, jurídico, fontes e fórmulas |

## Critérios de aceitação de P-01
- [x] Verificação de presença e sequência de IDs principais.
- [x] Inventário de riscos de conflito entre textos históricos e atuais.
- [x] Separação de decisões confirmadas de condicionantes e titularidade incerta.
- [x] Corrigir as três ressalvas documentais P01-01–03 com conferência após gravação.
- [ ] Desenvolver especificações de ponta a ponta P-02–P-08 e executar checagem de critérios de aceite.
- [ ] Validar titularidades e parâmetros não decididos com Marina/Matheus/jurídico conforme alçada.

Este diagnóstico NÃO homologa o produto, não decide stack, não aprova custos, MVP, compras nem implementação. GitHub é canônico; Notion somente extrato executivo.
