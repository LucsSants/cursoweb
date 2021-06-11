const nome = "Lucas"
const concatenacao = "Olá " + nome + "!"
// o template Strings nos permite chamar variaveis dentro de Strings usando ${}

// o template Strings aceita quebra de linha
const template = ` 
  Olá
  ${nome}!`

  console.log(concatenacao, template)

  console.log(`1 + 1 = ${1+1}`) // da pra passar uma expressão
  
  const up = texto => texto.toUpperCase() 
  console.log(`Ei ${up('cuidado')}!`) // ou chamar uma função tbm 