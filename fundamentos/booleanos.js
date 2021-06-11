let isAtivo = false 
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo)

// usamos para saber se uma coisa é vedadeiro ou falso o !!, já que o ! determina o contrario daquilo (!true == false), com o !! negamos duas vezes, ou seja !!true = true
// nesse caso se botasse !isAtivo, seria a mesma coisa de botar !true, oq resultaria em falso 

console.log("os verdadeiros:")
console.log(!!3) // números diferentes de 0
console.log(!!-1) // números diferentes de 0
console.log(!!' ')// Strings preenchida com alguma coisa, nesse caso um espaço, mas qualquer letra ia
console.log(!!'texto') // Strings preenchida com alguma coisa, nesse caso um espaço, mas qualquer letra ia
console.log(!![]) // array vazia
console.log(!!{}) // objeto vazio
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // no caso se o valor atribuido for true, será true

console.log("os falsos:")
console.log(!!0) //zero
console.log(!!'') // String VAZIA
console.log(!!null) // o valor null
console.log(!!NaN) // o NAN
console.log(!!undefined) // 
console.log(!!(isAtivo = false)) //no caso se o valor atribuido for true, será true

console.log("pra finalizar:")
console.log(!!('' || null || 0 || ' ')) /* se um for verdadeiro vai dar verdadeiro*/
console.log('' || null || 0 || 'a' || ' ') // Nesse caso ele vai retornar o primeiro valor verdadeiro

let nome = ''
console.log(nome || 'desconhecido')
nome = 'Lucas'
console.log(nome || 'desconhecido') 


