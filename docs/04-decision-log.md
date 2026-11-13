# Registro de Decisões — Plataforma Privilège

**Versão:** 0.2  
**Última atualização:** 2026-10-31

Este documento registra decisões, propostas e pendências relevantes. Marina é a fonte que comunica a titularidade, a resposta e a aprovação. Nem toda decisão depende do patrocinador: a responsabilidade de cada item deve ser indicada expressamente por Marina. Itens de titularidade atribuída anteriormente por inferência exigem conferência, sem apagar o histórico.

## Legenda de status — tags coloridas
- ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO:** decisão tomada e assunto resolvido pelo responsável informado.
- ![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800) **REVISAR:** há resposta ou encaminhamento provisório, que ainda precisa ser discutido, revisado ou confirmado.
- ![SEM RESPOSTA](https://img.shields.io/badge/STATUS-SEM%20RESPOSTA-d73a49) **SEM RESPOSTA:** decisão ainda sem resposta efetiva.

As tags representam o estágio da resposta, **não** a execução técnica. Estados de ciclo de vida como aprovada, em execução, validada, rejeitada e substituída continuam documentados no histórico. As classificações antigas de responsável registradas por inferência precisam ser conferidas com Marina.

**Regra de responsável único:** cada linha deve indicar exatamente um responsável final confirmado por Marina. Onde os registros históricos apresentavam mais de um possível responsável, a coluna passa a indicar **a confirmar com Marina**, sem atribuição por inferência. As atribuições anteriores continuam rastreáveis no histórico Git; esta correção não representa uma mudança de decisão ou de aprovação.

## Registro

**Índice, não repositório de decisões:** os detalhes e o histórico completo de cada decisão pertencem exclusivamente ao arquivo Markdown de seu responsável único. Esta tabela fornece apenas referência e status. A DEC-024 tem seu único registro canônico no arquivo do Matheus. As demais entradas históricas anteriores à regra de unicidade ainda exigem consolidação e confirmação de titularidade com Marina; não assumir que a classificação antiga esteja correta.


| ID | Tema | Definição | Status e situação | Responsável registrado |
|---|---|---|---|---|
| DEC-001 | Repositório | GitHub privado da organização Privilège para código e documentação | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) Aprovada como configuração operacional | Marina |
| DEC-002 | Gestão de tarefas (histórico) | ClickUp foi a escolha operacional inicial; substituída por DEC-026, sem apagar a decisão histórica | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) Ciclo de vida: **Substituída** em 2026-10-31 | Marina |
| DEC-003 | Público inicial | Alunos atuais e novos alunos | ![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800) Pendente de aprovação | Matheus |
| DEC-004 | Modelo comercial | Assinatura recorrente | ![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800) Pendente de aprovação | Matheus |
| DEC-005 | Administração de conteúdo | Somente equipe administrativa cadastra e administra cursos e aulas | ![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800) Pendente de aprovação | Matheus |
| DEC-006 | Aprendizagem | Aulas terão exercícios e avaliações associados | ![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800) Pendente de aprovação | Matheus |
| DEC-007 | Prazo | Meta de referência de MVP em 30 dias | ![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800) Em aberto para validação | Matheus |
| DEC-008 | Stack tecnológica | Definir tecnologias de frontend, backend, banco e autenticação | ![SEM RESPOSTA](https://img.shields.io/badge/STATUS-SEM%20RESPOSTA-d73a49) Em aberto | A confirmar com Marina (atribuição legada não validada) |
| DEC-009 | Pagamentos | Selecionar provedor e regras de cobrança recorrente | ![SEM RESPOSTA](https://img.shields.io/badge/STATUS-SEM%20RESPOSTA-d73a49) Em aberto | Matheus |
| DEC-010 | Vídeos | Selecionar solução de geração/hospedagem/entrega de vídeos | ![SEM RESPOSTA](https://img.shields.io/badge/STATUS-SEM%20RESPOSTA-d73a49) Em aberto | A confirmar com Marina (atribuição legada não validada) |
| DEC-011 | Planos e preços | Definir catálogo comercial, preços e benefícios | ![SEM RESPOSTA](https://img.shields.io/badge/STATUS-SEM%20RESPOSTA-d73a49) Em aberto | Matheus |
| DEC-012 | Modalidades de assinatura | **Conforme reunião de 03/11:** comercializar **Travel e Business separadamente por curso/trilha**; **Basic bônus para todos os assinantes**. Nível de plano determina serviços, não libera automaticamente o catálogo completo. A parametrização para combos futuros não é oferta aprovada. MAT-002/REQ-003 atualizados. | **ALINHADO EM REUNIÃO 03/11**; preços, contratos e eventuais pacotes ainda pendentes | Matheus / Marina (reunião) |
| DEC-013 | Catálogo inicial | Basic English, Travel e Business | ![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800) Pendente de aprovação | Matheus |
| DEC-014 | Trilhas por objetivo | Reutilizar os mesmos cursos em trilhas com sequências/prioridades diferentes | ![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800) Pendente de aprovação | Matheus |
| DEC-015 | Portas de entrada | Teste de nivelamento, início por Basic English ou entrada direta em Travel/Business | ![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800) Pendente de aprovação | Matheus |
| DEC-016 | Progressão | Concluir todos os componentes obrigatórios da aula e atingir a nota mínima da avaliação para desbloquear a próxima aula do mesmo curso | ![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800) Pendente de aprovação | A confirmar com Marina (atribuição legada não validada) |
| DEC-017 | Avaliações | Nota mínima e uma tentativa adicional (duas tentativas no total); a segunda tentativa ocorre após revisão do conteúdo da aula | ![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800) Pendente de aprovação | A confirmar com Marina (atribuição legada não validada) |
| DEC-018 | Apoio após reprovação | Após duas tentativas abaixo da nota mínima, sugerir plantão de dúvidas ou aula particular, respeitando os serviços do plano | ![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800) Pendente de aprovação | Matheus |
| DEC-019 | Nota mínima | Valor e escala da nota mínima de aprovação ainda serão definidos | ![SEM RESPOSTA](https://img.shields.io/badge/STATUS-SEM%20RESPOSTA-d73a49) Em aberto | A confirmar com Marina (atribuição legada não validada) |
| DEC-020 | Critério de conclusão | A conclusão exige completar todos os componentes obrigatórios da aula e atingir a nota mínima da avaliação | ![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800) Pendente de aprovação | A confirmar com Marina (atribuição legada não validada) |
| DEC-021 | Segunda tentativa | Liberar a segunda tentativa da avaliação somente depois que o aluno revisar o conteúdo da aula | ![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800) Pendente de aprovação | A confirmar com Marina (atribuição legada não validada) |
| DEC-022 | Teste de nivelamento | Funcionamento, obrigatoriedade, critérios de avaliação e lógica de recomendação serão definidos posteriormente | ![SEM RESPOSTA](https://img.shields.io/badge/STATUS-SEM%20RESPOSTA-d73a49) Em aberto | A confirmar com Marina (atribuição legada não validada) |
| DEC-023 | Revisão para segunda tentativa | Disponibilizar resumo escrito da aula para revisão; não exigir que o aluno assista novamente ao vídeo antes da segunda tentativa | ![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800) Pendente de aprovação | A confirmar com Marina (atribuição legada não validada) |
| DEC-024 | Vídeo e conclusão de aula | [Registro canônico no arquivo do Matheus](09-decisoes-matheus.md). **Matheus confirmou em reunião 03/11: NÃO exigir 100% do vídeo**. Avaliação não eliminatória definida depois por Marina. | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** | Matheus |
| DEC-025 | Exercícios de prática opcionais | [Registro canônico no arquivo da Marina](08-decisoes-marina.md) — revisão e transferência de titularidade, histórico preservado | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** — exercícios opcionais; avaliação obrigatória | Marina |
| DEC-026 | Painel operacional complementar | [Registro canônico no arquivo da Marina](08-decisoes-marina.md) — Notion substitui ClickUp como relatório executivo resumido para Matheus; GitHub permanece principal | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) Escolha confirmada por Marina; implantação ainda pendente | Marina |
| DEC-027 | Aba geral de exercícios | [Registro canônico no arquivo da Marina](08-decisoes-marina.md) — biblioteca filtrável; **indicação agregada de exercícios adicionais bloqueados**, sem listar exercícios individuais de cursos não contratados | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** — controle de acesso herdado do curso e oportunidade de conhecer planos maiores | Marina |
| DEC-028 | Revisão de exercícios por módulo | [Registro canônico no arquivo da Marina](08-decisoes-marina.md) — exercícios misturando conteúdos de todas as aulas de cada módulo | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** — execução e detalhes pendentes | Marina |

| DEC-029 | Auditoria antes da execução pelo Claude | [Registro canônico no arquivo da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** | Marina |

| DEC-030 | Preferência por operação sem tokens em tempo real e controle de custos variáveis | [Registro canônico no arquivo da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** | Marina |
| DEC-031 | Tentativas ilimitadas e revelação opcional na prática | [Registro canônico no arquivo da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** | Marina |

| DEC-032 | Análise e aprovação de custos por decisão | [Registro canônico no arquivo da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** | Marina |

| DEC-033 | Ordenação dos exercícios por estado | [Registro canônico no arquivo da Marina](08-decisoes-marina.md) — pendentes de revisão → inéditas → concluídas; **custos ainda aguardam análise e aprovação** | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (funcional); aprovação financeira pendente | Marina |

| DEC-034 | Embaralhamento interno, código por questão e “Questões em dúvida” | [Registro canônico no arquivo da Marina](08-decisoes-marina.md) — ordem aleatória dentro de cada grupo; professores autenticados pesquisam questões de todos os cursos por código; marcação pessoal independente do acerto | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (funcional); custos pendentes | Marina |

**Notion complementar (DEC-026):** não constitui migração da documentação ou das fichas de decisão. O GitHub é a fonte de verdade única para **todas** as informações do projeto, inclusive tarefas, status, cronograma, marcos e fichas completas de decisões (em arquivo Markdown do responsável, mais o índice geral). No Notion, exibir apenas um resumo executivo **extraído de registros já existentes no GitHub** (marcos, status, cronograma, próximos passos e impedimentos relevantes para Matheus), com links pontuais, sem cópias de fichas completas ou tarefas técnicas granulares. Itens de titularidade legada ambígua continuam para saneamento, sem novas atribuições presumidas.


## DEC-029 — Auditoria obrigatória antes de delegar ao Claude (2026-10-31)
- **Responsável e aprovação:** Marina; comunicado por Marina.
- **Status:** ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO**.
- **Regra:** Antes de delegar qualquer pacote de implementação ao Claude, a PM examina no GitHub todas as decisões, requisitos, dependências, aprovações, exceções e conflitos ligados ao escopo. Nenhuma suposição é requisito; decisões REVISAR ou SEM RESPOSTA relevantes bloqueiam a parte afetada até Marina comunicar a definição/validação (inclusive as decisões atribuídas a Matheus). A PM apresenta checklist com IDs, evidências de aprovação, escopo, critérios de aceitação, exclusões e pendências resolvidas, e obtém a autorização de Marina para encaminhar ao Claude. Somente trabalho independente e aprovado pode ser isolado em outro pacote. Isso evita gasto de tokens e retrabalho. A auditoria anterior à execução é distinta da aprovação exigida para publicar em produção. Histórico integral permanece no GitHub; Notion só resume.
- **Registro canônico:** [Decisões de Marina](08-decisoes-marina.md).


- **Complemento — autonomia explícita por tarefa (2026-10-31):** Antes de repassar uma tarefa ao Claude, a PM confere todas as decisões, requisitos, aprovações e pendências aplicáveis no GitHub, sem presumir respostas. Itens relevantes em REVISAR ou SEM RESPOSTA bloqueiam a parte dependente, até Marina esclarecer. A PM prepara escopo, critérios de aceitação, referências e checklist e recebe autorização de Marina para o pacote. EXCEÇÃO: Marina pode delegar explicitamente autonomia para uma tarefa específica e delimitar os aspectos abertos que podem ser decididos pela PM/Claude conforme boas práticas, priorizando baixo custo, alta segurança e coerência com decisões já aprovadas. Autonomia não é geral, não revoga requisitos aprovados, nem autoriza publicar em produção. Registrar escopo da delegação, escolhas e justificativas no GitHub; se surgir conflito ou risco relevante fora da autorização, voltar a Marina. Toda publicação continua exigindo revisão e aprovação prévia.


## DEC-030 — Custos de uso e IA em produção (2026-10-31)
- **Decisora:** Marina; comunicado por Marina.
- **Status:** ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO**.
- **Regra:** A arquitetura deve priorizar conteúdos, gabaritos, explicações e regras preparados e armazenados antecipadamente para servir os alunos sem chamadas de IA ou consumo de tokens por interação. Toda proposta de recurso com IA em tempo real, tokens, API paga por uso ou outro custo variável relevante exige sinalização prévia à Marina com finalidade, alternativas sem IA, estimativa de custo por uso e em escala, limites e medidas de controle; só poderá ser executada após aprovação explícita específica. Isso não significa custo operacional zero: tráfego, armazenamento, banco e infraestrutura também escalam e devem ser monitorados. Otimizar custo sem sacrificar segurança e qualidade.
- **Registro canônico:** [Decisões da Marina](08-decisoes-marina.md).

## DEC-031 — Tentativas e revelação em exercícios de prática (2026-10-31)
- **Decisora:** Marina; comunicado por Marina.
- **Status:** ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO**.
- **Regra:** Nos exercícios opcionais em cards, após erro ocultar gabarito e oferecer 'Tentar novamente' ou 'Ver resposta e explicação'. Tentativas adicionais são ilimitadas, sem obrigar revelação; registrar histórico. Gabarito e explicação devem estar pré-aprovados e armazenados, sem IA em tempo real. Acerto posterior retira a pendência e marca questão como concluída; visualização da resposta não é acerto. Manter avaliações obrigatórias em fluxo separado, com regras próprias de tentativas.
- **Registro canônico:** [Decisões da Marina](08-decisoes-marina.md).


## DEC-032 — Análise e aprovação de custos por decisão (2026-10-31)
- **Responsável e aprovação:** Marina.
- **Status:** ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO**.
- **Regra:** Toda decisão proposta, inclusive visual ou comercial, deve receber análise proporcional dos impactos financeiros imediatos e futuros antes da aprovação: implantação/desenvolvimento, custo mensal fixo em repouso, custos variáveis por uso de alunos e custos variáveis administrativos, com gatilhos, premissas, horizonte, cenários de escala, alternativas seguras e confiáveis e incertezas. Custos precisam de aprovação explícita de Marina, separada da aprovação funcional; custos não estimados permanecem pendentes, nunca presumidos como R$0. Registrar as estimativas e seus ajustes no GitHub com ID da funcionalidade/decisão, origem, versão, data e autorização; somente funcionalidades E custos aprovados entram no painel executivo Notion, como cópia resumida derivada do GitHub, sem substituir nenhum registro. Para não distorcer totais, distinguir aprovado, implementado e em produção, e estimado versus efetivamente medido. Consolidar mensalidade fixa compartilhada uma única vez e alocar custos compartilhados sem dupla contagem; calcular custo mensal estimado total no cenário de alunos ativos e custo por aluno ativo como total dividido pelo número de ativos, evitando tratar indevidamente custos fixos como variáveis por usuário. Priorizar minimização do custo variável provocado pelos alunos, com aprovação prévia de Marina para qualquer novo custo desse tipo (inclusive pequeno).
- **Registro canônico:** [Decisões da Marina](08-decisoes-marina.md).
- **Painel:** [Custos aprovados por funcionalidade no Notion](https://app.notion.com/p/0a5db82ea71547e8bf354d7a6a2d4ae8).

| DEC-035 | Ordem de definição do produto | [Registro canônico no arquivo da Marina](08-decisoes-marina.md) — escopo integral → stack → análise de custos → separação por versões → execução | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** | Marina |

| DEC-036 | Ativação segura após contratação | [Registro canônico no arquivo da Marina](08-decisoes-marina.md) — ativação por e-mail ou continuidade no site com comprovação segura do e-mail; custos pendentes | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (funcional) | Marina |

| DEC-037 | Público sem idade mínima comercial; foto dispensada | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (diretriz; salvaguardas para menores pendentes) | Marina |
| DEC-038 | Cadastro: nome completo e quatro faixas etárias obrigatórios, CPF do pagador e telefone opcional aprovados; detalhes em revisão | [Registro canônico da Marina](08-decisoes-marina.md) | ![REVISAR](https://img.shields.io/badge/STATUS-REVISAR-e6b800) **REVISAR** (CPF do pagador ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO**; faixa etária obrigatória, telefone opcional e nome completo obrigatório **RESOLVIDOS**; autenticação e detalhes pendentes) | Marina |

| DEC-039 | Login regular por e-mail e senha | [Registro canônico da Marina](08-decisoes-marina.md); ativação inicial conforme DEC-036 | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (funcional; custos pendentes) | Marina |

| DEC-040 | Contratação por responsável e conta individual do aluno menor | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (modelo funcional; fluxo detalhado, legislação e custos pendentes) | Marina |

| DEC-041 | Sem área dos responsáveis; clareza antes da compra | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (funcional; jurídico e custos pendentes) | Marina |

| DEC-042 | Um pagador pode contratar para vários alunos, com checkout separado por beneficiário | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (modelo e compra separada por aluno; demais regras comerciais e custos pendentes) | Marina |

| DEC-043 | E-mail financeiro separado do login do aluno; e-mail exclusivo da criança gerido pelos pais | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (funcional; custos e segurança pendentes) | Marina |

| DEC-044 | Página inicial personalizada com progresso, retomada e divulgação de cursos adicionais sem acesso | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (funcional; detalhes, custos e proteção de menores pendentes) | Marina |

| DEC-045 | “Conhecer curso” abre página com descrição, objetivos, módulos e benefícios antes da compra | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (funcional; detalhes, custos e implementação pendentes) | Marina |

| DEC-046 | Página pública única por curso acessível sem login, da landing page ou da plataforma | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (funcional; orçamento, conteúdo e regras comerciais pendentes) | Marina |

| DEC-047 | Página de curso → “Ver planos e preços” → contratação da oferta escolhida | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (sequência/CTA; preços, regras comerciais, custos e execução pendentes) | Marina |

| DEC-048 | CTA “Acessar curso” substitui “Ver planos e preços” para aluno com direito ativo ao curso | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (funcional; detalhes, custos e implementação pendentes) | Marina |

| DEC-049 | “Acessar curso” abre visão geral com módulos, aulas, progresso, retomada e revisão de aulas liberadas | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (funcional; detalhes, custos e execução pendentes) | Marina |

| DEC-050 | Progresso percentual calculado por aulas concluídas com avaliação obrigatória aprovada | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (critério/fórmula; detalhes, custos e execução pendentes) | Marina |

| DEC-051 | Curso com 100% real recebe status “Concluído” e mantém revisão enquanto acesso estiver vigente | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (funcional; certificados, exceções, custos e implementação pendentes) | Marina |

| DEC-052 | Certificado digital de conclusão de curso Privilège após 100% real | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (funcional; formato e canal definidos na DEC-053, validação/custos/execução pendentes) | Marina |

| DEC-053 | Certificado em PDF para download em “Meus certificados”, sem envio automático por e-mail | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (formato/canal; validação, custos e implementação pendentes) | Marina |

| DEC-054 | Certificados já conquistados podem ser baixados mediante login após encerramento da assinatura | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (regra funcional; retenção, custos e implementação pendentes) | Marina |

| DEC-055 | Código único no certificado e verificação pública de autenticidade mediante código | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (campos públicos definidos na DEC-056; menores, custos e implementação pendentes) | Marina |

| DEC-056 | Verificação pública exibe autenticidade, curso, data de emissão e identificação parcialmente ocultada | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (campos; máscara definida na DEC-057; menores, custos e implementação pendentes) | Marina |

| DEC-057 | Identificação por iniciais do primeiro e último nome (ex.: M. S.) na validação pública de certificado | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (formato; exceções, menores, custos e implementação pendentes) | Marina |

| DEC-058 | QR Code no PDF do certificado abre a validação pública pelo código único, sem expor arquivo privado | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (funcional; layout, privacidade de menores, custos e implementação pendentes) | Marina |

| DEC-059 | Certificado PDF apresenta nome completo do aluno; validação pública mantém só iniciais | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (regra funcional; nomes especiais, privacidade de menores, custos e implementação pendentes) | Marina |

| DEC-060 | PDF do certificado exibe separadamente data de conclusão do curso e data de emissão; validador público mantém só emissão | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (funcional; fuso, reemissão, custos e execução pendentes) | Marina |

| DEC-061 | Carga horária oficial definida pela equipe pedagógica, não pelo tempo individual, no certificado PDF | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (regra funcional; horas por curso, custos e implementação pendentes) | Marina |

| DEC-062 | Aprovação integral do pacote final de 10 regras do certificado: emissão, downloads, correções, revogação, versão curricular, conteúdo, assinatura, apresentação, validade e privacidade | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (rodada funcional encerrada; jurídico, pedagógico, stack, custos, MVP e execução pendentes) | Marina |

| DEC-063 | Aprovação integral do pacote de 8 funcionalidades da experiência nas aulas: página unificada, navegação, player, retomada, materiais, prática opcional, avaliação e desbloqueio | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (funcional; vídeo DEC-024 em revisão, nota mínima, custos e execução pendentes) | Marina |

| DEC-064 | Portal docente e avaliações de atendimentos por estrelas | [Registro canônico da Marina](08-decisoes-marina.md) | RESOLVIDO (funcional; custos e execução pendentes) | Marina |

| DEC-065 | Notas individuais visíveis apenas ao administrador; professor vê só sua média; ranking por médias exclusivo do painel administrativo | [Registro canônico da Marina](08-decisoes-marina.md) | RESOLVIDO (funcional; privacidade, custos e execução pendentes) | Marina |

| DEC-066 | Aula particular com agendamento; plantão coletivo com janelas fixas e link diário, sem reserva do aluno, com vários participantes | [Registro canônico da Marina](08-decisoes-marina.md) | RESOLVIDO (funcional; horários são exemplos, operações, jurídico, valores e execução pendentes) | Marina |

| DEC-067 | Dez propostas de políticas comerciais e operacionais de particulares e plantões transferidas para decisão de Matheus (MAT-014) | [Registro canônico do Matheus](09-decisoes-matheus.md) | **PARCIALMENTE RESOLVIDO EM 03/11 + DEC-082/083; apenas parâmetros residuais abertos** | Matheus |

| DEC-068 | Aprovação funcional integral das 12 áreas do Painel Administrativo Privilège | [Registro canônico da Marina](08-decisoes-marina.md) | ![RESOLVIDO](https://img.shields.io/badge/STATUS-RESOLVIDO-2da44e) **RESOLVIDO** (funcional; permissões, privacidade, auditoria, decisões de Matheus, stack, custos e execução pendentes) | Marina |

| DEC-069 | Relatórios, automações, integrações e seleção de professor por disponibilidade | [Decisão da Marina](08-decisoes-marina.md) | RESOLVIDO (funcional; financeiro, stack e execução pendentes) | Marina |

| DEC-070 | Oito funções complementares: acesso, conta, suporte, relatos, publicação, privacidade e continuidade | [Registro da Marina](08-decisoes-marina.md) | RESOLVIDO (funcional; jurídico, operação, custo, stack e execução pendentes) | Marina |

| DEC-071 | Dez regras operacionais: recuperação, cadastro, papéis, auditoria, docentes, plantões, publicação, suporte, indicadores e exportação | [Registro da Marina](08-decisoes-marina.md) | RESOLVIDO (funcional; jurídico, Matheus, custos, stack e execução pendentes) | Marina |

| DEC-072 | Seis regras finais: recuperação excepcional, confidencialidade de notas docentes, revisão de gabaritos, moderação, intervenções e qualidade dos KPIs | [Registro da Marina](08-decisoes-marina.md) | RESOLVIDO (funcional; jurídico, Matheus, custo, stack e execução pendentes) | Marina |

| DEC-073 | Recomendações operacionais AUD-004/007/008/009 aprovadas; 5 avaliações válidas para média docente condicionado à privacidade e proteção contra inferência | [Registro da Marina](08-decisoes-marina.md) | RESOLVIDO quanto às diretrizes; validações jurídica e anti-inferência pendentes | Marina |

## Modelo para novas decisões
### DEC-XXX — [Título]
- **Data:**
- **Tag visual:** RESOLVIDO / REVISAR / SEM RESPOSTA
- **Status:**
- **Categoria:** decisão de Marina / decisão de Matheus (exclusiva ou sujeita à validação) / a confirmar com Marina
- **Autor da resposta provisória:**
- **Responsável pela confirmação/aprovação:**
- **Comunicado por:** Marina
- **Contexto/problema:**
- **Alternativas consideradas:**
- **Decisão:**
- **Justificativa:**
- **Impactos em escopo, prazo, custo, riscos e operação:**
- **Documentos/requisitos afetados:**


## Atualização do índice — 2026-11-05
| ID | Tema | Definição | Status e situação | Responsável |
|---|---|---|---|---|
| DEC-074 | Cinco regras de avaliações e aprendizagem | [Registro canônico na decisão de Marina](08-decisoes-marina.md): embaralhamento por banco aprovado; nota/gabarito/explicações ao finalizar; retomar avaliação interrompida; histórico e evolução para aluno; novas tentativas após conclusão sem alterar datas originais | RESOLVIDO quanto ao funcional; custos, stack, G1 integral e execução pendentes | Marina |

**Precedência:** DEC-074 complementa a aprovação de tentativas ilimitadas sem revisão obrigatória e a avaliação não eliminatória; referências históricas às regras substituídas não são vigentes. Detalhes de amostragem do banco, durabilidade da sessão, visualização da evolução e condições de acesso pós-assinatura permanecem em aberto e não podem ser presumidos.


## Atualização de índice — DEC-075 (2026-11-05)
| ID | Tema | Definição | Situação | Responsável |
|---|---|---|---|---|
| DEC-075 | Bloco 2 — configuração das avaliações | [Registro canônico da Marina](08-decisoes-marina.md): número configurável no admin; sorteio de questões aprovadas por filtros; autosave a cada resposta; gráfico com notas por tentativa, datas e histórico; novas tentativas somente com acesso ativo ao curso, preservando certificados | **RESOLVIDO funcionalmente**; G1 integral, stack, custos, MVP e execução ainda não aprovados | Marina |

Os cinco itens acima deixam de ser pendências da DEC-074; permanecem abertas apenas as nuances adicionais expressamente identificadas em DEC-075, sem presumir respostas.


## Atualização do índice — DEC-076 (2026-11-05)
| ID | Tema | Definição | Status e situação | Responsável pela confirmação |
|---|---|---|---|---|
| DEC-076 | G1 Bloco 3 — catálogo e contratação | [Registro canônico de Marina](08-decisoes-marina.md): sem teste gratuito inicialmente; upgrade imediato com ajuste proporcional; downgrade na renovação sem perda antecipada de benefícios; escolha de renovação apresentada na contratação | **RESOLVIDO** nas quatro diretrizes confirmadas por Marina; **REVISAR** fórmula do rateio, valores, modalidade de renovação, parâmetros comerciais de competência pertinente e legalidade; G2–G5 pendentes | Marina |

A confirmação da Marina não deve ser convertida em aprovação individual de Matheus ou parecer jurídico favorável. Manter os detalhes não decididos em aberto no GitHub.


## Atualização de índice — DEC-077 (2026-11-05)
| ID | Tema | Definição | Status e situação | Confirmado por |
|---|---|---|---|---|
| DEC-077 | Bloco 4 — cobrança, inadimplência e acesso | [Registro canônico da Marina](08-decisoes-marina.md): retentativas de cartão e aviso ao pagador; acesso/benefícios mantidos durante 30 dias de tolerância; histórico/progresso/certificados preservados e acesso restaurado conforme nova contratação; e-mail financeiro ao pagador e aviso operacional ao aluno sem exposição de dados financeiros | **RESOLVIDO** nas quatro diretrizes funcionais; **PENDENTE** calendário de retentativas, marco inicial de tolerância, suspensão subsequente, jurídico, valores, custos e integração | Marina |

**Governança:** nenhuma subdecisão funcional implica autorização financeira, aprovação individual de Matheus, validação jurídica ou execução.


## Atualização do índice — DEC-078 (2026-11-05)
| ID | Tema | Definição | Situação | Responsável |
|---|---|---|---|---|
| DEC-078 | G1 Bloco 5 — identidade, segurança e suporte | [Registro canônico da Marina](08-decisoes-marina.md): troca de e-mail confirmada nos dois endereços ou recuperação excepcional; revogar demais sessões após troca de senha por suspeita; orientar login/recuperação sem duplicar cadastro; central de suporte com protocolo e acompanhamento mais e-mail | **RESOLVIDO funcionalmente**; fluxos de exceção, proteção de menores, LGPD, custos, stack, G1 integral e execução pendentes | Marina |

**Não converter aprovação funcional em homologação jurídica, financeira ou técnica.**


## Atualização do índice — DEC-079 (2026-11-05)
| ID | Tema | Definição | Status | Responsável |
|---|---|---|---|---|
| DEC-079 | G1 Bloco 6 — exceções operacionais | [Registro canônico na decisão de Marina](08-decisoes-marina.md): impedir publicação de avaliação com banco aprovado insuficiente; retomada de tentativa em até 30 dias; reagendamento de particular com docente escolhido e crédito preservado; plantão lotado indica outra sessão sem lista de espera | **RESOLVIDO funcionalmente**; termo inicial da validade, tratamentos excepcionais, jurídico, custos, stack e G1 integral pendentes | Marina |


## Atualização de índice — DEC-080 (2026-11-05)
| ID | Tema | Definições confirmadas por Marina | Status e pendências | Responsável |
|---|---|---|---|---|
| DEC-080 | G1 — rodada consolidada de 15 decisões | [Registro canônico](08-decisoes-marina.md): nivelamento opcional antes/durante o curso, orientação não bloqueante, faixas configuráveis, Basic não obrigatório, livre troca de trilha com histórico, trilhas configuráveis sem duplicação; avaliação expira 30 dias desde início com aviso e nova tentativa, correção de gabarito só após análise/aprovação, versionamento preserva conclusões; upgrade pelo período restante e diferença de valores, escolha explícita entre renovar automaticamente/encerrar, retentativas configuráveis pelo gateway, tolerância desde vencimento não pago, ausência de professor alternativo gera atendimento com crédito preservado | **RESOLVIDO nas 15 diretrizes confirmadas**; parâmetros pedagógicos, financeiros, contratuais, jurídicos e operacionais descritos no registro canônico seguem **PENDENTES**; G1 não homologado | Marina |

**Precedência:** DEC-080 prevalece nos quinze assuntos sobre REQs e MAT históricos conflitantes; aprovações de Matheus/jurídico não são inferidas e as demais obrigações do gate G1 permanecem vigentes.


## Atualização do índice — DEC-081 (2026-11-07)
| ID | Tema | Decisão e alcance | Status | Responsável |
|---|---|---|---|---|
| DEC-081 | Aceleração do fechamento interno e preparo de G2/G3 | Marina autorizou PM a consolidar/otimizar alternativas internas sob sua alçada e preparar proposta técnica/financeira em `docs/27-proposta-stack-e-custos-2026-11-07.md`; mantém sob aprovação de Matheus condições comerciais, jurídico e quaisquer contratações | **APROVADO:** consolidação interna e análise; **PENDENTE:** validações, homologação final, stack escolhida, custos aprovados e execução | Marina |


## Atualização do índice — DEC-082 (2026-11-08)
| ID | Tema | Decisão e alcance | Status | Responsável |
|---|---|---|---|---|
| DEC-082 | Benefício do Plano 1: produto digital escalável | Marina confirmou **Plano 1 exclusivamente videoaulas gravadas/direitos digitais**, sem plantões nem particulares; supera o registro anterior de 1 plantão mensal no Plano 1. Planos 2 e 3 preservam direitos atualmente registrados até decisão futura. Registro canônico em [docs/08-decisoes-marina.md](08-decisoes-marina.md). | **CONFIRMADO POR MARINA** para especificação funcional; preços, contrato e homologação comercial externa ainda requerem validação | Marina |


## Atualização do índice — DEC-083 (2026-11-08)
| ID | Tema | Definição atual | Status | Responsável |
|---|---|---|---|---|
| DEC-083 | Benefícios mensais do Plano 3 | **4 plantões coletivos de 20 minutos + 2 aulas particulares de 50 minutos** por aluno/mês; benefícios e créditos separados. Registro canônico em [docs/08-decisoes-marina.md](08-decisoes-marina.md). | **CONFIRMADO POR MARINA** para requisito funcional; mensalidade, contrato, disponibilidade e jurídico ainda pendentes | Marina |


## Reconciliação de MAT-002/DEC-012 com ata de 03/11 (registro 2026-11-08)
O alinhamento comercial por curso/trilha com Basic bônus foi **decidido em reunião**, não exige nova pergunta à gestão. Fonte: notas e transcrição da reunião de 03/11, 00:56:44–00:58:11. Acesso a Travel e Business continua individual por direito contratado; os três níveis de plano definem serviços (DEC-082/083), não a liberação automática de todo catálogo. Permanece necessário confirmar **preços e contratos**, mas não se deve marcar o modelo de curso específico como não decidido.


## Auditoria pós-reunião 03/11 (reconciliada em 08/11)
- **DEC-024/MAT-009:** confirmada diretamente por Matheus em 03/11 — **não exigir reprodução integral de vídeo**. Remover da lista de decisões pendentes.
- **DEC-067/MAT-014:** pacote **parcialmente respondido** na reunião, complementado por DEC-082/083. Ainda pendem contratação e disponibilidade dos professores, ativação comercial de aulas avulsas na primeira versão, fornecedores e validação jurídico-contratual, **não** duração, créditos, reserva, cancelamento de 2h ou não acúmulo.
- **Curso/assinatura (MAT-002):** Travel e Business comercializados separados, Basic bônus a assinantes; registro conciliado no índice DEC-012.
- **Cancelamentos e prazos:** comunicação com antecedência de 30 dias e multa de referência de **20%** sobre saldo remanescente em quebra antecipada, discutidos na reunião; aplicação definitiva depende de conferência jurídica. Não perguntar outra vez o percentual como se nunca decidido.


## Atualização do índice — reunião semanal 11/11 (registrada em 13/11/2026)

| ID | Tema | Registro canônico | Situação vigente | Responsável final |
|---|---|---|---|---|
| **DEC-084** | Plano 1 digital: 6 meses de direito, compra única parcelável no cartão; recorrência preservada para ofertas longas | [Matheus — DEC-084](09-decisoes-matheus.md#dec-084--plano-1-digital-seis-meses-fechados-e-compra-única-parcelável) | **Diretriz alinhada/aprovada em reunião 11/11.** Preço, renovação e integração operacional específicos pendentes | **Matheus** (comercial; classificação comunicada por Marina) |
| **DEC-085** | Desconto de 20%–30% para aluno presencial no digital, retornando à tabela integral ao perder o vínculo | [Matheus — DEC-085](09-decisoes-matheus.md#dec-085--desconto-de-aluno-presencial-no-digital-e-retorno-à-tabela-padrão) | **Diretriz aprovada em 11/11.** Percentual exato, elegibilidade e transição pendentes | **Matheus** (comercial; classificação comunicada por Marina) |

**Complementos SEM novo DEC:** [ata de 11/11 e alinhamentos ALIN-11-01/02/03/04](51-registro-reuniao-semanal-2026-11-11.md) — endosso visual premium sem duplicar o aceite D1 R2; campanha Travel em dezembro com parceiro Mateus/Tipino das Milhas; diretriz futura de white label; reuniões por demanda. **Titularidade formal de ALIN-11-02/03 ainda depende de Marina.** MAT-011 (custos aprovados comunicados) ganhou evidência da apresentação de 11/11 e informação de parecer jurídico OK, sem criar nova decisão ou ressuscitar o gate orçamentário.


## DEC-086 — Diretriz permanente e prioritária de eficiência do Claude Code (2026-11-13)

| ID | Tema | Decisão | Status | Responsável |
|---|---|---|---|---|
| **DEC-086** | Método permanente de execução e uso de agentes Claude | [Registro canônico aprovado por Marina](08-decisoes-marina.md#dec-086--diretriz-principal-e-permanente-de-eficiência-de-execução-do-claude-code-13112026), detalhamento em [docs/52](52-diretriz-permanente-eficiencia-claude-execucao.md): **integrador principal único, auxiliares somente por demanda**, evitar pesquisas duplicadas, usar contexto mínimo relevante, lotes autorizados e pequenos com testes/CI/PR, medir produtividade e quota; revisões técnicas profundas obrigatórias quando o risco exigir; GitHub canônico e Notion executivo | **APROVADO / OBRIGATÓRIO PARA TODO O PROJETO**. Não autoriza novos lotes de código, gastos, Ultra, merges ou publicação. Regime 15h/dia é apenas hipótese temporária do sprint 10/12. | Marina |

**Registro de precedência:** a otimização de tokens nunca substitui segurança, conformidade, alçadas, escopo integral e decisões de produto. Referência operacional também em `CLAUDE.md` e `AGENTS.md`. O histórico de cinco pesquisadores no diagnóstico F2.B foi excepcional, não padrão de execução.

## Atualização do índice — DEC-087 (13/11/2026)

| ID | Tema | Registro canônico | Situação vigente | Responsável final |
|---|---|---|---|---|
| **DEC-087** | Adotar o fechamento conjunto dos seis blocos e o padrão permanente de preparação/aceite por fase | [DEC-087 — Marina](08-decisoes-marina.md#dec-087--fechamento-conjunto-dos-seis-blocos-operacionais-e-protocolo-de-execução-13112026); [docs/53](53-baseline-operacional-integral-decisao-087-2026-11-13.md); [docs/54](54-protocolo-handoff-aceite-fases-dec-087.md) | **APROVADA como organização/especificação** após “Perfeito! Pode seguir”; provas técnicas/custos/insumos externos e autorizações de PoC, F2.B–F8, PR/merge e deploy continuam independentes | Marina |
