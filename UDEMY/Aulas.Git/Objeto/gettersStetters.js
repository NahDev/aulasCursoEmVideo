const sequencia = {
    _valor: 1, // o underline é uma convensao que mostra que o acesso apenas dentro do valor da variável
    get valor() {return this._valor++ },
    set valor(valor) {
        if (valor > this.valor){
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000 
console.log( sequencia.valor,  sequencia.valor)

sequencia.valor = 900   /// devido a validade feita em 'if ' o programa não vai ter um valor menor que o ultimo 'valor'
console.log(sequencia.valor, sequencia.valor)