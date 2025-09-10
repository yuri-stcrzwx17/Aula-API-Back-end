

//1º Passo - importar o userModel
const userModel = require('../model/userModel');
const { use } = require('../routes/userRoutes');

//Função do controller que lista os usuários
const getAllUsers = (req, res) => {
    //Chamando a função findAll do model
    const users = userModel.findAll();

    //Devorver uma resposta para o cliente
    res.status(200).json(users);
};

//Função do controller que obtem um usuario por ID
const getUserById = (req, res) => {

    //Pegando o Id que foi enviado na requisição
    const id = parseInt(req.params.id);

    //Chamar o metodo findById do userModel
    const user = userModel.findById(id);

    if(user){
        //Responder com status code 200 (sucesso)
        //e devolver os dados do usuario em formato json
        res.status(200).json(user);
    }
    else{
        res.status(404).json({mensagem: 'Usuário não encontrado!'})
    }
}

//Função do controlador que cria um novo usuário
const createUser = (req, res) => {

    //Pegando os dados que foram enviados pelo Body da requisição
    const {name, email} = req.body;

    //Validar se os valores foram enviados
    if(!name || !email){
        return res.status(400).json({mensagem: 'Nome e email são Obrigatórios'})
    }
    else{
        const newUser = userModel.create({name,email})
        res.status(201).json(newUser);
    }
}

//Função do controlador que deleta um usuário
const deleteUser = (req, res) => {
     
    const id = parseInt(req.params.id);

    //Excluir o usuário e retornar
    const deleteUser = userModel.deleteUser(id);

    if(deleteUser){
        res.status(200).json(deleteUser);
    }else{
        res.status(400).json({mensagem: 'Informe o id do usuário corretamente'})
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
}
