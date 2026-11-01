# Trilhas de Aprendizagem — Plataforma Privilège

**Versão:** 0.1  
**Status:** Direcionamento de produto informado; desenho pedagógico e aprovação formal pendentes  
**Última atualização:** 2026-10-31

## 1. Princípio de modelagem
A plataforma terá três cursos-base no catálogo inicial:
- Basic English
- Travel
- Business

Os cursos são conteúdos educacionais reutilizáveis. Uma **trilha** é uma organização desses cursos conforme um objetivo de aprendizagem. Portanto, trilhas diferentes podem apontar para os mesmos cursos, mas definir sequências e prioridades distintas. Não duplicar cursos ou aulas para criar cada trilha.

## 2. Formas de entrada do aluno
O aluno poderá iniciar sua jornada por uma das opções:
1. **Teste de nivelamento:** realizar uma avaliação inicial para apoiar a escolha do ponto de entrada e da trilha.
2. **Começar do zero:** iniciar em Basic English e, depois, seguir para Travel ou Business.
3. **Entrada direta:** iniciar diretamente em Travel ou Business, conforme escolha e direitos de acesso.

O funcionamento do teste de nivelamento ainda será definido. Permanecem em aberto sua obrigatoriedade, estrutura, critérios de avaliação, interpretação do resultado e eventual lógica de recomendação/encaminhamento.

## 3. Estrutura conceitual inicial

### Jornada começando pela base
`Basic English → Travel`

ou

`Basic English → Business`

### Entrada direta
`Travel`

ou

`Business`

Esses exemplos representam as opções informadas até o momento, não uma definição completa de todas as trilhas comerciais/pedagógicas.

## 4. Regras de progressão dentro dos cursos
- Para desbloquear a próxima aula do mesmo curso, o aluno deverá concluir os componentes efetivamente obrigatórios e atingir a nota mínima na **avaliação obrigatória**. **Exercícios de prática são opcionais** (DEC-025, resolvida por Marina), não condicionam o acesso à avaliação nem o desbloqueio.
- **DEC-024 — REVISAR:** resposta provisória formulada e comunicada por Marina, que atribuiu a confirmação final a Matheus. A proposta é não exigir 100% do vídeo para conclusão/desbloqueio, desde que atividades obrigatórias e avaliação sejam cumpridas. **Aguardando Matheus; ainda não aprovada por ele.**
- Se não atingir a nota mínima na primeira tentativa, terá direito a uma segunda tentativa após revisar o conteúdo da aula por meio de um resumo escrito disponibilizado na própria aula.
- Não será necessário assistir novamente ao vídeo para realizar a segunda tentativa.
- A nota mínima ainda será definida.
- A sequência de aulas é definida dentro do curso.
- A ordem dos cursos é definida pela trilha escolhida.
- Ainda será detalhado se existe algum outro componente obrigatório por aula além da aprovação na avaliação. A obrigatoriedade de assistir ao vídeo integral depende de revisão com Matheus (DEC-024); exercícios de prática **não são obrigatórios** (DEC-025, Marina).

## 4.1. Prática opcional, biblioteca e revisão modular
- **Fluxo de aprendizagem:** conteúdo da aula (vídeo e materiais) → exercícios de fixação **opcionais** → avaliação **obrigatória** → desbloqueio por nota mínima. A ordem descreve a apresentação/recomendação, não um bloqueio para exercícios que o aluno deseje pular.
- **Aba “Exercícios” (DEC-027):** entrada independente para prática, com filtros por curso, módulo, aula e dificuldade.
- **Revisão de módulo (DEC-028):** cada módulo possui uma lista de exercícios que mistura conteúdos das aulas daquele módulo, como uma revisão de capítulo.
- **Ponto comercial pendente:** esclarecer se o aluno pode acessar exercícios de cursos não cobertos por sua assinatura. O controle de direitos não pode ser alterado por inferência.
- **Pontos de produto pendentes:** parametrização dos níveis de dificuldade, composição das listas e eventual exceção à opcionalidade de revisão modular.

## 5. Separação entre curso, trilha e assinatura
- **Curso:** conjunto de módulos e aulas com conteúdo próprio.
- **Trilha:** sequência/prioridade de cursos organizada por objetivo.
- **Assinatura/plano:** direitos comerciais que determinam quais cursos e serviços o aluno pode acessar.

A recomendação pedagógica de uma trilha não deve conceder acesso comercial automaticamente. O aluno só poderá acessar cursos cobertos por seus direitos ativos, salvo política de acesso diferente aprovada pela Privilège.

## 6. Perguntas para desenho detalhado
1. Quais objetivos de aprendizagem serão oferecidos como trilhas no lançamento?
2. O teste de nivelamento recomendará curso, trilha ou apenas nível?
3. O aluno poderá ignorar a recomendação do teste e escolher outra entrada?
4. O aluno poderá mudar de trilha depois de começar? Como o progresso será preservado?
5. Basic English será sempre pré-requisito pedagógico para Travel/Business ou apenas o caminho recomendado para iniciantes?
6. Quais componentes serão obrigatórios para concluir cada aula e qual será a nota mínima da avaliação?
7. Como o plano/assinatura limitará cursos dentro de uma trilha que recomenda conteúdos não contratados?

## 7. Orientação técnica
Modelar trilhas como entidades independentes que referenciam cursos existentes, com uma ordem/prioridade configurável. Evitar duplicação de cursos, módulos, aulas ou progresso. O progresso do aluno deve ser associado às unidades de conteúdo e relacionado à trilha em que o aluno está matriculado, preservando histórico caso a sequência de uma trilha seja alterada.
