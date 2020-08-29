// pode armazenar uma funcao anonima na variavel

const soma = function (x, y) {
    return x+y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x, y){
    return x-y
})
imprimirResultado(3, 4, (x,y) => x*y) // arrow function (funcao anonima)

const pessoa = {
    falar: function(){ // é possivel fazer falar(){}...
        console.log('Opa')
    }
}

pessoa.falar()