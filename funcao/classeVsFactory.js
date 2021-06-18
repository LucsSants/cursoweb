class Pessoa {
  constructor (nome) {
    this.nome = nome

  }

  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}
const p1 = new Pessoa('João')
p1.falar() // no browser, dependendo de onde a gente estiver talvez essa classe nao funcione tão bem, já que ela nao gurda o contexto lexico!

const criarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
} // já o factory por ser uma função guarda bem onde foi definido!!

const p2 = criarPessoa('João')
p2.falar()