const imprimirResultados = function(nota){
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra') // a consição do codigo entra diretamente para ca no caso de 10 ou no caso de 9
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5:
            console.log('Recuperação')
            break 
        case 4: case 3: case 2: case 1: case 0:
            console.log('Reprovado')                   
            break
        default:
            console.log('Nota Invalida')                
    }   
}


// para que o comportamento do Javascript comporte-se de forma que o case seja executado e saia do switch ... com isso o codigo fica mais rápido em ser executado
// veja


