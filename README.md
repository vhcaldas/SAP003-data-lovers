# Data Lovers

## Índice

- [Data Lovers](#data-lovers)
  - [Índice](#%c3%8dndice)
  - [1. Resumo do Projeto.](#1-resumo-do-projeto)
  - [2. Banco de Dados Escolhido.](#2-banco-de-dados-escolhido)
  - [3. Usuários.](#3-usu%c3%a1rios)
  - [4. Histórias de Usuários](#4-hist%c3%b3rias-de-usu%c3%a1rios)
  - [5. Desenho da Interface](#5-desenho-da-interface)
  - [6. Checklist](#6-checklist)

***

## 1. Resumo do Projeto.




## 2. Banco de Dados Escolhido.

O banco de dados escolhido foi o que se segue:
* [Pessoas feridas por meios de transporte nos EUA](src/data/injuries/injuries.json).
  Este conjunto mostra o número de pessoas feridas em acidentes de transporte,
  com dados anuais desde 1960 e categorizados por tipo de transporte
  (avião, barco, automóvel, moto e bicicleta).

## 3. Usuários.

A partir do banco de dados em referência, nós consideramos as necessidades dos seguintes usuários:

![André](src/Images/15anos.jpg)
* Nome: André.
* Idade: 15 anos.
* Biografia: Estudante do ensino médio, _nerd_.
* Valores: Analítico, curioso, não liga muito para dados muito antigos, deseja obter boas notas na escola.
* Necessidades/Dores: tem um trabalho na escola sobre os meios de transporte urbano mais perigosos nos EUA.
***
![Larissa](src/Images/medicina.jpeg)
* Nome: Larissa.
* Idade: 27 anos.
* Biografia: Estudante de Medicina. Está prestes a entregar o seu TCC.
* Valores: Deseja fazer um bom trabalho.
* Necessidades/Dores: Para fins de pesquisa, deseja saber qual o meio de transporte urbano que é o mais seguro.

***
![José Manuel](src/Images/empresario.jpeg)
* Nome: José Manuel.
* Idade: 62 anos.
* Biografia: Dono de uma fábrica de automóveis.
* Valores: Deseja melhorar os seus produtos. Deseja aumentar a segurança dos seus clientes.
* Necessidades/Dores: Deseja saber sobre índices de mortalidades em transportes urbanos.

## 4. Histórias de Usuários

A maioria do nosso público-alvo são visitantes que desejam filtrar índices de mortalidade de transportes urbanos desde 1960 com atualização de dados até o ano 2016, para fins de pesquisa ou até mesmo para melhorar projetos de empresas de todos os tipos de transporte urbanos.

Diante da história das personas aqui desenhadas, propomos as seguintes histórias de usuários:

## 5. Desenho da Interface

Essas foram as interfaces pensadas:

* **1ª Interface**

![Interface1](src/Images/1ª&#32;interface.jpeg)

***

## 6. Checklist

* [ ] Usar VanillaJS.
* [ ] Não utilizar `this`.
* [ ] Passa pelo linter (`npm run pretest`)
* [ ] Passa pelos testes (`npm test`)
* [ ] Testes unitários cobrem um mínimo de 70% de statements, functions,
  lines e branches.
* [ ] Inclui uma _definição de produto_ clara e informativa no `README.md`.
* [ ] Inclui histórias de usuário no `README.md`.
* [ ] Inclui rascunho da solução (protótipo de baixa fidelidade) no
  `README.md`.
* [ ] Inclui uma lista de problemas detectados nos testes de usabilidade no `README.md`.
* [ ] UI: Mostra lista/tabela/etc com dados e/ou indicadores.
* [ ] UI: Permite ordenar dados por um ou mais campos (asc e desc).
* [ ] UI: Permite filtrar dados com base em uma condição.
* [ ] UI: É _responsivo_.
