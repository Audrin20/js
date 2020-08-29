function teste1(num){
    if(num > 7)
        console.log(num) /* Somente essa sentença está associada ao bloco */
    console.log('final') // Essa sentença não está associada ao bloco anterior se eu quisesse associada à anterior teria que colocar {}
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7);{ // CUIDADO!! O bloco não está associado à condição por causa do -> ;
        console.log(num) // Não usar ";" na definição do bloco if
    }
}
// Sempre colocar as estruturas criando bloco com chaves "{}"
teste2(6)
teste2(8)