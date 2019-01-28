# LOGIN APP

## Project setup
O projeto esta separado na seguinte estrutura:

### /api
Nesta pasta temos o gerador de usuarios, e também o json-server para rodar a api e seus enpoints.

#### Setup:
```
npm install
```

#### Comandos:
```
npm generate
```
* Gera uma nova base de dados.


```
npm start
```
* Roda o server.

### /web
Estrutura de componentes e views da aplicação, com seus controles de estado e rotas.

Na estrutura geral foi Utilizado:
- Vue.js - Para a estrutura de componentes
- Vuex - Para controle de estados e dispatch de actions.
- Router - Para o controle de rotas.

Como setup inicial foi utilizado vue.cli, 
e incluido a biblioteca do element-ui para facilitar na construção da interface.

#### Setup
```
npm install
```
#### Development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```