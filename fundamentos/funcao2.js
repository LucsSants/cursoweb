// Armazenando uma função em uma variavel

const imprimirSoma = function (a,b) {
  console.log(a + b)
}

imprimirSoma(2,3)

// armazenando uma arrow function em uma variável

const soma = (a,b) => {
  return a + b
}

console.log(soma(2,3))

// retorno implicito

const subtracao = (a,b) => a - b // se a função só tiver um parametro, pode retirar os parenteses

console.log(subtracao(2,3))