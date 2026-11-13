# Privilège — Ata de reunião semanal de 11/11/2026: decisões e encaminhamentos
**Data da reunião:** quarta-feira, 11/11/2026. **Registrado pela PM:** 13/11/2026.
**Fonte primária recebida no projeto:** “Plataforma Privilege - Semanal - 2026_11_11 13_36 GMT-03_00 - Anotações do Gemini.pdf”, seis páginas (resumo e apontamentos, sem a transcrição completa anexada no próprio PDF).
**Participantes indicados na fonte:** Marina e Matheus. **Natureza da fonte:** ata automática; preservar distinção entre afirmação, proposta, alinhamento e comprovação técnica.
**Status:** registro de reunião e encaminhamentos, **não** nova autorização de código, despesa, compra, deploy ou alteração unilateral de escopo.

## 1. Mudanças e deliberações identificadas em 11/11

| ID de rastreio | Tema | O que a ata registra | Situação / precedência |
|---|---|---|---|
| **DEC-084** | Prazo e cobrança do Plano 1 digital | Para a **oferta básica somente digital, sem plantões (Plano 1, DEC-082)**: acesso concedido por **seis meses fechados** e **cobrança única no cartão**, com possibilidade de parcelamento daquela compra. Para cursos/produtos de maior duração, permanece a possibilidade de modelos recorrentes mensal, trimestral, semestral e anual. | **Alinhamento/aprovação comercial atribuído a Matheus na reunião**, consolidado em docs/09. Esta regra **atualiza o modelo comercial anterior**, não elimina os benefícios pedagógicos nem modifica a condição de Basic/Start ser bônus da assinatura. Não extrapolar o regime semestral para P2/P3 sem definição específica. |
| **DEC-085** | Desconto para aluno presencial | Matheus aprovou **diretriz de desconto na faixa de 20%–30%** para aluno presencial que contrate acesso digital, com **retorno ao preço integral** quando acabar o vínculo com o presencial. | **Diretriz aprovada**, faixa e reversão definidas; **percentual exato, verificações, vigência e fórmula de transição permanecem por parametrizar pela gestão comercial (Matheus)**. |
| **ALIN-11-01** | Design premium | Matheus aprovou, na apresentação da reunião, a **direção visual sóbria/premium** com azul profundo, dourado e creme e navegação inspirada em referências como Coursera. | **Não criar uma DEC visual paralela**: registrar como endosso de direção; o aceite operacional dos artefatos visuais específicos é o **D1 Revisão 2, concedido por Marina em 13/11**, docs/41 e Issue #15. |
| **ALIN-11-02** | Entrada no mercado com curso Travel | Alinhamento de lançamento comercial **em dezembro de 2026**, usando como porta de entrada o produto de viagens associado ao parceiro **Mateus (Tipino das Milhas)**; públicos potenciais incluem viajantes, profissionais, autodidatas e pessoas que buscam apoio humano flexível. | **Estratégia de go-to-market alinhada**, sem aprovação de catálogo/preço exclusivo, direitos de exploração do conteúdo, contrato de parceria, operação terceirizada ou substituição da plataforma própria. **Não alterar a meta técnica de plataforma integral 10/12 estabelecida por Marina em 13/11.** Titularidade do registro decisório formal da estratégia a confirmar por Marina; não atribuir por inferência. |
| **ALIN-11-03** | Expansão white label | Matheus e Marina discutiram e alinharam oferta posterior da plataforma para parceiros com marca própria, incluindo **taxa de manutenção recorrente e/ou comissão sobre vendas**. A síntese da ata diz manutenção + comissão; os detalhes descrevem variantes de repasse/comissão ou manutenção/personalização. | **Princípio de modelo comercial alinhado**, mas **combinação contratual exata, taxas, governança de dados, personalização, segregação de parceiros e cronograma não estão fechados**. Registrar como **capacidade futura**, não escopo autorizado para o lançamento integral sem decisão posterior. Titularidade formal a confirmar com Marina. |
| **ALIN-11-04** | Reuniões de acompanhamento | Agenda semanal ajustada dinamicamente conforme necessidade, em vez de horário fixo obrigatório. | Diretriz operacional acordada para gestão; não exige novo registro DEC por não alterar o produto. |

**Importante — nomenclatura:** o texto da ata usa “produto básico” e “plano de acesso à plataforma sem plantão” para a cobrança semestral. Aqui isso significa **Plano 1 somente digital**, não o curso **Basic/Start in English** oferecido como bônus aos assinantes (MAT-002 / DEC-012). Não confundir os dois.

## 2. Custos, projeções, jurídico e aprovações relatados

- **MAT-011 — orçamento e viabilidade:** na reunião foram apresentados custos fixos de tecnologia de **R$ 302,50/mês** (Supabase/banco, Vercel, Cloudflare Stream e serviços de e-mail; GitHub e Resend nas faixas gratuitas consideradas). A ata também menciona **R$ 2/aluno** como hipótese de consumo de vídeo e um exercício de **equilíbrio de aproximadamente 10 alunos**, conforme composição de planos. Esses números são **premissas da apresentação**, não custo total contratado nem garantia de break-even: não se devem inferir taxas de gateway, tributos, volume assistido real, carga docente, aquisição de clientes ou despesas já autorizadas.
- **Preços apenas discutidos:** referências de **R$ 97, R$ 169 e R$ 429** apareceram nas simulações por plano. **Não converter em tabela comercial definitiva**: a ata ainda pede “definir valores finais”. Existe uma **inconsistência aritmética/textual na própria ata**: “R$ 97 por mês” e total semestral “R$ 354 ou R$ 359” não são equivalentes; não corrigir por suposição nem registrar um deles como preço aprovado.
- **Viabilidade relatada:** custo sobre receita de **1,89%** e proporção **16,33%** considerando docente em simulação de 500 alunos, segundo a ata; **não há fórmulas e bases suficientes nesta fonte para certificar esses percentuais**.
- **Custos e jurídico:** a ata descreve **aval financeiro e jurídico de Matheus**, e Marina posteriormente confirmou expressamente à PM que os custos apresentados foram aprovados (MAT-011) e informou que o jurídico de Matheus considera a documentação OK. **Não reabrir como etapa não realizada**. Associar apenas evidência/versão exata do orçamento e escopo do aval jurídico quando houver, sem desautorizar a confirmação recebida.
- **Stack:** a seleção/levantamento técnico já foi realizado nos docs/27–30 e fases F1/F2.0/F2.A; a reunião **não determina reavaliação da arquitetura do zero**. Integrações específicas ainda exigem teste de viabilidade e os gates próprios.

## 3. Ações decorrentes (sem transformar decisão em tarefa duplicada)

| Ação | Responsável na ata | Estado verificável em 13/11 | Encaminhamento GitHub |
|---|---|---|---|
| Definir tabela final e percentual exato do desconto | Gestão / Matheus (decisão comercial) | **Pendente na ata**; não considerar preços citados como aprovados | DEC-084/085, MAT-002/003; escopo F5 Issue #10 |
| Criar dados/questões e aulas **fictícias ou autorizadas** para teste de UI e fluxo | Marina | **Solicitado; não há evidência nesta ata de conclusão** | Relacionar a Issues #8/#9; não inserir dados pessoais reais nem liberar migrações/código pelo Claude por inferência |
| Gravar vídeo introdutório explicando uso da plataforma e trilha | Matheus | **Compromisso registrado; entrega não evidenciada** | Relacionar Issues #8 e #4 se necessário; produção editorial pertence a Matheus |
| Considerar pop-up de boas-vindas no primeiro acesso | Marina (sugestão) | **PROPOSTA**, sem decisão de obrigatoriedade, texto ou fluxo | Design D1.x / Issue #15; não tratar como feature aprovada |
| Desenvolver a estratégia de campanha Travel com o parceiro | Gestão / Matheus, com PM no desdobramento técnico | **Direção de dezembro alinhada**, contrato e calendário exato não documentados | Issue #18 (meta técnica) e eventual backlog comercial distinto; não alterar prazo de 10/12 |
| Detalhar oferta white label posterior | Gestão / Matheus (aspecto comercial); PM (apenas arquitetura futura) | **Princípio alinhado**, detalhes e prioridade futura pendentes | Registrar neste documento; só criar implementação em fase própria se autorizada |
| Definir próximas reuniões por demanda | Marina / Matheus | Modelo de acompanhamento alinhado | Rotina PM; não exigir novo gate |

## 4. Precedência sobre o planejamento anterior e sobre o que veio depois

1. **03/11:** comercialização por curso/trilha com Basic bônus; 3 níveis de serviços; cartão, duração e políticas iniciais conforme ata anterior. **11/11:** mudança específica do **Plano 1 digital** para **direito de acesso por seis meses e uma única compra parcelável**. Não aplicar cegamente à totalidade do catálogo ou dos planos.
2. **11/11:** aprovação por Matheus do **conceito de identidade premium**. **13/11:** aprovação por Marina do protótipo e design system **D1 R2** para as telas F2 — decisão mais específica e vigente. Claude não redesenha o produto.
3. **11/11:** campanha e lançamento em **dezembro**. **13/11:** Marina estabeleceu **meta de plataforma própria, completa e automatizada até 10/12** (Issue #18), sem área externa provisória como substituto. A ata não prova um dia exato “12 de dezembro” — a menção “em 12” no resumo pode se referir ao mês 12.
4. **13/11:** custos apresentados e aprovados comunicados por Marina (MAT-011), jurídico OK informado por Marina. Associar à reunião de 11/11, sem afirmar que aprovação equivale a autorização de implementar, comprar ou publicar.
5. **Nivelamento:** **não usar IA em tempo real**; questões com gabarito pré-preparado. Ensino, conteúdo e parametrização pedagógica seguem com Matheus; a ata de 11/11 não altera essa diretriz.
6. **F2:** F2.0 e F2.A já integradas; diagnóstico F2.B somente leitura já autorizado; implementação F2.B–F8, contratação e deploy requerem ato próprio (Issue #7).

## 5. Questões residuais sem reabrir o que já está decidido

- **Matheus/comercial:** valores finais dos planos e cursos, percentual exato do desconto presencial dentro da faixa acordada, elegibilidade e mudança para preço cheio, detalhes financeiros do modelo semestral no gateway, modelo contratual específico de parceria/white label. Não transferir para Marina decisões financeiras ou pedagógicas.
- **PM/produto:** traduzir o direito semestral fixo em estados de assinatura/compra, vigência e entitlement parametrizáveis; testar compatibilidade do gateway já considerado, sem voltar ao estudo de toda a stack; documentar fluxo de visitante/parceiro e vídeo introdutório como requisitos condicionados às confirmações relevantes.
- **Gestão da evidência:** associar ao GitHub documento de orçamento efetivamente apresentado e eventual identificação do aval jurídico quando disponível; nenhum desses registros anula o aval já confirmado.
- **Titularidade:** Marina ainda precisa indicar proprietária(o) canônica(o) para os alinhamentos estratégicos **ALIN-11-02/03**, antes da criação de fichas DEC definitivas exclusivas em docs/08 ou docs/09.

**Links de execução e controle:** docs/04 (índice), docs/09 (MAT/DEC comerciais), Issues #3 (integrações/custos), #10 (produtos e cobrança), #15 (D1), #18 (meta integral) e PR #19 (auditoria documental antiga). **Esta ata não é autorização de execução técnica.**
