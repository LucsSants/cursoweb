function Pessoa() {
  this.idade = 0

  const self = this
  setInterval(function() {
    self.idade++
    console.log(self.idade)
  }/*.bind(this)*/,1000) /*nesse caso o this dentro da função não aponta pra pessoa, pois quem ta disparando o codigo é o temporizador do setInterval pra resolver
   pode-se coloar o .bind(this na função) ou criar uma variavel armazenado o this, dentro do objeto, e usala dentro da função no lugar do thism, pois quando
   a gente seta o this dentro do objeto o this vai apontar exatamente pro objeto  */
}

new Pessoa