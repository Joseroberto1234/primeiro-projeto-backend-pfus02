//Importação ((pegar)) do modulo express
const express = require("express")
//criando uma variavel para gerenciar as rotas dos usuarios
const roteador = express.Router()

//Importando tudo que tem no arquivo de controller do usuario 
const produtosController = require("../controllers/produtosController")


//Crud

//C = Criar novo usuario 
//Rota para solicitar a página de cadastro
//Rota para enviar dados da página de cadastro
roteador.get("/cadastrar", produtosController.Cadastrarproduto)
roteador.post("/cadastrar", produtosController.salveproduto)


//R = Obter informações de usuarios
//Retorna as informações de todos os usuarios
roteador.get("/", produtosController.listaprodutos)
//Retorna as informações de um usuário apenas
roteador.get("/:id", produtosController.buscaprodutos)

// U = Atualizar um usuario

roteador.put("/:id", produtosController.atualizaProdutos)

// D = Deletar um usuario

roteador.delete("/:id", produtosController.deleteProduto)



//Criando a exportação desse arquivo 
module.exports = roteador