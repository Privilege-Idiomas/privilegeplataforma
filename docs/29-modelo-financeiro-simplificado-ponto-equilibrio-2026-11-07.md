# Privilège — Modelo financeiro simplificado: zero aluno, equilíbrio por plano e escala de 50

**Data:** 2026-11-07. **Status:** SIMULAÇÃO COMERCIAL / NÃO APROVA preços, alteração de benefícios, custos, fornecedores ou implementação. **Fonte principal:** instrução de Marina nesta conversa de 07/11/2026. **Substitui, para análises de ponto de equilíbrio por plano isolado, a abordagem de mix fixo e plantão inicial de 15h semanais de [docs/28-projecao-custos-precificacao-faixas-50-2026-11-07.md](28-projecao-custos-precificacao-faixas-50-2026-11-07.md); não apaga o histórico.**

## O que Marina pediu
1. Começar com **0 assinantes**, separando tecnologia necessária à existência da plataforma e custo opcional de administração, **sem professores ociosos**.
2. Comparar cenários em que **100% dos alunos são do Plano 1, do Plano 2 ou do Plano 3**, individualmente; começar a cobrar docentes conforme a demanda real.
3. **Plano 1 somente conteúdo digital**, **Plano 2 com conteúdo e plantões**, **Plano 3 com conteúdo, plantões e particulares**. Não calcular avulsas nem variantes pagas nesta análise.
4. Disponibilizar **três horários de plantão por semana por bloco iniciado de 50 assinantes elegíveis**: manhã, tarde e noite; 1h cada. Isso é **modelo operacional hipotético de escala**, não mudança comercial aprovada nos benefícios.
5. Provisionar **100% dos créditos de particulares** para não subestimar o passivo docente. Para comparar apenas três opções, **Plano 3 = duas aulas individuais de 50min por aluno/mês**, provisionando 1h remunerada a R$30/aula, sem avulsas.
6. Manter faixas de 50 em 50 até 2.000 alunos e demonstrar preço, custo, ponto de equilíbrio e custo para atingir **100% de markup** (faturamento 2× custos modelados).

**Conflito comercial que NÃO será silenciosamente aprovado:** baseline anterior registrou **1 plantão/mês no Plano 1** (2 no Plano 2; 4 no Plano 3). Marina descreveu Plano 1 como **somente videoaulas nesta simulação**, logo o novo modelo retira plantões do P1 para fins de cálculo; confirmar formalmente alteração de benefício com Matheus antes de mudar contratos/documentação comercial canônica. Plano 3 configurável de 1 a 4 particulares no histórico continua aguardando aprovação comercial; o cenário de duas particulares é só hipótese de simulação. O regime de agendamento prévio, sessões de 20 min e até 10 participantes permanece relevante e não é revogado.

## 1. Custo com ZERO alunos
- Supabase Pro: US$25/mês × R$5,50 hipotético = **R$137,50/mês**.
- Vercel Pro: US$20/mês = **R$110,00/mês**.
- Cloudflare Stream: biblioteca central de ~1.223min → duas unidades de 1.000 min × US$5 = **R$55,00/mês**.
- GitHub Free: **R$0**; Claude já disponível, custo incremental não demonstrado.
- **Total de tecnologia:** **R$302,50/mês**. Reserva de administração hipotética adicional: **R$600/mês**. **Total para planejamento: R$902,50/mês**.
- **Plantões, particulares e transmissão variável com 0 alunos: R$0.** Caixa para 3 meses sem receita: **R$907,50 somente tecnologia** ou **R$2.707,50 tecnologia + reserva operacional**. Não inclui domínio, Meet/Workspace, produção, segurança complementar, marketing, encargos, jurídico, desenvolvimento, câmbio real ou tributos específicos de importação de serviços.

## 2. Custo que cresce com alunos
- 300 min assistidos por aluno/mês × US$1/1.000 min × R$5,50/US$ = **R$1,65/aluno/mês**.
- Suporte variável reservado: **R$2/aluno/mês** (hipótese); subtotal **R$3,65/aluno/mês**.
- Gateway **4% do faturamento + R$0,50/cobrança** e tributos **6% do faturamento**, todos **hipotéticos**. Total de tributos + percentual de gateway: **10% do preço** (somar o R$0,50 por cobrança).
- Docente: **R$30/h**, conforme informado; aulas individuais de 50min provisionadas conservadoramente a **R$30 por crédito**.
- Por grupo de até 50 assinantes elegíveis: 3 plantões/hora por semana × 52/12 semanas/mês = **13 horas mensais** × R$30 = **R$390 por bloco/mês**. Escala de plantões = **R$390 × teto(alunos elegíveis/50)**. Se 0 elegíveis, 0.
- Cada plantão de 1h contempla **3 sessões de 20min × 10 pessoas = 30 vagas**; 13h/mês fornecem **390 vagas teóricas**, ou **273 participações/mês** a 70% de lotação operacional. Para 50 alunos com direitos integrais: Plano 2 precisa de 100 participações, Plano 3 de 200, portanto há folga **mensal agregada** neste bloco; isso não garante disponibilidade em todos os horários.
- Custo de particular do Plano 3: **R$60 por aluno/mês** no cenário de 2 créditos (2 × R$30). Se algum benefício comercial vier a incluir 1, 3 ou 4 créditos, substituir por crédito × R$30; sem avulsas.

## 3. Resultado por plano isolado com preços anteriores NÃO aprovados
Preços de teste herdados da análise anterior: **P1 R$119; P2 R$169; P3 com 2 particulares R$429** (não são preços homologados).

| Indicador | Só Plano 1 | Só Plano 2 | Só Plano 3 |
|---|---:|---:|---:|
| Benefícios da simulação | digital | digital + 2 plantões/mês | digital + 4 plantões/mês + 2 particulares |
| Preço mensal ilustrativo | R$119 | R$169 | R$429 |
| Docência com 50 alunos | R$0 | R$390 | R$3.390 |
| Receita com 50 | R$5.950 | R$8.450 | R$21.450 |
| Custo mensal modelado com 50, com taxas e impostos | **R$1.705** | **R$2.345** | **R$6.645** |
| Resultado mensal modelado com 50 | **R$4.245** | **R$6.105** | **R$14.805** |
| Alunos necessários para pagar somente tecnologia + professores variáveis | **3** | **5** | **3** |
| Alunos necessários para pagar tecnologia + R$600 admin + professores | **9** | **9** | **5** |
| Alunos necessários para faturar pelo menos 2× todos os custos modelados (com R$600 admin) | **21** | **21** | **13** |
| Piso de mensalidade para faturar 2× todos os custos modelados, **com 50 alunos** | R$55,50 | R$75,00 | R$225,00 |

**A diferença entre receita e custos modelados não é lucro líquido da empresa.** Os custos não estimados podem alterar substancialmente os números. Os pisos não constituem preço ideal percebido pelo mercado; os preços anteriores foram mantidos apenas como hipótese comparável.

## 4. Exemplos para dimensionamento
**15 assinantes (todos no mesmo plano), com reserva administrativa incluída:**
- Plano 1: receita R$1.785; custo R$1.143,25; saldo R$641,75.
- Plano 2: receita R$2.535; custo R$1.608,25; saldo R$926,75. Só **3 horas de plantão por semana**, R$390/mês, em vez da antiga escala fixa de 15h/semana.
- Plano 3 (2 particulares): receita R$6.435; custo R$2.898,25; saldo R$3.536,75.

**100 assinantes (blocos de plantão já dobrados):**
- Plano 1: custo R$2.507,50; receita R$11.900; saldo R$9.392,50.
- Plano 2: custo R$3.787,50; receita R$16.900; saldo R$13.112,50.
- Plano 3: custo R$12.387,50; receita R$42.900; saldo R$30.512,50.

A planilha simplificada anexa da conversa, `Privilege_Custos_Simplificados_0_a_2000_Alunos.xlsx`, contém abas **RESUMO**, **FAIXAS** (0, 15 e todos os múltiplos de 50 a 2.000 para cada plano isolado) e **PREMISSAS** editáveis. Não presumir que o arquivo binário já esteja versionado no GitHub; o modelo e as fórmulas são registrados aqui.

## 5. Fórmulas e limites
Considere `n` assinantes todos do mesmo plano; `F=302,50+600=902,50`; `v=3,65`; `r=0,04+0,06=0,10`; `f=0,50`; `P` preço; `k=ceil(n/50)`, ou 0 se n=0; `h=390`; `a=30 × particulares incluídas` (P3 usa a=60, demais 0).
- **Receita** = `n×P`.
- **Custos** = `F + n×v + I(plano 2/3)×k×h + n×a + n×(r×P+f)`.
- **Resultado** = Receita − Custos.
- **Preço mínimo para faturar o dobro do custo total aos n assinantes** = `2×[F/n + I(plano 2/3)×k×h/n + v + a + f] / (1−2r)`. Fórmula válida para `n>0` e `r<0,5`.
- Ponto de equilíbrio para os preços atuais ocorre no primeiro bloco até 50 alunos; reavaliar função em degraus se mudar o preço e ultrapassar 50.

**Riscos a completar:** custos reais de gateway e regimes tributários, escolha de videoconferência e licenças por professor, tempo de marketing/atendimento, provisão de implantação e produção; capacidade por horário com sobreposição; uso integral das aulas particulares; obrigações legais e trabalhistas; sazonalidade, evasão e inadimplência. Tarifas públicas registradas em docs/27-proposta-stack-e-custos-2026-11-07.md.

**Governança:** GitHub fonte oficial do planejamento; Notion só extrato executivo. Não houve contratação, autorização de Claude para implementação, homologação comercial nem decisão jurídica.