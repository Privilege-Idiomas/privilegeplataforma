# Baseline operacional integral — fechamento dos Blocos 1–6 (DEC-087)

**Privilège Plataforma · 13/11/2026 · Autoria: PM/ChatGPT · Fonte: deliberação de Marina “Perfeito! Pode seguir”, após apresentação conjunta dos seis blocos.**

## 0. Alcance da deliberação e precedência

**APROVADO COMO DIRETRIZ DE ESPECIFICAÇÃO/PLANEJAMENTO:** adotar conjuntamente as propostas da PM dos Blocos 1–6 para transformar o projeto em fases integralmente especificadas, critérios de aceite e backlog rastreável, sem reabrir o que já foi resolvido. **Não equivale a provar hipóteses técnicas nem homologar parâmetros que foram apresentados como condicionados**. O Bloco 7 (reconciliação histórica) é tarefa editorial da PM e não requer redeliberação de produto. O aceite desta baseline **não concede ao Claude permissão para escrever código**, contratar serviços, alterar parâmetros de autenticação, fazer merge, processar dados reais, ativar clientes ou implantar em produção. A próxima autorização específica da F2.B continua obrigatória na Issue #7. Nenhum PR documental tem merge automático.

**Fonte de verdade:** GitHub (decisões, Issues, docs, código, testes, evidências, aprovações); Notion somente visão executiva derivada. Claude implementa, PM cuida de design/UX, planejamento e revisão, Marina dá aceite por lote; Matheus decide exclusivamente suas alçadas comunicadas por Marina. DEC-086 exige Claude integrador principal com auxiliares por demanda e nunca reduz segurança.

**Objetivo de negócio:** plataforma **própria, integral e automatizada**, meta aspiracional de operação para clientes reais **10/12/2026**. Sem recorte reduzido, área de membros terceirizada ou execução manual como entrega equivalente; a viabilidade da data **não está comprovada**. F1 + F2.0 + F2.A aceitas e integradas; D1 visual F2 Revisão 2 aceita; F2.B/C/D e F3–F8 sem ordem de implementação.

**Regras que NÃO são pendências:** nivelamento opcional com banco previamente preparado/revisado/aprovado e nota por regra determinística (**SEM IA em tempo de prova e SEM obrigação de geração offline por IA**); vídeo 100% não exigido; prática opcional; avaliação obrigatória e não eliminatória, tentativas ilimitadas, revisão sugerida se nota <6, apoio sugerido após 3 módulos diferentes com última nota <6; avaliação interrompida expira 30 dias **desde o início**; Basic/Start como bônus, Travel/Business por curso/trilha; P1 somente digital sem plantões/particulares, P2 2 plantões/mês, P3 4 plantões + 2 particulares de 50 minutos/mês; plantões 20 min/10 vagas/reserva obrigatória, crédito não cumulativo e regra de desmarcação 2h; Plano 1 seis meses fechados, compra única parcelável (DEC-084); desconto presencial na faixa 20–30% e reversão quando terminar vínculo (DEC-085), percentual exato ainda comercial.

## 1. Bloco de segurança/autenticação F2.B

**Diretriz adotada:** preservar SEC-01–SEC-19 conforme docs/45, respeitando exclusão expressa da hipótese de retenção de logs 30 dias, e testar a implementação mais segura sem suposições sobre recursos do GoTrue ou Supabase. **A-lite (BFF server-only, tokens não acessíveis por JS, cookies HttpOnly+Secure+SameSite apropriado, CSRF/Origin)** é a candidata preferencial à prova técnica, **não arquitetura final aprovada**. SSR padrão deve integrar o comparativo.

| ID | Regra/alvo | Evidência/gate |
|---|---|---|
| B1-01 | Senha mínimo **12 caracteres**; proposta condicional de **máximo 72 bytes UTF-8** **apenas se** a versão real do GoTrue impuser esse limite, sem truncamento silencioso | Testar caracteres multibyte, comprimento, APIs diretas, UX e camada servidor. Se incompatível, retornar à gestão antes de mudar SEC-02 |
| B1-02 | Recuperação **20 min** e ativação **30 min** conforme SEC-09/10; proposta condicional de **OTP global 20 min** se o provedor não puder garantir as validades distintas por todas as rotas, inclusive /verify direta | PoC deve provar validade em toda rota; adoção final da uniformização somente após resultado técnico/documentação da alteração da diretriz |
| B1-03 | JWT alvo 30 min, rotação refresh, invalidação efetiva de sessões e testagem de token antigo | Testes de API, PostgREST, RPC/Storage se usadas, RLS e isolamento cross-account; falhar fechado |
| B1-04 | Limites de tentativa/anti-enumeração de SEC-11 também contra endpoints diretos; no BFF apenas não basta | Testar bypass, usuários inexistentes, bloqueio DoS por IP compartilhado, concorrência; custo/infra de edge se necessário |
| B1-05 | MFA/TOTP com AAL2 em ações de admin/professor; privilégios e fluxo de recuperação separados | Sem abrir perfil privilegiado real antes do modelo de alçada, MFA e testes negativos |
| B1-06 | Contrato de auditoria de aplicação deve ser compatível com migração SQL e eventuais SECURITY DEFINER | ADR, migração aditiva somente no lote autorizado; logs mínimos sem segredos e sem retenção presumida |
| B1-07 | Sessões comuns: alvo inatividade 8h e absoluta 24h; privilegiadas: inatividade 30min, absoluta 8h (SEC-05/06/19) | Provar suporte técnico real, custos e proteções server-side. Não substituir proteção obrigatória por UI |

**Gates distintos:** (a) aceitação documental dos critérios — esta deliberação; (b) autorização futura **específica** de PoC B1-0; (c) prova técnica e escolha arquitetural; (d) custos/controles relevantes; (e) autorização de F2.B.1/B.2; (f) aceite PR e merge; (g) operação pública independente. O diagnóstico somente-leitura anterior NÃO autorizou PoC.

## 2. Bloco de contas, perfis e jornadas

| ID | Comportamento operacional especificado | Exceções/gates |
|---|---|---|
| B2-01 | Ativação após compra verificada por evento confiável; dois caminhos já aprovados (e-mail ou continuidade com prova de posse); identidade única por pessoa, separada de contrato e de beneficiário | Não conceder curso por login, redirecionamento ou ID de checkout não conciliado; nenhuma compra real antes de integração autorizada |
| B2-02 | Contas existentes e migração reconciliadas sem união automática por nome/telefone; e-mail duplicado exibe orientação neutra e recuperação | Migração com identidade ambígua requer verificação humana; nunca sobrescrever progresso/certificado |
| B2-03 | Recuperação sem acesso ao e-mail fica em fila excepcional de suporte, com verificação independente e trilha de autorizações | Pagador não toma controle de login acadêmico só por custear o contrato; menores/regras de tutela condicionados |
| B2-04 | Papéis individualizados, menor privilégio, negação por padrão, aprovação/auditoria de concessões e revogações; nenhum login de admin compartilhado | Operações sensíveis com MFA conforme SEC, autorização servidor e RLS; matriz fina por ação/dado a produzir |
| B2-05 | Menor possui identidade acadêmica distinta; vínculo com responsável é objeto separado; sem acesso cruzado a notas e dados privados | Manter fluxo guardian bloqueado até segurança e salvaguardas aplicáveis comprovadas; não inferir parecer jurídico integral de declaração genérica de OK |
| B2-06 | Boas-vindas no primeiro acesso podem aparecer uma vez e ser dispensadas, sem impedir estudar | Conteúdo e composição visual definitivos pela PM/UX; não bloquear login nem acesso, salvo exigência legal distinta |
| B2-07 | Usar exclusivamente D1 R2 de 16 telas como referência F2; design F3–F8 preparado pela PM antes da implementação visual de cada lote | Direitos de imagem/ativos externos comprovados antes da publicação real |

**Aceite mínimo:** E2E com dois pagadores, vários beneficiários, sessão revogada, e-mail já existente, menor bloqueado, tentativa de privilégio e acesso direto a registros de terceiros.

## 3. Bloco aprendizagem, editorial e certificados

| ID | Contrato funcional adotado | Configuração/condição |
|---|---|---|
| B3-01 | Tentativa tem início explícito, autosave por resposta, expiração 30 dias após início, alerta antes de expirar e nova tentativa permitida com acesso válido | Canais aprovados para especificação: aviso interno + e-mail transacional quando autorizado/configurado; antecedência e política de retenção são **configuráveis**, sem número ou descarte real inventados |
| B3-02 | Banco de avaliação e nivelamento pré-revisado, publicado com validação de suficiência; distribuição aleatória e embaralhamento de questões/alternativas conforme DEC-074–080 | Banco pedagógico real, faixas e quantidade dependem do responsável; usar só fixtures sintéticas até fornecimento |
| B3-03 | Alteração curricular cria versão; progresso e resultados do aluno em andamento preservados com reconciliação explícita, jamais reescrita silenciosa | Política de equivalência de conteúdos com impacto real depende de aceite pedagógico competente |
| B3-04 | Correção retroativa de gabarito exige relatório de impacto (tentativas, conclusão, certificado), aprovação por alçada pedagógica registrada e comunicação aos afetados antes de recálculo | Não reprocessar automaticamente; autoridade concreta/designação editorial ainda requer confirmação |
| B3-05 | Certificado PDF privado, emissão única por conclusão; re-download estável; verificação pública com dados minimizados, revogação/substituição versionadas e auditadas | Modelo de certificado/carga horária e retenção legal são insumos externos; não liberar exposição pública sem validação |
| B3-06 | KPIs de progresso contam **aulas concluídas por realização da avaliação**, nunca nota mínima eliminatória; notas <6 são indicador de orientação, não reprovação | Reconciliar KPI-05/07 e critérios anteriores; relatórios devem conservar histórico/versão e origem |
| B3-07 | Biblioteca/revisão de exercícios respeita direito individual do curso em API e UI; trilhas não duplicam conteúdos nem criam direito de acesso | Indicador de curso bloqueado só agregado, sem enunciados ou listas individuais protegidas |

**Aceite:** testar nota 0 concluindo etapa sem liberar exercício de curso não contratado; três módulos distintos com últimas notas baixas geram sugestão; expiração com retomada e novo intento; gabarito corrigido não altera certificado silenciosamente.

## 4. Bloco operação docente, reservas e atendimento

| ID | Regra operacional | Exceção/QA |
|---|---|---|
| B4-01 | Docente publica disponibilidade conforme permissões; aluno escolhe data/hora antes do docente em particular; plantão reserva vaga previamente | Janela máxima e antecedência mínima de reserva configuráveis; escala real e remuneração pertencem à operação |
| B4-02 | Reserva confirmada em transação atômica com prevenção de concorrência, colisões professor/sessão e lotação de 10; negar confirmação fictícia | Teste simultâneo para última vaga e mesmo docente, e repetição idempotente de evento |
| B4-03 | Plantão 20min com P2/P3 2/4 créditos; P1 nenhum; particular 50min P3 2 créditos isolados; não cumulativos | Nunca usar crédito de particular para plantão; mês/corte financeiro precisam seguir contrato efetivo |
| B4-04 | Desmarcação de plantão com >=2h preserva crédito; <2h e falta consomem; plantão lotado sugere sessão alternativa sem lista de espera | Cancelamento pela escola preserva/restaura apenas créditos de alunos com reserva confirmada, conforme política vigente |
| B4-05 | Ausência/indisponibilidade do professor preserva crédito e permite reagendar; sem substituto abrir ticket para solução individual | Chegada tardia, conexão parcial e contestação geram ocorrência auditável, sem automatizar multa/compensação não decidida |
| B4-06 | Avisos internos e e-mail sobre confirmação, alterações, cancelamento, reunião e lembrete, com estados confiáveis | Falha de envio não invalida reserva; não exibir URL ou dado sensível a destinatário incorreto |
| B4-07 | Link de reunião só para participante autorizado na janela válida; integração desacoplada do provedor e contingência visível | Provedor e contas docentes reais são condicionantes da ativação, não uma decisão de mudar stack |

**Aceite:** concorrência e idempotência; proteção URL/API; consumo/estorno; cancelamento por escola; horário local/fuso; notificação indisponível; aluno sem crédito bloqueado.

## 5. Bloco comercial e integrações

| ID | Regra/modelo | Dependência |
|---|---|---|
| B5-01 | Matriz de direitos separa (a) produto curso, (b) plano de serviços, (c) contrato por aluno/beneficiário, (d) status de pagamento e (e) vigência | Basic/Start bônus; Travel/Business separados, sem acesso ao curso não contratado |
| B5-02 | P1 digital: seis meses fechados e compra única parcelável, conforme DEC-084; não converter parcelamento em cobrança recorrente | P2/P3 e outras durações seguem regimes comerciais aprovados específicos; não extrapolar |
| B5-03 | Upgrade imediato proporcional ao tempo restante e diferença dos planos; downgrade só na renovação; apresentar condições antes de confirmar | Fórmula monetária, arredondamento, créditos já usados e preço dependem de validação comercial/gateway; nenhuma regra financeira inventada |
| B5-04 | Renovação é escolha explícita do contratante onde o produto tiver renovação; inadimplência tem tolerância já aprovada de 30 dias desde vencimento | Definir retentativas reais após escolha/validação de gateway; preservar direitos durante tolerância e registrar transições |
| B5-05 | Desconto presencial conforme DEC-085: faixa aprovada 20–30%, volta ao preço cheio quando perder vínculo | Percentual exato e prova de vínculo dependem de Matheus; não precificar sem confirmação |
| B5-06 | Gateway via porta de integração desacoplada, com webhook autenticado, idempotência, reconciliação, estorno, chargeback e trilha | Sandbox prova capacidades antes da ativação; compra real/gasto/contrato exige gate próprio |
| B5-07 | E-mails, domínio, media, videoconferência e serviços de operação têm inventário de credenciais, licenças e testes de retorno/falha | A aprovação de custos informada por Matheus (MAT-011) **não identifica automaticamente** quais SKUs, cotas e gastos foram aprovados |
| B5-08 | White label é diretriz estratégica futura; preservar extensibilidade sem incluir produto multiempresa funcional como requisito novo do lançamento | Qualquer implementação de tenant/branding, comercialização ou isolamento de empresas requer escopo formal posterior |

**Aceite:** compra P1 6 meses sem renovação indevida; duas compras simultâneas idempotentes; pagamento atrasado; plano vs curso; campanha presencial terminada; atualização de direito sem perda de histórico.

## 6. Bloco administração, qualidade, entrega integral

| ID | Critério de prontidão | Evidência |
|---|---|---|
| B6-01 | Admin com permissão por operação e escopo; concessões/revogações auditadas; alterações de conteúdo aprovadas e versionadas | Testes negativos UI/API/RLS, ator, motivo e ID de correlação |
| B6-02 | Suporte com protocolo, estados definidos e capacidade de reabrir sem criar ticket falso | SLA e prioridades parametrizáveis, não declarar prazo inexistente como compromisso |
| B6-03 | Nota individual do docente nunca acessível ao professor; média só após cinco válidas e parecer/controle anti-inferência | Risco de inferência por mudança unitária; não habilitar visualização até teste e condições pertinentes |
| B6-04 | KPIs com fonte, filtro e fuso explícitos; dado ausente não vira zero; exportação com autorização e minimização | Rever contagem de concluídos sem nota eliminatória; logs de exportação sem payload sensível |
| B6-05 | Operação exige proteção de segredos, backups+restauração, monitoramento, incidentes, reversão, acessibilidade e testes de carga | Ensaios documentados com resultado verificável antes de publicar, além de proteção a menores |
| B6-06 | Homologação integral E2E atravessa aquisição, login, direito de curso, aprendizagem, avaliação, agenda, docente, faturamento, suporte e administração | Não classificar tela demonstrativa ou mock como funcionalidade comercial operando |
| B6-07 | Fases F2.B–F8 devem ter Issue, dependências, critério negativo, responsável, estimativa, evidência e gate por lote | Protocolo vinculante docs/54; aprovação de fase não implica release |
| B6-08 | Meta de 10/12 é objetivo de negócio, **não prazo validado**; reestimativa por F2.B–F8 e dependências externas | Registrar caminho crítico, recursos, revisão PM e alertas P0 antes de assumir calendário fechado |

## 7. Classificação de pendências — sem rediscutir o aprovado

- **Categoria A / resolvida aqui:** procedimentos de preparação de fases, papel da PM, parametrização (sem hardcode de valores externos), segurança/negação por padrão, revisão de histórico, testes adversariais.
- **Categoria B / prova técnica antes de decisão final:** A-lite vs SSR; senha 72 bytes se exigido pelo GoTrue; OTP 20/30; bypass de antiabuso; revogação RLS; auditoria SQL/TS; compatibilidade e custo de timebox/MFA. **Nenhuma destas provas foi executada pelo presente documento.**
- **Categoria C / dependência externa real:** preços e percentuais exatos, bancos e faixas pedagógicas, materiais editoriais certificados e audiovisuais, escala e remuneração docentes, provedor gateway/reunião e contas/licenças, evidência documental específica do jurídico, política final de retenção e aprovação de gastos específicos. Registrar dono e prazo, não preencher com palpite.
- **Categoria D / gate de execução:** qualquer PoC, Claude F2.B–F8, credencial real, gasto, merge e deploy exige autorização expressa correspondente.

## 8. Definição de “pronto para enviar ao Claude”

A fase tem **baseline de requisitos e telas aprovadas pertinentes**, IDs DEC/REQ rastreados, escopo e exclusões, endpoints/entidades/estados e exceções especificados, fluxos sem ambiguidades bloqueadoras, fornecedor/segurança comprovados quando necessários, testes positivos e negativos, previsão e dependências, custo e alçada verificados, Issue com ordem assinada por Marina. Claude **não escolhe política de produto**; dúvidas emergentes voltam como exceção de Issue sem interromper frentes independentes. Após execução: PR pequeno, CI, testes, screenshots apenas quando pertinentes, relatório, revisão PM, aceite/merge expressos e autorização **nova** para o lote seguinte.

**Este documento é baseline integral para planejamento, não uma autorização de desenvolver e não prova de que todos os insumos externos ou requisitos de produção estejam concluídos.**
