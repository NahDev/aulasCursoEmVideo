const pai = { nome: 'pedro', corCabelo:'preto'}
const filha1 = Object.create(pai) /// filhas herma nome e cor do cabelo
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true} // troca do nome
})

console.log(filha2.nome)

filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}` )
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


for (let key in filha2 ){
    filha2.hasOwnProperty(key)?
    console.log(key) : console.log(`Por herança: ${key}`)
}