# Preparação de produto independente da stack — Privilège

**Data:** 2026-11-02  
**Responsável pelo diagnóstico:** PM  
**Status:** artefato de planejamento preparado por orientação de Marina, **sem escolha de stack, MVP, fornecedores, contrato, orçamento ou execução**. Aplicar a DEC-035 integralmente.

## Objetivo
Adiantar elementos que serão úteis qualquer que seja a stack futura, evitando retrabalho: inventário de entidades e eventos, contratos funcionais de integração, casos de aceite, riscos e dependências. Nada aqui impõe framework, serviço, modelo físico de banco ou implementação.

## A. Inventário conceitual dos dados (não é esquema de banco)

| Entidade / conceito | Relacionamentos e regra de negócio importante | Privacidade / validação |
|---|---|---|
| Pessoa e identidade de acesso | papéis aluno/professor/admin e credenciais distintas por função | identificação, autenticação, recuperação e retenção |
| Pagador/responsável | um pagador pode contratar para vários alunos; não equivale a perfil acadêmico com acesso irrestrito | legitimidade para menores, CPF apenas pagador |
| Aluno e matrícula/direito | aluno individual; direitos por curso e/ou catálogo ligados à assinatura e ao momento contratual | contratos e migração de alunos existentes pendentes |
| Plano, assinatura, contrato e pagamento | estados comerciais, evidências de pagamento, vínculo ao pagador/aluno e concessão/revogação de direitos | Matheus decide parâmetros; acesso financeiro restrito |
| Curso, módulo, aula e versão publicada | curso contém módulos e aulas; conteúdo editorial e histórico/versionamento | diferença entre rascunho e publicado; migração de conteúdo |
| Material, vídeo, resumo, PDF | vinculados à aula, dependem do direito do curso | custo de streaming/armazenamento e privacidade |
| Questão, alternativa, gabarito, explicação | identificador público estável dentro do acesso; vínculo aula/módulo/curso; filtros de dificuldade | professor consulta catálogo completo; estudante não acessa curso bloqueado |
| Tentativa, avaliação e resultado | aprovação em avaliação obrigatória controla progressão; prática opcional não controla desbloqueio | não recalcular nota sem regra; parâmetro de nota Matheus |
| Progresso e conclusão | aulas aprovadas e requisitos reais; curso concluído vinculado a versão | DEC-024 ainda pendente; conservar histórico |
| Marcador pessoal de dúvida | vinculado ao aluno + questão, independente de acerto/erro | somente aluno titular pode ver, inclusive API |
| Certificado e versões | conclusão; emissão, código, QR, substituição/revogação, PDF privado e consulta pública mínima | quatro campos públicos aprovados; retenção legal |
| Professor, disponibilidade e escala | agenda declarada, indisponibilidades e escala de plantões | duração da particular pendente; zonas horárias |
| Reserva particular | data/hora escolhidas antes do professor, confirmação sem sobreposição | transação atômica e proteção contra dupla reserva |
| Janela de plantão e link | sala coletiva por janela fixa, professor escalado, link do dia; **nenhuma reserva de aluno** | moderação, proteção dos menores e contingência |
| Avaliação docente de particular | uma nota válida 1–5 por sessão efetivamente realizada, média e ranking interno | individual apenas admin; média própria apenas professor; baixa amostragem |
| Solicitação de suporte e relato de erro | titular, estado e histórico, objeto/aula/questão afetado | acesso restrito e moderação de anexos |
| Evento de auditoria e ocorrência | autor, momento, objeto, ação, resultado e justificativa quando relevante | retenção, acesso e integridade a definir |
| Métrica e exportação | fonte, fórmula, corte temporal e permissão associada | escopo exportável, logs e dados de menores |

**Observação:** entidades listadas são conceitos para discutir dados e custo; não representam tabelas, schemas, APIs implementadas ou arquitetura escolhida.

## B. Eventos e contratos funcionais sem tecnologia definida

- **Ativação de conta:** criação de relação aluno–pagador autorizada, token temporário, efeito único de ativação; retentativa não duplica contas.
- **Alteração de direitos após pagamento:** evento autenticado/validado na origem, atualização rastreável de direitos do curso; falhas de webhook e reconciliação precisam ser planejadas, sem assumir gateway.
- **Confirmação de particular:** conferir professor disponível na janela completa, elegibilidade do aluno e criar uma única reserva atômica; outro concorrente recebe conflito e nova lista.
- **Cancelamento/remarcação:** alterar a janela do professor somente conforme estado válido; créditos e prazo são pendências Matheus.
- **Plantão publicado:** horário, professor e link corrente; acesso direto sem reserva nem débito automático de crédito individual.
- **Resultado de avaliação:** persistir tentativa, gabarito/correção autorizados, critério de aprovação configurável, desbloqueio apenas quando permitido; evitar duplicação por reenvio.
- **Conclusão/certificado:** conclusão validada gera emissão única por evento de conclusão; correção cria nova versão auditada; verificador público limita dados.
- **Problema/suporte:** relata contexto mínimo, cria protocolo, triagem e resposta; evitar envio indevido de dados pessoais por e-mail.
- **Notificação:** envio de confirmação/lembrete de evento real; falha de e-mail não reverte reserva válida nem gera reserva fictícia.

Cada evento deverá especificar, antes da stack: produtor, pré-condições, destinatários, efeito idempotente, autorização, tratamento de erro, retenção, necessidade de monitoramento, volume esperado e custo variável. São **critérios de análise**, não ordem de implementar filas/webhooks.

## C. Casos prioritários de aceitação futura

| Caso | Cenário de teste esperado | Origem |
|---|---|---|
| AC-01 | Aluno A tem acesso ao curso X mas não a Y: não abre questões, avaliação ou PDFs de Y via interface/API; vitrine de agrupamentos bloqueados não revela questões individuais. | DEC-027, REQ-004/018 |
| AC-02 | Aluno conclui prática opcional sem avaliação obrigatória: progresso não libera próxima aula. | DEC-025/063 |
| AC-03 | Duas pessoas confirmam simultaneamente a mesma faixa do professor P: no máximo uma reserva confirmada, sem dupla cobrança/crédito. | DEC-069, REQ-048 |
| AC-04 | Professor P tem aula particular sobreposta a plantão escalado: não aparece na lista de docentes disponíveis. | DEC-066/069 |
| AC-05 | Aluno entra no plantão em janela publicada: sem criação de reserva particular nem obrigatoriedade de escolher professor. | DEC-066 |
| AC-06 | Professor consulta código de questão de qualquer curso autorizado: vê enunciado, alternativas, gabarito e explicação; não vê lista pessoal de dúvidas de alunos. | DEC-034 |
| AC-07 | Professor consulta avaliações: vê exclusivamente a própria média agregada sujeita à política anti-inferência; não vê notas individuais/ranking. | DEC-064/065 |
| AC-08 | Aluno deixa de ter direito ao curso: não revisa conteúdos restritos, mas mantém acesso aos certificados conquistados legalmente preserváveis. | DEC-051–062 |
| AC-09 | Código/QR do certificado: página pública mostra apenas status de autenticidade, curso, data de emissão e iniciais; documento privado mantém campos completos. | DEC-055–062 |
| AC-10 | Token de redefinição expira/é reutilizado: nenhuma recuperação indevida; dados do titular não expostos. | DEC-070 |
| AC-11 | Curso em rascunho: aluno não acessa; publicação e retirada deixam registro; histórico não é apagado indevidamente. | DEC-070 |
| AC-12 | Aluno menor/pagador com vários alunos: uma conta não expõe conteúdo acadêmico de outro estudante por trocar ID/URL. | DEC-040–043 |
| AC-13 | Exportação administrativa solicita dados além da permissão: recusa e registra tentativa, sem vazamento por download. | DEC-068/069 |
| AC-14 | Serviço externo cai durante confirmação/requisição: estado permanece consistente, tentativa segura não duplica efeitos. | DEC-070 |
| AC-15 | Falta de professor no plantão: alerta operacional e estado correto; horário de exemplo anterior não vira janela real automaticamente. | DEC-066/069 |
| AC-16 | Métricas de conclusão são calculadas pela aprovação das aulas aplicáveis, não por tempo assistido/prática opcional. | DEC-050/063, pendência DEC-024 |
| AC-17 | Reenvio de notificação falha: aula confirmada permanece confirmada; um email não é fonte canônica de agenda. | DEC-069/070 |

**Atenção:** estes são testes candidatos para planejamento, não testes executados nem requisitos comerciais novos aprovados.

## D. Checklist de segurança e conformidade para análise futura
- Autorização server-side por papel, operação, proprietário e curso contratado; negar por padrão.
- Proteção de contas de menores, legitimidade de pagadores e responsáveis, dados mínimos e revisão jurídica LGPD/ECA Digital.
- Separação de cobrança, conteúdo acadêmico, avaliação docente e suporte; exportações minimizadas e rastreáveis.
- Verificação pública de certificado sem exposição de nome completo; correções, substituições, revogações auditadas.
- Conteúdo editorial rascunho/publicado, política de alteração de avaliações, proteção de histórico acadêmico.
- Idempotência de pagamento, confirmação de agenda, avaliação e certificados; testes de concorrência.
- Política a definir para auditoria, retenção, backup, recuperação, incidentes e métricas operacionais.
- Moderação e proteção de menores em plantões coletivos com fornecedor de videoconferência externo; sem gravação pressuposta.

## E. Matriz de dependências para fechamento funcional

| Família | Titular ou validação | Bloqueia definição integral |
|---|---|---|
| Planos, preços, benefícios, cancelamentos, inadimplência, particular e plantão | Matheus conforme DEC-067/MAT-014 e itens canônicos atribuídos | Sim |
| Vídeo completo, nivelamento, nota mínima e recuperação pedagógica | Matheus conforme DEC-024 e pauta atribuída | Sim |
| Ativação/migração de alunos atuais, exceções e poderes de suporte | Marina + operação, com validação legal onde necessário | A validar |
| Proteção de menores, legitimidade, retenção, direitos LGPD e exposição de notas | Jurídico + Marina | Sim para regras afetadas |
| Exceções da publicação e impacto da versão em curso, moderação de plantões e métricas | Marina + responsáveis funcionais pertinentes | A validar |
| Arquitetura e fornecedores | Fase G2 posterior ao escopo integral | Não decidir agora |
| Estimativa de custo / MVP / aprovação de implementação | G3–G5 após G2, DEC-032/035/029 | Não decidir agora |

## F. Regra de controle de mudanças
Qualquer novo cenário de aceitação que exija **nova política funcional**, ampliação de dados, gasto, integração, cobrança ou acesso deve ser marcado **PROPOSTA** e submetido ao responsável. Preservar integralmente o GitHub como fonte canônica. Notion recebe somente resumo executivo derivado quando apropriado. Não abrir ordem de execução para Claude.

## Próximo passo objetivo
Submeter para Marina um único lote de validações operacionais remanescentes de `docs/11-detalhamento-final-operacional.md`, sem confundir tais propostas com aprovação. Levar decisões de Matheus em bloco para reunião. Após esse fechamento, comparar opções de stack para **o escopo final**, sem dependência antecipada de tecnologia.
