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

// Inserindo elementos no final de um array
frutas.push("Amora", "Jaca") // Pode inserir mais de um elemento ao mesmo tempo
console.log(frutas)

frutas.unshift("jabuticaba") // Também pode inserir mais de um elemento ao mesmo tempo
console.log(frutas)

// Inserção no meio do vetor
// Parâmetros do splice() para inserção
// 1º -> posição para inserção
// 2º -> nº de elementos a serem excluídos (para inserção usa-se 0)
// 3º -> elementos que serão inseridos
frutas.splice(2, 0, "pessêgo")
console.log(frutas)

// Usando splice() para substituição
// Parâmetros: 
// 1º -> posição para substituição
// 2º -> quantidade de elementos que serão excluidos(para substituição, 1)
// 3º -> o elemento que será incluido no lugar
frutas.splice(6, 1, "ameixa")
console.table(frutas)

console.log("-----------------------------------------------")
// ***********   PERCURSOS DE VETOR **************

// 1) Percurso com for tradicional
for (let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i])
}

console.log("-----------------------------------------------")

// 2) For tradicional, em ordem inversa
for (let i = frutas.length - 1; i >= 0; i--) {
    console.log(i, frutas[i])
} 

console.log("-----------------------------------------------")

// 3) Percurso com for of
// a) Sempre percorre o vetor inteiro, na ordem natural, sem necessidadee de uma variável contadora
// Variaveis: 
// f -> variável que receberá cada elemento do vetor (pode ser qualquer nome válido de variável)
// frutas -> é o vetor a ser percorrido
for(let f of frutas) {
    console.log(f)
}

console.log("-----------------------------------------------")

// 4) Percurso com forEach()
// ele recebe como parâmetro a função que recebe como parâmetro cada elemento do vetor
// O nome do parâmetro da função pode ser qualquer nome válido de identificador
frutas.forEach(function(elemento) {
    console.log(elemento)
})

console.log("-----------------------------------------------")

// Usando arrow function como parâmetro
frutas.forEach((elemento) => console.log(elemento))