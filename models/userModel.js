// Importar o json para servir como banco de dados
const db = require("../data/db.json")

// Variavel pra armazenar os usuários vindos do db 
let listaUsuarios = db.usuarios

module.exports = {
    // LOGIN  
    // Função para válidar o login
    login: (email, senha) => {
        // Busca na lista de usuários, se tem aquele usuário com as informações que ele me passou
       let logado = listaUsuarios.find(
            (user) => user.email == email && user.senha == senha) || null

        return logado;
    },
    // CRUD
    // Função para cadastrar um novo usuario
    salvar: ({ usuario, email, senha, tipo }) => {
        const novoUsuario = {
            id: listaUsuarios.length + 1,
            usuario,
            email,
            senha,
            tipo
        }
        listaUsuarios.push(novoUsuario)
        console.log("Novo usuário salvo:", novoUsuario);
        return novoUsuario;
    },
    
    // Busca todos os usuários do banco
    listarTodos: () => {
        return listaUsuarios
    },
    buscarPorId: (id) => {
        return listaUsuarios.find((user) => user.id == id || null)
    },

    atualizar: (id, { usuario, email, senha }) => {
        // Busca nna lista de usuarios, um usuario com aquele id especifico, se achar, pega index dele e guarda na variavel index
        const index = listaUsuarios.findIndex((user) => user.id == id)
        // Se achar um usuario, substitui as informações que estava nele, pelas novas emviadas
        if (index === -1) return null

        listaUsuarios[index] = {
            ...listaUsuarios[index],
            listaUsuarios: usuario || listaUsuarios[index].usuario,
            listaUsuarios: email || listaUsuarios[index].email,
            listaUsuarios: senha || listaUsuarios[index].senha,

        };
        //Retorna o usuario atualizado
        return listaUsuarios[index];
    },
    deletar: (id) => {
        const index = listaUsuarios.findIndex((user) => user.id == id);
        if (index === -1) return false;
        listaUsuarios.splice(index, 1);
        return true;
    },
};
