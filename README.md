# Consulta do Tempo

Projeto desenvolvido em HTML, CSS e JavaScript para consultar informações sobre o clima de uma cidade.

O sistema utiliza a API do OpenWeatherMap para buscar os dados atuais do clima e o Leaflet junto com o OpenStreetMap para mostrar a localização da cidade em um mapa.

## Funcionalidades

* Pesquisa de cidades
* Temperatura atual
* Sensação térmica
* Temperatura mínima
* Temperatura máxima
* Umidade do ar
* Velocidade do vento
* Pressão atmosférica
* Visibilidade
* Porcentagem de nuvens
* Ícone representando o clima
* Mapa com a localização da cidade
* Marcador indicando o local pesquisado
* Pesquisa utilizando a tecla Enter
* Mensagens para consultas inválidas

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* OpenWeatherMap API
* Leaflet
* OpenStreetMap

## Como funciona

O usuário digita o nome de uma cidade e clica em "Consultar".

O JavaScript envia o nome da cidade para a API do OpenWeatherMap. A API retorna os dados atuais do clima, incluindo a temperatura, umidade, vento, pressão, descrição do tempo e as coordenadas geográficas da cidade.

As coordenadas de latitude e longitude retornadas pela API são utilizadas pelo Leaflet para posicionar o mapa e colocar um marcador exatamente na localização encontrada.

## Estrutura do projeto

```text
consulta-tempo/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Arquivo index.html

Responsável pela estrutura da página.

Nele estão:

* Campo para digitar a cidade
* Botão de consulta
* Área com as informações do clima
* Área do mapa
* Importação do Leaflet

## Arquivo style.css

Responsável pela aparência do projeto.

O CSS organiza:

* Formulário de pesquisa
* Informações do clima
* Mapa
* Espaçamentos
* Bordas
* Responsividade para celular

## Arquivo script.js

Responsável pelo funcionamento do sistema.

O JavaScript:

1. Pega a cidade digitada pelo usuário.
2. Envia uma requisição para o OpenWeatherMap.
3. Recebe os dados da cidade.
4. Mostra as informações na página.
5. Pega latitude e longitude.
6. Move o mapa para a localização encontrada.
7. Adiciona um marcador no local.
8. Mostra as informações do clima ao clicar no marcador.

O OpenWeatherMap disponibiliza no retorno campos como `coord.lat`, `coord.lon`, temperatura, sensação térmica, umidade, pressão, vento, visibilidade e nuvens.

## API utilizada

### OpenWeatherMap

A API utilizada é a Current Weather Data.

A consulta utiliza:

```text
https://api.openweathermap.org/data/2.5/weather
```

Também são utilizados:

```text
units=metric
```

para receber as temperaturas em Celsius.

E:

```text
lang=pt_br
```

para receber as descrições em português.

### Leaflet

O Leaflet é utilizado para criar e controlar o mapa dentro da página.

O projeto utiliza a versão 1.9.4 através de CDN. O Leaflet permite criar o mapa, definir sua posição inicial e adicionar uma camada de mapas.

### OpenStreetMap

O OpenStreetMap fornece as imagens do mapa utilizadas pelo Leaflet.

O código utiliza uma camada de mapas através do endereço:

```text
https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
```

O Leaflet permite utilizar esse tipo de camada através do `L.tileLayer()`.

## Como executar

1. Baixe ou clone o projeto.
2. Coloque os três arquivos na mesma pasta.
3. Abra a pasta no Visual Studio Code.
4. Abra o `index.html` no navegador.
5. Digite uma cidade.
6. Clique em "Consultar".

Também é possível utilizar a extensão Live Server do Visual Studio Code para executar o projeto localmente.

## Observação

A chave da API do OpenWeatherMap está sendo utilizada diretamente no JavaScript para facilitar o funcionamento do projeto durante o desenvolvimento.

Em um sistema publicado, o ideal é não deixar a chave da API exposta diretamente no código do navegador. Para isso, seria possível utilizar um backend para realizar as requisições.

## Objetivo

O objetivo do projeto é praticar o consumo de APIs utilizando JavaScript, trabalhar com requisições HTTP e manipulação de dados JSON, além de integrar informações de clima com um mapa interativo.

