# P-03 — Especificação funcional de aulas particulares e plantões coletivos
**Privilège | 2026-11-02 | Status:** preparação documental, sem homologação de parâmetros comerciais, parecer jurídico, tecnologia, orçamento, MVP ou implementação.
**Fontes:** DEC-064–069/071–073, REQ-042–045/048/050–052, AUD-007, docs/09,11–13,16–19.
**Notação:** V = regra vigente; D = detalhamento operacional coerente com regra aprovada (eventuais parâmetros ainda condicionados); E = dependência de aprovação externa, sem supor resposta.

## 1. Invariantes funcionais
1. **V** Particular é individual, agendada: aluno informa **dia e horário antes** de selecionar docente disponível; confirmação não admite sobreposição de agenda ou dupla reserva.
2. **V** Plantão é **coletivo**, professor disponível em janela institucional publicada, acesso pelo link do dia sem reserva de aluno; não consumir créditos de particulares.
3. **V** Elegibilidade depende dos direitos contratuais existentes; **E** quais planos/benefícios e condições é decisão comercial pendente.
4. **V** Registro de ocorrências, substituição de docente ou suspensão comunicada, controles de moderação de menores e auditoria administrativa sensível conforme DEC-071–073.
5. **V** Avaliações docentes individuais e ranking acessíveis só à administração autorizada; professor vê apenas sua média condicional após cinco avaliações válidas e validação anti-inferência, jamais avaliações individuais.
6. **E** Duração de particular, antecedência, saldo, créditos, compra avulsa, compensações, horário definitivo e demais termos comerciais não aprovados.

## 2. Jornadas ponta a ponta e exceções

### AT-01 — Consultar agenda e reservar particular
**Atores:** aluno elegível; docente disponível; serviço de confirmação.
**Entrada:** identidade autenticada, direito vigente conforme plano, data/horário escolhido.
**Fluxo:** validar elegibilidade [V] → selecionar dia/horário [V] → listar somente professores livres nessa janela [V] → aluno escolher professor [V] → revalidar disponibilidade e elegibilidade na confirmação [D] → gravar uma reserva consistente e apresentar confirmação [D].
**Exceções:** sessão expirada, falta de direito, capacidade docente alterada, concorrência de duas confirmações, indisponibilidade do provedor de reunião, horário inválido, sobreposição com plantão.
**Aceite:** segundo solicitante recebe conflito, não duas reservas; nenhum débito de crédito sem política aprovada; professor em plantão incompatível não aparece livre; mensagem não promete confirmação antes de confirmação efetiva.
**E:** duração, fuso/corte e cotas/benefícios (DEC-067/MAT-014).

### AT-02 — Consultar e gerenciar reserva
**Entrada:** reserva existente e ator com autorização.
**Fluxo:** consultar apenas reservas próprias ou administrativamente autorizadas [V/D]; exibir status, data, professor e orientações pertinentes; registrar ações posteriores com histórico [D].
**Exceções:** cancelada, concluída, expirada, docente substituído, alteração de fuso.
**Aceite:** ID de reserva de outro aluno não revela detalhes; histórico de alteração não some.
**E:** quais alterações aluno/professor podem iniciar e parâmetros comerciais.

### AT-03 — Cancelar/remarcar particular
**Fluxo proposto:** autenticar e validar direito de agir → conferir estado atual → solicitar cancelamento ou escolha de nova janela → revalidar capacidade/colisão → registrar transição e comunicar resultado.
**Exceções:** alteração simultânea, sala já iniciada, prazo comercial vencido, evento de pagamento não conciliado.
**Aceite:** nunca criar duas reservas ativas para o mesmo compromisso; consequências sobre crédito/benefício só após política comercial; falha de notificação não altera reserva confirmada.
**E:** antecedência, remarcação, restituição/créditos e consequências (Matheus DEC-067).

### AT-04 — Ausência do aluno ou professor em particular
**Fluxo:** registrar ocorrência, ator, momento e evidência proporcional; notificar partes afetadas; permitir análise/reagendamento quando regras aplicáveis forem confirmadas.
**Exceções:** ocorrência contestada, conexão caiu, ausência parcial, falha de integração ou horário incorreto.
**Aceite:** registro não gera cobrança, multa, desconto de saldo ou compensação não aprovados; professor faltante pode levar a reagendamento sem prejuízo segundo futura regra comercial.
**E:** alçadas de decisão, comprovação, remarcação e consequências por plano.

### AT-05 — Publicar e acessar plantão coletivo
**Atores:** administrador autorizado, professor escalado, aluno elegível.
**Fluxo:** criar janela institucional e escala [V] → publicar período, docente/link do dia [V] → aluno elegível acessa diretamente na janela [V] → sala coletiva operada e moderada [V].
**Exceções:** link indisponível, professor indisponível, horário alterado, excesso de participantes, falha do provedor, aluno sem direito.
**Aceite:** nenhum fluxo exige escolher docente ou reservar vaga individual; acesso não reduz crédito de particular; horário meramente ilustrativo não vira horário real.
**E:** janela e capacidade definitivas, regras de plano, critérios jurídicos de participação de menores.

### AT-06 — Substituir docente ou suspender plantão
**Fluxo:** identificar ausência/falha → administrador confere substituto habilitado e sem choque → substitui e comunica janela/link atualizado; se impossível, suspende e avisa elegíveis, registrando ocorrência [V/D].
**Aceite:** não publicar simultaneamente docente conflitante; não deixar status "disponível" quando a sessão foi suspensa; não prometer substituição automática nem SLA sem aprovação.
**E:** horários, escalar reserva, política de comunicação e capacidade.

### AT-07 — Moderação e segurança de plantão
**Fluxo:** identificar denúncia/incidente → moderador autorizado intervém proporcionalmente, podendo interromper conduta ou participação → registrar evento e encaminhar suporte/segurança → comunicar responsáveis conforme critérios aplicáveis [D].
**Exceções:** disputa de relato, participação de menor, compartilhamento de dados pessoais, incidente grave.
**Aceite:** não expor denúncia a participantes; não presumir gravação nem retenção ilimitada; controles de voz/imagem e autoridade parental dependem de JUR-04/11.
**E:** política jurídica e níveis de moderação; proteção de menores antes de execução.

### AT-08 — Avaliar atendimento docente
**Fluxo:** após particular efetivamente realizada, aluno pode submeter avaliação válida conforme REQ-042/043 [V]; administração autorizada consulta notas individuais/ranking [V]; professor vê exclusivamente sua média, condicionada a no mínimo 5 avaliações válidas e aprovação de controles anti-inferência [V-condicional].
**Exceções:** sessão cancelada/contestada, voto duplicado, revisão/exclusão da nota, professor com 4 ou 5 votos ou mudanças sucessivas de média.
**Aceite:** professor não consulta ID ou nota individual via UI/API/exportação; nenhuma média liberada só por atingir cinco enquanto validação anti-inferência estiver pendente; revisão deixa trilha.
**E:** parecer JUR-05, janela de atualização e regras de avaliação revisada.

## 3. Estados operacionais candidatos (não são contratos técnicos aprovados)
| Objeto | Estados candidatos | Observação |
|---|---|---|
| Reserva particular | solicitada, confirmada, cancelada, remarcada, realizada, ausência registrada, em contestação | Efeitos de crédito não definidos; transições finais serão validadas |
| Janela de plantão | planejada, publicada, em andamento, concluída, suspensa | Sem reserva de aluno |
| Cobertura docente | escalado, confirmado, substituído, ausente | Verificar colisão entre particular e plantão |
| Ocorrência | registrada, em análise, resolvida | Não equivale a decisão financeira |
| Avaliação docente | válida, contestada, invalidada, revisada | Privacidade e recalculabilidade pendentes |

## 4. Critérios de aceite adversos (candidatos a futuro teste)
- **AT-C01:** duas confirmações concorrentes da mesma janela não podem ambas resultar em reserva.
- **AT-C02:** professor ocupado em particular ou plantão incompatível é excluído da lista de disponibilidade.
- **AT-C03:** usuário fora de um plano elegível não consegue acessar particular/plantão por URL direta.
- **AT-C04:** plantão não cria reserva e não consome crédito de particular.
- **AT-C05:** professor faltou, evento foi registrado mas nenhum crédito foi debitado sem regra aprovada.
- **AT-C06:** falha no e-mail não reverte agendamento nem afirma envio bem-sucedido.
- **AT-C07:** aluno A não vê a reserva de B, incluindo API e exportação.
- **AT-C08:** plantão suspenso apresenta status real e comunica os elegíveis, sem criar sessões fictícias.
- **AT-C09:** relatório de incidente envolvendo menor permanece restrito a papéis autorizados.
- **AT-C10:** média docente fica oculta quando menos de cinco avaliações válidas e também enquanto proteção anti-inferência não estiver homologada, mesmo com cinco.
- **AT-C11:** cancelamento e remarcação não provocam reservas conflitantes ou efeitos comerciais duplicados.
- **AT-C12:** disponibilidade real e horário publicado usam o mesmo contexto temporal, com fuso explícito.

## 5. Matriz de pendências para fechamento
| ID | Decisão | Responsabilidade | Estado |
|---|---|---|---|
| B-P03-01 | duração e modalidade de particulares; benefícios/quantidade de aulas por plano | Matheus — DEC-067/MAT-014 | PENDENTE |
| B-P03-02 | antecedência, remarcação, faltas, saldo, avulsas e consequências comerciais | Matheus — DEC-067/MAT-014 | PENDENTE |
| B-P03-03 | regras jurídicas para menores, voz/imagem, moderação, denúncias e retenção | Jurídico/privacidade, Marina operação | PENDENTE |
| B-P03-04 | janela e capacidade de plantões, escala/contingência concreta | Administração/Marina, dependente de recursos operacionais | A VALIDAR |
| B-P03-05 | matriz por ação/dado e retenção de ocorrências | Marina + parecer JUR-06/08/09 | PENDENTE |
| B-P03-06 | limiar docente 5 e medidas anti-inferência | Marina + parecer JUR-05 | CONDICIONAL; SEM LIBERAÇÃO |
| B-P03-07 | integração, provedor de reunião, escolha da stack e custo | DEC-035, após G1 | NÃO AUTORIZADO |

**Prontidão:** fluxos e critérios de aceitação preparados para revisão; não equivale a aprovação de parâmetros ou implementação. AUD-005/006/010 preservados. GitHub canônico, Notion só relatório executivo.
