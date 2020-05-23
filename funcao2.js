// Armazenando funções dentro de uma variável
const imprimirSoma = function (a, b) {
    console.log(a+b)
}
// funcao anonima
imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel

const soma = (a, b) => { // => substitui o "function"
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b // funcao de uma linha
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!!')