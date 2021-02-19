// Função que eleva um numero ao quadrado
// Se precisar em uma situação real, use Math.pow() ou o operador **
function quadrado(n) {
    return n * n
}
console.log(quadrado(9))

// Caracteristicas da função acima
// 1) Apenas um parâmetro
// 2) Apenas uma linha de código, com return
// 3) CANDIDATA PERFEITA PARA VIRAR UMA ARROW FUNCTION

// Transformando em arrow function
let quadrado2 = n => n * n;
console.log(quadrado2(9))

// Função com mais de um parâmetro
function potencia(b, e) { // b = base, e = expoente
    return b ** e
}

console.log("função normal", potencia(2, 8))

// Função equivalente no formato arrow function
var potencia2 = (b, e) => b ** e

console.log("arrow function", potencia2(2, 8))

// Função sem parâmetro
function megaSena() {
    // Esta função retorna um número aleatório entre 0 e 1
    // Math.random -> retorna um número aleatório entre 0(inclusive) e 1(exclusive)
    return Math.floor(Math.random() * 60 + 1)
}

console.log(megaSena(), megaSena(), megaSena(), megaSena(), megaSena(), megaSena())

// Quando a função não tem argumentos, na arrow function é necessário deixar entre parênteses vazios para marcar seu lugar
const megaSena2 = () => Math.floor(Math.random() * 60 + 1)

for (i = 0; i < 6; i++) {
    console.log(megaSena2())
}


// Função com mais de uma linha no corpo
function somaVet(vet) {
    let soma = 0
    for (let n of vet) {
        soma += n
    }
    return soma
}
console.log("soma vet", somaVet([12, 42, -11, 20, 9, 16]))

// Quando a função tem mais de uma linha de código, na arrow function equivalente retornam as chaves e também a palavra return, caso ela retorne valor
const somaVet2 = vet => {
    let soma = 0
    for (let n of vet) soma += n
    return soma                 
}

console.log("somavet2", somaVet2([12, 42, -11, 20, 9, 16]))

// CONCLUSÃO: só vale a pena usar arrow function se a função tiver apenas uma linha