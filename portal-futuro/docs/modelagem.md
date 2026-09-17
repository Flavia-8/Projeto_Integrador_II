# Modelagem e Arquitetura — Portal Futuro

## 1. Arquitetura geral

O Portal Futuro é uma aplicação **estática de página única**. Não há servidor de aplicação nem banco de dados: os dados ficam em memória, dentro do próprio JavaScript, e toda a interação acontece no navegador do usuário.

```text
┌──────────────────────────────────────────────┐
│                 Navegador                    │
│                                              │
│  index.html  →  estrutura (DOM)              │
│  style.css   →  apresentação                 │
│  script.js   →  dados + lógica               │
│       │                                      │
│       ├── PROFISSOES (array de objetos)      │
│       ├── estado {area, termo}               │
│       └── funções de render/filtro/detalhes  │
└──────────────────────────────────────────────┘
        hospedado como arquivos estáticos
               (GitHub Pages)
```

A separação segue a ideia de camadas:

| Camada | Arquivo | Responsabilidade |
| --- | --- | --- |
| Dados | `script.js`, seção 1 | Array `PROFISSOES` e configuração `AREAS` |
| Estado | `script.js`, seção 3 | Objeto `estado` com a área selecionada e o termo pesquisado |
| Lógica | `script.js`, seções 4 a 6 | Filtrar, pesquisar, renderizar, abrir e fechar detalhes |
| Apresentação | `index.html` + `style.css` | Estrutura semântica e estilos |

## 2. Modelo de dados

### 2.1. Entidade Profissão

Cada profissão é um objeto do array `PROFISSOES`.

| Campo | Tipo | Origem | Descrição |
| --- | --- | --- | --- |
| `id` | Number | Etapa 2 | Identificador único, usado para abrir os detalhes |
| `nome` | String | Etapa 2 | Nome da profissão |
| `area` | String | Etapa 2 | Área do conhecimento: Tecnologia, Saúde, Humanas ou Engenharia |
| `descricaoCurta` | String | Etapa 2 | Resumo exibido no card |
| `salarioMedio` | String | Etapa 2 | Faixa salarial estimada, sempre com indicação de que é ilustrativa |
| `duracaoCurso` | String | Etapa 2 | Tempo de formação |
| `linkTesteExterno` | String | Etapa 2 | URL de teste vocacional gratuito |
| `formacao` | String | **Extensão da Etapa 3** | Curso ou cursos que habilitam a profissão, incluindo registro em conselho |
| `descricaoCurso` | String | **Extensão da Etapa 3** | O que se estuda no curso (atende ao RF-005) |
| `areasAtuacao` | Array de String | **Extensão da Etapa 3** | Onde o profissional trabalha (atende ao RF-005) |
| `habilidades` | Array de String | **Extensão da Etapa 3** | Características que ajudam na profissão |
| `mercadoTrabalho` | String | **Extensão da Etapa 3** | Panorama de empregabilidade, em linguagem não numérica |
| `fontes` | String | **Extensão da Etapa 3** | Onde confirmar os dados (conselhos profissionais, órgãos oficiais) |

Os campos definidos na modelagem original foram **mantidos com os mesmos nomes**. As extensões foram necessárias para atender ao RF-005 (descrição do curso e áreas de atuação) e ao compromisso de não apresentar dados não verificáveis como fatos.

Exemplo real do arquivo:

```javascript
{
  id: 5,
  nome: "Enfermeiro(a)",
  area: "Saúde",
  descricaoCurta: "Cuida de pacientes, coordena a equipe de enfermagem e acompanha tratamentos.",
  salarioMedio: "Estimativa ilustrativa: R$ 3.500 a R$ 8.000 por mês; há piso salarial definido em lei…",
  duracaoCurso: "5 anos (bacharelado).",
  formacao: "Bacharelado em Enfermagem, com registro no Conselho Regional de Enfermagem (COREN).",
  linkTesteExterno: "https://querobolsa.com.br/teste-vocacional-gratis",
  descricaoCurso: "…",
  areasAtuacao: ["…"],
  habilidades: ["…"],
  mercadoTrabalho: "…",
  fontes: "…"
}
```

### 2.2. Entidade Área

```javascript
{ nome: "Tecnologia", cor: "#1F4FA3", corClara: "rgba(31, 79, 163, 0.12)" }
```

O array `AREAS` gera os botões de filtro e define as cores usadas nos cards e na tela de detalhes, por meio das variáveis CSS `--cor-area` e `--cor-area-clara`. Criar uma nova área é questão de acrescentar um objeto a esse array.

### 2.3. Estado da interface

```javascript
const estado = {
  areaSelecionada: "Todas",
  termoPesquisa: ""
};
```

Qualquer interação altera esse objeto e chama `atualizarResultados()`, que recalcula a lista e redesenha os cards. Isso evita lógica duplicada e garante que filtro e busca funcionem em conjunto (RN-05).

## 3. Fluxo de navegação

```text
        ┌────────────────────────┐
        │      Página inicial    │
        │  (hero + exploração)   │
        └───────────┬────────────┘
                    │ digita / clica em filtro
                    ▼
        ┌────────────────────────┐
        │  Lista filtrada (DOM)  │──► 0 resultados → mensagem clara
        └───────────┬────────────┘
                    │ clique no card ou em "Ver detalhes"
                    ▼
        ┌────────────────────────┐
        │  Seção de detalhes     │
        │  (#explorar oculto)    │
        └───────────┬────────────┘
                    │ "Voltar para a lista", tecla Esc ou menu
                    ▼
            volta à lista filtrada
```

A troca entre listagem e detalhes usa a propriedade `hidden` das seções, sem recarregar a página (RNF-002). Ao abrir os detalhes, o foco é movido para a seção (`tabindex="-1"` + `focus()`), o que faz leitores de tela anunciarem a mudança de contexto.

## 4. Decisão de projeto: seção em vez de modal

A tela de detalhes foi implementada como **seção dinâmica na mesma página**, e não como modal. Motivos:

- Não exige captura de foco dentro de uma caixa (`focus trap`), que é a parte mais difícil de acertar em modais acessíveis.
- Funciona melhor em telas pequenas, onde um modal com muito texto vira uma rolagem interna desconfortável.
- O código fica mais simples de entender e manter por estudantes.

Mesmo assim, a tecla `Esc` fecha os detalhes, comportamento que os usuários esperam.

## 5. Organização do CSS

O `style.css` está dividido em dez seções comentadas: variáveis e reset, utilitários e componentes, cabeçalho, hero, exploração, cards, detalhes, sobre, rodapé e responsividade. As cores, espaçamentos e raios ficam em variáveis no `:root`, o que permite mudar a identidade visual inteira alterando poucas linhas.

A responsividade segue **Mobile First**: o estilo base atende telas pequenas e as consultas de mídia acrescentam colunas conforme a largura aumenta.

| Faixa | Grade de cards | Outros ajustes |
| --- | --- | --- |
| Até 599 px | 1 coluna | Menu abaixo da marca, painel do hero empilhado |
| 600 px a 899 px | 2 colunas | Cabeçalho em linha, rodapé em 3 colunas |
| 900 px ou mais | 3 colunas | Hero em duas colunas, detalhes em dois blocos lado a lado |

## 6. Funções principais do `script.js`

| Função | Responsabilidade |
| --- | --- |
| `normalizarTexto()` | Remove acentos e maiúsculas para a busca |
| `obterConfiguracaoArea()` | Devolve a cor da área, com valor padrão seguro |
| `renderizarFiltros()` | Cria os botões de área a partir do array `AREAS` |
| `atualizarFiltrosAtivos()` | Ajusta `aria-pressed` e o destaque visual do filtro |
| `criarCard()` | Monta o elemento de um card |
| `renderizarProfissoes()` | Redesenha a grade e aciona contador e mensagem vazia |
| `atualizarContador()` | Atualiza o texto de resultados na região `aria-live` |
| `alternarMensagemVazia()` | Mostra ou esconde a mensagem de lista vazia |
| `filtrarProfissoes()` | Aplica área e termo de busca ao mesmo tempo |
| `atualizarResultados()` | Ponto único de atualização da tela |
| `limparFiltros()` | Retorna ao estado inicial |
| `preencherLista()` | Preenche listas `<ul>` dos detalhes |
| `abrirDetalhes()` | Exibe os detalhes de um `id`, com proteção contra id inexistente |
| `voltarParaExploracao()` | Fecha os detalhes e devolve o foco à busca |
| `registrarEventos()` | Concentra todos os `addEventListener` |
| `iniciar()` | Inicializa a aplicação após o `DOMContentLoaded` |

## 7. Como incluir uma nova profissão

1. Abra o `script.js`.
2. Copie o último objeto do array `PROFISSOES`.
3. Cole ao final, antes do `];`, ajustando a vírgula.
4. Troque o `id` por um número ainda não usado.
5. Preencha os campos, mantendo o padrão de escrita dos salários ("Estimativa ilustrativa: …").
6. Salve e recarregue a página. O card, o filtro e a busca passam a considerar a nova profissão automaticamente.

Nenhuma alteração no HTML ou no CSS é necessária (RNF-004).

## 8. Tratamento de erros previsto

- Todas as referências do DOM são verificadas antes do uso (`if (!elemento) return;`).
- `abrirDetalhes()` não faz nada se o `id` não existir no array.
- `preencherLista()` aceita valores ausentes sem quebrar, tratando-os como lista vazia.
- Textos são inseridos com `textContent`, e não com `innerHTML`, evitando problemas de interpretação de conteúdo.
