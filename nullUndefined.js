let valor // não inicializa não atribui
console.log(valor) // Undefined
//console.log(valor2) // is not defined diferente de undefined

valor = null // Ausência de valor
console.log(valor)

// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) // Produto definido, mas o preço não
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // EVITAR atribuir Undefined
console.log(!!produto.preco)
// delete produto.preco para tirar um atributo
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)