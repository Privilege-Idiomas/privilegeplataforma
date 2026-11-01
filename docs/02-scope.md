# Escopo do Produto — Plataforma Privilège

**Versão:** 0.2  
**Status:** Proposta de MVP; aprovação formal do patrocinador pendente  
**Última atualização:** 2026-10-31

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
| Exercícios e avaliações | Atividades e avaliações associadas às aulas | Definição informada; regras detalhadas pendentes |
| Tentativas e recuperação | Nota mínima, uma tentativa adicional e recomendação de apoio após duas tentativas insuficientes | Definição informada; parâmetros pendentes |
| Progresso | Registro de conclusão e desbloqueio sequencial de aulas no mesmo curso | Definição informada; regra de conclusão pendente |
| Administração | Cadastro e gestão de cursos, módulos, aulas e atividades pela equipe administrativa | Definição informada |

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
8. Como exercícios diferem de avaliações e quais são obrigatórios?
9. Como serão ofertados e contratados plantões e aulas particulares?
10. Quais meios de pagamento e políticas de cancelamento serão adotados?

## 9. Controle de mudanças
Toda inclusão ou retirada relevante de escopo deverá registrar solicitação, justificativa, valor esperado, impacto em prazo/custo/risco/complexidade, responsável pela aprovação e atualização dos requisitos, roadmap e backlog após aprovação.
