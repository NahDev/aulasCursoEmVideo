let preco = 177.90;
let desconto = 0.13;

let precoComDesconto = preco * (1-desconto);
let precoDesconto  = preco - precoComDesconto;

console.log(precoComDesconto);
console.log(precoDesconto);

let produto = "Caderno";
let categoria = "Papelaria";

console.log(
    "Produto: " + produto
    +", Categoria: " + categoria
    + ", Preco: " + preco
    + ", Desconto: " + desconto
);