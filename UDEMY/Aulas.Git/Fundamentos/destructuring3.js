///diferença entre 

// valores randomicos 

function rand ({min = 0, max = 1000}){
    const valor = Math.random() * (max - min ) + min;
    return Math.floor(valor)
}
const obj = { max: 50, min : 40}
console.log(rand(obj)) // juntando a funçao rand com a constante obj ... isso randomizara os valores que forem passados em max e min