# DEC-086 — Diretriz PRINCIPAL e PERMANENTE de eficiência de execução do Claude Code — Privilège Plataforma
**Decisão expressa de Marina: 13/11/2026 — APROVADA para TODO O CICLO DE VIDA do projeto, com efeito imediato como método de trabalho.**
**Status:** obrigatória em análise, desenvolvimento, testes, revisão, manutenção, correções e futuras fases, inclusive após 10/12/2026. **Não autoriza implementar fases, contratar plano Ultra, despesa, alteração de arquitetura, merge, deploy ou dados reais.**
**Fonte de autoridade:** Marina confirmou a proposta da PM de adotar o novo protocolo como padrão: "Perfeito! Registre isso no github como diretriz principal que deve ser cumprida durante todo o projeto".

## 1. Objetivo
Maximizar **funcionalidades corretas e comprovadamente testadas por unidade de tempo e de quota do Claude**, sem repetir pesquisa/documentação já resolvida, sem multiplicar agentes ociosos, sem reduzir requisitos, segurança, QA, arquitetura e direitos comerciais, e sem consumir capacidade em relatórios especulativos. O resultado é **entrega verificável e integrada**, não horas conectadas, tokens gastos, quantidade de agentes, linhas de código ou PRs por si sós.

**Regra de precedência:** DEC-086 e este protocolo são a referência canônica para **como organizar o trabalho do Claude**, prevalecendo sobre sugestões anteriores de executar múltiplos pesquisadores por padrão ou cronogramas que pressupõem agentes fixos. As decisões de produto, escopo, segurança, titularidade/autorizações, jurídico e custos permanecem integralmente válidas e têm precedência quando envolverem seus respectivos domínios. Diretrizes de datas e regimes intensivos são de sprint, não justificam trabalho não aprovado.

## 2. Padrão operacional OBRIGATÓRIO
### 2.1 Um Claude integrador principal
- Uma única sessão/instância integradora controla escopo da tarefa autorizada, estado e contratos de integração, dependências, decisões canônicas, matriz de testes, PR e entrega. Não permitir vários agentes alterarem a mesma interface/tabela/migration sem dono definido.
- **Agentes auxiliares são por demanda**, e só após determinar a necessidade, o objetivo verificável, o custo esperado, a independência de arquivos e o critério de encerramento. Não manter cinco pesquisadores simultâneos como padrão; o uso de cinco pesquisadores na F2.B era **análise excepcional de segurança**, não template universal de execução.
- Padrão para tarefa simples ou convencional: **um agente, implementação e testes**. Para tarefa intermediária: integrador + **até um auxiliar** delimitado, se houver benefício real. Para trabalho técnico independente e risco relevante: integrador + até **dois auxiliares** especializados quando justificável. Mais agentes só mediante justificativa explícita na Issue/lote, ganho mensurável e capacidade compartilhada disponível; não usar "máximo 2" como proibição universal de investigação crítica.
- Revisor especializado (segurança/QA) **somente onde o risco exige** — como autenticação, sessões, RLS/PII, pagamentos, autorização, agendamento concorrente, privilégios, menores ou produção — sem cortar profundidade obrigatória para economizar tokens.
- **Agentes/subagentes compartilham a quota da mesma assinatura**; paralelismo pode reduzir tempo de parede, mas aumentar consumo total e esgotamento. Nunca pressupor quota independente nem trabalho contínuo por 15h só porque existe plano Ultra.

### 2.2 Economia de contexto sem perder integridade
- Antes de cada lote: ler o **mínimo necessário** de `CLAUDE.md`, `AGENTS.md`, decisão/Issue do lote, documentos canônicos pertinentes e arquivos realmente afetados. Consultar GitHub como fonte de verdade; preservar a precedência das decisões recentes. Não reanalisar o repositório inteiro em todo turno.
- Reutilizar ADR, especificação e decisões já aprovadas. Só fazer pesquisa externa ou lançar agentes de pesquisa quando houver **lacuna real, incompatibilidade, versão incerta, risco material ou hipótese a comprovar**, com pergunta objetiva e conclusão testável.
- Evitar duplicar pesquisas, debater indefinidamente alternativas aprovadas, gerar documentação redundante ou criar código para funcionalidades não autorizadas. Registrar apenas decisões novas, bloqueios, evidências de teste e handoff útil.
- Se contexto ficar longo, produzir resumo técnico breve com: escopo e autorização, estado do Git, arquivos alterados, testes executados/resultados, pendências e próximo passo; iniciar nova sessão usando esse resumo em vez de repetir toda a investigação.

### 2.3 Executar em lotes verticais pequenos, somente quando autorizados
- Para cada autorização de Marina: definir **objetivo de usuário + critério de aceite + arquivos/contratos e dependências + testes negativos + limite do lote**. Priorizar jornadas ponta a ponta e marcos verificáveis.
- **Ciclo padrão:** verificar autorização e versão correta → implementar apenas escopo aprovado → escrever/executar testes pertinentes, inclusive RLS/segurança quando aplicável → integrar e executar CI → revisar e corrigir → entregar PR pequeno e evidência → aguardar revisão da PM e autorização de merge quando exigida → próximo lote.
- Usar mocks/fixtures **somente enquanto o estágio for de desenvolvimento/teste**. Não marcar pagamento, videochamada, e-mail transacional, conteúdo/atividades nem acesso do aluno como prontos em produção se ainda são mocks.
- Reutilizar componentes e contratos, evitar mudança de arquitetura sem ADR e aprovação. Falhas e bloqueios devem ser apresentados cedo com opções técnicas, não compensados com “atalhos” invisíveis.

### 2.4 Paralelismo seguro e integração contínua
- Agentes somente em domínios **realmente desacoplados**, com worktrees/branches isoladas **apenas após autorização de código**, dono das migrações e interfaces estáveis. Um integrador consolida e resolve conflitos.
- Testes desde o primeiro lote, não em sprint final. Evitar PRs gigantes e sequências longas sem CI. Testes adversariais continuam obrigatórios em Auth, proteção de dados, direito de acesso, cobrança e conflitos de agenda.
- Trabalho em frentes paralelas **não implica autorização para criar branches, escrever código ou merge por iniciativa de agentes**. Cada tarefa herda o limite de autorização do responsável; agentes não concedem privilégios uns aos outros.

## 3. Divisão de responsabilidades sem duplicação
| Responsável | Responsabilidade |
|---|---|
| **Marina — direção** | metas e escopo; liberações expressas de fases/lotes, gasto/fornecedor, arquitetura, merges e produção; decisões fora da alçada de Matheus |
| **Matheus — comercial/pedagógico** | decidir e validar itens formalmente atribuídos, incluindo condições comerciais/pedagógicas e direitos oferecidos; não inferir aprovações |
| **ChatGPT — PM e UX/UI** | planejar, priorizar, especificar critérios e telas, revisar entregas e riscos, atualizar **todo** o histórico/execução no GitHub; Notion é **somente** extrato executivo |
| **Claude Code — executor técnico** | implementar somente lotes autorizados, executar testes e CI, integrar, propor PR e reportar bloqueios/medidas; NÃO redesenhar UX aprovada |
| **Subagentes especializados** | investigação curta ou implementação de subtarefa independente explicitamente definida, isolada e verificável, sob controle do integrador; nenhum papel de autoridade autônoma |

## 4. Rotina de 15 horas: SOMENTE hipótese de capacidade do sprint atual
- Para o sprint intensivo até 10/12/2026, Marina confirmou planejamento de **15 horas por dia TODOS OS DIAS**, inclusive finais de semana, correspondendo a janela bruta de **375 horas entre 16/11 e 10/12**, sem garantia de horas produtivas nem de quota contínua do Claude. **Este regime NÃO é obrigação permanente de 15h/dia no projeto inteiro.**
- Distribuição **adaptativa**, não horários rígidos: trabalho técnico de maior dependência/risco → tarefas isoladas quando ganhos justificarem → CI/integração/correções/handoff. O exemplo anterior de três blocos de cinco horas é **ilustrativo**, e não uma imposição diária.
- Plano **Ultra** é premissa de capacidade em estudo; upgrade e créditos adicionais dependem de aprovação/contratação. Medir limites de sessão/semanais e custos; ajustar quantidade de agentes com dados reais.
- O fato de existir uma meta 10/12 não autoriza ocultar pendências, enfraquecer segurança, substituir serviço real por mock ou marcar escopo integral como entregue sem provas.

## 5. Métricas de eficiência (registrar no GitHub por lote/sprint, sem burocracia excessiva)
1. **Entrega funcional aceita:** requisito(s)/critério(s) demonstrados por teste e evidência; marcar partial/proposta/pronto distintamente.
2. **Fluxos E2E que funcionam:** compra → ativação → direito → estudo/progresso → serviços, quando cada etapa estiver autorizada e integrada.
3. **Retrabalho e defeitos:** bugs P0/P1/P2, regressões, reabertura, tempo gasto para corrigir.
4. **Capacidade:** janela de uso disponível, bloqueios por limite de quota, consumo compartilhado por subagentes e oportunidades de simplificação.
5. **Bloqueios externos/decisórios:** o que depende de Marina/Matheus/jurídico/fornecedor, desde quando e consequência no caminho crítico.
6. **Qualidade:** CI, RLS/segurança, testes negativos, cobertura pertinente, observabilidade e desempenho onde aplicável.

**Cadência:** resumo breve ao terminar cada lote autorizado; painel de riscos/impedimentos atualizado diariamente durante sprint intensivo; revisão de eficiência ao menos uma vez por semana ou antes quando consumo/retrabalho aumentar. Evitar relatórios longos sem ação associada. **Não declarar velocidade multiplicada por 5 ou 10 apenas porque a assinatura tem maior quota de uso.**

## 6. Checklist para aceitar o trabalho do Claude
- [ ] Tarefa está dentro de uma autorização vigente, expressa e delimitada?
- [ ] Contexto e decisões canônicas consultados, sem repetir investigação já resolvida?
- [ ] A escolha de agentes foi justificada pela independência e pelo risco? Evitou duplicar pesquisa?
- [ ] O integrador mantém dono de arquivos, migrations, contratos e integração?
- [ ] A entrega é **código/funcionalidade reais** e não apenas relatório, mock ou tela estática anunciados como feitos?
- [ ] Testes adequados, casos negativos e CI executados/relatados com evidências?
- [ ] Foram mantidos escopo integral e direitos, autorização, privacidade, segurança e UX/UI aprovada?
- [ ] PR e mudanças prontos para revisão e aprovação conforme governança; sem merge/deploy automático?
- [ ] O GitHub tem todos os registros e o Notion apenas extrato executivo?
- [ ] Há bloqueios, consumo de cota e próximo passo claros, sem prometer prazo não comprovado?

## 7. Controles de exceção e precedência
- Em diagnóstico read-only, **o resultado autorizado pode ser um relatório**, e não implementação; não transformar a regra de “entregar código” em instrução para violar uma autorização somente leitura.
- Em sistema crítico, elevar rigor de pesquisa e de revisão é **obrigatório quando necessário**, mesmo que aumente o consumo de tokens; justificar a excepcionalidade, manter escopo objetivo e encerrar ao resolver a hipótese.
- A quantidade inicial sugerida de agentes é **teto de partida**, não limite global da plataforma. Revisar com evidências reais.
- Se houver conflito entre rapidez e segurança, **segurança, direitos, aprovação e legalidade vencem**. Se houver conflito entre cronograma e escopo integral, **não cortar silenciosamente**, reportar desvio e solicitar decisão.
- Esta diretriz é **permanente para o método de execução**, até revisão por Marina registrada em nova decisão com histórico preservado. Não substitui DEC-029/035, políticas SEC, alçadas financeiras, DEC-084/085, contratos e legislação.

**Aplicação e referências:** inserir aviso obrigatório em `CLAUDE.md` e `AGENTS.md`; registrar DEC-086 em `docs/08-decisoes-marina.md` e no índice `docs/04-decision-log.md`; apontar na Issue #18 (sprint 10/12). **Este arquivo é a especificação canônica do método**.
