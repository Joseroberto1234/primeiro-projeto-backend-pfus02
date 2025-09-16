const express = require('express')

const app = express('')

// Porta
const port = 5000

const path = require('path')
const caminho = path.join(__dirname, "views")


app.get("/home", (req,res) => {
    res.status(200)
    res.sendFile(`${caminho}/index.html`)
})

app.get("/pokemon", (req,res) => {
    res.status(200)
    res.sand("Charizard")

})

app.use((req,res) => {
    res.status(404)
    res.sendFile(`${caminho}/404.html`)
})

// Mensagem de texto no chrome
app.get("/", (req,res) => {
    res.status(200).send("Olá, parábens conseguiu")
})


// Mensagem no terminal
app.listen(port, () => {
    console.log(`Servidor funcionando em http://localhost:${port}`)
})

