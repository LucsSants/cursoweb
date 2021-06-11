var numero = 1
{
  var numero = 2
  console.log("dentro: ", numero)
}
console.log("fora: ",numero)

// como a var é criada dentro do escopo global, mesmo definindo outro escopo com as {} oq foi definido ali dentro ainda pode ser acessado de fora, oq não acontece com o let por exemplo


// variaveis com let tem escopo global, escopo de função e escopo de bloco
// variaveis com var tem escopo global e de função