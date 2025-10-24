// Importa o módulo path (para manipular caminhos de arquivos)
const path = require("path");

// Importa o model de produtos
const produtosModel = require("../models/produtosModels");

module.exports = {

  // Mostra a tela de cadastro
  Cadastrarproduto: (req, res) => {
    res.render("produtos/cadastroProdutos", { titulo: "Cadastro" });
  },

  // Salva o produto no model
  salveproduto: (req, res) => {
    const { nome, descricao, preco, quantidade, categoria, imagem, tipo } = req.body;


    const produtoNovo = produtosModel.salve({
      nome,
      descricao,
      preco,
      quantidade,
      categoria,
      imagem,
      tipo
    });

    res.render("produtos/confirmacaoProduto", {
      tipo: "cadastro",
      titulo: "Cadastro confirmado",
      produtoNovo
    });
  },


  listaprodutos: (req, res) => {
    const produtos = produtosModel.listarGeral();
    res.render("produtos/listaprodutos", {
      produtos,
      titulo: "Lista de produtos"
    });
  },


  buscaprodutos: (req, res) => {
    const id = req.params.id;

    // Busca produto pelo ID
    const produto = produtosModel.buscarPorId(id);

    // Se não encontrar, retorna erro
    if (!produto) {
      return res.status(404).render("produtos/erroProdutos", {
        titulo: "Erro",
        mensagem: "Produto não encontrado"
      });
    }

    // Se encontrar, renderiza a view de edição
    res.render("produtos/editarprodutos", {
      titulo: "Editar Produto",
      produto
    });
  },


  atualizaProdutos: (req, res) => {
    const id = req.params.id;
    const { nome, descricao, preco, quantidade, categoria, imagem } = req.body;

    const produtoAtualizado = produtosModel.Renovar(id, {
      nome,
      descricao,
      preco,
      quantidade,
      categoria,
      imagem
    });

    if (!produtoAtualizado) {
      return res.status(404).render("produtos/erroProdutos", {
        titulo: "Erro",
        mensagem: "Produto não encontrado para atualização"
      });
    }

    res.render("produtos/confirmacaoProduto", {
      titulo: "Edição confirmada",
      tipo: "edicao",
      produtoAtualizado
    });
  },

  deleteProduto: (req, res) => {
    const id = req.params.id;
    const deletado = produtosModel.deletar(id);

    if (!deletado) {
      return res.status(404).render("produtos/erroProdutos",{
        titulo: "Erro",
        mensagem: "Não foi possivel deletar"
      })
    }
  // se deletar, manda uma mensagem dizendo que deu certo
    res.render("produtos/confirmacaoProduto",{
      titulo: "Deletado",
      tipo: "deletar",
      deletado
    })
  },
};
