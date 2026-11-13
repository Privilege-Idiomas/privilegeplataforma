# PM — Etapas 3 e 4 antecipadas: auditoria, caminho crítico e primeiros lotes prontos para autorização
**Data:** 13/11/2026 · **Responsável:** PM/ChatGPT · **Status:** AUDITORIA E PREPARAÇÃO CONCLUÍDAS; implementação NÃO iniciada; lotes aguardam autorização expressa e validação técnica.
**Mandato atual de Marina:** "Ainda vou conversar com o Matheus, mas nós já podemos adiantar 3 e 4." Interpretação operacional: **adiantar a auditoria/cronograma (passo 3) e preparar os primeiros lotes e gates de autorização (passo 4)**, sem depender de Matheus, do upgrade Ultra ou da reestimativa final do Claude. Não deduzir autorização para executar lote específico, contratar fornecedor, cobrar, mergear, implantar ou preencher preço/percentual pendente.

## 1. Resultado da auditoria PM — fatos vs hipóteses

| Frente | Evidência canônica observada no GitHub | Estado / consequência |
|---|---|---|
| F1 base | PR #14 integrado e bootstrap Next.js/TS/CI | **INTEGRADA**. Não refazer. |
| D1 visual F2 | docs/41 + protótipo 16 telas R2, aceite de Marina na Issue #15 | **ACEITA VISUALMENTE**, não aplicação funcional. UX/UI F3–F8 ainda requer especificação PM por domínio. |
| F2.0 / F2.A | PR #16 e #17 integrados; CI de identidade/RLS com 120 testes | **INTEGRADAS**, sem sessão real, uso de dados reais ou produção. Reutilizar RLS e testes existentes. |
| F2.B | docs/45/46, Issue #7; na main não há AuthProvider real e página entrar é informativa | **BLOQUEADA PARA CÓDIGO**. Primeira candidata é PoC F2.B-0 read-only **não basta**: precisa autorização própria de PoC local para executar testes. |
| F2.C/D | D1 R2 aprovada, telas de identidade não ligadas ao backend; testes de F2 real faltam | **NÃO AUTORIZADAS**, após contrato Auth e aceite de implementação de UI, sem reabrir design. |
| F3 ensino | Catálogo inicial na main é de fixtures; direitos, player, CMS e trilhas persistentes não homologados | **A IMPLEMENTAR**. Modelo de dados/contratos pode ser preparado sem conteúdo final. |
| F4 atividades | Sem prova de avaliações/progresso e certificados operacionais na main | **A IMPLEMENTAR**. Regra de avaliação não eliminatória e questões preaprovadas já definida; não pedir nova decisão básica. |
| F5 comercial | PaymentGateway na main Disabled/Mock; contrato do Plano 1 atualizado por DEC-084 | **A IMPLEMENTAR**. Planejar compra única semestral parcelável; preço, desconto exato, fornecedor e gasto reais pendentes. |
| F6 professor/agenda | VideoConferenceProvider Disabled/Mock; reserva real e anticolisão não demonstradas | **A IMPLEMENTAR**. Plantão **com reserva**, 20 min/10 vagas, créditos separados; particulares 50 min. |
| F7 operação | Matriz de 12 áreas admin, suporte, relatórios, certificados e permissões na baseline funcional; ausência de E2E/entrega comprovada | **A IMPLEMENTAR**, alçadas privilegiadas, MFA, retenção e proteção docente com gates. |
| F8 publicação | Sem integração comercial real e homologação de produção | **BLOQUEADA** por segurança, fornecedores, jurídico, contrato, testes integrais e aprovação específica. |
| DEC-087 (baseline integral) | docs/53 e docs/54 identificados **na branch** `pm/fechamento-blocos-1a7-2026-11-13`; Issues #7–13 já vinculam seus blocos B1–B6 | **APROVADA COMO DIRETRIZ DE ESPECIFICAÇÃO**, mas os arquivos documentais **não estão na main** nesta verificação. Não realizar merge automático nem duplicar/reescrever toda a baseline; PM deve revisar PR e solicitar autorização de merge separada. |
| Capacidade | Marina confirmou 15 h/dia **TODOS** os dias para sprint, docs/50 | 16/11–10/12 = 25 dias × 15 h = **375 h BRUTAS**, não produtividade garantida. **Ultra apenas premissa, assinatura não confirmada**; quota semanal compartilhada. |

**Conclusão:** a auditoria documental e o mapa de dependências podem ser concluídos pela PM agora. **Não é tecnicamente possível homologar a data integral de 10/12** sem estimativas atuais por requisito, prova técnica de Auth, capacidade/contas reais e testes de integração. Não dizer que cronograma está "fechado" até esse retorno.

## 2. Decisões já resolvidas — não reabrir nem estimar versão obsoleta
- Nivelamento com **questões previamente escritas/revisadas/aprovadas**, sem gerar questões em tempo real por IA; opcional, orientativo.
- Exercícios de prática opcionais; avaliação obrigatória **não eliminatória**, tentativas ilimitadas, nota <6 para orientação, conclusão/progresso sem nota mínima; tentativa interrompida expira após 30 dias de seu início.
- Curso Basic/Start bônus para assinantes, Travel e Business por curso específico; P1 somente digital, P2 2 plantões de 20 min/mês, P3 4 plantões + 2 particulares de 50 min/mês.
- **Plantões com reserva**, 20 min, limite 10, créditos e regras 2h; a descrição de plantão livre em versões antigas foi superada.
- **DEC-084 (11/11): P1 acesso por seis meses, compra única parcelável no cartão**; sem transformar parcelas em assinatura recorrente. Recorrência de outros produtos tem escopo comercial próprio.
- **DEC-085:** desconto presencial aprovado apenas na **faixa 20–30%** e retorno ao preço padrão após desvinculação; percentual e gatilho financeiro exatos permanecem pendentes.
- MAT-011: aprovação financeira dos custos apresentada e comunicada por Marina, com evidência da reunião de 11/11. **Não reabrir estudo total de stack**; apenas identificar versão/teto exatos, fornecedor/credencial/capacidade e autorização dos gastos adicionais. Juridico OK informado para documentação analisada; não transformar isso automaticamente em homologação universal de menores, privacidade, logs e fornecedores.
- D1 premium R2 foi aprovada; Claude não redesenha UX.

## 3. Caminho crítico do lançamento e paralelismo sem falsa independência
```text
AUTH PoC B1-0 -> F2.B sessões/segurança -> F2.C telas + F2.D aceite
                                 \
                                  -> direito vinculado a beneficiário ----F3 contratos de curso/CMS -> F3 estudo/trilhas/streaming ---------------+--> E2E real -> F8 release
F4 engine avaliação/progresso (sem conta real) -------------------------/
F5 estados de compra/contrato -> gateway/webhook + entitlements --------/
F6 agenda/créditos/concorrência -> reunião real ------------------------/
F7 admin/permissões/suporte/certificados ------------------------------/
Fornecedores/contratos/jurídico/UX F3–F8 -------------------------------/
```
A codificação em paralelo é válida **somente em lotes explicitamente autorizados**, branch/worktree isolada, contrato de API estável e integrador principal DEC-086. Eventos de pagamento e direitos dependem de autenticação estável para E2E; só modelos puros/fixtures podem avançar sem F2.B real. Nenhuma alteração de RLS de outro agente sem coordenação do integrador.

## 4. Primeiros pacotes de execução: especificação pronta para apreciação, TODOS PENDENTES DE AUTORIZAÇÃO

### Pacote 0 — F2.B-0, PoC de autenticação e controles SEC (Issue #7)
**Objetivo:** resolver empiricamente os bloqueios SEC antes do login real.
**Escopo candidato, só se autorizado:** provas locais sobre (a) server-only A-lite versus SSR padrão, cookies HttpOnly, refresh, logout e CSRF; (b) JWT antigo pós-logout via PostgREST/RLS/API e RPC/Storage se usada; (c) limite de senha UTF-8/GoTrue 72 bytes; (d) OTP 20/30 globais, inclusive rota direta; (e) antiabuso e enumeração incluindo endpoints Auth diretos; (f) TOTP/AAL2 e sessão; (g) auditoria TypeScript vs SQL. Usar exclusivamente Supabase local, dados sintéticos, sem contratação, login de pessoas reais ou deploy.
**Entrega:** testes reprodutíveis, logs sem segredos, relatório comparativo curto e ADR/candidatas finais (sem aprová-las automaticamente), CI sem regredir F2.A. Claude tinha indicado 1–1,5 dia útil para PoC parcial; **não assumir prazo vinculante para pacote ampliado**.
**Proibido:** modificar produção, contratar, decidir SEC contra instruções, abrir a F2.B.1 automaticamente, criar login comercial. **Status: AINDA NÃO AUTORIZADO.**

### Pacote 1 — F3.A, contratos da estrutura de curso/mídia/trilha, sem direitos automáticos (Issue #8)
**Escopo candidato:** entidades/versionamento de curso→módulo→aula→material/vídeo e trilhas reutilizáveis; interfaces de upload/metadata e player desacoplado de Cloudflare, armazenamento local fictício/teste; contratos read-only para aluno e CRUD protegido para editor (sem autoatribuição de privilégios); migrações só aditivas, se aprovadas.
**Testes:** conteúdo de outro curso não entregue por URL/API, mídia não pública por inferência, rascunho não publicado, atualização de curso sem apagar histórico, autor não elevado automaticamente, fixtures Basic/Travel/Business e sem vídeo real. Sem escolher preço/Cloudflare pago, sem release. **Depende de contratos de entitlement e auth que serão integrados depois.**
**Status: PREPARADO, NÃO AUTORIZADO.** UI de F3 sob autoria PM e aceite separado se necessária.

### Pacote 2 — F4.A, regras puras de avaliação e progresso (Issue #9)
**Escopo candidato:** funções determinísticas para tentativas, correção de questões previamente aprovadas, nota <6 não reprova, prática opcional, conclusão por avaliação obrigatória, retentativas ilimitadas e 30 dias desde início; contrato de persistência/versão sem banco real de atividades.
**Testes:** nota zero permite progressão após obrigação cumprida, exercício opcional não bloqueia, aluno sem entitlement não obtém questões de curso alheio, reabertura/correção de gabarito não apaga histórico, limite temporal na retomada. **Não gerar questões com IA** e não inventar critérios pedagógicos. 
**Status: PREPARADO, NÃO AUTORIZADO.** Deixar adaptação final a F3/identidade para integração.

### Pacote 3 — F5.A, estados de contrato, vigência e direitos (Issue #10)
**Escopo candidato:** modelos e testes isolados para curso adquirido vs plano, beneficiário vs pagador, direito Basic bônus, compra P1 única por 6 meses parcelável, downgrade/upgrade previstos sem inventar cálculo monetário, idempotência de evento e expiração segura; gateway permanece Disabled/Mock em testes.
**Testes:** compra parcelada NÃO resulta em assinatura mensal; curso Travel não concede Business, cancelamento não apaga histórico, webhook repetido não duplica direito, elegibilidade de crédito por plano. Desconto presencial como campo configurável **sem aplicar porcentagem exata ou dinheiro real**.
**Status: PREPARADO, NÃO AUTORIZADO.** Gateway real, valores, repasse, estorno, impostos e contratos dependem de Matheus/fornecedor/gates.

### Pacote 4 — F6.A, motor de disponibilidade, reservas e crédito (Issue #11)
**Escopo candidato:** regras puras/DB local isolada para plantão 20 min, 10 reservas; P1 0/P2 2/P3 4; particular 50 min, P3 2; seleção dia/hora → docente livre; anticolisão de slots e débito/restauração conforme cancelamento >=2 h, falta e cancelamento pela escola. Sem Meet/Zoom real ou convites externos.
**Testes adversariais:** 11º inscrito barrado; dois pedidos simultâneos não ocupam a última vaga; não reusar crédito de particular como plantão; professor indisponível não é mostrado; cancelamento escola preserva saldo, duplicidade não debita duas vezes; usuário sem direito bloqueado em API.
**Status: PREPARADO, NÃO AUTORIZADO.** Integração com contratos F5 e Auth F2 antes de produção.

### Pacote 5 — F7.A e F8 desde o início (Issues #12/#13)
**Escopo preparatório PM:** mapear as 12 áreas administrativas para permissões específicas, SLA parametrizável, suporte com protocolo/reabertura, média docente protegida, certificados versão/QR/retificação, relatórios por fonte, ações privilegiadas MFA e políticas de auditoria com gates. Criar a **matriz QA transversal agora**, incluindo operação real, backups, restauração, logs, acessibilidade e autorização antes de produção. **Nenhum privilégio real, política de retenção ou coleta de menor é autorizado.**
**Status: ESPECIFICAÇÃO/QA EM PREPARAÇÃO, NOVO CÓDIGO NÃO AUTORIZADO.**

## 5. Sequência de autorização recomendada para acelerar
1. **PM agora (sem Claude/Ultra):** consolidar este parecer, revisar docs/53–54 da branch antes de qualquer merge, preparar contratos de interfaces, critérios de aceite e checklists por Issue, classificar bloqueios e trazer à Marina uma pergunta objetiva por lote, começando F2.B-0.
2. **Marina, autorização distinta:** se desejar começar mesmo sem Matheus, **autorizar expressamente apenas F2.B-0** com os limites acima ou liberar primeiro um pacote isolado F3.A/F4.A/F5.A/F6.A. Uma autorização metodológica de "adiantar 3 e 4" não identifica o lote/código e não muda os gates.
3. **Claude quando disponível:** validar estimativa completa por REQ e os contratos de F2.B-0 → F2.B.1/B.2/C/D; reestimar os pacotes em paralelo usando DEC-086; não gastar cinco agentes reestudando o escopo. Relatório breve, detalhando dependências reais e limite da quota.
4. **Após PoC:** PM analisa resultado, Marina decide compatibilidades SEC e arquitetura, autoriza B.1/B.2; as outras trilhas podem ser aprovadas como pacotes próprios antes de F2.B completo se os testes e contratos garantirem independência.
5. **Integração diária:** cada PR só conta como entrega depois de testes, CI e revisão. Gate de merge distinto da autorização de implementação. Sem publicação comercial antes de aprovação de negócio, jurídico, fornecedores e segurança.

## 6. Cronograma de planejamento revisto (sem fabricar horas)
| Data-alvo | Trabalho PM que pode avançar já | Habilitador / bloqueio |
|---|---|---|
| **13–15/11** | Auditoria de código/docs, reconcile DEC-087 branch, matriz de pendências e proposta de primeiros pacotes; PM antecipa especificação F3–F8, com D1 R2 como linguagem base | Nenhum upgrade ou Matheus para auditoria; **merge dos docs/53–54 exige autorização própria** |
| **16–17/11** | Primeira revisão técnica do Claude e eventual F2.B-0 **somente se especificamente autorizada**; F3.A/F4.A/F5.A/F6.A em análise para paralelismo | Claude e ambiente disponíveis; decisões SEC; quota |
| **18–22/11** | Meta de implementação paralela em lotes autorizados, integração inicial e testes negativos | Contratos estáveis + decisão da Marina por pacote |
| **23–27/11** | Meta de E2E em sandbox/fictício (compra → ativação → direitos → estudo → agenda), ainda que módulos restantes não tenham pronto | Mock/sandbox é evidência de desenvolvimento, não de produção |
| **28/11–02/12** | Meta **stretch** de funcionalidades completas em staging com testes e fornecedores homologáveis | Reestimativa integral do Claude precisa demonstrar viabilidade |
| **03–06/12** | Segurança/QA/observabilidade, integração real e correções | Sem P0/P1, contratos e fornecedores |
| **07–10/12** | Aceite/go-no-go e meta de lançamento integral 10/12, se todos requisitos operacionais aprovados | Não publicar plataforma incompleta |

**Parecer PM:** avançar 3 e preparar 4 **sem Matheus nem assinatura Ultra** é útil e evita repetição. **O prazo de 10/12 permanece risco crítico**, não foi convertido em compromisso por esta auditoria. Até validação real, datas são marcos de referência; 375 h são janela bruta com limite semanal potencial do Claude. 

## 7. Pendências explicitamente de Matheus, sem reabrir o aprovado
- Tabela final de preço por plano/curso e pacote específico; percentual exato da faixa aprovada de 20–30% para aluno presencial, provas e transição de desconto na vigência semestral.
- Parâmetros financeiros que ainda não foram formalizados (arredondamento proporcional, parcelas e renovação por produto), conforme a ata mais recente.
- Banco real de questões/níveis, conteúdo/gravações e parâmetros pedagógicos, em produção paralela; **não são barreira para codificação/testes com fixtures**.
- Escalas, disponibilidade, remuneração e contrato com docentes/parceiros; itens de white label futuros não entram como obrigação sem decisão.
- Identificação de versão exata do orçamento apresentado/validado e de fornecedores/licenças já cobertos. **Não sugerir nova aprovação do orçamento global como se não existisse; autorizar despesas específicas é ato distinto.**
- Parecer jurídico favorável informado por Marina não equivale a identificar alcance técnico/contratual de menores, cookies, retenção de logs e fornecedores. Tratar como validação delimitada, sem presumir homologação universal.

## 8. Situação de autorização ao fechar este documento
- **APROVADO neste turno:** PM adiantar análise, fechamento preparatório e montagem de ordens candidatas, registro documental GitHub.
- **NÃO inferido:** aprovação inequívoca de F2.B-0, F2.B.1/2, F3.A/F4.A/F5.A/F6.A, mudanças de SEC, contratação de Ultra ou provedores, merges, produção, dados reais ou venda.
- **Próxima decisão de Marina:** selecionar e autorizar especificamente o primeiro lote técnico identificado, com escopo e limites, ou pedir novas informações técnicas sem código.
- Ao iniciar Claude, aplicar DEC-086 e protocolo de handoff docs/54 **após verificação/aceite da versão da branch**; GitHub canônico, Notion só resumo executivo.
