const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] // LISTA DE PILOTOS PARA UMA CORRIDA
 
pilotos.pop() // elimina o ultimo item da lista. No caso o Massa
console.log(pilotos) 

pilotos.push('Verstappen') // adicina um elemteno para o final do array 
console.log(pilotos)

pilotos.shift() // remove o primeiro item da lista ou seja o primeiro indice do array;  No caso o Vettel
console.log(pilotos)

pilotos.unshift('Hammilton') // adiciona item para a posição 0 da lista de array 
console.log(pilotos)

//  SPLICE PARA ADICIONAR E REMOVER ELEMTENOS NO ARRAY
console.log('')
console.log('SPLICE PARA ADICIONAR E REMOVER ELEMENTOS NO ARRAY')
console.log('')

//adicionar 
console.log('')
console.log('ADICIONAR')
console.log('')

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
console.log('')
console.log('')

console.log('REMOVER')
console.log('')

pilotos.splice(3, 1) // massa saiu
console.log(pilotos)

// METODO SLICE
console.log('')
console.log('')

console.log('SLICE')
console.log('')

const algunsPilotos = pilotos.slice(2) // remove a partir do 
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)