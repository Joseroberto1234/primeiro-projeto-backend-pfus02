 // Importar o json para servir como banco de dados
const { urlencoded } = require("express");
const db = require("../data/db.json")

// Variavel pra armazenar os usuários vindos do db 
let listaproduto = db.produtos

module.exports = {

    
    // CRUD
    // Função para cadastrar um novo usuario
    salve: ({ nome,  descricao, preco, quantidade, categoria, imagem}) => {
        const novoProduto= {
            id: listaproduto.length + 1,
           nome,
           descricao,
           preco, 
           quantidade, 
           categoria,
           imagem,
        
        }
        listaproduto.push(novoProduto)
        console.log("Novo produto salvo:", novoProduto);
        return novoProduto

    },
    // Busca todos os usuários do banco
    listarGeral : () => {
        return listaproduto
    },
    buscarPorId: (id) => {
        return listaproduto.find((produto) => produto.id == id || null)
    },

    Renovar: (id, { nome, descricao, preco, quantidade, categoria, imagem,}) => {
        // Busca nna lista de usuarios, um produto com aquele id especifico, se achar, pega index dele e guarda na variavel index
        const index = listaproduto.findIndex((produto) => produto.id == id)
        // Se achar um usuario, substitui as informações que estava nele, pelas novas emviadas
        if (index === -1) return null

        listaproduto[index] = {
            ...listaproduto[index],
           nome : nome || listaproduto[index].nome,
           descricao: descricao || listaproduto[index].descricao,
           preco: preco || listaproduto[index].preco,
           quantidade: quantidade || listaproduto[index].quantidade,
           categoria: categoria || listaproduto[index].categoria,
           imagem: imagem || listaproduto[index].imagem,
            
            
        
        };
        //Retorna o usuario atualizado
        return listaproduto[index];
    },
    deletar: (id) => {
        const index = listaproduto.findIndex((user) => user.id == id);
        if (index === -1) return false;
        listaproduto.splice(index, 1);
        return true;
    },
};
