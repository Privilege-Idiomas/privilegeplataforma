# Notion — Relatório executivo de andamento do Privilège

**Data de esclarecimento:** 2026-10-31  
**Referência:** DEC-026 — definição de Marina (RESOLVIDO)  
**Implantação:** não concluída; depende da conexão do workspace do Notion e das permissões necessárias.

## 1. Finalidade e fontes de verdade

**GitHub é a ferramenta PRINCIPAL e a fonte oficial do projeto.** Nele ficam código, issues e tarefas técnicas detalhadas, testes, requisitos, documentos, escopo, decisões canônicas, arquitetura, histórico e evidências.

**Notion é somente o relatório executivo compartilhado com Matheus.** Não é espelho do GitHub, não é backlog técnico e não precisa conter todas as tarefas, decisões, issues ou documentos. Substitui o ClickUp apenas na função de dar visibilidade sobre andamento, entregas relevantes e cronograma.

**Regra de inclusão:** publicar no Notion somente informação que permita a Matheus acompanhar entregas, cronograma, riscos com impacto material e decisões que requeiram atuação dele. Se um detalhe não ajuda a responder «está seguindo o planejado? o que mudou? quando entrega? precisa de mim?», manter somente no GitHub.

## 2. Conteúdo mínimo do painel executivo

Uma página **«Privilège | Acompanhamento do Projeto»** contendo:

1. **Status geral:** Em dia / Atenção / Atrasado / A confirmar, com justificativa objetiva. «Em dia» só quando houver cronograma de referência validado e evidências consistentes. Sem baseline confirmado, usar «A confirmar».
2. **Cronograma de alto nível:** fases, marcos, datas planejadas e previstas (somente se definidas), situação e eventuais desvios. Não atribuir datas fictícias.
3. **Entregas principais:** marco, resultado esperado, responsável (Marina ou Claude Code), status, previsão e última atualização.
4. **O que avançou desde a última atualização:** resumo em linguagem de negócio, sem jargão técnico desnecessário.
5. **Próximos passos:** 2–5 entregas ou ações relevantes, com responsáveis e dependências, quando conhecidos.
6. **Riscos e atenção de Matheus:** somente bloqueios ou decisões com impacto real no cronograma/escopo e atribuídos expressamente a Matheus por Marina. Apontar ID e link do registro GitHub, sem duplicar ficha de decisão.
7. **Última atualização:** data e fonte do progresso. Uma cadência de revisão semanal é uma sugestão operacional, ainda não um compromisso ou automação configurada.

Não criar painéis analíticos extensos, tabelas técnicas, monitoramento de commits, documentação de API, lista de bugs, detalhes de infraestrutura ou transcrição de decisões.

## 3. Base enxuta: Entregas e Marcos

Uma base simples para **entregas de alto nível**, não tarefas técnicas granulares.

| Campo | Uso |
|---|---|
| Entrega | Resultado em linguagem acessível |
| Fase | Etapa do roadmap |
| Responsável | Exatamente um: Marina ou Claude Code |
| Situação | Não iniciado / Em andamento / Em validação / Bloqueado / Concluído |
| Prazo planejado | Somente quando validado |
| Previsão atual | Data informada ou estimada explicitamente; nunca inventada |
| Impedimento / atenção | O que afeta o marco ou exige ação do Matheus |
| Última atualização | Data da informação de progresso |
| Referência GitHub | Link opcional para evidências e detalhes, sem copiá-los |

Evitar porcentagens arbitrárias de conclusão. Caso seja mostrado progresso, usar entregas verificadas e critério de cálculo explícito, não contagem bruta de commits/tarefas.

## 4. Responsabilidades e atualizações

- **ChatGPT/PM:** organiza o cronograma macro, cria e atribui **apenas entregas relevantes** no Notion, sintetiza progresso, confronta realizado com planejado, explica desvios e apresenta pontos que demandam atenção. Gestão detalhada e registros canônicos ficam no GitHub.
- **Marina:** executa e informa o estado das entregas que lhe cabem, valida aceites e comunica as decisões dela ou do Matheus, conforme as regras documentadas.
- **Claude Code:** executor técnico; mantém atividades e evidências detalhadas no GitHub. Para **entregas macro atribuídas a ele no Notion**, atualiza somente status, previsão quando fundamentada e eventual bloqueio ou conclusão. Não deve lançar cada issue, commit, teste ou bug no Notion.
- **Matheus:** consulta o painel de maneira simples para ter segurança de que o projeto está avançando e atua somente nas decisões expressamente atribuídas a ele por Marina.

**Fluxo:** GitHub (trabalho detalhado) → atualização sucinta do responsável no marco do Notion → PM consolida relatório executivo → Matheus acompanha. Nem toda mudança no GitHub demanda atualização no Notion; apenas mudança relevante para entrega, prazo, status, risco ou expectativa.

## 5. Regras de status e aprovação

- **Em andamento:** há atividade no marco, sem pressupor entrega concluída.
- **Em validação:** executor terminou sua parte e aguarda aceite pertinente.
- **Concluído:** entrega validada contra critério de aceite; não significa apenas código enviado ao GitHub.
- **Bloqueado:** dependência real impede avanço; reportar impacto/ação necessária de forma clara.
- Não confundir a situação da **entrega** com as tags de **decisão** RESOLVIDO / REVISAR / SEM RESPOSTA.
- Decisões continuam com um responsável final e um único arquivo canônico `docs/08-decisoes-marina.md` ou `docs/09-decisoes-matheus.md`; `docs/04-decision-log.md` é índice.
- DEC-024 e DEC-025 continuam **REVISAR** sob responsabilidade final de Matheus, com respostas provisórias comunicadas por Marina; só mencioná-las no Notion quando forem relevantes ao andamento ou requererem sua ação.

## 6. O que publicar / o que não publicar

| Pode entrar no relatório do Matheus | Fica no GitHub |
|---|---|
| «Área do aluno em desenvolvimento» | Implementação de componentes e rotas |
| «Primeira versão das aulas concluída, aguardando revisão» | PRs, alterações de banco, testes de unidade |
| «Etapa de pagamentos depende de decisão sobre fornecedor» | Comparações técnicas, spikes e logs |
| «Previsão da entrega mudou porque o requisito X ainda não foi validado» | Issues individuais, bugs e débitos técnicos |
| «Próxima entrega: piloto com usuários» | Instruções de deploy e runbooks |

Estes exemplos são ilustrativos; não significam conclusão real dessas etapas.

## 7. Implantação pendente

1. Conectar Notion ao ChatGPT e autorizar a página de acompanhamento.
2. Verificar se há página/base existente, evitando duplicações.
3. Criar somente o painel e a base enxuta de entregas/marcos.
4. Compartilhar o painel com Matheus, sem transferir a ele responsabilidades não atribuídas por Marina.
5. Configurar a integração do Claude Code com acesso limitado às entregas atribuídas, para que atualize status macro.
6. Popular com marcos reais do roadmap e datas somente quando houver baseline válido.
7. Validar que o relatório responde com clareza: **o projeto está seguindo o cronograma?** e **o que precisa da atenção de Matheus?**

Nenhuma dessas etapas de integração ou publicação no Notion deve ser declarada concluída antes da execução comprovada.
