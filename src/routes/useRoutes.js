//1º Passo - importar o express
const express = require('express')

//2º Passo - criar um router e importar o controller de usuário
const router = express.Router();
const userController = require('../controller/userController');


// 3º Passo - Criar as Rotas  dos Usuários
router.get('/list', userController.getAllUsers);

//Criando a rota que ira Obter os dados do usuário por id
//localhost:8000/api/user/
router.get('/:id', userController.getUserById);

//Criando uma rota que ira Criar um novo usuario
//localhost:8000/api/user/
router.post('/', userController.createUser);

//Criando uma rota que ira Deletar um usuário
//localhost:8000/api/user/1
router.delete('/:id', userController.deleteUser)

module.exports = router;