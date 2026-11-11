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


## 16. Bloco 03 — visão geral dos cursos e navegação (aprovado em 11/11/2026)

**Aprovação expressa para UX da D1:** as cinco decisões abaixo são de **organização visual e linguagem de interface**, não de novas regras comerciais ou pedagógicas.

| Nº | Questão | Decisão de UX aprovada |
|---|---|---|
| 1 | Módulos na visão geral do curso | **Módulos expansíveis**, exibindo a lista de aulas ao selecionar/expandir cada módulo. |
| 2 | Estado de acesso das aulas | **Ícone acompanhado de texto explícito:** «Concluída», «Disponível» ou «Bloqueada». Não usar apenas cor ou ícone como sinalização. |
| 3 | Curso nunca iniciado | CTA principal **«Começar curso»**, conduzindo à primeira aula efetivamente autorizada, sem inventar progresso anterior. |
| 4 | Organização da área «Meus cursos» | Mostrar **cursos em andamento primeiro**, seguidos de **não iniciados** e **concluídos**. Respeitar os direitos do aluno. Critério de desempate dentro de cada grupo não foi definido. |
| 5 | Cursos acessíveis e descoberta comercial | Na interface, separar em duas seções: **«Meus cursos»** e **«Conhecer outros cursos»**; segunda seção apenas quando houver oferta pública pertinente não incluída nos direitos do aluno, sujeita à revisão de adequação para menores. |

### Precedência e conciliação com decisões canônicas
- **DEC-044:** já prevê dashboard personalizado e descoberta de cursos adicionais. Este bloco apenas define as seções e a ordenação dos cursos acessíveis. O destaque «Continuar de onde parou» permanece como prioridade do dashboard (docs/37).
- **DEC-045/046/047/048:** a seção «Conhecer outros cursos» encaminha à **página pública de apresentação do curso**; página oferece «Ver planos e preços» a quem não tem acesso, e «Acessar curso» ao aluno autenticado com direito ativo. **Não redirecionar diretamente ao checkout** nem liberar conteúdo protegido.
- **DEC-049:** «Acessar curso» abre **visão geral pedagógica**, com módulos, aulas, progresso e retomada. A organização expansível detalha a apresentação já definida. «Começar curso» é a ação específica para aluno sem histórico no curso; só leva à aula autorizada.
- **DEC-063:** desktop pode manter navegação lateral estruturada, enquanto a visão geral do curso mostra módulos expansíveis; mobile mantém painel expansível de módulos na aula (Bloco 02). Estados devem permanecer compreensíveis e acessíveis.
- **DEC-050/051 e regras pedagógicas posteriores:** percentual de progresso e status «Concluído» seguem os registros canônicos vigentes. **Não** reintroduzir nota eliminatória, limite de duas tentativas ou exigência de 100% do vídeo com base em linguagem histórica de DEC-049/050/063; avaliação obrigatória não eliminatória e tentativas ilimitadas prevalecem.
- **Privacidade e comercialização:** nenhum dado protegido de curso sem direito; não usar personalização comercial direcionada a menores sem revisão jurídica/adequação. O bloco não define preços, ofertas, novos cursos nem requisitos para desbloqueio.

### Critérios de aceite do protótipo
- [ ] Visão geral de curso com módulos expansíveis e aulas listadas com estado textual e ícone.
- [ ] Primeiro acesso apresenta «Começar curso» e estado sem histórico fictício.
- [ ] Meus cursos tem três agrupamentos ordenados: em andamento → não iniciados → concluídos.
- [ ] Seção «Conhecer outros cursos» separada e condicionada à existência de cursos não autorizados; rota exclusivamente informativa conforme DEC-045–048.
- [ ] Desktop/mobile, Claro/Escuro/Sistema, acessibilidade e uso do logotipo original contemplados no design do Claude.
- [ ] Direitos e regras pedagógicas prevalentes preservados; protótipo não finge funcionalidades implementadas.

**Status:** Bloco 03 **APROVADO PARA ESPECIFICAÇÃO/PROTÓTIPOS D1**; não há aceite visual final, liberação técnica, custo aprovado ou autorização de implementação. **F2–F8 continuam NÃO AUTORIZADAS.**


## 17. Bloco 04 — biblioteca de exercícios e histórico de aprendizagem (aprovado em 11/11/2026)

**Aprovação expressa de Marina:** quatro escolhas de organização visual para prototipação D1, não autorização de nova funcionalidade ou implementação.

| Nº | Elemento | Comportamento de UX aprovado |
|---|---|---|
| 1 | Filtros da biblioteca «Exercícios» | **Barra de filtros no topo**, incluindo os filtros já definidos por curso, módulo, aula e dificuldade; **recolhível no celular**. |
| 2 | Apresentação dos exercícios disponíveis | **Cards organizados por curso e módulo**, com ação clara de acesso à prática. Os cards não implicam divulgação de enunciados de cursos sem direito. |
| 3 | Revisão dos conteúdos de cada módulo | Ao final da lista de aulas do módulo, exibir o botão **«Revisar módulo»**, direcionando à lista de revisão do módulo autorizada. |
| 4 | Histórico de aprendizagem | Área centralizada **«Meu progresso»**, reunindo **resumo por curso, gráfico de evolução e histórico detalhado** do aluno. |

### Reconciliação com decisões canônicas já aprovadas
- **DEC-027 / REQ-018:** a biblioteca conserva filtro por **curso, módulo, aula e nível de dificuldade** e herança de autorização de curso. Cursos sem direito só podem aparecer como **agrupamentos bloqueados**, sem revelar questões individuais, códigos, alternativas ou respostas; não usar cards de exercícios individuais bloqueados.
- **DEC-028 / REQ-019:** a lista «Revisar módulo» reúne exercícios dos conteúdos das aulas do mesmo módulo e **não substitui avaliações obrigatórias nem cria bloqueio adicional** por suposição. O novo botão só define a localização do acesso, não quantidade, composição, condições inéditas de obrigatoriedade ou regras de liberação.
- **DEC-031/033/034:** preservar fluxo de feedback da D1, tentativas ilimitadas em prática, ordem **pendentes → inéditas → concluídas**, embaralhamento dentro de cada grupo, códigos de questão e marcadores pessoais privados. Os cards da biblioteca são de **conjuntos de prática por curso/módulo**, não autorizam substituir a experiência de uma questão por vez ao praticar.
- **DEC-050/051 e decisões posteriores de avaliação:** «Meu progresso» apresenta dados acadêmicos verdadeiros por curso, sem deduzir conclusão a partir de prática opcional ou vídeo assistido. DEC-050 contém redação histórica de nota eliminatória; aplicar a regra posterior de avaliação obrigatória **não eliminatória**, sem inventar novo cálculo percentual.
- **DEC-074/075:** gráfico de **nota por tentativa com data**, histórico de tentativas e evolução de desempenho já estão aprovados. Centralizar a apresentação em «Meu progresso» **não cria uma métrica de evolução adicional** nem redefine a nota vigente; manter segregação de dados por aluno e autorização de curso.
- **D1 Blocos 01–03:** manter organização de aula, acesso «Praticar», tratamento de feedback e «Meus cursos» como aprovados; usar os mesmos padrões de responsividade e acessibilidade. Os padrões visuais definitivos permanecem sob design do Claude e aprovação visual de Marina.

### Critérios de aceite do protótipo D1
- [ ] Biblioteca desktop: filtros no topo; cards de conjuntos autorizados agrupados por curso/módulo com acesso à prática.
- [ ] Mobile: filtros recolhíveis, acessíveis por teclado/leitor de tela, com estado aplicado/limpar compreensível.
- [ ] Cursos sem autorização: indicações **agregadas** e bloqueadas, nunca cards ou enunciados de questões específicas.
- [ ] Visão geral do módulo: botão «Revisar módulo» ao fim da lista de aulas, sem induzir falsa obrigatoriedade.
- [ ] «Meu progresso»: resumo por curso, histórico detalhado e gráfico de nota por tentativa/data, sem dados fictícios ou de terceiros.
- [ ] Claro/Escuro/Sistema, mobile/desktop e uso da marca original previstos; UX legível e acessível.

**Pendências preservadas:** definição de quantidade de questões por conjunto e filtros de dificuldade, detalhes de cálculos acadêmicos, custos, arquitetura, aprovação final de layout, salvaguardas de privacidade/menores. **Apenas D1 autorizada; F2–F8 e programação funcional NÃO AUTORIZADAS.**


## 18. Bloco 05 — Agenda, plantões e aulas particulares (aprovado em 11/11/2026)

**Aprovação expressa de UX pela responsável:** cinco decisões de apresentação para prototipação D1; não ampliam benefícios comerciais nem autorizam programação.

| Nº | Aspecto | Escolha de UX aprovada |
|---|---|---|
| 1 | Organização de agendamentos | **Uma página «Agenda», com abas «Plantões» e «Aulas particulares».** |
| 2 | Consulta da disponibilidade | **Calendário** para selecionar data e visualizar horários disponíveis. |
| 3 | Créditos do aluno | **Resumo de saldos no topo da Agenda, separando plantões de particulares**, conforme elegibilidade real. |
| 4 | Reservas existentes | **Próximos agendamentos em destaque**, com histórico abaixo, preservando estados reais. |
| 5 | Antes da confirmação de reserva | **Resumo contendo data, horário, modalidade, crédito utilizado e política de cancelamento**. Não confirmar automaticamente por selecionar um horário; expor prazo de 2 horas e consequências conforme regras vigentes. |

### Precedência com as decisões canônicas
- **DEC-066 (texto original histórico), revisão confirmada em DEC-067/08 e ata de 03/11:** **plantões coletivos exigem reserva prévia**; sessões de 20 minutos, no máximo 10 participantes; não adotar plantão de entrada livre do registro inicial de 02/11. Aulas particulares seguem com escolha de horário/professor conforme direitos e disponibilidade.
- **DEC-082 (08/11):** **Plano 1 exclusivamente digital**, sem créditos ou opção de reservar plantão/aula particular como benefício. Isto substitui o antigo «1 plantão/mês»; a Agenda deve representar corretamente a **ausência de elegibilidade** sem saldo fictício.
- **DEC-067/08, DEC-083:** Plano 2 tem 2 plantões/mês; Plano 3 tem 4 plantões/mês e 2 particulares de 50 min/mês, com créditos por modalidade separados e sem acúmulo. Não exibir valores ou ofertas avulsas não aprovadas.
- **Cancelamento:** para sessões elegíveis, prazo mínimo aprovado de **2 horas antes do início** para remarcação/cancelamento sem perda de crédito; cancelamento tardio/falta podem consumir o crédito. Se a Privilège cancelar, preservar o crédito da reserva afetada. Mostrar detalhes antes de confirmar, sem prometer exceções contratuais não aprovadas.
- **DEC-079.4:** plantão lotado deve indicar indisponibilidade e outra sessão quando houver, sem lista de espera e sem consumo do crédito por tentativa frustrada. Não apresentar como vaga reservável.
- **DEC-064/078 e proteção de menores:** permissões por papel, dados de professor/aluno mínimos, segurança, provedor de videoconferência não escolhido; sem gravação ou contratação de ferramentas por esta decisão.

### Orientação para os protótipos
- Desktop/mobile: calendário e abas acessíveis; datas e fusos mostrados sem inventar horários; estados vazios, sem benefício, sessão lotada, reserva existente, cancelada, erro e carregamento.
- Resumo de confirmação deve ser legível e inequívoco; distinguir prévia de reserva efetivamente confirmada e crédito ainda disponível/consumido.
- Preferência Claro/Escuro/Sistema, logotipo oficial e leitura por tecnologias assistivas.
- Créditos e serviços que não constam do direito real não podem aparecer como incluídos; não antecipar preços, fornecedor ou disponibilidade.

**Registro histórico preservado:** as inconsistências antigas em DEC-066 e em notas iniciais de distribuição de benefícios permanecem disponíveis para auditoria, mas **não têm precedência** sobre as confirmações posteriores. DEC-066/067/082/083 prevalecem conforme datas e autoridade específica.

**Status:** cinco escolhas **APROVADAS PARA UX D1**; nenhum aceite visual final, orçamento, implementação, F2–F8, contratação, deploy ou uso de dados reais autorizados.


## 19. Bloco 06 — Central de Ajuda e Suporte (aprovado em 11/11/2026)

**Aprovação expressa de Marina:** cinco escolhas de UX, restritas à D1 e à prototipação visual. Não constituem autorização de novas ferramentas, implementação ou mudanças nas regras de negócio.

| Nº | Elemento | Decisão de UX aprovada |
|---|---|---|
| 1 | Central de Ajuda | **Página única com Pesquisa, Perguntas frequentes, Minhas solicitações e Abrir chamado.** |
| 2 | Formulário de suporte | **Página dedicada**, contendo assunto, descrição e contexto pertinente; evitar solicitação de informações pessoais além do necessário. |
| 3 | Acompanhamento de solicitações | **Cards com protocolo, assunto, data e status**, abrindo detalhes da solicitação selecionada. |
| 4 | Reportar problema durante uma aula | **Ação discreta na aula** que abre o formulário com **contexto da aula já identificado**; respeitar permissões e não divulgar respostas de avaliações ou outros dados sensíveis. |
| 5 | Perguntas frequentes | **Categorias expansíveis**, com **pesquisa por palavras-chave**. |

### Reconciliação com decisões canônicas
- **DEC-070.3/070.4/070.5:** perguntas frequentes, canal de suporte técnico/pedagógico/administrativo, acompanhamento individual e relato contextual de problemas em vídeo/material/exercício/avaliação já estão aprovados. O Bloco 06 escolhe somente a forma de apresentação.
- **DEC-071.8 e DEC-078.4:** cada solicitação tem protocolo e estados mínimos **«Aberta» → «Em análise» → «Resolvida»**; existe central de suporte dentro da plataforma **e canal por e-mail**. O layout em cards não altera estados, fluxo de atendimento, segurança, prazos nem disponibilidade do canal de e-mail.
- **Privacidade e menores:** somente o aluno autenticado e profissionais legitimamente autorizados acessam os chamados correspondentes; dados de terceiros, dados pessoais excessivos e gabaritos restritos não são expostos no formulário/contexto automático. Regras específicas de responsável legal, retenção e LGPD seguem suas decisões aplicáveis e validação jurídica.
- **Sem novas promessas:** não estabelecer SLA, atendimento 24 horas, chat em tempo real, respostas geradas por IA, integração paga de helpdesk, notificação por aplicativos ou possibilidade de reabrir chamados sem decisão separada.
- **D1 Blocos 01–05:** preservar acesso à ajuda no dashboard e a ação de reporte em aula sem prejudicar player, prática ou avaliação; padrões de responsividade e modo Claro/Escuro/Sistema já definidos.

### Critérios de aceite para protótipos D1
- [ ] Central apresenta pesquisa, FAQ, Minhas solicitações e ação Abrir chamado com hierarquia clara.
- [ ] Formulário dedicado com assunto, descrição e contexto pertinente; estados de validação/erro/sucesso sem protocolo fictício emitido.
- [ ] Lista de chamados próprios em cards com protocolo, assunto, data e estado textual; detalhes acessíveis apenas ao usuário permitido.
- [ ] Ação «Reportar problema» discreta na aula, com contexto permitido identificado sem exigir digitar dados já conhecidos.
- [ ] FAQ agrupada em categorias expansíveis e pesquisável; estado sem resultados previsto.
- [ ] Desktop/mobile, acessibilidade, texto compreensível, logo original e Claro/Escuro/Sistema preservados.

**Status:** Bloco 06 **APROVADO PARA UX D1**; histórico original intacto. **Nenhum aceite final do design, custo, implementação, F2–F8, contratação, deploy ou operação com dados reais autorizado.**


## 20. Bloco 07 — Minha Conta e Preferências (aprovado em 11/11/2026)

**Aprovação expressa para UX da D1:** cinco escolhas de apresentação, sem autorização de desenvolvimento funcional.

| Nº | Assunto | Decisão aprovada |
|---|---|---|
| 1 | Organização de Minha Conta | **Abas «Dados pessoais», «Segurança» e «Preferências».** |
| 2 | Edição dos dados pessoais | **Visualização em modo de leitura**, seguida de botão **«Editar»** para campos cuja alteração seja autorizada. |
| 3 | Modos de aparência | Seletor **Claro / Escuro / Sistema** na aba **«Preferências»**, com acesso rápido também pelo **menu de perfil**. |
| 4 | Ações de segurança | Área **«Segurança»** com ações individualizadas para **senha, e-mail e recuperação de acesso**. |
| 5 | Assinatura e acesso | **Resumo do curso/plano e direitos pertinentes**, com acesso aos detalhes. Não confundir direito ao curso com benefícios do nível de plano. |

### Reconciliação com as decisões canônicas
- **DEC-070.1–2, DEC-071.1–2, DEC-078.1–3:** edição somente de campos permitidos, validação reforçada de mudança de e-mail no endereço atual e novo, recuperação excepcional quando necessário, redefinição de senha segura, revogação de sessões conforme motivo aprovado e tratamento neutro de conta existente. As abas e ações não alteram regras de autenticação, vínculos de menores, proteção contra abuso ou verificação de identidade.
- **D1 §11 (10/11/2026):** Claro/Escuro/Sistema já aprovado com **Sistema como padrão**, persistência de escolha manual e comportamento correspondente ao tema do dispositivo; este bloco somente aprova as **localizações** dos seletores. Alterar aparência não exige modificar dados acadêmicos, direitos ou perfil.
- **DEC-040/041/042/043 e DEC-012/082/083:** não criar portal de responsável, nem dar ao aluno acesso a informações financeiras privadas de outro pagador. Resumo diferencia **curso contratado (Travel/Business, Basic bônus conforme direito)** de **nível de serviços do plano** e exibe apenas benefícios verdadeiramente disponíveis. Detalhes comerciais ainda dependem de dados e parâmetros aprovados.
- **Privacidade e dados:** não permitir alteração unilateral de dados sensíveis, titularidade ou vínculo do responsável; nenhum fluxo fictício é apresentado como funcional; preservar exclusão/retificação e tratamento de dados sujeito à legislação e decisões canônicas.

### Critérios de aceite do protótipo D1
- [ ] «Minha Conta» abre três abas acessíveis: Dados pessoais, Segurança e Preferências.
- [ ] Dados pessoais inicialmente somente leitura, com botão «Editar» em contexto permitido e estados claros de salvamento/validação.
- [ ] Aparência disponível em Preferências e menu de perfil; Sistema é padrão e escolha manual persistente é requisito futuro, sem tecnologia imposta.
- [ ] Ações de senha, e-mail e recuperação de acesso agrupadas e diferenciadas; preservar confirmações e verificações já aprovadas.
- [ ] Resumo de curso/plano distingue direitos de conteúdo, serviços e dados financeiros de terceiros; nenhum benefício inventado.
- [ ] Responsividade desktop/mobile, acessibilidade, modos Claro/Escuro/Sistema e logotipo original.

**Status:** Bloco 07 **APROVADO PARA UX D1**; sem aceite visual definitivo, custo aprovado, implementação, F2–F8, deploy, contratação ou autorização de dados reais.


## 21. Bloco 08 — nivelamento e trilhas de aprendizagem (aprovado em 11/11/2026)

**Decisão expressa de Marina — apenas UX D1**, sem autorização de desenvolvimento, alteração pedagógica ou liberação de fases posteriores.

| Nº | Aspecto | UX aprovada |
|---|---|---|
| 1 | Disponibilidade visual do teste de nivelamento | **Convite opcional no primeiro acesso**, permanecendo disponível posteriormente **na área de estudos**. |
| 2 | Convite inicial | **Card com breve explicação e ações «Fazer teste» e «Agora não».** A dispensa não bloqueia a jornada de aprendizagem. |
| 3 | Interface de questões | **Uma questão por tela, com indicador de progresso**; a quantidade de questões e metodologia ainda dependem da equipe pedagógica. |
| 4 | Apresentação do resultado | **Resultado em destaque, explicação curta e orientações de estudo**, apenas conforme faixas e recomendações pedagogicamente aprovadas. |
| 5 | Organização de trilhas | **Cards por objetivo de aprendizagem**, indicando **cursos vinculados e direitos de acesso**; nenhuma trilha duplica conteúdos ou concede acesso novo. |

### Conciliação com a DEC-080 e demais decisões prevalentes
- **DEC-080.01–03:** o teste é **facultativo** antes e durante o curso. Sua realização não é pré-requisito para começar, progredir ou concluir. Resultado recomenda nível/orientação; faixas, parâmetros e nomenclatura **configuráveis e dependentes de definição pedagógica** — não presumir nota 0–10, níveis fixos, número de questões ou pontuação.
- **DEC-080.04–06:** Basic English é recomendável para iniciantes, **não obrigatório** para Travel/Business. Trilhas são selecionáveis e alteráveis livremente com progresso preservado, sem multiplicar cursos ou ampliar direitos contratados. O aluno só abre conteúdos autorizados. Cards explicam objetivos e cursos vinculados, sem inventar cursos/trilhas concretos.
- **DEC-044 e Blocos 03/04:** o convite opcional de primeiro acesso deve integrar a experiência de dashboard sem bloquear «Começar curso», «Continuar estudando», «Meus cursos» ou «Meu progresso». «Agora não» não é reprovação, abandono obrigatório nem cria avanço fictício.
- **Proteção de menores / DEC-040–043:** recomendações educacionais não equivalem a perfilamento comercial de menores; não usar resultado para compra direcionada, concessão automática ou restrição de curso.

### Critérios de aceite do protótipo
- [ ] Primeiro acesso mostra convite facultativo com «Fazer teste» e «Agora não»; ação de prosseguir sem testar sempre disponível.
- [ ] Área de estudos permite iniciar teste posteriormente sem precisar passar pelo convite inicial.
- [ ] Questão por tela e indicador de progresso ilustrados sem afirmar número de questões aprovado.
- [ ] Resultado apresenta orientação textual sem nota/faixa inventada como parâmetro final.
- [ ] Trilhas em cards por objetivo, com cursos relacionados, estados de direito e preservação de progresso na troca de trilha.
- [ ] Layout responsivo, acessível, Claro/Escuro/Sistema e marca original.

**Status:** Bloco 08 **APROVADO PARA UX D1**. Especificação pedagógica, aprovação visual final, custos, stack, implementação, F2–F8, deploy e contratação seguem **não autorizados/pendentes conforme respectivos gates**.
