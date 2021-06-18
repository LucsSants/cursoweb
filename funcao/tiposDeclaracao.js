console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y
} // com a function declaration, o js carrega todas essas funções antes, então mesmo se voce tentar chamar ela antes dela ter sido criada você consegue!

// function expression
const sub = function (x, y) {
    return x - y
}
// com o function expression isso já não acontece, pois essa variável só foi definida nesta linha!!!!
console.log(sub(3, 4))

// named function expression (not used so much)
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))