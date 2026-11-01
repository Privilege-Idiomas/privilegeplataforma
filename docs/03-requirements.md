# Requisitos do Produto — Plataforma Privilège

**Versão:** 0.1  
**Status:** Baseline inicial em elaboração; aprovação do patrocinador pendente  
**Última atualização:** 2026-10-30

## 1. Convenções
- **Confirmado pela responsável:** definição informada por Marina; ainda sujeita à aprovação formal do patrocinador.
- **Proposto:** item sugerido para o MVP, ainda não aprovado.
- **Pendente:** regra ou detalhe que precisa de decisão.

Prioridade inicial: **Alta**, **Média**, **Baixa** ou **A definir**. A prioridade deverá ser validada no backlog.

## 2. Público e acesso

### REQ-001 — Atender alunos atuais e novos alunos
- **Status:** Confirmado pela responsável; aprovação do patrocinador pendente.
- **Descrição:** a plataforma deverá atender alunos que já estudam na Privilège e novos alunos que contratarem cursos online.
- **Critério de aceitação preliminar:** ambos os públicos conseguem utilizar a plataforma conforme suas regras de acesso.
- **Pendente:** processo de cadastro/migração dos alunos atuais e jornada de aquisição dos novos alunos.

### REQ-002 — Autenticação individual
- **Status:** Proposto.
- **Descrição:** permitir que cada aluno acesse sua conta individual.
- **Critério de aceitação preliminar:** credenciais válidas permitem acesso; credenciais inválidas não permitem acesso.
- **Pendente:** método de autenticação, recuperação de senha e eventual login social.

## 3. Assinaturas e acesso comercial

### REQ-003 — Contratação por assinatura recorrente
- **Status:** Confirmado pela responsável; aprovação do patrocinador pendente.
- **Descrição:** o modelo de contratação dos cursos será baseado em assinatura recorrente.
- **Critério de aceitação preliminar:** aluno consegue contratar uma assinatura e visualizar sua situação.
- **Pendente:** periodicidade, planos, preços, gateway, meios de pagamento, renovação, cancelamento, reembolso e inadimplência.

### REQ-004 — Controle de acesso conforme contratação
- **Status:** Proposto.
- **Descrição:** o sistema deverá disponibilizar conteúdos conforme o direito de acesso do aluno.
- **Critério de aceitação preliminar:** usuário sem direito de acesso não consegue consumir conteúdo restrito.
- **Pendente:** relação entre assinatura, catálogo, cursos e estados de pagamento.

## 4. Conteúdo e administração

### REQ-005 — Administração de cursos e aulas restrita à equipe administrativa
- **Status:** Confirmado pela responsável; aprovação do patrocinador pendente.
- **Descrição:** somente integrantes autorizados da equipe administrativa poderão cadastrar e administrar cursos e aulas.
- **Critério de aceitação preliminar:** aluno não possui acesso às funções administrativas; usuário administrativo autorizado consegue gerenciar conteúdo.
- **Pendente:** definição de perfis, permissões e fluxo de publicação/revisão.

### REQ-006 — Organização de cursos em módulos e aulas
- **Status:** Proposto.
- **Descrição:** permitir organizar o conteúdo educacional em cursos, módulos e aulas.
- **Critério de aceitação preliminar:** aluno consegue navegar pela estrutura do curso ao qual tem acesso.
- **Pendente:** campos obrigatórios, ordenação, pré-requisitos e publicação.

### REQ-007 — Disponibilização de aulas em vídeo
- **Status:** Proposto.
- **Descrição:** disponibilizar vídeos como parte das aulas.
- **Critério de aceitação preliminar:** aluno autorizado consegue reproduzir o vídeo da aula.
- **Pendente:** provedor de hospedagem, proteção de conteúdo, qualidade, legendas e requisitos de acessibilidade.

## 5. Exercícios, avaliações e progresso

### REQ-008 — Exercícios associados às aulas
- **Status:** Confirmado pela responsável; aprovação do patrocinador pendente.
- **Descrição:** as aulas deverão ter exercícios associados.
- **Critério de aceitação preliminar:** o aluno consegue acessar e responder aos exercícios vinculados à aula.
- **Pendente:** tipos de questão, correção automática/manual, tentativas, feedback e obrigatoriedade.

### REQ-009 — Avaliações associadas às aulas
- **Status:** Confirmado pela responsável; aprovação do patrocinador pendente.
- **Descrição:** as aulas deverão ter avaliações associadas.
- **Critério de aceitação preliminar:** o aluno consegue realizar a avaliação vinculada à aula e visualizar o resultado permitido pelas regras do produto.
- **Pendente:** diferença entre exercício e avaliação, pontuação, nota mínima, tentativas, aprovação, feedback e eventual certificado.

### REQ-010 — Registro de progresso
- **Status:** Proposto.
- **Descrição:** registrar o progresso do aluno no curso.
- **Critério de aceitação preliminar:** o aluno consegue identificar aulas concluídas e seu avanço no curso.
- **Pendente:** definição de conclusão de aula, persistência de respostas e relação com avaliações.

## 6. Requisitos transversais a detalhar
- Segurança e controle de acesso por perfil.
- Privacidade e proteção de dados pessoais, considerando a LGPD.
- Responsividade para desktop e dispositivos móveis.
- Desempenho e disponibilidade.
- Acessibilidade e legibilidade dos conteúdos.
- Registro de erros e monitoramento sem exposição de dados sensíveis.

## 7. Próxima etapa
Transformar os requisitos em histórias de usuário, critérios de aceitação verificáveis e tarefas no ClickUp após validação das regras em aberto.
