# P-14 — Critérios de avaliação da stack (instrumento de G2, sem seleção)

**Estado:** matriz preparada em 2026-11-02; uso decisório somente após G1 homologado. **Nenhuma stack, serviço, fornecedor ou investimento aprovado.**
**Fontes:** docs/12-preparacao-independente-de-stack.md; docs/16-matriz-validacao-juridica-privacidade.md; docs/21-p04-matriz-permissoes-seguranca.md; docs/25-p08-checklist-aceitacao-funcional.md; DEC-029/035.

## 1. Princípios
- Comparar opções para **escopo integral**, não escolher a stack pelo MVP hipotético.
- Avaliar velocidade de execução **com Claude**, qualidade dos testes, manutenção futura e custo total; não premiar só prototipação rápida.
- Registrar evidência verificável, trade-offs, riscos e dependências; alegações de fornecedores não valem como prova.
- Regras de segurança/privacidade são **eliminatórias**, não compensáveis por pontuação elevada.
- Separar tecnologia de produto, decisões comerciais/pedagógicas e decisões jurídicas.

## 2. Portões eliminatórios — SIM / NÃO / NÃO DEMONSTRADO
1. Permissões no servidor por papel, ação, titularidade, curso/direito; impedir acesso via URL/API/exportação.
2. Suporte a dados de menores e representação, com controles legais condicionados a JUR-01–11.
3. Integridade transacional para reserva de particulares sem colisão; idempotência de pagamentos/direitos/certificados.
4. Capacidade de testes automatizados CI, observabilidade, auditoria e recuperação/backup demonstráveis.
5. Entrega segura de conteúdo, isolamento de documentos privados e verificador público minimizado de certificados.
6. Contratos e integração viáveis para cobrança, e-mail, vídeo ao vivo, hospedagem de vídeos/PDFs e serviços futuros, sem presumir fornecedores.
7. Saída/migração dos dados viável e controles de segurança e custos operacionais identificáveis.
**Regra:** falha ou não demonstração de requisito crítico exige esclarecimento/mitigação formal; não autoriza escolha automática.

## 3. Matriz de avaliação ponderada — PROPOSTA PARA VALIDAÇÃO EM G2
| Critério | Peso inicial | Evidência exigida |
|---|---:|---|
| Segurança, permissões e privacidade | 25 | Padrões de isolamento, riscos, políticas e testes |
| Autonomia do Claude, produtividade e qualidade de entrega | 20 | Spike comparável com escopo idêntico, revisão do código, testes e docs |
| Aderência a fluxos críticos e integridade dos dados | 15 | Reservas concorrentes, avaliações, direitos, certificados, integração |
| Custo total de propriedade | 15 | Setup, mínimo fixo, escala variável, suporte e cenários de utilização |
| Manutenção, testes, observabilidade e resiliência | 15 | CI/CD, cobertura, logs, monitoramento, recuperação, ergonomia |
| Portabilidade e risco de dependência de fornecedores | 10 | Exportações, migração, substituição de componentes e contratos |
| **TOTAL** | **100** | |

Pontuar cada critério de **0 a 5**, com justificativa e URL de evidência. Total = soma de (pontuação/5 × peso). Pesos e notas **não aprovados**; confirmar previamente em G2. Uma opção eliminada no portão de segurança não se torna vencedora por pontuação.

## 4. Experimento comparável para avaliar execução com Claude (somente após autorização pertinente)
Mesmo escopo e mesmo tempo por alternativa, usando dados fictícios: identidade com papel, curso protegido, um fluxo de avaliação, um cenário de concorrência na reserva e uma trilha de testes. Medir tempo total **incluindo correção**, qualidade, facilidade de revisão, segurança, documentação e capacidade de retomar tarefas. Não executar spike de implementação antes dos gates devidos.

## 5. Quadro padronizado por alternativa
- Nome / versão / componentes / licenças / suporte: __
- Premissas de carga (alunos, vídeos, plantões, reservas, simultaneidade): __
- Portões eliminatórios + evidências: __
- Pontos por critério e cálculo: __
- Integrações e requisitos legais pendentes: __
- Estimativa de custo implant./fixo/variável: **somente G3 após G2**
- Riscos, mitigação, custos de troca e dependência: __
- Resultado da avaliação / decisor / data / aprovação: __

## 6. Preparação útil antes da reunião
- [x] Critérios e matriz comparativa documentados, sem eleger stack.
- [ ] Homologação G1 e fechamento das decisões de produto.
- [ ] Definir cargas/volumes reais e metas não funcionais.
- [ ] Confirmar pesos e medir alternativas após G1.
- [ ] Selecionar G2 formalmente; estimar valores em G3.
