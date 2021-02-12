let frutas = ["maçã", "pera", "banana", "uva", "mamão", "ameixa"]

// Vetor original
console.log(frutas)

// Retirar o ultimo elemento de um vetor
let ultimaFruta = frutas.pop()

// Vetor alterado
console.log(frutas)
console.log(ultimaFruta)

// Remoção do primeiro elemento do vetor
let primeiraFruta = frutas.shift() // SEMPRE retornará um vetor 

console.log(frutas)
console.log(primeiraFruta)

// Remoção em posição intermediária
let terceiraFruta = frutas.splice(2, 1)

console.log(frutas)
console.log(terceiraFruta)