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
