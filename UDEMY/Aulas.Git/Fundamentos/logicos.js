// aplicativo onde caso o meu trablho de freelancer derem certos eu vou comprar umma tv 
// caso nenhum serviço seja feito eu compro coisas saudáveis
function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2

    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unitário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}
console.log(compras(true,false))
console.log(compras(true,true))
console.log(compras(false,true))
console.log(compras(false,false))