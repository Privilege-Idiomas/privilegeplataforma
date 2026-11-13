> **CORREÇÃO DE PRECEDÊNCIA 13/11/2026 — DEC-087:** o documento é um retrato de planejamento anterior. A diretriz vigente de nivelamento é **banco de questões e gabaritos elaborados/revisados/aprovados previamente, corrigidos pela plataforma SEM IA**; ajuda de IA offline **não é exigência** e a hipótese anterior de que “IA elabora” é **superada**. Para política atual, ver [docs/53](53-baseline-operacional-integral-decisao-087-2026-11-13.md) e [docs/54](54-protocolo-handoff-aceite-fases-dec-087.md). DEC-024, avaliação não eliminatória, plantões com reserva e P1/P2/P3=0/2/4 já estão definidos; F1/F2.0/F2.A integradas e F2.B–F8 não autorizadas. Meta de produto próprio integral 10/12 não tem viabilidade demonstrada; Notion é apenas extrato do GitHub.

# Privilège — Matriz de fechamento do planejamento e preparação do cronograma
**Data:** 2026-11-08 · **Status:** plano de trabalho, **NÃO** homologação G1, seleção final de stack G2, preço G3, versão G4 ou liberação G5.  
**Fontes:** `docs/06-roadmap.md`, `docs/25-p08-checklist-aceitacao-funcional.md`, `docs/26-pacote-reuniao-matheus-decisao.md`, `docs/27-proposta-stack-e-custos-2026-11-07.md`, `docs/29-modelo-financeiro-simplificado-ponto-equilibrio-2026-11-07.md`, `docs/30-custos-pendentes-e-fases-de-execucao-2026-11-07.md`, `docs/31-diagnostico-gates-cronograma-incremental-2026-11-07.md`, DEC-074–081 e matriz JUR-01–11.

## 1. Questões já resolvidas que NÃO devem voltar à pauta
- Prática é opcional; **avaliação da aula é obrigatória, porém não eliminatória**, com nota 6 apenas orientativa e tentativas ilimitadas; progressão depende da realização da avaliação, não de aprovação por nota.
- Plantões: **reserva obrigatória**, sessões de **20 minutos e até 10 participantes**, cancelamento com pelo menos 2h devolve crédito; menos de 2h/no-show consome; plantão lotado oferece outros horários sem fila; créditos mensais não acumulam.
- Teste de nivelamento **opcional**, recomenda curso/trilha sem bloquear; **IA elabora o banco de questões/gabarito previamente**, corrigido automaticamente por regras da plataforma **sem IA por aluno**; faixas e conteúdo reais dependem de pedagógico.
- Trilhas reutilizam cursos sem duplicar conteúdo; alteração de trilha mantém progresso e não amplia acesso não contratado; versões de conteúdo devem preservar conclusões/certificados.
- Tentativa interrompida tem janela de 30 dias **contados desde o início**; expiração após aviso, nova tentativa permitida.
- **DEC-024 RESOLVIDA na reunião 03/11:** Matheus aprovou remover a obrigatoriedade de reprodução de 100% do vídeo (00:18:39 e 00:43:36). Não solicitar nova validação.
- GitHub Free e Claude disponível; Notion somente extrato executivo. Não criar planilhas sem pedido expresso.

## 2. Matriz objetiva das pendências por responsabilidade
| ID | Responsável pela próxima ação | Pendente REAL | Ação objetiva | Bloqueia |
|---|---|---|---|---|
| PM-01 | PM, sem depender de Matheus | Critérios antigos divergentes: plantão sem reserva, nota eliminatória, duas tentativas, vídeo, progresso e histórico | Harmonizar trechos operativos de `02`, `03`, `06`, `14`, `25`, `26` e índice de decisões com DEC-074–081, identificando seções históricas sem apagar histórico | G1 e critérios testáveis |
| PM-02 | PM | Pack de validação antigo `docs/26` pede respostas pedagógicas já recebidas | Produzir pauta **curta e atual**, distinguindo Matheus, jurídico, fornecedor e PM, sem reabrir diretrizes decididas | Reunião e G1 |
| PM-03 | PM | Critérios verificáveis de planos/acesso, fluxo de expiração, transição entre versões, notificação, auditoria, reserva, tickets | Escrever testes e fluxos recomendados; não presumir rateio, autorização jurídica ou decisão comercial | G1 |
| PM-04 | PM | Esforço de desenvolvimento sem dimensionamento | Desdobrar jornadas aprovadas em lotes candidatos, pontos de integração, dependências e critérios de pronto; pedir estimativas a Claude **sem implementar** depois da definição de stack | G4 cronograma |
| COM-01 | **Marina: DEC-082 confirmada**; homologação comercial restante conforme alçada | **RESOLVIDO NA DEFINIÇÃO FUNCIONAL:** Plano 1 definitivamente somente aulas gravadas/digital, **zero plantões e zero particulares**; objetivo: maior escalabilidade. Baseline com 1 plantão é histórico superado. | Atualizar preço, contrato e comunicação da oferta antes de publicar; não solicitar novamente escolha sobre plantões no Plano 1 | Preço/contrato em G1/G3/G4, **não a definição do benefício** |
| COM-02 | **Marina: DEC-083 confirmada**; termos comerciais restantes conforme alçada | **RESOLVIDO NA DEFINIÇÃO FUNCIONAL:** Plano 3 dá **4 plantões de 20min + 2 particulares de 50min por aluno/mês**. As opções de 1–4 particulares eram propostas históricas. | Ajustar testes de saldo/acesso e textos contratuais; não reabrir quantidade mensal, não criar avulsas | Termos/preços em G1/G3/G4, **não o benefício** |
| COM-03 | Matheus/autoridade comercial, com PM | **CURSOS JÁ ALINHADOS NA REUNIÃO 03/11:** Travel e Business separados por curso/trilha; Basic como bônus a assinantes. **PENDENTES:** preços, termos comerciais, eventual oferta de combos, contratos 1/3/6/12 meses, fórmula pro-rata, renovação, cancelamento, multa/pareceres | Não perguntar novamente sobre acesso por curso vs catálogo integral; fechar somente preços/contratos e regras comprovadamente abertas | G1/G3/G4; parte jurídica |
| PED-01 | **Matheus: decisão da reunião 03/11** | **RESOLVIDO:** vídeo integral NÃO obrigatório; avaliação obrigatória, não eliminatória (confirmada depois) | Harmonizar textos históricos; não reabrir questionamento | Documento G1 apenas |
| PED-02 | Equipe pedagógica com autoridade confirmada | Banco e faixas reais do nivelamento; objetivos, ordem e critérios de trilha | Validar conteúdos, faixas e recomendação, sem criar IA no fluxo do aluno | Conteúdo e G1 |
| OPS-01 | PM propõe; gestão valida | Aviso de expiração (canal e antecedência), progresso de aluno entre versões, aprovação de alteração de gabarito, estados do suporte, permissões administrativas | Consolidar proposta operacional padrão e critérios de aceite; distinguir campos configuráveis de política de negócio | G1 |
| VND-01 | PM + fornecedor; gestão escolhe | Gateway de cartão: recorrência e compromissos 1/3/6/12, opt-in/out, rateio, cancelamento, webhooks, retentativas, taxas | Prova de conceito contratual e técnica entre Asaas / Mercado Pago (ou outro com evidência); obter proposta de tarifas | G2/G3/G5 parcial |
| VND-02 | PM + fornecedor; gestão escolhe | Videoconferência Meet/Workspace: contas docentes, duração, integrações, menores, custos | Comparar capacidades e licenças; selecionar solução após teste | G2/G3/G5 parcial |
| VND-03 | PM com produção pedagógica | IA para gerar **vídeos** de 118 aulas e eventuais ferramentas de narração/edição; direitos de imagem/voz e custos por minuto | Piloto **de uma aula** com roteiro original intacto; testar qualidade e preços, só depois aprovar template | Produção de conteúdo e G3 |
| VND-04 | PM | Domínio, e-mail, notificações, excedentes de infra, segurança e backups | Verificar se custo já coberto; cotar apenas serviços efetivamente necessários | G2/G3 |
| JUR-01 a 11 | Assessoria jurídica | LGPD, menores/representantes, retenção, recuperação, moderação, avaliação docente, contratos/cancelamentos, certidões | Solicitar parecer sobre matriz `docs/16-matriz-validacao-juridica-privacidade.md`; não declarar parecer emitido | G1/G5 conforme funcionalidade |
| GATE-04 | Gestão | Prioridade da primeira versão, requisitos futuros e teto de investimento | Depois de G1/G2/G3, decidir escopo da primeira release, orçamento e ordem dos lotes | G4/G5 |
| GATE-05 | Gestão + PM | Auditoria DEC-029/032 e liberação de Claude | Conferir checklist, dados, fornecedores e segurança; autorizar **primeiro lote** expressamente | início da codificação |

## 3. Pacote de reunião com Matheus — apenas decisões que exigem autoridade comercial/pedagógica
1. **Plano 1 — decisão já tomada (DEC-082):** exclusivamente aulas gravadas/digital, sem plantões nem particulares. **Não voltar a perguntar qual é o benefício**; solicitar apenas confirmação de preço/termos da oferta quando cabível.
2. **Plano 3 — decisão já tomada (DEC-083):** 4 plantões de 20min e **2 particulares de 50min por mês**. **Não voltar a perguntar os créditos incluídos**; solicitar apenas preços/termos da oferta e providências jurídicas cabíveis.
3. **Produtos/contratos:** **não reabrir cursos:** Travel/Business separados, Basic bônus a assinantes (reunião de 03/11). Confirmar preços, eventuais combos novos, vigências 1/3/6/12 meses, cobrança, rateio, renovação e cancelamento sob revisão jurídica. **A reunião já fixou antecedência de 30 dias e multa de referência de 20% em quebra antecipada; não voltar a perguntar esses números, apenas validar legalidade e aplicação concreta.**
4. **DEC-024 — JÁ DECIDIDA NA REUNIÃO:** vídeo integral não obrigatório (Matheus). Não levar de volta para validação; apenas atualizar os documentos operacionais.
5. **Pedagogia:** confirmar responsável por banco/faixas de nivelamento e objetivos concretos das trilhas, sem reabrir regra opcional/não bloqueante.
6. **Investimento:** somente após orçamento de fornecedores e estimativa de execução, confirmar limite e prioridade da versão inicial.

**Nota:** `docs/26-pacote-reuniao-matheus-decisao.md` permanece como histórico, mas inclui perguntas obsoletas sobre reprovação, múltiplas tentativas e plantão sem reserva. **Não utilizar isoladamente** na reunião; usar este pacote atualizado junto à matriz canônica.

## 4. Cronograma de planejamento — sequência que permite previsibilidade
| Marco | Entregável | Duração | Dependência |
|---|---|---|---|
| C0 | Reconciliação documental + aceite em texto dos pontos sob gestão | A dimensionar pela PM com base no volume de mudanças; sem data assumida | decisões já registradas |
| C1 | Pauta final de Matheus e respostas comerciais/pedagógicas | Dependente de disponibilidade do decisor | C0 (ou em paralelo para questões claras) |
| C2 | Análise de stack + provas de fornecedor + orçamento fixo/variável/implantação | Dependente de propostas e testes | resposta comercial necessária para contratos |
| C3 | Decomposição da primeira release em GitHub Issues, estimativa técnica e riscos, cronograma com datas | Estimar por lote após definição de stack | G1–G3 |
| C4 | Autorização G5, execução iterativa do Claude | Datas após estimativas e gates | C3 |
**Não são semanas predeterminadas.** O cronograma definitivo é a soma de estimativas dos lotes, tempo de revisão/retrabalho e dependências externas, com datas só após G4.

## 5. Critério de operação com Claude
Uma única fase/lote liberado por vez; Claude relata bloqueios, dúvidas ou PR pronto; PM aceita ou devolve com checklist e testes; **sem liberação automática** do lote seguinte. Código e evidências inteiramente no GitHub. O Notion recebe somente o status do marco e o prazo aprovado, não discussões técnicas.

## 6. Produção audiovisual em paralelo
Três roteiros originais de Matheus (Start 51; Travel 47; Business 20) são insumo inalterado. Transformar **uma aula piloto** em prompt audiovisual, testar ferramenta, narração e legendas; comparar fidelidade do texto, qualidade, preço real de renderização, direitos de uso e formato; só após aceite transformar as 118 aulas em prompts. Documentar versão, custo e responsável; não gerar gravações sem autorização.

## 7. O que a PM pode adiantar sem resposta externa
- Marcar regras históricas superadas e reconciliar os critérios de aceitação.
- Gerar pautas de decisão de 1 página e fluxos operacionais propostos que não alterem negócio.
- Estruturar Issues de planejamento e seus critérios de pronto; sem desenvolvimento/compra.
- Mapear requisitos que NÃO dependem de gateway, Meet ou aprovação comercial para permitir planejamento de interfaces.
- Preparar primeiro piloto audiovisual e sua matriz de avaliação (roteiro preservado).

**Status do presente documento:** é matriz de bloqueios e tarefas da PM, não ata de reunião nem autorização para Claude iniciar programação.


## Registro posterior — DEC-082 (2026-11-08)
Marina confirmou **definitivamente** que o Plano 1 é somente videoaulas gravadas, visando máxima escalabilidade. Pendência COM-01 encerrada no nível de definição funcional; preservar no pacote de Matheus apenas preço/contrato e homologação de oferta se aplicável. Os demais bloqueios COM-02/03, PED-01/02, G2–G5 e jurídico permanecem abertos.


## Registro posterior — DEC-083 (2026-11-08)
Marina confirmou expressamente **Plano 3 com quatro plantões mensais de 20 minutos e duas aulas particulares de 50 minutos mensais**, mantendo crédito separado por modalidade. **COM-02 encerrada como pendência funcional.** Permanecem COM-03 (preços, contratos, acesso ao catálogo), PED-01 (DEC-024), PED-02 (conteúdo de nivelamento), jurídico, fornecedores e gates G1–G5.


## Correção do status de comercialização — reunião 03/11 (registrada em 2026-11-08)
A ata da reunião confirmou **assinaturas por curso/trilha específico (Travel e Business separados) e Basic oferecido como bônus a todos os assinantes**. A vitrine mostra cursos não contratados, mas protege aulas e exercícios. O PM deve consultar as decisões MAT-002/DEC-012/REQ-003 antes de questionar novamente. **Definição de acesso por curso encerrada; preços e condições comerciais seguem abertos.**


## Auditoria integral da ata de 03/11 — correção de pendências fictícias (2026-11-08)
A verificação direta da transcrição da reunião no PDF do projeto demonstrou que **DEC-024 foi decidida expressamente por Matheus**, removendo a reprodução integral obrigatória. O registro anterior que a mantinha como PENDENTE/REVISAR estava desatualizado. Outros assuntos já alinhados: contrato via cartão, períodos 1/3/6/12 meses, aviso de cancelamento de 30 dias, percentual de referência de 20% para quebra antecipada, plantões com reserva (20min/10 vagas), particular de 50min, não acúmulo, cursos separados com Basic bônus, coordenação em um painel. DEC-082/083 posteriores prevalecem em benefícios dos Planos 1 e 3. A **única pauta de decisões remanescente** consta do documento de auditoria de pendências (a ser linkado) e não deve incluir essas regras.
