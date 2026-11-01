# Plataforma Digital Privilège

Projeto de desenvolvimento de uma plataforma digital de ensino de idiomas da Privilège.

## Objetivo
Disponibilizar cursos online, aulas em vídeo, exercícios e avaliações, com acesso para alunos atuais e novos alunos e gestão de conteúdo pela equipe administrativa.

## Estado atual
**Documentação inicial — versão 0.2.** Este repositório registra o entendimento atual, propostas e decisões pendentes. As definições de produto informadas pela responsável ainda aguardam aprovação formal do patrocinador quando indicado no Decision Log.

## Definições de produto informadas
- Público de lançamento: alunos atuais e novos alunos.
- Modelo comercial: assinatura recorrente, com flexibilidade para planos que deem acesso ao catálogo completo ou a cursos específicos.
- Gestão de cursos e aulas: restrita à equipe administrativa.
- Catálogo inicial: Basic English, Travel e Business.
- Jornada: teste de nivelamento, início pela base (Basic English) ou entrada direta em Travel ou Business.
- Trilhas: os mesmos cursos poderão ser organizados em sequências e prioridades diferentes conforme o objetivo do aluno.
- Aprendizagem: aulas com exercícios e avaliações associados; avaliação com nota mínima e uma tentativa adicional.
- Após duas tentativas sem atingir a nota mínima, a plataforma deverá sugerir plantão de dúvidas ou aula particular, conforme os serviços disponíveis no plano do aluno.

## Ferramentas e fontes de verdade
- **GitHub (principal e completo):** fonte **única** de verdade do projeto: **todas** as tarefas (inclusive marcos executivos), responsáveis, status, cronograma, riscos, decisões, requisitos, documentos, código, testes, evidências e histórico. Nada pode existir somente no Notion.
- **Notion (somente relatório derivado):** visão executiva resumida para Matheus, **extraída exclusivamente de fatos já registrados no GitHub**. Não armazena informação original, não modifica o fluxo do GitHub e não é repositório paralelo. Decisão DEC-026; implantação ainda não concluída.
- **Claude Code:** executor técnico; atualiza primeiro no GitHub as tarefas, status, previsões, impedimentos e evidências. Se um marco sob sua responsabilidade aparecer no Notion, pode atualizar ali o resumo executivo **somente depois** de registrar a mesma informação no GitHub, quando autorizado/conectado.

## Documentação
- [Termo de Abertura](docs/01-project-charter.md)
- [Escopo do MVP](docs/02-scope.md)
- [Requisitos do Produto](docs/03-requirements.md)
- [Registro de Decisões](docs/04-decision-log.md)
- [Riscos e Problemas](docs/05-risks-and-issues.md)
- [Roadmap Preliminar](docs/06-roadmap.md)
- [Trilhas de Aprendizagem](docs/07-learning-paths.md)
- [Orientações para Claude Code](CLAUDE.md)
- [Estrutura do relatório executivo no Notion](docs/11-estrutura-notion.md)
- [Relatório executivo canônico (origem da projeção para Notion)](docs/12-relatorio-executivo.md)

## Separação de fontes de verdade
- **GitHub é a fonte única e completa:** todas as tarefas, marcos, alterações de status, previsões, decisões, requisitos, documentação, execução e evidências devem estar registrados nele. Cada decisão possui uma única ficha Markdown canônica por responsável, com índice geral.
- **Notion é somente apresentação executiva:** ChatGPT/PM seleciona e resume marcos e resultados **já documentados no GitHub**; o relatório canônico também reside no GitHub. Atualizações de Claude/Marina devem chegar primeiro ao GitHub; qualquer atualização posterior no Notion é reflexo, jamais fonte primária.

## Regra de governança
Não tratar propostas ou hipóteses como requisitos aprovados. Decisões de negócio, orçamento e escopo precisam de aprovação do patrocinador e devem ser registradas no Decision Log.

## Segurança
Nunca versionar senhas, tokens, chaves, credenciais ou dados pessoais reais de alunos.
