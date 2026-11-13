# F2 — Ordem de execução AUTORIZADA exclusivamente para F2.0 + F2.A
**Plataforma Privilège · 13/11/2026 · Autorização expressa de Marina: “sim” à pergunta da PM sobre liberar APENAS o primeiro lote F2.0 + F2.A · Executor: Claude Code no VS Code · Coordenação e aceite: PM/ChatGPT + Marina**

> **ESTADO:** **AUTORIZADO — AGUARDANDO INÍCIO NO AMBIENTE LOCAL DO CLAUDE.** **Não** é aprovação do plano completo da F2. **F2.B, F2.C, F2.D e F3–F8 permanecem NÃO AUTORIZADAS.** Nenhum serviço pago, dado real, deploy, migração destrutiva, alteração em produção, gateway ou integração comercial está autorizado.

## 1. Fontes e precedência
1. [Issue #7 — autorização e acompanhamento da F2](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/7): este documento define o recorte, a Issue registra a autorização da Marina e a execução.
2. [Aceite D1 na Issue #15](https://github.com/Privilege-Idiomas/privilegeplataforma/issues/15): a referência **visual** aprovada é o [protótipo R2 de 16 telas](prototipos/d1-f2-revisao-2-acessibilidade-e-fluxos-2026-11-13.html) + [design system docs/41](41-d1-revisao-2-design-system-f2-2026-11-13.md); **não implementar UI F2.C neste lote**.
3. [P-02 — jornadas de identidade](19-p02-jornadas-identidade-contas.md), [P-04 — matriz preliminar de permissões](21-p04-matriz-permissoes-seguranca.md), [docs/08 — decisões de Marina](08-decisoes-marina.md), [CLAUDE.md](../CLAUDE.md) e documentação da F1 já integrada.
4. Se texto histórico disser que **nenhuma** parte da F2 está autorizada, **esta ordem posterior prevalece estritamente para F2.0 + F2.A**, não para os demais lotes.

## 2. Escopo autorizado
### F2.0 — Base de testes e segurança (estimativa preliminar 0,5–1 dia útil)
- Verificar `main` sincronizada, working tree e ferramentas disponíveis. **Preservar alterações e commits locais**; jamais resetar ou sobrescrever trabalho.
- Abrir **branch de implementação** a partir de `main` atualizada, com nome descritivo `f2/identidade-rls-lote-inicial` (ou variante equivalente se já existir). **Nunca desenvolver diretamente em `main` ou na branch F1**.
- Preparar execução **local** do Supabase de testes e os checks de integração/CI com ambiente descartável e **dados fictícios**; Playwright/axe para smoke tests quando aplicável; documentar alternativas se o runner não tiver Docker/Colima ou limite de CI.
- Somente dependências de desenvolvimento **livres e necessárias ao lote**, com revisão de impacto/licença e lockfile, sem serviços pagos, sem credenciais reais. Se depender de alteração arquitetural relevante, **parar e consultar a PM**.
- Entregar evidências de lint/typecheck/testes existentes e novos; não enfraquecer a política de CI da F1.

### F2.A — Dados, papéis e proteção de acesso (estimativa preliminar 2–3 dias úteis)
- Modelar **identidade/perfis** (aluno, pagador/responsável, professor, admin) e vínculos como entidades separadas de **direitos comerciais, matrícula e progresso**.
- Criar somente **migrações aditivas e reversíveis em desenvolvimento local**, com políticas **Row Level Security** e checagens de autorização que negam por padrão.
- Garantir isolamento entre contas, titularidade, papéis e recursos, inclusive para chamadas diretas à API/DB e manipulação de identificadores.
- **Professor/admin:** nenhum usuário se promove a papel privilegiado. Em testes, atribuição controlada de papéis a contas **fictícias** de seed; administração real e alçadas condicionadas à decisão competente/JUR-06.
- **Menores/responsáveis:** não disponibilizar cadastro, ativação, ligação ou transferência de contas de menores; operações sensíveis bloqueadas também no backend, até parecer JUR-02/11 e decisão de Marina.
- Auditoria **mínima e minimizada** de concessões/negações e ações privilegiadas em dados fictícios, sem tokens, senhas ou documentos em logs. Retenção real permanece pendente.
- Testes **positivos e negativos** com contas distintas: acesso próprio, acesso cruzado negado, IDOR, privilégio insuficiente, autopromoção negada, vínculo de pagador não confere acesso acadêmico, revogação de papel, ausência de vazamento via API/DB; especialmente controle RLS com usuários de teste não privilegiados.
- Preservar a F1, especialmente a rota `/cursos`, e contratos existentes.

## 3. Exclusões expressas e bloqueios
- **NÃO implementar F2.B:** login/cadastro público funcional, ativação por e-mail, OAuth, recuperação de senha, alteração de e-mail, emissão de tokens/sessões de usuário final, “manter conectado” e envio real de e-mails. Definições de prazo/expiração/revogação e segurança permanecem abertas.
- **NÃO implementar F2.C:** telas de login/cadastro/Minha Conta/dashboard, alteração de identidade visual ou UI; mesmo aprovada visualmente, sua implementação depende de autorização posterior.
- **NÃO implementar F2.D:** homologação completa, release, deploy/piloto ou handoff da F3. Testar e documentar o próprio lote inicial, sim.
- **NÃO implementar F3–F8**, pagamentos, cursos/progresso reais, gateway, videochamada ou notificações.
- **NÃO cadastrar ou processar dados reais de alunos/menores**, integrar provedores externos pagos, publicar imagens sem licença validada, fazer deploy público ou tocar infra de produção.
- **NÃO resolver por presunção:** DEC-008, período de sessão, token, alçadas admin, JUR-02/06/08/11, direitos contratuais. Na dúvida: bloqueio padrão e registrar pergunta.

## 4. Rito de execução e qualidade
1. Claude sincroniza a cópia do repositório e confere `git status`, branch, remote e `git fetch`; **se houver modificações/commits locais não preservados ou divergência, pedir orientação antes de manipular**.
2. Antes de escrever código, apresenta plano resumido dos **dois lotes autorizados**, dependências/lint/CI atuais e riscos. Pode então executar **somente o escopo autorizado**; decisões técnicas que mudem stack/arquitetura dependem de revisão PM.
3. Produz **PR(s) pequenos** com referência `#7`, migrações aditivas, instruções de ambiente, testes negativos e evidências CI. **Nenhum merge automático**: PM/Marina revisam e dão aceite do lote.
4. PM registra no GitHub o início real, impedimentos, correções, aceite e a nova estimativa. **Notion é apenas relatório executivo derivado de GitHub**, não substitui tarefa/PR/decisão canônica.
5. Encerrados F2.0 e F2.A, **parar** e apresentar evidências; solicitar **nova autorização expressa** da Marina na Issue #7 para F2.B e demais lotes. A estimativa global anterior **13–18 dias úteis é preliminar**, sem revisão de PM; não é prazo aprovado.

## 5. Critérios de aceite do lote inicial
- [ ] Evidência da branch criada corretamente a partir de `main` atualizada e trabalho F1 preservado.
- [ ] Lint, typecheck e testes F1 mantidos; CI do lote e smoke de integração RLS quando viável.
- [ ] Modelos/migrações aditivos, política deny-by-default, sem credencial/PII real.
- [ ] Casos positivos e negativos RLS/servidor: titularidade, acesso cruzado, pagamento ≠ autorização acadêmica, contas privilegiadas não autoatribuídas, revogação.
- [ ] Vínculos de menores e operações administrativas sem alçada **bloqueados no backend**, inclusive API direta.
- [ ] PR(s) com plano, decisões técnicas, riscos, evidências e instruções locais para revisão PM.
- [ ] **F2.B/C/D NÃO iniciadas** e nenhum merge/deploy/compra sem aprovação.

**Registro da decisão:** o “sim” de Marina responde à pergunta específica: “Você autoriza o Claude a começar **exclusivamente esse primeiro lote**, seguindo o escopo e as restrições registrados na Issue #7?” Esta autorização é para desenvolvimento local do lote F2.0 + F2.A e não se estende à F2 completa.
