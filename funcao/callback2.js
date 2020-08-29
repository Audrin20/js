const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]


// Sem callback

const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]) // Para adicionar um elemento num array chama a funcao "push"
    }
}

console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7 
})
// Retorna "True" ou "False" Se retornar True ela será inserida no array, se não, não será inserida
// filter: vai filtrar os elementos do array dependendo do critério
// funcao filter não altera o array original

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7) // Arrow Function
console.log(notasBaixas3)


const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)