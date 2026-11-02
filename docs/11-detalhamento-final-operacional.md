# Detalhamento funcional transversal — cinco frentes finais

**Data:** 2026-11-02  
**Status:** especificação de PM em elaboração, iniciada por autorização de Marina para **avançar nas cinco frentes**. Regras marcadas **PROPOSTA** são recomendações operacionais, não novas decisões automaticamente aprovadas. Regras **VIGENTES** apenas operacionalizam decisões já aprovadas. Parâmetros comerciais/pedagógicos de Matheus não são alterados.  
**Origem:** auditoria `docs/10-auditoria-cobertura-funcional.md` (AUD-004/007/008/009), DEC-035/070 e REQ-049.

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
| Conclusão de curso | alunos que cumpriram requisitos de conclusão da versão, não apenas chegaram à última aula | DEC-052/062; aguardar DEC-024 e nota mínima |
| Dificuldade acadêmica | incidência de tentativas insuficientes por aula/avaliação e período | escala/limiar Matheus, proteção de pequenos grupos |
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
