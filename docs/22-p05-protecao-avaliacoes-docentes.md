# P-05 — Avaliações docentes: modelo de ameaças de inferência e controles candidatos
**Data:** 2026-11-02 | **Status:** PREPARAÇÃO FUNCIONAL DE PRIVACIDADE; SEM PARECER, SEM HOMOLOGAÇÃO E SEM IMPLEMENTAÇÃO
**Fontes:** DEC-064/065/071/072/073, REQ-042/043/051/052, AUD-008, JUR-05/08/09, docs/15/16/20/21.

## 1. Política já aprovada e ressalva vinculante
- Avaliação docente de atendimento particular realizado: escala de 1 a 5, validada conforme requisitos existentes; notas individuais e ranking são restritos à administração autorizada.
- Docente poderá ver somente sua **própria média agregada**, desde que contabilize **ao menos cinco avaliações válidas** **e** sejam concluídas satisfatoriamente a validação de privacidade e a proteção contra inferência (DEC-073).
- O número **5 é aprovado condicionalmente**, não um sinal de que seja seguro por si só. **Enquanto JUR-05 permanecer aberto, o professor não deve receber a média, mesmo que existam cinco ou mais avaliações.**
- Não há aprovação para exibir histórico detalhado, distribuição por estrelas, filtros, rankings, valores por atendimento ou médias públicas.

## 2. Modelo de ameaças
| ID | Vetor | Exemplo numérico ilustrativo | Impacto | Contramedidas candidatas (não aprovadas) |
|---|---|---|---|---|
| INF-01 | Diferença entre duas médias com n conhecido | Com n=5, média 4,0; após uma avaliação, n=6, média 4,1667: a nova nota é 5 se o docente conhece ambos os valores exatos | Revelar nota individual | Não publicar atualização após cada voto; ocultar contagem exata e histórico temporal; publicar apenas em janelas agregadas, ainda sujeito a estudo |
| INF-02 | Comparação de médias arredondadas | Publicações 4,2 e 4,3 em datas próximas podem limitar as notas possíveis | Inferência aproximada | Verificar quantitativamente combinações de arredondamento, frequência e volume; simples arredondamento não é garantia |
| INF-03 | Professor conhece participante e hora | Só uma aula particular ocorreu desde a última média publicada | Atribuir contribuição a aluno conhecido | Janelas com entradas suficientes e atraso de atualização; testar cenários de baixa atividade |
| INF-04 | Exclusão ou correção retroativa | Média muda após excluir um único registro contestado | Revelar avaliação removida | Suprimir eventos pontuais de revisão e reavaliar divulgação; preservar versão apenas para administração |
| INF-05 | Filtros e cortes pequenos | Média por mês/curso/modalidade com um avaliador | Reidentificação por segmento | Não disponibilizar filtros ou segmentação para professor sem avaliação específica |
| INF-06 | Exportação, notificações e API | Tela oculta, mas endpoint/CSV/notificação retorna contagem ou média detalhada | Contorno de proteção | Aplicar mesma política no backend, exportação, cache e notificações; testes de negativa |
| INF-07 | Colusão ou divulgação externa | Professor combina dados de agenda com comentário do aluno | Inferência contextual | Reduzir granularidade temporal e exposição de metadados; não prometer anonimato matemático absoluto |
| INF-08 | Poucas avaliações persistentes | Professor com exatamente cinco avaliações conhece cinco alunos | Possível dedução mesmo sem eventos adicionais | Analisar se limiar cinco é suficiente; considerar elevar limiar ou não mostrar até existir diversidade adequada |
| INF-09 | Nota manipulada ou duplicada | Uma sessão recebe múltiplas notas ou registro fictício | Médias distorcidas e manipulação | Contabilizar só avaliações válidas de sessões realizadas; invalidar duplicidades; trilha de correção |
| INF-10 | Alteração de amostra em atendimento contestado | Uma avaliação passa de válida a inválida e o total cai para quatro | Exposição imprópria e reversão tardia | Ocultar média quando amostra válida cai abaixo do mínimo; controlar cache/snapshots |
| INF-11 | Acesso administrativo indevido | Suporte sem atribuição acessa ranking ou nota individual | Violação por privilégio | Separação de funções, necessidade de acesso, justificativa e trilha JUR-06 |
| INF-12 | Pequeno conjunto em relatório compartilhado | Relatório interno agregado exportado por grupo com único docente/usuário | Inferência indireta | Restrições de exportação, supressão de pequenos grupos e revisão de finalidade JUR-09 |

**Nota matemática:** se duas médias *exatas* consecutivas e os respectivos tamanhos das amostras forem conhecidos, uma avaliação adicionada pode ser calculada por `nova_nota = n_novo * media_nova - n_antigo * media_antiga`. Ocultar apenas a nota individual não impede esse ataque.

## 3. Regras candidatas de proteção para validação
1. **C-P05-01:** aplicar checagem de elegibilidade da média no servidor antes de responder interface, API, relatório ou exportação.
2. **C-P05-02:** publicar no máximo uma média consolidada por janela de atualização a definir; não divulgar alterações por evento unitário nem carimbo de última avaliação.
3. **C-P05-03:** testar exigência de quantidade mínima de novas avaliações por janela além do limiar inicial, com supressão quando insuficiente.
4. **C-P05-04:** não dar ao professor filtros por aluno, curso, turma, período, professor comparado, modalidade ou sessão.
5. **C-P05-05:** revisar precisão e arredondamento dos valores, sem supor que uma casa decimal, sozinha, oferece anonimização.
6. **C-P05-06:** se avaliação for anulada/revisada, reavaliar elegibilidade e evitar tornar público o evento de alteração individual.
7. **C-P05-07:** definir procedimento de contestação e reprocessamento auditável, preservando histórico para papéis administrativos autorizados.
8. **C-P05-08:** negar por padrão qualquer consulta a notas individuais e ranking fora das competências administrativas.
9. **C-P05-09:** não guardar ou exportar informações adicionais além da finalidade definida; retenção sob JUR-08.
10. **C-P05-10:** realizar simulação de inferência com agendas observáveis, janelas pequenas, alterações de média, exclusões e múltiplos canais de acesso.

Nenhuma dessas medidas configura política final sem revisão de Marina e parecer de privacidade/JUR-05.

## 4. Cenários de aceite e evidências a exigir antes de liberação
| Teste | Cenário | Resultado mínimo |
|---|---|---|
| P05-T01 | Quatro notas válidas | Professor não obtém média em nenhum canal |
| P05-T02 | Cinco notas, JUR-05 pendente | Professor continua sem média |
| P05-T03 | Cinco notas e mecanismos homologados | Apenas média própria agregada pode ser exibida conforme política final, sem dados individuais |
| P05-T04 | Nota invalidada, n cai de 5 para 4 | Média deixa de ser disponibilizada, inclusive em API/cache |
| P05-T05 | Uma nota nova entre duas publicações | Avaliar se diferenças ou contexto revelam nota; bloquear política vulnerável |
| P05-T06 | Professor solicita CSV, API ou URL de ranking | Negado, com registro adequado |
| P05-T07 | Administrador sem privilégio acessa voto individual | Negado |
| P05-T08 | Administrador autorizado revisa nota | Motivo, impacto e versão auditáveis; impedir vazamento por atualização visível |
| P05-T09 | Apenas um atendimento ocorreu na janela | Não liberar agregação que permita inferência contextual |
| P05-T10 | Relatório de grupo pequeno ou envolvendo menores | Consulta e exportação minimizadas/suprimidas conforme política aprovada |

## 5. Pacote objetivo de validação JUR-05
**Enviar ao responsável por privacidade/jurídico:** (a) DEC-073; (b) cenários INF-01–12; (c) controles C-P05-01–10; (d) testes T01–10; (e) relação de campos de agenda acessíveis ao docente; (f) política de atualização e formato da média a ser propostos posteriormente.
**Perguntas a responder:** (1) com os metadados acessíveis ao professor, cinco votos são suficientes? (2) qual janela mínima e quantidade de novas avaliações evitam inferência plausível? (3) qual precisão de média pode ser exibida? (4) como reprocessar notas revisadas sem revelar votos? (5) qual evidência permite homologação e o que exige revisão do parâmetro?

## 6. Responsabilidades e bloqueios
- **PM:** preparar ameaças e testes, não decidir conformidade.
- **Marina:** validar proposta operacional após parecer; qualquer mudança do valor cinco requer decisão explícita.
- **Jurídico/privacidade:** parecer JUR-05 e validações de retenção/exportação JUR-08/09.
- **Matheus:** nenhuma decisão de sua competência é inferida deste documento.
- **Gates:** não liberar exibição, escolher stack, aprovar custos, definir MVP nem enviar para execução antes de DEC-035/029.
**Estado:** P-05 preparado documentalmente; proteção anti-inferência e liberação permanecem PENDENTES.
