

//simulação de um banco de dados em memoria
let users =[
    {id: 1, name: 'Alice', email:'Alice@gmail.com' },
    {id: 2, name: 'roberto', email: 'roberto@gmail.com' },
    {id: 3, name: 'jose', email: 'jose@gmail.com' }
]

//Funções que irão simular integração com o bando de dados 

//função que lista tds os usuarios (comando Select)
const findAll = () => {
    return users
}

//
const findById = (id) => {
    return users.find(user => user.id === id)
}

//função para add um nv useuario
const create = () => {
    //geramdo o id do proximo item (usuario)
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1

    // criando um nv usuario com id novo
    const userWithId = {id: newId, ...newUser}

    //adicionar o userWithId no array user 
    users.push(userWithId)

    //retornar o usuario cadastro
    return userWithId
}

module.exports = {
    findAll,
    findById,
    create
}