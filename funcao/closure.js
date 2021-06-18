  
// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora() 
console.log(minhaFuncao()) // a função tem momória de onde ela foi definida e como ela foi definida dentro do escopo da função fora fora() onde x = 'local' assim essa é seu valor