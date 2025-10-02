//Path tem acesso a tudo, que ele vai usar para saber as pastas e arquivos do projeto 
const path = require("path")

//Importa tudo que tem no model 
const produtosModel = require("../models/produtosModels")


module.exports = {
    //Crud
    //Responde a requisição mostrando a visualização da tela de cadastro
    produtocadastro: (req,res) => {
      res.render("Entrando")
    },
    //FUnção para levar dados preenchidos para o model realizar o cadastro
    salveproduto: (req,res) => {
      const {nome, descrição, preço, quantidade, categoria} = req.body
      produtosModel.guardar({nome, descrição, preço, quantidade, categoria})
      res.render("listagem")
    },
    // R
    //Função Mostrar os usuarios
    listaprodutos: (req,res) => {
      const AProdutos = produtosModel.listarGeral()
      res.json(AProdutos);
      //res.render("Usuarios",{ usuarios })
    },
    //Função Mostrar so um usuario
    //Req sempre vem primeiro e res depois
    buscaprodutos: (req,res) => {
      //Buscar id vindo de url como parametro
      const id = req.params.id

      //Guardar o usuario retornado, depois de buscar pelo model
      const oProdutos = produtosModel.buscarPorId(id)
      //se não achar, avisa que deu erro
      if(!oProdutos){
        return res.status(404).json({mensagem: "produtos não encontrado"})
      }
      //se achar, devolve as informações via json
      res.json(oProdutos)
    },
    //Função para atualizar informações de um usuario
    atualizaProdutos: (req,res) => {
       //Buscar id vindo de url como parametro
      const id = req.params.id;
      //Buscar as novas informações para atualizar 
      const {nome, descrição, preço, quantidade, categoria} = req.body
       //Guarda o usuario atualizado numa variavel 
      const produtoAtualizado = produtosModel.Renovar(id, {nome, descrição, preço, quantidade, categoria})

      //se não achar, avisa que deu erro
      if(!produtoAtualizado){
        return res.status(404).json({mensagem: "Produto não encontrado"})
      }
      //se atualizar, manda uma mensagem dizendo que deu certo 
      res.json({mensagem: "Produto foi atualizado"})
    },
    // Função para deletar um usuario 
    deleteProduto: (req,res) => {
          //Buscar id vindo de url como parametro
      const id = req.params.id;

      const apagado = produtosModel.deletar(id)

       if(!apagado){
        return res.status(404).json({mensagem: "Produto não encontrado"})
      }
      //se atualizar, manda uma mensagem dizendo que deu certo 
      res.json({mensagem: "Produto foi deletado"})
    }
}
