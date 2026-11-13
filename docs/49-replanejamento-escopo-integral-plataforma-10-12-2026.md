# Replanejamento — plataforma Privilège própria, integral e operacional até 10/12/2026 (meta exigida)

**13/11/2026 · Registro de requisito da solicitante · Plano de recuperação para análise, SEM autorização de implementação, gastos, deploy ou uso de dados reais**

> **Correção de precedência funcional (13/11/2026):** o nivelamento usa questões previamente redigidas e aprovadas, não perguntas geradas por IA. Quanto aos plantões, a regra mais recente registrada em docs/08–09 após a reunião é **reserva antecipada pelo aluno, 20 minutos, até 10 vagas, créditos por plano e cancelamento/remarcação conforme antecedência aprovada**; descrições anteriores de entrada livre em docs/02, docs/20 e trechos históricos estão superadas. Ver [docs/50 — cronograma 15h/dia Ultra](50-cronograma-15h-dia-ultra-meta-integral-10-12-2026.md), que prevalece como **proposta de cronograma**, sem substituir o requisito de escopo integral deste documento.

## 1. Correção expressa do objetivo
Marina esclareceu que **não aceita**:
- lançamento provisório em área de membros externa como substituto da plataforma própria;
- escopo comercial reduzido apresentado como plataforma pronta;
- execução manual temporária como substituição de funcionalidades automatizadas;
- telas de funcionalidades futuras inoperantes tratadas como concluídas.

**Objetivo de negócio:** toda a plataforma Privilège própria, conforme escopo funcional e decisões vigentes, operacional para clientes reais em **10/12/2026** — incluindo venda, aprendizagem, administração, atendimento, agendamentos e demais funções previstas. Vídeos e atividades finais serão produzidos em paralelo; a engenharia deve oferecer infraestrutura para cadastrá-los, substituí-los e publicá-los sem depender da conclusão dessa produção. **"Pronta" exige operações reais testadas, não apenas scaffolding nem telas.**

A exigência acima é um **critério de sucesso e meta**, **não** uma declaração de viabilidade comprovada, garantia de prazo, autorização automática de código ou dispensa de segurança, LGPD, condições contratuais e alçadas de Matheus.

Este registro **substitui como direção** a preferência por H1 terceirizado/minicurso em docs/48. Docs/48 permanece como **histórico de hipótese rejeitada**, não como rota executiva vigente. Nenhum recurso aprovado foi descartado.

## 2. Evidências de situação observável na main em 13/11/2026
- F2.0 e F2.A estão integradas, com infraestrutura de testes, esquema inicial de identidade e RLS.
- `src/app/entrar/page.tsx`: ainda declara que login/cadastro não estão disponíveis.
- `src/modules/access/auth-provider.ts`: usa `AnonymousAuthProvider`, sempre sem sessão; o adaptador real F2.B não existe na main.
- `src/app/cursos/page.tsx`: catálogo de exemplo com dados fictícios, sem contratos ou acessos comerciais reais.
- `src/modules/payments/payment-gateway.ts`: `DisabledPaymentGateway` recusa cobranças; há mock de testes, não checkout real.
- `src/modules/scheduling/video-conference-provider.ts`: `DisabledVideoConferenceProvider` recusa reuniões; mock não equivale a videochamada real.
- As migrações existentes observadas: catálogo inicial F1 e identidade/RLS F2.A. Não há evidência na main de funcionalidades completas de F3–F8.
- Diagnóstico Claude F2.B: F2.B.1 8–11 dias úteis; F2.B.2 4–7 dias úteis, sem revisão PM; A-lite ainda exige prova técnica. Parâmetros pendentes: 72 bytes de senha, OTP global, antiabuso, revogação RLS.
- Entre segunda 16/11 e quinta 10/12 são 19 dias de semana **antes de excluir feriados e bloqueios**. Não é racional somar estimativas sequenciais e prometer o escopo integral.

## 3. Frentes de execução paralela a reestimar — sem omitir nenhuma
| Frente | Funcionalidade real esperada | Dependências/testes críticos |
|---|---|---|
| A. Identidade e autorização | login, ativação, recuperação, sessões, permissões e papéis, pagador/responsável e MFA privilegiado | SEC/GoTrue, RLS, SMTP, jurídico/menores |
| B. Aprendizagem | cursos, módulos, aulas, player de vídeo, materiais, exercícios, avaliações, progresso, biblioteca e trilhas | direitos, autorização, provedores de mídia, progressão segundo decisões |
| C. Comércio | oferta por curso/plano, cartão, assinatura, webhooks idempotentes, concessão/revogação de direito, cancelamento e reconciliação | fornecedor contratado, regras comerciais, financeiro/jurídico |
| D. Apoio humano | plantões e agenda automática, lotação, créditos, disponibilidade, remarcação, aulas particulares e videoconferência | professores, disponibilidade, regras de serviço, fornecedor |
| E. Administração | publicar conteúdos e provas, gerenciar usuários/permissões, alunos, professores, suporte, auditoria e indicadores | ações privilegiadas, MFA, juridico, rastreabilidade |
| F. Recursos adicionais | certificados com emissão/verificação, **nivelamento com questões previamente elaboradas e aprovadas (NÃO geração por IA)**, feedback/ranking, relatórios, notificações e demais requisitos aprovados | fornecedores, custo e QA específico |
| G. Produção e qualidade | hospedagem, domínio, e-mails, backups, acessibilidade, observabilidade, segurança, testes E2E e incidentes | contas reais, LGPD, aprovações e integrações reais |

**Não confundir execução paralela com merge paralelo irrestrito:** frentes isoladas em worktrees/branches, contratos de API e migrações coordenados, PRs pequenos e CI contínuo. Integração diária e teste completo de jornadas são obrigatórios.

## 4. Mudanças de gestão recomendadas para ganho de velocidade
1. **Reestimativa por funcionalidade, dependências, capacidade e calendário**, com Claude lendo o estado remoto mais recente. Informar esforço em execução e duração de calendário de modo separado; identificar recursos e permissões realmente faltantes.
2. **Contrato de integração primeiro:** entidades, API, autorização, estados de pagamento, direitos e agenda; evitar reimplementação conflituosa.
3. **Parallelização segura:** agentes/subtarefas independentes em worktrees isoladas se a ferramenta e os recursos permitirem; uma fonte de verdade (GitHub); Notion só espelho executivo.
4. **QA desde a primeira entrega**, sem acumular para a última semana; usar fixtures enquanto fornecedores e meios de pagamento reais não estiverem aprovados e depois E2E real em homologação.
5. **Cadência diária curta de PM:** review de PR assim que CI aprovar e autorização de merge por lote conforme decisão da Marina; responsáveis por decisões externas com prazo explícito.
6. **Caminho crítico e gatilhos de inviabilidade:** autenticação segura, mídia, pagamentos, agendamento automatizado, operação/admin, infraestrutura/jurídico e produção; identificar imediatamente se capacidade única do Claude impede a meta e quantos executores adicionais seriam necessários.
7. **Separar produção dos vídeos/atividades** da disponibilização dos respectivos campos, upload e publicação; não afirmar comercialização de material ainda não entregue.

## 5. Reestimativa solicitada ao executor — preparatória / somente leitura
Claude deve produzir relatório com: inventário atualizado (com evidências e refs), matriz de requisitos completos x estado real, dependências entre frentes, propostas de paralelismo com conflitos, caminho crítico, esforço e prazo em 1 executor / 2 executores / múltiplos agentes isolados, gastos/fornecedores externos e gates, cronograma diário de 16/11 a 10/12, primeira data de teste integrado, riscos P0, e parecer **viável / viável condicionado / não defensável**. Não executar código, sincronizar repositório, criar branches, contratar serviços ou fazer deploy apenas por esta solicitação.

## 6. Condição de compromisso
**Não assegurar publicamente o prazo de 10/12 sem reestimativa integral, capacidade confirmada, aprovações de fornecedor e evidência da jornada completa testada.** Se o cronograma integral exceder o prazo, mostrar o desvio e quais recursos adicionais fechariam — ou não — a lacuna. Não impor corte de escopo nem alternativa externa contrários à decisão de Marina. A próxima autorização será específica e separada.
