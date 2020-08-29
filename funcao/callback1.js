const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// passar uma func para outro e quando determinado evento acontecer essa funcao sera chamada de volta

fabricantes.forEach(imprimir) // callback
fabricantes.forEach(function(a){
    console.log(a)
})
fabricantes.forEach(fabricante => console.log(fabricante))