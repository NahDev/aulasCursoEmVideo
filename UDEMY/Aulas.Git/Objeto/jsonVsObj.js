const obj = {a: 1, b: 2, c:3, soma(){return a + b + c}}
console.log(JSON.stringify(obj))


//console.log( JSON.parse("{a:1,b:2,c:3}")) // dá erro pois não é um formato JSON valido 

console.log(JSON.parse("{'a':1,'b':2,'c':3}")) // precisa abrir o formato com aspas duplas
console.log(JSON.parse('{"a":1,"b":2,"c":3}')) 

console.log(JSON.parse('{"a": 1.3, "b": "string", "c": true, "d":{}, "e":[]}')) // JSON suporte diversos formatos de dados e poderá carregar estes dados para outras liguagens

 
