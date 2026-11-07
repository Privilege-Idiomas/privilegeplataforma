# Privilège — Custos a definir e transição para cronograma por entregas

**Data:** 2026-11-07  
**Estado:** inventário de pendências; não aprova fornecedor, compra, preço, escopo ou início de execução.  
**Governança:** GitHub é a fonte integral; Notion apresenta apenas o resumo executivo. Preservar docs/27, 28 e 29 sem supressões.

## Custos futuros ainda a definir

| Ordem | Item | Finalidade | Por que o preço está pendente / como fechar |
|---|---|---|---|
| 1 | Gateway de pagamentos | Receber cartão, cobrar recorrência e parcelamentos, reembolsar e tratar contestação. | Falta comparar e contratar provedor, modalidade e tarifas efetivas por operação. |
| 2 | Videoconferência | Aulas particulares e plantões coletivos. | Falta validar plataforma, limites de participantes, duração, contas docentes e licenças. |
| 3 | IA para produção das videoaulas | Converter roteiros aprovados em vídeo, narração, personagens, imagens e legendas. | Falta testar qualidade, direitos, duração, créditos e edição; custo de produção, não por aluno. |
| 4 | IA para **elaboração** do teste de nivelamento | Criar questões, alternativas e gabarito sob revisão pedagógica. | Falta método/ferramenta de criação; **a avaliação dos alunos será corrigida pela plataforma com gabarito, sem IA por aluno**. |
| 5 | E-mails e notificações | Cadastro, recuperação de senha, reserva, confirmação e cobrança. | Resend Free é hipótese inicial; volume, remetente, entregabilidade, eventual SMS/WhatsApp e planos pagos não confirmados. |
| 6 | Infraestrutura complementar | Domínio, contas corporativas, armazenamento de materiais, backups, monitoramento, segurança e excedentes de Supabase/Vercel/Cloudflare. | Depende de limites, volume, fornecedores e necessidade real; evitar dupla contagem com serviços propostos. |
| 7 | Tributos, contratos e conformidade | Tributação incidente sobre vendas, documentação comercial, LGPD e revisão jurídica. | Regime tributário e orçamento profissional dependem de validação. |
| 8 | Produção e lançamento | Eventual edição, legendas, acessibilidade, identidade visual, homologação e trabalho não coberto pelas ferramentas. | Custos dependem do método de produção e recursos contratados; separar desembolso inicial e recorrente. |

**Importante:** com 0 alunos, R$302,50/mês continua sendo apenas a referência dos serviços tecnológicos modelados, não custo total definitivo. Custos adicionais são riscos de contratação, **não despesas já incorridas**. Preços de referência e escalas docentes atuais permanecem hipóteses até validação comercial.

## Princípios para o planejamento e execução

- **GitHub contém absolutamente tudo:** decisões, requisitos, issues, aceites, dependências, código, testes, riscos, bugs e evidências. **Notion é exclusivamente espelho executivo de progresso para Matheus**; nunca substitui GitHub.
- **Claude executor, Marina PM:** Claude implementa um lote pequeno, entrega branch/PR, testes e evidências; Marina inspeciona e valida critérios de aceite, pede ajustes se necessário, e só então revisa/autoriza o lote seguinte. A liberação é explícita; não presumir execução contínua autorizada a partir deste documento.
- Intervenção durante o lote somente para dúvida, bloqueio ou entrega concluída. Cada fase deve ter objetivo, dependências, definição de pronto, testes, previsão e responsável.
- Produção pedagógica em paralelo: preservar os roteiros originais de Matheus integralmente; criar **prompt audiovisual derivado** para uma aula-piloto, testar ferramentas e aprovar template antes de converter as demais **118 aulas**. Registrar custos/licenças e aprovação antes de produção em série.
- Cronograma e datas de entrega são **estimativas condicionais** até inventariar issues, fechar decisões e verificar capacidade do executor.

## Sequência inicial proposta (não aprovada)

| Etapa | Entrega verificável | Condição de aceite |
|---|---|---|
| P0 — fechamento | Auditar backlog/decisões abertas, dependências comerciais/jurídicas e stack G2; mapear escopo por entregas. | Nenhuma pendência bloqueadora sem responsável/decisão; aprovar baseline de produto e stack. |
| P1 — base | Repositório operacional, ambiente, autenticação, permissões e estrutura dos painéis. | Deploy de homologação, testes e revisão de segurança de papéis. |
| P2 — aprendizagem | Catálogo, cursos, módulos, vídeos, biblioteca de exercícios, avaliações e progresso. | Jornada aluno testada ponta a ponta; reprodução e conclusão corretas. |
| P3 — comercial | Planos, gateway, assinaturas, cobranças, direitos de acesso e área do pagador. | Cobranças sandbox e acesso com falhas/estornos testados. |
| P4 — docência | Agenda e disponibilidade, agendamentos, plantões, créditos, regras de faltas e professor. | Sem dupla reserva, limites de turma, autorização e rastreio testados. |
| P5 — operação | Gestão administrativa, suporte, indicadores, certificados/QR e auditoria. | Emissão/verificação de certificados e permissões administrativas testadas. |
| P6 — lançamento | Segurança, LGPD, backup, teste de carga, monitoramento, homologação e publicação. | Checklist de lançamento e aceite final explícitos. |

**Próxima ação da PM:** confrontar esta proposta com os documentos/questões existentes antes de abrir issues, distribuir responsabilidades ou firmar datas. Manter separados riscos técnicos e decisões exclusivas de Matheus.
