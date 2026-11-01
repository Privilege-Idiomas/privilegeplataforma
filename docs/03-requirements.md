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

### REQ-002 — Autenticação individual por e-mail e senha
- **Status:** **Definido por Marina — DEC-039 RESOLVIDO** quanto ao login tradicional. Detalhamento da stack, custos e implantação pendentes.
- **Descrição:** aluno acessará sua conta por **e-mail e senha**; não prever link mágico/código de e-mail como segunda opção habitual de login. O **primeiro acesso/ativação** mantém os dois caminhos aprovados na DEC-036, com comprovação segura da titularidade do e-mail.
- **Critérios de aceitação preliminares:** credenciais válidas permitem acesso à própria conta; credenciais inválidas não permitem; autenticação e autorização verificadas no servidor; senha criada durante ativação segura, nunca enviada em claro; armazenar somente hash robusto com sal e boas práticas atuais; limitar tentativas abusivas; sessões seguras e revogáveis.
- **Recuperação de acesso:** oferecer “Esqueci minha senha”, com verificação segura pelo e-mail e token de redefinição temporário de uso único. Proteger contra enumeração de contas. Não presumir envio por SMS.
- **Pendente:** política concreta de senhas, escolha de provedor/stack de autenticação, controles de sessão, antifraude, eventual MFA de professores/administradores e avaliação de risco/custo. Login social não integra a escolha atual e exigiria nova aprovação.
- **Custos potenciais não aprovados:** autenticação/armazenamento seguro, mensagens de redefinição, monitoramento, proteção contra ataques e suporte. Quantificar após escopo/stack, antes da implementação (DEC-032/035).
- **Referências:** DEC-039, DEC-036, DEC-038.

### REQ-020 — Jornada pública de aquisição e ativação pós-compra
- **Status:** Diretriz funcional de Marina para landing page/fluxo; **duas formas de ativação aprovadas (DEC-036, RESOLVIDO)**. Validação de integrações, regras comerciais e aprovação dos custos pendentes.
- **Descrição:** landing page pública apresentará serviços, funcionalidades e planos, inclusive para campanhas de tráfego. **DEC-041:** antes da compra, disponibilizar informações claras sobre temas e objetivos dos cursos, funcionalidades oferecidas, condições relevantes da assinatura e suporte, para que aluno ou responsável compreenda o serviço contratado; **DEC-046:** links da landing page para cada curso abrirão a **mesma página pública de detalhes sem login** utilizada pela vitrine da plataforma, com informação de curso aprovada para divulgação; valores e regras comerciais dependem das aprovações correspondentes. Jornada pretendida: interessado informa e-mail → segue para pagamento → recebe comunicação de primeiro acesso → completa cadastro → entra na plataforma. Após a contratação, disponibilizar **e-mail de ativação** e, alternativamente, **continuidade da ativação no próprio site mediante verificação segura de posse do e-mail**.
- **Critérios de aceite preliminares:** não basta a sessão de checkout para provar propriedade do e-mail; os dois caminhos exigem confirmação segura; evitar duplicação de conta; permitir retomar ativação de compra confirmada; estados de pagamento aprovados/pendentes/não concluídos devem ser distinguidos. Concessão de acesso deve ocorrer somente com confirmação confiável do direito pelo backend, sem confiar apenas em retorno do navegador. Nunca enviar senhas por e-mail.
- **Ainda a definir:** checkout, provedor, confirmação de compra, meios de pagamento, campos de cadastro, sistema de ativação, expiração/reenvio, e-mails existentes, regras para alunos atuais, tratamento de pagamentos pendentes e mensagens.
- **Custos potenciais a quantificar após definição de escopo e stack:** produção do funil, hospedagem e tráfego da landing page, taxas do checkout, comunicação transacional e possíveis reenvios/OTP, autenticação, banco de dados e suporte. Custo variável por aluno requer aprovação expressa antes da execução; nenhuma cifra ainda aprovada.
- **Relação:** DEC-036, DEC-032, DEC-035, REQ-001, REQ-002, REQ-003, REQ-004.

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
- **Complemento definido por Marina (DEC-034):** dentro dos grupos ordenados pela DEC-033, apresentar sempre as questões em ordem aleatória. Cada questão terá um código único e estável, visível ao aluno autorizado, para referência em plantão de dúvidas/aula particular e busca por professor com perfil autorizado; professores autorizados poderão consultar questões de **todos os cursos na versão inicial**, mantendo autenticação e separação de dados de alunos; preparar autorização configurável para eventual restrição futura por curso, **não ativa agora**, sujeita a nova decisão e revisão de custos; ao buscar pelo código, o professor autorizado vê **enunciado, alternativas, gabarito e explicação integralmente**; apenas a interface docente e os controles específicos de consulta ainda precisam ser detalhados. O aluno pode marcar/desmarcar questões como “Questões em dúvida” e consultar lista pessoal persistida entre sessões. **Privacidade definida por Marina:** marcações e listas são visíveis somente ao aluno titular; professor não pode visualizar a lista nem descobrir quem marcou uma questão, inclusive por API ou consulta por código. Marcação independente de erro/acerto: acertar não remove marcador; desmarcar não muda progresso. Respeitar direitos de acesso ao curso em todas as consultas e listas. **Aprovação financeira pendente; não implementar ainda.**
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

### REQ-021 — Público sem barreira etária comercial, cadastro mínimo, CPF de pagador e privacidade
- **Status:** DEC-037 **RESOLVIDO** para foco em jovens/adultos sem limite etário comercial e dispensa de foto. DEC-038 **CPF do pagador, faixa etária obrigatória no cadastro, telefone opcional e nome completo do aluno obrigatório RESOLVIDOS**, demais campos **REVISAR**. Exigências legais sobre menores e custos ainda pendentes.
- **Público e apresentação:** divulgar prioritariamente cursos de viagens/negócios para jovens e adultos, explicando objetivos e conteúdos; **não bloquear inscrição de menores de 12 anos apenas pela política de público** (limite anterior substituído em 2026-11-01). Não oferecer indiscriminadamente conteúdo inadequado a menores; contratação e supervisão por responsável e salvaguardas por idade seguem sujeitas a revisão jurídica e especificação de fluxo.
- **Foto de perfil:** não incluir captura, upload, campo nem armazenamento de foto/avatar do aluno, pois sem finalidade de produto.
- **CPF — regra aprovada:** somente coletar CPF **do contratante/pagador, quando comprovadamente necessário** para pagamentos/fiscal; não exigir CPF do aluno por ser aluno; quando o pagador for pessoa distinta, seus dados de cobrança são separados do perfil de estudante e protegidos. Minimizar persistência e evitar duplicação de dados de pagamento; CPF não autentica conta.
- **Campos de cadastro pendentes:** e-mail verificado é parte do fluxo aprovado de ativação; **Nome completo do aluno obrigatório**, inclusive quando aluno e pagador forem pessoas diferentes; **login tradicional e-mail/senha aprovado na DEC-039**; definir detalhes técnicos de autenticação, tratamento de nome social/preferido e dados de responsável. **Telefone opcional aprovado por Marina:** nenhum bloqueio de cadastro/ativação se não informado; coletar e proteger apenas quando fornecido, com finalidade transparente; não assumir SMS obrigatório nem consentimento automático para marketing. **Senha exigida no primeiro acesso por adoção do login tradicional**, com hash seguro e nunca registrada em texto simples.
- **Informação etária para entender o público — formato APROVADO por Marina:** coletar **faixa etária** para entender distribuição e demandas de aprendizagem, com relatórios agregados; não coletar data completa de nascimento para essa finalidade estatística. **Faixa etária obrigatória no cadastro, aprovada expressamente por Marina em 2026-11-01. Exibir somente quatro opções, aprovadas nessa data: até 11 anos; 12 a 17 anos; 18 a 29 anos; 30 anos ou mais. Impedir finalizar o cadastro/ativação sem selecionar uma opção.** As faixas são autodeclaradas, não constituem comprovação de idade legal. A coleta estatística não substitui aferição etária regulatória, que deve ser definida separadamente. **Dados obtidos especificamente para aferição regulatória de idade de crianças/adolescentes só podem ser usados para esse fim** (ECA Digital art. 13). Não realizar perfilamento para publicidade comercial direcionada a crianças/adolescentes; inteligência de marketing deve respeitar finalidade, base legal e agregação não identificável.
- **Requisitos jurídicos e de segurança pendentes:** estudar orientação ANPD de 28/10/2026 sobre serviços de acesso provável a menores, ECA Digital e LGPD; adotar controles proporcionais de privacidade, avaliação de riscos, conteúdo etariamente adequado, comprovação de idade quando requerida, parentalidade/supervisão pertinente e separação entre aluno e contratante. Não inferir que foco comercial adulto equivale a isenção legal. Revisão jurídica antes do lançamento a menores.
- **Custos potenciais, não estimados:** relatórios de faixa etária, eventual serviço de aferição, segurança, medidas para responsáveis, proteção de registros financeiros, comunicações voluntárias e eventuais SMS (não aprovados); escolher stack antes de orçar e não autorizar gasto sem aprovação da DEC-032.
- **Referências:** DEC-037, DEC-038, DEC-036, DEC-032, DEC-035, REQ-001/002/020.

### REQ-022 — Aluno menor com conta própria e responsável legal na contratação
- **Status:** modelo funcional **APROVADO por Marina (DEC-040 RESOLVIDO)**. Permissões de responsável, detalhes jurídicos, verificação, stack e orçamento pendentes; sem autorização de implementação.
- **Regra:** para estudantes menores de idade, a **contratação e as autorizações necessárias** envolvem responsável legal, mas o estudante acessa **conta própria e individual**, com seu histórico pedagógico, progresso, avaliações, respostas e marcadores pessoais. Não compartilhar senha ou sessão entre aluno e responsável como solução. Não exigir supervisão do responsável durante cada aula apenas em razão da menoridade.
- **Separação de dados:** identificar separadamente aluno, pagador/contratante e responsável legal, com relacionamentos e permissões apropriados. Esses papéis podem coincidir ou diferir. CPF, se necessário para pagamento ou obrigação fiscal, pertence ao pagador conforme DEC-038; não obrigar CPF pedagógico do menor.
- **Critérios preliminares:** permitir a existência de conta de aluno menor vinculada à pessoa autorizada a contratar; direitos contratados associados à conta do aluno sem atribuir titularidade indevida do pagamento; preservar registros acadêmicos exclusivamente vinculados à identidade individual do estudante; controlar visibilidade e alterações no servidor; manter trilha auditável de autorizações exigidas. O vínculo do responsável **não libera automaticamente seu acesso ao histórico ou às listas de dúvidas** do aluno; qualquer visualização dependerá de decisão funcional específica e análise jurídica. **Não haverá área/conta exclusiva de pais ou responsáveis, por aprovação expressa de Marina (DEC-041)**. Meios seguros de autorizações, compra, suporte e comunicações deverão funcionar sem esse portal; não conceder acesso ao progresso do aluno por suposição.
- **Pendências jurídicas e funcionais:** mecanismos proporcionais de idade/autoridade parental, campos obrigatórios e provas quando exigidas, envio de mensagens e cobrança, criação/recuperação da conta do menor, autorizações/revogação, transição à maioridade, proteção de dados e tratamento de crianças conforme LGPD/ECA Digital. **Área exclusiva do responsável excluída da especificação funcional por DEC-041**; qualquer eventual necessidade jurídica de supervisão específica deverá ser analisada sem presumir novo portal, e apresentada a Marina para decisão se exigir mudança de escopo. A faixa etária estatística autodeclarada não é prova legal de idade.
- **Custos a dimensionar após escopo e stack:** relações aluno–responsável–pagador, comunicações e links seguros de autorização, registros de auditoria, segurança e atendimento, eventual verificação, sem construir área parental específica. A ausência de portal pode reduzir desenvolvimento/manutenção, mas não elimina obrigações de consentimento ou proteção; estimativas e aprovação financeira específicas antes de executar, conforme DEC-032/035.
- **Relações:** DEC-040/041, DEC-037/038/036/039, REQ-001/002/020/021.

### REQ-023 — Pagador vinculado a múltiplos alunos
- **Status:** aprovado funcionalmente por Marina, DEC-042, incluindo checkout separado por aluno. Custos, demais detalhes comerciais e execução pendentes.
- **Regra:** um pagador poderá pagar cursos ou assinaturas de vários estudantes, incluindo irmãos. Cada aluno mantém credenciais, direitos contratados, progresso, avaliações, histórico e marcadores privados independentes. Um vínculo de cobrança não dá acesso à conta ou histórico dos estudantes; autorização obrigatória no backend.
- **Critérios:** associar cada compra e direito ao beneficiário correto; preservar separação de identidades aluno, pagador e responsável legal; registrar situação e histórico da compra; impedir liberação, suspensão ou cancelamento na conta errada. Não exigir CPF do aluno quando diferente do pagador e não criar área dos responsáveis.
- **Regra de compra por beneficiário APROVADA por Marina em 2026-11-01:** cada checkout/contratação deve ter **um único aluno beneficiário**, mesmo se o pagador contratar para vários alunos ao longo do tempo. O mesmo pagador pode realizar compras separadas para diferentes alunos; **não construir carrinho/checkout com alunos beneficiários distintos**. Isso não define a quantidade de cursos que um mesmo aluno poderá contratar em uma compra. Cada contrato deverá preservar a atribuição de direitos e o tratamento individual de cancelamentos e situações de pagamento.
- **A definir:** regras da recorrência por contrato, convite/ativação, reembolsos, cancelamentos, troca de pagador, preços, eventuais descontos e suporte financeiro. Não presumir plano familiar.
- **Custos potenciais ainda sem orçamento:** modelagem de dados, fluxo de compra, cobrança e comunicação, suporte e auditoria, taxa por transação (potencialmente mais operações porque não há checkout conjunto), infraestrutura fixa e custos variáveis por aluno e por administrador. Quantificar depois do escopo completo e da stack, antes de aprovar execução.
- **Referências:** DEC-042, DEC-040, DEC-041, DEC-038, REQ-003/004/020/022.

### REQ-024 — E-mails distintos por função e conta infantil gerida pelo responsável
- **Status:** **APROVADO** por Marina (DEC-043): separar e-mails do pagador e do aluno quando diferentes, e utilizar **e-mail de login exclusivo por conta infantil, administrado pelos pais**. Detalhes jurídicos/técnicos e aprovação financeira pendentes. Não implementar sem orçamento aprovado.
- **Descrição:** e-mail do pagador para cobranças, comprovantes e comunicação contratual; e-mail do aluno para ativação, login tradicional e recuperação da senha. Quando aluno e pagador forem a mesma pessoa, aceitar um único endereço para ambas as finalidades. Manter compra separada por aluno e contas acadêmicas individuais com direitos e progresso próprios.
- **Crianças — opção A APROVADA:** cada aluno menor terá sua própria conta acadêmica em seu nome e um **e-mail exclusivo para login daquela conta**, que pode ser criado/administrado pelos pais. Não utilizar o mesmo endereço de login como identificador de contas de irmãos, nem compartilhar senhas de contas adultas. Nome, histórico, cursos e direitos pertencem ao estudante, mesmo que um adulto controle a caixa postal. Sem área exclusiva de responsáveis.
- **Critérios preliminares:** separar destinatários financeiro e de autenticação quando diferentes; garantir identificador de e-mail exclusivo para cada conta de estudante; verificar controle do endereço na ativação e recuperação, mesmo quando administrado pelos pais; evitar colisões e exposição de dados entre irmãos; controlar permissões no backend; não criar área parental; avaliar requisitos legais de menores e futura alteração de endereço administrado pelos pais.
- **Custos potenciais a estimar depois de escopo e stack:** identificação e relacionamento de pagador/aluno, armazenamento de contatos, mensagens transacionais, verificação e recuperação de e-mail, suporte a casos de conta infantil. A quantidade de endereços não implica automaticamente duplicação de mensagens nem economia monetária.
- **Referências:** DEC-043, DEC-039/040/041/042, REQ-002/020/022/023.

### REQ-025 — Página inicial personalizada e vitrine de cursos adicionais
- **Status:** **APROVADO por Marina na DEC-044** como escopo funcional para o produto completo; desenho final, custos, arquitetura, prioridade de versão e implementação pendentes.
- **Pós-login:** exibir página inicial personalizada com (1) cursos cujo direito de acesso esteja ativo, (2) progresso individual de aprendizagem e (3) ação de destaque para retomar o ponto de estudo autorizado (“Continuar de onde parou”). O primeiro acesso sem histórico requer comportamento específico a detalhar; não simular progresso.
- **Descoberta comercial:** quando os direitos atuais não cobrirem todo o catálogo disponível, mostrar uma seção informando a existência de outros cursos comercializáveis, com identificação clara dos que ainda não estão incluídos. Quando a conta tiver acesso integral ao catálogo, não apresentar a seção como se houvesse cursos adicionais para contratar. Basear essa condição nos direitos vigentes, não apenas no rótulo de um plano.
- **Segurança e conteúdo restrito:** a vitrine pode utilizar somente informações públicas/aprovadas do catálogo e indicação de falta de acesso. Não permitir abrir aula, material ou questão bloqueada a partir da home ou via link/API. Respeitar DEC-027: na aba de exercícios de cursos sem direito, apenas agrupamentos bloqueados, sem individualização de questões. Aplicar controle de acesso no servidor, com testes de usuário autorizado e não autorizado.
- **Menores:** eventual oferta na home de estudante menor precisa de avaliação jurídica e desenho adequado à idade/contratação por responsável; não usar perfilamento comercial nem publicidade comportamental direcionada a menores. A decisão não implica autorização de usar dados de aprendizagem/faixa etária para anúncios.
- **Pendências:** número/ordem e campos dos cartões, detalhamento visual da página de curso aprovada em DEC-045, destino da contratação após a página informativa, situação de cursos não iniciados, retorno a aulas concluídas, preços/planos/checkout, uso ou ausência de personalização comercial e dados de mensuração. Nenhum sistema de recomendação por IA foi autorizado.
- **Custo a quantificar depois de escopo completo e stack:** interface, consultas e cache de progresso e acesso, catálogo, infraestrutura fixa e banda, operações administrativas e suporte, segurança, acessibilidade e eventuais comunicações. Separar inicial, fixo mensal, variável por aluno e variável administrativo. Aprovação financeira independente exigida por DEC-032; não executar antes dos gates.
- **Relações:** DEC-044, DEC-027, DEC-030/032/035/037/040, REQ-003/004/021.

### REQ-026 — Página de detalhes de curso antes do checkout
- **Status:** **APROVADO funcionalmente por Marina — DEC-045 e DEC-046 RESOLVIDOS**. Conteúdo editorial, navegação comercial posterior, stack, custos, revisão jurídica para menores e execução pendentes.
- **Jornada e publicidade da página (DEC-045/046):** quando aluno clicar em **“Conhecer curso”** na vitrine da página inicial, abrir **a mesma página pública daquele curso** acessível sem login a visitantes vindos da landing page ou por link compartilhado/campanha. **Uma única página e URL informativa por curso**, não páginas duplicadas por canal, sem redirecionamento direto ou automático para pagamento. Apresentar **descrição, objetivos de aprendizagem, módulos e benefícios** com linguagem clara e informações verificáveis.
- **Critérios de aceite preliminares:** permitir visitante **anônimo**, aluno autenticado sem acesso e aluno com acesso consultar a mesma informação comercial pública; landing page e home do aluno direcionam para a mesma página por curso. Renderizar apenas metadados explicitamente públicos do catálogo, nunca carregar ou liberar conteúdo restrito de aulas/vídeos/exercícios, respostas, materiais, dados de progresso ou URLs privadas apenas por acessar detalhes; backend verifica autenticação/autorização em rotas e APIs pedagógicas. O acesso à informação de catálogo não ativa matrícula ou plano, não gera cobrança e não modifica direitos do aluno.
- **Pontos pendentes:** **a sequência “Conhecer curso → Ver planos e preços → Contratar” e o CTA “Ver planos e preços” estão aprovados na DEC-047**; permanecem pendentes os preços/planos e suas aprovações comerciais, a forma final de exibir essas ofertas, o comportamento de contratação/upgrade, organização de conteúdo, informações complementares, mídias, acessibilidade e detalhes visuais do estado do curso já contratado ou acesso completo (**CTA “Acessar curso” aprovado na DEC-048**). A decisão não inclui preview de aulas, amostras de exercícios, compras automáticas nem recomendação por IA.
- **Menores:** avaliar conteúdo e chamadas comerciais exibidos a menores, contratação por responsável legal, ECA Digital/LGPD e ausência de publicidade comportamental direcionada a menores; não presumir que a vitrine autorize anúncios personalizados.
- **Custos para análise depois do escopo e stack:** desenvolvimento de **página reutilizável única** por curso e gestão/edição editorial (potencial redução de trabalho duplicado), páginas públicas e infraestrutura, eventuais mídias, banda/cache/CDN, tráfego de campanhas e monitoramento de uso público, proteção contra abuso, suporte e manutenção; separar investimento inicial, fixo mensal inclusive ocioso, variáveis por visualização/aluno e operação administrativa. Aprovação financeira separada, sem execução autorizada (DEC-032/035).
- **Relações:** DEC-045/046, DEC-044, DEC-027/030/032/035/040/041/042; REQ-003/004/020/025.

### REQ-027 — Ver planos e preços antes do checkout
- **Status:** **APROVADO funcionalmente por Marina (DEC-047)** para CTA e sequência de navegação. Configuração de ofertas, preços, aprovação comercial, stack, orçamento e implementação pendentes.
- **Jornada:** página pública informativa de um curso (DEC-045/046) → ação explícita **“Ver planos e preços”** → visualização das opções de planos/preços aplicáveis ao curso, quando aprovadas → ação posterior de **contratar** a opção escolhida. Nunca redirecionar diretamente ao checkout ao clicar em “Conhecer curso”, nem contratar automaticamente após visualizar preços.
- **Critérios preliminares:** páginas informativas e consulta pública às opções comerciais relevantes podem ser acessadas sem login; a escolha de plano deverá manter o contexto do curso; não criar conta, débito, matrícula ou direito pedagógico durante mera navegação. Exigir escolha e confirmação apropriadas para prosseguir à contratação; só liberar direito mediante confirmação confiável do pagamento/backend. Uma contratação contempla somente um aluno beneficiário, conforme DEC-042, com separação pagador–aluno da DEC-043 e verificação de responsável legal para menores quando aplicável. Proteger conteúdos restritos conforme REQ-004.
- **Dependências comerciais não aprovadas:** nomes e quantidade de planos, preços, periodicidade, combinação de cursos, plano completo, elegibilidade, política de upgrade, descontos, estornos, checkout e provedor de pagamento. Esses itens dependem das decisões comerciais e financeiras correspondentes; não preencher valores ou prometer benefícios até aprovação. O aspecto visual da seleção de ofertas ainda aguarda especificação; **para aluno com acesso vigente, o CTA de página de curso muda para “Acessar curso”, conforme DEC-048**.
- **Proteção de menores:** a exibição de ofertas e o encaminhamento de menores para contratação devem seguir as salvaguardas legais e envolvimento do responsável exigível, sem publicidade comportamental dirigida a menores ou perfis construídos com dados acadêmicos/demográficos.
- **Custos potenciais ainda não quantificados:** interface e gestão das ofertas, consulta de preços/catálogo, tráfego/caching, integrações transacionais, operações de suporte e atualização de preços, custos fixos inclusive inativos e variáveis por aluno/visita/ação administrativa, taxas de pagamento. Estimar após fechamento de escopo e stack; exigir aprovação financeira separada conforme DEC-032/035; implementação não autorizada.
- **Relacionamentos:** DEC-047/045/046/041/042/043/036 e REQ-003/004/020/025/026.

### REQ-028 — CTA “Acessar curso” para alunos com direito vigente
- **Status:** aprovado funcionalmente por Marina (DEC-048 RESOLVIDO); detalhes de interface, infraestrutura, custos e implementação pendentes.
- **Jornada:** na **mesma página pública de apresentação** de cada curso, manter descrição/objetivos/módulos/benefícios públicos; quando o visitante **estiver autenticado e tiver acesso vigente ao curso**, apresentar **“Acessar curso”** em lugar de **“Ver planos e preços”**, direcionando à área de estudos autorizada. Se visitante anônimo ou sem direito ativo, a página poderá oferecer a jornada comercial **“Ver planos e preços”** (DEC-047), respeitando a proteção dos menores.
- **Regras e segurança:** direito ao curso pode ser específico ou herdado de plano com catálogo integral. Não considerar pagamento pendente, assinatura expirada/suspensa ou acesso revogado como direito ativo. Cliente adapta CTA, mas acesso pedagógico exige checagem de permissão pelo backend a cada entrada, inclusive por URL/API. Não expor dados pessoais, progresso, status financeiro privado ou conteúdo protegido em página/resposta pública/cache compartilhado.
- **Aceite preliminar:** (1) autenticado com direito vigente vê e utiliza “Acessar curso”; (2) autenticado sem direito vê opções comerciais, sem acesso pedagógico; (3) anônimo acessa informações públicas, sem receber privilégio; (4) assinante com plano abrangente também acessa; (5) tentativas diretas sem direito são negadas; (6) alterações de direito não deixam liberar conteúdo indevidamente.
- **Ainda a decidir:** o destino de “Acessar curso” como **visão geral pedagógica com módulos, aulas, progresso, continuidade e revisão de aulas liberadas está aprovado na DEC-049**. Permanecem pendentes os detalhes da retomada, sessão expirada, estado de cobrança pendente e mensagens de falha, estilo/CTA excepcional e eventual adaptação para menores. Acesso/ações comerciais de menores exigem avaliação legal.
- **Custos potenciais:** avaliação de direitos, lógica condicional de interface, cache isolado, testes de autorização, infraestrutura e suporte. Dimensionar implementação, fixo mensal, custo por consulta/aluno e atividades administrativas após definição de escopo completo e stack; autorização financeira distinta segundo DEC-032/035; não executar automaticamente.
- **Referências:** DEC-048, DEC-045/046/047, DEC-044/037, REQ-003/004/025/026/027.

### REQ-029 — Visão geral pedagógica do curso após “Acessar curso”
- **Status:** funcionalidade **APROVADA por Marina na DEC-049**. Detalhes de layout, cálculo de progresso, retomada, custos, infraestrutura e implementação pendentes.
- **Jornada:** aluno com sessão autenticada e direito vigente clica **“Acessar curso”** na página pública do curso e é levado à **visão geral privada desse curso**, em vez de abrir automaticamente uma aula. A tela apresenta **módulos, aulas, progresso individual, opção “Continuar de onde parou” e seleção de aulas já liberadas para revisão**.
- **Critérios preliminares de aceitação:** (1) o aluno identifica módulos e aulas de um curso autorizado; (2) visualiza seu próprio progresso, nunca o de outro aluno; (3) pode revisar aula previamente liberada/concluída; (4) aulas ainda bloqueadas pela progressão pedagógica não se tornam acessíveis pelo sumário ou URL direta; (5) a retomada direciona a conteúdo pertinente ao estado salvo e autorizado; (6) aluno novo não vê progresso fictício; (7) acesso por URL/API é bloqueado sem autenticação/direito ao curso.
- **Consistência pedagógica:** manter estrutura curso → módulo → aula e avaliação obrigatória para liberar próxima aula (DEC-025/REQ-013/015). Exercícios de prática continuam opcionais e não bloqueiam acesso à avaliação. O sumário pode indicar bloqueios, mas não reclassifica aula como concluída automaticamente.
- **Detalhes pendentes:** layout, cálculo e escopo dos percentuais de progresso, estados visuais de aula, destino da retomada após interrupção e avaliações pendentes, primeiro acesso, curso concluído, tratamento de perda de direito e sessões vencidas. Não implementar lógica de IA para recomendar próxima aula sem nova aprovação.
- **Custos a dimensionar depois de escopo integral e stack:** interface, persistência/consulta de progresso, componentes de navegação, autorização no backend, cache privado, dados, banda, suporte, segurança e disponibilidade. Separar inicial, fixo mensal mesmo ocioso, variáveis por aluno e por operação administrativa; aprovação financeira separada conforme DEC-032/035. Sem autorização de execução ou envio ao Claude.
- **Relacionamentos:** DEC-049/048/044/025/030/032/035; REQ-004/010/012/013/015/025/028.

## 7. Requisitos transversais a detalhar
- Segurança e controle de acesso por perfil e direito contratado.
- Privacidade e proteção de dados pessoais, considerando a LGPD.
- Responsividade para desktop e dispositivos móveis.
- Desempenho e disponibilidade.
- Acessibilidade e legibilidade dos conteúdos.
- Registro de erros e monitoramento sem exposição de dados sensíveis.

## 8. Próxima etapa
Transformar os requisitos em histórias de usuário, critérios de aceitação verificáveis e tarefas no ClickUp após validar as regras pendentes com o patrocinador e a equipe pedagógica.
