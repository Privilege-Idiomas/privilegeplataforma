# P-02 — Jornadas funcionais de identidade, acesso e contas
**Projeto:** Privilège | **Data:** 2026-11-02 | **Status:** ESPECIFICAÇÃO PREPARATÓRIA PARA CONFERÊNCIA, SEM EXECUÇÃO
**Fontes:** DEC-036–043/070–073; REQ-001/002/020–024/049–052; AUD-004; docs/11,12,16,17,18.
**Convenção:** [VIGENTE] regra aprovada; [PROPOSTO] comportamento de detalhamento a validar; [EXTERNO] decisão comercial ou parecer jurídico pendente. Não escolher stack/provedor.

## J-01 — Ativação de aluno novo após compra
**Ator:** pagador (e aluno/responsável quando aplicável). **Entrada:** direito contratado informado por fonte confiável, dados mínimos e endereço de contato.
1. [VIGENTE] Fluxo público de aquisição e confirmação segura do e-mail; aluno possui acesso próprio distinto do pagador; um pagador pode vincular vários alunos.
2. [VIGENTE] Ativar aluno individual sem presumir que sessão de checkout prova domínio do e-mail. Direitos de curso dependem do contrato.
3. [PROPOSTO] Transição `PENDENTE_VALIDACAO → ATIVACAO_CONFIRMADA → ACESSO_CONFORME_DIREITO`, com registro temporal; tokens de uso único e expiração.
4. [PROPOSTO] Reenvio controlado e resposta neutra para cadastro existente; repetição de evento não duplica identidade/vínculo.
**Exceções:** pagamento pendente, endereço inválido, token expirado, e-mail já vinculado, falha no envio, aluno menor, múltiplos alunos por pagador.
**Aceite:** não ativar terceiro sem prova de controle do canal; duplicidade bloqueada; falha de e-mail não cria acesso fictício; nenhum direito comercial não contratado é concedido.
**Condicionantes:** [EXTERNO] política de plano/direitos MAT-002/003, base legal/representação JUR-02.

## J-02 — Aluno existente e migração de cadastro
**Entrada:** aluno com possível histórico pré-existente.
1. [VIGENTE] Atender alunos atuais e novos; preservar histórico acadêmico e certificados legitimamente emitidos conforme regras aplicáveis.
2. [PROPOSTO] Conciliar pessoa, contas, matrícula e direitos por sinais confiáveis, sem depender de coincidência simples de nome.
3. [PROPOSTO] Ambiguidade encaminhada a suporte autorizado; não unir perfis automaticamente quando houver conflito de identidade.
4. [PROPOSTO] Operação de migração rastreável; tentativas repetidas idempotentes.
**Exceções:** dois registros para a mesma pessoa, homônimos, pagador trocado, menor sem representação comprovada, contrato antigo sem equivalência clara.
**Aceite:** jamais exibir histórico de outro aluno; não perder conclusão/certificado válido; nenhuma equivalência ou benefício comercial inventado.
**Condicionantes:** [EXTERNO] política de transição contratual MAT-001/002/003 conforme titularidade e jurídico JUR-03.

## J-03 — Recuperação comum de senha
**Entrada:** solicitação de redefinição por e-mail.
1. [VIGENTE] Link temporário de uso único para redefinir senha; não divulgar se conta existe.
2. [PROPOSTO] Validar token e estabelecer nova credencial; invalidar token após uso e registrar evento seguro.
3. [PROPOSTO] Limitar abusos e aplicar notificação apropriada, sem incluir senhas ou tokens em logs.
**Exceções:** token expirado/reutilizado, solicitação repetida, sessão antiga, envio indisponível.
**Aceite:** token reutilizado não redefine senha; retorno não enumera conta; nenhum segredo em logs.
**Condicionantes:** duração exata, forma de revogação de sessões, controles antifraude a validar.

## J-04 — Recuperação excepcional sem acesso ao e-mail
**Entrada:** perda comprovada de controle do endereço anterior.
1. [VIGENTE] Solicitar recuperação excepcional com verificação independente de identidade, análise por administrador autorizado e justificativa auditada.
2. [PROPOSTO] Abrir protocolo com dados mínimos; operador verifica autoridade e vínculo sem basear a prova apenas em informações públicas.
3. [PROPOSTO] Aprovação ou recusa fundamentada; alteração de canal somente depois das verificações; notificações quando apropriadas.
4. [PROPOSTO] Tratar disputa de titularidade e suspeita de fraude por canal separado; nenhuma mudança silenciosa.
**Exceções:** menor representado, solicitação por pagador sem autoridade de guarda, documentação inconsistente, conta sob contestação.
**Aceite:** solicitação incompleta não transfere acesso; trilha comprova agente e razão; resposta a terceiros preserva privacidade.
**Condicionantes:** [EXTERNO] quais documentos/provas aceitos, sua retenção e alçadas JUR-01/02/06.

## J-05 — Alteração de e-mail
**Entrada:** titular autenticado ou fluxo excepcional aprovado.
1. [VIGENTE] Alteração segura de e-mail; e-mail de cobrança do pagador não altera login acadêmico do aluno.
2. [PROPOSTO] Reautenticação proporcional ao risco, confirmação do novo endereço e aviso ao contato anterior quando seguro.
3. [PROPOSTO] Persistir mudança com trilha, sem expor endereços de outros alunos vinculados ao mesmo pagador.
**Exceções:** endereço já utilizado, perda simultânea dos dois endereços, e-mail novo não confirmado, menor representado.
**Aceite:** identidade/titularidade preservada; não permitir mudança apenas por controlar cobrança.
**Condicionantes:** JUR-01/02; regras de sessões.

## J-06 — Vínculo responsável, pagador e múltiplos alunos
**Entrada:** criação, atualização ou contestação de vínculo.
1. [VIGENTE] Pagador pode manter múltiplos alunos e não recebe acesso acadêmico irrestrito por pagar; contas infantis são geridas com representação apropriada.
2. [PROPOSTO] Confirmar competência para cada operação e aluno; registrar mudanças sensíveis e notificar envolvidos quando apropriado.
3. [PROPOSTO] Proteger histórico e impedir associação cruzada por ID/URL ou alteração de cobrança.
**Exceções:** guarda compartilhada, divergência entre responsáveis, dois pagadores, emancipação/maioridade, falecimento, disputa ou perda de acesso.
**Aceite:** vínculo de um aluno não dá acesso a outro; contestação não promove alteração automática.
**Condicionantes:** [EXTERNO] regras jurídicas de representação e bases legais JUR-02/11.

## J-07 — Cancelamento, inadimplência e reativação
**Entrada:** mudança de situação contratual proveniente de fonte confiável.
1. [VIGENTE] Disponibilidade de cursos depende de direito vigente e certificados conquistados seguem política de preservação aprovada e lei.
2. [PROPOSTO] Separar estados de cobrança, matrícula, direito de curso e identidade; eventos repetidos não duplicam benefício.
3. [PROPOSTO] Mudança contratual não destrói histórico acadêmico; apresentar orientação adequada ao estado real.
**Exceções:** pagamento em disputa, renovação tardia, cancelamento após conquista de certificado, migração de plano.
**Aceite:** não bloquear certificado legitimamente preservado; não liberar curso sem direito; não presumir carência.
**Condicionantes:** [EXTERNO] Matheus decide prazos, reembolsos e benefícios dentro da alçada, e jurídico valida retenção.

## Matriz de controle transversal
| Controle | Evidência funcional exigida | Situação |
|---|---|---|
| Autorização | Ator, papel, titular e vínculo verificados por operação | Diretriz vigente; matriz completa P-04 pendente |
| Auditoria | Quem, quando, objeto, ação, resultado, justificativa para caso sensível | Diretriz vigente; prazo de retenção JUR-08 |
| Privacidade | Minimização, não enumeração e isolamento entre alunos | Diretriz vigente, validação JUR pendente |
| Idempotência | Reenvios de ativação, recuperação e migração não duplicam efeitos | Critério proposto de implementação futura |
| Estado consistente | Falhas externas não geram confirmação falsa de acesso/direito | Critério proposto de aceite |
| Direitos legais | Certificados e direitos adquiridos tratados com base nas regras aplicáveis | Parecer e contrato pendentes |

## Registro de bloqueios para G1
- **B-P02-01:** parâmetros de segurança e provas de recuperação excepcional — Marina + JUR-01/02.
- **B-P02-02:** definição operacional de alteração de responsável/titularidade — Marina + JUR-02/11.
- **B-P02-03:** migração de alunos atuais e equivalência de benefícios — decisões comerciais atribuídas e JUR-03.
- **B-P02-04:** cancelamento, inadimplência, reativação e cobrança — pauta MAT-002/003, titularidade a confirmar onde necessário.
- **B-P02-05:** retenção, sessões, notificações e proteção de logs — matriz JUR-06/07/08.
Nenhuma pendência foi resolvida por inferência.

## Conclusão
P-02 **PREPARADO PARA CONFERÊNCIA DOCUMENTAL**: sete jornadas e respectivos cenários de exceção e aceite mapeados. **Não homologado** e sem validação jurídica ou comercial. A futura implementação pelo Claude exige gates DEC-035 e DEC-029; não há tarefa de execução autorizada.
