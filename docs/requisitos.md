# Documento de Requisitos — Portal Futuro

Documento originado nas Etapas 1 e 2 do Projeto Integrador II e atualizado na Etapa 3 com a coluna de situação de cada requisito.

## 1. Identificação

| Item | Descrição |
| --- | --- |
| Projeto | Portal Futuro: Guia de Profissões e Carreiras |
| Disciplina | Projeto Integrador II |
| Curso | Técnico em Informática integrado ao Ensino Médio |
| Público-alvo | Estudantes do 3º ano do Ensino Médio, orientadores pedagógicos e psicólogos |
| Etapa atual | Etapa 3 — Execução, Validação e Entrega Final |

## 2. Problema

Estudantes do 3º ano do Ensino Médio precisam escolher uma carreira e se inscrever em vestibulares ou cursos técnicos sem conhecer suficientemente o mercado de trabalho, a remuneração, a rotina profissional ou as disciplinas de cada curso. A ausência de informações centralizadas e acessíveis contribui para ansiedade, escolhas pouco informadas e evasão posterior.

## 3. Escopo

**Está no escopo:** catálogo de profissões, filtro por área, busca textual, tela de detalhes, indicação de testes vocacionais externos, site estático hospedado no GitHub Pages.

**Não está no escopo:** cadastro de usuários, teste vocacional próprio, banco de dados, área administrativa, integração com APIs externas.

## 4. Requisitos funcionais

| ID | Requisito | Prioridade | Situação na Etapa 3 |
| --- | --- | --- | --- |
| RF-001 | Exibir botões de filtro para grandes áreas do conhecimento (Tecnologia, Saúde, Humanas e Engenharia) | Alta | Implementado, com a opção adicional "Todas" |
| RF-002 | Exibir profissões em formato de cards informativos na página principal | Alta | Implementado |
| RF-003 | Filtrar dinamicamente os cards conforme a área selecionada | Alta | Implementado |
| RF-004 | Permitir clicar em um card para abrir os detalhes completos da carreira | Alta | Implementado (clique no card ou no botão "Ver detalhes") |
| RF-005 | Exibir nos detalhes: descrição do curso, áreas de atuação, média salarial e link para teste vocacional gratuito | Alta | Implementado, com blocos extras de habilidades e mercado |
| RF-006 | Disponibilizar barra de pesquisa por nome ou texto | Alta | Implementado, com busca insensível a acentos |

### Regras de implementação acordadas

| ID | Regra | Situação |
| --- | --- | --- |
| RN-01 | O filtro funciona sem recarregar a página | Atendida |
| RN-02 | A pesquisa atualiza os resultados dinamicamente, a cada tecla digitada | Atendida |
| RN-03 | O usuário consegue voltar à listagem após ver os detalhes | Atendida (botão "Voltar para a lista" e tecla `Esc`) |
| RN-04 | A seleção de área atualiza visualmente o estado do filtro ativo | Atendida (classe visual + `aria-pressed`) |
| RN-05 | Busca e filtro funcionam em conjunto | Atendida |
| RN-06 | Quando não houver resultados, exibir mensagem clara | Atendida |
| RN-07 | Código organizado e compreensível para estudantes | Atendida (arquivos comentados e divididos em seções) |

## 5. Requisitos não funcionais

| ID | Requisito | Como foi atendido |
| --- | --- | --- |
| RNF-001 | Responsividade Mobile First | CSS escrito primeiro para telas pequenas, com `@media (min-width: 600px)` e `(min-width: 900px)`. Verificado em 360 px, 768 px e 1280 px sem rolagem horizontal |
| RNF-002 | Navegação rápida entre listagem e detalhes, sem recarregar a página | Troca de seções via propriedade `hidden` e manipulação do DOM |
| RNF-003 | Acessibilidade | HTML semântico, `label` associado ao campo de busca, foco visível, navegação por teclado, `aria-pressed` nos filtros, `aria-live` no contador, link "pular para o conteúdo", `aria-label` nos botões dos cards, `aria-hidden` nos ícones decorativos, suporte a `prefers-reduced-motion` |
| RNF-004 | Arquitetura modular | Dados separados da lógica no `script.js`; CSS dividido em dez seções comentadas; incluir uma profissão exige apenas acrescentar um objeto ao array |
| RNF-005 | Hospedagem gratuita no GitHub Pages | Projeto 100% estático, caminhos relativos, sem backend nem dependências externas |

## 6. Restrições técnicas

- Uso exclusivo de HTML5, CSS3 e JavaScript puro.
- Sem frameworks, bibliotecas ou pré-processadores.
- Sem servidor, banco de dados ou processamento no servidor.
- Compatível com navegadores atualizados (Chrome, Edge, Firefox e Safari).

## 7. Requisitos de conteúdo

- Entre 12 e 20 profissões distribuídas nas quatro áreas. **Entregue: 16 profissões, quatro por área.**
- Valores salariais identificados como estimativas ilustrativas, com indicação de onde confirmar.
- Links de testes vocacionais reais, gratuitos e acessíveis, sem URLs inventadas.
- Aviso permanente, no rodapé, de que as informações são orientativas.

## 8. Critérios de aceitação

1. A página abre sem erros no console.
2. Os 16 cards aparecem ao carregar.
3. Cada filtro de área exibe apenas as profissões daquela área.
4. A busca reduz a lista conforme o texto digitado.
5. Busca sem resultados exibe mensagem clara.
6. Os detalhes abrem e fecham sem recarregar a página.
7. O layout não apresenta rolagem horizontal em telas de 360 px.
8. Todos os elementos interativos são alcançáveis por teclado, com foco visível.

Todos os critérios foram verificados na Etapa 3; ver `docs/testes.md`.
