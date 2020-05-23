const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
const template = `
    Olá 
    ${nome}!` // Suporta escrever coisas

console.log(concatenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`) // `${ aqui coloca o que quer fazer}` interpreta literal o que está escrito
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)