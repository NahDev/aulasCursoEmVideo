/// escolha de numero aleatorio

function rand([min =0, max=1000]){
    if (min>max) [min, max] = [ max, min] 
    const valor = Math.random() * (max - min) + min/// essa estrutura basicamente quando o max for maior que o min ele troca os valores do array conforme respectiva posição 
    return Math.floor(valor)
}

console.log(rand([60,100]))

console.log(rand([200])) // somente o primeiro o atibuto e na verdade vai passsar pelo teste 
console.log(rand([,100])) // somente o segundo atrubuto sera atribuido a min, no caso.