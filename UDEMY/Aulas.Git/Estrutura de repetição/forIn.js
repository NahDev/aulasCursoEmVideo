const notas = [ 6.7,5.6,5.4,7.8,6.5]

for( i in notas){
    console.log( i , notas[i])
}
const pessoa = {
    nome: 'Ana',
    SobreNome: 'Silva',
    Idade:'29',
    peso: 64
}
for(atributo in pessoa){
    console.log (`${atributo} = ${pessoa[atributo]}`)
}