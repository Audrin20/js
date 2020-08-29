let dobro = function (a) {
    return 2 * a
}


dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // arrow function. return implícito

console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá' // funcao sem parametro nao pode, tem que colcoar o parametro vazio
ola = _ => 'Olá' // Possui param

console.log(ola())