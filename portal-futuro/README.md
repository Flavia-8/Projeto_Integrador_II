# Portal Futuro: Guia de Profissões e Carreiras

Plataforma web informativa que funciona como um guia simplificado de orientação profissional para estudantes do Ensino Médio.

Projeto desenvolvido na disciplina **Projeto Integrador II** do Curso Técnico em Informática integrado ao Ensino Médio. Esta versão corresponde à **Etapa 3 — Execução, Validação e Entrega Final**.

---

## 1. Introdução

O Portal Futuro reúne, em um único site, informações sobre profissões de quatro grandes áreas do conhecimento: Tecnologia, Saúde, Humanas e Engenharia. O estudante pode filtrar por área, pesquisar pelo nome da profissão e abrir uma tela de detalhes com o que se estuda no curso, onde se trabalha, quais habilidades ajudam, como está o mercado e uma faixa salarial estimada.

A finalidade é educacional: organizar informações dispersas para apoiar a pesquisa do estudante, sem substituir a orientação profissional feita por psicólogos e orientadores pedagógicos.

## 2. Problema

Os estudantes do 3º ano do Ensino Médio enfrentam pressão para escolher uma carreira profissional e se inscrever em vestibulares ou cursos técnicos. Muitos não conhecem suficientemente o mercado de trabalho, a remuneração, a rotina profissional ou as disciplinas estudadas em cada curso.

A falta de informações centralizadas e acessíveis pode contribuir para ansiedade, escolhas pouco informadas e abandono posterior do ensino superior.

## 3. Solução

Um site estático, leve e responsivo, que:

- organiza 16 profissões em quatro áreas do conhecimento;
- permite filtrar por área e pesquisar por texto, com os dois recursos funcionando em conjunto;
- abre os detalhes completos da carreira sem recarregar a página;
- indica testes vocacionais gratuitos externos;
- deixa explícito que salários e informações de mercado são orientativos.

## 4. Público-alvo

- Estudantes do 3º ano do Ensino Médio (público principal).
- Estudantes de outras séries em fase de escolha.
- Orientadores pedagógicos.
- Psicólogos escolares e profissionais de orientação de carreira.

## 5. Objetivo geral

Disponibilizar uma plataforma web acessível e de fácil navegação que centralize informações sobre profissões e cursos, apoiando estudantes do Ensino Médio na construção de uma escolha profissional mais consciente.

## 6. Objetivos específicos

- Centralizar informações sobre profissões em um único ambiente.
- Facilitar a exploração de carreiras por área do conhecimento.
- Permitir pesquisa e filtragem dinâmicas, sem recarregar a página.
- Disponibilizar informações sobre cursos, formação, atuação e mercado.
- Indicar testes vocacionais gratuitos como ponto de partida para autoconhecimento.
- Apoiar decisões mais conscientes sobre o futuro profissional.

## 7. Funcionalidades implementadas

| ID | Requisito | Situação |
| --- | --- | --- |
| RF-001 | Botões de filtro por grande área (Todas, Tecnologia, Saúde, Humanas, Engenharia) | Implementado |
| RF-002 | Profissões exibidas em cards informativos | Implementado |
| RF-003 | Filtragem dinâmica dos cards por área | Implementado |
| RF-004 | Clique no card abre os detalhes completos | Implementado |
| RF-005 | Detalhes com descrição do curso, atuação, salário e teste vocacional externo | Implementado |
| RF-006 | Barra de pesquisa por nome ou texto | Implementado |

Recursos adicionais desenvolvidos:

- Contador de resultados com região `aria-live`, anunciada por leitores de tela.
- Mensagem clara quando a busca não retorna resultados.
- Botão "Limpar busca e filtros".
- Fechamento dos detalhes pela tecla `Esc`.
- Busca sem sensibilidade a acentos ("saude" encontra "Saúde").
- Cores próprias por área, aplicadas aos cards e à tela de detalhes.

## 8. Tecnologias utilizadas

- **HTML5** — estrutura semântica (`header`, `main`, `section`, `article`, `footer`).
- **CSS3** — layout responsivo com Grid e Flexbox, variáveis CSS, abordagem Mobile First.
- **JavaScript (ES6, sem frameworks)** — dados, filtros, busca e manipulação do DOM.
- **GitHub Pages** — hospedagem estática gratuita.

Não há bibliotecas externas, backend ou banco de dados. O ícone do cabeçalho é um SVG escrito diretamente no HTML.

## 9. Estrutura de pastas

```text
portal-futuro/
│
├── index.html        Estrutura da página: cabeçalho, hero, exploração, detalhes, sobre e rodapé
├── style.css         Estilos, variáveis de cor, componentes e regras de responsividade
├── script.js         Dados das profissões e toda a lógica (filtro, busca, detalhes)
├── README.md         Este arquivo
│
└── docs/
    ├── requisitos.md Requisitos funcionais e não funcionais das Etapas 1 e 2
    ├── modelagem.md  Modelagem de dados e arquitetura da solução
    └── testes.md     Relatório de validação da Etapa 3
```

O `index.html` referencia `style.css` e `script.js` por caminhos relativos, sem barra inicial, o que garante o funcionamento tanto localmente quanto no GitHub Pages.

## 10. Como executar localmente

1. Baixe o repositório (botão **Code → Download ZIP**) ou clone-o:
   ```bash
   git clone https://github.com/USUARIO/portal-futuro.git
   ```
   *(substitua `USUARIO` pelo nome de usuário real do GitHub da equipe)*
2. Abra a pasta `portal-futuro`.
3. Dê um duplo clique em `index.html`. O projeto é estático e funciona direto do arquivo, sem servidor.
4. Opcional: para simular um servidor local, use a extensão **Live Server** do VS Code ou execute, dentro da pasta do projeto:
   ```bash
   python -m http.server 8000
   ```
   e acesse `http://localhost:8000`.
5. Navegue: use os botões de área, digite na busca, abra os detalhes e volte pelo botão "Voltar para a lista" ou pela tecla `Esc`.

## 11. Como publicar no GitHub Pages

1. Crie um repositório público no GitHub (por exemplo, `portal-futuro`).
2. Envie os arquivos mantendo `index.html` na **raiz** do repositório:
   ```bash
   git init
   git add .
   git commit -m "Etapa 3: produto funcional do Portal Futuro"
   git branch -M main
   git remote add origin https://github.com/USUARIO/portal-futuro.git
   git push -u origin main
   ```
3. No repositório, abra **Settings → Pages**.
4. Em **Source**, escolha **Deploy from a branch**; em **Branch**, selecione `main` e a pasta `/ (root)`. Salve.
5. Aguarde alguns minutos. O endereço publicado aparece na própria tela de Pages, no formato `https://USUARIO.github.io/portal-futuro/`.
6. Registre a URL real aqui depois da publicação:

   **URL publicada:** *[preencher após a publicação]*

## 12. Testes e validação

As funcionalidades foram validadas com uma bateria de 48 verificações automatizadas executadas em navegador Chromium, cobrindo carregamento, filtros das quatro áreas, busca, busca sem resultados, combinação de filtro e busca, abertura e fechamento dos detalhes, navegação por teclado, ausência de rolagem horizontal em 360 px, 768 px e 1280 px e ausência de erros no console.

Resultado: **48 verificações aprovadas, nenhuma reprovada**.

O relatório completo, incluindo os testes que ainda devem ser executados manualmente pela equipe, está em [`docs/testes.md`](docs/testes.md).

## 13. Resultados finais

Foi entregue um site estático completo e funcional, com:

- 16 profissões catalogadas, quatro por área;
- filtro por área e busca textual combináveis;
- tela de detalhes com sete blocos de informação por profissão;
- layout responsivo de 360 px a telas grandes;
- recursos de acessibilidade (HTML semântico, foco visível, `aria-pressed` nos filtros, `aria-live` no contador, link de pular para o conteúdo, navegação por teclado);
- documentação de requisitos, modelagem e testes.

## 14. Limitações e melhorias futuras

Limitações conhecidas:

- As faixas salariais são **estimativas ilustrativas** e não substituem fontes oficiais. Cada profissão indica onde confirmar os dados.
- Os dados ficam em um array no `script.js`; atualizações exigem editar o código.
- Não há testes com leitores de tela reais nem em aparelhos físicos (ver `docs/testes.md`).
- Os links externos podem mudar com o tempo e precisam de conferência periódica.

Melhorias possíveis:

- Ampliar o catálogo de profissões e incluir novas áreas (Artes, Agrárias, Militar).
- Atualizar os dados salariais a partir de fontes oficiais, como o Painel do Novo CAGED.
- Separar os dados em um arquivo `dados.json` carregado com `fetch`.
- Permitir favoritar e comparar carreiras.
- Adicionar imagens ilustrativas com texto alternativo descritivo.
- Publicar um formulário para sugestões de novas profissões.

## 15. Equipe

*Preencher com os dados reais antes da entrega.*

- Integrantes: **Flávia Mariana**
- Turma: **3 ano "B"**
- Professor orientador: **Clécio Sousa**

## 16. Gestão do projeto

- Quadro Trello: https://trello.com/b/7JY2MqC5/trello-portal-futuro-flavia
   *https://trello.com/invite/b/6a8f414c93f0cca9ce949f3b/ATTI529684bf48959f10dd5b1c7baf52f8da15062DAA/trello**-portal-futuro-flavia   talvez seja esse link*
- Repositório GitHub: **[preencher com a URL do repositório da equipe]**

---

**Aviso:** as informações sobre profissões, cursos e remuneração apresentadas neste site são orientativas e devem ser confirmadas em fontes oficiais, como instituições de ensino, conselhos profissionais e órgãos governamentais.
