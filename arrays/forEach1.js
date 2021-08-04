const nomes = ["Carlos", "Pedro", "Ricardo"]

nomes.forEach((nome, indice)=> {console.log(`${indice + 1}) ${nome}`)}) // executa uma função para cada item do array, tem 3 parametros: o conteudo, o indice e o própio array! 
console.log('-----')

nomes.forEach(nome => console.log(nome))

console.log('-----')

nomes.forEach((nome, indice, array, x)=> {  // aqui vemos que se passarmos mais de 3 parametros ele será undefined
  console.log(`${indice + 1}) ${nome}`) 
  console.log(array)
  console.log(x) 
}) 


const exibirNome = nome => console.log(nome) 
console.log('-----')
nomes.forEach(exibirNome) // pode receber tbm uma função já criada anteriormente!