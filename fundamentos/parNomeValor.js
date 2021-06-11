// par Nome/Valor

const saudacao = 'Opa' // contexto lexico 1

function exec() {
  const saudacao = 'Falaaa!'
  return saudacao
}

// objetos são grupos aninhados de pares nome/valor

const cliente = {
  nome:'Lcuas',
  idade: 32,
  peso: 98,
  endereco: {
    logradouro: 'Rua XXX',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

// variaveis podem ser definidas em contextos lexicos diferentes