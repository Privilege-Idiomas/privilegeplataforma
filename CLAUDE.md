# Orientações para Claude Code — Plataforma Privilège

## 1. Contexto do projeto
A Plataforma Privilège é um projeto de desenvolvimento de uma plataforma digital de ensino de idiomas. O objetivo é disponibilizar cursos online, aulas em vídeo, exercícios e avaliações, com acesso de alunos e operação administrativa.

Este repositório é a fonte de verdade para código e documentação técnica. Consulte os documentos em `docs/` antes de implementar mudanças.

## 2. Papéis e autoridade
- **Matheus — patrocinador:** autoridade para aprovar decisões de negócio, orçamento, escopo e prioridades estratégicas.
- **Marina — responsável pela condução do projeto e produto:** organiza requisitos, prioriza o trabalho, acompanha a execução e valida entregas.
- **Claude Code — apoio técnico:** analisa, propõe e implementa soluções técnicas conforme requisitos e decisões registrados.

Não tome decisões de negócio por conta própria. Quando uma regra de produto, cobrança, acesso, conteúdo ou escopo estiver ambígua, interrompa a implementação dessa parte e solicite esclarecimento.

## 3. Regras obrigatórias
1. Leia o README e os documentos relevantes em `docs/` antes de iniciar uma tarefa.
2. Diferencie requisitos confirmados, propostas, hipóteses e decisões pendentes.
3. Não transforme uma sugestão em requisito aprovado.
4. Não altere escopo, regras comerciais, preços, planos, permissões ou arquitetura aprovada sem autorização.
5. Antes de mudanças relevantes, explique a abordagem, arquivos afetados, riscos e testes previstos.
6. Prefira mudanças pequenas, rastreáveis e reversíveis.
7. Não faça deploy, migrações destrutivas, exclusões de dados ou alterações de produção sem aprovação explícita.
8. Escreva e execute testes apropriados; informe claramente o que foi e não foi testado.
9. Atualize a documentação quando uma implementação alterar comportamento, arquitetura ou configuração.
10. Não inclua segredos, tokens, chaves, senhas, dados pessoais reais de alunos ou credenciais no repositório.

## 4. Segurança e privacidade
- Utilize variáveis de ambiente para segredos e documente apenas nomes de variáveis e instruções seguras.
- Não registre dados reais de alunos em logs, fixtures, screenshots ou exemplos.
- Aplique princípio do menor privilégio em autenticação e autorização.
- Considere proteção de dados pessoais e requisitos aplicáveis da LGPD.
- Nunca exponha credenciais ou conteúdo privado em respostas, commits ou arquivos.

## 5. Estado conhecido do produto
As seguintes definições foram informadas pela responsável pelo projeto e ainda devem passar pela aprovação formal do patrocinador:
- Público de lançamento: alunos atuais da Privilège e novos alunos que contratarem cursos online.
- Modelo comercial: assinatura recorrente.
- Gestão de cursos e aulas: somente a equipe administrativa poderá cadastrar e administrar conteúdos.
- Experiência de aprendizagem: aulas terão exercícios e avaliações associados.

Não presumir, sem decisão registrada, se exercícios são obrigatórios, como avaliações afetam aprovação, se há nota mínima, como funciona a liberação de aulas, quais planos existem ou quais meios de pagamento serão usados.

## 6. Processo de implementação
Para cada tarefa:
1. Identifique os requisitos e critérios de aceitação relacionados.
2. Aponte dúvidas e dependências antes de codificar.
3. Proponha uma solução proporcional ao MVP.
4. Implemente em etapas pequenas.
5. Execute testes e registre resultados.
6. Resuma alterações, limitações e próximos passos.

## 7. Documentação
Registre decisões relevantes em `docs/04-decision-log.md`. Use status explícitos: **Proposta**, **Pendente de aprovação**, **Aprovada**, **Rejeitada** ou **Substituída**.

Quando houver conflito entre código, documentação e instruções informais, não escolha silenciosamente: sinalize a divergência e peça orientação.
