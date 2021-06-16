  
function Pessoa() {
  this.idade = 0

  setInterval(() => {
      this.idade++
      console.log(this.idade)
  }, 1000)
} // nesse caso como com a arrow function o this fica definido no contexto lexico que se foi aplicado, o codigo funciona normalmente, diferente do código com
  // a  funcção definida por exteso, ou seja uma vantagem bastante interessante pra se usar arrow functions

new Pessoa