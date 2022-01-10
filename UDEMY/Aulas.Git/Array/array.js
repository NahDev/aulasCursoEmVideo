// ARRAY EM JS É OBJETO // UMA ESTRUTYURA DIFERENTE

console.log(typeof Array, typeof new Array, typeof [])  // [] quer dizer valor literal 

/// NÃO HÁ RESTRIÇÃO PARA SE TRABALHAR COM TIPO DE PROJETO POR ISSO É SDEMPRE IMPORTANTE SIMPLIFICAR E TRABLHAR COM 
// DADOS HOMOGÊNIOS : EX UM, ARRAY SO PARA CLIENTE, UM ARRAY SÓ BOOLLEAN  ETC


let aprovados = new Array ('Bia', 'Carlos', 'Ana')

console.log(aprovados)


console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])


// adicionar um array novvo um lnovo elemento 

aprovados[3] ='Paulo'

aprovados.push('Abia') ///  adicionando novo elemento usando o metodo push

console.log( aprovados.length)

aprovados[9] = 'Rafael'  /// cria novo elemento na posição 10
console.log(aprovados.length) 
console.log( aprovados[8 === undefined])

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[2]  // deletando um, elementeo usando o indice
console.log(aprovados[1])
console.log(aprovados[2])// gera undefined pois não é substitudo 

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice( 1, 1) // primeiro parametro é o indice que eu quero trabalhar e o segundo  é quando elementos serão excluido apos o indice excluido
/// e para adicionar um elemento junto a exclusão dos elementos
//aprovados.splice( 1, 1, 'Elemtento1', 'Elemteo 2')


