# Documento de Engenharia de Requisitos - Portal Futuro

Este documento especifica as funcionalidades e os critérios de qualidade estabelecidos para o desenvolvimento da plataforma web de orientação profissional.

## Requisitos Funcionais (RF)

| Identificador | Descrição do Requisito |
| :--- | :--- |
| **RF-001** | O sistema deve exibir na tela inicial botões de filtro para as grandes áreas (ex: Tecnologia, Saúde, Humanas, Engenharia). |
| **RF-002** | O sistema deve exibir as profissões em formato de "cards" informativos na página principal. |
| **RF-003** | O sistema deve filtrar dinamicamente os cards de profissões na tela de acordo com a área selecionada pelo usuário. |
| **RF-004** | O sistema deve permitir que o usuário clique em um card de profissão para abrir os detalhes completos da carreira. |
| **RF-005** | A página de detalhes de cada profissão deve conter: Descrição do curso, Áreas de atuação, Média salarial e Links para testes vocacionais gratuitos externos. |
| **RF-006** | O sistema deve possuir uma barra de pesquisa para buscar profissões diretamente por texto/nome. |

## Requisitos Não Funcionais (RNF)

| Identificador | Descrição do Requisito |
| :--- | :--- |
| **RNF-001** | **Responsividade**: O layout do portal deve ser adaptável e legível tanto em computadores quanto em smartphones (Mobile First). |
| **RNF-002** | **Navegação**: A transição entre a listagem de profissões e os detalhes da carreira deve ocorrer de forma rápida e sem recarregamento total da página (via manipulação do DOM com JavaScript). |
| **RNF-003** | **Acessibilidade**: O texto deve utilizar fontes de fácil leitura e manter um alto contraste de cores para garantir a leitura confortável de conteúdos longos. |
| **RNF-004** | **Arquitetura**: O projeto deve ser construído de forma modular no CSS, facilitando a adição futura de novas profissões sem quebrar o layout existente. |
| **RNF-005** | **Hospedagem**: Sendo um site focado em conteúdo estático, a plataforma deve ser hospedada gratuitamente utilizando o GitHub Pages. |
