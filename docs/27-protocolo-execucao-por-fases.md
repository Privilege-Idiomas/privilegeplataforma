# Protocolo de execução por fases — Privilège

Status: modelo de governança de execução acordado em 02/11/2026; **não autoriza início do desenvolvimento**.

## Pré-condições globais
Respeitar as aprovações existentes no projeto: escopo funcional integral (G1), stack (G2), custos (G3), planejamento de versões/MVP (G4), auditoria DEC-029 e autorização explícita de execução (G5). Pendências jurídicas e de privacidade seguem seus controles próprios.

## Ciclo de cada fase
1. **Preparar pacote de execução**: objetivo, escopo e não escopo, tickets GitHub, dependências, decisões aplicáveis, contratos/interfaces, critérios de aceitação, testes, evidências esperadas e condições de bloqueio.
2. **Verificar prontidão e autorizar**: Marina valida o pacote e libera **somente a fase corrente**. Não há autorização implícita para fases posteriores.
3. **Executar autonomamente**: Claude implementa, testa, corrige erros dentro do escopo aprovado, mantém tarefas, código, documentação e evidências no GitHub. Não requer supervisão humana contínua.
4. **Escalar por exceção**: interromper e solicitar decisão quando ocorrer impedimento não resolúvel com documentação, mudança material de escopo/custo/arquitetura, risco de segurança/privacidade, acesso ou aprovação externa faltante. Não inventar decisões.
5. **Entregar para revisão**: versão demonstrável, checklist de critérios, testes executados e seus resultados, limitações conhecidas, pendências e instruções de validação. Estado **implementado** não equivale a **aprovado**.
6. **Checkpoint de Marina e PM**: (a) validar entrega e solicitar correções, (b) realizar ajustes necessários e registrá-los, (c) definir próxima fase/entrega, (d) confirmar integralidade dos insumos e ausência de impedimentos previsíveis, (e) liberar explicitamente execução da fase seguinte.
7. **Reprovação**: a fase permanece aberta; Claude corrige e reapresenta; não prossegue automaticamente.

## Responsabilidades e sistemas
- **Marina**: decisões de produto, aceites de fase, autorização da fase seguinte.
- **ChatGPT (PM)**: decomposição/coordenação de fases, verificação de prontidão, análise das evidências, atualização da documentação e riscos.
- **Claude (executor)**: código, testes automatizados, correções, evidências e atualização do GitHub.
- **GitHub**: fonte oficial integral do projeto.
- **Notion**: relatório executivo suplementar para Matheus; nunca substitui informação do GitHub.

## Princípios de dimensionamento
Fases curtas e entregas verticalmente funcionais, com critérios objetivos. Tamanho e quantidade serão definidos **após** a aprovação global de escopo, stack, custos e estratégia de releases; este documento não os antecipa.

## Produção audiovisual
Planejada e orçada como frente independente da plataforma, com seus próprios pacotes de trabalho, revisões e aprovações, sem antecipação da ferramenta de IA ou de custos.
