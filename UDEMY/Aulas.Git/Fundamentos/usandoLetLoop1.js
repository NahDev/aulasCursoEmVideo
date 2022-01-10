const funcs = []
    for (let i = 0; i < 10; i++){ // SIMPLES FATO DE MUDAR DE VAR PARA LET ALTERA A CONSTANTEN FUNCS NO FINAL DO CODIGO SPOI LET TEM O COMPORTAMENTO GLOBAL E DE BLOCO 
    funcs.push(function (){
        console.log(i)
})
}
funcs[2]()
funcs[8]()