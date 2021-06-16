const pessoa = {
  saudacao: 'Bom dia!',
  falar() {
      console.log(this.saudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO
// nesse caso quando a agente armazena a função dentro de uma variavel o contexto do this muda, nao pertecendo mais a aquele objeto

const falarDePessoa = pessoa.falar.bind(pessoa) // com o bind a gente pode apontar para qual contexto agente quer que o this puxe
falarDePessoa()
