> **PRECEDÊNCIA DEC-086/087 — 13/11/2026:** 15h/dia, uso diário e plano Ultra são **hipóteses do cenário intensivo 10/12**, não compromisso de capacidade, compra ou autorização de novos agentes. Padrão permanente: um Claude integrador principal e auxiliares só com justificativa por demanda; ver [docs/52](52-diretriz-permanente-eficiencia-claude-execucao.md), [docs/53](53-baseline-operacional-integral-decisao-087-2026-11-13.md), [docs/54](54-protocolo-handoff-aceite-fases-dec-087.md). Nenhum cálculo de cronograma prova viabilidade de produto integral em produção.

# Privilège — cronograma intensivo 15 horas/dia, Claude Ultra, meta integral 10/12/2026
**Elaborado em 13/11/2026 pela PM. PROPOSTA CONDICIONAL PARA APROVAÇÃO. Não autoriza código, compra, contratação, deploy ou uso de dados reais.**

> **CONFIRMAÇÃO DE MARINA — 13/11/2026:** o regime de planejamento é **15 horas por dia, TODOS OS DIAS**, inclusive sábados, domingos e feriados, no intervalo 16/11–10/12/2026. Portanto usar **25 dias × 15 horas = 375 horas brutas de janela operacional** como cenário principal, e 285 horas em dias de semana apenas como comparação histórica. A confirmação **não comprova disponibilidade efetiva ininterrupta do Claude Ultra, não equivale a 375 horas líquidas nem autoriza assinatura, código, contratação, deploy ou mudança de escopo**. O cronograma permanece condicional à reestimativa F2–F8 e aos gates de engenharia, jurídico, comercial e segurança.

## Objetivo e premissas
- Marina exige a plataforma própria Privilège integral, funcional e automatizada até 10/12/2026, sem lançar somente cursos, sem área de membros terceirizada substituta, sem operar plantões/particulares manualmente como equivalente ao software.
- A produção final de vídeo e atividades é paralela e não faz parte do esforço de engenharia. O aplicativo precisa permitir cadastrar/publicar/substituir vídeos, questões, atividades e materiais, testados com conteúdo fictício. A disponibilidade técnica não equivale a autorização para vender produtos cujo conteúdo ainda não exista.
- Assumir **início da engenharia apenas se autorizada em 16/11**, com 15 h por dia **inclusive finais de semana**. Há **25 dias corridos, 19 dias de segunda a sexta** entre 16/11 e 10/12, ambos inclusos: **375 horas de janela operacional** no regime de sete dias, ou **285 horas** em dias de semana (antes de descontar feriados). Não são horas de desenvolvimento líquido ou produtividade garantida.
- Ultra hipotético: **US$200/mês na web, mais impostos eventuais**; 10x a capacidade semanal do Pro; **sem limite de cinco horas somente para contas verificadas**, mas com limite semanal compartilhado por Claude e Claude Code e limites adicionais. Agentes simultâneos **consomem a mesma quota**; podem acelerar tempo de calendário mas esgotar o uso mais rapidamente. **Não há assinatura contratada nem gasto autorizado por este planejamento**. Ver https://support.claude.com/pt/articles/17728952-o-que-e-o-plano-ultra e https://support.claude.com/pt/articles/11145838-use-claude-code-com-seus-planos-pro-max-ou-ultra.
- Até a próxima aprovação específica, Claude segue sem autorização para implementar F2.B–F8, migrar, instalar/contratar serviços, sincronizar local sem ordem, usar dados reais, efetuar merges/deploys ou publicar.

## Estado técnico confirmado
- Fundação F1, F2.0 e F2.A concluídas/integradas (Next.js/TS, banco inicial, testes, identidade e RLS), sem produção real.
- Na main, a página de login ainda é informativa e AuthProvider retorna sessão anônima; catálogo tem fixtures; gateways de pagamento e de vídeo conferência são Disabled/Mock; F3–F8 não estão completas.
- D1 Revisão 2 de UX/UI (16 telas estáticas) já foi aprovada, mas não constitui implementação.
- Claude estimou **F2.B.1: 8–11 dias úteis e F2.B.2: 4–7 dias úteis** sem revisão PM; estimativas F2.C/D antigas, F3–F8 integrais **não reestimadas**. O caminho crítico e o tamanho real total ainda não foram provados.
- F2.B precisa testar arquitetura A-lite, RLS e JWT revogado, senha 72 bytes vs SEC-02, OTP global vs SEC-09/10 e antiabuso frente aos endpoints públicos do Auth. Ver docs/46.

## Regras de negócio prevalentes, para evitar estimativa do sistema errado
- **Nivelamento:** questões previamente redigidas e aprovadas, não perguntas geradas por IA; opcional, recomenda nível/curso sem bloquear acesso e critérios configuráveis.
- **Plantões:** regras mais recentes confirmadas por Marina e Matheus em docs/08–09 substituem descrições históricas de “entrada livre”: coletivo **com reservas**, sessão de **20 minutos**, até **10 pessoas**, créditos por plano e cancelamento/remarcação com antecedência mínima **2 horas**; professor escalado.
- **Particulares:** agendar primeiro data e horário, escolher professor livre, sem dupla reserva; **50 minutos**, créditos e regras de cancelamento/ausência. Plano 1 somente digital; 2 com plantões; 3 com plantões e duas particulares mensais, conforme decisões vigentes. Travel/Business vendidos separadamente, Basic bônus para assinantes.
- **Aprendizagem:** exercícios de prática opcionais; avaliações obrigatórias mas **não eliminatórias**, tentativas ilimitadas, progresso/retomada, trilhas configuráveis. Direitos de acesso não surgem do resultado do nivelamento.
- **Administração, certificados, privacidade:** 12 áreas admin, suporte, relatórios, certificados com QR e verificação e proteção de dados, avaliações docentes restritas. Operação de menores e alçadas administrativas depende de validação jurídica, não liberar sem isso.
- O inventário integral deve seguir docs/03 item por item; não presumir que esses exemplos esgotem todos os recursos.

## Método de aceleração proposto
1. **Contratos compartilhados primeiro (16–17/11):** esquema/tipos de usuário, direitos, curso, progresso, eventos de pagamento, créditos/agenda, mídia e certificado; ADR de auth; reestimativa F2–F8 e interfaces de testes. A PM prepara UX e aceite F3–F8 em paralelo sem reabrir D1.
2. **Worktrees/agentes isolados em até quatro trilhas técnicas** quando autorizados: A — autenticação e segurança; B — conteúdo, educação e administração; C — pagamentos/assinatura e direitos; D — plantões, particulares, professores e videoconferência. QA/integrador único transversal. O número real de agentes depende de quota e conflito; **uma conta Ultra não equivale a quatro executores independentes**.
3. **Ciclo de 15 h/dia como três blocos operacionais de até 5 horas**: especificação/arquitetura e núcleo crítico; implementação modular e testes; integração, correções, segurança, CI e PRs. Pausas e supervisão são necessárias; não assumir tarefas sem limites rodando sem observação.
4. **Integração diária**, PRs pequenos e testados; PM revisa e Marina aprova merges conforme governança; GitHub é canônico, Notion apenas painel executivo.
5. **Fornecedores em paralelo e de forma autorizada:** hospedagem, e-mail transacional, vídeo, cartão/assinaturas, sala de reunião, domínio, jurídico/LGPD/comercial e preço. Mock só é teste interno, **não aceita como conclusão de produção**. Matheus valida competência comercial/pedagógica.

## Calendário-alvo muito agressivo, não homologado
| Datas (contando a partir de 16/11) | Frentes em paralelo — entrega desejada | Gate verificável |
|---|---|---|
| **16–17/11** (D1–D2) | Claude apresenta inventário e reestimativa integral; PM revisa dependências; resolver decisões SEC, contratos entre módulos e autorizar de modo independente PoC A-lite, se Marina consentir. | Plano executável por REQ com proprietários, orçamento de tokens/custos, roadmap de PRs e gates. |
| **18–22/11** (D3–D7) | Auth real e RLS/auditoria; CRUD/migrações de cursos e aulas, CMS de vídeo/questões; contratos da camada de pagamentos em sandbox; engine de agenda e créditos, reservas, anticolisão; base administrativa. | CI de cada trilha, integração em staging com contas e mídias fictícias; não declarar comercial pronto. |
| **23–27/11** (D8–D12) | Ativação/recuperação segura, UI perfis e papéis; player, prática, avaliação, progresso, trilhas e nivelamento com questões predefinidas; checkout/webhooks/direitos; plantões/particulares/videochamadas; certificados/QR, professores e suporte. | **27/11:** primeiro E2E vertical: compra sandbox → ativação → direito Basic + Travel/Business → conteúdo/exercícios/progresso → reserva de plantão e particular conforme elegibilidade. Se não houver E2E, reestimar e sinalizar risco vermelho. |
| **28/11–02/12** (D13–D17) | Integração de todas as 12 áreas admin, relatórios, auditoria, histórico, certificados, ranking restrito, suporte, cancelamento/estorno, proteção de menores condicionada a jurídico, mídia/atividades editáveis, integrações externas de homologação. | **02/12 — meta de feature complete**: funções reais e testáveis em staging, sem placeholders ou serviços apenas simulados como entregas. Se não cumprir, **10/12 integral deixa de ser defensável sem nova capacidade comprovada**. |
| **03–06/12** (D18–D21) | Freeze de funcionalidades, correção de integração, QA E2E de pagamentos e agenda concorrente, autenticação/RLS/segurança, acessibilidade, carga, backup e falhas de provedores. | **06/12:** checklist REQ completo, teste E2E e ausência de falhas P0/P1; provedores reais homologados, contratos e permissões aplicáveis resolvidos. |
| **07–09/12** (D22–D24) | Homologação final, retestes, monitoramento e recuperação, documentos operacionais e aprovação comercial/jurídica/infra/segurança. | **09/12:** go/no-go da PM e autorização expressa de Marina para custos, dados reais, publicação, merges e deploy conforme gates próprios. |
| **10/12** (D25) | **Meta de lançamento público**, somente se todas as funcionalidades automatizadas estiverem aceitas e operação real liberada. | Não trocar critério de “pronto” por mock, telas, login fictício ou disponibilidade parcial. |

## Cenários de capacidade e confiança
| Regime | Parecer da PM |
|---|---|
| Uma conta Ultra, um integrador, 15 h somente em dias úteis: **285h brutas** | **Não defensável** como compromisso integral em 10/12, dado F2.B e ausência de F3–F8. |
| Uma conta Ultra, 15 h todos os dias: **375h brutas**, agentes isolados consumindo quota compartilhada | **Plano stretch de altíssimo risco**, sem evidência para compromisso; reduz interrupção de 5h se verificado, mas não garante volume de tokens, integração, QA ou alçadas. |
| Capacidade verdadeiramente independente adicional e fornecedores/jurídico/comercial aprovados cedo | **Potencialmente mais viável**, mas exige medição/reestimativa completa e orçamentos separados; múltiplas janelas na mesma conta não equivalem a independência. |

## Checkpoints e gatilhos de falha
- **Até 17/11:** confirmação de conta Ultra verificada (somente após contratação aprovada), ritmo de consumo e reestimativa Claude por requisito com dependências, cenários 1 integrador/2 executores/equipe de agentes, risco e dias por trilha.
- **22/11:** núcleo de auth e dados integráveis, CI verde, provedores/contratos/creds na trilha de aprovações.
- **27/11:** primeiro E2E compra/curso/agenda; sem isso a meta perde sustentação.
- **02/12:** todas funcionalidades operáveis em staging (feature complete); se faltar, levantar desvio imediatamente, sem inventar garantia nem cortar requisitos.
- **06/12:** segurança, dados, acessibilidade e provedores reais homologados; se P0/P1, não seguir.
- **09/12:** go/no-go formal; **10/12 é meta, não ordem para lançar sistema incompleto**.
- Métricas diárias: requisitos com testes aceitos (número e IDs), PRs com CI verde, P0/P1, dias no caminho crítico, horas/limites da conta Claude, bloqueios de aprovação/fornecedor, retrabalho. Decisões externas devem ter retorno-alvo 24–48 horas.
- Qualquer indicação de impossibilidade deve trazer quantidade de esforço/capacidade adicional estimada, alternativas técnicas e impacto de prazo, preservando integralmente o escopo até nova decisão expressa.

## Próximo gate
**Marina aprova ou altera a proposta de operação 15h/dia todos os dias e autoriza, em ato separado, a reestimativa read-only do Claude.** Nem o objetivo, nem este documento autorizam a compra de Ultra, crédito extra, implementação F2.B–F8, alteração de parâmetros, fornecedor, dados reais ou deploy. A PM revisará o relatório antes de solicitar liberação de engenharia.
