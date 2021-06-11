Number.prototype.entre = function (inicio, fim) {
 return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
  if (nota.entre(9,10)) {
    console.log('Quadro de Honrra')
  } else if (nota.entre(7,8.99)) {
    console.log('Aprovado')
  }else if (nota.entre(4,6.99)) {
    console.log('Recuperação')
  }else if (nota.entre(0,3.99)) {
    console.log('Reprovado')
  } else {
    console.log('Nota inválida!!')
  }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)


//teste
const num = 3
console.log(!!(num.entre(1,4)))
// então lá em cima é como se ele criasse uma função que pode ser acessada em todos os numbers (??) 