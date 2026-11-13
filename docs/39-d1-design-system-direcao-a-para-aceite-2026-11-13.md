# D1 — Design system v1 e padrões visuais para aceite final
**Data:** 13/11/2026 · **Responsável pelo design:** ChatGPT/PM · **Aprovadora:** Marina · **Direção A APROVADA** · **Design system v1 CONSOLIDADO / AGUARDANDO ACEITE FINAL**
**Protótipo interativo versionado:** [docs/prototipos/d1-f2-prototipo-direcao-a-2026-11-13.html](prototipos/d1-f2-prototipo-direcao-a-2026-11-13.html)

## 1. Base formal e âmbito
Marina aprovou expressamente a direção **A: marinho editorial, dourado discreto, superfícies claras quentes, logotipos oficiais e modos Claro/Escuro/Sistema**, em 13/11/2026. A escolha de direção não é, isoladamente, aprovação das telas finais, implementação, F2–F8 ou contratação. Os Blocos 01–10 de UX estão aprovados na documentação [docs/36](36-d1-briefing-visual-ux-ui.md); este documento materializa sua camada visual prioritária para **acesso, cadastro, papéis, conta e segurança (F2)**. F3–F8 recebem complementos D1.x quando necessários, sem delegar o design ao Claude.

**Autoria:** ChatGPT/PM desenha, revisa e entrega protótipos. Claude Code **não cria nem redesenha o UX/UI**; será somente executor técnico, quando houver liberação expressa de fase, seguindo os artefatos aprovados.

## 2. Tokens de cor — valores da implementação proposta a aceitar
Os HEX abaixo são **tokens digitais do produto**, não um manual de marca retroativamente declarado; os arquivos de logotipo são oficiais e não podem ser redesenhados, recoloridos ou usados em fundos inadequados. As variantes oficiais para cada fundo precisam ser verificadas em protótipos; o usuário aprovou seu conjunto, não elegeu uma variante institucional primária.

| Token semântico | Claro | Escuro | Uso |
|---|---|---|---|
| `color.brand.navy` | `#11263D` | `#0E2132` | navegação, ações de destaque, bloco institucional |
| `color.brand.navyAlt` | `#1B3651` | `#17344A` | variação de profundidade |
| `color.brand.gold` | `#BA975C` | `#BA975C` | frisos, detalhes, barras de progresso e ênfase decorativa |
| `color.text.accent` | `#76582D` | `#E0C28B` | texto/acento que exige contraste legível |
| `color.background.app` | `#F7F5EF` | `#102031` | fundo geral |
| `color.background.sand` | `#F7F3EB` | `#162638` | áreas brand/variação |
| `color.background.surface` | `#FFFFFF` | `#1B2C3D` | cards, campos e superfícies |
| `color.background.chip` | `#F0EEE8` | `#253C51` | texto de apoio/estado passivo |
| `color.text.primary` | `#1B2B38` | `#F5F0E8` | texto principal |
| `color.text.secondary` | `#6E777E` | `#ADBAC6` | texto secundário |
| `color.border.subtle` | `#E5E0D6` | `#385069` | bordas |
| `color.focus` | `#CBA66A` | `#E0C28B` | indicador de foco |
| `color.status.positive` | `#1D7961` | `#77C9AC` | conclusão/sucesso permitido |
| `color.overlay.shadow` | `rgba(22,35,50,.07)` | `rgba(0,0,0,.18)` | sombra discreta |

**Conferência de contraste calculada para pares de referência (WCAG):** texto `#1B2B38` em `#FFFFFF` ≈ **14,49:1**; secundário `#6E777E` em `#FFFFFF` ≈ **4,56:1**; texto `#F5F0E8` em `#1B2C3D` ≈ **12,56:1**; texto institucional `#11263D` em `#F7F5EF` ≈ **14,08:1**. **Dourado `#BA975C` sobre branco ≈ 2,74:1** e **não pode ser usado como texto pequeno**; usar `color.text.accent` para letras. Exigir auditoria completa de estados desabilitado/hover/foco/erro e dos demais pares antes da implementação.

## 3. Tipografia e grid
- **Títulos editoriais:** `Georgia, Cambria, serif`, peso regular/semibold e entrelinha aproximadamente 1.13; preservar acentos. Marca/logotipo sempre raster original, nunca reconstituído em fonte.
- **Corpo e UI:** `Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`, fallback local. **Não fazer carregamento de fonte externa** na D1; direitos e hospedagem de Inter dependem de avaliação ao implementar.
- **Escala indicativa:** 12px meta/ajuda; 13–14px labels; 16px corpo; 19–20px card/título secundário; 28–36px seções/heroes. Não reduzir tipografia para compensar layout mobile.
- **Entrelinhas:** 1.45–1.65 para textos corridos. Caixa alta espaçada só em etiquetas curtas; evitar longas mensagens em uppercase.
- **Espaçamento:** base 4px; escala 4/8/12/16/24/32/48/64px. **Raios:** campos 8–10px, cards 14–16px. **Sombras:** suaves, raras; nunca depender apenas delas para delimitar componentes.
- **Desktop:** sidebar institucional com conteúdo legível e área central. **Tablet/mobile:** navegação horizontal rolável de demonstração ou solução responsiva definitiva validada; telas se ajustam sem overflow horizontal no corpo. Breakpoints demonstrativos **900px** e **560px**.
- **Alvos interativos:** buscar altura/tamanho ao menos 44px em ações principais em telas reais; assegurar foco visível e labels persistentes.

## 4. Inventário mínimo de componentes
| Família | Padrão v1 | Estados e comportamento visual exigidos |
|---|---|---|
| Navegação | sidebar navy + menu compacto responsivo | ativo, foco, hover, permitido/bloqueado; não tratar ocultar botão como autorização |
| Botão primário | navy sólido, tipografia legível | padrão, hover, foco, disabled, carregamento, erro/sucesso conforme operação |
| Botão secundário | superfície neutra e borda discreta | padrão, foco, disabled, carga; sem CTA comercial manipulativo |
| Campo | label acima, borda discreta, alto contraste | vazio, preenchido, válido/inválido, obrigatório, loading, disabled |
| Card | superfície clara/escura com borda e respiro | base, selecionado, foco, acesso bloqueado, conteúdo fictício |
| Abas | texto + indicador de seleção, sem depender apenas de cor | ativo/inativo, teclado, `aria-selected` e relação com painel |
| Feedback | mensagem textual e símbolo complementar | carregando, erro de campo, nenhum resultado, confirmação neutra, acesso negado |
| Preferência | Claro/Escuro/Sistema em Minha Conta e menu | Sistema como padrão, escolha manual persistida, segue sistema quando selecionado |
| Identidade | arquivos oficiais, respeitando fundo | versão branca/dourada em fundos adequados; sem redesenho, corte ou recoloração |
| Avisos | tom sóbrio, educativo e direto | evitar exposição de existência de conta, dados de menores e rotas privadas |

## 5. Handoff de telas essenciais D1 → F2
**Protótipo estático navegável:** [HTML D1/F2](prototipos/d1-f2-prototipo-direcao-a-2026-11-13.html). **Dado fictício, nenhuma autenticação implementada.**

| Tela demonstrada | Critérios específicos para aceite visual | Base funcional para engenharia futura |
|---|---|---|
| **Acesso** | herói institucional, inputs e-mail/senha, erro/carga, opção de recuperar, início de cadastro, contraste | DEC-070/071/078, política de autenticação e prevenção de enumeração |
| **Cadastro** | campos mínimos de aluno, nota explícita para vínculo com pagador e menor, erros/estados | DEC-040–043 e P-04, validação de identidade e vínculo |
| **Papéis** | estudante, pagador/responsável, professor, admin, descrições de limites | papéis não são autoatribuíveis por UI; RLS e checagem de backend em F2 |
| **Dashboard amostral** | hierarquia, CTA estudo, cursos/progresso fictícios, contraste | interfaces de F3–F4 ainda dependem de D1.x; não cria direito |
| **Minha Conta** | abas Dados pessoais, Segurança e Preferências; leitura + Editar; modo de aparência | dados próprios; troca de e-mail exige 2 confirmações; ações sensíveis auditáveis |
| **Acesso restrito** | mensagem neutra, ação de voltar/ajuda | não revela existência de recurso, titulares ou conteúdo |
| **Recuperação** | formulário e confirmação neutra, cenário de perda do e-mail, segurança | token e validações reais só na F2; sem CPF isolado como prova |
| **Estados da interface** | carregando, inválido, vazio, sem permissão, confirmação neutra | operações idempotentes/autorizadas quando aplicáveis; sem falso sucesso |

**Não incluído como design final F2:** componentes internos de autenticação real, fluxos jurídicos de menores, políticas comerciais, contratos ou painel real dos outros papéis. A engenharia precisará manter funções bloqueadas por padrão até validação específica, sem usar o mock como autorização de negócios.

## 6. Verificações realizadas sobre o protótipo
- HTML único, imagens oficiais embutidas em base64, sem depender de CDN, fonte remota ou conexão a sistemas.
- **8 telas** navegáveis, alternância Claro/Escuro/Sistema e demonstração de estados; no protótipo, apenas preferência de tema é armazenada localmente; **não** persistir credenciais, e-mails ou dados de alunos.
- Navegação e ações de demonstrar recuperação, mostrar caso de menor, exibir aviso de edição, troca de tema e estados testadas com Chromium/Playwright usando `set_content`.
- Viewports conferidas: **1440×900** e **390×844**; após ajuste, **sem overflow horizontal do documento** nesses testes; sem erros JavaScript detectados nesses percursos.
- **Limites da conferência:** não é auditoria WCAG completa, revisão jurídica, QA de backend, autenticação real, nem teste automatizado da persistência do tema após reload — este último comportamento é representado na implementação demonstrativa por `localStorage` e deverá ser validado em ambiente servido.
- Capturas PNG de revisão geradas na conversa; para referência canônica, o HTML versionado no repositório é a principal evidência.

## 7. Critérios finais pendentes de Marina
- [x] Direção **A** aprovada em 13/11/2026.
- [x] Design system v1 **consolidado**, ainda sem aprovação final da composição.
- [x] Protótipos de acesso, cadastro, papéis, conta, restrição, recuperação e estados **versionados no GitHub**.
- [x] Verificação preliminar desktop/mobile e navegação executada.
- [ ] **Aceite visual final do design system e das telas essenciais F2** pela Marina (comentário/declaração expressa na Issue #15).
- [ ] Decisão sobre uso de variante primária de logotipo, se necessária além da contextualização aprovada.
- [ ] Detalhamento jurídico/segurança de menores, autenticação e direitos ainda sujeitos a DEC/JUR; não são homologados por design.
- [ ] **Autorização F2 separada**, explícita na Issue #7, após aceite visual e revisão de gate técnico.

**Estado do gate:** **PRONTO PARA REVISÃO E ACEITE VISUAL**, não **D1 ACEITA**. A meta de cinco semanas é alvo de planejamento, não autorização de F2 ou promessa de lançamento.


---

## Revisão de fidelidade à proposta original — 13/11/2026 (substitui amostra visual precedente)

**Problema reportado pela Marina:** o primeiro protótipo HTML, embora coerente com os tokens de cor, divergiu das telas premium que haviam sido mostradas. **A paleta sozinha não define a identidade visual**. A versão anterior permanece rastreável, mas **não aprovada**.

**Composição da nova referência obrigatória para aceite:**
- Sidebar marinho profundo com **logotipo oficial em branco**, ícones de traço dourado e estado ativo com acento dourado.
- Topbar clara com busca, aparência e avatar ilustrativo (apenas na demonstração).
- Hero editorial com vista de Londres/Big Ben, título serifado generoso, respiro e destaque dourado.
- Card principal de retomada dos estudos; cards de cursos com imagens editoriais e estados de direito claros.
- Superfícies branco/creme, bordas sutis, sombras leves e hierarquia tipográfica elegante; layout responsivo.
- Páginas de acesso, recuperação, cadastro, Minha Conta e restrição **herdam a mesma linguagem** do dashboard, sem transformar o produto em um painel administrativo genérico.
- Exibição de dados acadêmicos e percentuais **inteiramente fictícia**, sem prometer direito de curso, sem uso de dados reais, sem liberar cadastros, integrações ou pagamentos.

**Referência visual principal para a revisão da D1:** [HTML alinhado às propostas anteriores](prototipos/d1-f2-alinhado-conceitos-originais-2026-11-13.html). Inclui tela «Referência original» para comparação com uma proposta conceitual anterior. O [HTML anterior](prototipos/d1-f2-prototipo-direcao-a-2026-11-13.html) não é mais a referência de fidelidade visual.

**Ainda não aprovado:** o aceite final de todo o design system e das telas essenciais F2. A direção A permanece aprovada. Alterações na identidade exigem revisão de Marina e não podem ser inventadas pelo Claude.
