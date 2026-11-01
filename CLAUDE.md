# Orientações para Claude Code — Plataforma Privilège

## 1. Contexto do projeto
A Plataforma Privilège é uma plataforma digital de ensino de idiomas. O produto prevê cursos online, aulas em vídeo, exercícios, avaliações, trilhas de aprendizagem, assinaturas recorrentes e operação administrativa.

Este repositório é a fonte de verdade para código e documentação técnica. Consulte o README e os documentos em `docs/` antes de implementar mudanças, especialmente requisitos, escopo, trilhas e Decision Log.

## 2. Papéis e autoridade
- **Matheus — patrocinador:** autoridade para aprovar decisões de negócio, orçamento, escopo e prioridades estratégicas.
- **Marina — responsável pela condução do projeto e produto:** organiza requisitos, prioriza o trabalho, acompanha a execução e valida entregas.
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
As definições abaixo foram informadas pela responsável pelo projeto e ainda aguardam aprovação formal do patrocinador quando indicado no Decision Log:
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
Registre decisões relevantes em `docs/04-decision-log.md`. Use status explícitos: **Proposta**, **Pendente de aprovação**, **Aprovada**, **Rejeitada** ou **Substituída**.

Quando houver conflito entre código, documentação e instruções informais, não escolha silenciosamente: sinalize a divergência e peça orientação.

## Fonte e atribuição de decisões — regra explícita de Marina
- Marina é a única fonte que comunica quem decide e quem aprova, inclusive decisões tomadas por Matheus e transmitidas por ela.
- Manter a separação Marina / Matheus. Somente atribuir um item a Matheus quando Marina indicar expressamente. Não usar natureza pedagógica, comercial ou estratégica como critério automático.
- Registrar separadamente **decisor**, **aprovador**, **comunicado por (Marina)** e **status**; não presumir aprovação. Se Marina não informar quem decide ou se já foi aprovado, perguntar e registrar **a confirmar com Marina**.
- Na DEC-024, a atribuição automática de validação pedagógica a Matheus foi um erro histórico corrigido na documentação; não repeti-lo.

## Decision traceability — mandatory
- Follow `docs/10-politica-de-governanca-de-decisoes.md` for every product, business, pedagogical, operational, and technical decision.
- Never delete or silently overwrite decision history. A changed decision must be recorded as a new linked entry; preserve the prior entry and mark it superseded only after the replacement is explicitly approved.
- Record alternatives actually considered, their known trade-offs, rejected options and reasons, selected option, approver, approval date, implementation evidence, and validation evidence.
- Never invent an option, rationale, approval, or execution evidence. Mark unknown information as pending/not documented.
- Distinguish proposal, deferred, awaiting approval, approved, rejected, in execution, executed, validated, superseded, and cancelled.
- Do not implement unresolved business or pedagogical rules by assumption. Ask for clarification or leave a clear TODO.
- Keep `docs/04-decision-log.md` as the official index and maintain `docs/08-decisoes-marina.md` and `docs/09-decisoes-matheus.md` as live decision queues.
