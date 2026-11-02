# P-06 — Dicionário funcional de indicadores, qualidade de dados e exportações
**Privilège | 2026-11-02 | Status:** preparação documental para validação; não aprova fórmulas comerciais, acesso adicional a dados, tecnologia ou implementação.
**Origem:** DEC-068/069/071–073, REQ-046/047/050–052, AUD-009, JUR-05/08/09, docs/11/12/15/16/21/22.

## 1. Contrato de metadados de cada KPI
Cada ficha terá ID estável, nome, finalidade, definição de população, grão (unidade de contagem), numerador/denominador se aplicável, regra de deduplicação, eventos/fonte canônica, estado e janela de referência (instante ou intervalo, início inclusivo/fim exclusivo), fuso, data de processamento, frequência proposta, segmentações permitidas, responsável funcional, papel autorizado, regras de atraso/revisão e qualidade de dados. **Dado inexistente/indisponível não é zero.** Fórmulas abaixo são **candidatas** salvo regras expressamente aprovadas.

## 2. Dicionário inicial rastreável
| ID | Indicador / unidade | Definição funcional candidata | Fonte conceitual | Estado e dependência |
|---|---|---|---|---|
| KPI-01 | Alunos ativos / alunos distintos | Total de alunos distintos com conta habilitada **e** direito de acesso vigente na data de corte; não contar pagador como aluno | Conta, aluno, direito de acesso | Critério conceitual DEC-071; regra de direito depende de planos/Matheus |
| KPI-02 | Novos alunos / alunos distintos | Alunos com ativação confirmada pela primeira vez dentro do período, excluindo tentativa pendente e duplicatas | Evento de ativação | Candidato; decidir reativações e migração |
| KPI-03 | Assinaturas vigentes / contratos distintos | Contratos com estado efetivamente vigente no instante de corte, sem contar cobranças não confirmadas como vigência automaticamente | Contrato, direitos, evento financeiro | Matheus MAT-002/003; cálculo bloqueado |
| KPI-04 | Evolução da base / série temporal | KPI-01 comparado nos mesmos cortes de calendário/fuso, com revisão controlada de eventos atrasados | Série de estados de direitos | Depende de KPI-01 e janelas |
| KPI-05 | Progresso do curso / percentual | Número de aulas aplicáveis aprovadas ÷ número total de aulas aplicáveis na versão do curso; não usar prática opcional como condição | Progresso, versão e avaliações | Base funcional REQ-030/031; detalhes de DEC-024/nota pendentes |
| KPI-06 | Conclusão de curso / conclusões distintas | Contagem de conclusão efetivamente validada por aluno+curso+versão, com tratamento de correção e reemissão | Evento de conclusão, versão | Dependência pedagógica DEC-024 e MAT-007/008 |
| KPI-07 | Tentativas insuficientes / tentativas | Tentativas válidas com resultado inferior ao limiar de aprovação configurado no período, sem contar tentativa incompleta como reprovação | Avaliação, tentativa, resultado | Nota mínima MAT-007 pendente |
| KPI-08 | Aulas particulares realizadas / sessões | Contagem de reservas com realização confirmada, não incluir cancelada/ausência como realizada | Reserva, ocorrência, confirmação | Estados revisáveis; comércio DEC-067 pendente |
| KPI-09 | Taxa de cobertura de plantões / percentual | Janelas publicadas previstas efetivamente cobertas por docente ÷ janelas publicadas previstas elegíveis no período; devolver indisponível quando denom.=0 sem inferir 0% | Janela, escala, ocorrência | Horários e classificação da cobertura pendentes |
| KPI-10 | Média docente / estrelas 1–5 | Soma de notas válidas de particulares realizados ÷ quantidade de notas válidas; sem notas, indisponível; notas revisadas impactam população válida | Avaliação docente, particular realizado | Administração autorizada; ao professor somente a própria média sob condição >=5 + JUR-05/anti-inferência |
| KPI-11 | Pagamentos confirmados / transações distintas | Contagem de pagamentos conciliados por identificador único no período, excluindo tentativa ou status pendente | Provedor/evento financeiro reconciliado | Modelo financeiro e gateway pendentes |
| KPI-12 | Receita / moeda | Agregado de valores com política de competência/caixa, reembolso, tributos e estornos **a definir**; não confundir vendas criadas com receitas | Contratos, ledger, comprovantes | **Fórmula bloqueada** por decisões comerciais/contábeis |
| KPI-13 | Inadimplência / contratos ou valor | População e regra temporal do atraso, considerando cancelamentos, reprocessamento e carência definidos | Contrato, obrigação financeira, pagamento | **Fórmula bloqueada** por Matheus |
| KPI-14 | Solicitações de suporte / tickets distintos | Tickets protocolados por estado e período, sem duplicar transição como novo ticket | Chamado, histórico de estado | Contagem candidata; SLA e reabertura pendentes |
| KPI-15 | Tempo de tratamento / duração | Diferença entre marcos de abertura e resolução conforme política de pausas/reabertura a definir | Eventos do ticket | Fórmula e SLA bloqueados; não fixar média oficial ainda |
| KPI-16 | Remarcações/ocorrências particulares / eventos | Eventos efetivos e rastreados por tipo; evitar duplicar notificação como ocorrência | Reserva e trilha de ocorrência | Sem efeitos financeiros presumidos |
| KPI-17 | Certificados válidos / certificados distintos | Certificados em estado válido no instante de corte; separar emitido, substituído e revogado | Certificado e versões | Política funcional DEC-052–062; retenção jurídica |
| KPI-18 | Cobertura de publicação / aulas publicadas | Número de aulas publicadas na versão/curso/recorte autorizado; excluir rascunhos não publicados | Editorial, aula, versão | Métrica candidata; não equivale a aula concluída |

## 3. Semântica de qualidade e ausência
| Código | Apresentação | Significado |
|---|---|---|
| OK_ZERO | 0 | Fonte íntegra e população elegível efetivamente vazia para contagem válida |
| OK_VALUE | número | Valor calculado com população e janela completas |
| UNAVAILABLE | Dados indisponíveis | Fonte, integração ou corte sem dados confiáveis |
| INSUFFICIENT | Amostra insuficiente | Base pequena ou protegida; nenhum dado inferível deve vazar |
| NOT_APPLICABLE | Não aplicável | KPI sem sentido para o recorte/estado; não converter a zero |
| PENDING_RECONCILIATION | Aguardando conciliação | Eventos atrasados ou dados financeiros/operacionais sujeitos a revisão |

**Regras:** divisões com denominador zero não produzem 0% automaticamente; totais dependentes de dados parciais não aparecem como completos. Apresentação e exportação devem preservar estado de qualidade e data de corte.

## 4. Exportação: contrato funcional e riscos
- **Permissão:** função administrativa explicitamente autorizada por domínio, finalidade e granularidade; isolamento por titular, curso e escopo; professor não exporta votos individuais/ranking; pagador não exporta dados acadêmicos de terceiros.
- **Minimização:** selecionar apenas campos necessários; não incluir senha, token, documento de identidade, contato de menor ou denúncia por padrão. Necessidades específicas sujeitas a JUR-09.
- **Formato:** preparar CSV e Excel como possibilidades funcionais já contempladas; encoding, limite, paginação e recursos tecnológicos somente após stack.
- **Auditoria:** registrar solicitante, papel concedido, finalidade, filtros, instante, quantidade de linhas, resultado e referência do artefato; não registrar conteúdo sensível integral no log.
- **Qualidade:** exportar estados UNAVAILABLE/INSUFFICIENT sem falsificar 0 e considerar revisão de valores históricos.
- **Segurança:** controlar autorização no servidor, não apenas botão; negar exportação em massa para perfil sem direito; proteger arquivo entregue e definir expiração conforme parecer.
- **Pequenos grupos:** suprima dados pessoais ou agregados que permitam reconstrução individual, com regras a validar juridicamente.
- **Pendências:** retenção/expiração do arquivo, limites, granularidade, destinatários, horário de atualização, transferências externas e tratamento de dados de menores — JUR-08/09.

## 5. Cenários adversos de aceite para futura auditoria
1. Aluno desativado com certificado válido não é contabilizado como aluno ativo se faltar direito vigente.
2. Dois alunos associados a um pagador são dois alunos, mas um só pagador; não contar pagamento como nova matrícula.
3. Evento financeiro recebido duas vezes não dobra pagamentos/receita.
4. Fonte indisponível resulta UNAVAILABLE, nunca zero.
5. Denominador zero em taxa de cobertura resulta NOT_APPLICABLE ou estado definido, não 0% inventado.
6. Uma avaliação docente invalidada altera a população interna e desencadeia revisão anti-inferência antes de eventual atualização visível.
7. Professor requisita ranking ou notas individuais via exportação/API: acesso negado.
8. Usuário sem função financeira tenta exportar receita e identificadores contratuais: negado e auditado.
9. Relatório de menores ou grupo pequeno é minimizado/suprimido segundo política jurídica, inclusive CSV.
10. Mudança retroativa de gabarito não duplica conclusão nem gera alteração silenciosa.
11. Reativação de aluno não conta como novo aluno sem regra explícita.
12. Ticket reaberto não conta automaticamente como novo chamado; tempo de resolução considera política de reabertura.
13. Filtro temporal usa mesmo fuso e corte em tela e arquivo.
14. Dados parciais não passam a relatório definitivo só por disponibilidade de alguns registros.

## 6. Pendências classificadas
| Bloqueio | Decisão necessária | Responsabilidade |
|---|---|---|
| B-P06-01 | Status comerciais elegíveis, receita, inadimplência e benefício/assinatura | Matheus nos itens atribuídos; restante conforme confirmação de Marina |
| B-P06-02 | Critérios de aprovação/conclusão e nivelamento | DEC-024 Matheus, outras MAT conforme titularidade |
| B-P06-03 | Frequência/corte e público efetivo de cada relatório | Marina/áreas competentes |
| B-P06-04 | Proteção de média docente e grupos pequenos | JUR-05/09, Marina após parecer |
| B-P06-05 | Exportação e retenção de dados pessoais | JUR-07/08/09 |
| B-P06-06 | Estados finais de atendimentos, reabertura de suporte e SLAs | Marina; efeitos comerciais sujeitos a DEC-067 |
| B-P06-07 | Fornecedor BI, pipeline de dados, agendamento automatizado e dimensionamento | G2–G3 após escopo DEC-035 |

**Resultado:** 18 KPIs inventariados, 6 estados de qualidade, 14 testes de aceitação e 7 grupos de bloqueios. Nenhum novo KPI é homologado por sua presença nesta lista; a lista prepara detalhamento de REQ-046/047/052. GitHub canônico, Notion somente extrato executivo, sem ordem de execução ao Claude.
