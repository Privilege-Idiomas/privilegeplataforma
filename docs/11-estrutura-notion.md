# Notion — Projeção do relatório executivo oficial (Privilège)

**Última atualização:** 2026-10-31  
**Decisão:** DEC-026 (Marina — RESOLVIDO quanto à escolha)  
**Implantação no Notion:** pendente de acesso/configuração. Não considerar integração realizada.

## 1. Regra absoluta: GitHub contém TUDO

**O GitHub é a fonte ÚNICA, principal e integral de verdade do projeto Privilège.** Deve conter todos os documentos, decisões, tarefas (técnicas e gerenciais), responsáveis, prioridades, alterações de status, cronograma, estimativas, marcos, riscos, pendências, implementação, testes, evidências e histórico — inclusive **qualquer informação que venha a ser mostrada no Notion**.

**O Notion é exclusivamente uma apresentação resumida do que já existe no GitHub para dar transparência a Matheus.** Não substitui arquivos, issues, PRs, registros ou processos do GitHub. Não é a base de tarefas, decisões ou marcos original; não armazena dado novo, status exclusivo, previsão inédita ou aprovação que falte no GitHub.

O relatório executivo canônico (inclusive sua data e as fontes) está no GitHub: [`docs/12-relatorio-executivo.md`](12-relatorio-executivo.md). O Notion deverá reproduzir apenas os destaques relevantes desse relatório e links de apoio. Se for necessária informação adicional, **registrá-la primeiro no GitHub**, depois refletir no Notion.

**Em caso de divergência, prevalece o GitHub:** corrigir o Notion com base nas fontes oficiais, sem sobrescrever o GitHub a partir de estado avulso no Notion. Atualizar Notion nunca encerra tarefa, modifica decisão ou altera cronograma no GitHub por si só.

## 2. Objetivo do relatório executivo

Permitir que Matheus responda rapidamente:
- O projeto está avançando? Qual a situação geral documentada?
- Está dentro do cronograma **efetivamente aprovado**? Houve mudanças de prazo?
- Quais marcos/entregas relevantes foram concluídos, estão em andamento ou estão bloqueados?
- Quais são os próximos passos?
- Existe alguma questão expressamente atribuída por Marina a Matheus que necessite da atuação dele?

Não incluir no Notion lista completa de issues, detalhes de código, arquitetura, APIs, testes individuais, logs, commits, PRs ou fichas integrais de decisões. Essas informações **continuam integralmente no GitHub** e podem ser acessadas por links pontuais.

## 3. Estrutura mínima no Notion

Uma página enxuta **«Privilège | Relatório de Andamento»**, derivada do relatório canônico no GitHub, com:

1. **Data da informação e referência oficial do GitHub.** Separar data do dado e data da última sincronização/apresentação.
2. **Indicador geral:** Em dia / Atenção / Atrasado / A confirmar. Sem baseline de cronograma validado ou evidência suficiente, usar **A confirmar**; nunca presumir «Em dia».
3. **Cronograma em alto nível:** fases/marcos, datas previstas/aprovadas e desvios somente quando constarem das fontes do GitHub.
4. **Principais entregas:** título em linguagem de negócio, responsável já registrado no GitHub, situação e resultados relevantes.
5. **Avanços desde o relatório anterior**, citando registros verificáveis.
6. **Próximos passos e obstáculos** com impacto na execução.
7. **Pontos que precisam de Matheus**, quando Marina houver atribuído expressamente a ele.

Uma pequena lista ou tabela de marcos pode ajudar a leitura, mas **cada marco, status, prazo e responsável já deve existir no GitHub**. Não haverá banco de tarefas paralelo; os itens visíveis no Notion não são uma nova fila de trabalho.

## 4. Responsabilidades e fluxo de atualização

- **ChatGPT/PM:** mantém no GitHub o planejamento, decomposição, atribuições, progresso e relatório executivo canônico; resume e publica no Notion somente informação executiva derivada dos registros existentes; verifica consistência e data dos dados.
- **Marina:** decide/valida segundo a governança, informa andamento e mudanças, e assegura que as evidências e aprovações oficiais sejam registradas no GitHub.
- **Claude Code:** executa as tarefas atribuídas; atualiza **primeiro no GitHub** os status das tarefas, riscos, impedimentos, evidências e alterações relevantes; se algum marco de sua responsabilidade constar no Notion e a integração estiver disponível, espelha **somente o status executivo que já está registrado no GitHub**. Não cria status, previsão nem histórico exclusivos no Notion.
- **Matheus:** consulta o relatório de alto nível e responde pelas decisões que Marina atribuir explicitamente a ele, sem necessidade de acompanhar detalhes técnicos.

**Fluxo obrigatório:** execução → registro completo no GitHub → atualização do relatório executivo **no GitHub** → projeção resumida no Notion → consulta de Matheus.

Se Claude editar diretamente um campo de marco no Notion, a informação correspondente **deve já existir e ser verificável no GitHub**. Sem conexão/permissão, Claude apenas informa a limitação; não afirma que houve sincronização. Não há automação de sincronização ativa por padrão.

## 5. Regras para indicadores e decisões

- **Em andamento:** trabalho comprovado ou sinalizado na fonte oficial, sem presumir que está terminado.
- **Em validação:** execução entregue para aceite, com evidência GitHub.
- **Concluído:** critérios de aceite atingidos e validação registrada no GitHub; ter PR ou commit não é prova suficiente.
- **Bloqueado:** impedimento e consequência registrados no GitHub.
- **Cronograma:** prazo preliminar de 30 dias é referência de planejamento, não baseline validada; não usar para concluir «Em dia» ou «Atrasado» sem aprovação.
- **Decisões:** manter um único decisor por item e uma única ficha Markdown canônica por responsável (`docs/08-decisoes-marina.md` ou `docs/09-decisoes-matheus.md`). `docs/04-decision-log.md` é índice geral. No Notion, mencionar ID e efeito no cronograma apenas quando material.
- **DEC-024 e DEC-025:** seguem **REVISAR**, respostas provisórias de Marina com confirmação final pendente de Matheus. Não afirmar aprovação dele.

## 6. Exemplo de seleção da informação (sem afirmar execução real)

| Resumo que poderia aparecer no Notion, se comprovado no GitHub | Detalhamento preservado no GitHub |
|---|---|
| «Área do aluno em desenvolvimento» | Tarefas, issues, especificações, código e testes |
| «Aulas concluídas, aguardando homologação» | Critérios, evidências, PRs, testes e aceite |
| «Pagamento depende de definição de provedor» | Documentos de análise, alternativa, decisão e riscos |
| «Previsão alterada por dependência de conteúdo» | Cronograma completo, justificativa, dependências e responsáveis |

Todos os exemplos são ilustrativos, não representam status real do projeto.

## 7. Implantação pendente

1. Conectar Notion ao ChatGPT com permissões adequadas.
2. Confirmar se já há página do projeto; não duplicar.
3. Configurar somente o **relatório executivo**, sem migrar/retirar conteúdo ou tarefas do GitHub.
4. Garantir que as informações do relatório estejam primeiro registradas no GitHub, incluindo `docs/12-relatorio-executivo.md`.
5. Compartilhar a página com Matheus.
6. Caso Claude precise espelhar status de marcos no Notion, configurar sua integração limitada, sem permitir criação de informações exclusivas.
7. Fazer uma conferência de consistência: cada frase, prazo, status e marco do Notion deve ser rastreável a um registro oficial do GitHub.

Uma frequência de atualização semanal pode ser proposta, mas ainda não é um compromisso nem uma automação configurada.

**Estado atual:** diretriz registrada no GitHub; relatório publicado no Notion **não confirmado**.
