# Privilège — Matriz de fechamento do planejamento e preparação do cronograma
**Data:** 2026-11-08 · **Status:** plano de trabalho, **NÃO** homologação G1, seleção final de stack G2, preço G3, versão G4 ou liberação G5.  
**Fontes:** `docs/06-roadmap.md`, `docs/25-p08-checklist-aceitacao-funcional.md`, `docs/26-pacote-reuniao-matheus-decisao.md`, `docs/27-proposta-stack-e-custos-2026-11-07.md`, `docs/29-modelo-financeiro-simplificado-ponto-equilibrio-2026-11-07.md`, `docs/30-custos-pendentes-e-fases-de-execucao-2026-11-07.md`, `docs/31-diagnostico-gates-cronograma-incremental-2026-11-07.md`, DEC-074–081 e matriz JUR-01–11.

## 1. Questões já resolvidas que NÃO devem voltar à pauta
- Prática é opcional; **avaliação da aula é obrigatória, porém não eliminatória**, com nota 6 apenas orientativa e tentativas ilimitadas; progressão depende da realização da avaliação, não de aprovação por nota.
- Plantões: **reserva obrigatória**, sessões de **20 minutos e até 10 participantes**, cancelamento com pelo menos 2h devolve crédito; menos de 2h/no-show consome; plantão lotado oferece outros horários sem fila; créditos mensais não acumulam.
- Teste de nivelamento **opcional**, recomenda curso/trilha sem bloquear; **IA elabora o banco de questões/gabarito previamente**, corrigido automaticamente por regras da plataforma **sem IA por aluno**; faixas e conteúdo reais dependem de pedagógico.
- Trilhas reutilizam cursos sem duplicar conteúdo; alteração de trilha mantém progresso e não amplia acesso não contratado; versões de conteúdo devem preservar conclusões/certificados.
- Tentativa interrompida tem janela de 30 dias **contados desde o início**; expiração após aviso, nova tentativa permitida.
- Preferência comunicada por gestão é vídeo integral **não obrigatório**, mas **DEC-024 segue precisando do aceite expressamente atribuído a Matheus**.
- GitHub Free e Claude disponível; Notion somente extrato executivo. Não criar planilhas sem pedido expresso.

## 2. Matriz objetiva das pendências por responsabilidade
| ID | Responsável pela próxima ação | Pendente REAL | Ação objetiva | Bloqueia |
|---|---|---|---|---|
| PM-01 | PM, sem depender de Matheus | Critérios antigos divergentes: plantão sem reserva, nota eliminatória, duas tentativas, vídeo, progresso e histórico | Harmonizar trechos operativos de `02`, `03`, `06`, `14`, `25`, `26` e índice de decisões com DEC-074–081, identificando seções históricas sem apagar histórico | G1 e critérios testáveis |
| PM-02 | PM | Pack de validação antigo `docs/26` pede respostas pedagógicas já recebidas | Produzir pauta **curta e atual**, distinguindo Matheus, jurídico, fornecedor e PM, sem reabrir diretrizes decididas | Reunião e G1 |
| PM-03 | PM | Critérios verificáveis de planos/acesso, fluxo de expiração, transição entre versões, notificação, auditoria, reserva, tickets | Escrever testes e fluxos recomendados; não presumir rateio, autorização jurídica ou decisão comercial | G1 |
| PM-04 | PM | Esforço de desenvolvimento sem dimensionamento | Desdobrar jornadas aprovadas em lotes candidatos, pontos de integração, dependências e critérios de pronto; pedir estimativas a Claude **sem implementar** depois da definição de stack | G4 cronograma |
| COM-01 | Matheus/autoridade comercial (conforme alçada) | **Plano 1**: simulação recente é somente digital, enquanto baseline funcional previa 1 plantão/mês | Confirmar benefício final e se a simulação vira nova oferta; registrar decisão por escrito | G1 comercial, G3, G4 |
| COM-02 | Matheus/autoridade comercial | **Plano 3**: simulação usa 2 particulares/mês; histórico considerava 1–4 configuráveis | Confirmar benefício real a comercializar, elegibilidade e se variantes permanecem no produto futuro | G1 comercial, G3, G4 |
| COM-03 | Matheus/autoridade comercial, com PM | Preços de planos, direitos por catálogo/curso, contratos de 1/3/6/12 meses, regra de upgrade pro-rata, renovação, cancelamento e multa | Aprovar política e parâmetros comerciais verificáveis, separados de hipóteses financeiras | G1/G3/G4; parte jurídica |
| PED-01 | Matheus (atribuição expressa) | DEC-024: exigir vídeo integral para concluir aula? | Validar ou ajustar preferência de não exigir reprodução integral; não pedir nova decisão sobre nota mínima | G1 |
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
1. **Plano 1:** inclui algum plantão ou é somente videoaula? O modelo financeiro está **somente digital**, mas o requisito anterior prevê 1 plantão.
2. **Plano 3:** duas particulares mensais são a oferta real ou só uma hipótese? Confirmar acesso e créditos comercializados; não incluir compras avulsas na simulação atual.
3. **Produtos/contratos:** confirmar preços, catálogo acessível por plano, vigências 1/3/6/12 meses, regra de cobrança, rateio na mudança, renovação e cancelamento sob revisão jurídica.
4. **DEC-024:** confirmar formalmente que não é necessário assistir 100% da aula em vídeo para concluir.
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
