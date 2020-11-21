# Semana_imersao
Projeto com NodeJS, React, Next e ReactNative.

Semana Imersão, é uma semana básica com conhecimento trazido pelo [Celke](https://www.youtube.com/c/CelkeBr/videos).
O que chamou atenção neste projeto foi o uso do NextJS, até então inédito para mim e o Bootstrap, que também se mostrou bastante interessante.

## Banco de dados

Foi utlizado o MongoDB como banco de dados e mais do que isso, foi criado ele em um container do Docker.
Para criar o container no Docker, é só rodar no terminar com ele habilitado:
```
docker run --name <nome> -p 27017:27017 -d -t mongo
```

Para rodar ele é necessário rodar no terminar:

```
docker start <nome>
```
E para parar ele
```
docker stop <nome>
```

## Api

Com o docker rodando, você deve rodar:
```
yarn dev
```
Assim você tera a api rodando no background.

## Insomnia
Na pasta api, está o arquivo do Insomnia e com ele você pode fazer o cadastro de HOME, que são, apesar de básico, essênciais para o andandamento do projeto.

## Web

Na pasta Site, é onde está a o React/Next da aplicação web, onde podemos visualizar um site responsivo com os dados da api.
Para rodar é necessário escrever:
```
yarn dev
```

## Mobile

Na pasta App, é onde está o aplicativo React-Native. 
Primeiramente você deve alterar na pasta services/api.js a baseURL. 
Se você estiver no IOS, localhost é mais do que suficiente.
Se estiver no Android, é necessário colocar o ip da máquina.

Caso não saiba como configurar o emulador, segue o [tutorial](https://react-native.rocketseat.dev/) da Rocketseat.

Estando todas as coisas configurados, você precisa rodar para instalar o aplicativo no emulador:
```
yarn react-native run-android
ou
yarn react-native run-ios
```
e estando com o aplicativo já no emulador, sem nenhuma dependência nova ou conflito, rodar:
```
yarn react-native start
```

