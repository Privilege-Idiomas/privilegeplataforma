# P-13 — Auditoria de prontidão para execução e modelos de handoff por fase

**Data:** 2026-11-02  
**Responsável:** PM  
**Estado:** PREPARAÇÃO DOCUMENTAL CONCLUÍDA / PRONTIDÃO PARA IMPLEMENTAÇÃO **NÃO APROVADA**  
**Referências:** docs/10-auditoria-cobertura-funcional.md; docs/12-preparacao-independente-de-stack.md; docs/14-relatorio-consolidado-encerramento-funcional.md; docs/16-matriz-validacao-juridica-privacidade.md; docs/18-revisao-cruzada-p01.md; docs/19–25 (P-02 a P-08); docs/26-pacote-reuniao-matheus-decisao.md; docs/27-protocolo-execucao-por-fases.md.

## 1. Síntese de prontidão

O projeto contém especificações funcionais abrangentes, matrizes de permissões e dados, jornadas excepcionais, 26 cenários integrados de aceitação documental e preparação conceitual independente de stack. Isto **não demonstra** software pronto, testes executados ou homologação do escopo. Ainda não é possível montar uma ordem **executável** para Claude sem resolver gates G1–G5; é possível preparar os templates e o inventário de entradas.

| Capacidade / insumo | Evidência disponível | Classificação | Próxima ação |
|---|---|---|---|
| Inventário funcional e decisões | docs/02–04, docs/07–10, docs/14–15 | DOCUMENTADO; G1 pendente | Validar respostas, parâmetros e homologação |
| Jornadas de identidade e exceções | docs/19, docs/25; AUD-004 | PREPARADO / CONDICIONADO | Fechar regras pendentes e parecer jurídico |
| Particulares e plantões | docs/20, docs/25; DEC-066/067 | PREPARADO / CONDICIONADO | Decisões comerciais e proteção de menores |
| Permissões e acesso aos dados | docs/21, docs/25 | PREPARADO / CONDICIONADO | Alçadas definitivas e validação jurídica |
| Média docente | docs/22, docs/25 | BLOQUEADO PARA EXPOSIÇÃO | JUR-05/09 e avaliação anti-inferência; limiar cinco é condicional |
| KPI, exportações e relatórios | docs/23, docs/25 | PREPARADO / CONDICIONADO | Fórmulas, alçadas e parâmetros finais |
| Direitos e certificados | docs/24, docs/25 | PREPARADO / CONDICIONADO | Comercial, jurídico, impacto editorial |
| Aceitação de produto | docs/12, docs/25 | 26 CENÁRIOS DOCUMENTADOS | Traduzir para testes executáveis após G2; não alegar testes já rodados |
| Integrações, contratos técnicos e ambientes | docs/12 (contratos apenas funcionais) | DEPENDE DE G2 | Stack, fornecedores, credenciais, ambientes e planos de contingência |
| Capacidade, desempenho e custos | riscos e fatores qualitativos existentes | DEPENDE DE G2/G3 | Medir hipóteses de carga, custos iniciais/fixos/variáveis |
| MVP, releases e sequência das fases | docs/06, docs/27 | DEPENDE DE G4 | Dimensionar fases sem eliminar requisitos do escopo global |
| Auditoria de início e autorização | DEC-029/035 e docs/27 | DEPENDE DE G5 | Auditoria integral e autorização explícita |
| Produção audiovisual | roteiro Travel e frente independente | PLANEJAMENTO FUTURO | Inventariar volumes, requisitos de qualidade e opções de ferramenta IA após planejamento pertinente; orçamento separado |

## 2. Matriz de bloqueios por origem

### A — Reunião 03/11 e alçadas comerciais/pedagógicas
- **DEC-024/MAT-009**: vídeo completo obrigatório ou não; Matheus expressamente atribuído.
- **DEC-067/MAT-014**: dez parâmetros de particulares/plantões (duração, elegibilidade, créditos, cancelamento/remarcação, faltas, compra adicional, operação).
- **MAT-001–012 históricos**: Marina confirma a titularidade de cada item; não atribuir automaticamente a Matheus.
- Plano, cobrança, direitos, inadimplência, nivelamento, nota mínima e recuperação conforme decisão competente.
- **Não decidível nesta rodada:** stack, fornecedor, custos, MVP ou liberação de desenvolvimento por mera presença na pauta.

### B — Jurídico/privacidade
- **JUR-01–11**: documentos de legitimidade de responsáveis, menores, retenção, recuperação de acesso, exposição pública de certificados, moderação e tratamentos de dados.
- Média docente com cinco avaliações válidas somente após validação anti-inferência e parecer pertinente; até lá, visibilidade bloqueada.
- Não considerar parecer emitido sem evidência de aprovação.

### C — Decisão interna de Marina
- Confirmar titulares dos MAT históricos e autoridades administrativas; julgar divergências de produto apontadas na consolidação.
- Aceitar explicitamente o escopo integral em G1, após bloqueios resolvidos ou condicionamentos formalmente admissíveis.
- Aceitar cada entrega e liberar nominalmente apenas a próxima fase.

### D — Posterior a G1
- **G2:** stack, ambiente, integração, segurança, observabilidade, testes e infraestrutura.
- **G3:** custos separados de implantação, operação fixa, variáveis e audiovisuais na frente própria.
- **G4:** versão inicial/MVP, mapa de dependências e priorização de lotes.
- **G5:** auditoria DEC-029, requisitos não funcionais verificáveis, autorização explícita de início.
- Falta de definição é bloqueio, não licença para Claude escolher política de negócio.

## 3. Template A — Pacote de prontidão da fase (PM preenche ANTES da autorização)

**Identificador:** F-__ | **Nome:** __ | **Versão do pacote:** __ | **Estado:** RASCUNHO / PRONTO PARA AUTORIZAÇÃO / AUTORIZADO

**Objetivo demonstrável:** __  
**Inclusões explícitas:** __  
**Exclusões / limites:** __  
**Pré-requisitos e gates já satisfeitos (com links de evidência):** __  
**Decisões aprovadas aplicáveis e fonte canônica:** __  
**Issues GitHub da fase (com dependências e ordem):** __  
**Interfaces/contratos técnicos e dados necessários:** __  
**Ambientes, acessos, segredos e permissões disponíveis (sem registrar segredos no GitHub):** __  
**Mockups, textos, assets e conteúdo de teste aprovados:** __  
**Critérios de aceite rastreáveis (Given/When/Then quando couber):** __  
**Testes automáticos obrigatórios: unitários, integração, autorização, regressão, concorrência/acessibilidade conforme risco:** __  
**Evidência de entrega: URLs de PR, logs de CI, resultados de teste, demonstração e changelog:** __  
**Riscos/limites de gasto/ações proibidas:** __  
**Condições de escalonamento imediato:** __  
**Responsável pelo aceite:** Marina | **Autorização explícita e data:** __

**Checklist de entrada:**
- [ ] G1–G5 globais cumpridos; DEC-029 e início aprovados.
- [ ] Todas as regras envolvidas na fase estão decididas ou protegidas por bloqueio explícito sem execução daquela parte.
- [ ] Issues, condições de término, dependências e contratos têm rastreabilidade.
- [ ] Dados, ambiente, acessos e testes estão disponíveis para execução sem interrupção previsível.
- [ ] Limites de custo, segurança, tratamento de dados e serviços externos claros.
- [ ] Marina autorizou somente esta fase.

## 4. Template B — Relatório de entrega autônoma do Claude

**Fase:** __ | **Commit/PRs e issues:** __ | **Data:** __ | **Status declarado pelo executor:** IMPLEMENTADO / BLOQUEADO / PARCIAL  
**O que foi implementado e o que não foi:** __  
**Mudanças de escopo (se propostas, NÃO executadas sem autorização):** __  
**Matriz critério de aceite → evidência de teste:** __  
**Testes executados, quantidade, comandos, ambiente e falhas:** __  
**Resultados de segurança, acesso e privacidade pertinentes:** __  
**Problemas corrigidos, riscos residuais e limitações:** __  
**Como demonstrar/reproduzir:** __  
**Custos ou efeitos externos observados:** __  
**Pendências para aceite:** __  
**Documentação e GitHub atualizados:** __

**Proibição:** marcar como APROVADO, HOMOLOGADO ou PRODUÇÃO LIBERADA por conta própria. Falha de teste não pode ser ocultada como sucesso.

## 5. Template C — Checkpoint de aceite e liberação

**Fase avaliada:** __ | **Evidências revisadas:** __  
1. **Validação da entrega:** critérios atendidos? __; erros impeditivos __; erros menores __.
2. **Correções e ajustes:** issues de ajuste __; responsável __; necessidade de nova demonstração __.
3. **Definição da próxima fase:** id/objetivo __; dependências atualizadas __.
4. **Prontidão da próxima:** checklist do Template A preenchido? __; impedimentos e decisões pendentes __.
5. **Deliberação formal de Marina:** ACEITA / DEVOLVIDA PARA CORREÇÃO / BLOQUEADA. **Liberação explícita da fase seguinte:** SIM/NÃO; identificação da fase __; data __.

**Regra:** ACEITE da fase concluída **não** equivale à autorização da próxima. Sem nova liberação explícita, Claude aguarda.

## 6. Checklist imediato até a reunião

- [x] Modelo de governança de fases estabelecido (docs/27).
- [x] Inventário de documentos e 26 cenários de aceite revisado (docs/12,25).
- [x] Matriz preliminar de bloqueios para G1–G5 consolidada neste P-13.
- [x] Templates de pacote, relatório e checkpoint preparados.
- [ ] Registrar respostas reais da reunião e confirmar alçadas MAT históricas.
- [ ] Obter pareceres jurídicos aplicáveis.
- [ ] Encerrar G1 com aprovação formal após revisão de consistência.
- [ ] Analisar G2, G3, G4 e G5 na sequência aprovada.
- [ ] Definir pacotes de fases concretos e acionar Claude somente depois de G5.

**Governança:** GitHub contém tudo; Notion só resumo executivo derivado, sem criar tarefas técnicas paralelas. Nenhum código, fornecedor ou orçamento aprovado por este documento.
