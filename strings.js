const escola = 'C0d3r'

console.log(escola.charAt(4))  // Retorna o índice 4
console.log(escola.charAt(5)) // Retorna nada
console.log(escola.charCodeAt(3)) // Chama o código da Tabela ask valor unicode
console.log(escola.indexOf('d')) // indice associado ao dígito vai pegar a letra que tá associado ao indice

console.log(escola.substring(1)) // pega a partir de tal índice
console.log(escola.substring(0, 3)) // pega do índice 0 até o 3

console.log('Escola'.concat(escola).concat('!')) // Concatena Escola + const escola + !
console.log('Escola' + escola + '!')

console.log(escola.replace(3, 'e')) // Substitui o 1 parâmetro pelo segundo. é possível usar RegEx
console.log(escola.replace(/\d/, 'e')) // usando RegEx substitui todos os dígitos por 'e'

console.log('Ana,Maria,Pedro'.split(',')) // gera um array pode usar RegEx tb