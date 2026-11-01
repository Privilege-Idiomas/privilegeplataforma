# Requisitos do Produto — Plataforma Privilège

**Versão:** 0.2  
**Status:** Baseline inicial em elaboração; aprovação formal do patrocinador pendente  
**Última atualização:** 2026-10-31

## 1. Convenções
- **Informado por Marina:** a titularidade e o status de aprovação devem ser confirmados conforme ela informar. Atribuições históricas feitas por inferência precisam ser revistas, sem apagar o histórico.
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
- **Status:** Regra geral de controle de acesso proposta; **herança de acesso dos exercícios definida por Marina (DEC-027, RESOLVIDO)**.
- **Descrição:** disponibilizar cursos e serviços conforme os direitos ativos do aluno. **Exercícios pertencem a aulas → módulos → cursos e devem obedecer às mesmas permissões do curso, sem direito de acesso independente.**
- **Critério de aceitação preliminar:** aluno acessa conteúdos incluídos em sua assinatura e não acessa conteúdos/serviços não contratados. **Mesmo na aba geral de exercícios ou via endereço direto, deve ser impedido de abrir/realizar exercícios de cursos sem autorização ativa.**
- **Apresentação definida (DEC-027):** a aba geral apresenta **apenas uma indicação agrupada de exercícios adicionais associados a cursos sem acesso**, sinalizada como bloqueada e com convite para conhecer opções de ampliação de assinatura. **Não listar/exibir cada exercício individual de um curso bloqueado.** Enunciados, alternativas, respostas e acesso a exercícios restritos continuam vedados, inclusive via API/URL.
- **Pendente:** demais relações entre assinatura, catálogo, cursos, serviços adicionais e estados de pagamento, e experiência exata de upgrade.

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

### REQ-012 — Exercícios de prática associados às aulas (opcionais)
- **Status:** **Definido por Marina em 2026-10-31 — DEC-025, RESOLVIDO.** A regra provisória anterior de exercícios obrigatórios foi substituída por decisão expressa dela. Nenhuma confirmação de Matheus é necessária para esta decisão.
- **Descrição:** cada aula pode apresentar exercícios de prática destinados à fixação, **recomendados, mas opcionais**. O aluno pode acessar a avaliação da aula sem concluir exercícios de prática.
- **Critérios de aceitação preliminares:** (1) o aluno acessa exercícios de fixação associados à aula; (2) pode deixar de fazê-los sem impedir o acesso à avaliação; (3) a aprovação na avaliação permanece obrigatória para concluir a aula e liberar a próxima, conforme REQ-013/REQ-015.
- **Pendente:** tipos de questões, correção automática/manual, feedback, vínculo de questões a curso/módulo/aula, definição e exibição de dificuldade; não presumir mecanismos de pontuação/progresso da prática.
- **Histórico:** inicialmente DEC-025/MAT-013 considerava obrigatoriedade como resposta provisória de Marina sujeita à revisão com Matheus; em 2026-10-31 Marina transferiu a decisão para si e a resolveu como **opcional**. O registro canônico e a história da mudança estão em `docs/08-decisoes-marina.md`.

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
- **Status:** parcial; regra geral informada por Marina. **DEC-024 = REVISAR (resposta provisória de Marina, aguardando confirmação de Matheus).** Não tratar a DEC-024 como aprovação final dele.
- **Descrição:** o aluno deverá concluir todos os componentes obrigatórios da aula e atingir a nota mínima na avaliação para desbloquear a próxima aula do mesmo curso.
- **Critério de aceitação preliminar:** aulas futuras permanecem bloqueadas até que o aluno conclua todo o conteúdo/atividades obrigatórios e seja aprovado na avaliação; após cumprir ambos os critérios, a próxima aula da sequência é liberada.
- **Regra definida:** a aprovação na avaliação é requisito obrigatório para a conclusão da aula e o desbloqueio da próxima.
- **Resposta provisória de Marina (DEC-024; decisão atribuída por ela à validação de Matheus, status REVISAR):** não é obrigatório assistir a 100% do vídeo para concluir a aula ou desbloquear a próxima. O aluno pode avançar ao cumprir os demais componentes obrigatórios e atingir a nota mínima. A presença do vídeo como conteúdo da aula permanece prevista; o percentual assistido não será requisito de conclusão segundo esse direcionamento.
- **Relação com DEC-025 (RESOLVIDO — Marina):** exercícios de prática agora são **opcionais**, não entram nos componentes obrigatórios da aula e não podem bloquear a avaliação. A decisão anterior, que os tratava como obrigatórios provisoriamente, foi substituída e preservada no histórico. A avaliação **continua obrigatória**, com nota mínima para desbloqueio.
- **Pendente:** detalhar quais atividades e demais componentes serão obrigatórios em cada aula e o valor/escala da nota mínima; Marina comunicará a confirmação ou mudança da DEC-024 após conversar com Matheus.

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

### REQ-018 — Aba geral de exercícios com filtros
- **Status:** **Definido por Marina — DEC-027, RESOLVIDO**, incluindo o controle de acesso herdado dos cursos.
- **Descrição:** oferecer uma área própria **“Exercícios”**, independente de estar dentro de uma aula, reunindo exercícios vinculados à estrutura **curso → módulo → aula → exercício** e permitindo filtrar por **curso, módulo, aula e nível de dificuldade**.
- **Critério de aceitação preliminar:** o aluno consegue abrir a aba, localizar exercícios autorizados e filtrar pelos quatro atributos; **só pode abrir/realizar exercícios de cursos aos quais possui direito de acesso**. Aluno contratado apenas em Basic English não acessa exercícios de Travel/Business, nem por navegação direta ou URL.
- **Regra comercial resolvida:** a biblioteca **não concede acesso universal**: cada exercício herda a permissão do curso ao qual pertence, conforme DEC-027 e REQ-003/REQ-004.
- **Regra de descoberta e upgrade (DEC-027, definida por Marina):** na aba geral, cursos sem direito de acesso devem ter **indicativo agregado de que há mais exercícios disponíveis**, claramente marcado como bloqueado, com opção de conhecer possibilidades de ampliação do plano. **Não renderizar nem fornecer listagens de exercícios individuais, identificadores das questões, enunciados, alternativas ou respostas de cursos não contratados.** A interface deve permitir descoberta comercial apenas em nível agregado; controle de acesso aplicado no backend, inclusive em URLs/APIs diretas.
- **Priorização aprovada de questões por aluno (DEC-033):** ao praticar, apresentar primeiro as pendentes de revisão (erradas e ainda não acertadas), depois as inéditas e por último as concluídas (já acertadas). Acerto posterior move automaticamente a questão para concluída. Detalhes de ordenação interna e dimensão de sessão ainda pendentes. **Aprovação financeira pendente; não implementar antes da análise e aprovação dos custos.**
- **Pendências de apresentação e detalhamento:** nomes/preços dos planos elegíveis, destino da ação de upgrade/contato e formato visual do **agrupamento bloqueado**; níveis/escala de dificuldade e taxonomia; persistência e histórico de prática; ordenação, combinação de filtros e experiência móvel.
- **Referências:** DEC-027, DEC-025; REQ-003/REQ-004.

### REQ-019 — Lista de revisão dos conteúdos de cada módulo
- **Status:** **Definido por Marina — DEC-028, RESOLVIDO** quanto à existência de lista por módulo.
- **Descrição:** ao final de cada módulo, oferecer uma **lista de exercícios de revisão**, combinando assuntos das **diferentes aulas que compõem aquele módulo**, análoga a uma revisão de capítulo.
- **Direito de acesso:** a lista fica vinculada ao módulo e ao curso de origem; **só pode ser acessada se o aluno tiver acesso ao respectivo curso** (DEC-027).
- **Critério de aceitação preliminar:** cada módulo pode disponibilizar uma lista agregada de revisão com questões ligadas a conteúdos de várias aulas do próprio módulo; a lista não substitui as avaliações obrigatórias por aula.
- **Regra de conclusão:** as listas são exercícios de prática. A política geral da DEC-025 é de exercícios opcionais. **Não criar bloqueios de progressão ou avaliação adicional ao fechar módulos por suposição**; eventual exceção a ser confirmada por Marina.
- **Pendências:** quantidade e composição das questões, criação manual ou automática, momento de disponibilização, feedback, e se o aluno pode refazer a lista ilimitadamente.
- **Referências:** DEC-028 e DEC-025; REQ-012/REQ-015.

## 7. Requisitos transversais a detalhar
- Segurança e controle de acesso por perfil e direito contratado.
- Privacidade e proteção de dados pessoais, considerando a LGPD.
- Responsividade para desktop e dispositivos móveis.
- Desempenho e disponibilidade.
- Acessibilidade e legibilidade dos conteúdos.
- Registro de erros e monitoramento sem exposição de dados sensíveis.

## 8. Próxima etapa
Transformar os requisitos em histórias de usuário, critérios de aceitação verificáveis e tarefas no ClickUp após validar as regras pendentes com o patrocinador e a equipe pedagógica.
