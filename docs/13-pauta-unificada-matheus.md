# Pauta unificada para reunião de decisões com Matheus

**Data de preparação:** 2026-11-02  
**Status:** pauta para reunião futura de Marina e Matheus, **SEM RESPOSTA**. Não atribuir aqui aprovação, presença, agendamento ou manifestação de Matheus.  
**Fontes:** `docs/09-decisoes-matheus.md` (canônico para decisões atribuídas), `docs/03-requirements.md`, `docs/10-auditoria-cobertura-funcional.md`, `docs/11-detalhamento-final-operacional.md` e `docs/12-preparacao-independente-de-stack.md`.

## Regra de governança
A reunião deve decidir **em bloco** os assuntos de Matheus, como Marina solicitou, para não interromper a descoberta funcional. Esta pauta **não substitui** o documento canônico; não muda titularidades, não cria novas MAT aprovadas e não transforma proposta em decisão. Os temas históricos MAT-001–012 devem ser confirmados conforme responsabilidade e status registrados no documento original, sem presumir que todos exigem nova decisão pessoal de Matheus.

## Bloco A — Modelo comercial e alunos
- **MAT-002 / REQ-003/004:** modalidades de assinatura (catálogo ou curso), nomes, conteúdo e acesso por plano, quantidade de alunos permitidos, renovação, testes, upgrade/downgrade e regras de status.
- **MAT-003:** meios de pagamento, faturamento, conciliação, inadimplência, cancelamento, reembolso, retorno após falha de cobrança e efeitos sobre direitos acadêmicos e certificados.
- **MAT-001, MAT-004:** confirmar somente pontos de baseline/público e catálogo inicial que continuarem formalmente pendentes na ata canônica. Catálogo de referência Basic English, Travel e Business já consta do escopo; não alterar sem aprovação.
- **Caso de decisão exigido:** aluno existente versus novo aluno; direito de acesso após compra; transição de plano e cancelamento; preservação de certificados conforme DEC-052–062.

## Bloco B — Aulas particulares e plantões: DEC-067 / MAT-014
**Decisão em aberto de dez propostas comerciais e operacionais, cuja redação integral e titularidade estão em `docs/09-decisoes-matheus.md`.**
1. Duração uniforme/configurável da aula particular.
2. Quantidade de aulas/benefícios incluídos por plano e período.
3. Exibição de saldo de créditos para aulas particulares conforme direito.
4. Políticas e antecedência de cancelamento/reagendamento de aluno.
5. Efeito de ausência do aluno sobre aula/saldo.
6. Ausência ou falha do professor, reposição e compensação.
7. Plantões com janelas institucionais fixas, **coletivos e sem reservas**, sem consumir crédito de particular.
8. Gestão/administração de sessões e ocorrências.
9. Estrutura para eventual compra avulsa de aulas extras, sem ativá-la ou precificá-la automaticamente.
10. Outros parâmetros correlatos constantes da DEC-067 canônica, que prevalece se houver diferença de resumo.

**Restrições funcionais já aprovadas que a reunião não deve apagar por omissão:** agendamento individual segue ordem **dia e horário → docentes disponíveis**; confirmação impede dupla reserva e sobreposição de horários (DEC-069/REQ-048). Plantão continua entrada livre coletiva em janela publicada (DEC-066), não há reserva do aluno; horários numéricos anteriores eram exemplos e não decisão.

## Bloco C — Pedagógico
- **DEC-024 / MAT-009:** exigir ou não assistir 100% do vídeo para conclusão, distinguindo visualização de aprovação em avaliação (a obrigatoriedade não está aprovada).
- **MAT-005:** objetivos e trilhas prioritárias com os três cursos compartilhados.
- **MAT-006:** desenho do teste de nivelamento, papel na entrada por objetivo, opcionalidade e recomendações.
- **MAT-007:** nota mínima de aprovação e escala de notas.
- **MAT-008:** confirmação dos detalhes ainda pendentes de avaliações, segunda tentativa, revisão e recuperação.
- **MAT-010:** apoio após duas tentativas insuficientes e relação com benefícios do plano.

**Regras da Marina já aprovadas:** prática facultativa, avaliação da aula obrigatória para avanço, segunda tentativa condicionada ao resumo escrito e orientação a apoio após reprovação (DEC-025/063); nenhum formato futuro pode apagar essas regras sem nova decisão competente.

## Bloco D — Orçamento, entregas e projeto
- **MAT-011 / MAT-012** e outras pautas históricas: confirmar governança, orçamento e critérios de sucesso apenas quando a análise técnica/financeira estiver pronta.
- **Não aprovar MVP nem orçamento na reunião sem comparativo de stack e custos:** DEC-035 exige concluir **escopo integral → stack → custo → versões/MVP**, com posterior autorização DEC-029. Caso a reunião anteceda G2/G3, registrar decisões comerciais/pedagógicas e deixar orçamento/MVP explicitamente **PENDENTE**.
- Antiga meta preliminar de 30 dias não está validada como cronograma de entrega.

## Modelo de ata para preenchimento posterior (sem respostas presumidas)
| Referência | Pergunta/alternativas | Decisão comunicada por Marina | Situação | Efeito em requisito/escopo | Exige custo/jurídico |
|---|---|---|---|---|---|
| DEC-024 | Exigência de vídeo completo | — | SEM RESPOSTA | REQ-013/015/041 | — |
| DEC-067/MAT-014 | Dez regras de atendimento | — | SEM RESPOSTA | REQ-044/045/048 | — |
| MAT-002/003 | Planos, cobrança e acesso | — | SEM RESPOSTA | REQ-003/004/020 | — |
| MAT-005/006/007/008/010 | Trilhas, nivelamento, avaliações e apoio | — | SEM RESPOSTA | REQ-006–008/013–015 | — |
| Demais itens MAT históricos | Conferir pauta canônica | — | CONFERIR | Conforme documento canônico | — |

**Após a reunião:** Marina comunica as respostas; atualizar `docs/09-decisoes-matheus.md`, índice, requisitos, escopo e matriz de dependências, cada alteração com histórico Git. Não inferir aprovação pelo simples registro da reunião ou por silêncio.
