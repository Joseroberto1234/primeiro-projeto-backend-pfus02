//Importação do módulo express
const express = require("express")

// Criando uma variável pra gerenciar as rotas de usuário
const roteador = express.Router()

// Importando tudo que tem no arquivo de controller do usuário
const userController = require("../controllers/userControllers")

//Login
//Rota pra solicitar a página de login
roteador.get("/login", userController.formLogin)
//Rota pra enviar dados na página de login
roteador.post("/login", userController.loginUsuario)


// Criando a exportação desse arquivo 
module.exports = roteador