# Desafio Front-End Angular

O objetivo deste desafio é avaliarmos seus conhecimentos em desenvolvimento front-end com o framework angular.

Estaremos observando a qualidade do seu código, seu estilo, boas práticas, organização e documentação.

## Regras

1. Seu código deverá ser publicado em um repositório criado a partir de um fork deste, e apresentado como um pull-request para a branch master.
2. Desenvolver utilizando Angular, TypeScript e Bootstrap nas versões mais recentes disponíveis.
3. Você deve utilizar, sempre que possível, os componentes da suite DevExtreme (https://js.devexpress.com).
4. Não é necessário concluir todas as etapas desse desafio. As etapas estão apresentadas em ordem crescente de dificuldade.
5. A conclusão do desafio não garante uma colocação, apenas nos permitirá identificar seu domínio e senioridade para atuar em nossos projetos.

## O desafio

Sua missão, caso decida aceitá-la, é criar uma aplicação Web que consuma uma API de Previsão do Tempo. Você pode usar qualquer API de sua preferência.

O layout fica a seu critério, o que conta são as funcionalidades.

Funcionalidades:

- Página inicial: Um campo para seleção do *Estado (UF)*, um campo para digitação do *Município*, um botão *Pesquisar* e um local onde irão aparecer as informações de previsão do tempo da cidade pesquisada.
- Capitais: Página onde devem estar relacionadas todas as capitais do Brasil, contendo algumas informações obtidas da API, à sua escolha.
- Barra de navegação, para alternar entre a página inicial e a página de capitais.

Sinta-se livre para utilizar quaisquer informações que a API te proporcionar.

## Etapas:

1. Crie um projeto Angular utilizando o Angular CLI.
2. Adicione a suite DevExtreme ao seu projeto (Dica: Na documentação tem uma sessão específica sobre isso).
3. Crie a página inicial da sua aplicação Web, utilizando um `TextBox` para receber o nome da cidade, um `SelectBox` para selecionar o estado, um `Button` para efetuar a pesquisa e um `TextArea` para exibir as informações retornadas via API.
4. Crie a página Capitais da sua aplicação Web, utilizando um `Data Grid` para relacionar as capitais. As informações (estado, município, previsão do tempo) devem ser exibidas em colunas no `Data Grid`.
5. Crie a barra de navegação, utilizando um componente da suíte DevExtreme à sua escolha.
6. Acrescente as funções de ordenação e filtro ao `Data Grid` da página Capitais.
8. Acrescente ao `Data Grid` da página Capitais os recursos de paginação, exportação para Excel e exportação para PDF.
8. Modifique a página inicial, substituindo o `TextBox` da cidade por um `SelectBox`. Serão dois componentes `SelectBox`, um para o Estado e outro para o Município. O `SelectBox` dos municípios deve ser populado dinamicamente com base no estado selecionado. Para executar essa etapa você pode utilizar FakeAPI, MockAPI ou uma API real, como a do IBGE por exemplo (https://servicodados.ibge.gov.br/api/docs/localidades).
9. Modifique a página inicial, removendo o `Button` *Pesquisar*. A consulta à API deve ocorrer automaticamente, sempre que for selecionado um município no `SelectBox`.
10. Adicione um `Data Grid` à página inicial. Esse `Data Grid` deverá ser populado dinamicamente, com as informações dos municípios pesquisados, como um histórico.
