/// usando a notação literal  (diferente de JSON)
const nomeObjeto = {}
console.log(nomeObjeto)

// Object em JS 

console.log(typeof Object, typeof new Object)

const nomeObjeto2 = new Object
console.log(nomeObjeto2)  /// foi criado da mesma maneira que o nomeObjeto porem com função construtara


// Funcao Contrutora 
function Produto(nome,preco,desc){
    this.nome = nome /// torna algo publico podendo ser alterado publicamente
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)

    }
} 

const p1 = new Produto('coneta', 10.1, 0.15)
const p2 = new Produto('Notebook', 2999.90, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// FUNÇAO FACTORY
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30)*(30 - faltas)
        }
    }
}const f1 = criarFuncionario('Joao', 2000, 4)
const f2 = criarFuncionario('Maria', 2000, 1)
console.log(f1.getSalario(), f2.getSalario())


// OBJECT.CREATE
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

// uma funcao  famosa  que retorna Objeto
const fromJSON = JSON.parse( '{"info": "sou um JSON"}')
console.log(fromJSON) 