# Privilège — Proposta de arquitetura e custos para decisão de Matheus
**Data da pesquisa:** 2026-11-07. **Autoria:** PM (proposta para validação). **Status:** PROPOSTA G2/G3, não aprovada para contratação, implementação ou despesa.
**Premissas confirmadas:** GitHub fonte canônica, Notion somente relatório executivo, Claude Code executor disponível, 3 cursos-base (Basic, Travel, Business), três níveis de planos, checkout só cartão, assinaturas mensal e compromissos de 3/6/12 meses, plantões coletivos com reserva e particulares, avaliações sem reprovação, menores com responsável, certificados persistentes.

## 1. Decisão gerencial e limites
Marina autorizou, em 07/11, **aprovar recomendações de parametrização interna sob sua competência para finalizar a especificação**, acelerar G2/G3 e preparar apresentação a Matheus. Isso NÃO equivale à aprovação do patrocinador, parecer jurídico, compra, liberação da programação ou preços. Registrar decisões internas com premissas conservadoras e reversíveis; não inventar taxas, número de alunos, horas de trabalho ou valores reais.

## 2. Alternativas avaliadas (proposta)
| Critério | A — Next.js + Supabase + Vercel (preferida) | B — Next.js + PostgreSQL hospedado/VPS | C — LMS pronto + extensões |
|---|---|---|---|
| Rapidez para construir regras específicas | Alta | Média | Baixa–média |
| Assinaturas, menores, créditos e agenda | Sob medida, sem contorno de plug-ins | Sob medida, com mais DevOps | Dependência de extensões |
| Custos de infra inicial | Moderados e mais previsíveis | Menor mensal aparente, maior operação | Licenças/plug-ins variáveis |
| Segurança/autorização | Supabase RLS + autorização no servidor + auditoria própria | Tudo sob responsabilidade da equipe | Depende de extensões |
| Evolução | Alta | Alta, com operação maior | Limitada em regras de negócio |
**Recomendação G2:** A, sujeita a validação formal e teste de viabilidade de pagamentos/Meet. Não criar microsserviços, Kubernetes, infraestrutura própria de vídeo ou IA remunerada por resposta do aluno.

## 3. Stack recomendada
- **Código e execução:** monorepo GitHub; Next.js (App Router), TypeScript, React, Tailwind, componentes acessíveis; Claude Code como executor com PRs e testes sob revisão humana. GitHub Issues/Projects/Actions para absolutamente tudo; Notion recebe apenas extratos.
- **Dados, acesso e arquivos:** Supabase PostgreSQL + Auth, RLS, migrações, backups; dados pedagógicos, financeiros, reservas, avaliações, crédito, contratos e auditoria com chaves e segregação por aluno/pagador. Armazenamento de arquivos privados (certificados/artefatos) em Supabase Storage inicialmente; R2 como alternativa quando volume/custo justificar.
- **Hospedagem e API:** Vercel Pro para frontend/rotas e endpoints, jobs via cron e filas gerenciadas somente quando necessário; idempotência e transações para cobranças/reservas/créditos.
- **Vídeos gravados:** Cloudflare Stream com acesso restrito e mecanismos de token conforme capacidades verificadas; não armazenar vídeo em banco ou na Vercel.
- **Aulas particulares/plantões:** Google Meet como integração candidata; comparar requisitos de licenciamento, API, criação de espaços, salas e políticas para menores antes de selecionar. Agenda e lotação gerenciadas pelo próprio sistema.
- **Pagamento:** Mercado Pago Assinaturas ou Asaas, candidatos BR. **Não selecionar fornecedor sem prova técnica de:** cartão-only, ciclos de 1/3/6/12 meses e compromissos, escolha opt-in/opt-out de renovação, alteração com rateio, cobranças rejeitadas/retentativas, cancelamento e webhook; tarifas e contrato reais. Se provedor não suportar modalidade, adaptar a orquestração apenas mediante avaliação e contrato.
- **E-mail:** Resend para transacionais, sujeito à integração e entregabilidade; nunca supor e-mail grátis ilimitado.
- **IA:** Claude para desenvolvimento, não para gerar questões individualmente por aluno. Questões, gabaritos, feedback e orientações aprovados previamente e reproduzíveis. Não confundir assinatura do Claude Code com API paga embutida na plataforma.
- **Segurança/qualidade:** controle de acesso por recurso e papel (inclusive minors), cifragem, secrets fora do GitHub, logs sem dados sensíveis, trilha de alterações administrativas, backups testados, monitoração, testes automatizados, rate limiting, anti-fraude e revisão jurídica antes de tratar dados reais.

## 4. Tarifas públicas de referência (USD, pesquisa de 2026-11-07)
| Item | Preço publicado | Condição e fonte |
|---|---|---|
| Supabase Pro | a partir de **US$ 25/mês** | 1 projeto Micro coberto com créditos; mais projetos/compute/storage podem gerar cobrança. https://supabase.com/pricing ; https://supabase.com/kb/faqs/platform/database-only-cost |
| Vercel Pro | **US$ 20/mês** plano base / seat conforme configuração | consumo acima de crédito e assentos adicionais à parte. https://vercel.com/pricing |
| Cloudflare Stream — armazenamento | **US$ 5 por 1.000 minutos armazenados/mês** | capacidade pré-paga; arredondamentos por lotes. https://developers.cloudflare.com/stream/pricing/ |
| Cloudflare Stream — reprodução | **US$ 1 por 1.000 minutos entregues** | variável por consumo, inclusive preload. https://developers.cloudflare.com/stream/pricing/ |
| Resend Free / Pro | **US$ 0 até 3.000 e-mails/mês** (limite diário) / **US$ 20/mês por 50.000 e-mails** | condições de plano e excessos. https://resend.com/pricing |
| GitHub Free / Team | **US$ 0 / US$ 4 por usuário/mês** | colaboração e recursos avançados alteram valor. https://github.com/pricing |
| Cloudflare R2 opcional | **US$ 0,015 por GB-mês** de armazenamento Standard, além de operações; faixa gratuita disponível | usar só se necessário. https://developers.cloudflare.com/r2/pricing/ |
| Gateway de cartão | **COTAÇÃO OBRIGATÓRIA** | tarifas variam conforme contrato, antecipação, parcela, prazo de saque e bandeira. Asaas não cobra mensalidade de assinatura, mas cobra pelas liquidadas: https://central.ajuda.asaas.com/hc/pt-br/articles/31997100041371 ; Mercado Pago: https://www.mercadopago.com.br/developers/pt/docs/subscriptions/overview |
| Meet/Workspace | **COTAÇÃO E VALIDAÇÃO OBRIGATÓRIAS** | permissões de sala, licenças por professor, restrições de menores e integrações não precificadas. https://developers.google.com/workspace/meet/api/guides/overview |
| Claude Code | **JÁ DISPONÍVEL segundo Marina**, desembolso incremental não demonstrado | verificar plano, limites e se ferramentas ou chamadas de API gerarão custos adicionais; não atribuir US$0 como custo total do trabalho. https://docs.anthropic.com/en/docs/claude-code/getting-started |

## 5. Cenários calculáveis de infraestrutura — não são cotações nem orçamento total
**Hipóteses iguais para comparação:** 1 projeto Supabase Pro (US$25); 1 Vercel Pro (US$20); Resend Free (US$0 enquanto couber); 2.000 minutos gravados na biblioteca Stream (US$10/mês); cada aluno assiste 300 minutos/mês; 1 aluno = 300 minutos entregues. Sem replays extras, consumo de backend acima de franquias, Google Meet, domínio, tributos/IOF/câmbio, gateway, suporte, profissionais, jurídico, serviço de backups extra ou contingência.
| Alunos ativos | Minutos entregues/mês | Stream reprodução | Infra base ilustrativa (25+20+10+reprodução) |
|---:|---:|---:|---:|
| 100 | 30.000 | US$30 | **US$85/mês** |
| 500 | 150.000 | US$150 | **US$205/mês** |
| 2.000 | 600.000 | US$600 | **US$655/mês** |
**Atenção:** estes são *pisos de cenário*, não promessa de custo completo. Se o plano de e-mail Pro for necessário, adicionar US$20; se outros projetos Supabase/assentos Vercel e necessidades de monitoramento forem necessários, estimar separadamente. Variação por aluno no cenário é US$0,30/mês em vídeo apenas; demais custos variáveis dependem de uso real e contratos.

## 6. Custos de produção e operação — registro para cotação G3
| Componente | Implantação / esforço | Fixo recorrente | Variável por aluno/uso | Operacional/admin |
|---|---|---|---|---|
| UX, front-end e páginas públicas | estimar por histórias e telas | Vercel | tráfego/compute | revisão e conteúdo |
| Identidade, pagador e menores | implementar fluxos, RLS, validações | Supabase/monitoramento | autenticação/e-mails | suporte, LGPD e recuperação |
| Conteúdo, trilhas e avaliações | editor/banco, versões, autosave e gráficos | banco/arquivos | respostas, gravações, consultas | produção pedagógica e QA |
| Vídeo | upload, tokens, player e progresso | armazenamento por minutos | entrega em minutos | produção e edição de videoaulas |
| Assinatura/cartão/cobrança | integração, webhooks, testes, conciliação | eventualmente gateway/serviços | percentual/taxa por transação + estornos | conciliação, inadimplência |
| Particular/plantão | calendário, capacidade, créditos, Meet, regras de cancelamento | licenças Meet/Workspace conforme operação | professor-hora, sessões, notificações | escalas, faltas, reposições |
| Certificado/QR e suporte | PDFs, código privado/verificador, tickets | armazenamento, domínio | geração, downloads, e-mail | atendimento, auditoria |
| Segurança, LGPD, backups e monitoria | políticas, revisão, testes | monitoria/backup | logs e volume | responsável segurança/jurídico |
| Claude/GitHub/Notion | gestão de PRs, GitHub Projects, QA | plano Claude existente, GitHub conforme seats | eventual consumo excedente | revisão humana, PM |
**Horas de produção ainda não estimadas por especialista**; podem ser dimensionadas por Claude + revisão humana após backlog técnico, mas não substituir cotação por afirmação de projeto 'gratuito'. Salário/tempo da equipe, mão de obra pedagógica e docentes são custos reais, ainda não cotados.

## 7. Gates e próximos entregáveis
1. **G1 — consolidado internamente com ressalvas externas:** regras funcionais DEC-025–080 foram documentadas; remanescentes de preço/contrato, graduação exata do teste, DEC-024 e pareceres legais permanecem explícitos. G1 não está formalmente homologado pelo patrocinador.
2. **G2 — recomendação arquitetural PREPARADA, não escolha aprovada:** executar revisão de viabilidade do gateway/Meet, segurança e licença, sem contratação.
3. **G3 — modelo preliminar de custos PREPARADO, não orçamento:** solicitar tarifas locais, Google Workspace, domínio, custos de docentes e equipe, cenário real de alunos e vídeo; detalhar implantação por histórias e margens de contingência.
4. **G4 — priorização/MVP** após validação do escopo, stack e custos; não presumir prazo de 30 dias.
5. **G5 — somente com autorização expressa:** Claude executa tarefas do GitHub após revisão, gate financeiro e jurídico; Notion apenas relatório derivado.

## 8. Pauta executiva proposta a Matheus
**Decidir:** 1) número de alunos previstos (100/500/2.000 ou outros), catálogo e preços por plano/curso e composição de serviços; 2) fórmula final de rateio, renovação e compromissos; 3) canal de cobrança em cartão; 4) licenças/operadores/professores e volume de vídeo; 5) limite de orçamento e quando contratar serviços; 6) confirmar DEC-024 (reprodução integral não obrigatória) e registrar eventual ressalva; 7) revisar parecer jurídico quando recebido. Com essas informações, fechar cenário R$ e decisão de stack, preservando gates.
