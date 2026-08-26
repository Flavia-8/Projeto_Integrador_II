# Relatório de Arquitetura e Modelagem - Portal Futuro

Este documento apresenta o fluxo de navegação do usuário e a estrutura lógica dos dados consumidos pela aplicação web.

## 1. Diagrama de Fluxo do Usuário (Navegação)
O fluxograma abaixo descreve a jornada do estudante ao interagir com a interface do portal para encontrar uma profissão.

```mermaid
graph TD
    A[Início: Home do Portal] --> B{O que o usuário deseja?}
    B -->|Ver tudo| C[Listagem Geral de Cards]
    B -->|Filtrar por Área| D[Selecionar Categoria: Ex: Saúde]
    B -->|Pesquisar| E[Digitar no campo de busca]
    
    D --> F[JavaScript atualiza a tela]
    E --> F
    C --> G[Ver Cards na Tela]
    F --> G
    
    G --> H[Clicar no Card de uma Profissão]
    H --> I[Exibir Detalhes: Salário, Curso e Links]
```

## 2. Modelo Técnico de Dados (Simulação de Objetos JS)
Como o projeto não utiliza banco de dados relacional (SQL) nesta etapa, a persistência e renderização dos dados de cada profissão serão estruturadas via Array de Objetos JSON no arquivo `script.js`.

```mermaid
classDiagram
    class Profissao {
        +int id
        +string nome
        +string area
        +string descricaoCurta
        +string salarioMedio
        +string duracaoCurso
        +string linkTesteExterno
    }
```
-- **Link para o Trello:** https://trello.com/b/7JY2MqC5/trello-portal-futuro-flavia
