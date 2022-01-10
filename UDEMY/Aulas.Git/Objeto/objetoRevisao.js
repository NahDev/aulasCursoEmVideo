// coleçao dinamica de pares chave/valor

const produto = new Object 
produto.nome = 'Cadeira';
produto['Marca'] = 'Generica'
produto.preco= 220 

console.log(produto)
delete produto.preco
delete produto['Marca']

console.log(produto)

const carro = {
    valor: 90000,
    modelo: 'a4',
    dono: 'Nahuan',
    endereco: {
        logradouro: 'rua abc',
        numero: 123
    },
    condutor: [{
        nome: 'Junior',
        idade:19
    },{
        nome: 'Ana',
        idade: 20
    }],
    calcularValorSeguro: function(){
        //..
    }
}

carro.endereco.numero = 1000 /// acessando elemento com a conotação ponto 
carro['endereco']['logradouro'] = 'Av. Gigante'/// acessadno e modificando os elementos com chave etringue (é mais verboza)
console.log(carro)

// DELETANDO ELEMENTOS
//delete carro.condutor linha comentada para a funçao lenght funcionar
delete carro.dono
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutor) // undefined
console.log(carro.condutor.length)