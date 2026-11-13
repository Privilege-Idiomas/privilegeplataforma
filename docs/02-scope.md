> **BASELINE OPERACIONAL VIGENTE — DEC-087 / 13-11-2026:** aplicar [docs/53](53-baseline-operacional-integral-decisao-087-2026-11-13.md), [docs/54](54-protocolo-handoff-aceite-fases-dec-087.md) e as DEC posteriores aprovadas sobre trechos históricos divergentes. **Nivelamento opcional SEM IA (banco pré-aprovado, correção determinística); avaliação obrigatória NÃO eliminatória e tentativas ilimitadas; sem exigência de vídeo integral; plantão COM reserva (20 min/10 vagas), P1/P2/P3 = 0/2/4 e P3 também 2 particulares de 50 min.** Não converter hipótese, parâmetro externo ou proposta técnica em requisito aprovado. F2.B–F8 continuam sem autorização de implementação. Os trechos antigos abaixo que contradizem esta regra são históricos superados e devem ser lidos apenas para rastreabilidade. GitHub canônico; Notion executivo.

# Escopo do Produto — Plataforma Privilège

> **BASELINE VIGENTE EM 13/11 (precedência sobre textos de 02/11):** o objetivo atual de Marina é **plataforma própria, integral e automatizada até 10/12/2026**, sem recorte provisório de MVP nem operação manual substituta ([Issue #18](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/18), docs/49 e docs/50-cronograma). **Stack já estudada/selecionada na direção técnica e orçamento apresentado e aprovado por Matheus**; **jurídico OK** conforme comunicado por Marina; não recolocar G2/G3/jurídico na pauta como etapas não realizadas. O escopo funcional atualizado inclui [DEC-084](09-decisoes-matheus.md#dec-084--plano-1-digital-seis-meses-fechados-e-compra-única-parcelável) — **Plano 1 digital por 6 meses, compra única parcelável** — e [DEC-085](09-decisoes-matheus.md#dec-085--desconto-de-aluno-presencial-no-digital-e-retorno-à-tabela-padrão) — **desconto de 20%–30% para aluno presencial, com retorno ao preço integral após desvínculo**, percentual exato por Matheus. A ata [11/11](51-registro-reuniao-semanal-2026-11-11.md) também registra estratégia Travel em dezembro, white label futuro e endosso visual premium, sem autorização para impor implementação adicional.
>
> **Não utilizar as tabelas históricas abaixo como regras atuais quando divergirem:** vídeo integral **não obrigatório**, prática opcional, avaliação obrigatória não eliminatória com tentativas ilimitadas, nivelamento **sem IA em runtime** e por banco preparado, plantões **com reserva**, P1/P2/P3 = **0/2/4 plantões** e P3 com **2 particulares de 50min**, Basic bônus a assinantes. Design **D1 Revisão 2** aceito; F2.0/A integradas; F2.B–F8 ainda sem liberação de implementação. **Financeiro e pedagogia são decisões de Matheus; PM coordena requisitos, arquitetura de integração e execução sob gates próprios.**


**Versão:** 0.3 — consolidação documental do escopo integral  
**Status:** escopo funcional em consolidação; **MVP/versões não selecionados**, decisões de Matheus e requisitos jurídicos/técnicos/financeiros pendentes  
**Última atualização:** 2026-11-02

> **Nota de governança atualizada em 2026-11-02:** as seções abaixo refletem uma **hipótese histórica de MVP**, não uma priorização aprovada nem o escopo funcional completo mais recente. A DEC-035 determina: primeiro fechar todas as funcionalidades, depois selecionar a stack, estimar custos e somente então decidir versões/MVP e autorizar implementação. Os pacotes funcionais aprovados desde DEC-025 até **DEC-070**, inclusive as oito funções complementares DEC-070/REQ-049, estão documentados canonicamente em `docs/08-decisoes-marina.md` e `docs/03-requirements.md`; propostas comerciais de Matheus seguem em `docs/09-decisoes-matheus.md`. Não interpretar a seção “Fora do escopo inicial” como rejeição permanente de funcionalidades aprovadas. É necessária consolidação posterior desta baseline sem eliminar o histórico Git.

## Escopo integral consolidado — referência vigente

Esta seção resume **o conjunto de funcionalidades desejadas para o produto completo**, sem selecionar MVP, versões, prazo ou stack. A fonte detalhada de critérios de aceitação permanece em `docs/03-requirements.md`; decisões aprovadas e pendentes nos arquivos do respectivo responsável. Esta consolidação foi autorizada por Marina como **correção AUD-002**, não como novo pacote de funcionalidades.

| Domínio | Escopo funcional documentado | Aprovação e dependências |
|---|---|---|
| Aquisição e acesso comercial | páginas públicas de curso, apresentação de planos, contratação e ativação individual segura, cursos contratados e vitrine de outros cursos | DEC-036–048; planos, preços, pagamento e modelos de contratação com Matheus |
| Identidade, pagador e crianças | login por e-mail/senha, recuperação, minha conta, vínculo pagador e múltiplos alunos, conta do menor com responsável | DEC-037–043/070, REQ-002/020–024/049; LGPD/ECA Digital e fluxos de exceção pendentes |
| Catálogo e orientação | Basic English, Travel e Business como catálogo de referência, teste de nivelamento, portas de entrada e trilhas | REQ-005–008; detalhes pedagógicos e validação de Matheus pendentes |
| Experiência acadêmica | aulas em vídeo, materiais, resumos, retomada, prática opcional, biblioteca e revisões, avaliações obrigatórias e progresso real | DEC-025/027/028/031–034/049–051/063; vídeo completo DEC-024, nota mínima e exceções pendentes |
| Certificados | PDF privado, acesso após término de assinatura conforme retenção, QR e código verificador, correções, revogações e privacidade | DEC-052–062, REQ-032–040; pacote funcional fechado, jurídico e stack/custos pendentes |
| Docentes e qualidade | área docente, agenda, consulta a questões de todos os cursos, média agregada própria, notas individuais/ranking somente para admin | DEC-034/064/065; proteção por amostras pequenas e operação pendentes |
| Atendimentos | aulas particulares individuais agendadas por **data e horário → professores disponíveis**, anticolisão; plantão coletivo de entrada livre por link do dia | DEC-066/069, REQ-044/048; créditos, duração, cancelamentos e escala sob pauta comercial/operacional pendente de Matheus |
| Administração e finanças | 12 áreas administrativas incluindo cursos, alunos, avaliações, professores, agenda, plantões, pagamentos, certificados, usuários e auditoria | DEC-068; procedimentos, permissões e decisões comerciais específicas pendentes |
| Relatórios, automações e integrações | 12 funções de métricas, alertas, e-mails, exportações, auditoria e integração modular de serviços | DEC-069; fontes, segurança, provedores e orçamento pendentes |
| Suporte, publicação e resiliência | recuperação de conta, FAQ, tickets, relatos de erro, revisão/publicação editorial, solicitações de dados e contingências | DEC-070; detalhamento no `docs/11-detalhamento-final-operacional.md` e validações restantes |

**Limites e decisões preservados:** sem obrigatoriedade de IA em produção ou videoconferência própria; nenhuma ferramenta, custo fixo/variável, integração, prazo, MVP ou tarefa de execução autorizada por este inventário. Avaliações dos professores não são públicas; plantão não tem reserva; exercício de prática é facultativo. Não inferir que funcionalidades ausentes da hipótese histórica de MVP estejam rejeitadas ou postergadas.

**Gates de planejamento obrigatórios (DEC-035):** fechar escopo integral e dependências → selecionar stack → estimar custos iniciais, mensais ociosos e variáveis → aprovar orçamento e recortar MVP/versões → auditar (DEC-029) e autorizar implementação. A pauta de Matheus será tratada em reunião única, sem registrar aprovação antes da resposta.

---

**Regra de leitura:** o inventário de escopo integral e as decisões canônicas mais recentes prevalecem sobre questões e hipóteses do registro histórico abaixo. Nenhuma seção histórica seleciona MVP, versão ou prazo. Detalhes pendentes estão na matriz P-01 (`docs/18-revisao-cruzada-p01.md`).

## Registro histórico — proposta inicial de MVP (não vigente como priorização)

O conteúdo abaixo permanece para rastreabilidade, **não define o escopo vigente**, não revoga aprovações posteriores e não representa calendário ou MVP selecionado. Para regras atuais, consultar a tabela acima e os documentos canônicos.

## 1. Objetivo do escopo
Delimitar uma primeira versão viável da plataforma, evitando adicionar funcionalidades sem validação de valor, esforço e dependências.

## 2. Público-alvo inicial — definição informada
- Alunos que já estudam na Privilège.
- Novos alunos que contratarem cursos online.

As regras de cadastro, migração e acesso de alunos atuais ainda precisam ser definidas.

## 3. Modelo comercial — definição informada
A plataforma deverá suportar assinatura recorrente com flexibilidade para dois modelos de acesso:
- Planos que liberem todo o catálogo elegível;
- Planos ou assinaturas que liberem cursos específicos.

A arquitetura comercial deverá permitir configurar essas modalidades sem depender de uma estrutura rígida de plano único.

**Ainda pendente:** periodicidade, quantidade e nome dos planos, preços, benefícios, elegibilidade de cursos, teste grátis, meios de pagamento, renovação, cancelamento, inadimplência, reembolso e regras de acesso durante falhas de cobrança.

## 4. Catálogo inicial e jornada
O catálogo inicial será composto por três cursos:
- **Basic English**
- **Travel**
- **Business**

A plataforma deverá suportar:
- Teste de nivelamento;
- Início da aprendizagem desde a base, com Basic English seguido de Travel ou Business;
- Entrada direta em Travel ou Business;
- Trilhas organizadas por objetivo, usando os mesmos cursos em sequências ou prioridades diferentes.

A lógica de recomendação após o teste e os objetivos específicos de cada trilha ainda serão detalhados. Ver [Trilhas de Aprendizagem](07-learning-paths.md).

## 5. Funcionalidades propostas para o MVP

| Área | Escopo proposto | Situação |
|---|---|---|
| Autenticação | Cadastro, login, recuperação de acesso | A detalhar |
| Área do aluno | Área individual para acessar cursos e acompanhar aprendizagem | Proposta |
| Catálogo | Basic English, Travel e Business | Definição informada |
| Teste de nivelamento | Avaliar nível e apoiar escolha de entrada/trilha | Definição informada; lógica pendente |
| Trilhas | Organizar os mesmos cursos em sequências/prioridades por objetivo | Definição informada; desenho pendente |
| Assinaturas | Cobrança recorrente com acesso ao catálogo completo ou a cursos específicos | Definição informada; regras comerciais pendentes |
| Controle de acesso | Conceder e restringir acesso conforme assinatura e direitos do aluno | A detalhar |
| Conteúdo | Cursos, módulos e aulas em vídeo | Proposta |
| Exercícios e avaliações | Exercícios de prática opcionais; avaliação obrigatória com nota mínima para desbloqueio (DEC-025) | Regra definida por Marina; detalhes técnicos pendentes |
| Tentativas e recuperação | Nota mínima, uma tentativa adicional e recomendação de apoio após duas tentativas insuficientes | Definição informada; parâmetros pendentes |
| Progresso | Registro de conclusão e desbloqueio sequencial de aulas no mesmo curso | Definição informada; regra de conclusão pendente |
| Administração | Cadastro e gestão de cursos, módulos, aulas e atividades pela equipe administrativa | Definição informada |

## 5.1. Novas funcionalidades de exercícios — definidas, ainda sem priorização de entrega

Marina definiu em 2026-10-31 as seguintes necessidades de produto, cujas **estimativas e entrada exata no MVP ainda precisam ser avaliadas**:
- **DEC-025:** os exercícios de fixação são opcionais; a avaliação da aula segue obrigatória para progressão. A antiga resposta provisória (exercícios obrigatórios, para validar com Matheus) foi substituída e a responsabilidade foi transferida expressamente para Marina.
- **DEC-027:** aba geral “Exercícios”, independente da aula, com filtros por **curso, módulo, aula e nível de dificuldade**.
- **DEC-028:** lista de exercícios de revisão ao final de **cada módulo**, combinando conteúdos de todas as aulas daquele módulo, como revisão de capítulo.

**Regra comercial esclarecida por Marina (DEC-027):** a biblioteca não libera indiscriminadamente os exercícios de toda a plataforma. Cada exercício é associado a uma aula, contida em um módulo de um curso, e **herda integralmente o direito de acesso desse curso**. Sem acesso ao curso, o aluno não acessa seus exercícios, inclusive na biblioteca ou nas listas de revisão modular. Isto mantém os direitos de REQ-003/REQ-004. A **apresentação foi definida por Marina (DEC-027)**: somente **agrupamentos indicativos de exercícios adicionais por curso não contratado** ficam visíveis como bloqueados, para que o aluno conheça a existência de mais conteúdos e possa consultar opções de ampliação de assinatura. **Os exercícios individuais dos cursos bloqueados não devem ser listados nem revelados**, tampouco disponibilizados para resposta. Preços, ofertas concretas e jornada de upgrade ainda serão detalhados.

A existência das funcionalidades foi decidida por Marina. **Incluí-las no MVP, indicar esforço, prazo ou compromisso de entrega exigirá estimativa e priorização posteriores**, sem criar obrigação implícita de lançamento imediato.

## 6. Apoio pedagógico e serviços adicionais
Quando o aluno não atingir a nota mínima após a tentativa inicial e a tentativa adicional, a plataforma deverá apresentar uma mensagem sugerindo:
- Participação em plantão de dúvidas; ou
- Agendamento/contratação de aula particular.

A oferta deverá respeitar os direitos do plano contratado. Para aluno do plano básico, que oferece apenas acesso à plataforma, a mensagem poderá orientar a contratação de um plano que inclua esses serviços ou a aquisição da opção correspondente, conforme modelo comercial a definir.

**Pendente:** existência, formato, agenda, preço, disponibilidade e forma de contratação dos serviços; definição se serão benefícios de plano ou itens avulsos.

## 7. Fora do escopo inicial — hipótese de priorização
Os itens abaixo não devem ser considerados compromissos de entrega até validação:
- Aplicativos nativos para iOS e Android.
- Videoconferência própria.
- Tutoria por IA ou conversação avançada com IA.
- Analytics avançado e relatórios gerenciais complexos.
- White label e portal para parceiros.
- Área de administração para professores que não pertençam à equipe administrativa autorizada.

## 8. Questões de escopo em aberto
1. Como serão tratados os alunos atuais: acesso incluído, migração ou contratação?
2. Quais planos existirão e quais cursos/serviços cada um incluirá?
3. O teste de nivelamento será obrigatório, opcional ou recomendado? Como o resultado orientará a trilha?
4. Quais objetivos e sequências de trilha serão oferecidos no lançamento?
5. Qual será a nota mínima de aprovação?
6. A tentativa adicional será liberada automaticamente? Haverá intervalo ou revisão entre tentativas?
7. A aprovação na avaliação será condição para concluir a aula ou apenas a conclusão da aula desbloqueará a próxima?
8. Quais tipos de exercícios e regras de correção/feedback serão usados? Exercícios de prática são opcionais (DEC-025), enquanto a avaliação da aula é obrigatória.
9. Como serão ofertados e contratados plantões e aulas particulares?
10. Quais meios de pagamento e políticas de cancelamento serão adotados?

## 9. Controle de mudanças
Toda inclusão ou retirada relevante de escopo deverá registrar solicitação, justificativa, valor esperado, impacto em prazo/custo/risco/complexidade, responsável pela aprovação e atualização dos requisitos, roadmap e backlog após aprovação.
