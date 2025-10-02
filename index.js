const express = require('express')

const app = express('')

// Porta
const port = 5000

const path = require('path')
const caminho = path.join(__dirname, "views")

// Importações
// Importa as rotas de usuário
const userRoutes = require("./routes/userRoutes")
const produtosRoutes = require("./routes/produtosRoutes")

// Interpretador de json, pra tratar as informações do body
app.use(express.urlencoded({extende:true}))
app.use(express.json())

// Cria uma rota principal para as sub rotas de usuário
app.use("/usuarios", userRoutes)
app.use("/produtos", produtosRoutes)

//Definindo o ejs como template engine
app.set('view engine', 'ejs')

// Definindo 'atalho' onde buscar as views
app.set("views", path.join(__dirname, "views"))

//pagina home do site ligação com java e index
app.get("/home", (req,res) => {
    res.status(200).render("index",{ titulo: "pagina inicial"})

})

// Rota inicial do projeto
app.get("/", (req,res) => {
    res.status(200).render("index", { titulo: "pagina inicial"})
} )


// Rota pra quando tentar acessar uma rota que não existe
app.use((req,res) => {
    res.status(404)
    res.render("404",{ titulo: "pagina de erro"})
})

// Subir o servidor
app.listen(port, () => {
    console.log(`Servidor funcionando em http://localhost:${port}`)
})
