console.log('a = ', a)
var a = 2
console.log('a = ', a)

// com o hoisting é como se ele fizesse isso por debaixo dos panos: 

/*
var a
console.log('a = ', a)
a = 2
console.log('a = ', a)
*/

console.log('a = ', a)
let a = 2
console.log('a = ', a) // como let não acontece o hoisting 

// ** o hoisting tbm acorre dentro de funções