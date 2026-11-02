# P-04 — Matriz funcional de permissões e segurança
**Privilège | 2026-11-02 | Status:** ESPECIFICAÇÃO PREPARATÓRIA; não constitui alçada definitiva, parecer jurídico, decisão de stack nem implementação.
**Referências:** DEC-065/068/070–073, REQ-042/043/046/047/049–052, AUD-008, JUR-01/02/05/06/07/08/09, docs/11/15/16/19/20.
**Legenda:** V = regra funcional aprovada; C = configuração/candidato para validação de Marina; J = condicionado ao jurídico/privacidade; M = matéria comercial/pedagógica sob titularidade a confirmar ou de Matheus quando expressamente atribuída.

## 1. Modelo de autorização
- **V:** cinco grupos administrativos configuráveis e cumulativos somente mediante autorização; a autorização não decorre automaticamente do cargo. Princípio de menor privilégio, isolamento entre titulares, auditoria de operações sensíveis e justificativa obrigatória.
- **C:** catálogo operacional candidato dos cinco grupos: **Conteúdo/editorial (G1)**, **Acadêmico/pedagógico (G2)**, **Atendimentos/plantões (G3)**, **Comercial/financeiro (G4)**, **Segurança/suporte/dados (G5)**. São rótulos de desenho para revisão contra a redação canônica da DEC-071, NÃO uma redefinição de grupos já aprovados.
- **V:** aluno vê só dados acadêmicos próprios, professor apenas dados pertinentes à atribuição, pagador não ganha acesso acadêmico irrestrito, administração somente com competência expressa; notas individuais e ranking docente são internos à administração autorizada.
- **V/J:** professor só pode ver própria média depois de no mínimo 5 notas válidas **e** da validação anti-inferência; não libera por atingir cinco isoladamente.
- **C:** negar por padrão no backend/API e na interface; permissões avaliadas por ação + recurso + titularidade + finalidade + relação temporal; acesso concedido deve ter origem, aprovador e possibilidade de revogação.

## 2. Matriz operacional preliminar
**Símbolos:** P = próprio dado/objeto; A = acesso somente mediante autorização específica e pertinente; N = negar; J = autorização condicionada a parecer/representação; C = regra proposta para fechamento.
| Recurso / operação | Aluno | Professor | Pagador | Administração autorizada | Estado / ressalva |
|---|---|---|---|---|---|
| Conta: ler/editar perfil comum | P | P | P | A sob necessidade | V; mudança sensível auditada |
| Conta: alterar e-mail/recuperar sem e-mail | P com verificação | P com verificação | P próprio | A + justificativa | V/JUR-01/02/06 |
| Vínculo aluno–responsável: consultar/alterar | P limitado | N | J por vínculo | A + justificativa | JUR-02; sem transferência automática |
| Dados acadêmicos individuais e progresso | P | A restrito à atribuição | N, salvo direito de representação validado | A função acadêmica | V/JUR-02 |
| Conteúdo: rascunho/revisar/publicar/retirar | N | N | N | A função editorial | V; impacto histórico avaliado |
| Questões: consultar banco completo autorizado | Apenas cursos elegíveis | A para consulta docente aprovada | N | A editorial/acadêmica | V/DEC-034 |
| Gabarito e correções retroativas | Apenas no contexto pedagógico permitido | Consulta autorizada | N | A com avaliação de impacto, motivação e histórico | V; alçada final C/JUR-06 |
| Agendamento particular: criar/cancelar/consultar | P com direito | Próprias sessões | N | A função atendimentos | V; consequências comerciais M |
| Plantão: acessar sessão e moderar | Acesso conforme plano | A conforme escala | N | A para moderação, escala, contingência | V/JUR-04/11 |
| Avaliação docente individual: registrar | P após sessão realizada | N para ler votos individuais | N | A consulta interna | V/DEC-065/072 |
| Ranking docente: consultar/exportar | N | N | N | A restrita de gestão | V/JUR-05/09 |
| Média do próprio docente | N | P somente se >=5 notas válidas e parecer anti-inferência favorável | N | A sob gestão | V-condicional; bloquear enquanto JUR-05 aberto |
| Contrato/pagamento: consultar | P se contratante | N | P próprios contratos | A financeiro | V; política comercial M |
| Contrato/pagamento: corrigir/reembolsar | N | N | Solicitação própria, sem poder de execução | A financeiro com motivação | M/JUR-06 |
| Suporte: abrir/ler chamados | P | P de sua competência | P dos próprios direitos | A função suporte | V/JUR-07/08 |
| Denúncias e ocorrências: consultar e agir | P somente próprio protocolo permitido | A quando parte e sem expor denunciante | J limitado | A moderação/segurança | V/JUR-04 |
| Exportar dados pessoais ou relatórios | Somente meios previstos para seus direitos | N por padrão | N por padrão, sujeito a direitos específicos | A no subconjunto autorizado e auditado | V/JUR-09 |
| Configurar papéis/permissões | N | N | N | A segurança com trilha | C/JUR-06; sem autopromoção automática |
| Consultar logs de auditoria | N | N | N | A segurança, minimizado | C/JUR-08 |

## 3. Ações sensíveis e trilhas
| Evento | Exigência vigente | Complemento a validar |
|---|---|---|
| Recuperação excepcional | Agente identificado, comprovação independente, justificativa e auditoria | Provas aceitas, retenção, eventual aprovação adicional JUR-01/06 |
| Troca de responsável/titularidade | Verificar legitimidade, autorizar e auditar | Procedimento de contestação e múltiplos responsáveis JUR-02 |
| Correção retroativa de gabarito/nota | Avaliar impacto antes de publicar mudança | Quem autoriza, reversão, comunicação e versão |
| Administração de direitos comerciais | Apenas papel autorizado e registros | Quais alterações possíveis dependem de MAT-002/003/014 |
| Exportação sensível | Autorizar por finalidade, escopo e log | Campos, limites, prazo do arquivo e eventual dupla revisão JUR-09 |
| Denúncia/incidente de menor | Moderação e acesso minimizado | Encaminhamento e proteção de evidências JUR-04/07/11 |
| Alteração de papéis/permissões | Auditabilidade e mínimo privilégio | Necessidade de aprovação independente JUR-06 |

**Campos mínimos candidatos do evento de auditoria:** identificador do agente, categoria de papel, operação, objeto, identificador de correlação, instante/fuso, resultado, motivo quando sensível e referência de aprovação. **Não** registrar senhas, tokens, documentos integrais nem conteúdo de denúncia sem necessidade definida.

## 4. Regras adversas e critérios de aceite candidatos
1. Usuário troca ID/URL e não acessa dado acadêmico ou financeiro de outro titular.
2. Pagador com dois alunos não obtém o histórico acadêmico de um apenas por pagar; representação legal é controlada.
3. Professor obtém acesso às questões pertinentes aprovadas, não à lista pessoal de dúvidas nem votos individuais.
4. Consulta direta de API/exportação não contorna permissões visíveis na interface.
5. Uma autorização revogada deixa de conferir acesso em novas operações.
6. Exportação inclui exclusivamente campos e registros cobertos pelo papel concedido e é auditada.
7. Usuário de suporte não ganha automaticamente acesso a ajustes financeiros ou correções acadêmicas.
8. Ação sensível sem justificativa ou ator autorizado é negada e registrada de forma proporcional.
9. Professor com quatro avaliações não vê média; com cinco também não vê enquanto faltar validação anti-inferência.
10. Ranking docente permanece invisível aos docentes, estudantes e pagadores.
11. Alteração de papel não permite autopromoção por privilégio inferior.
12. Logs e anexos de incidentes de menores só são acessíveis a agentes com finalidade legítima e autorização.

## 5. Bloqueios explícitos de fechamento
| ID | Bloqueio | Quem valida |
|---|---|---|
| B-P04-01 | Equivalência exata entre catálogo G1–G5 proposto e os cinco grupos canônicos da DEC-071 | Marina, com revisão do texto decisório |
| B-P04-02 | Alçadas de dupla revisão, acessos excepcionais e revisão de concessões | Marina + JUR-06 |
| B-P04-03 | Direitos de responsáveis, comprovação e dados de menores | JUR-02/11, Marina |
| B-P04-04 | Retenção, trilhas, exportação e respostas LGPD | JUR-07/08/09 |
| B-P04-05 | Política de cinco notas válidas e resistência à inferência por histórico, filtros e atualizações | JUR-05; Marina após validação |
| B-P04-06 | Ajustes financeiros ou acadêmicos fora de alçadas existentes | Decisor competente, Matheus apenas quando atribuído |
| B-P04-07 | Provedor de autenticação, arquitetura, custo, tarefas e implementação | Gates DEC-035 e DEC-029 |

**Estado do P-04:** matriz de autorização, controles e critérios adversos preparados para conferência; sem liberação jurídica, sem autorização para produção/Claude. AUD-005/006/010 continuam pendentes. GitHub canônico, Notion exclusivamente executivo.
