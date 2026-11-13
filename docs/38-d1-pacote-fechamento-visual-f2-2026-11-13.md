# D1 — Pacote de fechamento visual e handoff seguro para F2
**Data:** 13/11/2026 · **Responsável por concepção, UX/UI, design e protótipos:** ChatGPT (PM/design) · **Aprovação final:** Marina.

## Mudança expressa de responsabilidade
Marina determinou em 13/11 que **o design da Privilège será feito diretamente pela PM/ChatGPT, e não mais delegado a Claude**, pois Matheus preferiu o direcionamento visual apresentado aqui. Esta preferência por autor visual **não significa aceite final da direção gráfica nem libera implementação**. Claude permanece executor técnico potencial **apenas depois** de autorização explícita das fases de desenvolvimento, com especificação e protótipos entregues pela PM/ChatGPT. Não emitir novas tarefas de criação visual D1 para Claude.

## O que já está aprovado
- Fluxos e escolhas de UX dos **Blocos 01–10**: [docs/36, §§13 e 15–23](36-d1-briefing-visual-ux-ui.md).
- Modo **Claro / Escuro / Sistema**, com **Sistema padrão** e preferência manual persistente (docs/36 §11).
- Regras de acesso, privacidade, papéis, menores, direitos comerciais e jornadas conforme DEC canônicas.
- **F1 concluída**; **somente D1** segue autorizada. **F2–F8 continuam não autorizadas.**

## Direções visuais consideradas — para decisão gráfica final
Estas alternativas são PROPOSTAS DE DESIGN, não validação de marca ou aceite:
1. **A — Marinho editorial e dourado discreto (recomendada):** superfícies claras quentes para leitura, marinho profundo em marca/navegação, dourado só como acento, títulos editoriais serifados moderados e corpo sans-serif, cards leves e espaçados.
2. **B — Azul-violeta institucional com ouro:** base clara, navegação e detalhes em azul-violeta do logotipo correspondente; títulos sans-serif, visual de maior presença digital.
3. **C — Monocromático profundo com detalhes de dourado:** marinho e neutros dominantes, dourado pontual, contraste alto, tipografia predominantemente sans-serif.

**Recomendação editorial:** escolher **A**, mantendo as versões oficiais de logotipos **inalteradas**, com variantes aprovadas conforme fundo; nenhum HEX deste documento substitui manual de marca inexistente. A decisão de qual variante oficial é primária continua pendente de aceite.

## Primeira amostra autoral concreta
O protótipo visual **Privilège D1 — Proposta visual navegável** foi preparado pelo ChatGPT em 13/11/2026 como **arquivo HTML único demonstrativo**, com logos oficiais embutidos e navegação local entre:
1. **Acesso** — campos de e-mail e senha e estado de recuperação.
2. **Cadastro** — identificação do estudante e aviso de vinculação segura do responsável.
3. **Perfis** — estudante, professor e administrador, com indicação de permissão por papel.
4. **Dashboard aluno** — continuar, cursos e indicador de progresso *claramente fictício*.
5. **Minha Conta** — abas Dados pessoais, Segurança e Preferências, com seletor Claro/Escuro/Sistema.
6. **Acesso restrito** — estado neutro sem vazamento de identidade/dados.

**Natureza e limitações:** arquivo estático com navegação de demonstração, sem autenticação, APIs, banco, vídeos, criação de conta, cobrança, persistência real, tratamento de dados de menores ou autorização de acesso. Não é frontend de F2. A versão HTML entregue como artefato na conversa precisa ser incorporada ao repositório como versão controlada e validada **antes do aceite visual final/handoff**; a especificação e a referência do artefato ficam registradas aqui para não confundir protótipo conversacional com evidência Git versionada.

## Gates finais mínimos para liberar pedido de autorização independente da F2
- [x] Regras e jornadas de UX do produto organizadas e aprovadas nos Blocos 01–10.
- [x] Autoria de design e prototipação atribuída à PM/ChatGPT; Claude não fará design D1.
- [x] Direções A/B/C articuladas e **primeira amostra autoral** entregue para revisão.
- [ ] **Marina escolhe e aprova direção visual**, incluindo logotipo institucional primário, paleta e uso contextual de variantes.
- [ ] **Design system inicial** consolidado e aprovado (tokens, tipografia, contrastes, componentes, estados, responsividade).
- [ ] **Revisão dos protótipos prioritários desktop/mobile** de acesso/cadastro/perfis/conta e estados sem acesso/erro/loading, com ajustes de Marina.
- [ ] **Evidências de protótipos versionadas/vinculadas** no GitHub e critérios de aceite D1 registrados.
- [ ] **Aceite explícito final D1 pela Marina**, ao menos para a parte que habilita as telas F2, registrando quaisquer telas F3–F8 pendentes para D1.x.
- [ ] **Autorização expressa e separada da F2** na Issue #7, depois de validação das pendências de segurança/escopo aplicáveis; nenhuma execução por inferência.

## Organização imediata de trabalho
1. Marina revisa a amostra e escolhe/ajusta direção visual A/B/C **em uma única rodada**.
2. ChatGPT consolida o design system e protótipos finais F2, incluindo responsividade e estados.
3. PM registra evidências, verificação e aceite D1 (ou D1 parcial explicitamente limitado).
4. Só então solicitar **autorização separada de F2** para Claude executar código e testes sob Issue #7, sem expandir escopo.

**Governança:** Meta de até 5 semanas permanece objetivo de planejamento, **não** prova de viabilidade técnica nem autorização automática. GitHub é fonte única e completa de verdade; Notion somente projeção executiva. Não há aprovação de gasto, fornecedor, deploy ou uso de dados reais.