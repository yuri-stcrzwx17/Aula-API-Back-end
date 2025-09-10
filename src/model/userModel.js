// Simulação de um banco de dados em memória
let users = [
    {id: 1, name: 'Alice', email: 'alice@gmail.com'},
    {id: 2, name: 'Roberto', email: 'roberto@gmail.com'},
    {id: 3, name: 'Josué', email: 'josue@gmail.com'}
];

//Funções que irão simular integração com o banco de dados

//Função que lista todos os usuários (Comando Select)
const findAll = () => {
    return users;
};

//Função que busca um usuário por ID (Comando Select * from usuario where id = 1)
const findById = (id) => {
    return users.find(user => user.id === id);
};

//Função para adicionar um novo usuário (Comando Insert)
const create = (newUser) => {
    //Gerando o id do próximo item (usuário)
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    //Criando um novo usuário com o id novo
    const userWithId = {id: newId, ...newUser};

    //Adicionar o userWithId no array users
    users.push(userWithId);

    //Retornar o usuário cadastrado
    return userWithId;
};

//Função para deletar um usuário
const deleteUser = (id) => {

    //Descobrir o index do elemento para excluir
    const index = users.findIndex(user => user.id === id);

    if(index !== -1){
        const [deleteUser] = users.splice(index,1);
        return deleteUser
    }

    return null;
}

//função para atualizar dados de um usuario

const updateUser = (dataUser) => {
    
    //Descobrir o index do elemento para excluir
    const index = users.findIndex(user => user.id === dataUser.id)

    //alterando os dados 
    users[index] = dataUser

    return users[index]

}

module.exports = {
    findAll,
    findById,
    create,
    deleteUser,
    updateUser
}
