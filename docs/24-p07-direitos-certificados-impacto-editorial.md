# P-07 — Direitos de acesso, certificados e alterações acadêmicas/editoriais
**Data:** 2026-11-02 | **Estado:** especificação de produto preparada; não homologada; sem tecnologia, custo, MVP ou implementação.
**Referências:** DEC-024/025/051–063/070–073, REQ-003/004/013–017/029–040/041/049–052, AUD-004/006/008, JUR-03/08/10, P-02, P-04, P-06.
**Legenda:** V = funcionalidade já aprovada; P = detalhe/caso candidato a validar; E = decisão externa ainda pendente.

## 1. Conceitos que não devem ser confundidos
| Conceito | Definição funcional | Fonte e condicionante |
|---|---|---|
| Identidade | Conta e vínculo da pessoa; não é direito pago | V — REQ-002/021–024 |
| Contrato e benefício | Acordo do pagador, modalidade, vigência e produtos incluídos | E — MAT-002/003/DEC-067 |
| Direito ao curso | Elegibilidade de acesso ao material, exercícios e avaliações de cada curso | V — REQ-003/004; E — política comercial detalhada |
| Progresso acadêmico | Resultado real por aula e avaliação, associado ao aluno e versão | V — REQ-030/031 |
| Conclusão | Cumprimento dos critérios acadêmicos vigentes da versão do curso | V — regras de progressão; E — nota mínima, DEC-024 |
| Certificado | Documento de conclusão legitimamente conquistado, com código/QR e versões | V — DEC-052–062; jurídico/retencão E |
| Publicação editorial | Estado da aula/questão/curso e sua versão, independente da assinatura | V — DEC-070/071 |
| Retenção e auditoria | Preservação necessária de histórico e evidências | V quanto à necessidade de trilha; E — prazos e bases jurídicas |

## 2. Jornadas e transições de negócio

### P07-J01 — Aquisição, acesso e mudança de plano
[V] O aluno acessa somente cursos contratados, com vitrine e indicação de acesso conforme direito. [P] Uma alteração confiável do contrato recalcula elegibilidade, sem converter conta em nova identidade e sem duplicar alunos. [E] Upgrade, downgrade, inadimplência, cancelamento, carência e créditos dependem de decisão comercial e contrato. **Aceite:** URL direta não abre PDF/questões/avaliações de curso não contratado; documento de conclusão previamente emitido permanece acessível conforme regra e lei.

### P07-J02 — Aula concluída, tentativa e progressão
[V] Prática é opcional; avaliação obrigatória e aprovação efetiva controlam o avanço, não o simples tempo de vídeo nem porcentagem arredondada. [V] O resumo escrito auxilia a segunda tentativa conforme regras já aprovadas. [P] Registrar tentativa e resultado de maneira idempotente, mantendo vínculo à versão e ao gabarito utilizado. [E] Nota mínima, recuperação pedagógica e exigência de vídeo DEC-024 seguem em aberto. **Aceite:** praticar sem avaliação não avança; resultado insuficiente não emite certificado; retentativa não duplica conclusão.

### P07-J03 — Primeira emissão e re-download do certificado
[V] Conclusão acadêmica confirmada aciona emissão automática de PDF privado em Meus certificados, **sem disparar e-mail automático**. [V] Download gratuito e ilimitado do **mesmo documento emitido** não cria certificado novo e não muda data de emissão. [P] Falha durante criação gera recuperação segura sem duplicar certificados. **Aceite:** um evento de conclusão não gera emissões duplicadas por reenvio; aluno autenticado consulta documentos próprios; expiração de contrato não concede acesso ao curso nem retira indevidamente certificado conquistado.

### P07-J04 — Verificação pública, correção, substituição e revogação
[V] Código único e QR identificam verificação pública com dados minimizados conforme REQ-034–040; PDF privado contém identificação completa aprovada. [V] Após correção autorizada, versão anterior não aparece publicamente como válida, mas permanece rastreável à administração competente. [P] Corrigir nome após comprovação, preservar referência à conclusão, registrar autor, motivo, versão e resultado. [E] Provas, prazo de retenção e proteção de menores dependem JUR-08/10. **Aceite:** certificado revogado/substituído não valida como vigente; consulta pública não expõe dados privados além dos campos aprovados; troca de código não dá acesso ao PDF privado.

### P07-J05 — Atualização curricular após conclusão
[V] Alteração futura de curso não invalida certificado anteriormente conquistado; histórico da conclusão, versão curricular e carga horária oficial da emissão permanecem coerentes. [P] Diferenciar alunos já concluídos de matrículas ainda ativas afetadas por alteração. [E] Regras de migração automática/manual de progresso de alunos em andamento precisam revisão operacional/pedagógica. **Aceite:** versão nova não recalcula silenciosamente certificado antigo; não transformar conclusão passada em incompleta por simples publicação.

### P07-J06 — Correção retroativa de questão/gabarito publicado
[V] Deve haver revisão de impacto antes de correção retroativa que altere resultados já divulgados, com decisão motivada e rastreabilidade. [P] Identificar tentativas afetadas, simular efeitos sobre notas, desbloqueios, curso concluído e certificados, produzir parecer de impacto e somente então submeter à alçada competente. [E] Quem autoriza, quando reprocessar, como comunicar e qual recurso pedagógico de contestação ainda dependem de validação. **Aceite:** nenhuma alteração silenciosa de nota/certificado; contagem de conclusões não duplica; alterações reversíveis/documentadas conforme decisão formal.

### P07-J07 — Cancelamento, retorno e conservação de histórico
[V] Separar login, direito de consumo acadêmico, histórico e certificado conquistado. [P] Cancelamento ou inadimplência muda acesso conforme política aplicável, não apaga por padrão histórico nem documento já emitido; retorno reconcilia registros sem nova identidade indevida. [E] Vigência, reembolso, reativação, benefícios, direitos adquiridos e retenção ficam com responsáveis comerciais/jurídicos. **Aceite:** acesso vencido não permite consumir conteúdo restrito; retorno não duplica progresso, certificado nem cobrança.

## 3. Matriz de impacto de eventos
| Evento | Direito ao curso | Progresso | Certificado | Auditoria/validação |
|---|---|---|---|---|
| Contratação confirmada | Depende de produto contratado | Preservar | Preservar | Contrato/fonte verificável |
| Pagamento falhou | **Não determinar sem política comercial** | Preservar | Preservar nos limites legais | Estado financeiro rastreável |
| Cancelamento | Depende da política de vigência | Preservar conforme lei | Acesso ao certificado legítimo conforme DEC-062/JUR | Registro da mudança de estado |
| Curso atualizado | Reavaliar direito à nova versão segundo política | Não recalcular silenciosamente | Não invalidar certificado conquistado | Versionar conteúdo |
| Gabarito corrigido | Geralmente não altera direito comercial | Revisão de impacto antes de mudar | Avaliar efeito, sem revogar automaticamente | Decisão competente auditada |
| Correção de nome no certificado | Inalterado | Inalterado | Nova versão autorizada, antiga inválida para verificação pública | Trilha de versões |
| Certificado revogado justificadamente | Inalterado | Avaliar fundamento | Consulta pública não mostra válido | Alçada, motivo e preservação de evidência |
| Migração de aluno atual | Sem equivalência comercial presumida | Conciliar registros | Preservar documentos comprovados | Identidade e contrato |

## 4. Testes funcionais candidatos
1. Aluno com acesso a curso A não acessa aula, questões, PDF ou avaliação do curso B por URL/API.
2. Prática opcional concluída sem avaliação aprovada não libera aula seguinte.
3. Reenvio de evento de conclusão gera no máximo uma emissão correspondente.
4. Rebaixar plano não apaga certificado anteriormente emitido, sujeito à retenção.
5. Novo download do certificado mantém código, identidade do documento e data original.
6. Código de certificado revogado ou substituído não informa status válido.
7. Verificador público não dá acesso ao PDF privado nem a dados além da lista aprovada.
8. Correção de nome gera histórico e invalida versão anterior publicamente.
9. Nova versão curricular não invalida certificado concluído na versão antiga.
10. Alteração retroativa de gabarito exige análise de impacto e autorização antes do reprocessamento.
11. Dois eventos idênticos de pagamento/cancelamento não duplicam direitos nem certificados.
12. Reativar aluno não converte uma matrícula antiga em outra sem reconciliação.
13. Aluno menor e pagador não recebem acesso irrestrito cruzado aos documentos do estudante.
14. Dado histórico ausente não é presumido como nota zero ou reprovação.

## 5. Pendências registradas para o fechamento de G1
| ID | Matéria | Decisor/validador |
|---|---|---|
| B-P07-01 | Modalidades contratuais, vigência, cancelamento, inadimplência, reembolso e retorno | Titularidade comercial confirmada; Matheus quando expressamente atribuído |
| B-P07-02 | Nota mínima, nivelamento, regras pedagógicas de exceção e DEC-024 sobre vídeo | Matheus em DEC-024; demais conforme titularidade confirmada por Marina |
| B-P07-03 | Representação de menores, retenção de certificados e direito de acesso pós-contrato | Jurídico JUR-02/03/08/10; Marina |
| B-P07-04 | Autoridade e procedimento de revisão retroativa de avaliações e comunicação aos atingidos | Marina/autoridade pedagógica competente, a confirmar |
| B-P07-05 | Migração de progresso de alunos ainda ativos após mudanças curriculares | Marina, com validação pedagógica competente |
| B-P07-06 | Arquitetura de versões e emissão, custo de armazenamento/PDF/verificação e ordem de implementação | Apenas G2–G5 conforme DEC-035/029 |

**Resultado:** 7 jornadas, 8 linhas de impacto, 14 testes candidatos; **sem novas políticas aprovadas**. Este documento prepara o fechamento do produto, mas não homologa escopo, cronograma, tecnologia, custos, MVP ou delegação ao Claude. GitHub é a fonte integral; Notion apenas painel executivo derivado.
