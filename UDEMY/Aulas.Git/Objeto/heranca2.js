const avo = {att1: 'A'}
const pai = {__proto__: avo, att2: 'B', att3: '3'}
const filho = {__proto__: avo, att3: 'C'}

console.log(filho.att1 ) /// ele não acha o atributo no filho e acha no avo 
console.log(filho.att0 ) 
console.log(filho.att3 )  /// mascarao numero 3 

const carro ={
    velAtual: 0,
    velMax: 200,
    acelerarMais (delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual +=delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return`${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}
const ferrari = {
    modelo: 'F40',
    velMax: 320 // sombreamento ou shadowing 
}
const volvo = {
    modelo:'V40',
    status(){
        return`${this.modelo}: ${super.status()}` //Explicação de "Super" para referenciar o prototypo sombreando a funcao status e o fato que ele vai usar this.modelo e o super e como eu quero que ele chame o metodo do meu prototipo eu uso o super

    }
}

Object.setPrototypeOf(ferrari, carro)  /// junto o objeto com o prototype

Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())