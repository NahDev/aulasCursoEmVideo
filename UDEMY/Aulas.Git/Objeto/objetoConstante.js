const pessoa  = { nome: 'joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa) /// não permite alterações 

pessoa.nome ='Maria'
pessoa.endereco = 'rua ABC' // Não permite nem adicionar novos atributos

delete pessoa.nome // comm FREEZE não é possivel deletar elementos.

console.log(pessoa.nome)
console.log(pessoa)