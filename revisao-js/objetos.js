// Objetos são estruturas que permitem armazenar diversos valores em uma variável, permitindo acessá-los por meio de um nome

// Criação de um objeto vazio
let vazio1 = {} // Forma moderna
let vazio2 = new Object() // Forma antiga

// Criando um objeto já com dados
let pessoa = {
    nome: "Igor Gomes Firmino",
    sexo: "M",
    dataNasc: "08-12-1993",
    profissao: "Desenvolvedor",
    // nome da propriedade pode ter espaços ou acento
    // Nesse caso, o nome da propriedade precisa estar entre aspas
    'Cidade de Origem': 'Franca/SP',
    gostos: ['flamengo', 'séries', 'cerveja']
}
console.table(pessoa)


// Exibindo apenas o valor de uma propriedade
console.log(pessoa.nome)
console.log(pessoa.profissao)
console.log(pessoa.gostos[0])
console.log(pessoa['Cidade de Origem'])
console.log(pessoa.gostos)

// A sintaxe dos colchetes sempre funciona
console.log(pessoa['nome'])
console.log(pessoa['gostos'][0])

// Outra consequência dos colchetes é a possibilidade de usar nomes de propriedades que estão dentro de variáveis
let x = 'sexo'
console.log(pessoa[x])
x = 'dataNasc'
console.log(pessoa[x])

// Criando uma nova propriedade para um objeto já existente
// Basta atribuir um valor a um nome de propriedade ainda não existente
pessoa.email = "igorgmsf@gmail.com"
pessoa.celular = "(16) 99395-9629"
console.log(pessoa.celular)

// Criando um objeto vazio e só depois adicionando propriedades
let carro = {}
carro.marca = "Wolkswagen"
carro.modelo = "Gol"
carro.ano = 2016
carro['combustível'] = 'Flex'
carro.cor = 'Branco'

console.table(carro)

// Excluindo uma propriedade de um objeto
delete carro.cor

console.log(carro)
console.log('-------------------------------')

// Exibindo todas as propriedades de um objeto
// for...in determina quais as propriedades de um objeto e coloca cada uma delas em uma variável informada pelo usuário
// (p, no caso) e cada iteração do loop
for (let p in pessoa) {
    console.log(p)
}

console.log('-------------------------------')

for (let p in carro) {
    console.log(p)
}

// for..in para listar propriedades e valores de um objeto
for (let atrib in pessoa) {
    console.log(atrib + ' -> ' + pessoa[atrib])
}
