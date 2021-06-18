const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
} 

function exec() {
    const valor = 'Local'
    minhaFuncao() /* nesse caso a função vai imprimir "local", pois a função no js tem consciencia do local onde ela foi definida, ou seja ela guarda o contexto
    onde ela foi definida, assim quando a minhaFuncao foi definida a const valor era "global", então mesmo que dentro da função exec exista outra const valor
    com um conteúdo diferente ele vai buscar a const com o valor de onde ela foi definida! */
}

exec()