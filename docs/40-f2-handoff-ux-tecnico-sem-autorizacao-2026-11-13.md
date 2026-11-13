# F2 — Handoff de UX/UI para implementação técnica (NÃO AUTORIZADA)

> **PRECEDÊNCIA VISUAL — 13/11/2026:** O protótipo citado na seção histórica abaixo divergiu dos conceitos anteriores e **NÃO está aprovado**. **Referência revisada:** [d1-f2-alinhado-conceitos-originais-2026-11-13.html](prototipos/d1-f2-alinhado-conceitos-originais-2026-11-13.html). Ainda **SEM ACEITE D1 FINAL** e **SEM AUTORIZAÇÃO F2**. A seção final de correção explica o histórico.
**Preparado pela PM/ChatGPT em 13/11/2026** · **Status:** PRONTO PARA REVISÃO, **NÃO EXECUTAR** · **Issue:** [#7](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/7).

## 0. Natureza do documento
Este arquivo prepara a futura entrega da F2; **não autoriza desenvolvimento**, compra, acesso a dados reais, mudança de fornecedores ou deploy. A F1 foi aceita no PR #14; D1 possui **direção visual A aprovada** e **protótipos submetidos ao aceite visual final**, ainda pendente. A Marina deve (i) aprovar expressamente o pacote visual D1 e (ii) **autorizar F2 separadamente**; não se pode inferir o segundo evento do primeiro.

**Responsabilidades:** PM/ChatGPT é a única responsável por desenhar e revisar o UX/UI. Claude Code poderá **exclusivamente implementar o design entregue** na F2 após autorização, realizar testes e devolver PRs com evidências. **Claude não faz design**, não troca paleta/tipografia/componentes ou reinterpreta UX sem revisão da PM/Marina.

## 1. Fontes que o executor deve ler, nesta ordem
1. [Design system aprovado em direção, sob aceite final](39-d1-design-system-direcao-a-para-aceite-2026-11-13.md).
2. [Protótipo estático D1/F2](prototipos/d1-f2-prototipo-direcao-a-2026-11-13.html) — **referência de layout**, não código funcional a copiar sem avaliação técnica.
3. [UX Blocos 01–10](36-d1-briefing-visual-ux-ui.md) e [registro canônico de decisões](08-decisoes-marina.md), aplicando a decisão posterior prevalente.
4. [Jornadas P-02](19-p02-jornadas-identidade-contas.md), [matriz de acesso P-04](21-p04-matriz-permissoes-seguranca.md) e DEC-040–043/070/071/078; políticas de menores e responsabilidades condicionadas à revisão jurídica.
5. [F1 técnica e riscos](35-f1-fundacao-tecnica.md), [cronograma de prontidão](34-prontidao-desenvolvimento-cronograma-e-lotes-2026-11-09.md) e [CLAUDE.md](../CLAUDE.md).
6. [Issue #7](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/7), que registra autorização quando eventualmente concedida.

## 2. Escopo F2 proposto, **apenas depois de liberação**
- Autenticação local por provedor configurável, fluxos de acesso, logout, recuperação de senha e mudança de e-mail conforme direitos, segurança e confirmações existentes.
- Modelos de **aluno**, **pagador/responsável**, **professor** e **admin**, vínculos com menor apenas com defaults seguros/fluxos bloqueados até autorização jurídica; papéis e perfis nunca autoatribuídos pela UI.
- Isolamento entre perfis/contas e verificação **em servidor/API + políticas RLS**, inclusive quando o usuário muda a URL, conhece IDs ou manipula o navegador. F1 negava por padrão; F2 introduzirá políticas específicas sob teste.
- Telas responsivas conforme tokens e protótipos: login, cadastro, recuperação, visão contextual de papéis, Minha Conta, segurança, preferências e estado de acesso negado.
- Experiência acessível, temas Claro/Escuro/Sistema (padrão Sistema; escolha manual persistente); estados carregando/vazio/erro/confirmação neutra; mensagens sem enumeração de contas.
- Dados somente fictícios para testes. Nenhum pagamento real, cadastro público real, conexão com produto audiovisual, acesso a conta real, gateway ou videochamada implementados por este documento.

## 3. Dependências e decisões que o Claude não pode inventar
| Área | Regra/condição |
|---|---|
| Menores | Vínculos, comprovação e consentimento dependem de parecer/decisão específica; negar operações sensíveis até liberação. Sem portal parental presumido. |
| Troca de e-mail | Confirmar **no endereço atual e no novo**; se não houver acesso ao antigo, recuperação excepcional com validação independente; sem CPF isolado como comprovação. |
| Senhas/sessões | Recuperação sem revelar existência de conta; em troca por suspeita de invasão, demais sessões revogadas. Prazo/tokens dependem de especificação de segurança. |
| Perfis/papéis | Mínimo privilégio e segregação. Professor pode pesquisar questões autorizadas, mas não vê marcadores privados do aluno nem notas individuais. |
| Média docente | Somente a própria média agregada, e apenas após limites de privacidade/anti-inferência aprovados; default oculto. |
| Pagador | Acesso ao próprio contrato não autoriza acesso acadêmico individual de aluno por inferência; proteção reforçada de menores. |
| Direito comercial | Autenticação não concede curso, crédito, benefício, pagamento ou acesso ao catálogo privado. F3–F8 seguem não autorizadas. |
| Autorizações | Não substituir checagem de backend por botão oculto. Não exportar dados pessoais, criar autorização de admin ou vincular menor sem validação. |
| Logo | Manter os originais; não criar marca derivada nem recolorir arquivos de imagem. |
| Serviços | Usar apenas infraestrutura local/teste aprovada; sem credenciais pagas ou deploy público. |

## 4. Plano de PRs candidatos (não são ordens de execução)
| PR candidato | Conteúdo e resultado verificável | Pré-condição |
|---|---|---|
| **F2.A** | modelo de usuários e vínculos, migração aditiva, RLS deny-by-default e testes cross-account negativos | Issue #7 autorizada, arquitetura e dados fictícios |
| **F2.B** | adaptador de autenticação local, entrada/saída/recuperação e erro neutro, testes | F2.A revisada, ambiente Supabase local/CI validado |
| **F2.C** | componentes visuais aprovados, responsividade e temas, páginas de perfil/conta/segurança, estados UI | aceite D1, revisão de F2.A/B |
| **F2.D** | testes integrados de isolamento/perfis/menores, acessibilidade básica, QA e screenshots, documentação/handoff F3 | PRs anteriores revisados, critérios de aceite cumpridos |

**Estimativa histórica do Claude para F2:** 7–10 dias úteis em [docs/35 §8](35-f1-fundacao-tecnica.md), **não revalidada** para esta nova lista de PRs. O teto desejado de 5 semanas para o projeto não substitui estimativa, margem de QA nem autorização fase a fase.

## 5. Critérios objetivos de aceite técnico futuro
- [ ] Cada papel obtém somente os dados/ações atribuídos; testes negativos por recurso e titular, incluindo endpoints diretos e políticas RLS.
- [ ] Sem acesso cruzado entre aluno, pagador, docente e administração; papéis administrativos só por ação autorizada.
- [ ] Nenhum usuário manipula IDs para ler dados de outro aluno ou alterar próprio papel.
- [ ] Recuperação de senha não revela titularidade do e-mail; testes de e-mail inexistente e existente geram mensagens equivalentes.
- [ ] Troca de e-mail requer confirmação em ambos endereços; perda do atual inicia recuperação excepcional em vez de alteração imediata.
- [ ] Proteção de menor bloqueia fluxo sem validação exigida, sem cadastro real nem exploração de dados pessoais.
- [ ] Theme default Sistema, opções Claro/Escuro/Sistema aplicadas e preferência manual persistida; mobile/desktop sem overflow.
- [ ] Inputs com rótulo, foco visível, erro textual; telas de permissão negada sem exposição de dados.
- [ ] Testes lint, typecheck, unitários, integrações locais, CI e regressão F1 passam; PRs com evidências.
- [ ] Nenhum segredo em Git, serviços pagos, dados reais, áudio/vídeo de produção, pagamento ou deploy.
- [ ] Entrega conforme protótipo e design system; qualquer divergência visual registrada e revisada pela PM, não decidida silenciosamente pelo Claude.

## 6. Checklist de liberação (gate administrativo)
- [x] F1 aceita.
- [x] Direção visual A aprovada.
- [x] Design system v1 e protótipo HTML versão GitHub preparados.
- [ ] Aceite **final** de D1 essencial para F2 por Marina, registrado na Issue #15.
- [ ] Revisão de pendências de segurança/menores e bloqueios do escopo por PM/Marina; preservação de bloqueios jurídicos.
- [ ] Revisão/atualização de estimativa técnica e decomposição quando Claude for acionado **após autorização**.
- [ ] **Marina autoriza F2 expressamente na Issue #7**.
- [ ] Somente então Claude recebe ordem para implementação de F2 e inicia branch/PR.

**Proibido interpretar este documento, a aprovação da direção A ou a meta de 5 semanas como liberação de F2.** D1 pode ser aceita antes da F2, mas as duas aprovações continuam independentes.


---

## Aviso de substituição da referência visual — 13/11/2026

**ATENÇÃO — Correção de divergência identificada por Marina:** o arquivo `docs/prototipos/d1-f2-prototipo-direcao-a-2026-11-13.html` citado acima fica preservado **apenas para histórico**; **não implementar sua composição** nem usá-lo como aceite visual. A referência atual para futura implementação, depois de aceite final da D1, é:

**[docs/prototipos/d1-f2-alinhado-conceitos-originais-2026-11-13.html](prototipos/d1-f2-alinhado-conceitos-originais-2026-11-13.html)**

Esta versão restaura a composição visual dos mockups anteriores da plataforma (dashboard premium, imagens editoriais de Londres, cards, navegação marinho/dourado), mantendo o logo oficial e os estados F2. Documento [docs/39 — revisão de fidelidade](39-d1-design-system-direcao-a-para-aceite-2026-11-13.md).

**D1 continua sob revisão e F2 continua NÃO AUTORIZADA**. O handoff é somente preparatório. Claude não desenha nem altera a identidade e não deve iniciar código F2 antes do aceite visual final de Marina + autorização separada na Issue #7.
