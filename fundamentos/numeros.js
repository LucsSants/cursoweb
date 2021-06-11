const peso1 = 1.0
const peso2 = Number('2.0')

 console.log(peso1,peso2)

 // aqui vemos uma função do Number (isInteger) que vê se o número passado no parametro é inteiro ou não, gerando true ou false
 console.log(Number.isInteger(peso1))
 console.log(Number.isInteger(peso2))


 // mesmo se a gente definir o número 1.0, ele é reconhecido como inteiro, ele é apenas float quando for 2.algumacoisadiferentede0 

  
 const avaliacao1 = 9.525
 const avaliacao2 = 6.583

 const total = avaliacao1 * peso1 + avaliacao2 * peso2
 const media = total / (peso1 + peso2)

 console.log(media)
//o toFixed vai reduzir o número para as casas decimais que você passar como parametro
 console.log(media.toFixed(2))

// o toString transforma o valor para String, ou se 2 passado como parametro trasnforma em binário
 console.log(media.toString(2))
 console.log(typeof media)
 // Como pode ver ele não muda necessariamente o tipo da variavel, até pq ela é uma constante, mas se fazermos isso aqui:
console.log(typeof media.toString())
//veremos que nesssa linha ele é uma String.

//****//

console.log(typeof media)
console.log(typeof Number)

// (n)umber é um tipo, e (N)umber é uma função