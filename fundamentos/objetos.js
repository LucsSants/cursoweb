const prod1 = {} // criando um objeto literal vazio
prod1.nome = 'asdçlkas' // atribuindo atributos e valores a esse objeto, mesmo que ainda não exista o atributo nome, o javascript cria dinamicamente
prod1.preco = 4998.90 //

prod1['Desconto legal'] = 0.40 // evitar usar atributos com espaço

console.log(prod1)


// um objeto tbm pode ser cirado já passado seus atributos e valores, esses valores podem ser de vários tipos, incluindo outros objetos e tbm funções.
const prod2 = {
  nome: 'camisa',
  preco: 79.90, 
  obj: {
    blabla: 1,
    obj: {
      blabla: 2
    }
  }
}
// os nomes dos atributos não pode ser igual dentro do MESMO objeto, mas se tiver outro objeto dentro de um objeto esse objeto pode receber o nome de um atributo que o objeto pai tem.

console.log(prod2)