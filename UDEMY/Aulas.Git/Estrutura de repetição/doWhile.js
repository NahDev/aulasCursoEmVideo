function getInteiroAleatorio (min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

let opcao = -1

do{ 
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)

}while (opcao != -1)

console.log('Até a Proxima') 



//////// estrutura do While testa o bloco no final
// se lê: faça o bloco enquanto opcao for diferente de -1