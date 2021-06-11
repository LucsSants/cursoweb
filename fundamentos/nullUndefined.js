let valor // não inicializada
console.log(valor)
 // console.log (valor2) // aqui vai dar que valor2 "it's not defined" que é diferente de undefined

// Undefined significa que a aquilo possui um endereço de memória, mas nao tem nada definido ali
// já o null significa que não possui nem o endereço de memória

valor = null
console.log(valor)

// console.log(valor.toString()) // Erro! vc não pode ler a propriedade string de nulo

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // não fazer, deixe pra linguagem falar oq é undefined, nesse caso se for um valor númerico deixe pra botar 0, e se for um preco que vc queira deixer de graça vc bota zero, mas se vc quiser só limpar o valor, bota null
console.log(!!produto.preco) // nao vai fazer com que o preco saia, apenas que fique como indefinido
// delete produto.preco // se quiser deletar o atributo
console.log(produto)


produto.preco = null // SEM PREÇO 


