
// Importar o módulo do Express
const express = require('express');

//Importar o arquivo das rotas do usuário
const userRoutes = require('./src/routes/useRoutes');

//Criar uma aplicação express
const app = express();

//Definir para que o express analise JSON no corpo das requisições
app.use(express.json());

//Definir a porta em que o servidor irá funcionar (escutar)
const porta = 8000;

//Rota de Teste da API
app.get('/api', (req, res) => {
    res.send("API de Usuários está Funcionando")
});

//Configurando as rotas de usuário
app.use('/api/users', userRoutes)

//Iniciar o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
});