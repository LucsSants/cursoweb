function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // ele tenta somar 2 com undefined que da NaN
imprimirSoma(2, 10, 52, 54, 3, 6) // aqui ele não da erro, apenas ignora os valores a mais
imprimirSoma()// NaN

function soma(a, b = 1) { // aqui atribuimos um valor padrão pro b
  return a + b 
}

console.log(soma(2, 3))
console.log(soma(2)) // ai nesse caso que ele nao foi colocado ele vai somar 2 que foi definido, mais 1 que é o padrão de b
console.log(soma()) 

