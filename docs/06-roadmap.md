# Roadmap Preliminar — Plataforma Privilège

**Versão:** 0.2  
**Status:** Planejamento de referência; datas e escopo sujeitos à validação  
**Última atualização:** 2026-10-31

## Princípios
- O roadmap representa fases e dependências, não uma promessa de entrega.
- A meta de referência de 30 dias só poderá ser confirmada após aprovação do escopo e estimativa.
- Itens não validados devem permanecer identificados como pendentes.
- **Todo o roadmap, todas as tarefas (técnicas e executivas), status, responsáveis, estimativas, prazos, dependências e decisões ficam no GitHub** como fonte única de verdade. O Notion apresenta **somente um relatório executivo derivado** dos marcos e entregas relevantes já registrados no GitHub.

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
