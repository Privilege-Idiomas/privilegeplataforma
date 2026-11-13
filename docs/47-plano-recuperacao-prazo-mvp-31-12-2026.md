# Plano de recuperação do prazo — MVP até 31/12/2026 (PROPOSTA DA PM)
**Privilège Plataforma | 13/11/2026 | Fonte: Marina: “Preciso de um MVP até o final de dezembro” | Natureza: planejamento/priorização PROPOSTA, não autorização de código, compra ou produção.**

> **Meta solicitada por Marina: MVP até 31 de dezembro de 2026.** A palavra MVP ainda precisa ser qualificada: **A) piloto/demonstração controlada** ou **B) produto comercial com pagamentos e alunos reais**. Não registrar como escolhido nenhum dos dois sem decisão expressa de Marina. **Não transformar meta em promessa de entrega nem em autorização F2.B/C/D, F3–F8, compra, deploy ou uso de dados reais.**
>
> **Verdade sobre prazo:** diagnóstico do Claude revisado pela PM em [docs/46](46-f2b-parecer-pm-diagnostico-claude-gates-2026-11-13.md) estima **F2.B.1: 8–11 dias úteis**, **F2.B.2: 4–7**; **F2.C 5–7** e **F2.D 2–3** são estimativas históricas. Só para F2.B/C/D, faixa bruta **19–28 dias úteis**, sem revisão PM, imprevistos, F3/F4, produção de vídeo, gateway, legal e demais fases. **O escopo integral F2–F8 não cabe seguramente nesse prazo com o executor atual.** O calendário até 31/12 contém aproximadamente 6–7 semanas corridas, com feriados/recesso reduzindo dias úteis; não se apoiar em 31/12 como data de segurança e testes.

## 1. Diretriz de aceleração recomendada
1. **Fechar primeiro a DEFINIÇÃO de MVP com Marina**, não reabrir escopo integral já documentado: o MVP é uma seleção de entrega, não exclusão definitiva de requisitos aprovados. Registrar itens adiados para release futuro; manter transparência comercial/contratual.
2. **Caminho vertical mínimo verificável**: uma pessoa adulta autorizada acessa uma conta individual, vê somente um curso que possui, abre uma aula com mídia aprovada, pratica/avalia segundo DEC-074–080 (avaliação obrigatória sem nota eliminatória), retoma e vê progresso básico; outra pessoa/sem direito não consegue acessar dados/curso mesmo por API. Exigir UI D1 R2 acessível e teste E2E. **O curso e mídia específicos, percentual de conteúdo e modelo de entrega dependem de Marina/Matheus e disponibilidade real.**
3. **Priorizar segurança que habilita o fluxo:** antes de acelerar login, fechar as três lacunas do docs/46 — máximo GoTrue 72 bytes vs 128 caracteres; OTP 20/30 min vs valor global; limite antiabuso do BFF com possível bypass em Auth público — e autorizar separadamente **PoC B1-0** pequena (1–1,5 dia útil) para validar A-lite e revogação real. **Não iniciar PoC sem “sim” específico de Marina.**
4. **Paralelizar atividades realmente independentes**, sem conflitos de código nem redefinir executor: PM/ChatGPT coordena, fecha recorte MVP, prepara design/estados/aceite, revisa PRs diariamente; Claude implementa somente lotes autorizados, via PRs pequenos; Marina/Matheus selecionam comercialmente oferta/curso e providenciam conteúdo/roteiros/mídia aprovados; jurídico/infra comercial resolvem dependências externas em paralelo. Notion é só resumo executivo, GitHub contém toda a execução.
5. **Não deixar integração externa bloquear o protótipo funcional interno:** interfaces/fixtures, dados fictícios e permissões explícitas nos testes, *sem simular como real* compra, curso, cobrança, identidade/menor ou inscrição ativa. Para piloto com pessoas reais, produção precisa passar por gate jurídico/privacidade, segurança, consentimentos, backup e autorização de deploy.
6. **Cortes operacionais para versão inicial, se aprovados:** adiar agenda de professores, plantões, particulares, rankings, painéis administrativos completos, automações e relatórios, certificados complexos, área de suporte avançado, migração massiva, apps móveis e IA on-line. **Não vender Plano 3 nem prometer serviços (DEC-083) antes de implementá-los.** Eventual oferta digital deve respeitar decisão comercial de Matheus (DEC-082) e a descrição contratual real, sem reduzir silenciosamente benefícios acordados.
7. **Proteções que NÃO podem ser cortadas:** RLS e isolamento por titular; nenhum menor sem controles JUR-02/11; contas reais somente com autorização e base legal; sessão revogada não pode alcançar dados sensíveis; não armazenar senha própria ou segredo no cliente; direito de curso não surge de login; auditoria e antienumeração proporcionais; segurança de pagamentos e webhooks, se checkout existir; acessibilidade fundamental e regressão F1.

## 2. Duas definições possíveis de MVP — decisão pendente
| | A — MVP piloto controlado (recomendação para prazo) | B — MVP comercial vendável |
|---|---|---|
| Finalidade | Validar jornada digital e segurança ponta a ponta com contas fictícias; opcional piloto com adultos reais **somente após jurídico/infra autorizados** | Adquirir clientes, efetuar cobranças reais e permitir estudo contratado |
| Essencial | F2.B mínima testada, UI D1 essencial, curso/módulos/aulas com mídia de teste licenciada, prática/avaliação/progresso mínimos, direitos testados em fixtures, E2E e QA | Tudo de A **mais** identidade real e verificação de e-mail, contrato/oferta divulgada, domínio e infra, SMTP, gateway cartão/webhooks seguros, direitos reais, conteúdo realmente entregável, suporte e conformidade |
| Pode deixar para versões futuras | Administração completa, várias trilhas, agenda, certificados complexos, múltiplos cursos, dashboard analítico, pagamentos | Grande parte do acima também, **desde que** não sejam benefícios vendidos/contratados; política de cobrança, cancelamento, suporte e transparência não podem ser omitidas |
| Dependências fortes | Validação A-lite/GoTrue, revisão dos parâmetros SEC, autorização de lotes, disponibilidade de conteúdo de demonstração, testes | Todos da opção A, **mais** custos discriminados MAT-011, contrato/comercial de Matheus, jurídico/privacidade, produção, observabilidade, conteúdo de venda e meios de pagamento |
| Prognóstico PM | **Meta agressiva mas plausível**, somente com corte aprovado e decisões rápidas; não há garantia sem reestimativa de F3/F4 | **Alto risco no prazo**, devido a integrações, conteúdo e jurídico não resolvidos; não prometer 31/12 sem plano e recursos extras aprovados |

**Definição de pronto para A (exemplo de aceite):** usuário fictício A entra, só vê curso elegível, assiste aula de mídia de teste, responde avaliação sem nota eliminatória, progresso persiste; B e anônimo são bloqueados por API/RLS; recuperação/logouts/refresh/múltiplas sessões testados; interface responsiva e acessível, CI e E2E verdes, sem dados reais. Isso é **MVP interno funcional**, não lançamento público.

**Definição de pronto para B:** além do A, só vender oferta que tenha conteúdo, duração, benefícios, preço, comunicação, reembolso/cancelamento e prestação contratual confirmados, sem afirmar como disponível algo ainda não entregue. Checkout e direitos devem ser idempotentes e rastreáveis, separar pagador/aluno e impedir vazamento; suporte e monitoramento operacionais; dados reais, termos, jurídico, segurança e infraestrutura validados.

## 3. Cronograma-alvo de recuperação (datas-alvo NÃO APROVADAS)
**Execução condicionada a liberações pontuais de Marina.** Se bloqueio permanecer, deslocar o marco e replanejar honestamente.
| Janela-alvo | Entrega crítica e atividades paralelas | Gate e evidência |
|---|---|---|
| **16–20/11** | Decidir A vs B, fixar 1 curso/fluxo mínimo e funcionalidades de release; resolver SEC-02/09/10 em nível de política; decidir escopo da PoC B1-0. PM deixa requisitos/UX/aceite prontos. Matheus informa oferta/conteúdo realmente disponíveis. | Escopo MVP aprovado por Marina; autorização independente de B1-0 se desejar; sem código antes dela. |
| **23/11–04/12** | Caso PoC passe, implementar **núcleo reduzido de autenticação** seguro, sessões/revogação/antiabuso e recuperação local, por PRs pequenos, além de preparar/implementar UI D1 essencial **somente se F2.C for autorizada**. Paralelo: validação de conteúdos e mídia/contratos. | Credenciais fictícias, RLS, auditoria e E2E funcionam; revisão PM e merge individualmente autorizado. **Não prometer prazo sem reestimativa.** |
| **07–18/12** | Vertical de curso/módulo/aula, conteúdo demonstrável, direitos de acesso, avaliação obrigatória sem nota eliminatória e progresso mínimo (F3/F4 recortadas), com QA em PRs pequenos. Se B, integração comercial deve ser iniciada antes e comprovada; caso contrário, fica fora do corte. | Jornada integrada verificável e segura, não apenas páginas estáticas. |
| **21–23/12** | Testes ponta a ponta, acessibilidade, regressão, isolamento entre alunos, JWT revogado, falhas de e-mail, estabilidade e correções críticas. Avaliação de prontidão de piloto. | Sem bugs críticos; aprovação PM e autorização explícita para teste externo/deploy, se aplicável. |
| **28–30/12** | Reserva de contingência, ajustes e entrega interna/piloto ou homologação final, conforme escopo escolhido. | Aceite formal de Marina. **31/12 é meta externa, não primeiro dia para testar.** |

**Não paralelizar de modo inseguro:** único Claude integrador, evitar mudanças concorrentes nas mesmas rotas de autenticação/RLS/CI; PM pode aprovar a UX e design, mas não disponibilizar a programação de F2.C sem nova autorização. Conteúdo e jurídico são trilhas externas, com responsáveis e evidências claras.

## 4. Como reduzir o caminho crítico de forma legítima
- **Autorizar primeiro a prova técnica B1-0, não toda a F2.B** após resolver requisitos incompatíveis. PoC valida modelo sem comprometer a arquitetura e pode prevenir 8–11 dias de implementação errada.
- **Não implementar login administrativo real no MVP piloto**: TOTP/aal2 deve permanecer demonstrado em testes, com alçadas privilegiadas bloqueadas até JUR-06. Sem burlar política SEC-13 em operações que forem habilitadas.
- **Concentrar F2.C na jornada única de acesso/curso** em vez de todas as 16 telas simultaneamente. A D1 R2 continua referência obrigatória; recorte de release não muda design.
- **F3/F4 como vertical**: somente um curso e poucos módulos/aulas realmente operacionais, mantendo as regras de avaliação/progresso aprovadas; o restante fica no backlog e não deve ser anunciado como disponível.
- **F2.B.2 e F5 comercial** só entram no caminho crítico se a escolha for MVP vendável; caso contrário, testes em fixture não significam compra/ativação real. Nunca simular venda em produção.
- **Revisão PM contínua** em PRs de no máximo um objetivo, CI a cada PR, evitar uma revisão final gigantesca; consolidar mudanças no GitHub, Notion apenas resumo.
- **Evitar licenças e serviços desnecessários**, mas sem afirmar custo zero: Supabase local gratuito, TOTP gratuito; gastos de hospedagem, SMTP, observabilidade, mídia, serviços e mão de obra dependem do orçamento aprovado discriminado de Matheus.

## 5. Perguntas de gate — menor número de decisões, na ordem certa
**Primeira decisão (essencial, não inferir):** “Para 31/12, Marina quer **A) um MVP funcional piloto/controlado**, ou **B) um MVP comercial apto a receber pagamentos e alunos reais**?”

Se A: definir qual curso/segmento será demonstrado; assumir contas fictícias como padrão até jurídico/deploy; recortar backlog e pedir autorização específica para PoC B1-0.

Se B: definir oferta/curso e conteúdo com Matheus, orçamento discriminado, checkout/SMTP/infra/jurídico, estimar extra e apresentar prazo alternativo se não couber. Não tratar custo aprovado genericamente como aprovação de todos os serviços.

**Segunda decisão (depois da primeira):** SEC-02 e SEC-09/10 com opções do [docs/46](46-f2b-parecer-pm-diagnostico-claude-gates-2026-11-13.md), e eventual autorização de B1-0 em branch separada. **SEC-11 deve manter alvo e provar proteção contra bypass externo.**

## 6. Governança e status
- **Meta 31/12/2026:** solicitada por Marina, tratada como objetivo de prazo de planejamento. **Plano e seleção MVP ainda aguardam aprovação dela.**
- **F2.0/F2.A:** concluídas, merges #16/#17 na `main`.
- **F2.B.1, B.2, F2.C/D e F3–F8:** ainda não autorizadas. A autorização anterior foi **apenas read-only** para diagnóstico; relatório Claude revisado em [docs/46](46-f2b-parecer-pm-diagnostico-claude-gates-2026-11-13.md).
- **Matheus custos:** Marina confirmou aprovação; detalhes de itens e limites seguem por conciliar em `docs/09` (MAT-011).
- **Jurídico/menores/retention/admin:** sem alçadas, permanecer negados.
- **Fonte única de execução:** GitHub. Notion apenas relatório executivo derivado. Este documento **não altera decisões anteriores** nem cria permissão tácita de código, custos, dados reais, implantação ou contratação.
