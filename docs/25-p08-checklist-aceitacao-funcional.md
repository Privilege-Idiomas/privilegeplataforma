# P-08 — Checklist integrado de aceitação funcional e prontidão para validação
**Privilège | 2026-11-02 | Estado:** CHECKLIST DOCUMENTAL PREPARADO; testes não executados; escopo não homologado.
**Fontes conferidas:** P-02 a P-07 (docs/19–24), DEC-029/035/071–073, REQ-048–052 e matriz jurídica docs/16.
**Critério de interpretação:** PRONTO = cenário e resultado esperado descritos; NÃO significa produto testado, decisão aprovada ou conformidade certificada. CONDICIONADO = depende de regra, parecer ou parâmetro não aprovado. PROPOSTO = novo detalhamento ainda sujeito à validação.

## 1. Matriz integrada de cobertura de aceitação
| ID | Domínio | Cenários mínimos documentados | Evidência esperada no futuro teste | Estado documental |
|---|---|---|---|---|
| AC-P08-01 | Ativação | Compra/ativação exige controle de e-mail; duplicidade e evento repetido não criam aluno duplicado | Conta única, direitos corretos, evento rastreado | PRONTO / comercial condicionado |
| AC-P08-02 | Migração | Identidade ambígua e alunos atuais não são unidos automaticamente | Histórico preservado, vinculação analisada | CONDICIONADO a contratos e jurídico |
| AC-P08-03 | Recuperação | Token expirado/reutilizado falha; não enumera conta | Recusa segura e trilha minimizada | PRONTO / parâmetros condicionados |
| AC-P08-04 | Recuperação sem e-mail | Pagador não comprova autoridade sobre login acadêmico só por pagar | Fluxo motivado, verificação independente | CONDICIONADO a JUR-01/02 |
| AC-P08-05 | Menores e responsáveis | Trocar identificador não expõe dados de outro aluno | Isolamento de acesso por vínculo e papel | CONDICIONADO a JUR-02/11 |
| AC-P08-06 | Acesso contratado | Sem direito ao curso, URL/API de material e avaliação são negadas | Acesso negado por recurso | PRONTO / estados comerciais pendentes |
| AC-P08-07 | Particular | Duas confirmações simultâneas não criam dupla reserva; professor em conflito não aparece | Um único agendamento válido | PRONTO / duração pendente |
| AC-P08-08 | Remarcação e faltas | Notificação falha, reserva mantém estado; nenhum crédito é descontado sem regra | Histórico consistente sem efeito financeiro presumido | CONDICIONADO a DEC-067 |
| AC-P08-09 | Plantão | Aluno entra sem reserva; não consome crédito individual | Janela publicada e acesso controlado | PRONTO / horários e jurídico pendentes |
| AC-P08-10 | Contingência plantão | Ausência docente resulta substituição autorizada ou suspensão comunicada | Ocorrência e status real | PRONTO / alçadas operacionais a validar |
| AC-P08-11 | Denúncia de menor | Relato não se torna visível a público ou docente não autorizado | Minimização e controle de acesso | CONDICIONADO a JUR-04/11 |
| AC-P08-12 | Permissões | Pagador, aluno, docente, suporte e administrador ficam limitados ao papel e titularidade | Testes de acesso direto em API/exportação | PRONTO / matriz G1–G5 a validar |
| AC-P08-13 | Intervenção sensível | Operação sem autorização/justificativa não é permitida | Negação e trilha de auditoria | PRONTO / alçadas condicionadas |
| AC-P08-14 | Nota docente individual | Professor não acessa nota individual/ranking por tela, API, download | Todas as rotas negadas | PRONTO |
| AC-P08-15 | Média docente | Com 4 votos oculta; com 5 ainda oculta enquanto não houver JUR-05 e anti-inferência homologados | Sem exposição por nenhum canal | CONDICIONADO a JUR-05 |
| AC-P08-16 | Inferência | Atualização unitária, revisão e corte pequeno não permitem deduzir voto | Avaliação quantitativa da política | CONDICIONADO a JUR-05/09 |
| AC-P08-17 | Prática/avaliação | Prática opcional não libera próxima aula sem avaliação exigida aprovada | Progresso correto | PRONTO / nota e DEC-024 pendentes |
| AC-P08-18 | Gabarito retroativo | Alteração de avaliação publicada exige revisão de impacto prévia | Decisão auditada sem alteração silenciosa | PRONTO / alçada condicionada |
| AC-P08-19 | Certificado | Emissão única, PDF privado, re-download não gera emissão nem nova data | Versão e data estáveis | PRONTO |
| AC-P08-20 | Correção/revogação | Certificado substituído/revogado não aparece válido no verificador público | Estado e versão corretos | PRONTO / jurídico pendente |
| AC-P08-21 | Currículo atualizado | Nova versão não invalida certificado emitido legitimamente | Histórico e versão preservados | PRONTO / progresso em curso pendente |
| AC-P08-22 | KPI | Fonte inexistente/denominador zero não vira valor zero inventado | Código de qualidade e corte coerentes | PRONTO / fórmulas pendentes |
| AC-P08-23 | Exportação | Perfil sem privilégio não exporta dados financeiros/de menores nem votos docentes | Negação e log | PRONTO / jurídico pendente |
| AC-P08-24 | Conciliação | Eventos repetidos de pagamento/conclusão não duplicam direitos, receitas ou certificados | Idempotência e rastreabilidade | PRONTO / gateway e política comercial pendentes |
| AC-P08-25 | Suporte | Ticket reaberto não é contado automaticamente como novo, sem regra | Indicadores consistentes | CONDICIONADO a estados/reabertura |
| AC-P08-26 | Continuidade | Falha externa ou notificações não criam confirmação fictícia | Estado canônico e recuperação segura | PROPOSTO; testes técnicos posteriores |

## 2. Lacunas e conflitos a tratar sem redecisão automática
| ID | Lacuna de definição | Risco se não sanada | Dependência |
|---|---|---|---|
| GAP-01 | Política comercial de aquisição, vigência, planos, créditos, cancelamento e inadimplência | Direitos inconsistentes entre checkout/curso/particular | AUD-005, DEC-067, MAT atribuídas |
| GAP-02 | Critérios pedagógicos de nivelamento, nota mínima, vídeo e exceções | Conclusão e certificados divergentes | AUD-006, DEC-024, MAT competentes |
| GAP-03 | Identificação excepcional, menores, guarda e retenção | Fraude ou acesso indevido | JUR-01/02/03/07/08/11 |
| GAP-04 | Regras operacionais de moderação, voz/imagem e denúncia | Proteção insuficiente de menores | JUR-04/11; Marina |
| GAP-05 | Nomenclatura e alçadas exatas dos cinco grupos administrativos | Superpermissão ou bloqueios indevidos | P-04, Marina, JUR-06 |
| GAP-06 | Validação quantitativa de inferência com cinco avaliações | Exposição indireta da nota individual | P-05, JUR-05/09 |
| GAP-07 | Métricas financeiras, reabertura de suporte e janelas de medição | Indicadores enganosos | P-06, comércio, Marina |
| GAP-08 | Política de impacto retroativo de gabarito/currículo para alunos em progresso | Histórico inconsistente | P-07, alçada acadêmica/Marina |
| GAP-09 | Retenção, consultas públicas de certificado e exportações | Riscos jurídicos e de dados pessoais | JUR-08/09/10 |
| GAP-10 | Integrações, fornecedores, serviços e parâmetros de custo | Dimensionamento inadequado | Somente G2/G3 após G1 |

## 3. Checklist de passagem ao pacote executivo de Matheus
- [x] P-02 a P-07 presentes no repositório e utilizados como referência documental.
- [x] Cenários positivos e adversos rastreados em uma matriz integrada.
- [x] Dependências comerciais, pedagógicas e jurídicas classificadas sem aprovação presumida.
- [ ] Alçadas históricas MAT-001–012 confirmadas pela Marina antes de atribuir respostas.
- [ ] Pauta unificada de Matheus enriquecida com consequências de cada escolha, sem antecipar respostas.
- [ ] Controles operacionais próprios de Marina que ainda demandarem nova regra submetidos em bloco.
- [ ] Pareceres JUR-01 a JUR-11 concluídos quando aplicáveis.
- [ ] Matheus responde às decisões expressamente de sua alçada.
- [ ] G1 — escopo integral homologado expressamente.
- [ ] G2/G3/G4/G5 subsequentes segundo DEC-035 e DEC-029.

## 4. Próximos passos sem depender de Matheus
1. Preparar matriz de alternativas e consequências econômicas **qualitativas** de MAT/DEC-024/067, sem estimar custo ou escolher stack.
2. Consolidar dúvidas operacionais restantes sob Marina em pacote único, separando recomendação de decisão efetiva.
3. Montar o pacote de prontidão de G1 com rastreabilidade e bloqueios, sem homologação presumida.
4. Preparar checklist de handoff futuro ao Claude sem criar ordem de execução.

**Resultado:** P-08 pronto apenas como artefato documental. Nenhum cenário foi executado ou certificado. Stack, custos, MVP e implementação NÃO autorizados. GitHub canônico; Notion somente síntese executiva.
