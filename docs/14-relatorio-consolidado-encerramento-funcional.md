# Privilège — Relatório consolidado de encerramento funcional (condicionado)

**Data de referência:** 2026-11-02  
**Estado:** CONSOLIDAÇÃO DOCUMENTAL / ENCERRAMENTO FUNCIONAL AINDA NÃO HOMOLOGADO  
**Natureza:** relatório de gestão, sem aprovar decisões, parâmetros, MVP, stack, despesas, cronograma ou execução.  
**Fonte de verdade:** GitHub `Privilege-Idiomas/privilegeplataforma`. Notion é extrato executivo, sem substituir nada do GitHub.

## 1. Sumário executivo
O conjunto funcional está amplamente especificado. DEC-071/REQ-050 (dez regras) e DEC-072/REQ-051 (seis regras) foram aprovados por Marina e incorporados à documentação. A aprovação funcional das regras não preenche parâmetros pendentes nem equivale à homologação geral do escopo. A auditoria existente (`docs/10-auditoria-cobertura-funcional.md`) identifica AUD-001 a AUD-010: **AUD-001, AUD-002 e AUD-003 estão resolvidos apenas no plano documental**; AUD-004 a AUD-010 mantêm dependências específicas.

## 2. Matriz executiva de fechamento

| Frente | Evidência canônica | Situação | Responsável pela próxima ação (proposto ou explicitado) | Critério para fechamento |
|---|---|---|---|---|
| Conciliação das fontes e escopo integral | `docs/02-scope.md`, `docs/03-requirements.md`, `docs/04-decision-log.md`, AUD-001/002/003 | Correções documentais concluídas; homologação integral pendente | PM prepara; Marina valida diferenças de produto | Requisitos e decisões rastreados, sem MVP histórico confundido com release aprovada |
| Jornadas excepcionais, migração e identidade | AUD-004; DEC-070/071/072; REQ-049/050/051 | Regras-base aprovadas, fluxos/limites incompletos | PM detalha; Marina delibera o que lhe couber; jurídico valida representação/identidade | Casos de perda de e-mail, troca de titular, responsáveis, alunos atuais e auditoria resolvidos ou formalmente condicionados |
| Comércio, planos, cobrança, direitos e aulas | AUD-005; DEC-067/MAT-014; MAT-002/003/010 | Bloqueado por decisões comerciais | Matheus, **nos itens expressamente atribuídos**; Marina comunica respostas; demais titularidades históricas precisam confirmação de Marina | Planos, benefícios, períodos, cancelamentos, inadimplência, duração, créditos e regras comerciais formalizados |
| Pedagogia, vídeo, teste e nota mínima | AUD-006; DEC-024/MAT-009; MAT-005/006/007/008; REQ-013/015 | Resposta provisória de vídeo; demais parâmetros abertos | Matheus para DEC-024; demais responsáveis conforme classificação confirmada por Marina | Critérios verificáveis para progressão, escala, nivelamento e exceções |
| Plantões coletivos e particulares | AUD-007; DEC-066/069/071/072; REQ-044/048/050/051 | Fluxos aprovados; operação e números condicionados | PM prepara procedimentos; Marina valida operação; Matheus decide comércio; jurídico valida menores | Supervisão, moderação, contingência, agenda, faltas e autorização de acesso definidos |
| Privilégios, LGPD, menores e avaliações docentes | AUD-008; DEC-065/070/071/072; REQ-042/043/049/050/051 | Segurança conceitual aprovada, parâmetros e parecer abertos | PM elabora matriz; Marina confirma alçadas; assessoria jurídica valida | Regras de acesso por ação/dado, retenção, incidentes e limiar da média docente aprovados pela autoridade pertinente |
| Indicadores, relatórios e exportação | AUD-009; DEC-068/069/071/072 | Existência aprovada; dicionário de métricas ainda condicionado | PM prepara dicionário; Marina valida parâmetros internos; Matheus valida dimensões comerciais de sua competência | Cada KPI tem definição, fonte, período, base de cálculo e regra de indisponibilidade; exportação restrita |
| Prontidão, fornecedores e custos | AUD-010; DEC-029/032/035 | Não autorizado | PM somente prepara comparativos após escopo; Marina/Matheus aprovam conforme alçadas | Gates G1 escopo → G2 stack → G3 custos → G4 versões/MVP → G5 auditoria/autorização respeitados |

**Regra de titularidade:** a presença de MAT-001–012 na pauta histórica não comprova que Matheus seja automaticamente o decisor. Somente atribuições expressas de Marina prevalecem; DEC-024 e DEC-067 foram expressamente encaminhadas a Matheus.

## 3. Pacote de parâmetros ainda não decididos
1. **DEC-072 — recuperação sem e-mail:** documentação aceita, identidade/representação, poderes de autorização, notificações e trilha de auditoria; validação jurídica.
2. **DEC-072 — média docente:** número mínimo de avaliações válidas para mostrar ao professor a sua própria média, tratamento de exclusões/revisões e prevenção de inferência; notas individuais/ranking apenas internos à administração.
3. **DEC-072 — correção posterior de avaliação:** quem aprova impacto, reprocessamento, comunicação, contestação e preservação das versões anteriores.
4. **DEC-072 — plantão com menores:** política de admissão, moderação, relatos, medidas de proteção, imagem/voz e contingências; preservar acesso coletivo sem reservas.
5. **DEC-072 — ação administrativa sensível:** papéis, alçadas, motivo obrigatório, evidência mínima, auditoria e acesso excepcional.
6. **DEC-072 — KPIs:** dicionário de indicador com fonte, período, cálculo, qualidade/indisponibilidade, recortes e visibilidade; dado ausente nunca vira zero.
7. **Comercial/pedagógico:** reunir DEC-024, DEC-067/MAT-014 e itens MAT históricos ainda pendentes na pauta já preparada `docs/13-pauta-unificada-matheus.md`; não presumir decisão.
8. **Juridico:** LGPD, titulares/representação de menores, avaliação docente, certificados, retenção, direitos de acesso, gravação de sessões se alguma vier a ser proposta; nenhum parecer já emitido é presumido.

## 4. Critérios para homologação do fechamento funcional
- [x] Inventário de cobertura e riscos documentais consolidado (AUD-001–010).
- [x] AUD-001–003 corrigidos documentalmente, preservando histórico.
- [x] DEC-071/REQ-050 e DEC-072/REQ-051 incorporados.
- [x] Pauta unificada de Matheus preparada (não respondida).
- [ ] Conferência final de consistência entre escopo, requisitos, decisões, riscos e plano pedagógico.
- [ ] Titulares de cada decisão restante confirmados por Marina, sem reatribuição automática.
- [ ] Parâmetros operacionais e pedagógicos relevantes aprovados ou explicitamente classificados como bloqueios para os gates seguintes.
- [ ] Respostas de Matheus registradas por Marina em suas fichas canônicas quando exigidas.
- [ ] Validações jurídicas identificadas, realizadas antes de decisões/ações que delas dependem.
- [ ] Aprovação expressa de Marina para marcar a definição funcional como homologada.

## 5. Próxima sequência de trabalho
1. PM verifica referências cruzadas, prepara matriz de lacunas e alternativas de parâmetros sem inventar aprovações.
2. Marina recebe em bloco os parâmetros operacionais sob sua competência e confirma titularidades restantes.
3. Matheus recebe a pauta unificada na ocasião definida por Marina. Respostas retornam via Marina para registro no GitHub.
4. Assessoria jurídica emite pareceres sobre as matérias de sua competência.
5. PM reconcilia as decisões e apresenta checklist de gate G1 para homologação; só após isso iniciar estudo de stack e custos conforme DEC-035.

## 6. Governança e comunicação
- **GitHub:** todos os requisitos, decisões, riscos, bloqueios, evidências e alterações continuam integralmente aqui.
- **Notion:** somente síntese executiva fiel e datada extraída do GitHub; visibilidade para Matheus, sem transferir registros técnicos.
- **Claude:** nenhuma implementação, compra ou configuração de stack autorizada por este relatório.
- **Cronograma:** não há baseline final de MVP, prazo de 30 dias ou orçamento aprovado.
- **Natureza deste registro:** consolidação de fatos e dependências documentais, não uma DEC nova.

## Registro de autorização — 2026-11-02: quatro encaminhamentos da auditoria
**Decisão comunicada por Marina:** aprovados os encaminhamentos de **AUD-004, AUD-007, AUD-008 e AUD-009** para detalhamento e preparação documental. Esta aprovação é **de trabalho de especificação**, e não homologação de parâmetros, políticas jurídicas, decisões comerciais/pedagógicas de Matheus, tecnologia, custos, MVP ou implementação.

| Item | Encaminhamento autorizado | Estado do achado |
|---|---|---|
| AUD-004 | Detalhar jornadas excepcionais, recuperação e atualização de contas, prevenção de duplicidades, migração de alunos atuais, identidade de responsáveis e trilha de auditoria; preservar direitos sujeitos a contrato e parecer jurídico. | **EM DETALHAMENTO — não encerrado** |
| AUD-007 | Detalhar escala, substituição de professores, faltas, comunicação, contingências, acesso e moderação de plantões coletivos sem reserva e aulas particulares sem colisão; parâmetros comerciais permanecem com decisor competente. | **EM DETALHAMENTO — não encerrado** |
| AUD-008 | Preparar matriz de permissões por ação e dado, privacidade, LGPD e auditoria de operações sensíveis. **Cinco avaliações válidas é limiar inicial PROPOSTO** para liberar a própria média ao professor, não valor definitivo nem autorizado para implementação. Avaliar inferência, revisões e proteção de dados com Marina/jurídico. | **EM DETALHAMENTO — não encerrado** |
| AUD-009 | Preparar dicionário de KPIs com definição, fonte, fórmula, período, ausência de dados e permissões; especificar exportação CSV/Excel controlada e auditável. | **EM DETALHAMENTO — não encerrado** |

**Preservados como pendentes:** AUD-005 (comércio/Matheus nas atribuições confirmadas), AUD-006 (pedagogia; DEC-024 atribuída a Matheus e demais titularidades a confirmar), AUD-010 (gates de stack/custos/MVP/auditoria/execução). Não houve aprovação de parâmetros novos. **AUD-001–003** continuam resolvidos apenas documentalmente.
