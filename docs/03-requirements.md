# Requisitos do Produto — Plataforma Privilège

**Versão:** 0.2  
**Status:** Baseline inicial em elaboração; aprovação formal do patrocinador pendente  
**Última atualização:** 2026-10-31

## 1. Convenções
- **Confirmado pela responsável:** definição informada por Marina; ainda sujeita à aprovação formal do patrocinador.
- **Proposto:** item sugerido para o MVP, ainda não aprovado.
- **Pendente:** regra ou detalhe que precisa de decisão.

Prioridade inicial: **Alta**, **Média**, **Baixa** ou **A definir**. A prioridade deverá ser validada no backlog.

## 2. Público, conta e acesso

### REQ-001 — Atender alunos atuais e novos alunos
- **Status:** Confirmado pela responsável; aprovação do patrocinador pendente.
- **Descrição:** atender alunos que já estudam na Privilège e novos alunos que contratarem cursos online.
- **Critério de aceitação preliminar:** ambos os públicos conseguem utilizar a plataforma conforme suas regras de acesso.
- **Pendente:** processo de cadastro/migração dos alunos atuais e jornada de aquisição dos novos alunos.

### REQ-002 — Autenticação individual
- **Status:** Proposto.
- **Descrição:** permitir que cada aluno acesse sua conta individual.
- **Critério de aceitação preliminar:** credenciais válidas permitem acesso; credenciais inválidas não permitem acesso.
- **Pendente:** método de autenticação, recuperação de senha e eventual login social.

## 3. Assinaturas e direitos de acesso

### REQ-003 — Assinatura recorrente com modalidades flexíveis de acesso
- **Status:** Confirmado pela responsável; aprovação formal do patrocinador pendente.
- **Descrição:** suportar assinaturas recorrentes que concedam acesso ao catálogo completo ou a cursos específicos.
- **Critério de aceitação preliminar:** a estrutura de planos/assinaturas permite configurar ambos os modelos sem reconstrução da lógica de autorização.
- **Pendente:** planos, preços, periodicidade, benefícios, gateway, meios de pagamento, renovação, cancelamento, reembolso e inadimplência.

### REQ-004 — Controle de acesso conforme direitos contratados
- **Status:** Proposto.
- **Descrição:** disponibilizar cursos e serviços conforme os direitos ativos do aluno.
- **Critério de aceitação preliminar:** aluno acessa conteúdos incluídos em sua assinatura e não acessa conteúdos/serviços não contratados.
- **Pendente:** relação entre assinatura, catálogo, cursos, serviços adicionais e estados de pagamento.

## 4. Catálogo, nivelamento e trilhas

### REQ-005 — Catálogo inicial de três cursos
- **Status:** Confirmado pela responsável; aprovação formal do patrocinador pendente.
- **Descrição:** o catálogo inicial terá os cursos Basic English, Travel e Business.
- **Critério de aceitação preliminar:** os três cursos podem ser apresentados e acessados conforme direitos do aluno.
- **Pendente:** ementa, módulos, aulas, pré-requisitos e conteúdo final de cada curso.

### REQ-006 — Teste de nivelamento
- **Status:** Confirmado pela responsável; aprovação formal do patrocinador pendente.
- **Descrição:** permitir que o aluno realize um teste de nivelamento como uma das formas de iniciar sua jornada.
- **Critério de aceitação preliminar:** aluno consegue realizar o teste e receber o resultado/encaminhamento definido pelo produto.
- **Pendente:** todo o desenho funcional e pedagógico do teste, incluindo estrutura, faixas de nível, pontuação, interpretação do resultado, recomendação/encaminhamento e se será obrigatório ou opcional.

### REQ-007 — Início por diferentes portas de entrada
- **Status:** Confirmado pela responsável; aprovação formal do patrocinador pendente.
- **Descrição:** permitir que o aluno escolha entre:
  1. realizar o teste de nivelamento;
  2. começar pela base, seguindo Basic English e depois Travel ou Business;
  3. entrar diretamente em Travel ou Business.
- **Critério de aceitação preliminar:** a plataforma apresenta e suporta essas opções de entrada, respeitando os direitos de acesso do aluno.
- **Pendente:** regras de recomendação, orientação ao aluno e eventuais pré-requisitos comerciais/pedagógicos.

### REQ-008 — Trilhas por objetivo usando cursos compartilhados
- **Status:** Confirmado pela responsável; aprovação formal do patrocinador pendente.
- **Descrição:** permitir criar trilhas de aprendizagem associadas a objetivos. As trilhas reutilizam os mesmos cursos (Basic English, Travel e Business), mas podem variar a sequência e a prioridade desses cursos.
- **Critério de aceitação preliminar:** uma trilha pode referenciar cursos existentes e definir sua ordem/prioridade sem duplicar o conteúdo dos cursos.
- **Pendente:** objetivos oferecidos, sequências de cada trilha, possibilidade de personalização e regras para mudança de trilha.
- **Nota de modelagem:** trilha e curso devem ser entidades conceitualmente distintas; uma trilha organiza referências aos cursos, não cria cópias dos cursos.

## 5. Conteúdo e administração

### REQ-009 — Administração de cursos e aulas restrita à equipe administrativa
- **Status:** Confirmado pela responsável; aprovação formal do patrocinador pendente.
- **Descrição:** somente integrantes autorizados da equipe administrativa poderão cadastrar e administrar cursos e aulas.
- **Critério de aceitação preliminar:** aluno não possui acesso às funções administrativas; usuário administrativo autorizado consegue gerenciar conteúdo.
- **Pendente:** definição de perfis, permissões e fluxo de publicação/revisão.

### REQ-010 — Organização de cursos em módulos e aulas
- **Status:** Proposto.
- **Descrição:** organizar conteúdo em cursos, módulos e aulas.
- **Critério de aceitação preliminar:** aluno consegue navegar pela estrutura do curso ao qual tem acesso.
- **Pendente:** campos obrigatórios, ordenação, pré-requisitos e publicação.

### REQ-011 — Disponibilização de aulas em vídeo
- **Status:** Proposto.
- **Descrição:** disponibilizar vídeos como parte das aulas.
- **Critério de aceitação preliminar:** aluno autorizado consegue reproduzir o vídeo da aula.
- **Pendente:** provedor de hospedagem, proteção de conteúdo, qualidade, legendas e acessibilidade.

## 6. Exercícios, avaliações e progresso

### REQ-012 — Exercícios associados às aulas
- **Status:** Confirmado pela responsável; aprovação formal do patrocinador pendente.
- **Descrição:** as aulas terão exercícios associados.
- **Critério de aceitação preliminar:** aluno consegue acessar e responder aos exercícios vinculados à aula.
- **Pendente:** tipos de questão, correção automática/manual, feedback e quais exercícios são obrigatórios.

### REQ-013 — Avaliações com nota mínima e uma tentativa adicional
- **Status:** Confirmado pela responsável; aprovação formal do patrocinador pendente.
- **Descrição:** as avaliações associadas às aulas terão uma nota mínima de aprovação. Se o aluno não atingir a nota mínima na primeira tentativa, poderá realizar exatamente mais uma tentativa.
- **Critério de aceitação preliminar:** o sistema registra a nota; identifica aprovação ou não aprovação conforme o limite configurado; permite no máximo duas tentativas por avaliação (uma inicial e uma adicional).
- **Regra definida:** a segunda tentativa será liberada depois que o aluno revisar o conteúdo da aula por meio de um resumo escrito disponibilizado na própria aula. Não será necessário assistir novamente ao vídeo.
- **Pendente:** valor da nota mínima e escala de pontuação; regras para exceções/retentativas administrativas.

### REQ-014 — Orientação após duas tentativas sem aprovação
- **Status:** Confirmado pela responsável; aprovação formal do patrocinador pendente.
- **Descrição:** se o aluno não atingir a nota mínima após as duas tentativas, exibir uma mensagem de orientação recomendando plantão de dúvidas ou aula particular.
- **Critério de aceitação preliminar:** após a segunda tentativa insuficiente, a plataforma exibe orientação contextual sobre as opções de apoio.
- **Regra comercial:** se o aluno estiver em plano básico com acesso somente à plataforma, a mensagem deverá explicar que o plantão/aula particular depende de contratar um plano que inclua esses serviços ou uma opção avulsa, caso essa modalidade seja aprovada.
- **Pendente:** conteúdo da mensagem, disponibilidade e contratação dos serviços, preço, agenda e distinção entre benefícios incluídos e adicionais.

### REQ-015 — Desbloqueio sequencial de aulas dentro do curso
- **Status:** Confirmado pela responsável; aprovação formal do patrocinador pendente.
- **Descrição:** o aluno deverá concluir todos os componentes obrigatórios da aula e atingir a nota mínima na avaliação para desbloquear a próxima aula do mesmo curso.
- **Critério de aceitação preliminar:** aulas futuras permanecem bloqueadas até que o aluno conclua todo o conteúdo/atividades obrigatórios e seja aprovado na avaliação; após cumprir ambos os critérios, a próxima aula da sequência é liberada.
- **Regra definida:** a aprovação na avaliação é requisito obrigatório para a conclusão da aula e o desbloqueio da próxima.
- **Direcionamento informado por Marina (DEC-024; validação pedagógica pendente):** não é obrigatório assistir a 100% do vídeo para concluir a aula ou desbloquear a próxima. O aluno pode avançar ao cumprir os demais componentes obrigatórios e atingir a nota mínima. A presença do vídeo como conteúdo da aula permanece prevista; o percentual assistido não será requisito de conclusão segundo esse direcionamento.
- **Pendente:** detalhar quais atividades e demais componentes serão obrigatórios em cada aula e o valor/escala da nota mínima; obter validação de Matheus/equipe pedagógica para DEC-024.

### REQ-017 — Resumo escrito da aula para revisão
- **Status:** Confirmado pela responsável; aprovação formal do patrocinador pendente.
- **Descrição:** disponibilizar um resumo escrito do conteúdo da aula para apoiar a revisão do aluno antes da segunda tentativa da avaliação.
- **Critério de aceitação preliminar:** após uma primeira tentativa sem aprovação, o aluno consegue acessar o resumo escrito da aula e, após revisá-lo, realizar a segunda tentativa sem precisar assistir novamente ao vídeo.
- **Pendente:** formato e extensão do resumo, autoria/produção, possibilidade de incluir imagens ou exemplos e se o material será obrigatório em todas as aulas.

### REQ-016 — Registro de progresso
- **Status:** Proposto.
- **Descrição:** registrar o avanço do aluno em cada curso e trilha.
- **Critério de aceitação preliminar:** aluno consegue identificar aulas concluídas, próxima aula disponível e avanço geral.
- **Pendente:** cálculo percentual, retomada de vídeo, persistência de atividades e visualização de progresso entre cursos/trilhas.

## 7. Requisitos transversais a detalhar
- Segurança e controle de acesso por perfil e direito contratado.
- Privacidade e proteção de dados pessoais, considerando a LGPD.
- Responsividade para desktop e dispositivos móveis.
- Desempenho e disponibilidade.
- Acessibilidade e legibilidade dos conteúdos.
- Registro de erros e monitoramento sem exposição de dados sensíveis.

## 8. Próxima etapa
Transformar os requisitos em histórias de usuário, critérios de aceitação verificáveis e tarefas no ClickUp após validar as regras pendentes com o patrocinador e a equipe pedagógica.
