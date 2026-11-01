# Política de Governança de Decisões — Plataforma Privilège

**Versão:** 1.0  
**Data de adoção:** 2026-10-31  
**Status:** Diretriz de gestão definida por Marina para o projeto

## 1. Objetivo

Manter um histórico completo, íntegro e rastreável de todas as decisões do projeto, desde o problema inicial e as alternativas consideradas até a aprovação, execução, validação e eventuais revisões.

O histórico decisório é permanente. Uma decisão substituída, rejeitada ou cancelada não deve ser apagada nem reescrita como se nunca tivesse existido.

## 2. Princípios obrigatórios

1. **Não apagar histórico:** preservar decisões aprovadas, rejeitadas, adiadas, canceladas e substituídas.
2. **Registrar alternativas:** listar as opções efetivamente consideradas, sem inventar alternativas retrospectivamente.
3. **Explicar descartes:** registrar por que cada alternativa foi rejeitada, quando essa justificativa for conhecida.
4. **Distinguir estados:** proposta, em análise, adiada, aprovada, rejeitada, em execução, executada, validada e substituída são estados diferentes.
5. **Identificar autoridade:** registrar quem propôs, quem avaliou, quem decidiu e quem aprovou.
6. **Não presumir aprovação:** conversa, sugestão ou preferência preliminar não equivale a autorização formal.
7. **Rastrear execução:** relacionar a decisão às tarefas, requisitos, commits, entregas e evidências pertinentes.
8. **Registrar mudanças:** quando uma decisão mudar, criar novo registro vinculado ao anterior; não sobrescrever o histórico.
9. **Transparência sobre lacunas:** quando não houver informação sobre uma alternativa ou motivo de descarte, registrar “não informado/não documentado”, sem preencher por suposição.

## 3. Estrutura mínima de cada registro decisório

- **ID único:**
- **Data de abertura e última atualização:**
- **Tema:**
- **Contexto / problema / necessidade:**
- **Objetivo e critérios de decisão:**
- **Proponente:**
- **Responsável pela decisão:**
- **Consultados:**
- **Alternativas consideradas:**
  - Opção:
  - Benefícios:
  - Desvantagens / riscos:
  - Custos / impactos:
- **Alternativas descartadas e justificativas:**
- **Opção selecionada:**
- **Justificativa da escolha:**
- **Comunicado por (fonte da resposta):**
- **Aprovador e data da aprovação:**
- **Status da decisão:**
- **Plano de execução / responsável / prazo:**
- **Evidência de execução (tarefas, PRs, commits, documentos):**
- **Validação / critério de aceite / evidência:**
- **Impactos em escopo, prazo, custo, qualidade, riscos e operação:**
- **Decisões relacionadas / decisão anterior substituída:**
- **Observações e pendências:**

Campos sem informação devem permanecer identificados como pendentes ou não documentados.

## 4. Ciclo de vida e estados

- **Proposta:** ideia registrada, ainda sem análise suficiente.
- **Em análise:** alternativas e impactos estão sendo avaliados.
- **Adiada:** decisão conscientemente postergada; registrar motivo e, se possível, gatilho/data para retomada.
- **Aguardando aprovação:** recomendação ou decisão proposta aguarda autoridade competente.
- **Aprovada:** autorizada explicitamente pelo responsável competente.
- **Rejeitada:** alternativa ou proposta descartada, com justificativa.
- **Em execução:** opção aprovada está sendo implementada.
- **Executada:** implementação concluída, ainda sujeita à validação.
- **Validada:** execução verificada contra critérios de aceite.
- **Substituída:** decisão posterior alterou a anterior; ambas permanecem no histórico.
- **Cancelada:** iniciativa interrompida; registrar motivo e impactos.

## 5. Separação de responsabilidades

- **Marina:** fonte única que comunica a atribuição, resposta e aprovação de cada decisão, independentemente de quem a tenha tomado; pode ser também a própria decisora/aprovadora.
- **Matheus:** decisor/aprovador somente de itens que Marina informar expressamente como da responsabilidade dele.
- **Equipe pedagógica:** participação e validação registradas somente quando Marina assim indicar.
- **Apoio técnico:** analisa e implementa conforme as decisões documentadas; não define por conta própria a autoridade decisória.

**Não atribuir por tema:** o fato de uma decisão ser pedagógica, comercial, técnica, estratégica ou orçamentária não determina que seja de Matheus, de Marina ou compartilhada. Somente Marina define essa classificação.

**Separar decisor, aprovador e comunicador:** quando Marina informar uma decisão de Matheus, registrar `Decisor: Matheus; Comunicado por: Marina` e a situação da aprovação conforme informado. Quando for decisão dela, registrar `Decisor: Marina; Comunicado por: Marina`. Não presumir aprovação nem participação externa. Se faltarem indicação de decisor ou aprovação, perguntar a Marina e marcar `a confirmar com Marina`.

## 6. Relação entre os registros do projeto

- `docs/04-decision-log.md`: índice oficial de decisões e seus estados.
- `docs/08-decisoes-marina.md`: fila de decisões que dependem de Marina.
- `docs/09-decisoes-matheus.md`: pauta de decisões e aprovações de Matheus.
- Este documento: política permanente para registrar e manter o histórico.
- Requisitos, escopo, roadmap e documentação técnica: devem apontar para os IDs das decisões que os fundamentam.

Os arquivos de pendências são instrumentos de trabalho. Quando uma pendência for resolvida, ela deve ser marcada como decidida e vinculada ao registro oficial, sem apagar seu histórico.

## 7. Procedimento para mudanças

1. Criar um novo ID para a nova decisão ou revisão.
2. Referenciar o ID da decisão anterior.
3. Registrar o que mudou e por quê.
4. Preservar as opções e justificativas já registradas.
5. Atualizar o status da decisão anterior para “Substituída” apenas quando a nova decisão estiver efetivamente aprovada.
6. Atualizar requisitos, backlog, plano e documentação afetados.
7. Registrar evidência da implementação e validação.

## 8. Regra para o apoio de IA e ferramentas

O assistente e ferramentas de desenvolvimento devem:
- Registrar fielmente o que foi dito e distinguir fato, proposta, hipótese e decisão.
- Não inventar opções consideradas, justificativas, aprovações ou evidências.
- Perguntar a Marina quando a autoridade, aprovação, motivo do descarte ou decisão efetiva não estiverem claros; nunca atribuir a Matheus por inferência temática.
- Registrar em campos separados quem decidiu/aprovou e que Marina comunicou a decisão, inclusive quando o decisor foi Matheus.
- Atualizar os arquivos pertinentes sem apagar entradas anteriores.
- Confirmar o resultado da atualização e apontar o que continua pendente.

## 9. Modelo rápido para novas decisões

```markdown
### DEC-XXX — Título
- Data:
- Contexto/problema:
- Proponente:
- Responsável pela decisão:
- Consultados:
- Critérios:
- Opções consideradas:
  - A:
  - B:
- Opções descartadas e motivos:
- Opção aprovada:
- Justificativa:
- Comunicado por:
- Aprovador/data:
- Status:
- Execução/responsável/prazo:
- Evidências:
- Validação:
- Impactos:
- Decisão anterior relacionada:
- Pendências:
```

**Regra final:** o histórico deve permitir que alguém que não participou das conversas entenda o que foi decidido, por que foi decidido, quais alternativas foram descartadas, quem autorizou, como foi executado e como sua conclusão foi verificada.

## 10. Esclarecimento de governança de autoria e fonte — 2026-10-31

Marina determinou que continuará existindo separação entre decisões dela e de Matheus, mas **ela é a única pessoa que determina quais itens pertencem a cada um e a única fonte que comunica as respostas de ambos**. Ela poderá informar posteriormente uma decisão tomada por Matheus, caso em que o decisor registrado será Matheus, o comunicador será Marina e o histórico de alternativas e justificativas será preservado. Quando Marina não indicar o decisor ou a aprovação, o assistente deve cobrar essa informação, sem classificar nem aprovar por suposição.

**Retificação histórica:** a DEC-024 foi indevidamente atribuída à validação pedagógica de Matheus. A responsabilidade e aprovação dessa definição estão agora a confirmar com Marina. Os itens antigos atribuídos a Matheus por inferência também exigem conferência, mas não devem ser apagados ou transferidos automaticamente.
