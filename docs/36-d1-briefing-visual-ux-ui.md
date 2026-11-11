# D1 — Briefing visual oficial para revisão — Privilège Plataforma
**Data:** 10/11/2026 · **Etapa:** D1 · **Issue:** [#15](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/15)
**Status:** **BRIEFING PROPOSTO / AGUARDANDO REVISÃO E ACEITE VISUAL** — o direcionamento verbal «sofisticado, premium e elegante» foi dado por Marina; **paleta, tipografia, componentes, protótipos e aplicações abaixo não estão aprovados**.
**Coordenação/curadoria:** PM (ChatGPT) · **Aprovação:** Marina, com participação de outros responsáveis somente se indicada.

## 1. Objetivo e posicionamento
Desenvolver uma experiência digital para o ensino de idiomas que comunique **sofisticação, qualidade, confiança, exclusividade acolhedora e elegância contemporânea**. A plataforma não deve parecer um produto genérico de tecnologia nem ostentar luxo excessivo. Premium aqui significa clareza, cuidado nos detalhes, consistência, fluidez, excelente legibilidade, acabamento visual e apoio humano perceptível.

**Direção expressamente escolhida por Marina:** «sofisticado, premium mas também elegante».
**Princípios de design propostos:** (a) elegância com moderação; (b) clareza antes de decoração; (c) confiança por consistência; (d) tecnologia discreta; (e) experiência acessível em desktop e celular; (f) marca presente sem competir com a aprendizagem.

## 2. Inventário da marca existente (evidência, não decisão nova)
Materiais disponibilizados no projeto:
- `PRIVILEGE-Logo-Branco.png`: brasão com coroa + «Privilege Idiomas», monocromático branco, apresentado sobre fundo escuro.
- `PRIVILEGE-Logo-Dourado.png`: mesma construção, em dourado/âmbar sobre fundo escuro.
- `PRIVILEGE-LogoAzul.png`: versão azul-violeta/roxa sobre fundo claro.
- `PRIVILEGE-LogoVermelha.png`: versão vermelha sobre fundo claro.
- `PRIVILEGE-Logo2.png`: versão multicolorida (vermelho, azul-violeta e dourado).
As cinco imagens fornecidas têm 1702×874 px. Há uma marca com escudo, «P» central, coroa e lettering. **Não existe, entre essas imagens, um manual de marca que determine qual variante é institucional primária nem códigos oficiais de cor ou fontes.** Não redesenhar, simplificar ou recolorir o brasão/wordmark sem autorização. Em aplicações pequenas avaliar necessidade de asset oficial reduzido; não recortar o brasão sem aprovação.

A apresentação `Privilege_Apresentacao_Produto_03-11-2026.pptx` descreve a proposta de uma jornada integrada de descoberta, aprendizagem, apoio e certificação e perfis aluno, professor, responsável/pagador e administração. **Essa apresentação contém hipóteses e informações de 03/11 potencialmente superadas**; para regras comerciais/pedagógicas usar decisões prevalentes do GitHub, não o slide como fonte final.

## 3. Personalidade, tom e não objetivos
**Atributos:** refinada, segura, acolhedora, criteriosa, internacional, organizada, humana, contemporânea.
**Tom de interface:** claro, confiante e cordial; explicações curtas e úteis; sem pressão comercial, slogans grandiosos ou jargão desnecessário. Apoio a pessoas em diferentes níveis de fluência, com labels em português e conteúdo pedagógico em inglês quando pertinente.
**Evitar:** dourado maciço em grandes superfícies; gradientes metálicos e brilhos; excesso de sombras; ornamentação de coroa repetida em cards; animações ostensivas; formulários complexos; texto com contraste insuficiente; interfaces infantis; padrões genéricos de marketplace/startup.

## 4. Direção de cores — proposta para avaliação, NÃO oficial
A linguagem sugerida prioriza superfícies claras quentes e blocos institucionais escuros, deixando o dourado para acentos.
| Token proposto | Hex de trabalho | Uso pretendido |
|---|---|---|
| `brand.navy` | `#17283C` | hero, cabeçalho institucional e fundos de destaque |
| `brand.navy-deep` | `#101D2C` | contraste em superfícies escuras |
| `accent.gold` | `#B58A47` | filetes, ícones de destaque, pequenos detalhes não críticos |
| `surface.cream` | `#F7F4EE` | fundo de seções e cartões especiais |
| `surface.white` | `#FFFFFF` | base de leitura e formulários |
| `text.primary` | `#202B37` | textos principais em fundo claro |
| `text.muted` | `#66717C` | textos auxiliares (verificar contraste) |
| `border.soft` | `#E2E0DB` | separadores discretos |

**Importante:** esses códigos são **hipóteses de trabalho**, não extração fiel nem substituição das cores oficiais do logotipo. A versão dourada enviada aparenta âmbar mais vivo do que o acento sugerido: antes da adoção final, conferir lado a lado e harmonizar; não alterar o logo para fazê-lo combinar. Estudar também a alternativa institucional baseada no azul-violeta presente no logo azul, sem presumir aprovação do azul-marinho como cor principal.

**Regras:** dourado não deve ser único indicador de estado nem cor-padrão de texto corrido; testar WCAG 2.2 AA (mínimo 4.5:1 para texto normal e 3:1 para texto grande/elementos não textuais relevantes). Estados de erro/sucesso/informação devem ter padrões acessíveis independentes da paleta de marketing.

## 5. Tipografia — propostas, NÃO oficiais
- **Títulos / editorial:** uma serifada contemporânea de contraste moderado (ex.: `Cormorant Garamond` ou `Libre Baskerville`) apenas em manchetes curtas, se aprovada.
- **UI / leitura:** sans-serif de alta legibilidade (ex.: `Inter` ou `Source Sans 3`) em campos, navegação, aula, tabelas e controles.
- **Alternativa mais sóbria:** uma única sans-serif refinada, com hierarquia de peso e espaçamento, evitando serifada caso conflite com o lettering do logotipo.
- **Restrições:** fontes são sugestões estéticas; avaliar licença, hospedagem local, suporte a acentos e desempenho. Não ativar download de fontes externas em produção sem revisão. Nunca imitar ou substituir o lettering existente do logo.

## 6. Linguagem visual e componentes
- **Grid/layout:** largura máxima legível, bastante respiro, alinhamento consistente, modularidade responsiva; menu lateral de estudo quando apropriado, sem comprimir o player.
- **Botões:** primário sólido escuro e contraste alto; secundário contornado/tonal; dourado só em acento ou estado especial, evitando áreas muito chamativas. Estados hover, focus visível, disabled, loading e erro.
- **Cards:** superfícies limpas, bordas finas, sombra suave e rara, cantos discretamente arredondados; sem efeitos de vidro ou gradientes padrão.
- **Formulários:** labels permanentes, feedback inline, campos confortáveis, recuperação de erro, teclado móvel apropriado e instruções claras.
- **Ícones:** traço simples e coerente, não misturar famílias, com labels acessíveis.
- **Fotografia:** estética editorial natural, luz suave, diversidade de pessoas e contextos de estudo/viagem/trabalho; evitar banco de imagem corporativo genérico. Não usar imagens de alunos reais sem autorização.
- **Movimento:** microinterações discretas; respeitar `prefers-reduced-motion`.
- **Mobile:** navegação simplificada, controles acionáveis com conforto, conteúdo prioritário acima da dobra quando possível.

## 7. Mapa de superfícies e prioridades de prototipação
**Ciclo 1 (alta fidelidade desktop + mobile para aprovar direção visual):**
1. Página inicial / proposta de valor.
2. Entrada / login / recuperação, com fluxos apenas de protótipo.
3. Catálogo e detalhe do curso, com direitos demonstrativos claramente fictícios.
4. Dashboard do aluno (progresso, acesso, próximos passos).
5. Sala de aula/player (vídeo placeholder, resumo, materiais e navegação).

**Mapeamento inicial, detalhamento iterativo:** pagador/responsável, professor/agenda, administração, suporte e certificados. O protótipo não antecipa aprovação de regras jurídicas/comerciais.

**Para todas as telas do ciclo 1:** casos vazios, carregamento, erro, permissão negada e uso em viewport móvel; copy provisória claramente marcada. Priorizar fluxos, hierarquia e acessibilidade acima de ornamentos.

## 8. Etapas e gates de aprovação
**Gate D1.A — direção visual:** apresentar 2–3 composições de referência autorais (não copiar layouts), incluindo combinação com as variantes originais do logo, paleta, tipografia e componentes exemplares. Registrar escolha e ajustes de Marina.
**Gate D1.B — sistema visual:** aprovar tokens, componentes, responsividade, acessibilidade e uso do logotipo, com evidências.
**Gate D1.C — telas essenciais:** protótipos navegáveis desktop/mobile do ciclo 1, revisados individualmente; registrar aceites e pendências por tela.
**Handoff:** especificações e evidências versionadas/vinculadas no GitHub; implementação funcional só após liberação independente da fase correspondente.

## 9. Questões a validar (não bloqueiam a elaboração de alternativas)
1. Qual variante do logo é a marca institucional primária e quais podem ser usadas por contexto? Existe manual de marca?
2. Preferência entre **marinho + âmbar/dourado** e uma alternativa **azul-violeta + dourado** coerente com a marca existente.
3. Aceitação de títulos com serifada editorial ou preferência por tipografia integralmente sans-serif.
4. Quem além de Marina participa da aprovação visual, se alguém?
5. Há referências de sites/produtos admirados ou rejeitados? (Opcional, não pré-requisito.)

## 10. Limites de execução e governança
- **F1:** concluída/mesclada no PR #14.
- **D1:** autorizada **apenas** para estudo, briefing, propostas e protótipos.
- **F2–F8:** **não autorizadas**; nenhuma implementação funcional, deploy, contratação, integração externa ativa ou dados reais.
- **Regra de decisão:** nenhuma hipótese de cor, fonte, componente ou tela é «APROVADA» até declaração explícita; documentar revisões no GitHub.
- **Notion:** somente visão executiva extraída do GitHub; não se tornar fonte de decisões.


## 11. Decisão aprovada — modos de aparência (10/11/2026)

**Decisão expressa de Marina:** o design da Privilège deverá prever **modo claro**, **modo escuro** e **modo automático (sistema)**. A **opção inicial preferida/padrão é automático pelo sistema**, respeitando a preferência de aparência do sistema operacional/dispositivo. A escolha manual do usuário deverá ser **persistida**, de modo que a preferência seja mantida nas próximas visitas/sessões, com possibilidade de retornar a «Sistema».

**Status da decisão:** **APROVADO PARA O PLANEJAMENTO DA D1** — não significa que a implementação funcional esteja liberada ou realizada. A identidade visual final dos dois temas, paletas precisas, contrastes, componentes e protótipos ainda requerem revisão e aceite específico.

### Requisitos de UX/UI para os protótipos
- Desenhar as **mesmas telas** nos temas claro e escuro, preservando estrutura, hierarquia, funcionalidades e a identidade sofisticada, premium e elegante.
- Desenhar seletor «Aparência» com as opções **Claro**, **Escuro** e **Sistema (automático)**; indicar de forma inequívoca o modo ativo.
- Simular no protótipo a regra: preferência manual tem prioridade sobre o tema do dispositivo; «Sistema» acompanha claro/escuro do dispositivo quando essa opção estiver selecionada.
- Prever persistência da escolha entre sessões como **requisito futuro**; não vincular ainda a tecnologia de armazenamento nem exigir conta autenticada para alternância.
- Validar contraste WCAG 2.2 AA, foco visível, acessibilidade de ícones e controles e legibilidade de textos/tabelas/áreas de estudo nos dois temas. Usar o dourado como acento e não como único sinal de estado.
- Priorizar superfícies claras para leitura prolongada no tema claro e azul profundo com superfícies escuras coerentes no tema escuro, sem tornar a experiência de estudo visualmente sobrecarregada.
- Preservar os arquivos originais dos logotipos branco e dourado; testar sua adequação a cada fundo sem redesenhar a marca.

### Critérios de aceite futuros
- [ ] Protótipos desktop e mobile de uma tela de estudo e do dashboard em **ambos os temas**.
- [ ] Seletor Claro / Escuro / Sistema representado nas especificações e estados.
- [ ] Tokens semânticos de cores e estados documentados para os dois temas.
- [ ] Simulação dos comportamentos «Sistema» e seleção manual, incluindo persistência como requisito especificado.
- [ ] Revisão de legibilidade/contraste e aprovação expressa do conjunto visual.

**Restrição mantida:** não executar código, instalar bibliotecas de tema ou iniciar a F2. A futura implementação dependerá de autorização independente da fase de desenvolvimento correspondente; nenhuma estimativa preliminar é compromisso de custo/prazo.


## 12. Decisão aprovada — feedback de exercícios e avaliações (10/11/2026)

**Decisão expressa de Marina para a D1:** diferenciar a experiência de correção de **exercícios de prática** e **avaliações**:

1. **Exercícios de prática:** após responder a cada questão, o aluno pode verificar sua resposta e recebe **feedback imediato**, informando se acertou ou errou e apresentando **uma explicação educativa**. A prática é acessada pelo botão «Praticar» na página da aula e apresenta **uma questão por vez** (decisões anteriores da D1).
2. **Avaliações:** o aluno responde às questões e recebe o **resultado consolidado somente ao final**, com indicação de desempenho, acertos/erros e explicações pertinentes. Não revelar a correção de cada resposta durante a realização da avaliação.

### Regras UX para detalhar nos protótipos
- Representar o botão «Verificar resposta» e o estado de correção imediata nas questões de prática (acerto, erro e explicação); manter mensagem legível, acessível e não dependente apenas de cor.
- Representar a navegação por questões e a tela de resultado consolidado nas avaliações, sem fornecer feedback de acerto/erro antecipadamente.
- Respeitar as regras pedagógicas prevalentes: **não bloquear a próxima aula por nota mínima nem por visualização integral do vídeo**.
- A quantidade de questões, a apresentação da nota, tentativas, possibilidade de alterar resposta, momento de exibir o gabarito e outras regras específicas permanecem sujeitas a detalhamento/validação conforme documentos canônicos; esta decisão não as altera.
- Aplicar os mesmos comportamentos aos protótipos Claro/Escuro/Sistema em desktop/mobile, com contraste e acessibilidade.

**Status:** **APROVADO COMO REQUISITO DE UX DA D1**, não como design final ou funcionalidade implementada. Nenhuma programação, testes de produto, deploy, compras ou F2–F8 autorizados.


## 13. Bloco 01 — decisões de UX para prática e avaliações (aprovado em 10/11/2026)

**Aprovação expressa de Marina:** as seis decisões a seguir foram aprovadas **em bloco**, exclusivamente para especificação de UX, protótipos e handoff futuro. Esta seção complementa as decisões anteriores de «Praticar», questão por vez e feedback imediato na prática / consolidado ao final da avaliação.

| Nº | Situação | Comportamento aprovado |
|---|---|---|
| 1 | Aluno erra uma questão de prática | **Mostrar explicação e permitir tentar novamente.** |
| 2 | Aluno acerta uma questão de prática | **Mostrar confirmação, explicação curta e botão «Próxima».** |
| 3 | Aluno sai antes de concluir a atividade | **Salvar o progresso e permitir retomar posteriormente.** |
| 4 | Aluno conclui os exercícios de prática | **Mostrar resumo de desempenho e opção de revisar.** |
| 5 | Aluno conclui uma avaliação | **Mostrar nota, acertos, erros e explicações por questão.** A correção permanece consolidada ao final, não durante a avaliação. |
| 6 | Nota da avaliação é baixa | **Sugerir revisão da aula e nova tentativa, sem bloquear o avanço.** |

### Implicações de UX para prototipação
- Prática apresenta uma questão por vez; «Verificar resposta» revela feedback educativo. Em erro, apresentar opção de nova tentativa; em acerto, confirmar, explicar brevemente e oferecer «Próxima».
- Ao sair e retornar a exercícios/avaliações em andamento, permitir continuar do progresso salvo; definir os detalhes de persistência/autenticação na fase técnica autorizada, sem implementar na D1.
- Ao terminar a prática, exibir resumo e ação de revisão; ao finalizar avaliação, exibir nota e revisão por questão, sem respostas corretas reveladas durante a realização.
- Uma nota baixa gera orientação de estudo, **nunca bloqueio de avanço**. O mesmo vale para a exigência de assistir integralmente ao vídeo.
- Incluir estados de carregamento, erro, retomada, conclusão e feedback acessível; aplicar em desktop/mobile e nos modos Claro/Escuro/Sistema.

**Limites da decisão:** não foram aprovados neste bloco limiares numéricos de «nota baixa», escala/ponderação da nota, quantidade/tipos de questões, forma de cálculo do progresso, número de tentativas ou política de persistência técnica. Consultar decisões pedagógicas prevalentes e validar detalhes restantes sem inferência.

**Governança:** somente D1 de design/UX autorizada; **nenhuma implementação, F2–F8, deploy, contratação ou operação com dados reais** foi autorizada.


## 14. Protocolo obrigatório da PM — verificação de decisões existentes (10/11/2026)

**Determinação expressa de Marina:** antes de formular **qualquer novo bloco de decisões** de UX, design ou produto, a PM deve **consultar os registros atuais no GitHub** para não reabrir escolhas já definidas.

1. Consultar os documentos e registros canônicos aplicáveis ao assunto (requisitos, Decision Log e arquivos de decisões por responsável, atas prevalentes, especificações D1, Issues e PRs relevantes).
2. Classificar cada ponto como **já resolvido**, **revisar/conflitante** ou **genuinamente em aberto**, com as fontes GitHub correspondentes.
3. **Não pedir nova aprovação** de itens resolvidos, salvo pedido expresso de mudança ou conflito material identificado. Distinguir decisão vigente de hipótese antiga ou ilustração de mockup.
4. Quando houver divergências entre documentos, rastrear a decisão posterior/prevalente e sinalizar somente o conflito que realmente exige confirmação, sem sobrepor regras silenciosamente.
5. Apresentar os próximos blocos apenas com lacunas verdadeiras, registrando decisões aprovadas no GitHub e indicando eventual impacto em escopo e critérios de aceite.
6. GitHub permanece a fonte de verdade integral; Notion apenas projeção executiva.

**Restrição:** estas verificações não constituem autorização de implementação, liberação da F2–F8 ou alteração das regras de aprovação.


## 15. Bloco 02 — organização da sala de aula e reconciliação com DEC-031 (aprovado em 11/11/2026)

**Decisão expressa de Marina para UX da D1:** o conjunto abaixo foi aprovado como especificação de interface, sem autorização de implementação.

| Nº | Elemento | Decisão aprovada |
|---|---|---|
| 1 | Resumo escrito da aula | Exibir em **aba «Resumo»**, junto às informações da aula. |
| 2 | Materiais complementares | Exibir em **aba «Materiais»**, com lista de **textos e PDFs** disponíveis para aquela aula. |
| 3 | Navegação no celular | **Vídeo em destaque** e módulos/aulas em **painel expansível**. |
| 4 | Recursos e ações da aula | **Abas «Resumo» e «Materiais»**, mais botões claramente identificados **«Praticar»** e **«Fazer avaliação»**, em fluxos separados. |
| 5 | Questões marcadas como dúvida | Acessar pelo filtro **«Questões em dúvida» na área geral de exercícios**; preservar a lista privada do aluno. |
| 6 | Resposta errada nos exercícios de prática | Mostrar **explicação educativa imediata sem revelar automaticamente o gabarito**. A resposta correta aparece **somente se o aluno escolher «Ver resposta»**. |

### Reconciliação histórica obrigatória

- **DEC-031** (`docs/08-decisoes-marina.md`, 31/10/2026) já decidiu **tentativas ilimitadas, gabarito inicialmente oculto e escolha de «Tentar novamente» ou «Ver resposta e explicação»**, sem obrigar revelação; também decidiu que visualizar o gabarito não equivale a acertar. O Bloco 01 da D1 (10/11) havia aprovado «explicação imediata», que era ambígua quanto à revelação da resposta.
- **Esta decisão de 11/11 esclarece, sem revogar a DEC-031:** apresentar **feedback explicativo imediato não revelador** em caso de erro, mantendo **gabarito oculto por padrão** e opções de **tentar novamente** ou **ver a resposta correta**. Se o aluno optar por «Ver resposta», mostrar o gabarito e a explicação completa já cadastrados. Tentativas permanecem ilimitadas; histórico e estados pedagógicos da DEC-031/033/034 permanecem vigentes. A explicação educativa pré-revelação precisa ser redigida sem entregar a alternativa correta ou pistas que a identifiquem de modo inequívoco.
- **DEC-063** já determinava uma página com vídeo, resumo, materiais, prática e avaliação, e navegação por módulos/aulas. Este Bloco 02 **detalha a apresentação**: as abas ficam na página da aula, enquanto botões levam a telas separadas de prática e avaliação; a navegação lateral em desktop se adapta ao painel expansível em mobile. Não remover as capacidades funcionais já previstas.
- **DEC-034:** a marcação «Questão em dúvida» é privada, independente do acerto/erro, persistente e com desmarcação; selecionar o filtro na área geral não concede acesso às questões de cursos sem direito, nem revela as marcações a professores. O botão/controle de marcar questão na própria prática continua previsto pela DEC-034, enquanto o filtro é a forma de reencontrá-las.
- **DEC-074/075/079 e decisões posteriores prevalentes:** avaliação obrigatória, nota não eliminatória, tentativas ilimitadas, correção consolidada somente após finalizar, retomada e direitos vigentes. As frases antigas em DEC-063/REQ-013/015 que exigiam nota mínima para desbloqueio ou limitavam a duas tentativas são históricas **e não devem ser aplicadas**. Não exigir 100% do vídeo (DEC-024 consolidada).

### Critérios de revisão do protótipo
- [ ] Desktop: player de vídeo prioritário, navegação visível por módulos/aulas, abas Resumo/Materiais e botões Praticar/Fazer avaliação.
- [ ] Mobile: vídeo em destaque, módulos/aulas acessíveis por painel expansível e botões facilmente acionáveis.
- [ ] Materiais apresentam apenas textos e PDFs existentes e autorizados; estados vazios, indisponíveis e carregamento com mensagens claras.
- [ ] Prática: erro apresenta explicação **sem gabarito automático**, com botões «Tentar novamente» e «Ver resposta»; acerto apresenta confirmação, explicação curta e «Próxima».
- [ ] Questões em dúvida acessíveis pelo filtro na biblioteca pessoal, observando privacidade e direitos por curso.
- [ ] Modo Claro/Escuro/Sistema, logotipo oficial, contraste, foco e navegação acessível; layouts definitivos para aprovação expressa.
- [ ] Nenhuma regra de desbloqueio ou tentativas legada reintroduzida.

**Status:** as seis escolhas de UX estão **APROVADAS PARA D1**. Ainda não há aceite final de protótipos nem estimativa/custo aprovado para implementação. **F1 concluída; F2–F8 não autorizadas; sem desenvolvimento funcional, deploy, contratação ou dados reais.**
