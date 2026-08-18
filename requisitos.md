# Documento de Engenharia de Requisitos

Este documento apresenta as especificações das funcionalidades (o que o sistema faz) e das qualidades (como o sistema se comporta) do projeto Mural Escolar Digital.

## Requisitos Funcionais 

| Identificador | Descrição do Requisito |
| :--- | :--- |
| **RF-001** | O sistema deve permitir que usuários administradores (líderes/professores) criem e publiquem avisos. |
| **RF-002** | O sistema deve exigir autenticação (login e senha) apenas para a criação de novos avisos. |
| **RF-003** | O sistema deve exibir os avisos na tela inicial em formato de "cards" (mural visual). |
| **RF-004** | O sistema deve categorizar os avisos em tags (ex: Provas, Eventos, Grêmio, Geral). |
| **RF-005** | O sistema deve permitir que qualquer usuário filtre os avisos clicando nas tags de categoria. |
| **RF-006** | O sistema deve permitir que o administrador defina uma data de expiração para o aviso sumir automaticamente. |

## Requisitos Não Funcionais

| Identificador | Descrição do Requisito |
| :--- | :--- |
| **RNF-001** | **Responsividade**: O site deve ser totalmente adaptável para telas de smartphones e computadores. |
| **RNF-002** | **Desempenho**: A página inicial do mural deve carregar em menos de 2 segundos sob conexões 4G padrão. |
| **RNF-003** | **Interface**: O design deve ser limpo e intuitivo, seguindo o padrão de acessibilidade de cores. |
| **RNF-004** | **Segurança**: As senhas dos usuários administradores não devem ser salvas em texto limpo no código. |
| **RNF-005** | **Disponibilidade**: Sendo um site estático inicial, a hospedagem deve garantir que o mural fique online 24/7 (ex: via GitHub Pages). |

