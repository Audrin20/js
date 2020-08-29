const imprimirResultado = function(nota){
    switch (Math.floor(nota)) { // Não retorna verdadeiro ou falso
        case 10: // Se a nota for 10 ele executa a linha de baixo
        case 9:
            console.log('Quadro de Honra')
            break // Só sai do switch sem executar os outros cases se digitar 'break'
        case 8: case 7: 
            console.log('Aprovado')
            break 
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3, 2, 1, 0:
            console.log('Reprovado0')
            break
        default:
            console.log('Nota Inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2)
imprimirResultado(-1)
imprimirResultado(11)
