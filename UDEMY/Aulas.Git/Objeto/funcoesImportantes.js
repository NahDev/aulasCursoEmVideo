const pessoa = {
    nome: 'Rebecca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa)) /// pega apenas as chaves (atributos)
console.log('______________')
console.log(Object.values(pessoa)) // pega apenas os valors de cada atributo (chaves)
console.log('______________')
console.log(Object.entries(pessoa)) // cada elemento vira um array
console.log('______________')

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)  
})

Object.defineProperty(pessoas, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
} ) //  chama a funcao para definir auma propriedade 
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))