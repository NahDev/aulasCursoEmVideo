/// desestruturaçao de dados 

const pessoa = {
    nome: 'Ana',
    idade:5,
    endereco: {
        logradouro: 'Rua Abc',
        numero:800
    }

}

const { nome, idade } = pessoa; // o uso de chave informa que os objetos possam ser retirados da estrutura.
console.log(nome.idade) // idade ficam undefined

const { nome: n, idade: i } = pessoa;
console.log(n,i)

const {sobrenome, bemHumorada = true} = pessoa //// sem inucialização do destructuring pois nõpa há elementos
console.log(sobrenome, bemHumorada)