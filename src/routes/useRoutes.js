
//1 passo - inportar o express
const express = require('express')

//2 passo - criar uma router e importar o controlador
const router = express.Router()
const useContrller = require('../controller/useController')

//3 passo - criar as rotas dos usuarios
router.get('/list', useContrller.getAllUsers)

module.exports = router