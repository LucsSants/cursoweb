const escola = "Cod3r"

console.log(escola.charAt(4)) //pega o caracter na posição
console.log(escola.charAt(5)) // não da erro caso o valor não seja correto, apenas um espaço vazio, já que ele não encontrou nada
console.log(escola.charCodeAt(3)) // o códido desse caracter na tabela ASCII (alt+51= 3)
console.log(escola.indexOf('r')) // pegamos o index do caractere desejado, ou seja ele procurou por 3 na string, e nos falou o index desse caracter na string

console.log(escola.substring(1)) // aqui ele fala que ele vai começar do indice 1 ou seja vai pular o 0
console.log(escola.substring(0,3)) // aqui ele fala que vai começar do 0, até a posição 3, mas sem incluir o 3 

console.log('Escola '.concat(escola).concat('!')) // vemos que com String da pra chamar a função pelo literal, e vemos a função concat, que concatena
console.log('Escola '+ escola +'!') // pode concatenar strings com + tbm

console.log(escola.replace(3, 'e')) // aqui o replace que irá substituir, nesse caso ele vai pegar a posição 3, e substituir por e, 
console.log(escola.replace(/\d/, 'e')) // aqui é expressão regular (regex), nesse caso /\d/ é pra dígitos
console.log(escola.replace(/\w/g, 'e')) // nesse caso o \w é pra letras, e o /g é global.




console.log("Ana, Maria, Pedro".split(",")) // o split que separa uma String transformando em um array, no parametro a gente bota oq vai indicar a separação, ou seja
// sempre que ele ver uma vírgula vai separar. 
