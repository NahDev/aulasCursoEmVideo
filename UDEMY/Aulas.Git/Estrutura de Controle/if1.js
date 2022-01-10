function soBoaNoticia (nota){
    if(nota >= 7){
        console.log('Aprovado com ...' + nota)
    }
}
soBoaNoticia(9)
soBoaNoticia(3)

// o javascript exige um valor entre verdaade ou falso : isso é a base do javascript 

function seForVerdade(valor){
    if(valor){
        console.log('E verdade...' + valor )
    }
}


seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade()