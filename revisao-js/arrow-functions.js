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