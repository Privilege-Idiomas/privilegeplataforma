# Protocolo de handoff e aceite de fases — padrão permanente de desenvolvimento

**Privilège · 13/11/2026 · PM/ChatGPT · DEC-029/035/086/087.** GitHub obrigatório para todo o backlog, documentação, PR, teste e evidência. Notion somente extração executiva.

## 1. Estados verificáveis
- **ESPECIFICADA:** contrato de negócio/tecnologia/UX, testes, exclusões, dependências e estimativa descritos. Não habilita código.
- **BLOQUEADA:** decisão de negócio, compatibilidade, segurança, custos ou autorização crítica aberta para aquela funcionalidade.
- **AUTORIZADA:** Marina autorizou expressamente **o lote identificado** com limites e registro no GitHub.
- **EM EXECUÇÃO:** Claude iniciou apenas lote liberado, em branch; atualização de Issue e riscos.
- **EM VALIDAÇÃO:** PR aberto, CI/evidência disponível, revisão PM em curso; sem merge automático.
- **ACEITA:** Marina aprovou o resultado no commit identificado; verificar CI/escopo antes de merge.
- **INTEGRADA:** PR efetivamente merged na `main`, SHA/CI guardados no GitHub.
- **OPERACIONAL:** release e integrações reais testadas, documentação/fornecedores/segurança/recebimento de dados/pareceres aplicáveis resolvidos e liberação de produção separada.

Nenhum estado pode ser inferido a partir de outro. **F1, F2.0 e F2.A são INTEGRADAS, não OPERACIONAIS; D1 F2 R2 visual ACEITA; F2.B/C/D e F3–F8 ainda NÃO AUTORIZADAS.**

## 2. Formato obrigatório de pacote de execução

```md
# FASE/LOTE: [ID] — [entregável]
- Estado/versão e commit base da main:
- Dono do aceite: Marina | Executor: Claude Code | PM: ChatGPT
- IDs de decisões/requisitos e fonte canônica:
- Funcionalidades exatamente incluídas:
- Fora de escopo / ações proibidas:
- Contratos técnicos: entidades, estados, API, autenticação, fluxos, idempotência:
- Protótipo/tokens de UI válidos (se interface):
- Critérios positivos de aceite:
- Critérios adversariais: IDOR, permissões, concorrência, falhas externas, dados reais:
- Dependências e gates técnicos/comerciais/jurídicos:
- Serviços/credenciais e custos especificamente aprovados (ou "nenhum"):
- Estimativa do executor e limites:
- Testes mínimos/CI e evidências exigidas:
- Riscos residuais, rollback e plano de contingência:
- Registro explícito da autorização do lote (data, responsável, escopo):
- PR/head SHA, CI, revisão PM, aceite da Marina, merge SHA (ao concluir):
```

## 3. Portões por etapa

| Lote | Entrega demonstrável | Bloqueio ou dependência atual |
|---|---|---|
| F1 | Fundação Next/TypeScript/testes | **Integrada** PR #14 |
| D1/F2 visual | Design system e 16 telas REV2 | **Aceita**; Claude não redesenha |
| F2.0 | CI/Supabase local real | **Integrada** PR #16 |
| F2.A | Identidade/papéis/RLS | **Integrada** PR #17 |
| F2.B-0 (candidata) | PoC A-lite vs SSR, tokens não acessíveis no browser, revogação real e limites de senha/OTP/antibypass, auditoria e quotas | **NÃO AUTORIZADA**; abrir ordem separada após escopo delimitado, sem inferir aprovação do diagnóstico read-only |
| F2.B.1 | Sessões e login seguro sem direito de curso | Depende PoC, arquitetura, parâmetros compatíveis, custo e liberação específica |
| F2.B.2 | Ativação/recuperação/vínculo seguro com dados fictícios | Depende B.1, fluxos de conta, menores ainda conservadores, liberação específica |
| F2.C | Implementar exatamente as telas D1 R2 de F2 | Depende F2.B, aceite técnico e liberação específica |
| F2.D | Homologação identidade, testes negativos e integração | Depende entrega e aprovação dos lotes F2; não é deploy público |
| F3 | Catálogo/curso/trilha/player e direitos | Conteúdo/UX pertinentes, entitlements, mídia desacoplada, Issue específica |
| F4 | Aprendizagem, avaliação, progresso, certificados | DEC-074–080, parametrização pedagógica, editorial e privacidade, Issue específica |
| F5 | Planos/comércio/cartão/concilição | DEC-084/085, gateway demonstrado, condições comerciais específicas, Issue específica |
| F6 | Professores, plantão e particular, créditos e reunião | Escala/fornecedor, calendário, cancelamento e exceções, Issue específica |
| F7 | Admin, suporte, indicadores, auditoria | Matriz de alçadas, MFA, retenção e visibilidade, Issue específica |
| F8 | E2E completo, segurança, acessibilidade, desempenho e operação | Evidência real da plataforma integral, fornecedores, conteúdo, regras, aprovação explícita de deploy |

**A ordem F3–F7 pode ser redesenhada pela PM para acelerar com dependências, porém nenhuma fase é automaticamente autorizada e nenhum componente do escopo integral pode ser apagado.**

## 4. Procedimento padrão de cada lote
1. PM verifica docs/53, decisões canônicas, Issue, codebase e riscos; discrimina **feito / ainda dependente / bloqueado / excluído** e valida visual com D1 específica.
2. Se necessário, Claude entrega somente estimativa/diagnóstico dentro de autorização de leitura vigente. Não presuma permissão de executar comandos em seu ambiente.
3. Marina aprova escopo e **autorização de código deste lote** por ato inequívoco, no GitHub; compras e produção têm gates próprios.
4. Claude integrador principal executa em branch e PR curto, com testes automatizados, documentação, **sem redesign, decisões de negócio ou mudança de gastos**. Especialistas auxiliares somente conforme DEC-086.
5. PM revisa segurança, testes, critérios adversariais, CI e referências. Uma falha bloqueante devolve o PR para retrabalho; sem avanço tácito.
6. Marina autoriza aceite e merge quando pertinente. PM verifica SHA e registros no GitHub e só então marca INTEGRADA.
7. PM prepara a próxima ordem já especificada e pede **apenas autorização do próximo lote**. Registro executivo do Notion, quando houver, é extraído do GitHub.

## 5. Critérios não negociáveis de aceite
- Sem uso de dados ou credenciais reais fora de gate aplicável; nunca segredos em branch, logs ou screenshots.
- Nenhuma autorização feita apenas na interface: validar API, RLS e relações entre identidade, curso, pagamento e ação.
- Reprocessamento de pagamento/webhook e reservas idempotente; concorrência testada.
- Falha externa deixa estado verdadeiro, sem pagamento, reunião ou notificação fictícios.
- Testes negativos por papéis, usuários, cursos, idade, tokens revogados e bypass das rotas.
- Conclusão não significa uso comercial: testes em mock são rotulados; requisitos reais e contratos são gates de release.
- No design, somente especificação e assets aceitos pela PM. Alteração não aprovada precisa nova decisão visual.

## 6. Situação imediata e como proceder
**Próxima possível ordem técnica:** F2.B-0, prova reversível **ainda sem autorização**, para fechar as incompatibilidades do parecer docs/46. A PM pode preparar a Issue, testes e custo; Claude não inicia código até ordem explícita. Em paralelo, PM reconcilia documentos legados e prepara F3–F8 com critérios e visual para minimizar perguntas futuras.

**Meta 10/12:** risco de inviabilidade material não foi eliminado pela documentação; revisar estimativas reais do Claude, fornecedores, QA/segurança e conteúdo em caminho crítico, sem afirmar prazo garantido.
