# D1 — Especificação UX: Dashboard do Aluno (v0.1)
**Data:** 10/11/2026 · **Status:** estrutura geral aprovada por Marina; detalhes e estados para refinamento/validação · **Issue:** [#15](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/15)

## 1. Decisão aprovada
Marina concordou em seguir com o **dashboard completo**, reunindo visão de cursos, progresso, agenda/atividades pertinentes e atalhos, mas com **«Continuar estudando» como ação principal e maior destaque visual**. A experiência não deve parecer carregada. A decisão é sobre **conteúdo e hierarquia de UX**, não sobre aprovação final do design visual do Claude nem autorização de programação.

**Responsabilidades:** PM e Marina definem conteúdo, UX, estados e regras; Claude conduz o refinamento visual e só implementa funcionalidades quando sua fase de desenvolvimento for expressamente autorizada. Design D1 continua em andamento, F2–F8 não autorizadas.

## 2. Estrutura de informação acordada
1. **Boas-vindas:** saudação personalizada e identificação da conta/aluno; acesso ao perfil. Evitar informações pessoais desnecessárias.
2. **Continue de onde parou — PRIORIDADE VISUAL 1:** último curso autorizado em andamento, módulo, aula disponível, progresso contextual e CTA principal **«Continuar estudando»**. Em caso de múltiplos cursos, recomendar retomada do mais recente e permitir acessar todos.
3. **Meus cursos:** Basic/Start como bônus de assinante elegível, Travel e Business conforme direitos próprios de cada aluno, nunca assumir que contratação de um libera outro. Indicar claramente acesso disponível, pendente ou restrito sem revelar conteúdo privado.
4. **Meu progresso:** aulas/módulos concluídos e progresso individual por curso, com ligação para histórico. **Definição exata do percentual** (aula, módulo, curso, agregado) requer especificação separada; não apresentar números enganosos.
5. **Próximas atividades:** plantões e aulas particulares agendados apenas se houver dados/agendas pertinentes e permissões do aluno. Não presumir que todos os planos incluem serviços ao vivo nem exibir direitos inexistentes.
6. **Acesso rápido:** materiais, avaliações, certificados e suporte, conforme direitos e disponibilidade real. Acessos ainda não implementados serão representados como protótipos, não links ativos.

## 3. Navegação e responsividade — diretriz D1
- **Desktop:** navegação global clara (menu lateral ou organização proposta por Claude), ação de retomada evidente sem rolagem excessiva; painéis secundários com menor peso.
- **Mobile:** topo compacto, cartão «Continuar estudando» prioritário, depois Meus cursos, Progresso e atividades; menu mobile acessível.
- **Aparência:** Claro / Escuro / Sistema, com **Sistema como padrão** e preferência manual persistente como requisito de implementação futura; usar os tokens e visual premium elegante da D1, contrastes adequados e baixa poluição visual.
- Utilizar os **logotipos originais** da Privilège; não reinterpretar o símbolo em protótipos definitivos.

## 4. Comportamentos/estados a especificar antes de handoff técnico
- Primeiro acesso sem atividade: mensagem de boas-vindas e CTA para o primeiro curso **autorizado**; nunca apresentar progresso fictício.
- Sem curso em andamento, mas com cursos disponíveis: convidar a iniciar um deles.
- Sem direito ativo: mensagem orientativa de acesso e próximos passos permitidos, sem fingir liberação comercial.
- Sem agendamentos: estado vazio simples, sem reservar posição desproporcional na tela.
- Carregamento, erro, conexão indisponível e tentativas de acessar área restrita com feedback acessível.
- Pessoa menor de idade ou responsável/pagador: respeitar matriz de papéis; dashboard do aluno não expõe dados de outros alunos.
- Regras de desbloqueio e avaliação devem seguir decisões prevalentes; **não exigir 100% do vídeo ou nota mínima para avançar**.

## 5. Itens explicitamente NÃO aprovados
- Gamificação, sequência diária, rankings, comunidade, pontos, medalhas ou desafios como funcionalidades: qualquer visual demonstrativo anterior é ilustrativo, não requisito aprovado.
- Idiomas/cursos adicionais além de Basic/Start, Travel e Business.
- Percentuais genéricos ou acesso simultâneo a Travel e Business sem direitos correspondentes.
- Layout final, paleta exata ou escolha de fontes: continuam em refinamento pelo Claude sob aprovação de Marina.

## 6. Critérios de aceite do protótipo D1
- [ ] «Continuar estudando» é a ação mais evidente.
- [ ] Boas-vindas, Meus cursos, Meu progresso, Atividades pertinentes e Acesso rápido estão representados sem sobrecarga.
- [ ] Acesso por curso respeita direito do aluno; Basic/Start, Travel e Business não são confundidos com níveis do plano.
- [ ] Estados vazios, sem permissão, erro e carregamento foram definidos.
- [ ] Propostas desktop/mobile e claro/escuro coerentes; modo Sistema documentado.
- [ ] Logo original, conteúdo canônico e acessibilidade conferidos.
- [ ] Aceite visual final explícito antes da futura implementação funcional.

## 7. Próxima tela a especificar
**Sala de aula / player:** estrutura de curso/módulo/aula, videoaula, materiais, exercícios e navegação; priorizar o layout claro da proposta apreciada por Marina como referência, mantendo alternativa escura consistente. Regras pedagógicas e conteúdos dependem das decisões canônicas, não dos mockups gerados.


## 8. Complemento aprovado — Bloco 03 (11/11/2026)

**Fonte:** decisão expressa de Marina; detalhe e rastreabilidade em [docs/36 §16](36-d1-briefing-visual-ux-ui.md) e Issue #15.

- **«Meus cursos»:** agrupar cursos com direito vigente na ordem **em andamento → não iniciados → concluídos**, sem criar progresso fictício. Critério de desempate não decidido.
- **«Conhecer outros cursos»:** seção separada para informações públicas de cursos ainda não contratados, apenas se pertinentes e presentes no catálogo; acesso à página pública de apresentação antes de qualquer planos/preços, nunca diretamente ao checkout, conforme DEC-044–048 e salvaguardas relativas a menores.
- **Visão geral de um curso acessível:** módulos **expansíveis**, cada qual exibindo aulas com **ícone + texto** «Concluída», «Disponível» ou «Bloqueada» conforme estado real, nunca somente por cor.
- **Primeiro acesso a curso:** ação em destaque **«Começar curso»**, encaminhando à primeira aula autorizada; quem já iniciou vê opção de continuidade, conforme DEC-049.
- **Continuidade e progresso:** preservam regras vigentes sobre avaliação obrigatória não eliminatória, tentativas ilimitadas, conclusão por requisitos realmente cumpridos e nenhum bloqueio por assistir menos que 100% do vídeo. Não aplicar formulações históricas que dependam de aprovação por nota mínima.

**Natureza:** detalhes da apresentação UX aprovados; **sem implementação ou autorização F2–F8**.


## 9. Complemento aprovado — «Meu progresso» (D1 Bloco 04, 11/11/2026)

Marina aprovou apresentar o **histórico de aprendizagem em uma área centralizada «Meu progresso»**, com **resumo por curso, gráfico de evolução e histórico detalhado**. Ao desenhar esta área, respeitar o gráfico de **nota por tentativa com data** e histórico acadêmico definidos nas DEC-074/075; não inventar métricas, percentuais ou dados de alunos. Direitos de acesso, privacidade e avaliação obrigatória não eliminatória permanecem vigentes. A escolha visual não altera a hierarquia do dashboard principal nem a prioridade de «Continuar estudando».

**Referência:** [docs/36 §17](36-d1-briefing-visual-ux-ui.md). Aprovação limitada à especificação UX D1; sem liberação de implementação, F2–F8.
