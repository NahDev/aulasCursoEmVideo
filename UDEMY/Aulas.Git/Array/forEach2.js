Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length;i++){
        callback(this[i], i, this);
    }
}
const aprovados = ['Nahuan', 'Heitor', 'Cleusa', 'Paulo'] 
aprovados.sort() // organiza os nomes alfabeticamente

aprovados.forEach2(function(nome, indice){  // nessa function o primeiro param pe o elemteno e o segundo o numero do indice do elemento 
    console.log(`${indice + 1})  ${nome}`) 
})
