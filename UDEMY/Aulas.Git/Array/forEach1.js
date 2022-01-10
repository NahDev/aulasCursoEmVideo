const aprovados = ['Nahuan', 'Heitor', 'Cleusa', 'Paulo'] 
aprovados.sort() // organiza os nomes alfabeticamente

aprovados.forEach(function(nome, indice){  // nessa function o primeiro param pe o elemteno e o segundo o numero do indice do elemento 
    console.log(`${indice + 1})  ${nome}`) 
})

/// imprimir/ exibir os nomes sem os indices 

aprovados.forEach(nome => console.log(nome))

console.log()
console.log()

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)