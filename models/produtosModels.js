 // Importar o json para servir como banco de dados
const db = require("../data/db.json")

// Variavel pra armazenar os usuários vindos do db 
let listaproduto = db.produto

module.exports = {

    
    // CRUD
    // Função para cadastrar um novo usuario
    guardar: ({ nome,  descrição, preço, quantidade, categoria }) => {
        const novoProduto= {
            id: listaproduto.length + 1,
           nome,
           descrição,
           preço, 
           quantidade, 
           categoria
        
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

    Renovar: (id, { nome, descricao, preco, quantidade, categoria }) => {
        // Busca nna lista de usuarios, um produto com aquele id especifico, se achar, pega index dele e guarda na variavel index
        const index = listaproduto.findIndex((produto) => produto.id == id)
        // Se achar um usuario, substitui as informações que estava nele, pelas novas emviadas
        if (index === -1) return null

        listaproduto[index] = {
            ...listaproduto[index],
            listaproduto: nome || listaproduto[index].nome,
            listaproduto: descricao || listaproduto[index].descricao,
            listaproduto: preco || listaproduto[index].preco,
            listaproduto: quantidade || listaproduto[index].qunatidade,
            listaproduto: categoria || listaproduto[index].categoria 
        
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
