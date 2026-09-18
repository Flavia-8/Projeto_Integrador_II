# Relatório de Validação — Etapa 3

## 1. Objetivo dos testes

Verificar se o Portal Futuro atende aos requisitos funcionais (RF-001 a RF-006) e não funcionais (RNF-001 a RNF-005) definidos nas Etapas 1 e 2, registrando evidências objetivas antes da entrega final e da publicação no GitHub Pages.

## 2. Ambiente utilizado

| Item | Descrição |
| --- | --- |
| Navegador | Chromium 141.0.7390.37, em modo headless |
| Automação | Playwright (Python), script `testes.py` descrito na seção 4 |
| Protocolo | `file://`, abrindo o `index.html` diretamente do disco |
| Resoluções testadas | 360 × 800 px, 768 × 800 px e 1280 × 900 px |
| Data da execução | Antes da entrega da Etapa 3 |
| Escopo | Código estático do projeto (HTML, CSS e JavaScript), sem acesso à internet |

**Transparência sobre o método:** os testes das seções 4 e 5 foram **efetivamente executados** em navegador, de forma automatizada, e os resultados abaixo são os retornos reais do script. Os testes da seção 8 **não foram executados** e estão listados como recomendação, porque dependem de aparelhos físicos, leitores de tela ou acesso à internet, indisponíveis no ambiente de automação.

## 3. Funcionalidades testadas

- Carregamento da página e renderização inicial dos cards.
- Criação e estado visual dos botões de filtro.
- Filtro por Tecnologia, Saúde, Humanas e Engenharia.
- Pesquisa por nome de profissão e por texto sem acento.
- Pesquisa sem resultados e mensagem correspondente.
- Combinação de filtro e pesquisa.
- Botão "Limpar busca e filtros".
- Abertura dos detalhes pelo botão e pelo corpo do card.
- Retorno à listagem pelo botão e pela tecla `Esc`.
- Atributos dos links externos de teste vocacional.
- Navegação por teclado (Tab e Enter).
- Marcações de acessibilidade (`label`, `aria-live`, `aria-label`, `lang`, hierarquia de títulos).
- Responsividade sem rolagem horizontal.
- Ausência de erros no console.

## 4. Procedimentos realizados

Foi escrito um script de automação que abre o `index.html` em um navegador real, executa as ações de um usuário (clicar, digitar, pressionar teclas, redimensionar a janela) e compara o estado da página com o resultado esperado. Mensagens de console e erros de página foram capturados durante toda a execução.

## 5. Resultados obtidos

**Total: 48 verificações — 48 aprovadas, 0 reprovadas. Nenhuma mensagem de erro ou aviso no console.**

| Nº | Funcionalidade | Procedimento | Resultado esperado | Resultado obtido | Status |
| --- | --- | --- | --- | --- | --- |
| T01 | Carregamento (RF-002) | Abrir o `index.html` | 16 cards exibidos | 16 cards | Aprovado |
| T02 | Contador de resultados | Ler o texto do contador ao carregar | "16 profissões encontradas." | Idêntico | Aprovado |
| T03 | Filtros (RF-001) | Contar os botões de área | 5 botões (Todas + 4 áreas) | 5 botões | Aprovado |
| T04 | Estado inicial do filtro (RN-04) | Ler `aria-pressed` de "Todas" | `true` | `true` | Aprovado |
| T05 | Resumo do hero | Ler o total exibido no painel | 16 | 16 | Aprovado |
| T06 | Filtro Tecnologia (RF-003) | Clicar em "Tecnologia" | 4 cards, `aria-pressed=true`, contador com a área | Conforme esperado | Aprovado |
| T07 | Filtro Saúde (RF-003) | Clicar em "Saúde" | 4 cards e contador correspondente | Conforme esperado | Aprovado |
| T08 | Filtro Humanas (RF-003) | Clicar em "Humanas" | 4 cards e contador correspondente | Conforme esperado | Aprovado |
| T09 | Filtro Engenharia (RF-003) | Clicar em "Engenharia" | 4 cards e contador correspondente | Conforme esperado | Aprovado |
| T10 | Pesquisa por nome (RF-006) | Digitar "enfermagem" | 1 card (Enfermeiro(a)) | 1 card | Aprovado |
| T11 | Pesquisa sem acento (RF-006) | Digitar "saude" | 5 cards: as 4 da área Saúde mais Psicólogo(a), cuja descrição cita saúde | 5 cards | Aprovado |
| T12 | Pesquisa sem resultados (RN-06) | Digitar "astronauta" | 0 cards, mensagem visível, contador "Nenhuma profissão encontrada." | Conforme esperado | Aprovado |
| T13 | Filtro + pesquisa (RN-05) | Buscar "engenheiro" com Saúde ativa e depois com Engenharia | 0 cards e depois 4 cards | Conforme esperado | Aprovado |
| T14 | Limpar busca e filtros | Clicar em "Limpar busca e filtros" | 16 cards e campo vazio | Conforme esperado | Aprovado |
| T15 | Abrir detalhes (RF-004, RF-005) | Clicar em "Ver detalhes" do primeiro card | Detalhes visíveis, listagem oculta, título e listas preenchidos, link externo correto com `rel="noopener noreferrer"` | Conforme esperado | Aprovado |
| T16 | Voltar à listagem (RN-03) | Clicar em "Voltar para a lista" | Listagem visível, detalhes ocultos | Conforme esperado | Aprovado |
| T17 | Clique no card e tecla Esc | Clicar no título de um card e depois pressionar `Esc` | Detalhes abrem e fecham | Conforme esperado | Aprovado |
| T18 | Navegação por teclado (RNF-003) | Focar a busca, pressionar Tab e Enter | Foco chega a um botão de filtro e o Enter o ativa | Conforme esperado | Aprovado |
| T19 | Acessibilidade estrutural (RNF-003) | Inspecionar `label`, `aria-live`, `lang`, `h1` e `aria-label` dos botões | `label` presente, `aria-live="polite"`, `lang="pt-BR"`, um único `h1`, todos os botões com `aria-label` | Conforme esperado | Aprovado |
| T20 | Responsividade (RNF-001) | Redimensionar para 360, 768 e 1280 px, na lista e nos detalhes | Sem rolagem horizontal em nenhuma largura | Sem rolagem horizontal | Aprovado |
| T21 | Console (qualidade) | Capturar mensagens durante toda a sessão | Nenhum erro | Nenhuma mensagem | Aprovado |

## 6. Correções efetuadas durante a validação

| Achado | Correção |
| --- | --- |
| Na tela de detalhes, a etiqueta de área ficava na mesma linha do botão "Voltar para a lista", porque ambos eram elementos em linha. | A etiqueta passou a `display: block` com `width: fit-content`, ficando abaixo do botão. |
| Ao abrir os detalhes, a página rolava para o topo e exibia o hero, exigindo rolagem manual até o conteúdo. | A rolagem passou a usar `scrollIntoView()` na seção de detalhes. |
| Os links do menu superior deixavam o usuário em uma seção oculta quando os detalhes estavam abertos. | Foi adicionado um tratador que fecha os detalhes ao clicar em qualquer link interno do menu. |
| A expectativa inicial do teste T11 previa 4 resultados para "saude". | O comportamento do sistema estava correto: a busca também considera a descrição, e Psicólogo(a) cita saúde. A **expectativa do teste** foi corrigida, não o código. |

## 7. Limitações conhecidas

- Os testes automatizados rodaram apenas em Chromium. Firefox e Safari não foram verificados.
- Não houve teste com leitores de tela reais (NVDA, VoiceOver ou TalkBack); a acessibilidade foi verificada pela estrutura do HTML e pela navegação por teclado.
- O ambiente de automação não tinha acesso à internet, então os links externos foram conferidos quanto ao endereço e aos atributos, mas **não foram abertos**.
- Não houve teste em aparelhos físicos; a responsividade foi verificada por redimensionamento de janela.
- O contraste de cores foi escolhido com base em cores escuras sobre fundo claro, mas não passou por um verificador automático de contraste WCAG.

## 8. Testes recomendados para executar

Estes testes ainda **não foram realizados** e devem ser feitos antes da apresentação, registrando prints como evidência:

1. Abrir o site em Chrome, Firefox, Edge e Safari.
2. Abrir o site em um celular e em um tablet reais, na vertical e na horizontal.
3. Clicar em cada um dos 16 links de teste vocacional e confirmar que abrem, são gratuitos e continuam ativos.
4. Navegar o site inteiro apenas pelo teclado, sem usar o mouse.
5. Testar com um leitor de tela (NVDA no Windows ou VoiceOver no iPhone).
6. Verificar o contraste das cores com uma ferramenta como o WebAIM Contrast Checker.
7. Repetir os testes T01 a T21 no endereço publicado no GitHub Pages, e não apenas no arquivo local.
8. Pedir a três colegas que usem o site sem instruções e anotar as dúvidas que surgirem.

## 9. Conclusão da validação

Todas as 48 verificações automatizadas foram aprovadas, sem erros no console e sem rolagem horizontal nas três larguras testadas. Os requisitos funcionais RF-001 a RF-006 e os não funcionais RNF-001 a RNF-005 estão atendidos no escopo verificável neste ambiente.

O produto é considerado **apto para a entrega da Etapa 3 e para a publicação no GitHub Pages**, condicionado à execução dos testes complementares listados na seção 8, especialmente a conferência dos links externos e o teste em aparelhos reais.
