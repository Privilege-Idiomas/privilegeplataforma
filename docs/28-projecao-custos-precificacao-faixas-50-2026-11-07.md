# Privilège — Custos por faixa de 50 alunos e precificação hipotética
**Data:** 2026-11-07. **Status:** ANÁLISE FINANCEIRA / NÃO é aprovação de preços, orçamento ou contratação. **Autor:** PM. Premissas originais no planejamento `docs/27-proposta-stack-e-custos-2026-11-07.md` e confirmações da conversa sobre plantões 15h/semana (segunda a sexta), GitHub gratuito e custo do docente de R$30/h.
**Arquivo de simulação:** `Privilege_Projecao_Custos_Precificacao_50_em_50.xlsx` foi gerado como anexo de conversa, com seis abas e premissas editáveis; esta página mantém os resultados e método no GitHub (fonte canônica).

## 1. Inventário dos roteiros enviados
| Curso | Módulos | Aulas | Duração mínima (min) | Duração central (min) | Duração máxima (min) | Fonte |
|---|---:|---:|---:|---:|---:|---|
| Start in English | 8 | 51 | 171 | 229,5 | 288 | `Start - Course.pdf`, páginas 3–76; não define minutos por aula; estimativa por locução/exemplos/pausas |
| Travel English in Action | 7 | 47 | 526 | 650,5 | 775 | `Travel - Course.pdf`, mapa e duração sugerida 40 regulares 10–15min, 7 missões 18–25min |
| Business English in Action | 5 | 20 | 285 | 342,5 | 400 | `Business - Course.pdf`, 15 regulares 12–18min, quatro missões 20–25min e uma final 25–30min |
| **TOTAL** | **20** | **118** | **982** | **1.222,5** | **1.463** | Arquivos de roteiro fornecidos pela responsável |
O Start usa 105–135 palavras por minuto, 30%–65% de exemplos não explicitamente marcados como fala e pausas de 0,8–1,8 minuto por aula, arredondando a duração individual para cima. Isso é estimativa de gravação, não medição de vídeo pronto. As aberturas extras, vinhetas, reprises, downloads, provas e tempo de estudo não estão incluídos.

## 2. Modelo operacional e capacidade
- **15 horas de plantões por semana**: segunda a sexta, 1h manhã + 1h tarde + 1h noite. Usar 52/12 semanas/mês -> **65 horas/mês em média**. Custo R$30/h -> **R$1.950/mês** independente do número de reservas, enquanto a escala for mantida.
- 1h gera três sessões de 20 minutos; **195 sessões mensais**, no máximo 10 alunos/sessão, ou **1.950 participações teóricas/mês**. Com ocupação operacional-alvo de **70%**, capacidade prudencial de **1.365 participações/mês**.
- Mix hipotético **40% P1 / 35% P2 / 25% P3**; direitos de **1/2/4 plantões por mês**; demanda média de 2,1 participações elegíveis por aluno, assumindo **70% de utilização** = **1,47 reserva por aluno/mês**. A capacidade prudencial comporta aproximadamente **929 alunos** neste mix; na faixa de 950, o cálculo começa a adicionar horas de plantão. O valor total de plantões inclui expansão quando necessária.
- Plantões e aulas particulares são benefícios distintos: o custo do plantão é uma escala paga, não 10 vezes o custo do docente. **R$60/h comercial** representa markup 100% sobre o custo direto de R$30/h, não margem líquida 100%.
- Particular: aula dura 50min; modelo de preço provisiona **R$30 por aula realizada/creditada** (hora docente inteira por prudência). Contrato com pagamento proporcional poderia custar R$25. Para pisos, provisionar **100%** dos créditos particulares; projeção de resultado usa **80%** de uso, apenas como cenário.

## 3. Premissas financeiras (alteráveis; não são cotações)
- **R$5,50/US$** apenas como câmbio ilustrativo; Supabase Pro **US$25/mês**, Vercel Pro **US$20/mês**, armazenamento Stream para biblioteca central de 1.222,5min = duas faixas de 1.000 minutos **US$10/mês**, total **US$55 ou R$302,50 fixos**. GitHub **R$0** conforme usuária: único desenvolvedor e Matheus apenas visualiza.
- Vídeo consumido: **300 min/aluno/mês** × US$1/1.000min Stream = **US$0,30 = R$1,65 por aluno/mês**. E-mail Resend gratuito até limites (3.000/mês e 100/dia); **US$20 = R$110/mês** no modelo quando extrapola limite médio, possível antes devido a picos.
- Administração: **R$600/mês fixos + R$2/aluno/mês**, APENAS placeholder, não salário real confirmado. Taxa de cartão **4% + R$0,50 por cobrança**, tributos sobre receita **6%**: hipóteses, não valores contratados. **Não incluídos:** domínio, Google Meet/Workspace, licenças por docente, encargos, manutenção adicional, jurídico/contabilidade, aquisição de clientes, marketing, comissão, produção/gravação/edição, horas de desenvolvimento, encargos, IOF/câmbio de compra, chargebacks e risco de capacidade por turno.
- Tarifas públicas para cotação: https://supabase.com/pricing ; https://vercel.com/pricing ; https://developers.cloudflare.com/stream/pricing/ ; https://resend.com/pricing .
- Planos de preços abaixo **não são preços de venda aprovados**. Mix, utilização, custos administrativos e pagamentos ainda precisam de validação comercial. Ajustar parâmetros antes de decisão definitiva.

## 4. Faixas mensais — 50 a 2.000 alunos de 50 em 50
**Infra = base tecnológica + reprodução de vídeo + e-mail. Custo total base = infra + escala docente dos plantões + administração provisória; EXCLUI particulares e taxas de venda. Piso de preço tem objetivo de markup 100% sobre custo alocado total incluindo taxa e imposto hipotéticos. P3+1 usa uma aula particular de 50min; os pisos para P3+2/+3/+4 estão na planilha.**
| Alunos | Infra (R$) | Plantões (R$) | Base mensal (R$) | Base/aluno (R$) | Piso P1 (R$) | Piso P2 (R$) | Piso P3+1 (R$) | Horas adicionais de plantão/mês |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 50 | R$ 385,00 | R$ 1.950,00 | R$ 3.035,00 | R$ 60,70 | R$ 101,93 | R$ 148,36 | R$ 316,21 | 0.0 |
| 100 | R$ 467,50 | R$ 1.950,00 | R$ 3.217,50 | R$ 32,18 | R$ 56,15 | R$ 79,37 | R$ 200,79 | 0.0 |
| 150 | R$ 550,00 | R$ 1.950,00 | R$ 3.400,00 | R$ 22,67 | R$ 40,89 | R$ 56,37 | R$ 162,32 | 0.0 |
| 200 | R$ 632,50 | R$ 1.950,00 | R$ 3.582,50 | R$ 17,91 | R$ 33,26 | R$ 44,87 | R$ 143,08 | 0.0 |
| 250 | R$ 715,00 | R$ 1.950,00 | R$ 3.765,00 | R$ 15,06 | R$ 28,69 | R$ 37,97 | R$ 131,54 | 0.0 |
| 300 | R$ 797,50 | R$ 1.950,00 | R$ 3.947,50 | R$ 13,16 | R$ 25,63 | R$ 33,37 | R$ 123,85 | 0.0 |
| 350 | R$ 880,00 | R$ 1.950,00 | R$ 4.130,00 | R$ 11,80 | R$ 23,45 | R$ 30,09 | R$ 118,35 | 0.0 |
| 400 | R$ 962,50 | R$ 1.950,00 | R$ 4.312,50 | R$ 10,78 | R$ 21,82 | R$ 27,62 | R$ 114,23 | 0.0 |
| 450 | R$ 1.045,00 | R$ 1.950,00 | R$ 4.495,00 | R$ 9,99 | R$ 20,55 | R$ 25,71 | R$ 111,02 | 0.0 |
| 500 | R$ 1.127,50 | R$ 1.950,00 | R$ 4.677,50 | R$ 9,36 | R$ 19,53 | R$ 24,17 | R$ 108,46 | 0.0 |
| 550 | R$ 1.210,00 | R$ 1.950,00 | R$ 4.860,00 | R$ 8,84 | R$ 18,70 | R$ 22,92 | R$ 106,36 | 0.0 |
| 600 | R$ 1.292,50 | R$ 1.950,00 | R$ 5.042,50 | R$ 8,40 | R$ 18,00 | R$ 21,87 | R$ 104,61 | 0.0 |
| 650 | R$ 1.375,00 | R$ 1.950,00 | R$ 5.225,00 | R$ 8,04 | R$ 17,42 | R$ 20,99 | R$ 103,13 | 0.0 |
| 700 | R$ 1.457,50 | R$ 1.950,00 | R$ 5.407,50 | R$ 7,73 | R$ 16,91 | R$ 20,23 | R$ 101,86 | 0.0 |
| 750 | R$ 1.650,00 | R$ 1.950,00 | R$ 5.700,00 | R$ 7,60 | R$ 16,85 | R$ 19,94 | R$ 101,13 | 0.0 |
| 800 | R$ 1.732,50 | R$ 1.950,00 | R$ 5.882,50 | R$ 7,35 | R$ 16,44 | R$ 19,34 | R$ 100,15 | 0.0 |
| 850 | R$ 1.815,00 | R$ 1.950,00 | R$ 6.065,00 | R$ 7,14 | R$ 16,08 | R$ 18,82 | R$ 99,28 | 0.0 |
| 900 | R$ 1.897,50 | R$ 1.950,00 | R$ 6.247,50 | R$ 6,94 | R$ 15,77 | R$ 18,35 | R$ 98,50 | 0.0 |
| 950 | R$ 1.980,00 | R$ 2.000,00 | R$ 6.480,00 | R$ 6,82 | R$ 15,55 | R$ 18,05 | R$ 98,06 | 1.7 |
| 1000 | R$ 2.062,50 | R$ 2.100,00 | R$ 6.762,50 | R$ 6,76 | R$ 15,41 | R$ 17,91 | R$ 97,91 | 5.0 |
| 1050 | R$ 2.145,00 | R$ 2.210,00 | R$ 7.055,00 | R$ 6,72 | R$ 15,29 | R$ 17,80 | R$ 97,81 | 8.7 |
| 1100 | R$ 2.227,50 | R$ 2.310,00 | R$ 7.337,50 | R$ 6,67 | R$ 15,18 | R$ 17,68 | R$ 97,68 | 12.0 |
| 1150 | R$ 2.310,00 | R$ 2.420,00 | R$ 7.630,00 | R$ 6,63 | R$ 15,08 | R$ 17,59 | R$ 97,60 | 15.7 |
| 1200 | R$ 2.392,50 | R$ 2.520,00 | R$ 7.912,50 | R$ 6,59 | R$ 14,98 | R$ 17,48 | R$ 97,48 | 19.0 |
| 1250 | R$ 2.475,00 | R$ 2.630,00 | R$ 8.205,00 | R$ 6,56 | R$ 14,90 | R$ 17,41 | R$ 97,42 | 22.7 |
| 1300 | R$ 2.557,50 | R$ 2.730,00 | R$ 8.487,50 | R$ 6,53 | R$ 14,82 | R$ 17,32 | R$ 97,32 | 26.0 |
| 1350 | R$ 2.640,00 | R$ 2.840,00 | R$ 8.780,00 | R$ 6,50 | R$ 14,75 | R$ 17,26 | R$ 97,27 | 29.7 |
| 1400 | R$ 2.722,50 | R$ 2.940,00 | R$ 9.062,50 | R$ 6,47 | R$ 14,68 | R$ 17,18 | R$ 97,18 | 33.0 |
| 1450 | R$ 2.805,00 | R$ 3.050,00 | R$ 9.355,00 | R$ 6,45 | R$ 14,62 | R$ 17,13 | R$ 97,14 | 36.7 |
| 1500 | R$ 2.887,50 | R$ 3.150,00 | R$ 9.637,50 | R$ 6,43 | R$ 14,56 | R$ 17,06 | R$ 97,06 | 40.0 |
| 1550 | R$ 2.970,00 | R$ 3.260,00 | R$ 9.930,00 | R$ 6,41 | R$ 14,51 | R$ 17,02 | R$ 97,02 | 43.7 |
| 1600 | R$ 3.052,50 | R$ 3.360,00 | R$ 10.212,50 | R$ 6,38 | R$ 14,46 | R$ 16,96 | R$ 96,96 | 47.0 |
| 1650 | R$ 3.135,00 | R$ 3.470,00 | R$ 10.505,00 | R$ 6,37 | R$ 14,41 | R$ 16,92 | R$ 96,92 | 50.7 |
| 1700 | R$ 3.217,50 | R$ 3.570,00 | R$ 10.787,50 | R$ 6,35 | R$ 14,36 | R$ 16,86 | R$ 96,86 | 54.0 |
| 1750 | R$ 3.300,00 | R$ 3.680,00 | R$ 11.080,00 | R$ 6,33 | R$ 14,32 | R$ 16,83 | R$ 96,84 | 57.7 |
| 1800 | R$ 3.382,50 | R$ 3.780,00 | R$ 11.362,50 | R$ 6,31 | R$ 14,28 | R$ 16,78 | R$ 96,78 | 61.0 |
| 1850 | R$ 3.465,00 | R$ 3.890,00 | R$ 11.655,00 | R$ 6,30 | R$ 14,25 | R$ 16,75 | R$ 96,76 | 64.7 |
| 1900 | R$ 3.547,50 | R$ 3.990,00 | R$ 11.937,50 | R$ 6,28 | R$ 14,21 | R$ 16,71 | R$ 96,71 | 68.0 |
| 1950 | R$ 3.630,00 | R$ 4.100,00 | R$ 12.230,00 | R$ 6,27 | R$ 14,18 | R$ 16,68 | R$ 96,69 | 71.7 |
| 2000 | R$ 3.712,50 | R$ 4.200,00 | R$ 12.512,50 | R$ 6,26 | R$ 14,14 | R$ 16,64 | R$ 96,64 | 75.0 |

## 5. Fórmulas de precificação
A parte compartilhada da plataforma corresponde a `(infra + suporte)/(nº de alunos)`. Alocar custo fixo de plantão por direitos: `custo_plantao × (plantões do plano)/(alunos × 2,1)`, desde que mix e proporção de uso por plano sejam homogêneos. O custo particular é `R$30 × nº de aulas particulares incluídas` para precificação prudencial. Acrescentar R$0,50 por operação. Com taxa de pagamento 4%, tributo 6% e markup de 100%, o piso é `2 × (custos unitários + 0,50) / [1 − 2 × (0,04+0,06)]`, equivalente a `2,5 × (custos unitários+0,50)`.
**Não confundir piso de simulação com preço ideal de mercado.** O preço final requer validação de valor percebido, plano/catálogo, estratégia comercial, conversão, churn e custos externos.

## 6. Proposta de preços mensais para TESTE comercial (não aprovada)
| Oferta | Benefício de plantão | Particular/mês | Preço ilustrativo |
|---|---:|---:|---:|
| Plano 1 | 1/mês | 0 | **R$119** |
| Plano 2 | 2/mês | 0 | **R$169** |
| Plano 3+1 | 4/mês | 1 | **R$349** |
| Plano 3+2 | 4/mês | 2 | **R$429** |
| Plano 3+3 | 4/mês | 3 | **R$509** |
| Plano 3+4 | 4/mês | 4 | **R$589** |
O incremento de **R$80 por aula extra** conserva margem para custo de uma hora docente (R$30), tarifas e outros custos; não é o preço avulso aprovado. Os valores foram escolhidos acima do piso hipotético de 50 alunos (P1 ~R$102; P2 ~R$148; P3+1 ~R$316; P3+4 ~R$541), porém **podem se tornar inadequados** se surgirem custos reais não incluídos ou houver outro mix/uso.

## 7. Cuidados antes de submeter a Matheus
1. Confirmar a divisão real de alunos entre planos e quantas aulas particulares serão usadas; 40/35/25 e 70% são hipóteses.
2. Confirmar acesso por curso de cada plano, preço atual Privilège, descontos de contratos de 3/6/12 meses, multas e política de mudança.
3. Cotar gateway, Meet/Workspace, domínio, custo fiscal efetivo, encargos, suporte e custos docentes indiretos; solicitar orçamento da produção de vídeo, correção/acessibilidade e equipe.
4. Validar ocupação por horário; mesmo com capacidade mensal suficiente, manhã, tarde ou noite podem lotar.
5. O primeiro orçamento do negócio deve incluir amortização da implantação e aquisição de alunos (CAC). **Não apresentar margem de resultado da planilha como lucro contábil verdadeiro.**
6. Após essa validação, aprovar formalmente estratégia de pricing e contratos antes de qualquer cobrança; stack e execução permanecem nas alçadas e gates existentes.

**Governança:** GitHub é fonte única de verdade; Notion recebe somente extrato executivo. Claude Code disponível como executor futuro, não autorização de desenvolvimento nem custo integral zero.
