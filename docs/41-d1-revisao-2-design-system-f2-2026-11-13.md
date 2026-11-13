> **NOVO ESTADO DE EXECUÇÃO — 13/11/2026:** após o aceite D1 R2, Marina **AUTORIZOU EXCLUSIVAMENTE F2.0 + F2.A** para código local de testes, identidade e RLS. A [ordem de execução docs/42](docs/42-f2-ordem-execucao-lote-0-a-2026-11-13.md) prevalece sobre declarações anteriores “F2 não autorizada” **somente para esses dois lotes**. **F2.B (autenticação funcional), F2.C (implementação visual), F2.D e F3–F8 NÃO AUTORIZADOS**. Não reinterpretar aceite visual como liberação de frontend; design continua exclusivo PM/ChatGPT.

# D1 · Revisão 2 — especificação visual canônica F2, correções de acessibilidade e limites de escopo
**13/11/2026 | Autor visual: ChatGPT/PM | Revisão motivada pelo diagnóstico do Claude | Direção A aprovada | PACOTE VISUAL ESSENCIAL PARA F2 ACEITO POR MARINA | F2 NÃO AUTORIZADA**

> **Precedência obrigatória:** para a composição visual e os tokens usados nas telas F2, prevalece este documento **e** o [protótipo Revisão 2](prototipos/d1-f2-revisao-2-acessibilidade-e-fluxos-2026-11-13.html). O docs/39 registra o primeiro design system, mas seus valores numéricos não coincidiam com a composição que Marina preferiu; esses valores **não devem ser copiados para a F2**. O HTML inicial `d1-f2-prototipo-direcao-a` foi descartado visualmente; o HTML `d1-f2-alinhado-conceitos-originais` é a referência histórica de estilo, **não o handoff final**. Esta revisão mantém o design premium original e o adapta a requisitos F2, sem autorizar desenvolvimento.


> **ACEITE FORMAL DA MARINA — 13/11/2026 (registro posterior à Revisão 2):** Marina respondeu **“aprovado”** à apresentação da **Revisão 2**, do protótipo navegável de **16 telas** e do design system corrigido. **O gate visual D1 necessário à F2 está ACEITO**. Esse aceite valida a **referência de UX/UI**, não afirma que as telas constituem código funcional, não valida direitos de imagens, não substitui QA completo WCAG, não resolve pendências comerciais/jurídicas e **NÃO AUTORIZA F2.0–F2.D, F3–F8, instalações, migrações ou deploy**. Autoria visual: ChatGPT/PM; Claude é apenas potencial implementador técnico após autorização independente na [Issue #7](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/7). Telas das fases futuras seguem D1.x quando aplicável. O gate visual passa de “aguardando aceite” para “ACEITO”; bloqueios não visuais permanecem abertos.

## 1. Regra-mãe de fidelidade
O dashboard conceitual com **logotipo oficial em branco**, sidebar azul-marinho, hierarquia editorial, imagem de **Londres/Big Ben**, bordas creme, cartões e detalhes dourados **permanece como referência estética** que agradou Marina. **Não redesenhar nem trocar por template administrativo.** As correções se limitam a contraste, tipografia auxiliar, estados, acesso público e fidelidade aos limites de direito.

## 2. Tokens canônicos da revisão (ver CSS do HTML R2)
| Token do protótipo | Claro | Escuro | Semântica |
|---|---|---|---|
| `--navy` | `#0B1F37` | `#0B1F37` | marinho institucional |
| `--navy2` | `#112B49` | `#112B49` | ações e navegação base |
| `--navy3` | `#173B55` | `#173B55` | variação institucional |
| `--gold` | `#C99B4F` | `#C99B4F` | detalhes decorativos, **não texto pequeno sobre branco** |
| `--gold2` | `#E8BD70` | `#E8BD70` | acabamento premium (não definir universalmente como foco) |
| `--cream` | `#FBF8F2` | `#0A172A` | fundo da aplicação |
| `--paper` | `#FFFDFA` | `#10253D` | fundo secundário |
| `--surface` | `#FFFFFF` | `#11243B` | cards, superfícies |
| `--ink` | `#14253B` | `#F7F1E8` | texto principal |
| `--muted` | `#606E7B` | `#B2C0CE` | texto secundário |
| `--stroke` | `#E8E0D6` | `#284359` | borda de separação **não é borda suficiente para input** |
| `--subtle` | `#F3EEE6` | `#19334B` | notas, fundos passivos |
| `--success` | `#1F785F` | `#7AD1B6` | sucesso, junto a feedback textual |
| `--accent-ink` | `#76501E` | `#F0CF93` | texto/acento legível |
| `--field-outline` | `#77889A` | `#91A6B9` | borda dos inputs |
| `--focus-color` | `#244567` | `#F0CF93` | foco visível; preservar 3px e offset |
| `primary button` | `#0B2240` / `#FFF` | `#E7BC72` / `#14253B` | fundo/texto do CTA |
| `active nav` | `#203F61` / `#FFF` | igual | fundo/texto do item ativo; friso dourado |

**Paridade documentação vs protótipo:** valores intencionalmente extraídos da versão visual aprovada como *direção*, não da tabela antiga do docs/39. `--navy`, `--navy2`, `--gold` são fixos em ambos os modos; superfícies, texto, contornos e foco mudam. Não converter detalhes decorativos dourados diretamente em letras ou botões sem verificar o contraste.

**Contrastes pontuais calculados para a Revisão 2 (WCAG):**
- branco/item ativo marinho `#FFFFFF/#203F61`: **10,80:1**;
- texto principal/branco `#14253B/#FFFFFF`: **15,47:1**;
- texto secundário/branco `#606E7B/#FFFFFF`: **5,23:1**;
- acento textual/branco `#76501E/#FFFFFF`: **7,15:1**;
- acento/escuro `#F0CF93/#11243B`: **10,49:1**;
- contorno de campo/branco `#77889A/#FFFFFF`: **3,64:1**;
- contorno de campo/escuro `#91A6B9/#10253D`: **6,17:1**;
- texto sobre botão primário no escuro `#14253B/#E7BC72`: **8,72:1**;
- botão primário/ superfície escura `#E7BC72/#11243B`: **8,84:1**.
Esses números verificam **pares específicos**. **Não constituem auditoria completa WCAG 2.2 AA**, sobretudo sobre fotografias, estados hover/desabilitado e leitores de tela; QA de acessibilidade integral continua critério futuro.

## 3. Tipografia, medidas e componentes
- **Corpo:** `'Segoe UI', Inter, Arial, sans-serif`, usando fallback local nesta amostra; **títulos** `Georgia, serif`. Futura paridade entre Android/Linux/macOS precisa ser medida e, se necessário, resolver com fonte com licença e hospedagem aprovadas; não buscar web fonts na D1.
- **Texto auxiliar mínimo observado nas telas verificadas: 12px**; corpo geral 13–16px; botões/rótulos principais 14px ou mais; headlines editoriais generosas. A revisão elevou subtextos 9–11px que geravam baixa legibilidade.
- **Breakpoints do HTML R2:** `1100px`, `850px`, `570px`; estes **substituem** os números orientativos 900/560px do docs/39.
- **Componentes essenciais:** logo oficial, sidebar só na área autenticada, cabeçalho público separado, painel/hero editorial, navegação contextual, botão primário e secundário, link, campo com label, abas com foco/teclado, chip e painel de estado `aria-live`, alternância Claro/Escuro/Sistema com escolha manual persistida e Sistema padrão. Alvo primário de toque pelo menos 44px. Inputs com contorno próprio de contraste reforçado.
- **Aprovação de estilo ≠ código pronto:** não importar HTML puro para o Next sem reestruturação e checagens de backend.

## 4. Matriz das 16 páginas **demonstrativas** na Revisão 2
| Página/id | Objetivo de design | Regra para F2 |
|---|---|---|
| `dashboard` | **Conceito premium original** com Big Ben, cursos, atividade e progresso ilustrativos | **Não exibir na F2 funcional**, F3/F4 não autorizadas |
| `access` | login com **layout público** sem sidebar/avatar/busca e marca oficial | sem enumeração de conta e sem login funcional no protótipo |
| `signup` | **ativação após matrícula**, não cadastro aberto que cria direito | requer direito confiável + verificação de e-mail; compras são fluxo comercial separado |
| `verify` | confirmação de e-mail com mensagem neutra | uso único, token temporário, identidade não presumida |
| `recover` | solicitar redefinição de senha | mesma resposta para conta existente/inexistente |
| `new-password` | nova senha após link de recuperação | não alterar sem token válido; expiração e reutilização bloqueadas no servidor |
| `home-f2` | **início de F2 com estado vazio** | sem curso/progresso/contrato fictício ou direito automático |
| `roles` | descrição dos quatro perfis | conteúdo informativo, **não** concede papéis |
| `role-previews` | galerias de navegação aluno/pagador/professor/admin | só demonstrativo; menu de produção usa permissões reais de servidor |
| `account` | Minha Conta: dados, segurança, preferência | leitura/edição só do próprio titular |
| `email-change` | formulário de mudança de e-mail | exigir autenticação e confirmação dupla |
| `email-confirm` | estado de duas confirmações pendentes | não persistir mudança sem ambas |
| `status` | link válido/expirado/usado, e-mail, sessão, rate limit, 404/500, loading | mensagens neutras, acessíveis e seguras |
| `denied` | acesso negado | não revelar recurso/dado alheio |
| `states` | biblioteca visual de erro, carregamento, vazio, sucesso neutro | nenhuma operação de backend |
| `reference` | imagem original para comparação visual | galeria histórica, não template de produção |

### Separação de shells
**Público (sem login):** `access`, `signup`, `verify`, `recover` e `new-password` usam `guest-head`, marca oficial e seletor de tema, **sem** avatar de Ana, sino, busca ou sidebar. As outras páginas são **demonstrações de navegação autenticada**, não prova de autenticação. Menu lateral da galeria é um índice de D1 e não define os links reais por papel.

### Regras de produto fixadas por documentação existente, não decisão comercial nova
- [docs/19 — J-01](19-p02-jornadas-identidade-contas.md): ativação depende de direito contratado **proveniente de fonte confiável** e confirmação de e-mail; **cadastro livre do antigo mock foi substituído por ativação ilustrativa**. Não há vinculação automática de menores.
- [docs/19 — J-03](19-p02-jornadas-identidade-contas.md): recuperação neutra, temporária e de uso único.
- [docs/19 — J-05](19-p02-jornadas-identidade-contas.md) e docs/08: mudança de e-mail controlada; confirmação nos dois endereços conforme decisão posterior vigente; recuperação excepcional com validação independente.
- [docs/21 — P-04](21-p04-matriz-permissoes-seguranca.md): perfis e menus não substituem RLS/autorização; docentes sem acesso a notas individuais; pagador sem acesso acadêmico presumido.
- **Sem manter conectado** na UI até que duração e política de sessão tenham decisão competente; **busca e notificações** ficam de fora do escopo funcional F2, embora apareçam na tela conceitual F3/F4.
- A rota `/cursos` de F1 deve continuar intacta nesta fase. Remover/redesenhar curso **não é** decisão visual autorizada para F2.

## 5. Imagens, logotipo e ícones
- O protótipo embute **as mesmas imagens conceituais** do exemplo premium previamente mostrado (Londres e thumbnails) para revisão de composição. **Não declarar que têm direitos de uso público** antes de validar procedência/licença, resolução retina e eventual necessidade de substituição por fotografias licenciadas.
- O logotipo Privilège é original fornecido no projeto, incluído em PNG no HTML. Removido `filter:brightness(1.2)` na revisão para impedir transformação dos pixels oficiais. **Na implementação, versionar originais fornecidos conforme política de assets**, com revisão da variante apropriada por fundo; não extrair fontes de qualquer captura redimensionada.
- Os 20 símbolos SVG simples do protótipo são desenhos de traço preparados no material de D1, **sem carregamento de biblioteca externa**. Na F2, verificar origem/licenças de qualquer dependência de ícones escolhida; Claude não modifica a identidade sem aprovação.
- Não carregar foto/conteúdo externo automaticamente; imagens e dados de exemplo não devem aparecer como direitos reais.

## 6. Evidências de conferência local (sem execução funcional)
**Revisão 2:** 16 telas de HTML estático, sem infraestrutura, e-mails, usuários, senhas reais ou API; alternância de apresentação e resposta de feedback. Testes Chromium/Playwright com `set_content` em **1440×900, 768×1024 e 390×844**: navegação por cada tela, alternância de shell, simulações de estado/papel, Claro/Escuro, presença de labels, **sem erros JavaScript observados**, sem overflow horizontal nos percursos e inspeção dos textos de dashboard **sem fontes abaixo de 12px**. Imagens de revisão desktop/mobile geradas localmente; **não alegar teste de persistência de tema após reload servido, auditoria WCAG completa, QA do Next ou execução real de autenticação**.
- O HTML é autossuficiente para inspeção local; o desenho responsivo permanece fiel ao conceito anterior.
- A UI de contas não guarda valores de campos, não processa tokens e não concede direitos.
- A fidelidade visual e os estados adicionais **ainda precisam do aceite visual final expresso da Marina**.

## 7. O que o design não pode decidir sozinho
| Item | Estado / decisão necessária | Bloqueio seguro até decisão |
|---|---|---|
| Sessões / “manter conectado” | Tempo de sessão, revogação e retenção (B-P02-05/JUR-06/08) | Não oferecer opção longa nem prometer prazo |
| Validade de links | Expiração, throttling e recuperação excepcional | Token temporário, sem parâmetro inventado; fluxo excepcional manual e auditado |
| Menores/vínculos | Parecer de representação, consentimento, prova e retenção (JUR-02/11) | Nega default no backend para menor/vínculo automático |
| Direitos e migração | Fonte confiável, equivalência e cronograma comercial | Sem direito automático por cadastro |
| Papéis administrativos | Quais alçadas atribuem/perdem privilégios (JUR-06/DEC-071) | Sem autopromoção; seed somente fictícia em testes |
| Foto & tipografia cross-platform | licenças e escolha de assets premium para produção | Não liberar uso público/redistribuição sem comprovação |
| DEC-008 / stack | verificar decisão técnica e suas consequências na fonte canônica | Não reinventar stack nem iniciar novas dependências |

## 8. Cronograma revisto, gate e responsabilidades
Claude reportou **13–18 dias úteis para F2** em F2.0 (0,5–1), F2.A (2–3), F2.B (3–4), F2.C (5–7), F2.D (2–3), **excluindo tempo de revisão PM**. Trata-se de estimativa recebida, **não validada nem autorizada**, e representa risco à **meta aspiracional** de cinco semanas para o projeto. Não iniciar nem F2.0/F2.A/F2.B antes da autorização separada, mesmo que tecnicamente independam do aceite visual.

**Gate D1 para F2:**
- [x] Direção premium A aprovada por Marina.
- [x] Proposta antiga rejeitada como handoff final; conceito premium preservado.
- [x] Tokens, breakpoints, fonte e papéis corrigidos nesta revisão.
- [x] Fluxos essenciais de F2 demonstrados, com shell público separado.
- [x] QA local preliminar de desktop/tablet/mobile/temas e interações.
- [x] **Marina aprovou expressamente o HTML Revisão 2 e o design system corrigido** — aceite visual final D1 essencial à F2, registrado na Issue #15.
- [ ] Verificar direitos/resolução de imagens e fonte para produção — pode ser gate de asset/implementação, não pressupor aceite de licença.
- [ ] Decisões de sessão, menores, vinculações e regras excepcionais, com bloqueios seguros e alçadas definidas.
- [ ] **Marina autoriza a F2 separadamente na Issue #7**.

**Execução:** ChatGPT/PM mantém design, UX e revisão de fidelidade; Claude Code é apenas implementador técnico **após autorização expressa**, preservando o aspecto aprovado e incluindo testes de segurança. O GitHub é canônico; Notion apenas relatório executivo derivado.
