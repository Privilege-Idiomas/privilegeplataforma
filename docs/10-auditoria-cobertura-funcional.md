# Auditoria documental de cobertura funcional — Plataforma Privilège

**Data:** 2026-11-02  
**Status:** diagnóstico de PM; **não é nova aprovação funcional**, autorização financeira, seleção de MVP nem autorização de implementação.  
**Fonte canônica:** GitHub `Privilege-Idiomas/privilegeplataforma`. Notion permanece painel executivo derivado.

## 1. Objetivo e método
Revisão de consistência e rastreabilidade entre `docs/02-scope.md`, `docs/03-requirements.md`, `docs/04-decision-log.md`, `docs/06-roadmap.md`, `docs/07-learning-paths.md`, `docs/08-decisoes-marina.md` e `docs/09-decisoes-matheus.md`.

O levantamento **não verifica código, telas, configuração real, serviços externos, testes, produção nem condições contratuais**. “Coberto” significa que a função aparece especificada documentalmente, não implementada. Critérios de aprovação não resolvidos são preservados.

## 2. Cobertura funcional documentada
| Domínio | Base documental | Situação |
|---|---|---|
| Aquisição e páginas de curso | DEC-036–048, REQ-020/025–028 | Abrangência funcional aprovada; planos, gateways e dados finais pendentes |
| Identidades, pagadores, menores | DEC-037–043, REQ-002/021–024/049 | Padrões funcionais existentes; validação jurídica/fluxos excepcionais pendentes |
| Catálogo, cursos e trilhas | REQ-005–011, DEC-044–051, MAT-004–006 | Jornada mapeada; desenho pedagógico/nivelamento e aprovação Matheus pendentes |
| Aula, prática, avaliação e progresso | DEC-025/027/028/031–034/049–051/063, REQ-012–019/029–031/041 | Amplo escopo; DEC-024 (vídeo), nota mínima e exceções pendentes |
| Certificados | DEC-052–062, REQ-032–040 | Pacote funcional encerrado; jurídico, valores pedagógicos, stack/custos pendentes |
| Professores e avaliação interna | DEC-034/064/065, REQ-042/043 | Aprovado funcionalmente; visibilidade protegida, regras de inferência/moderação pendentes |
| Particulares e plantões | DEC-066/069, REQ-044/048 | Particular agendada com seleção data/horário antes do professor e anticolisão; plantão coletivo sem reserva; termos comerciais DEC-067/MAT-014 pendentes |
| Administração, relatórios, automações | DEC-068/069, REQ-046/047 | 12 áreas administrativas + 12 funções de relatórios/integracões aprovadas; permissões operacionais e indicadores específicos pendentes |
| Suporte, editorial, privacidade, resiliência | DEC-070, REQ-049 | Oito funções aprovadas; desenho de fluxos, responsabilidades, recuperação e conformidade pendentes |

## 3. Achados e ações recomendadas
| ID | Prioridade | Achado verificável | Tratamento seguro |
|---|---|---|---|
| AUD-001 | Alta — documentação | `docs/03-requirements.md`, seção 8, ainda manda transformar requisitos em tarefas no **ClickUp**, apesar da DEC-026 (Notion executivo e GitHub canônico). | Corrigir instrução para **GitHub**; Notion apenas relatório executivo derivado. Ajuste documental, sem nova decisão de produto. |
| AUD-002 | Alta — documentação | `docs/02-scope.md` continua estruturado como **MVP preliminar**, com seção “fora do escopo inicial” e quadro antigo. A nota de governança recente alerta, mas o corpo permanece desatualizado. | Consolidar documento de escopo integral com os requisitos aprovados, marcando claramente fases/release **não escolhidos**. Preservar histórico e DEC-035, não suprimir distinções entre aprovado e proposto. |
| AUD-003 | Média — documentação | `docs/06-roadmap.md` conserva fases e marcos referenciais com linguagem de MVP e referência de 30 dias; já ressalva que nada foi aprovado. | Reorganizar visualização por **gates DEC-035**: escopo → stack → custos → versões → auditoria/autorização. Não inventar cronograma; conservar versão histórica. |
| AUD-004 | Alta — regras de exceção | Fluxos de **ativação/migração de alunos atuais, recuperação de conta, responsável/pagador e trocas de titularidade** aparecem em documentos diversos, mas casos críticos não têm mapa ponta a ponta. | Fazer especificação integrada de jornadas e casos excepcionais, incluindo crianças, alteração de e-mail, cancelamento e direitos adquiridos, sem atribuir decisões de Matheus a Marina. |
| AUD-005 | Alta — consistência financeira/comercial | `REQ-003/004/014/044/045` e DEC-067 dependem de **planos, cobrança, benefícios, créditos, cancelamento e efeitos de inadimplência**, ainda não aprovados. | Concentrar para **reunião única de Matheus**, com alternativas, efeitos por plano, valores e impactos em cada jornada; não registrar propostas como aprovadas. |
| AUD-006 | Alta — pedagógico | `DEC-024` continua REVISAR; `MAT-006/007/008` e `REQ-013/015` mantêm nivelamento, nota mínima e exceções pendentes. | Levar a uma pauta pedagógica consolidada de Matheus; preservar prática opcional e duas tentativas existentes, sem inferir validação automática. |
| AUD-007 | Média — operações | Plantão aberto coletivo está claro (DEC-066), mas **escala, substituição, admissões, ordem de dúvidas, contingência e proteção de menores** exigem procedimento. Particular tem anticolisão (REQ-048), mas duração e regras de saldo dependem de Matheus. | Separar regras operacionais configuráveis dos parâmetros comerciais sob Matheus; especificar contingência e privacidade, sem configurar horários exemplificativos como definitivos. |
| AUD-008 | Alta — segurança e dados | Há autorização por perfil e proteção de menores, porém faltam matrizes de permissão **por ação/dado**, política de retenção, fluxo de pedido LGPD e procedimentos de acesso excepcional. Média docente com amostra muito pequena pode revelar nota individual. | Projetar matriz de privilégios e critérios de privacidade antes da stack/execução; validar juridicamente crianças, responsáveis, avaliações e certificados. |
| AUD-009 | Média — qualidade e mensuração | REQ-046/047 aprovam relatórios, mas definicões de métricas, base de cálculo, recortes e exportação não estão fechadas. | Inventariar definições e fontes de cada KPI; restringir exportação por papel, sem inventar dados nem contratar BI. |
| AUD-010 | Alta — planejamento/custo | Não existe aprovação financeira nem autorização do Claude para os pacotes recentes. Requisitos têm gatilhos de custo qualitativos, não números confiáveis por stack. | Cumprir DEC-032/035: primeiro escopo, stack e análise de custo inicial/fixo/variável; depois MVP/versões; só então auditoria DEC-029 e autorização explícita. |

## 3.1. Andamento das ações autorizado por Marina em 2026-11-02

| ID | Resultado documental | Situação |
|---|---|---|
| **AUD-001** | A seção 8 de `docs/03-requirements.md` foi corrigida no GitHub para backlog **GitHub**, com Notion exclusivamente executivo. | **RESOLVIDO — documentação** |
| **AUD-002** | `docs/02-scope.md` recebeu inventário **integral atualizado** de domínios aprovados e foi identificado o bloco histórico de MVP, sem classificar versões nem excluir a história. | **RESOLVIDO — consolidação documental**, dependências comerciais/pedagógicas permanecem abertas |
| **AUD-003** | `docs/06-roadmap.md` apresenta gates vigentes G1–G5 da DEC-035; fases antigas são apenas referência histórica, sem cronograma ou prazo de 30 dias aprovado. | **RESOLVIDO — documentação** |
| **Cinco frentes transversais** | `docs/11-detalhamento-final-operacional.md` especifica jornadas excepcionais, papéis/privacidade, contingências, editorial/suporte e KPI/exportações. | **DETALHAMENTO PROPOSTO**, sem aprovação automática de novas regras, parâmetros ou implementação |

**Autorização da Marina:** “Vamos avançar com essas cinco e com as tres primeiras pendências que você mandou pode seguir de acordo com o seu encaminhamento”. Isto autoriza correções AUD-001/002/003 e preparo de especificação, **não é aceitação explícita de todas as políticas e fórmulas ainda propostas**. Os itens AUD-004 a AUD-010 seguem pendentes conforme dependências; algumas frentes já estão documentadas para futura validação.

## 4. Proposta para a rodada final de descoberta — **não aprovada**
Apresentar um único pacote de validação, sem microdecisões repetitivas, abrangendo (i) mapa de jornadas críticas e estados excepcionais; (ii) matriz de papéis e proteção de dados; (iii) procedimentos de suporte/contingência; (iv) regras de publicação/versionamento; (v) métricas e exportação; (vi) operação coletiva e segurança dos plantões; (vii) checklist de prontidão de produto; (viii) conciliação documental dos arquivos legados. Itens que já são requisitos aprovados devem ser tratados como **detalhamento**, não como novas funcionalidades ou aprovações automáticas.

## 5. Reunião consolidada de Matheus
Pauta existente em `docs/09-decisoes-matheus.md`: DEC-024 e DEC-067/MAT-014, MAT-001–012 conforme respectivas classificações e ressalvas. Não transferir decisão sem instrução explícita de Marina; reunir os itens para uma decisão em bloco, sem mudar titularidades históricas não verificadas. O escopo funcional de Marina permanece válido.

## 6. Conclusão e próximos gates
A cobertura funcional é **ampla, mas ainda não auditada como completamente encerrada**. Primeiro conciliar documentação e confirmar se há lacunas materiais com Marina; aguardar reunião consolidada de Matheus para questões que são dele; somente depois finalizar escopo integral e iniciar seleção de arquitetura, análise financeira e decisão de versões conforme DEC-035.

**Sem autorização de implementação ou Claude.**

## Registro de autorização — 2026-11-02: quatro encaminhamentos da auditoria
**Decisão comunicada por Marina:** aprovados os encaminhamentos de **AUD-004, AUD-007, AUD-008 e AUD-009** para detalhamento e preparação documental. Esta aprovação é **de trabalho de especificação**, e não homologação de parâmetros, políticas jurídicas, decisões comerciais/pedagógicas de Matheus, tecnologia, custos, MVP ou implementação.

| Item | Encaminhamento autorizado | Estado do achado |
|---|---|---|
| AUD-004 | Detalhar jornadas excepcionais, recuperação e atualização de contas, prevenção de duplicidades, migração de alunos atuais, identidade de responsáveis e trilha de auditoria; preservar direitos sujeitos a contrato e parecer jurídico. | **EM DETALHAMENTO — não encerrado** |
| AUD-007 | Detalhar escala, substituição de professores, faltas, comunicação, contingências, acesso e moderação de plantões coletivos sem reserva e aulas particulares sem colisão; parâmetros comerciais permanecem com decisor competente. | **EM DETALHAMENTO — não encerrado** |
| AUD-008 | Preparar matriz de permissões por ação e dado, privacidade, LGPD e auditoria de operações sensíveis. **Cinco avaliações válidas é limiar inicial PROPOSTO** para liberar a própria média ao professor, não valor definitivo nem autorizado para implementação. Avaliar inferência, revisões e proteção de dados com Marina/jurídico. | **EM DETALHAMENTO — não encerrado** |
| AUD-009 | Preparar dicionário de KPIs com definição, fonte, fórmula, período, ausência de dados e permissões; especificar exportação CSV/Excel controlada e auditável. | **EM DETALHAMENTO — não encerrado** |

**Preservados como pendentes:** AUD-005 (comércio/Matheus nas atribuições confirmadas), AUD-006 (pedagogia; DEC-024 atribuída a Matheus e demais titularidades a confirmar), AUD-010 (gates de stack/custos/MVP/auditoria/execução). Não houve aprovação de parâmetros novos. **AUD-001–003** continuam resolvidos apenas documentalmente.
