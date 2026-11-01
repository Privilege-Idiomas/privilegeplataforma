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

A obrigatoriedade do teste e a forma como o resultado gera recomendações ainda precisam ser definidas.

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
- O aluno deverá concluir uma aula para desbloquear a próxima aula do mesmo curso.
- A sequência de aulas é definida dentro do curso.
- A ordem dos cursos é definida pela trilha escolhida.
- A definição exata de conclusão da aula — incluindo a relação entre vídeo, exercícios e aprovação na avaliação — permanece pendente.

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
6. A conclusão da avaliação com nota mínima será obrigatória para desbloquear a aula seguinte?
7. Como o plano/assinatura limitará cursos dentro de uma trilha que recomenda conteúdos não contratados?

## 7. Orientação técnica
Modelar trilhas como entidades independentes que referenciam cursos existentes, com uma ordem/prioridade configurável. Evitar duplicação de cursos, módulos, aulas ou progresso. O progresso do aluno deve ser associado às unidades de conteúdo e relacionado à trilha em que o aluno está matriculado, preservando histórico caso a sequência de uma trilha seja alterada.
