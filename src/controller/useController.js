//1° passo - inportar o userModel
const userModel = require('../model/userModel')

// função do controler que lista os usuarios 
const getAllUsers = (req, res) => {

    //chamando a função findAll do model
    const users = userModel.findAll()
    
    //devolver uma resposta para o cliente 
    res.status(200).json(users)

}

module.exports = {
    getAllUsers
}