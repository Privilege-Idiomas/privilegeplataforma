> **ATUALIZAÇÃO VIGENTE 13/11/2026 — DEC-087:** este arquivo inclui registros históricos. Para comportamento operacional, consultar [docs/53](53-baseline-operacional-integral-decisao-087-2026-11-13.md) e [docs/54](54-protocolo-handoff-aceite-fases-dec-087.md). **Regras vigentes:** nivelamento opcional sem IA; avaliação obrigatória e não eliminatória, tentativas ilimitadas; 100% de vídeo não obrigatório; plantões com reserva de 20 min e até 10 pessoas, P1/P2/P3 = 0/2/4, P3 com duas particulares mensais de 50 min. **F1/F2.0/F2.A integradas**, design D1 R2 aceito; **F2.B–F8 ainda sem liberação de código**. Escopo integral proprietário até 10/12 é meta, não viabilidade garantida. DEC-084/085 e DEC-086 prevalecem sobre ofertas/métodos anteriores; preço/fornecedor/retenção/parecer específico dependem de evidências e alçadas. Não tratar prazo, parâmetro técnico ou hipótese antiga abaixo como autorização vigente.

# Detalhamento funcional transversal — cinco frentes finais

**Data:** 2026-11-02  
**Status:** especificação de PM em elaboração, iniciada por autorização de Marina para **avançar nas cinco frentes**. Regras marcadas **PROPOSTA** são recomendações operacionais, não novas decisões automaticamente aprovadas. Regras **VIGENTES** apenas operacionalizam decisões já aprovadas. Parâmetros comerciais/pedagógicos de Matheus não são alterados.  
**Origem:** auditoria `docs/10-auditoria-cobertura-funcional.md` (AUD-004/007/008/009), DEC-035/070 e REQ-049.

## Deliberação posterior — DEC-071 / REQ-050 (2026-11-02)

Marina **aprovou integralmente dez regras operacionais**, transformadas em DEC-071/REQ-050: recuperação de senha com link temporário de uso único; alteração de e-mail com segurança e representação dos menores; atualização simples e verificação de vínculo responsável; cinco grupos de permissões administrativas configuráveis e cumulativos por autorização; auditoria das operações sensíveis; ocorrência e reagendamento por ausência em particular sem pressupor política comercial; substituição de docente ou suspensão comunicada em plantão coletivo; fluxo rascunho → revisão → publicado com preservação de progresso e certificados; suporte protocolado em três estados; definição de alunos ativos/conclusão/cobertura de plantões e indicadores financeiros baseados em registros reais; exportação controlada CSV/Excel.

**Precedência:** esses pontos deixam de ser apenas propostas e passam a **VIGENTES**, observados os limites exatos da DEC-071/REQ-050. Outras propostas deste documento (ex.: limiar para médias docentes com poucas notas, SLAs, prazos de retenção, acesso administrativo excepcional, fórmulas não expressamente aprovadas e mecanismos específicos de contingência) **continuam propostas**, não presumir aprovação por associação. Regras comerciais de Matheus, jurídico, custos, stack e execução permanecem pendentes.

## Deliberação posterior — DEC-072 / REQ-051 (2026-11-02)

Marina aprovou funcionalmente seis controles complementares: (1) processo de recuperação excepcional com validação de identidade ao perder o e-mail; (2) ocultação da média docente ao próprio professor até atingir **limiar mínimo de avaliações válidas a definir**, mantendo ranking/notas individuais exclusivamente internos da administração; (3) revisão de impacto antes de alterar retroativamente avaliações publicadas; (4) regras de participação e moderação em plantões coletivos com proteção de menores, **reserva prévia obrigatória** (20 min; até 10 participantes); (5) justificativa, agente identificado e auditoria em intervenções sensíveis, conforme papel autorizado; e (6) cada indicador deve ter fonte, definição e período, **nunca converter ausência de dados em zero**.

**Status:** as seis regras são **VIGENTES** conforme DEC-072 e REQ-051; respectivos **parâmetros e fluxos de implementação não estão automaticamente aprovados**. A política concreta de limiar, recuperação de identidade, moderação, retroatividade acadêmica, alçadas, fontes e periodicidade de KPIs, validações jurídicas e decisões comerciais/pedagógicas de Matheus continuam pendentes. Esta deliberação complementa DEC-071/REQ-050 sem revogar regras anteriores nem autorizar stack, custos ou execução.

## F1 — Jornadas excepcionais e estados de conta

| Fluxo | Regra vigente | Detalhamento proposto para validação |
|---|---|---|
| Cadastro e ativação | DEC-036–043: compra na landing, ativação segura, credenciais distintas para pagador e aluno; responsáveis gerenciam acesso do menor | **PROPOSTA:** estados pendente de ativação → ativada → acesso sujeito a direitos; tokens de ativação expiram e são de uso único; reenvio protegido contra abuso e enumeração |
| Alunos atuais | REQ-001; migração/contratação ainda não decididas | **PENDENTE:** identificação de aluno pré-existente, conciliação de cadastro e benefícios, prevenção de conta duplicada, provas de vínculo e suporte manual seguro |
| Redefinição/alteração de senha | DEC-039/070, REQ-002/049 | **PROPOSTA:** validar controle do e-mail original ou canal seguro equivalente, invalidar tokens usados, oferecer encerramento de outras sessões, registrar evento sem expor credenciais |
| Troca de e-mail e recuperação sem acesso ao endereço antigo | DEC-043: separação entre e-mail de cobrança e e-mail de login, conta infantil gerida pelo responsável | **PROPOSTA:** mudança de login exige validação adicional e notificação apropriada; mudança do e-mail de cobrança do pagador não troca credencial do aluno; caso sem acesso é encaminhado a verificação administrativa com trilha |
| Responsável/pagador e vários alunos | DEC-040–043: mesmo pagador pode vincular múltiplos alunos; sem painel parental geral | **PROPOSTA:** verificar autoridade sobre cada aluno antes de reatribuir vínculo, desvincular ou corrigir identificação, sem abrir dados dos demais alunos |
| Acesso interrompido, assinatura expirada | DEC-054: certificados já conquistados permanecem acessíveis conforme lei; curso exige direito ativo | **PENDENTE MATHEUS:** inadimplência, período de tolerância, acesso após cancelamento, reativação e migração de contratos. **PROPOSTA:** estado de direitos explícito e rastreável, sem exclusão de histórico acadêmico por mero evento comercial |
| Certificado/correção de dados | DEC-052–062 | **VIGENTE:** correções auditáveis, reemissão substituindo versão anterior, validação pública limitada, retenção conforme lei; fluxo exato de identidade/solicitação precisa conformidade jurídica |

**Cenários de aceite preliminares:** dois alunos diferentes do mesmo pagador não se confundem; aluno sem direito não acessa conteúdo; uma troca de e-mail do pagador não sequestra conta do aluno; redefinição não revela se um e-mail existe; retorno após cancelamento não apaga certificados legalmente preservados; reenvios/retentativas não duplicam contratos/identidades.

## F2 — Matriz de papéis, privacidade e acesso a dados

Matriz de referência de **mínimo privilégio** (autorização efetiva em serviço/API, não apenas interface):

| Recurso ou operação | Aluno | Professor | Admin autorizado | Pagador/responsável |
|---|---|---|---|---|
| Próprios cursos/progresso e documentos | Permitido conforme direito | Não por regra geral | Consulta conforme função e justificativa | Sem acesso acadêmico geral automático; avaliar legitimidade do responsável por menor |
| Questões de curso (gabarito/expl.) | Apenas conteúdo liberado e política acadêmica | **VIGENTE:** questões completas de todos os cursos (DEC-034) | Publicação e consulta conforme função | Sem acesso decorrente da cobrança |
| Marcadores pessoais “Questão em dúvida” | Apenas titular | **Proibido**, inclusive API | Acesso geral não aprovado; exceções legais a validar | Sem acesso automático |
| Notas individuais de atendimento docente | Pode **atribuir** após aula individual própria | **Proibido consultar** | **VIGENTE:** permitido no painel com autorização | Não via conta de pagamento |
| Média/ranking de docentes | Não visíveis | Só **própria média**; proteger baixa amostragem | **VIGENTE:** médias/ranking internos | Não visíveis |
| Agendamentos | Apenas próprios | Apenas próprios atendimentos e dados necessários | Gestão autorizada e auditável | Direito de gestão de menor a definir juridicamente |
| Contratos, dados de cobrança | Conforme titularidade contratual | Não | Funções financeiras autorizadas | Acesso limitado aos próprios contratos |
| Certificados | PDFs próprios | Não | Gestão autorizada, com trilha de versões | Direitos legais de responsáveis a validar |
| Suporte, dados pessoais e exportação | Apenas próprios | Apenas dados pertinentes ao papel | Escopo minimizado por função e finalidade, exportação auditável | Regras específicas de representação de menores, não acesso irrestrito |
| Administração de cursos, notas, acesso e pagamentos | Não | Não | Papéis de conteúdo, acadêmico, financeiro e segurança separados conforme futura matriz concreta | Não |

**Pendências para validação:** quais cargos administrativos acessarão dados pessoais/financeiros, dados acadêmicos e resultados por aluno, quem resolve disputas/correções e com qual dupla aprovação, prazos de retenção, registro de consentimentos/representação de menores, exportação, administração de incidentes, limiar para mostrar média do professor com poucas notas sem permitir inferência. **Nenhuma nova exposição de dados aprovada**.

**Critério de aceite preliminar:** negar por padrão; auditoria para acesso excepcional; revogação de permissões; separação entre usuários/turmas; testes de acesso direto a APIs; incidentes não expõem conteúdo secreto nem dados sensíveis.

## F3 — Suporte e contingências dos atendimentos

| Incidente | Comportamento vigente / recomendação |
|---|---|
| Professor indisponível na aula particular | **VIGENTE:** registrar ocorrência e evitar conflitos por seleção data/horário → docentes disponíveis e confirmação atômica (REQ-048). **PROPOSTA:** operação identifica ausência, apresenta reagendamento pelo canal apropriado, sujeito às regras comerciais que Matheus decidirá |
| Falta do aluno / remarcação | **PENDENTE MATHEUS:** tempo mínimo, crédito, multas, restituição. Registrar evento sem debitá-lo automaticamente antes de aprovação |
| Plantão sem cobertura docente | **VIGENTE:** janelas coletivas com link do dia e acesso livre (DEC-066). **PROPOSTA:** alertar administração, designar substituto autorizado ou informar suspensão; nenhuma reserva individual deve ser gerada |
| Plantão com vários alunos | **PROPOSTA:** regras de conduta, moderação da sala e ordem de dúvidas administráveis; não prometer atendimento privativo, gravação ou capacidade ilimitada; proteção adicional a menores e exposição de voz/imagem |
| Link de Meet inválido / indisponibilidade externa | **PROPOSTA:** detectar/registrar falha quando possível, apresentar orientação clara, permitir substituição do link por administrador, com verificação de acesso; não criar reunião própria nem cobrança extra |
| Falha em e-mail de aviso | **PROPOSTA:** agendamento continua consistente independentemente da entrega do e-mail; registrar falha de envio e disponibilizar status correto na área do usuário |
| Incidente de conteúdo/avaliação | **VIGENTE:** canal de relato de problema e suporte (DEC-070). **PROPOSTA:** ticket referencia recurso, triagem por prioridade e correção com trilha; não alterar nota individual arbitrariamente |
| Incidente de privacidade/segurança | **PROPOSTA:** classificação, contenção, investigação mínima, registro e encaminhamento jurídico/administrativo conforme obrigação legal; não fixar prazos legais sem análise especializada |

**Responsabilidade:** professor atua apenas em disponibilidade e ocorrências docentes aprovadas; administração coordena escala, atendimento e incidentes; áreas financeiras e acadêmicas exigem alçadas próprias. Não presumir ferramentas pagas.

## F4 — Ciclo editorial e solicitações administrativas

**VIGENTE (DEC-068/070):** equipe administrativa autorizada gerencia cursos, aulas, questões, resumos e materiais, com estados de rascunho, revisão, publicação e retirada, preservando histórico.

**PROPOSTA para validação:**
1. Conteúdo nasce em **rascunho**, acessível apenas à equipe autorizada; revisão pedagógica/operacional antes da publicação.
2. Publicação cria versão identificável e data de vigência; mudanças de módulos/aulas podem afetar alunos em andamento, exigindo regra explícita de migração/compatibilidade antes de aplicar a novos progressos.
3. Retirada de publicação não apaga resultados acadêmicos anteriores, materiais auditados, certificados legitimamente emitidos ou versões relevantes para contestação, sujeitos a retenção legal.
4. Correção de gabarito/questão após tentativas exige procedimento de impacto acadêmico e decisão sobre recálculo; **não alterar retroativamente notas em massa sem aprovação de regra específica**.
5. Solicitações e reclamações usam estados mínimos **aberta → em análise → resolvida**; eventual reabertura, prioridade, responsáveis, SLA e comunicação são parâmetros operacionais pendentes.
6. Ações de admins em certificados seguem DEC-062: substituir/revogar com motivo, preservando rastreabilidade e garantindo que versão superada não seja validada como vigente.
7. Exportações de dados, alteração de direitos e exclusão de informações pessoais exigem papel autorizado, registro de motivo e política jurídica.

**Critérios de aceite:** versão em rascunho inacessível aos alunos, retirada propagada sem quebrar direitos históricos, alterações sensíveis auditáveis, pedidos do titular com verificação de identidade, suporte não altera resultado acadêmico por efeito colateral.

## F5 — Definições de indicadores e relatórios

Definições **PROPOSTAS para validação** (DEC-068/069 aprovam existência dos relatórios, mas não estas fórmulas ou públicos):
| Indicador | Definição de referência | Dependência/risco |
|---|---|---|
| Alunos ativos | número de contas de aluno habilitadas com direito vigente no período | distinguir conta ativa vs assinatura paga, múltiplos alunos por pagador; regras comerciais Matheus |
| Novos alunos | contas de aluno efetivamente ativadas no intervalo | não contar pré-cadastros e pagadores como estudantes |
| Assinaturas vigentes | contratos com direito ativo na data do corte | regras de inadimplência e cancelamento Matheus |
| Evolução da base | série temporal de alunos ativos com cortes consistentes | mudanças de status e atraso de eventos |
| Progresso do curso | aulas efetivamente concluídas/aprovadas ÷ total aplicável da versão do curso | REQ-030/031; não usar tempo de vídeo ou prática opcional |
| Conclusão de curso | alunos que cumpriram requisitos de conclusão da versão, não apenas chegaram à última aula | DEC-052/062; DEC-024 resolvida e avaliação sem nota mínima eliminatória (DEC-074–080) |
| Dificuldade acadêmica | incidência de tentativas insuficientes por aula/avaliação e período | nota <6 orientativa já decidida; proteção de pequenos grupos |
| Particular realizada | reserva concluída e validada como realizada, sem contar cancelada/falta | política de revisão de ocorrências |
| Cobertura de plantão | janelas publicadas efetivamente cobertas por docente ÷ janelas previstas | escala real ainda não aprovada, não inferir presença de alunos |
| Nota média de professor | média aritmética de notas válidas de particulares efetivamente realizados | só administração vê ranking e individuais; professor apenas sua média com proteção de baixa amostragem |
| Receita e inadimplência | dados conciliados ao gateway/ledger e regra de competência/corte definida | Matheus/gateway; não confundir pedidos, pagamentos e receita reconhecida |
| Suporte | solicitações por estado/tempo até resolução | SLA, reabertura, duplicatas e privacidade pendentes |

**Filtros/exportações:** período/fuso, curso e situação com catálogo estável de estados; exportações CSV/Excel somente com permissão, minimização de campos, log da ação e restrições de dados de menores. Nenhuma ferramenta de BI pago, frequência de envio ou IA por aluno aprovada. Definir proprietários de métricas e fontes antes de produzir relatórios gerenciais confiáveis.

## Pauta consolidada que não deve ser presumida como aprovada

- **Matheus — reunião única:** video completo DEC-024; plano, duração, créditos, cobrança, cancelamentos, particular/plantão DEC-067; políticas de pagamento; nota mínima/avaliações; teste de nivelamento e trilhas; prioridades e eventuais aprovações de projeto conforme `docs/09-decisoes-matheus.md`.
- **Marina / jurídico / operação — validações não comerciais:** autoridade de responsável legal, recuperação sem e-mail, visibilidade de média com poucos votos, regras de publicação que afetem progresso, conduta/moderação do plantão, retenção/exportação e incidentes; propor agrupadamente para decisão quando exigirem mudança funcional.
- **Tecnologia/finanças — etapas posteriores:** modelo de dados, autorização, idempotência, auditoria, fornecedores, volume de eventos e integração; dimensionar custo de implantação, mensal ocioso, variável por aluno/professor/admin/ticket/exportação e operação; sem IA recorrente por usuário.

## Critério de prontidão documental para avançar à stack

- [x] Cobertura dos domínios e lacunas inventariada na AUD-001–010.
- [x] Cinco frentes descritas com regras vigentes separadas de propostas.
- [ ] Pendências funcionais materiais e titulares confirmados/decididos.
- [ ] Reunião de Matheus concluída e decisões formalizadas.
- [ ] Revisão jurídica de menores, avaliações e privacidade planejada/concluída conforme exigência.
- [ ] Escopo integral consolidado sem pressupor MVP.
- [ ] Só então abrir gate de escolha de stack, comparações de custo e versões (DEC-035).

**Este documento não autoriza implementação, custos, fornecedores, calendário ou tarefas para Claude.**

## Complemento de especificação — encaminhamentos aprovados em 2026-11-02 (AUD-004/007/008/009)
**Natureza:** aprofundamento técnico-funcional documental autorizado por Marina. Todas as recomendações abaixo são **PROPOSTAS de parâmetros e critérios de aceite**, salvo quando reproduzirem regra já vigente da DEC-070/071/072. Não há autorização de implementação.

### AUD-004 — mapa de jornadas excepcionais
| Cenário | Fluxo a especificar | Proteções e critério de aceite | Validação pendente |
|---|---|---|---|
| Perda de e-mail de login | Solicitação → prova de identidade/vínculo por canal independente → análise administrativa autorizada → decisão motivada → atualização e aviso | Não revelar existência de conta; não aceitar apenas dados públicos; registrar agente, motivo e resultado; evitar transferência indevida de acesso | Marina e jurídico para forma de prova e representação de menor |
| Troca de e-mail com acesso à conta | Autenticação reforçada → verificação do novo endereço → alteração → avisos e controle de sessões | E-mail financeiro do pagador não muda login do aluno; não expor credenciais; histórico auditável | Prazos e canais a definir |
| Alteração de responsável/pagador | Comprovação de autoridade → avaliação do vínculo de cada aluno → alteração autorizada e notificação pertinente | Não permitir que acesso financeiro conceda acesso acadêmico indevido; mudanças sensíveis deixam trilha | Jurídico e Marina |
| Aluno existente/migração | Localizar registro existente sem enumeração → conciliar identidade e direitos contratuais → prevenir duplicidade → registrar ativação | Conservar histórico/certificados legitimamente adquiridos; conflitos direcionados a suporte | Políticas comerciais e direitos contratuais ainda pendentes |
| Cancelamento/inadimplência/retorno | Receber evento confiável de direitos → registrar estado e comunicar alteração pertinente → reativar sem duplicar vínculo | Histórico acadêmico não é apagado por evento comercial; sem presumir tolerância, cobrança ou prazo | Matheus nos itens atribuídos; jurídico quanto a retenção |

### AUD-007 — procedimento operacional de atendimentos
| Ocorrência | Tratamento proposto | Restrição vigente |
|---|---|---|
| Professor falta a particular | Registrar ocorrência; notificar as partes; oferecer reagendamento sujeito às políticas comerciais aprovadas | Não descontar crédito nem fixar indenização por omissão |
| Aluno falta/cancela/remarca | Registrar motivo/horário, manter status legível, aguardar política de benefícios | Antecedência, validade e desconto de crédito são pendência comercial |
| Docente não cobre plantão | Administrador autorizado escolhe substituto habilitado ou suspende a janela e avisa alunos elegíveis | Plantão coletivo com reservas confirmadas e saldo próprio, sem consumir créditos de particulares |
| Link inválido ou incidente de plataforma externa | Registrar incidente, corrigir link autorizado ou comunicar indisponibilidade, preservando histórico | Não prometer SLA, sala própria nem custo externo |
| Conflito/moderação envolvendo menor | Moderação e canal de denúncia com possibilidade de interromper participação indevida; registro minimizado de evidências | Regras concretas de consentimento, imagem/voz, supervisão e retenção precisam jurídico |
| Choque de horários em particular | Confirmar reserva apenas com horário e docente ainda disponíveis, evitando dupla marcação | Preservar ordem dia/horário → professor elegível (REQ-048) |

### AUD-008 — matriz preliminar de autorização e proteção de dados
| Dado/ação | Aluno | Professor | Administração autorizada | Pagador/responsável |
|---|---|---|---|---|
| Progresso e avaliações individuais do aluno | Próprios dados | Somente permissões acadêmicas expressamente atribuídas | Conforme competência e finalidade | Sem acesso irrestrito; representação de menor sujeita a validação |
| Nota individual sobre atendimento docente | Pode registrar no próprio atendimento | Sem acesso | Consulta restrita e auditável | Sem acesso |
| Média do próprio professor | Não acessa | Própria média somente após limiar mínimo válido | Gestão interna conforme permissão | Não acessa |
| Ranking de professores | Não acessa | Não acessa | Exclusivamente administração autorizada | Não acessa |
| Dados financeiros e contratos | Conforme titularidade | Sem acesso | Papel financeiro competente | Apenas contratos próprios |
| Recuperação excepcional, mudança de vínculo e exportação | Solicitar próprios direitos | Restrito ao papel | Ação sensível com justificativa e auditoria | Apenas mediante vínculo comprovado e regra jurídica |

**Limiar proposto para média docente:** mínimo de **5 avaliações válidas** para exibição ao próprio professor; verificar se atualizações sucessivas, filtros ou amostras pequenas possibilitam reconstruir uma avaliação individual. Alternativas para validar: limiar maior, atualização agregada por janela e supressão de detalhamento temporal. O número 5 **não está aprovado**. Administradores conservam exclusividade sobre notas individuais/ranking conforme DEC-065/072. Política de retenção, resposta LGPD, incidente, dados de menores e alçadas devem receber validação jurídica/administrativa antes de execução.

### AUD-009 — estrutura do dicionário de indicadores
Para **cada** KPI aprovado, registrar: `id`, nome, objetivo, numerador/denominador ou regra de contagem, população elegível, evento/fonte de origem, data de referência, fuso, período, filtros, atualização, responsável, acesso autorizado, tratamento de revisão/duplicidade e estado de qualidade do dado. **Dado indisponível não equivale a zero.**

| Família | Métricas a detalhar sem fixar fórmula nova | Dependência |
|---|---|---|
| Alunos e assinaturas | Alunos ativos, novos alunos, contratos com direito ativo, evolução da base | Regras comerciais, vínculo aluno/pagador |
| Ensino e progresso | Aulas concluídas, conclusão de curso, tentativas insuficientes | Critérios acadêmicos ainda pendentes |
| Atendimentos | Particulares realizados, remarcações, cobertura de janelas de plantão | Estados/ocorrências e políticas comerciais |
| Professores | Média de notas válidas, participação em atendimentos | Limiar de proteção de média e privacidade |
| Financeiro | Pagamentos recebidos, pendências, cancelamentos, receita quando definida | Matheus, conciliação e futura integração |
| Suporte | Chamados por estado, tempo de tratamento quando definido | Fluxo e eventuais SLAs aprovados |

**Disponibilidade e exportação:** distinguir `disponível`, `indisponível`, `insuficiente` e `não aplicável` quando pertinente; exportar só dados e recortes autorizados em CSV/Excel; registrar solicitante, finalidade, filtro, momento e resultado; minimizar dados de menores. Não aprovar BI, periodicidade, envio automático ou fórmulas comerciais sem decisão competente.

### Critério de fechamento das quatro frentes
O detalhamento acima **não encerra** AUD-004/007/008/009: permanecem em elaboração até que políticas pendentes, responsáveis e critérios de aceitação sejam validados e rastreados nos requisitos/decisões canônicas. AUD-005/006/010 continuam pendentes sem alteração.

## Deliberação operacional posterior — DEC-073 / REQ-052 (2026-11-02)
Marina **aprovou as recomendações operacionais** de AUD-004, AUD-007, AUD-008 e AUD-009, antes apenas autorizadas para detalhamento. **O limiar de 5 avaliações válidas foi aprovado condicionalmente** à validação de privacidade e à proteção contra inferência; não é uma liberação incondicional nem autorização de desenvolvimento. As quatro frentes permanecem **APROVADAS EM DIRETRIZES / ABERTAS EM VALIDAÇÕES**. Dependências jurídicas, de Matheus, comerciais, pedagógicas, custos, stack, MVP e implementação permanecem pendentes. **AUD-005/006/010 não foram resolvidas.** Consultar DEC-073 e REQ-052.
