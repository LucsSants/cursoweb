let numero = 1
{
  let numero = 2
  console.log("dentro: ", numero) // o let respeita o escopo que ele ta dentro, ele procura se tem a variavel dentro do escopo que ele ta, se tiver ele vai usar, se não ele vai ver se tem a variavel em um escopo mais abrajente 
}
console.log("fora", numero)

// variaveis com let tem escopo global, escopo de função e escopo de bloco
// variaveis com var tem escopo global e de função 