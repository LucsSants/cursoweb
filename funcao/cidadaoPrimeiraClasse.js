// função em js é firtst-class object
// hugher-order function

//criar de fomra literal
function fun1() {}

// armazenar em uma variavel

const fun2 = function() {}

//armazenar num array

const array = [function(a, b ) {return a + b}, fun1, fun2] // tanto pode criar uma função dentro do array, ou botar funções já existentes
console.log(array[0](2,3))

// armazenar em um atributo de objeto 
const obj = {}
obj.falar = () => 'Olá'
console.log(obj.falar())

// passar uma função como parametro 

function run(fun) {
  fun()
}

run( function () {return "aaaaaaaaa!"})

// uma função pode retornar ou conter uma função
function soma (a,b) {
  return function (c) {
    console.log(a + b +c)
  }
}

soma(2,3)(4)

const cincoMais = soma(2,3)
cincoMais(4)

