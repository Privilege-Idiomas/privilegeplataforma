# Matriz de validação jurídica e privacidade — Privilège
Data: 2026-11-02 | Estado: PREPARADA PARA PARECER; **não é parecer jurídico nem aprovação de implementação**.
Origem: DEC-065/070/071/072/073, REQ-049/050/051, registro complementar REQ-052, AUD-004/007/008/009. GitHub é fonte canônica; Notion somente resumo executivo.

## Objetivo e classificação
Identificar decisões com necessidade de validação jurídica ou de privacidade antes de fechar as especificações. Pareceres e decisões posteriores devem registrar responsável, data, justificativa, evidência e documentos alterados. Não há manifestação jurídica recebida até o presente registro.

| ID | Tema e risco | Regra já aprovada / contexto | Pergunta objetiva para parecer | Evidência/artefato esperado | Responsável pelo fechamento | Situação |
|---|---|---|---|---|---|---|
| JUR-01 | Recuperação excepcional e fraude | Recuperação sem e-mail exige comprovação independente, análise autorizada e auditoria (DEC-072/073) | Quais provas proporcionais de identidade podem ser solicitadas, como verificar e por quanto tempo reter evidência? Quando avisar endereço antigo? | Procedimento de identidade, matriz de retenção, minimização e resposta a contestação | Assessoria jurídica (parecer); Marina (regra operacional) | PENDENTE |
| JUR-02 | Responsáveis, menores e alteração de vínculo | Vinculação pagador/aluno separada; não pressupor que pagador é responsável legal | Como comprovar representação e tratar guarda, mudanças de responsável, discordâncias e direitos do menor? | Política de representação, autoridade por operação, exigências de consentimento/bases legais | Jurídico e Marina | PENDENTE |
| JUR-03 | Migração de alunos, cancelamento e certificados | Evitar duplicatas e preservar histórico e certificados; direitos comerciais não definidos | Quais dados e direitos devem permanecer após cancelamento, inadimplência e retorno, e por quais prazos? | Matriz de dados/direitos e retenção, conferência contratual | Jurídico; Matheus nas decisões comerciais expressamente atribuídas | PENDENTE |
| JUR-04 | Plantões coletivos e exposição de menores | Plantão sem reserva, moderação, denúncia e contingência (DEC-066/072/073) | Quais salvaguardas para voz, imagem, interação entre participantes, supervisão, denúncia, restrições etárias e eventual gravação? | Política de participação, moderação, incidentes e privacidade por padrão | Jurídico, Marina/operação | PENDENTE |
| JUR-05 | Notas docentes, inferência e reputação | Professor vê apenas própria média condicionada a >=5 avaliações válidas; notas/ranking apenas administração autorizada | O limiar de 5 e a frequência de atualização impedem reidentificação de notas individuais? Que controles adicionais são necessários? | Avaliação de risco de inferência (janelas, atualizações, filtros, exclusões); parecer e decisão sobre limiar | Jurídico/privacidade; Marina decide parâmetro após validação | PENDENTE — limiar condicionado |
| JUR-06 | Permissões, acesso excepcional e auditoria | Mínimo privilégio, justificativa e agente identificado em intervenção sensível | Quais ações exigem dupla revisão, segregação de funções, evidência ou controles adicionais? | Matriz de acesso por ação/dado, política de trilha e revisão de privilégio | Marina; jurídico para dados pessoais | PENDENTE |
| JUR-07 | Atendimento a direitos LGPD e incidentes | Canal de solicitações e registro de suporte (DEC-070/071) | Quais bases legais, respostas a direitos, prazos aplicáveis, canal do titular e comunicação de incidentes? | Inventário de tratamentos, política de direitos, fluxo de incidentes | Jurídico/encarregado designado | PENDENTE |
| JUR-08 | Retenção de logs, avaliações, tickets, documentos e certificados | Auditoria e minimização aprovadas | Quais prazos por categoria e critérios de descarte, bloqueio e preservação legal? | Tabela de retenção e descarte, bases e exceções | Jurídico/privacidade; Marina valida operação | PENDENTE |
| JUR-09 | Exportações e indicadores | KPI com fonte/definição/período; dados ausentes não são zero; CSV/Excel restritos (DEC-072/073) | Quais perfis, granularidades e recortes são apropriados? Como reduzir risco de identificação de menores e indivíduos em grupos pequenos? | Matriz de exportação e avaliação de agregação/supressão | Jurídico/privacidade; Marina para gestão | PENDENTE |
| JUR-10 | Verificação pública de certificados | Validação pública limitada e dados parcialmente ocultos (DEC-052–062) | Tratamento de menores e risco de identificação por consultas repetidas, códigos compartilhados e formatos de nomes? | Revisão jurídica do validador e política de consultas | Jurídico e Marina | PENDENTE |
| JUR-11 | Aferição de idade e exigências do ECA Digital | Plataforma poderá atender menores; determinações específicas não presumidas | Quais deveres da Lei 15.211/2025 e regulamentação vigente se aplicam ao modelo da Privilège, inclusive aferição de idade, mediação parental e segurança por padrão? | Parecer de aplicabilidade legal, controle de riscos e lacunas | Jurídico/privacidade | PENDENTE |

## Diretrizes de revisão (não substituem parecer)
- Diferenciar papéis de estudante, responsável legal, pagador, professor e funcionário autorizado; negar por padrão acessos não concedidos.
- Nenhum documento de identidade, gravação ou dado sensível adicional é considerado obrigatório até definição de necessidade, finalidade e base legal.
- Não implementar ou mostrar a média do professor até validação de privacidade e proteção contra inferência, ainda que tenha cinco avaliações.
- Não presumir consentimento como única base legal; advogado/encarregado analisa base aplicável por finalidade e melhor interesse de crianças/adolescentes.
- Não pressupor gravação de plantões; se proposta, exige avaliação específica e aprovação.
- Prazos de retenção, SLA de suporte e comunicação de incidentes permanecem a definir de acordo com lei e operação.

## Referências oficiais para assessoria jurídica (consulta em 2026-11-02)
- ANPD ECA Digital: https://www.gov.br/anpd/pt-br/assuntos/eca-digital
- Ministério da Justiça ECA Digital: https://www.gov.br/mj/pt-br/assuntos/sua-protecao/sedigi/eca-digital/eca-digital-1
- Texto legal consolidado, Lei 15.211/2025: https://www2.camara.leg.br/legin/fed/lei/2025/lei-15211-17-setembro-2025-797997-normaatualizada-pl.html
- ANPD orientações preliminares de aferição de idade: https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-orientacoes-preliminares-e-cronograma-para-afericao-de-idade-no-ambiente-digital

## Condições de conclusão
- [x] Matriz de perguntas, riscos e responsáveis preparada.
- [ ] Parecer jurídico registrado para cada tema aplicável.
- [ ] Limiar de cinco avaliações verificado contra inferência, revisado se necessário.
- [ ] Marina valida parâmetros operacionais na competência própria; Matheus apenas nos temas expressamente atribuídos.
- [ ] Decisões e requisitos canônicos atualizados após validações.
- [ ] Gate de escopo homologado expressamente, antes da seleção de stack/custos/MVP e da autorização de implementação.

AUD-005/006/010 continuam pendentes. Este documento não autoriza implementação, contratos, cronograma, custos, MVP ou stack.
