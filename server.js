
// importar o modulo do express
const express = require('express')

//importar o arquivo das notas do usuario
const userRoutes = require('../api-usuario/src/routes/useRoutes')

// Criar uma aplicação express
const app = express()

//definir a porta em que o sarvidor irá funcionar (execultar)
const porta = 8000

//rota de teste API
app.get('/api',(req, res) => {
    res.send('API de funcionarios funcionando')
})

//configurando as rotas de ususarios 
app.use('/api/users', userRoutes)

//iniciar o servidor 
app.listen(porta, () => {
    console.log(`servidor rodando em https://localhost:'${porta}`);
})