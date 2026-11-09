# P-08 — Checklist integrado de aceitação funcional e prontidão para validação
**Privilège | 2026-11-02 | Estado:** CHECKLIST DOCUMENTAL PREPARADO; testes não executados; escopo não homologado.
**Fontes conferidas:** P-02 a P-07 (docs/19–24), DEC-029/035/071–073, REQ-048–052 e matriz jurídica docs/16.
**Critério de interpretação:** PRONTO = cenário e resultado esperado descritos; NÃO significa produto testado, decisão aprovada ou conformidade certificada. CONDICIONADO = depende de regra, parecer ou parâmetro não aprovado. PROPOSTO = novo detalhamento ainda sujeito à validação.

## 1. Matriz integrada de cobertura de aceitação
| ID | Domínio | Cenários mínimos documentados | Evidência esperada no futuro teste | Estado documental |
|---|---|---|---|---|
| AC-P08-01 | Ativação | Compra/ativação exige controle de e-mail; duplicidade e evento repetido não criam aluno duplicado | Conta única, direitos corretos, evento rastreado | PRONTO / comercial condicionado |
| AC-P08-02 | Migração | Identidade ambígua e alunos atuais não são unidos automaticamente | Histórico preservado, vinculação analisada | CONDICIONADO a contratos e jurídico |
| AC-P08-03 | Recuperação | Token expirado/reutilizado falha; não enumera conta | Recusa segura e trilha minimizada | PRONTO / parâmetros condicionados |
| AC-P08-04 | Recuperação sem e-mail | Pagador não comprova autoridade sobre login acadêmico só por pagar | Fluxo motivado, verificação independente | CONDICIONADO a JUR-01/02 |
| AC-P08-05 | Menores e responsáveis | Trocar identificador não expõe dados de outro aluno | Isolamento de acesso por vínculo e papel | CONDICIONADO a JUR-02/11 |
| AC-P08-06 | Acesso contratado | Sem direito ao curso, URL/API de material e avaliação são negadas | Acesso negado por recurso | PRONTO / estados comerciais pendentes |
| AC-P08-07 | Particular | Duas confirmações simultâneas não criam dupla reserva; professor em conflito não aparece | Um único agendamento válido | PRONTO / duração pendente |
| AC-P08-08 | Remarcação e faltas | Notificação falha, reserva mantém estado; nenhum crédito é descontado sem regra | Histórico consistente sem efeito financeiro presumido | CONDICIONADO a DEC-067 |
| AC-P08-09 | Plantão | **HISTÓRICO SUPERADO:** o critério original previa entrada sem reserva e sem consumo de crédito. **REGRA VIGENTE:** reserva obrigatória, 20 min, até 10 vagas, consumo de crédito conforme cancelamento e presença; ver AC-P08-09-R1/R2 | Negar entrada sem reserva, controlar vagas e créditos, disponibilizar alternativas quando lotado | ATUALIZADO POR DEC-074–080; teste pendente |
| AC-P08-10 | Contingência plantão | Ausência docente resulta substituição autorizada ou suspensão comunicada | Ocorrência e status real | PRONTO / alçadas operacionais a validar |
| AC-P08-11 | Denúncia de menor | Relato não se torna visível a público ou docente não autorizado | Minimização e controle de acesso | CONDICIONADO a JUR-04/11 |
| AC-P08-12 | Permissões | Pagador, aluno, docente, suporte e administrador ficam limitados ao papel e titularidade | Testes de acesso direto em API/exportação | PRONTO / matriz G1–G5 a validar |
| AC-P08-13 | Intervenção sensível | Operação sem autorização/justificativa não é permitida | Negação e trilha de auditoria | PRONTO / alçadas condicionadas |
| AC-P08-14 | Nota docente individual | Professor não acessa nota individual/ranking por tela, API, download | Todas as rotas negadas | PRONTO |
| AC-P08-15 | Média docente | Com 4 votos oculta; com 5 ainda oculta enquanto não houver JUR-05 e anti-inferência homologados | Sem exposição por nenhum canal | CONDICIONADO a JUR-05 |
| AC-P08-16 | Inferência | Atualização unitária, revisão e corte pequeno não permitem deduzir voto | Avaliação quantitativa da política | CONDICIONADO a JUR-05/09 |
| AC-P08-17 | Prática/avaliação | **REGRA VIGENTE:** prática opcional; realização da avaliação obrigatória conclui etapa mesmo com nota abaixo de 6, sem bloqueio por nota; tentativas ilimitadas. A redação anterior exigia avaliação *aprovada* e está superada; ver AC-P08-17-R1/R2/R3 | Progresso sem reprovação; recomendação de revisão e histórico preservado | ATUALIZADO POR DEC-074–080; DEC-024 segue com Matheus, teste pendente |
| AC-P08-18 | Gabarito retroativo | Alteração de avaliação publicada exige revisão de impacto prévia | Decisão auditada sem alteração silenciosa | PRONTO / alçada condicionada |
| AC-P08-19 | Certificado | Emissão única, PDF privado, re-download não gera emissão nem nova data | Versão e data estáveis | PRONTO |
| AC-P08-20 | Correção/revogação | Certificado substituído/revogado não aparece válido no verificador público | Estado e versão corretos | PRONTO / jurídico pendente |
| AC-P08-21 | Currículo atualizado | Nova versão não invalida certificado emitido legitimamente | Histórico e versão preservados | PRONTO / progresso em curso pendente |
| AC-P08-22 | KPI | Fonte inexistente/denominador zero não vira valor zero inventado | Código de qualidade e corte coerentes | PRONTO / fórmulas pendentes |
| AC-P08-23 | Exportação | Perfil sem privilégio não exporta dados financeiros/de menores nem votos docentes | Negação e log | PRONTO / jurídico pendente |
| AC-P08-24 | Conciliação | Eventos repetidos de pagamento/conclusão não duplicam direitos, receitas ou certificados | Idempotência e rastreabilidade | PRONTO / gateway e política comercial pendentes |
| AC-P08-25 | Suporte | Ticket reaberto não é contado automaticamente como novo, sem regra | Indicadores consistentes | CONDICIONADO a estados/reabertura |
| AC-P08-26 | Continuidade | Falha externa ou notificações não criam confirmação fictícia | Estado canônico e recuperação segura | PROPOSTO; testes técnicos posteriores |

## 2. Lacunas e conflitos a tratar sem redecisão automática
| ID | Lacuna de definição | Risco se não sanada | Dependência |
|---|---|---|---|
| GAP-01 | Política comercial de aquisição, vigência, planos, créditos, cancelamento e inadimplência | Direitos inconsistentes entre checkout/curso/particular | AUD-005, DEC-067, MAT atribuídas |
| GAP-02 | Critérios pedagógicos de nivelamento, nota mínima, vídeo e exceções | Conclusão e certificados divergentes | AUD-006, DEC-024, MAT competentes |
| GAP-03 | Identificação excepcional, menores, guarda e retenção | Fraude ou acesso indevido | JUR-01/02/03/07/08/11 |
| GAP-04 | Regras operacionais de moderação, voz/imagem e denúncia | Proteção insuficiente de menores | JUR-04/11; Marina |
| GAP-05 | Nomenclatura e alçadas exatas dos cinco grupos administrativos | Superpermissão ou bloqueios indevidos | P-04, Marina, JUR-06 |
| GAP-06 | Validação quantitativa de inferência com cinco avaliações | Exposição indireta da nota individual | P-05, JUR-05/09 |
| GAP-07 | Métricas financeiras, reabertura de suporte e janelas de medição | Indicadores enganosos | P-06, comércio, Marina |
| GAP-08 | Política de impacto retroativo de gabarito/currículo para alunos em progresso | Histórico inconsistente | P-07, alçada acadêmica/Marina |
| GAP-09 | Retenção, consultas públicas de certificado e exportações | Riscos jurídicos e de dados pessoais | JUR-08/09/10 |
| GAP-10 | Integrações, fornecedores, serviços e parâmetros de custo | Dimensionamento inadequado | Somente G2/G3 após G1 |

## 3. Checklist de passagem ao pacote executivo de Matheus
- [x] P-02 a P-07 presentes no repositório e utilizados como referência documental.
- [x] Cenários positivos e adversos rastreados em uma matriz integrada.
- [x] Dependências comerciais, pedagógicas e jurídicas classificadas sem aprovação presumida.
- [ ] Alçadas históricas MAT-001–012 confirmadas pela Marina antes de atribuir respostas.
- [ ] Pauta unificada de Matheus enriquecida com consequências de cada escolha, sem antecipar respostas.
- [ ] Controles operacionais próprios de Marina que ainda demandarem nova regra submetidos em bloco.
- [ ] Pareceres JUR-01 a JUR-11 concluídos quando aplicáveis.
- [ ] Matheus responde às decisões expressamente de sua alçada.
- [ ] G1 — escopo integral homologado expressamente.
- [ ] G2/G3/G4/G5 subsequentes segundo DEC-035 e DEC-029.

## 4. Próximos passos sem depender de Matheus
1. Preparar matriz de alternativas e consequências econômicas **qualitativas** de MAT/DEC-024/067, sem estimar custo ou escolher stack.
2. Consolidar dúvidas operacionais restantes sob Marina em pacote único, separando recomendação de decisão efetiva.
3. Montar o pacote de prontidão de G1 com rastreabilidade e bloqueios, sem homologação presumida.
4. Preparar checklist de handoff futuro ao Claude sem criar ordem de execução.

**Resultado:** P-08 pronto apenas como artefato documental. Nenhum cenário foi executado ou certificado. Stack, custos, MVP e implementação NÃO autorizados. GitHub canônico; Notion somente síntese executiva.


## Auditoria incremental G1 — 2026-11-05 (DEC-074 a DEC-079 e decisões de 03–05/11)
**Natureza:** conferência documental da PM. Não é teste de sistema, homologação do G1, parecer jurídico nem aprovação de stack/custos/MVP/execução. Comparados, nesta rodada, o presente checklist, `docs/03-requirements.md`, `docs/04-decision-log.md`, `docs/08-decisoes-marina.md`, `docs/09-decisoes-matheus.md`, `docs/06-roadmap.md`, `docs/18-revisao-cruzada-p01.md` e a matriz jurídica `docs/16-matriz-validacao-juridica-privacidade.md`. Não foram executados testes.

### Critérios atuais incorporados à matriz de aceite (substituem descrições históricas conflitantes)
| ID | Tema | Critério de aceite documental atualizado | Evidência necessária para teste futuro | Situação |
|---|---|---|---|---|
| AC-P08-09-R1 | Plantão agendado | Sessão coletiva de 20 min com reserva prévia obrigatória, até 10 vagas; **Plano 1 não tem plantões (DEC-082); Planos 2/3 têm 2/4 plantões mensais** | Reserva atômica, negação de 11ª vaga, **negação de reserva ao Plano 1**, validação de benefício e acesso ao link | REQUISITO ATUALIZADO (DEC-082); teste pendente |
| AC-P08-09-R2 | Cancelamento/lotação plantão | Desmarcação com pelo menos 2h preserva crédito; menos de 2h ou ausência consome; plantão lotado exibe alternativas, sem lista de espera; créditos mensais não cumulativos | Saldos, reservas/estornos, lotação e comunicação | REQUISITO APROVADO; teste pendente |
| AC-P08-10-R1 | Plantão cancelado pela escola | Restituição somente a alunos com reserva confirmada na sessão cancelada; sem crédito extra a não inscritos e sem transferência automática ao mês seguinte | Histórico de reservas, estorno de crédito e ausência de bônus indevido | REQUISITO APROVADO; jurídico pendente |
| AC-P08-17-R1 | Avaliação e conclusão | Avaliação obrigatória realizada, sem nota eliminatória; nota menor que 6 sugere revisão; terceira ocorrência em módulos distintos no mesmo curso recomenda apoio; usar nota mais recente de cada módulo | Progressão sem bloqueio, certificação por conclusão, contagem e recálculo das dificuldades | REQUISITO APROVADO; teste pendente |
| AC-P08-17-R2 | Banco de questões | Total de questões configurável; selecionar sorteando questões aprovadas filtradas; embaralhar questões e alternativas; bloquear publicação se banco elegível insuficiente | Publicação recusada e filtros aplicados no servidor | REQUISITO APROVADO; teste pendente |
| AC-P08-17-R3 | Tentativas e interrupção | Tentativas ilimitadas sem revisão obrigatória; nota/gabarito/explicação após envio; autosave por resposta; retomada com limite máximo de 30 dias; gráfico e histórico | Persistência, autorização, auditoria e datas, retomada e feedback | REQUISITO APROVADO; marco inicial de 30 dias pendente |
| AC-P08-19-R1 | Pós-conclusão e certificado | Nova tentativa permitida com acesso vigente, sem alterar data original de conclusão/emissão; após contrato terminado, certificados legítimos permanecem consultáveis | Histórico imutável de conclusão, acesso autorizado ao certificado e negação de tentativa sem direito | REQUISITO APROVADO; jurídico/retenção pendentes |
| AC-P08-07-R1 | Particular com imprevisto docente | Reagendamento com mesmo ou outro professor disponível à escolha do aluno, crédito preservado | Disponibilidade e saldo corretos, sem dupla reserva | REQUISITO APROVADO; teste pendente |
| AC-P08-06-R1 | Contratação e cobrança | Sem teste gratuito; upgrade imediato proporcional (fórmula pendente); downgrade apenas na renovação; escolha de renovação na contratação; retentativas de cartão; 30 dias de tolerância com direitos mantidos | Estados financeiros/direitos, auditoria e comunicação segregada | PARCIAL: diretrizes aprovadas, parâmetros comerciais/jurídicos pendentes |
| AC-P08-03-R1 | Segurança e suporte | Troca de e-mail confirma endereços antigo e novo ou fluxo excepcional; revogar demais sessões após suspeita de invasão; evitar cadastro duplicado; suporte na plataforma com protocolo e e-mail | Recuperação, tokens/sessões, separação por titularidade, tickets | REQUISITO APROVADO; jurídico e detalhes pendentes |

### Inconsistências documentais identificadas — não equivalem a novas decisões
| ID | Evidência conflitante/obsoleta | Regra atualmente prevalente | Ação de correção | Status |
|---|---|---|---|---|
| REC-G1-01 | AC-P08-09 original indica plantão sem reserva; REQ-044/048 e DEC-066 históricos repetem entrada livre | Reserva prévia obrigatória, 20 min, 10 vagas, créditos mensais 1/2/4, DEC-066 atualizada | Consolidar texto principal dos documentos e substituir critérios de aceite históricos sem apagar versão Git | ABERTO — este adendo fixa precedência; corpo legado ainda precisa revisão |
| REC-G1-02 | AC-P08-17, REQ-013/015 e índice DEC-016–021 ainda mencionam nota mínima eliminatória e até duas tentativas | Avaliação obrigatória não eliminatória, tentativas ilimitadas, nota 6 orientativa e regra de três módulos | Reconciliar seções e índice antigos com DEC-074/075/079 e confirmações pedagógicas posteriores | ABERTO — adendos canônicos prevalecem |
| REC-G1-03 | `docs/06-roadmap.md` e pacote de reunião `docs/26-pacote-reuniao-matheus-decisao.md` conservam pendências e regras anteriores a 03/11 | Conferir as respostas comunicadas por Marina e atualizar status sem presumir aprovação de Matheus | Atualizar cronologia de marcos, decisões e escopo; manter gate G1 sem homologação | ABERTO |
| REC-G1-04 | DEC-075 indicava banco insuficiente e prazo de retomada como pendentes | DEC-079 resolve bloqueio de publicação e teto de 30 dias | Marcar apenas estes subitens como resolvidos; manter início do prazo e efeito da expiração pendentes | SUBITENS RESOLVIDOS; especificação residual ABERTA |
| REC-G1-05 | Documentos jurídicos JUR-04 descrevem plantão sem reserva | Plantão exige reserva e limite de participantes; moderação e proteção de menores continuam críticas | Atualizar contexto enviado à assessoria jurídica; não marcar parecer recebido | ABERTO — jurídico |
| REC-G1-06 | Visão antiga de notas/aprovação nos certificados | Certificado após componentes obrigatórios e realização das avaliações, sem nota mínima eliminatória | Reconciliar regras de conclusão e certificados, preservando privacidade e auditoria | ABERTO — revisão documental/jurídica |

### Pendências remanescentes classificadas sem inventar respostas
- **Comercial/contratual:** preços e benefícios finais do catálogo; fórmula do ajuste proporcional no upgrade; modalidade efetiva de renovação e comunicação; critérios detalhados de cobrança/retentativas e início da tolerância; efeitos jurídicos de cancelamento e rescisão, especialmente multa; consolidação de titularidades/validações com Matheus onde for de sua competência.
- **Pedagógico/editorial:** desenho detalhado de trilhas e nivelamento; tratamento de alteração posterior de gabaritos; marco inicial e destino da tentativa interrompida após 30 dias; configuração suficiente do banco de questões; regras detalhadas de publicação e revisão de avaliações.
- **Operacional:** ausência de horário docente alternativo, moderação de salas com menores, regras finais de atendimento e alçadas administrativas, suporte e retenção/continuidade.
- **Jurídico/privacidade:** JUR-01–11 sem parecer recebido neste material, inclusive menores, LGPD, retenção, certificados e anti-inferência de médias docentes; consultar `docs/16-matriz-validacao-juridica-privacidade.md`.
- **Financeiro/técnico:** custos de implantação, mensal fixo, variáveis por uso e administrativo **não estimados/aprovados**, fornecedores e stack **não escolhidos**, MVP/versões e cronograma **não homologados**, Claude/produção **não autorizados**.

**Status de prontidão:** G1 **EM AUDITORIA / NÃO HOMOLOGADO**. O conteúdo deste adendo é diagnóstico e harmonização documental; não transforma perguntas pendentes em decisões.


## Auditoria incremental G1 — atualização após DEC-080 (2026-11-05)
**Escopo:** conferência das 15 escolhas expressamente confirmadas; não foram executados testes nem obtido parecer jurídico. O G1 permanece **NÃO HOMOLOGADO**.
| ID | Área | Novo critério vigente para o teste futuro | Situação |
|---|---|---|---|
| AC-DEC080-01 | Nivelamento | Teste opcional acessível antes/durante curso; recomenda nível e curso sem bloqueio; faixas configuráveis por equipe pedagógica | Diretriz aprovada; banco/faixas concretas pendentes |
| AC-DEC080-02 | Trilhas | Basic não obrigatório; aluno pode mudar trilha sem perder progresso; admin organiza cursos por objetivo sem duplicar conteúdo nem conceder acesso não contratado | Diretriz aprovada; catálogo real de trilhas pendente |
| AC-DEC080-03 | Tentativa interrompida | Expira 30 dias após **início** da tentativa, com aviso, retomada até o limite e nova tentativa após expiração se houver acesso | Diretriz aprovada; antecedência/canal do aviso e retenção pendentes |
| AC-DEC080-04 | Gabarito e conteúdo | Reprocessamento de nota após correção de gabarito exige análise de impacto e aprovação; conteúdo versionado preserva conclusões/certificados legítimos | Diretriz aprovada; fluxos editoriais e alunos em andamento pendentes |
| AC-DEC080-05 | Upgrade | Proporcional ao período restante e diferença de planos; cálculo/condições exibidos antes de confirmar | Diretriz aprovada; fórmula concreta, gateway, valores e jurídico/comercial pendentes |
| AC-DEC080-06 | Renovação | Opção explícita entre renovar automaticamente ou encerrar no período final; opção persistida por contrato/pagador | Diretriz aprovada; efeitos nas durações, textos legais e consentimento pendentes |
| AC-DEC080-07 | Cobrança | Política de retentativas configurável conforme gateway com limites e avisos; tolerância de 30 dias a partir de vencimento não pago mantém benefícios | Diretriz aprovada; fornecedor, parâmetros e conformidade pendentes |
| AC-DEC080-08 | Docente sem substituto | Abrir atendimento para solução individual sem consumir crédito quando escola não oferece professor alternativo | Diretriz aprovada; solução comercial/legal final pendente |

### Reconciliação de pendências da auditoria anterior
- **REC-G1-04:** resolvidos pela DEC-080 o marco inicial de 30 dias e o tratamento funcional da expiração; **permanecem** em aberto forma/antecedência do aviso e retenção de respostas não submetidas.
- **P01-05 / AUD-006:** definidos por Marina os princípios de nivelamento e trilhas, a avaliação não eliminatória e as tentativas ilimitadas. **Permanecem** as faixas reais, o conteúdo do teste, objetivos publicados de cada trilha e atribuição explícita de DEC-024 a Matheus, além do necessário alinhamento documental.
- **GAP-01 / AUD-005:** definidos as bases do rateio de upgrade, opção de renovação, retentativas configuráveis e início da tolerância. **Permanecem** preços, fórmula detalhada, validação de contratos/consentimento, gateway, demais condições comerciais e jurídico.
- **GAP-08:** decidido o modelo de versionamento de aulas/módulos e aprovação antes de reprocessamento de gabarito; **permanecem** critérios para alunos em andamento, responsáveis/aprovadores específicos e efeitos de correções no histórico.
- **REC-G1-01/02/03/05/06:** conflitos de texto legado ainda exigem consolidação no corpo dos documentos. Adendos DEC-074–080 determinam precedência; **não** retornar às regras históricas.
- **JUR-01–11:** nenhuma aprovação jurídica presumida. Pauta de validação de menores, LGPD, avaliações docentes, contratos, cancelamentos e certificados permanece separada.

### Próximos atos da PM sem aprovação de execução
1. Harmonizar seções operativas legadas de requisitos e checklist, mantendo trilha de histórico no Git.
2. Consolidar perguntas efetivamente abertas por titularidade: Marina (parâmetros operacionais/editoriais), Matheus (comercial e DEC-024, se ainda exigida), jurídico (contratos/menores/LGPD).
3. Preparar pacote final de aceite G1 **para validação expressa**, sem escolher stack, dimensionar custos como aprovados ou autorizar Claude a executar.


### Atualização DEC-082 — plano exclusivamente digital (2026-11-08)
- **AC-DEC082-01:** conta com Plano 1 acessa exclusivamente os cursos gravados e recursos digitais habilitados; não possui saldo elegível de plantões ou particulares e recebe bloqueio na interface e API de agendamento, sem crédito criado por engano.
- **AC-DEC082-02:** dois plantões/mês do Plano 2 e quatro do Plano 3 permanecem até decisão futura; sessão com reserva de 20min e 10 vagas continua exigida.
- **Precedência:** onde as seções históricas citarem “1 plantão” para o Plano 1, aplicar DEC-082. Nenhum preço, contrato ou benefício de aulas particulares de Plano 3 foi aprovado por este ajuste.


### Aceite funcional complementar — DEC-083 (2026-11-08)
- **AC-DEC083-01:** usuário do Plano 3 com contrato elegível tem saldo mensal de **2 créditos de particular, cada qual com sessão de 50 minutos**, e **4 créditos de plantões de 20 minutos**, sem fusão ou transferência de créditos entre categorias.
- **AC-DEC083-02:** duas reservas particulares confirmadas no mesmo mês consomem apenas dois créditos de particulares, respeitando política de cancelamento e disponibilidade, sem impedir quatro reservas de plantão independentes.
- **AC-DEC083-03:** tentativa de terceira particular inclusa é recusada quando saldo esgotado; **não** oferecer automaticamente aula avulsa ou cobrança adicional sem política futura aprovada.
- **AC-DEC083-04:** Plano 1 não pode reservar particulares/plantões; Plano 2 possui dois plantões por mês sem particulares inclusas. Preços e contratos aguardam homologação comercial; nenhuma implementação autorizada.


### Correção por auditoria direta da ata (2026-11-08)
A **DEC-024** de dispensa de vídeo integral foi **confirmada expressamente por Matheus na reunião 03/11** (00:18:39 e 00:43:36), não está mais pendente. Critérios antigos que apresentam reprovação, nota eliminatória ou bloqueio pela reprodução integral são superados pela ata e pelas DEC-074–080. As pendências genuínas do produto, jurídico e fornecedores constam de `docs/33-auditoria-pendencias-reais-pos-reuniao-2026-11-08.md`. Não confundir texto legado com requisito atual.
