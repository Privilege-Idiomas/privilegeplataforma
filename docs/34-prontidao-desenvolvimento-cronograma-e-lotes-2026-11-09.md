# Privilège — Prontidão de construção, cronograma de referência e execução em lotes
> **Atualização vigente — 10/11/2026:** F1 **aceita e integrada** no PR #14. **D1 (design/UX/UI) autorizada** para concepção, prototipação e aprovação visual: [Issue #15](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/15). **F2–F8 continuam sem autorização de implementação**. As descrições de planejamento e estados anteriores abaixo são registros históricos.

**Data:** 2026-11-09  
**Fonte:** confirmação de Marina de que definições comerciais/pedagógicas ainda parametrizáveis **não impedem começar a construir o software**; escopo e regras registradas no GitHub, reunião 03/11, decisões posteriores DEC-074–083.  
**Status atual — 09/11/2026:** **F1 AUTORIZADA PARA EXECUÇÃO LOCAL por Marina**, com Next.js, TypeScript, Tailwind e PostgreSQL/Supabase local. **A ordem está publicada na Issue #6; Claude Code ainda precisa ser acionado em seu próprio ambiente**. F2–F8 continuam sem autorização. Nenhuma contratação, desembolso, deploy público ou operação com dados reais autorizados.

## 1. Resposta de prontidão
**SIM: o material está suficiente para começar a programação incremental.** O repositório atualmente contém **README, CLAUDE.md e documentação**, mas **não contém ainda aplicação, banco implementado, CI ou testes de produto**. Isto é o ponto zero e deve ser a primeira entrega.

**Escopo conhecido:** catálogo Basic (bônus a assinantes), Travel e Business (comercializados separadamente), três níveis de serviços (Plano 1 somente vídeos/digital; Plano 2 com 2 plantões mensais; Plano 3 com 4 plantões de 20min e 2 particulares de 50min), níveis/trilhas, avaliação obrigatória não eliminatória, tentativas ilimitadas, direitos por aluno, perfis pagador/aluno/professor/admin, pagamentos cartão, agenda, certificados e suporte. DEC-024 (não exigir vídeo integral) foi confirmada por Matheus na reunião. **Sempre consultar decisões prevalentes** sobre trechos legados contraditórios.

## 2. Três categorias de pendência (não confundir)
1. **Não bloqueia começar a construir:** valor final dos preços, nomes de faixas pedagógicas, número final de professores, horários da agenda, conteúdo completo dos vídeos, aprovação dos roteiros de vídeo, tarifa real do gateway, licenças de videochamada. Criar tabelas/configuração e interfaces substituíveis; usar dados **fictícios identificados** para demonstrar, nunca valores hipotéticos em produção.
2. **Bloqueia apenas a funcionalidade específica:** gateway/Meet sem contrato → desenvolver orquestração, adaptadores, testes e mocks sem transações/reuniões reais; política contratual ainda sem texto definitivo → parametrizar e não ativar cobranças; privacidade de menores e média docente → implementar isolamento conservador, manter exposição desabilitada até revisão jurídica.
3. **Bloqueia operação pública/contratação:** segurança e testes aprovados, credenciais de produção, documentos/parecer jurídico aplicáveis, gateway/videoconferência testados, domínio e licenças, conteúdo validado e aceite final da gestão. **Nada disso impede criar a aplicação em ambiente local de desenvolvimento.**

## 3. Arquitetura de partida (reversível na fase 1)
Proposta já estudada: Next.js (App Router) + TypeScript + React/Tailwind; PostgreSQL/Auth/RLS via Supabase, Vercel para hosting quando autorizado, Cloudflare Stream para vídeos, Resend para transacionais quando configurado. Gateway e videoconferência **ainda não selecionados**: interfaces e adaptadores desacoplados. Não é necessário pagar ou provisionar infraestrutura remota para iniciar esqueleto, migrações locais e testes.

**Revisão técnica de prontidão do Claude antes de escrever código de produto:** confirmar a arquitetura-base, estrutura do repositório, scripts, padrão de branches/PRs, testes, estratégia de migração; devolver um diagnóstico sucinto. PM decide eventuais alterações relevantes antes da implementação. Não contratar serviços nem implantar em produção.

## 4. Cronograma de referência — relativo ao primeiro dia de desenvolvimento
| Janela de planejamento **indicativa** | Lote de entrega | Demonstração verificável ao final |
|---|---|---|
| Semana 1 | **F1 — Fundação técnica**: Next.js/TypeScript/Tailwind, convenções, testes/CI, configuração local, banco inicial, documentação .env.example | Aplicação sobe localmente, checks CI passando, PR pequena revisável; sem credenciais pagas nem deploy |
| Semanas 2–3 | **F2 — Acesso e perfis**: login, pagador/aluno, professor/admin, base de autorização e proteção de menores sem dados reais | Fluxos de cadastro/login fictício ou ambiente local, matriz de permissões e testes negativos |
| Semanas 4–5 | **F3 — Catálogo e estudo**: cursos, módulos, aulas, direitos Basic/Travel/Business, player com adaptador de vídeo | Aluno autorizado navega e assiste vídeo de teste; sem direito não abre aula/API |
| Semanas 6–7 | **F4 — Aprendizagem**: prática opcional, avaliações sem reprovação, tentativas e progresso, certificados em ambiente de teste | Caminho de estudo ponta a ponta com casos positivos/negativos automatizados |
| Semanas 8–9 | **F5 — Planos e financeiro**: seleção de serviços, direitos, ciclo contratual, gateway em mock/sandbox quando escolhido | Simulação de contratação/upgrade/downgrade e eventos sem cobrança real |
| Semanas 10–11 | **F6 — Professores e agenda**: disponibilidade, plantões, particulares, créditos e anti-colisão, videochamada por interface | Reservas 20min/10 vagas, particulares 50min, créditos corretos; sessões de teste |
| Semanas 12–13 | **F7 — Operação**: administração, suporte, relatórios, certificados/verificação e histórico de auditoria | Operação completa de demonstração, sem revelar dados entre papéis |
| Semana 14+ | **F8 — Integração/homologação**: testes, segurança, carga, revisão jurídica e fornecedor, conteúdo audiovisual e piloto | Checklist de homologação; publicação somente com autorização expressa |

**Atenção:** estas são **janelas de referência da PM, não estimativas dadas por Claude, não prazo aprovado e não calendário firme**. A duração real depende do inventário do executor e do ritmo de validação. Para previsibilidade, **Claude deve estimar cada fase em dias úteis**, com dependências, e PM registra planejamento com margem de QA/retrabalho; só então fixar datas de compromisso. É lícito sobrepor trabalho paralelo sem sobrepor a aprovação de lotes de código.

## 5. Ritual de aprovação por entrega
1. PM abre Issue(s) da fase com escopo, exclusões, definição de pronto, links canônicos, testes e riscos.
2. Claude lê `CLAUDE.md` e documentos atualizados; primeiro retorna confirmação técnica/estimativa e dúvidas bloqueadoras.
3. Marina libera **o lote atual**, não o projeto inteiro. Claude cria branch/PR, implementa, testa e referencia Issues.
4. PM e Marina validam entrega demonstrável e checklist. Se não aceitar, devolvem para correção sem liberar próxima.
5. Aceitou → atualizar GitHub com evidências/status, revisar e **liberar explicitamente** próximo lote. Notion recebe apenas marco executivo extraído do GitHub.

## 6. Primeira ordem de trabalho que pode ser entregue hoje
**F1 — Fundação, autorizada em 09/11/2026 por Marina.** Sem dependência de preços, aulas filmadas, gateway contratado, professor escalado ou parecer jurídico para alunos reais (não haverá dados reais). **Não incluir** pagamento real, perfis de menores com dados reais, deploy público, aulas ao vivo ou conteúdo de produção.

**Critérios de aceite F1:**
- [ ] Projeto Next.js App Router em TypeScript configurado com lint, formatter e regras de TypeScript estritas.
- [ ] Componentes base e Tailwind, layout inicial responsivo com identidade provisória Privilège; logotipos autorizados se disponíveis no repositório.
- [ ] Estrutura modular de API/domínio que separe catálogo, acesso, pagamento e agendamento; nenhum gateway escolhido acoplado.
- [ ] Migrações SQL iniciais/local DB ou modelo versionado de esquema, sem dados de pessoas reais.
- [ ] `.env.example` **sem credenciais** e guia de configuração/execução/testes.
- [ ] Testes mínimos e workflow de CI passando para lint, typecheck e testes.
- [ ] PR com screenshots de ambiente local, checklist de testes, riscos e estimativa atualizada para F2; nenhuma migração destrutiva, produção ou serviço pago.

**Comando de abertura para Claude:** “Leia `CLAUDE.md` e `docs/34-prontidao-desenvolvimento-cronograma-e-lotes-2026-11-09.md`. Priorize DEC-074–083 e a ata 03/11 sobre regras legadas. Trabalhe exclusivamente na Issue de F1, não em F2. Antes de implementar, informe plano técnico, estimativa em dias úteis, riscos e dependências; depois da liberação de F1 pelo responsável, entregue branch/PR com testes e evidências. Não contrate serviços, não use dados reais, não faça deploy público e não escolha gateway/Meet. Aguarde aceite antes da fase seguinte.”

## 7. Produção de videoaulas em paralelo
PM e equipe preparam um prompt audiovisual fiel a **um** roteiro de Matheus e testam IA sem alterar o texto original; aprovação do modelo precede conversão dos demais 118 roteiros. Esse trabalho não bloqueia F1 a F4 nem a criação do player com vídeo fictício.

## 8. Governança
Regra geral anterior G1→G5 continua sendo trilha para **homologação/lançamento e decisões irreversíveis**. A orientação atual de Marina diferencia **codificar de modo reversível** de **ativar comercialmente o produto**. Se houver conflito com textos históricos em `docs/06`, `docs/27`, `docs/28` ou `CLAUDE.md`, aplicar este esclarecimento **apenas ao desenvolvimento local e incremental**, preservando as salvaguardas de segurança, gastos, aceite por lote e proibição de operação pública sem validação.


## 9. Autorização expressa da primeira fase — 09/11/2026
Marina respondeu **“sim”** à pergunta da PM sobre liberar a F1 para Claude com **Next.js, TypeScript, Tailwind e estrutura inicial Supabase**. **Autorização funcional e técnica de codificação da F1**, limitada a desenvolvimento local e ao escopo/aceite da [Issue #6](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/6). Este consentimento **não autoriza F2–F8**, gastos, serviços externos contratados, migrações destrutivas, dados reais ou deploy público. A execução ainda não foi iniciada por Claude Code na presente conversa; a Issue contém a ordem pronta para o executor. A estimativa em dias úteis deverá ser fornecida pelo Claude no início do trabalho e é necessária para converter janelas indicativas em cronograma comprometido.

## 10. Andamento da F1 — 10/11/2026 (registro do Claude Code)
Claude Code foi acionado e **executou a F1** na branch `f1/fundacao-tecnica`, com plano/estimativa (2–3 dias úteis) registrados na [Issue #6](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/6). Entrega em PR para revisão; **situação: EM VALIDAÇÃO — aguardando aceite de PM/Marina**. Arquitetura, testes, riscos e proposta de F2 (estimativa 7–10 dias úteis, não iniciada) em `docs/35-f1-fundacao-tecnica.md`. Sem deploy, serviços contratados, dados reais ou migrações destrutivas. F2–F8 continuam sem autorização.


## 11. D1 — marco de design/UX/UI autorizado em 10/11/2026

**Atualização prevalente:** Marina confirmou a criação da etapa **D1 — Identidade visual digital, UX/UI e protótipos para aprovação**, registrada na [Issue #15](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/15). A fase F1 foi formalmente aceita e integrada ao `main` no [PR #14](https://github.com/Privilege-Idiomas/privilegeplataforma/pull/14). As janelas anteriores permanecem **indicativas**, e o cronograma passa a contemplar **D1 após F1 e antes da autorização funcional da F2**.

- **D1 autorizada:** briefing/inventário da marca, propostas de linguagem visual, design system, mapas UX, protótipos desktop/mobile e aceite explícito. A definição das telas de outras fases pode ser iterativa, mas as interfaces pertinentes à F2 devem ser aprovadas antes de seu desenvolvimento visual definitivo.
- **Coordenação:** PM. **Execução das telas:** apenas tarefas de design expressamente delimitadas, não programação funcional. **Aprovação:** Marina e demais envolvidos somente quando a titularidade for confirmada.
- **F2–F8:** **não autorizadas**; aceite de D1 não implica autorização de programação. Nenhum contrato, deploy, credencial de produção, processamento de dados reais ou integração externa liberados.
- **Fonte de verdade:** GitHub Issue #15 e artefatos vinculados. Notion apenas projeção executiva do status registrado no GitHub.
- **Data/prazo:** a estimar; nenhuma data-base de entrega da D1 foi aprovada.


## 12. Diretriz de aceleração recebida — 11/11/2026 (meta: até 5 semanas)

**Nova orientação expressa de Marina:** o plano original com referência de **14+ semanas é longo demais**; trabalhar com **teto desejado de 5 semanas**. A partir de 11/11/2026, cinco semanas corridas apontam para **16/12/2026** como **data-alvo proposta**, **não promessa/compromisso de lançamento nem homologação de viabilidade**. A antiga tabela de F1–F8 permanece preservada acima como baseline histórica, não cronograma aceito.

**Situação factual no início da mudança:** F1 aceita e integrada; D1 (UX/UI) em definição; F2–F8 **não autorizadas**. Claude havia estimado F2 em 7–10 dias úteis; não existe estimativa validada que comprove conclusão integral do produto, conteúdo audiovisual e operação pública em 5 semanas. Não marcar fases «aprovadas» ou «em execução» somente porque foi solicitado acelerar.

### Plano de compressão para análise, sujeito à revisão técnica do Claude e decisões da direção
- **Semana 1 (11–17/11):** fechar decisões e aceite visual prioritários D1; auditar dependências, decompor escopo por caminho crítico, reestimar F2–F8 e dependências externas em dias úteis; preparar autorização **separada** de F2 após gates aplicáveis. Sem code execution adicional por inferência.
- **Semana 2 (18–24/11):** cenário condicionado à aprovação de F2: identidade, autenticação, papéis, direitos e testes de isolamento; desenho e conteúdo audiovisual podem avançar em trilhas separadas **somente dentro de aprovações específicas**.
- **Semana 3 (25/11–01/12):** cenário condicionado aos aceites precedentes: catálogo, cursos, player com mídia de teste, progresso e prática/avaliação; backend e frontend em lotes revisáveis, com integração contínua e testes.
- **Semana 4 (02–08/12):** cenário condicionado às autorizações: integrar assinatura/benefícios em ambiente fictício, agenda e docentes, certificados, admin e suporte, com paralelismo onde houver interfaces estáveis; sem gatilho de cobrança real ou exposição de dados.
- **Semana 5 (09–16/12):** cenário condicionado à prontidão: fechamento de fluxos críticos, acessibilidade, controle de acesso, testes de regressão, segurança, ajustes e eventual piloto/homologação; **lançamento público exige** jurídico, fornecedores, conteúdo final, licenças, segurança, aceite executivo e liberação específica.

**Riscos/rota crítica que não desaparecem:** produção/validação das 118 videoaulas, parâmetros pedagógicos, capacidade do Claude/revisão da Marina, LGPD/menores, gateway/videoconferência, autenticação segura, testes de autorização, certificados e contratos; cinco semanas para produto integral em produção **não têm viabilidade demonstrada**. Não omitir componentes do escopo integral sem decisão explícita de Marina após apresentação das consequências; oferecer escolha entre entrega ampla demonstrável com serviços simulados e lançamento restrito condicionado aos requisitos de produção. Não mascarar escopo pendente como «feito».

**Ações de gestão:** (1) obter do Claude estimativas e caminho crítico revisados em dias úteis, distinguindo tempo de execução/QA/dependências; (2) apresentar quadro semanal de entregáveis, riscos e bloqueadores; (3) propor lotes pequenos e paralelismo sem quebrar controle de autorização e PR; (4) organizar decisões pendentes por responsável e prazo desejado, explicitando se bloqueiam desenvolvimento local, integração ou lançamento; (5) registrar a nova baseline **somente após validação de viabilidade e aprovação expressa de Marina**.

**Governança:** nova meta de calendário **não é autorização implícita** para F2–F8, IA paga, integrações, dados pessoais reais, contratação ou deploy. GitHub é fonte oficial; Notion somente relatório executivo derivado.


## Atualização de risco F2 — 13/11/2026, diagnóstico recebido do Claude

Claude, em análise preparatória **somente leitura**, estimou **13–18 dias úteis** para cinco pacotes F2.0 (0,5–1), F2.A (2–3), F2.B (3–4), F2.C (5–7) e F2.D (2–3), **sem contar revisão de PM**. A estimativa inicial 7–10 dias úteis de docs/35 tornou-se insuficiente para a interface premium em 2 temas + testes. A PM consolidou a [revisão visual 2 e 16 telas](41-d1-revisao-2-design-system-f2-2026-11-13.md), reduzindo o risco de retrabalho, mas **ainda não reestimou** o caminho crítico, nem validou os custos. Este número não é cronograma aprovado.

O **teto aspiracional de cinco semanas para o projeto** enfrenta risco material caso F2 consuma a maior parte do prazo. Antes de autorizar, revisar capacidade, paralelismo **apenas após gates**, divisão de escopo e validações jurídicas/comerciais. Nenhum trabalho F2.0–F2.D está autorizado por este diagnóstico; D1 revisada ainda requer aceite final de Marina e F2 exige autorização expressa separada na Issue #7. A PM responde pelo design; Claude apenas pela implementação liberada.
