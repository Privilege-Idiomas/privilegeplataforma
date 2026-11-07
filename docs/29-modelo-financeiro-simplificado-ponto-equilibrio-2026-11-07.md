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

## Adendo executivo de clareza — 2026-11-07 (preservação integral do histórico)
**Orientação expressa:** não alterar ou suprimir nenhuma análise anterior; acrescentar comparação direta do custo tecnológico puro, consumo de vídeo, professores e contribuição bruta de cada plano. O Notion publicará somente um relatório executivo derivado deste GitHub. Nenhuma planilha nova deve ser gerada sem solicitação explícita.

### Investimento de produção e lançamento — separar do custo mensal
- **Produção/lançamento são custos de implantação não cotados**, não se presumem R$0: criação de interface, autenticação, trilhas, questões/avaliações, gerenciamento financeiro, agenda docente, relatórios, certificado/QR, testes e implantação; produção dos **118 vídeos** e eventuais ferramentas de IA para gravação/edição, legendas, acessibilidade; domínio e configuração; homologação de gateway, Meet/licenças e legal/LGPD. Claude está disponível como executor, mas acesso existente não prova trabalho humano ou API sem custos adicionais.
- **Stack recomendada, não formalmente escolhida:** Next.js/TypeScript/React/Tailwind como software produzido (sem licença mensal própria estimada), Supabase Pro como banco/auth, Vercel Pro como hospedagem, Cloudflare Stream para vídeos, Resend inicialmente Free, GitHub Free para repositório/tarefas, Claude já acessível para desenvolvimento; Google Meet/Workspace e gateway (Asaas/Mercado Pago) **dependem de cotação e validação**.

### Tecnologia mensal com nenhum assinante
| Item | USD/mês | BRL/mês a câmbio hipotético R$5,50/USD |
|---|---:|---:|
| Supabase Pro | 25 | 137,50 |
| Vercel Pro | 20 | 110,00 |
| Cloudflare Stream — armazenamento de ~1.223min em faixa de 2.000 | 10 | 55,00 |
| GitHub Free | 0 | 0,00 |
| Resend Free (dentro da franquia) | 0 | 0,00 |
| Reprodução, professores e gateway sem aluno | 0 | 0,00 |
| **TOTAL apenas tecnologia conhecida** | **55** | **302,50** |
**Excluir do custo fixo puro** a reserva administrativa anterior de R$600: não é despesa confirmada. O total de R$302,50 é **somente a soma dos serviços precificados**, não uma cotação completa: domínio, licenças de videoconferência, tributos cambiais, back-ups adicionais e demais serviços podem ser reais.

### Consumo e docentes — fórmula mais simples
- Stream por reprodução: **US$1 por 1.000min** × R$5,50 = **R$0,0055/min**. 1h = R$0,33; 2h = R$0,66; 3h = R$0,99; **5h = R$1,65/aluno/mês**; 10h = R$3,30; 20h = R$6,60. Replays e tempo efetivamente entregue contam; franquias de banco/hosting podem gerar adicionais em volumes maiores.
- 1h de plantão tem 3 sessões de 20min de até 10 estudantes, **30 vagas teóricas**. **3 horários semanais por bloco iniciado de 50 alunos** (manhã/tarde/noite) × 52/12 semanas = **13 horas/mês**, a R$30/h = **R$390/mês por bloco**. Mesmo que 100% dos créditos sejam utilizados, há capacidade mensal agregada para 50 alunos com 2 plantões = 100 presenças e 4 plantões = 200 presenças, contra 390 vagas teóricas; a distribuição real dos horários exige verificação.
- Plano 3 simulado com **2 particulares de 50min por aluno/mês**, provisionadas como hora docente cheia: 2 × R$30 = **R$60/aluno/mês**. **100% de uso** de todos os créditos contabilizado por segurança. P1 sem plantões é hipótese da conversa mais recente e CONTRADIZ benefício de 1 plantão anterior: confirmar comercialmente antes de publicar planos. Não simular opções de aulas extras ou avulsas.

### Custo direto puro (sem reserva administrativa, gateway e impostos) — comparação de 50 em 50
Para n alunos: **P1 = 302,50 + 1,65n**; **P2 = P1 + 390×teto(n/50)**; **P3 = P2 + 60n**. Com **zero alunos** em qualquer plano, R$302,50. Tabela de referência:
| Alunos | Todos P1 | Todos P2 | Todos P3 |
|---:|---:|---:|---:|
| 0 | 302,50 | 302,50 | 302,50 |
| 15 | 327,25 | 717,25 | 1.617,25 |
| 50 | 385,00 | 775,00 | 3.775,00 |
| 100 | 467,50 | 1.247,50 | 7.247,50 |
| 150 | 550,00 | 1.720,00 | 10.720,00 |
| 200 | 632,50 | 2.192,50 | 14.192,50 |
| 250 | 715,00 | 2.665,00 | 17.665,00 |
| 300 | 797,50 | 3.137,50 | 21.137,50 |
| 350 | 880,00 | 3.610,00 | 24.610,00 |
| 400 | 962,50 | 4.082,50 | 28.082,50 |
| 450 | 1.045,00 | 4.555,00 | 31.555,00 |
| 500 | 1.127,50 | 5.027,50 | 35.027,50 |
**Nota:** são custos diretos mínimos modelados; e-mail pago acima da franquia, excessos dos provedores e despesas não cotadas podem elevar o valor. Câmbio fixado só para comparação.

### Preço, equilíbrio, resultado — simulação, nunca preço aprovado
Preços do exercício anterior: **P1 R$119, P2 R$169, P3 R$429** (P3 com duas particulares). **Receita bruta = N×mensalidade; resultado bruto parcial = receita bruta − custo direto puro acima**, sem margem real, imposto ou tarifa de cartão. De zero a primeiro bloco:
- P1 equilíbrio: **3 alunos** (119n ≥ 302,5+1,65n)
- P2 equilíbrio: **5 alunos** (169n ≥ 302,5+1,65n+390)
- P3 equilíbrio: **2 alunos** (429n ≥ 302,5+1,65n+390+60n)
**Com impostos e gateway hipotéticos, o ponto de equilíbrio sobe; não denominar o resultado bruto parcial de lucro líquido.**
A tabela completa da versão aprovada para o Notion compara 0, 50, 100, ... 500 assinantes de cada plano isoladamente, faturamento e saldo; faixas adicionais podem ser calculadas com as mesmas fórmulas. Essas simulações não alteram nenhuma decisão de escopo, benefício ou preço.
