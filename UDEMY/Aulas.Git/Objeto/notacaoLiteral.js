const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b , c: c} //  essa notação permite que vc mude o valor do atributo 
const obj2 = { a,b,c}
console.log(obj1, obj2)

const nomeAtr= 'nota'
const valorAtr = 7.9
const obj3 = {}
obj3[nomeAtr] = valorAtr
console.log(obj3)

const obj4 = {[nomeAtr]: valorAtr}
console.log(obj4)

const obj5 = {
    // adicionar várias funções
}