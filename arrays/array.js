let array = ["d", "a" , "b"]
console.log(array)
array.push('c') // adiciona na última posição
array.sort() // ordena
console.log(array)

delete array[2]
array[5] = 'h'

console.log(array)


let array2 = ["Lucas", "Pedro", "Rafael"]
console.log(array2)
array2.splice(1,2,"José", 'Carlos') // remove da posição passada no primeiro parametro até a posição passada no segundo, pode ser usado tbm para adicionar!
console.log(array2)
array2.splice(1,1)
console.log(array2)

let a = [1,3,4,6,7,8,9,2,4,3,15]
a.sort(function(a,b){return a-b}) // para ordenar números (crescente)
console.log(a)

