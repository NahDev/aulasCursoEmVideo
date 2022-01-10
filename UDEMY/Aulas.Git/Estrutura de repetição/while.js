function getInteiroAleatorio (min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){ // se Le: enquando opcap for diferente de -1 faça {}
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)

}

console.log('Até a Proxima') /// quando o programa "imprimir" -1 ele sai do laçõ e imprimi "Até a Proxima"


/// while interpresa verdadeiro e falso e é usada quando não se sabe o numero determinado de repetições