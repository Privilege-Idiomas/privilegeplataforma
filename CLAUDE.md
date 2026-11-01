# Orientações para Claude Code — Plataforma Privilège

## 1. Contexto do projeto
A Plataforma Privilège é uma plataforma digital de ensino de idiomas. O produto prevê cursos online, aulas em vídeo, exercícios, avaliações, trilhas de aprendizagem, assinaturas recorrentes e operação administrativa.

Este repositório GitHub é a **fonte principal de verdade para o projeto**, incluindo código, requisitos, escopo, decisões, governança e documentação técnica. Consulte o README e os documentos em `docs/` antes de implementar mudanças, especialmente requisitos, escopo, trilhas e Decision Log.

## 1.1. GitHub principal; Notion complementar — DEC-026
- **GitHub é a fonte principal de verdade do Privilege** para código, decisões canônicas, requisitos, arquitetura, documentação e histórico. Não transferir o registro canônico para o Notion.
- **Notion substitui somente o ClickUp**, como quadro complementar de tarefas e transparência para Matheus, conforme definição de Marina em 2026-10-31.
- **ChatGPT/PM** define, cadastra, organiza e atribui tarefas no Notion a **Marina ou Claude Code**, com critério de aceite e links para documentação do GitHub. O executor não deve se autoatribuir tarefas sem orientação.
- **Claude Code, executor técnico, deve atualizar diretamente o status de cada tarefa sua no Notion**, após receber acesso à integração; registrar no item bloqueios, etapa atual, links de PR/commit e resultados de teste. Atualizar para Em andamento ao iniciar, Em revisão/Testes ao entregar para validação, Bloqueado se houver impedimento e Concluído apenas quando critério de aceite e validação pertinentes forem cumpridos. Não confundir PR criado com entrega validada.
- **Sem acesso ao Notion**, não alegar que atualizou: informar limitação ao PM/Marina e solicitar configuração de integração antes de prometer sincronização automática.
- Os registros Markdown de decisões continuam exclusivos do responsável (docs/08 para Marina; docs/09 para Matheus), com índice docs/04. Notion pode referenciar links ou IDs, sem reproduzir fichas completas.
- Ver `docs/11-estrutura-notion.md` para fluxo, campos, visões, acesso e implantação. A adoção está decidida, mas o workspace ainda necessita conexão/configuração.

## 2. Papéis e autoridade
- **Matheus — patrocinador:** decide/aprova os itens atribuídos expressamente a ele por Marina, inclusive respostas provisórias de Marina que exijam a validação dele. Não atribuir automaticamente a ele todo tema comercial, pedagógico ou estratégico.
- **Marina — responsável pela condução do projeto e produto:** decide suas próprias questões; é a única fonte que classifica quem decide cada item e comunica as respostas/aprovações dela ou de Matheus.
- **Claude Code — apoio técnico:** analisa, propõe e implementa soluções técnicas conforme requisitos e decisões registrados.

Não tome decisões de negócio por conta própria. Quando uma regra de produto, cobrança, acesso, avaliação, progressão, conteúdo ou escopo estiver ambígua, sinalize e solicite esclarecimento antes de implementar essa parte.

## 3. Regras obrigatórias
1. Leia o README e os documentos relevantes em `docs/` antes de iniciar uma tarefa.
2. Diferencie requisitos confirmados pela responsável, propostas, hipóteses e decisões formalmente aprovadas.
3. Não transforme uma sugestão em requisito aprovado.
4. Não altere escopo, regras comerciais, preços, planos, permissões ou arquitetura aprovada sem autorização.
5. Antes de mudanças relevantes, explique a abordagem, arquivos afetados, riscos e testes previstos.
6. Prefira mudanças pequenas, rastreáveis e reversíveis.
7. Não faça deploy, migrações destrutivas, exclusões de dados ou alterações de produção sem aprovação explícita.
8. Escreva e execute testes apropriados; informe claramente o que foi e não foi testado.
9. Atualize a documentação quando uma implementação alterar comportamento, arquitetura ou configuração.
10. Não inclua segredos, tokens, chaves, senhas, dados pessoais reais de alunos ou credenciais no repositório.

## 4. Segurança e privacidade
- Utilize variáveis de ambiente para segredos e documente apenas nomes de variáveis e instruções seguras.
- Não registre dados reais de alunos em logs, fixtures, screenshots ou exemplos.
- Aplique princípio do menor privilégio em autenticação e autorização.
- Considere proteção de dados pessoais e requisitos aplicáveis da LGPD.
- Nunca exponha credenciais ou conteúdo privado em respostas, commits ou arquivos.

## 5. Estado conhecido do produto
As definições abaixo foram informadas por Marina. Consultar o status específico de cada decisão no Decision Log; **não presumir** que todas precisam da aprovação de Matheus:
- Público inicial: alunos atuais da Privilège e novos alunos.
- Modelo comercial: assinatura recorrente; a estrutura deve suportar acesso ao catálogo completo ou a cursos específicos.
- Cursos iniciais: Basic English, Travel e Business.
- Gestão de cursos e aulas: somente a equipe administrativa poderá cadastrar e administrar conteúdos.
- Entrada do aluno: teste de nivelamento, início pela base (Basic English e depois Travel ou Business), ou entrada direta em Travel/Business.
- Trilhas: reutilizam os mesmos cursos, mas podem variar sequência e prioridade conforme o objetivo do aluno.
- Aulas: exercícios e avaliações associados.
- Avaliações: nota mínima (valor ainda em aberto) e uma tentativa adicional, totalizando no máximo duas tentativas.
- Segunda tentativa: somente após revisão do resumo escrito da aula; não exigir que o aluno assista novamente ao vídeo.
- Após duas tentativas abaixo da nota mínima: sugerir plantão de dúvidas ou aula particular, respeitando os serviços incluídos ou disponíveis para contratação no plano do aluno.
- Progressão: concluir todos os componentes obrigatórios da aula e atingir a nota mínima da avaliação para desbloquear a próxima aula do mesmo curso.
- **DEC-024 — REVISAR:** Marina formulou a resposta provisória de que assistir a 100% do vídeo não é obrigatório quando atividades obrigatórias e avaliação são concluídas. **Decisão pertencente à pauta de Matheus por atribuição explícita de Marina; confirmação dele ainda pendente**. Marina comunicará confirmação ou eventual mudança.
- Material de revisão: disponibilizar resumo escrito da aula para a revisão antes da segunda tentativa.

## 6. Ambiguidades que não devem ser resolvidas por suposição
- Valor/escala da nota mínima.
- Tipos de exercício, correção, feedback e obrigatoriedade; formato e produção dos resumos escritos das aulas.
- Resultado e lógica de recomendação do teste de nivelamento.
- Objetivos e sequências finais das trilhas; mudança de trilha e preservação de progresso.
- Planos, preços, periodicidade, direitos exatos, gateway, cancelamento e inadimplência.
- Oferta, agenda, preço e contratação de plantão de dúvidas/aula particular.

## 7. Orientações de modelagem
- Trate **curso**, **trilha** e **assinatura/direito de acesso** como conceitos distintos.
- Uma trilha deve referenciar cursos existentes e definir ordem/prioridade; não duplique cursos ou aulas para formar trilhas.
- Direitos comerciais devem ser verificados independentemente da recomendação pedagógica da trilha.
- Progresso deve ser preservado no nível do conteúdo e associado à jornada/trilha do aluno, sem duplicar registros quando a trilha mudar.
- Limite de tentativas deve ser validado no backend, não apenas na interface.

## 8. Processo de implementação
Para cada tarefa:
1. Identifique requisitos e critérios de aceitação relacionados.
2. Aponte dúvidas e dependências antes de codificar.
3. Proponha solução proporcional ao MVP.
4. Implemente em etapas pequenas.
5. Execute testes e registre resultados.
6. Resuma alterações, limitações e próximos passos.

## 9. Documentação
Registre decisões relevantes em `docs/04-decision-log.md`. Além do ciclo de vida (proposta, aprovada, rejeitada, substituída etc.), use a tag colorida de situação definida em `docs/10-politica-de-governanca-de-decisoes.md`: **RESOLVIDO (verde)**, **REVISAR (amarelo)** ou **SEM RESPOSTA (vermelho)**. Não classificar a decisão provisória como aprovada.

Quando houver conflito entre código, documentação e instruções informais, não escolha silenciosamente: sinalize a divergência e peça orientação.

## Fonte e atribuição de decisões — regra explícita de Marina
- Marina é a única fonte que comunica quem decide e quem aprova, inclusive decisões tomadas por Matheus e transmitidas por ela.
- Manter a separação Marina / Matheus. Somente atribuir um item a Matheus quando Marina indicar expressamente. Não usar natureza pedagógica, comercial ou estratégica como critério automático.
- Registrar separadamente **decisor**, **aprovador**, **comunicado por (Marina)** e **status**, sem presumir aprovação. **Não perguntar a titularidade antes de cada definição:** faça perguntas de produto normalmente. Se Marina responder sem mencionar validação por Matheus, trate como decisão de Marina, considerando o grau de certeza/aprovação que ela comunicar. Se disser que a decisão é de Matheus e trará a resposta depois, registrar no arquivo dele como **SEM RESPOSTA**. Se ela responder e disser que precisa revisar/confirmar com Matheus, **classificar automaticamente como decisão de Matheus**, com resposta provisória de Marina e status **REVISAR** até ela comunicar a decisão final dele. Se houver ambiguidade real, pedir esclarecimento.
- A atribuição inicial de DEC-024 a Matheus foi uma inferência indevida. **Posteriormente Marina atribuiu explicitamente DEC-024 à fila do Matheus**, com resposta provisória formulada por ela e status **REVISAR**, até que Matheus confirme ou solicite alteração. Preservar ambas as etapas no histórico.
- A lista de Matheus inclui tanto decisões que só ele pode tomar quanto decisões que Marina decidiu provisoriamente e precisa validar com ele. A lista de Marina contém decisões realmente dela, mesmo que possam ser modificadas futuramente.

## Decision traceability — mandatory
- Follow `docs/10-politica-de-governanca-de-decisoes.md` for every product, business, pedagogical, operational, and technical decision.
- Never delete or silently overwrite decision history. A changed decision must be recorded as a new linked entry; preserve the prior entry and mark it superseded only after the replacement is explicitly approved.
- Record alternatives actually considered, their known trade-offs, rejected options and reasons, selected option, approver, approval date, implementation evidence, and validation evidence.
- Never invent an option, rationale, approval, or execution evidence. Mark unknown information as pending/not documented.
- Distinguish proposal, deferred, awaiting approval, approved, rejected, in execution, executed, validated, superseded, and cancelled. Separately display decision-response tags: green RESOLVIDO, yellow REVISAR, red SEM RESPOSTA.
- Do not implement unresolved business or pedagogical rules by assumption. Ask for clarification or leave a clear TODO.
- **Exactly one final owner and exactly one canonical decision record per decision.** Marina-owned decisions exist only in `docs/08-decisoes-marina.md`; Matheus-owned decisions exist only in `docs/09-decisoes-matheus.md`, **including provisional answers supplied by Marina and awaiting Matheus confirmation**. Never mirror or repeat the same decision in both files, even as a transfer-history block. Preserve its complete history in the canonical file and Git.
- `docs/04-decision-log.md` is the sole exception: it indexes **all decisions** with ID, brief summary, link, status and owner. It must not duplicate the full decision record. Other requirements/docs may refer to decision IDs only.
- If an old entry lists multiple possible owners, mark it `a confirmar com Marina` and ask Marina for the definitive single owner; do not silently select one, split the same decision into copies, or imply approval.
- The DEC-024 (MAT-009) must have a single canonical record in `docs/09-decisoes-matheus.md`, with owner Matheus, provisional response by Marina, and yellow REVISAR until she reports Matheus's confirmation.
- The DEC-025 (MAT-013) concerns whether practice exercises are mandatory before assessment. Marina gave the provisional answer **mandatory in principle**; final owner Matheus, status yellow **REVISAR**, and Marina will communicate his later confirmation. Store its canonical record only in `docs/09-decisoes-matheus.md`; `docs/04-decision-log.md` is the index. Do not duplicate it in Marina's file. There must be no DEC-024/MAR-005 mirror in `docs/08-decisoes-marina.md`.
- Keep `docs/04-decision-log.md` as the official index and maintain `docs/08-decisoes-marina.md` and `docs/09-decisoes-matheus.md` as mutually exclusive decision queues.
