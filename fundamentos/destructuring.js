const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco : {
    logradouro: 'Rua abc',
    numero: 1000
  }
}

const { nome, idade } = pessoa 
console.log(nome,idade)

const {nome: n , idade : i} = pessoa
console.log(n,i)

const { sobrenome, bemHumorada = true } = pessoa // se você procurar um atributo que não existe ele vai retornar undefined
console.log(sobrenome, bemHumorada)

const { endereco : { logradouro, numero, cep}} = pessoa // acessar o de dentro
console.log(logradouro,numero,cep)

const { conta: { agen, num} } = pessoa // não pode tentar achar dentro de algo que não existe pois vai da erro
console.log(agen,num)
 



