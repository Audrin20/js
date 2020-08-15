const imprimirResultado = function(nota){
    if(nota >= 7) {
        console.log('Aprovado!!')
    } else {
        console.log('Reprovado!')
    } // Aqui, pode tirar os blocos(chaves {}) porque cada estrutura tem apenas uma instrução, mas é bom manter os blocos!
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // CUIDADOO!!! O que ele imprime é que 'Epa' não é maior ou igual à 7
