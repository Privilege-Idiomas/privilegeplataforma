# Privilège — Diagnóstico dos gates e cronograma preliminar por entregas

**Data:** 2026-11-07. **Status:** RASCUNHO para decisão; **não é baseline de prazo, escopo, MVP, liberação de Claude ou homologação**.  
**Fontes:** docs/06-roadmap.md, docs/14-relatorio-consolidado-encerramento-funcional.md, docs/27-proposta-stack-e-custos-2026-11-07.md e docs/30-custos-pendentes-e-fases-de-execucao-2026-11-07.md.
**Governança:** GitHub é fonte canônica e contém todo trabalho, Notion apenas relatório executivo.

## 1. Status verificado e bloqueios de planejamento

| Gate | Estado documental | Evidência/condição para fechar |
|---|---|---|
| G1 escopo integral | Especificação extensa, **não homologada** | Reconciliar regras e critérios de aceite históricos divergentes; decidir plano 1 digital versus histórico com plantão, plano 3 e quantidade de particulares; registrar MAT/DEC-024/067 e demais parâmetros; resolver dependências jurídicas (incluindo menores, contratos, tratamento de dados). |
| G2 stack | **Proposta**, não aprovação | Rever Next.js + TypeScript + Tailwind, Supabase, Vercel, Stream, Resend; comparar gateway e Meet no fluxo real; registrar aprovações. |
| G3 custos | **Projeções parciais** e inventário de pendências | Obter custo real de gateway, Meet, IA de vídeo, notificações e excedentes; orçamento de implantação separado do custo fixo e variável. IA de nivelamento produz perguntas/gabaritos, sem inferência a cada aluno. |
| G4 releases/cronograma | **Não aprovado** | Após G1–G3, decidir recorte da primeira entrega pública e aceitar capacidade e horizonte; nenhum prazo de 30 dias assumido. |
| G5 autorização | **Não autorizado** | Auditoria DEC-029/032, aprovação de riscos/segurança e ordem explícita para Claude. |

**Achado de rastreabilidade:** endpoint GitHub de issues retornou coleção vazia na consulta de 07/11/2026. A documentação extensa do repositório não equivale a cards/issues operacionais; antes de atribuir execução, criar issues para todos os lotes aprovados, com critérios de aceite. Não confundir ausência de issues com inexistência de pendências.

## 2. Método de execução em lotes

Para cada lote: (a) PM publica issue(s) e checklist de aceite no GitHub; (b) Claude estima e aponta dúvidas/dependências antes de implementar; (c) PM libera explicitamente o lote; (d) Claude implementa em branch/PR e anexa teste e evidência; (e) PM verifica testes, produto, segurança e regressões; (f) se rejeitado, corrige no mesmo lote; (g) se aceito, registra o aceite no GitHub e revisa/libera a próxima entrega. Intervenções durante produção apenas se houver bloqueio, dúvida ou conclusão de lote. Nunca iniciar novo lote a partir de silêncio.

## 3. Estrutura de lotes candidatos (não é seleção de MVP)

| Lote | Entrega pequena e verificável | Dependências / validação |
|---|---|---|
| 0 | G1–G5: catálogo integral, decisões pendentes, análise stack/custos, versão inicial e definição de pronto | Matheus, Marina, jurídico e fornecedores conforme alçadas |
| 1 | Setup: app, CI, deploy de homologação, banco, migrações, segredos e observabilidade básica | G5, stack aprovada |
| 2 | Autenticação, perfis aluno/professor/admin/pagador, RLS e menores | Matriz de permissões e jurídico |
| 3 | Catálogo, cursos, módulos, aulas, direitos de acesso e vídeo Cloudflare | Modelo comercial de cursos aprovado |
| 4 | Exercícios e correção determinística, avaliações, progresso, revisão e biblioteca | Parâmetros pedagógicos e autorização de conteúdos |
| 5 | Planos, checkout cartão, assinaturas, webhooks, inadimplência, cancelamento | Gateway e política comercial/jurídica |
| 6 | Escala docente, agenda, reserva de plantões, créditos de particulares e videoconferência | Meet/alternativa e benefícios aprovados |
| 7 | Certificados, verificador, relatórios, suporte e auditoria admin | Modelo certificado, governança e acesso |
| 8 | Testes completos, carga, segurança, homologação e piloto de lançamento | Lotes anteriores aceitos e conteúdo disponível |

**Divisibilidade:** um lote acima pode precisar ser repartido em 2–5 PRs menores, a critério da decomposição técnica e da capacidade de revisão. Gate e dependência impedem assumir uma data firme agora.

## 4. Cronograma de referência relativo (não aprovado)

| Janela relativa após G5 | Trabalho Claude (sequencial com validação) | Trabalho Marina/equipe em paralelo |
|---|---|---|
| Pré-G5 | Fechamento G1–G4, orçamento, arquitetura, critérios de aceite | Piloto de vídeo: selecionar uma aula de roteiro original, preparar prompt e testar geradores. |
| Ciclo 1 | Lotes 1–2 (fundação, papéis), sujeitos a decomposição | Comparar fidelidade da IA ao roteiro, legendas, direitos de imagem/voz e custos por minuto. |
| Ciclo 2 | Lotes 3–4 (aprendizagem), sujeitos a revisão e aceite | Aprovar template audiovisual; adaptar prompts das demais aulas somente depois da aprovação. |
| Ciclo 3 | Lotes 5–6 (comércio e docência), condicionado a fornecedores | Gerar, revisar pedagogicamente e organizar a biblioteca final de vídeos. |
| Ciclo 4 | Lotes 7–8 (operação, QA, piloto), condicionado às anteriores | Homologar vídeos e seus metadados; revisar material e publicação. |

**Janela não é semana nem promessa de duração:** a duração de cada ciclo dependerá das estimativas do Claude, disponibilidade de validação, escopo aprovado e fornecedores. Só preencher datas a partir do acordo de escopo/capacidade e priorização formal.

## 5. Pipeline paralelo de vídeos

1. Preservar os arquivos originais de Matheus, imutáveis e versionados com autorização. Não reescrever falas, exemplos ou ordem pedagógica.
2. Selecionar **uma aula piloto** representativa: início, texto do professor, indicações na tela, repetições, pausas e exercícios.
3. Gerar **prompt derivado** com identidade Privilège, aspect ratio, professor/avatar, ritmo, alternância português/inglês, legendas, imagens e cenas, preservando integralmente a fala aprovada.
4. Testar 2–3 ferramentas com mesma aula e comparar: fidelidade ao texto, pronúncia inglesa, sincronização da legenda, consistência visual, edição, custo real, direitos comerciais e exportação.
5. Após aprovação humana do modelo, converter **todas as 118 aulas**, mantendo cada prompt vinculado a seu roteiro, versão e status (rascunho/testado/aprovado/renderizado/revisado).
6. Subir vídeos aprovados à biblioteca e medir duração, qualidade e consumo reais; não criar vídeo final automaticamente antes do aval.

**Prompt-base para o piloto (rascunho, não substitui roteiro):**
> Produza uma videoaula Privilège fiel ao roteiro anexado. Preserve literalmente todas as falas do PROFESSOR(A), na ordem original; não acrescente, resuma ou altere exemplos. Use ORIENTAÇÃO DE PRODUÇÃO apenas para dirigir cenas; não narre essas instruções. Exiba o texto NA TELA conforme a sequência do roteiro, com o inglês em destaque e português como apoio. Respeite pausas e práticas guiadas, alternância entre idiomas, pronúncia natural e legendas sincronizadas. Mantenha identidade visual consistente e acessível. Se a ferramenta não suportar alguma parte, sinalize essa limitação em vez de inventar conteúdo. Entregue vídeo e relatório de trechos ou comandos que não foram fielmente implementados.

## 6. Próximas decisões necessárias

- **Matheus:** plano 1, plano 3, benefícios/contratos, preço final, pareceres jurídicos, direitos de gravação/avatar e detalhes que dependem do patrocinador; não converter a simulação financeira em regras.
- **Marina:** aprovar stack/arquitetura e recorte de versão após custos, capacidade de revisão, template dos vídeos, checklist de QA e autorização G5.
- **Claude:** só depois da autorização, decompor lotes com estimativas e implementar PR por vez.

## 7. Observação de consistência

A reunião de 03/11 definiu plantões com agendamento e limite de 10 alunos por sessão de 20 min; trechos históricos ainda descrevem sem reserva. Aplicar decisão mais recente validada e reconciliar critérios de aceite antes de programar. Não prometer capacidade simultânea de 30 pessoas; 30 é soma de três sessões sequenciais por hora.


## Atualização do bloqueio comercial — DEC-082 (2026-11-08)
**Encerrado por decisão expressa de Marina:** Plano 1 definitivamente **somente videoaulas gravadas**, sem plantões e sem particulares; prioridade de escalabilidade. Análises históricas que apresentem “Plano 1 digital vs 1 plantão” como questão em aberto não refletem mais o status atual. Pendem ainda preço/contrato, quantidade de particulares do Plano 3, DEC-024/MAT-009, demais validações de Matheus e jurídico; G1 integral e liberação de Claude seguem não homologados.


## Atualização do bloqueio comercial — DEC-083 (2026-11-08)
**Encerrada a indefinição sobre as particulares do Plano 3:** Marina confirmou **4 plantões de 20 minutos + 2 aulas particulares de 50 minutos por aluno por mês**. A simulação financeira agora coincide com a quantidade oficial de créditos, sem aprovar preço de assinatura. Não solicitar novamente escolha de 1–4 particulares como padrão. Pendem preços/contrato, DEC-024, parâmetros de nivelamento, jurídico, fornecedores e G1–G5.
