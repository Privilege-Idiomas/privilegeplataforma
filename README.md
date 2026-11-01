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
- **GitHub:** código, documentação técnica e histórico de decisões.
- **Notion:** fonte central de gestão do projeto: tarefas, responsáveis, prazos, prioridades, decisões (índice e visualizações), riscos e acompanhamento da execução. A migração foi decidida por Marina em 2026-10-31 (DEC-026); a estrutura deverá ser implementada após conexão ao workspace.
- **Claude Code:** apoio técnico à implementação, conforme os requisitos e decisões registrados.

## Documentação
- [Termo de Abertura](docs/01-project-charter.md)
- [Escopo do MVP](docs/02-scope.md)
- [Requisitos do Produto](docs/03-requirements.md)
- [Registro de Decisões](docs/04-decision-log.md)
- [Riscos e Problemas](docs/05-risks-and-issues.md)
- [Roadmap Preliminar](docs/06-roadmap.md)
- [Trilhas de Aprendizagem](docs/07-learning-paths.md)
- [Orientações para Claude Code](CLAUDE.md)
- [Estrutura de implantação no Notion](docs/11-estrutura-notion.md)

## Separação de fontes de verdade
- **Notion:** operação, visibilidade e gestão de projeto; um único banco de decisões com filtros por responsável, sem registros duplicados.
- **GitHub:** código, arquitetura, histórico técnico e arquivos Markdown canônicos de decisões existentes, preservados até eventual migração documental formal. O Notion deve referenciar os registros canônicos em vez de copiá-los integralmente.

## Regra de governança
Não tratar propostas ou hipóteses como requisitos aprovados. Decisões de negócio, orçamento e escopo precisam de aprovação do patrocinador e devem ser registradas no Decision Log.

## Segurança
Nunca versionar senhas, tokens, chaves, credenciais ou dados pessoais reais de alunos.
