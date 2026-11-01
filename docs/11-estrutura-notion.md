# Notion complementar — Estrutura operacional e transparência para Matheus

**Versão:** 1.0 — 2026-10-31  
**Decisão:** DEC-026 (Marina, RESOLVIDO; escolha da ferramenta, não implantação)  
**Status da implantação:** aguardando conexão do workspace Notion e autorização para criar páginas/bases.

## 1. Princípio de governança: GitHub é o principal

**O GitHub continua sendo a fonte de verdade principal da plataforma Privilège:** código, decisões, requisitos, escopo, arquitetura, planejamento documentado, convenções e evidências de execução. As decisões têm um único responsável e uma única ficha Markdown canônica por responsável: `docs/08-decisoes-marina.md` ou `docs/09-decisoes-matheus.md`. `docs/04-decision-log.md` é o índice geral, não uma duplicação de ficha. Não migrar essas fichas para o Notion.

**O Notion substitui apenas o ClickUp como quadro complementar de gestão de tarefas e transparência operacional**. Nele o Matheus visualiza a execução, pendências, bloqueios e próximas entregas; os links levam à fonte técnica no GitHub. O Notion pode apresentar indicadores resumidos de decisões, sem replicar fichas ou modificar autoridade/aprovações.

## 2. Atribuições

| Agente/pessoa | Responsabilidade operacional |
|---|---|
| ChatGPT (PM) | Decompor escopo em tarefas, cadastrar no Notion, atribuir exclusivamente a Marina ou Claude Code, definir prioridade e critérios de aceite, revisar riscos e dependências, cobrar atualizações e apresentar status executivo |
| Marina | Decidir/validar produto conforme sua competência; comunicar decisões do Matheus quando for o caso; executar e atualizar tarefas atribuídas a ela; validar entregas e critérios de aceite |
| Claude Code (executor técnico) | Executar tarefas atribuídas a Claude, versionar código/documentação técnica no GitHub, atualizar pessoalmente no Notion o status de suas tarefas, incluir evidências, testes, PR/commit e impedimentos |
| Matheus | Consultar o dashboard para transparência e decidir apenas os itens que Marina atribuir expressamente a ele; não receber atribuição automática por natureza do assunto |

O PM não altera silenciosamente o status operacional informado pelo Claude nem transforma uma entrega técnica não validada em “Concluído”. Pode apontar desatualização e solicitar correção.

## 3. Estrutura mínima do Notion

### Página principal: PRIVILÈGE — Acompanhamento do Projeto

Inclui:
- **Resumo executivo:** total de tarefas por status, próximos marcos e tarefas vencidas (sem inventar datas/percentuais).
- **Em andamento:** tarefas ativas e próximos passos, por responsável.
- **Bloqueios e decisões necessárias:** tarefas bloqueadas ligadas a IDs de decisão e link para o GitHub, sem copiar as decisões completas.
- **Entregas recentes:** links de PRs, commits e evidências de aceite.
- **Visões filtradas:** “Marina”, “Claude Code”, “Bloqueadas”, “Em revisão/testes”, “Concluídas” e “Para Matheus”.
- **Documentação oficial:** atalhos para README, escopo, requisitos, roadmap, governança e decisão log no GitHub privado.

### Banco de dados único: Tarefas do Projeto

| Propriedade | Tipo sugerido | Obrigatoriedade/regra |
|---|---|---|
| ID da tarefa | Texto/ID | Único; exemplo PRI-001 |
| Título | Title | Verbo + entrega objetiva |
| Responsável | Select ou Person | Exatamente um: Marina ou Claude Code |
| Status | Status | Backlog, A fazer, Em andamento, Bloqueado, Em revisão/Testes, Concluído |
| Prioridade | Select | Alta, Média, Baixa, A definir |
| Fase | Select | Alinhamento; Produto/Arquitetura; Fundação; Aprendizagem; Comercial/Administração; Qualidade/Lançamento |
| Descrição / resultado | Texto | O que deve ser produzido |
| Critérios de aceite | Texto | Verificáveis; definir antes de iniciar implementação |
| Dependências / impedimentos | Texto / Relation | Incluir decisões pendentes por ID, sem concluir escopo por suposição |
| Prazo | Date | Vazio enquanto não houver data aprovada/estimada |
| Origem no GitHub | URL | Link para requirement, documento ou issue |
| Evidência no GitHub | URL | Link de PR/commit, documentação ou testes |
| Atualização do executor | Texto/data | Mudanças de status, entrega e bloqueios |
| Validado por Marina | Checkbox / data | Marcar apenas após aceite comunicado |
| Última atualização | Last edited time | Controle operacional |

**Notion é o único painel de status das tarefas**, mas as decisões, os requisitos e o código permanecem canônicos no GitHub. Não criar fichas integrais de decisões no Notion. O status de uma decisão (RESOLVIDO, REVISAR, SEM RESPOSTA) é distinto do status de uma tarefa.

## 4. Protocolo de atualização do Claude Code

1. O ChatGPT/PM cadastra tarefa no Notion com ID, responsável Claude Code, descrição, critério de aceite, dependências e link GitHub.
2. Antes de executar, Claude confere documentação e decisões canônicas no GitHub. Se a implementação depender de decisão REVISAR ou SEM RESPOSTA, sinaliza **Bloqueado** no Notion e relata a dependência, sem presumir aprovação.
3. Ao iniciar trabalho autorizado, Claude altera sua tarefa para **Em andamento**.
4. Durante o trabalho, Claude anota marcos, bloqueios e evidências relevantes no Notion; código e documentação técnica são alterados no GitHub.
5. Ao concluir a implementação, Claude adiciona link de PR/commit, testes e observações e altera para **Em revisão/Testes**.
6. A tarefa passa para **Concluído** quando os critérios de aceite forem atendidos e a validação pertinente estiver registrada; não presumir aceite só porque existe commit ou PR.
7. Se não houver permissão de escrita no Notion, Claude não afirma ter atualizado: comunica ao PM/Marina a impossibilidade e fornece status/evidências para regularização. O PM não marca status como se viesse do Claude.
8. Nunca publicar credenciais, tokens, dados de alunos ou informações privadas em tarefas.

**Pré-requisito técnico:** o Claude Code precisará de uma integração Notion com permissão de leitura/escrita (por MCP ou API autorizada), separadamente da conexão do ChatGPT. Habilitar acesso somente ao workspace/páginas pertinentes ao Privilege. Conexão de um agente não implica autorização de escrita do outro.

## 5. Tarefas iniciais de implantação — previstas, NÃO cadastradas no Notion

Estas são sugestões operacionais derivadas dos documentos; **não representam tarefas já publicadas no Notion**, prazos aprovados ou decisões de produto novas. O PM deverá conferir o workspace antes de criá-las, evitar duplicações por ID e verificar prioridade, capacidade e dependências.

| ID | Tarefa | Responsável | Status inicial sugerido | Prioridade | Critério de aceite |
|---|---|---|---|---|---|
| PRI-001 | Criar página e base “Tarefas do Projeto” no Notion | Marina | A fazer | Alta | Página e banco criados com campos mínimos; convite/visibilidade para Matheus |
| PRI-002 | Configurar acesso do Claude Code ao quadro de tarefas | Claude Code | Bloqueado (depende de permissão de Marina) | Alta | Claude demonstra atualização de uma tarefa de teste com autorização |
| PRI-003 | Revisar os dados e visualizações do dashboard do Matheus | Marina | A fazer | Alta | Matheus consegue enxergar responsáveis, execução, bloqueios e links GitHub |
| PRI-004 | Preparar quebra de entregas do MVP em tarefas técnicas rastreáveis | Claude Code | A fazer | Alta | Backlog técnico proposto com estimativas/dependências e referências a REQ sem implementar regras pendentes |
| PRI-005 | Mapear tarefas impedidas por decisões pendentes, sem implementar hipóteses | Marina | A fazer | Alta | Relacionar tarefas aos IDs de decisão e sinalizar aprovações que faltam |
| PRI-006 | Definir rito de validação de tarefas técnicas e registro de evidências | Marina | A fazer | Média | Critérios de aceite, fluxo Em revisão/Testes → Concluído e responsáveis comunicados |

Observações:
- A tarefa PRI-002 não deve ser executada sem credenciais/permissões fornecidas por meio seguro; nunca inserir segredos neste repositório.
- O PM executa a **gestão** e a decomposição; a atribuição operacional das tarefas permanece somente Marina ou Claude Code, conforme orientação expressa.
- A lista acima é de **implantação e preparação**; o backlog completo de produto deve derivar dos requisitos oficiais e respeitar decisões pendentes.
- PRI-001 e PRI-003 podem envolver execução do PM via conector Notion uma vez autorizado, mas o responsável formal registrado continua sendo Marina (proprietária da configuração).

## 6. Passo a passo de implantação

1. Marina conecta o workspace do Notion à integração do ChatGPT autorizando leitura/escrita nas páginas escolhidas.
2. PM verifica páginas/bancos já existentes, cria apenas o que faltar e evita duplicar IDs.
3. PM cadastra e atribui as tarefas de implantação e backlog validado a Marina ou Claude Code.
4. Marina compartilha o dashboard com Matheus e define permissão apropriada.
5. Marina autoriza a integração Notion para Claude Code; o executor confirma que pode atualizar uma tarefa, sem acessar outras áreas.
6. PM valida um ciclo completo: criação da tarefa → início pelo Claude → evidência de PR → revisão por Marina → conclusão.
7. PM faz revisão periódica da execução, dependências e decisões com links para o GitHub.

## 7. Decisões e pendências relevantes para transparência

- **DEC-024 (MAT-009):** resposta provisória de Marina: assistir a 100% do vídeo não seria obrigatório se os demais componentes obrigatórios e a avaliação forem concluídos; **REVISAR**, confirmação de Matheus pendente. Ficha única em `docs/09-decisoes-matheus.md`.
- **DEC-025 (MAT-013):** resposta provisória de Marina: exercícios de prática obrigatórios a princípio antes da avaliação; **REVISAR**, confirmação de Matheus pendente. Ficha única em `docs/09-decisoes-matheus.md`.
- Titularidade de alguns registros legados ainda precisa de conferência com Marina. Não atribuir por inferência; não criar segunda ficha.

Atenção: a decisão DEC-026 de usar Notion é **RESOLVIDO**; a **implantação técnica não está concluída**. Conectar o Notion e o Claude Code é condição para iniciar as atualizações no quadro real.
