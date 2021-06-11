const valores = [7.5, 6.9, 8.6, 9.2] // criando um array
console.log(valores[0], valores[3]) // o array pode ser acessado com o valor do index(posição)
console.log(valores[4])// se a posição não existir, ele ira retornar undefined

valores[4] = 10 // da pra adicionar um valor ao uma array passando um index especifico
console.log(valores)
console.log(valores.length) // acessar o tamanho do array


valores.push({id: 3},false, null, "teste") // o .push adiciona iten(s) no array sempre na ultima posição disponivel, e o array pode ter diferentes tipos dentro dele
console.log(valores)

console.log(valores.pop()) // o .pop remove o item na ultima posição do array, e retorna ele
delete valores[0] // da pra deletar um item numa posição especifica com o delete

console.log(valores)

console.log(typeof valores) // array é um objeto 