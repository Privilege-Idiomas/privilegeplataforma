# Privilège — Prontidão de construção, cronograma de referência e execução em lotes
**Data:** 2026-11-09  
**Fonte:** confirmação de Marina de que definições comerciais/pedagógicas ainda parametrizáveis **não impedem começar a construir o software**; escopo e regras registradas no GitHub, reunião 03/11, decisões posteriores DEC-074–083.  
**Status:** **pronto para criar e revisar o cronograma e preparar início do Lote 1 com Claude Code**, sem aprovação de contratação, desembolso, deploy público ou operação com dados reais. Não confundir autorização de planejamento com liberação incondicional de todos os lotes.

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
**F1 — Fundação**. Sem dependência de preços, aulas filmadas, gateway contratado, professor escalado ou parecer jurídico para alunos reais (não haverá dados reais). **Não incluir** pagamento real, perfis de menores com dados reais, deploy público, aulas ao vivo ou conteúdo de produção.

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
