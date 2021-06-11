{
  {
    {
      {
        var sera = "Será???"
        console.log(sera) 
      }
    }
  }
}

console.log(sera) // o var criado asssim, fica global, ou seja pode ser acessado de qualquer lugar

function teste() {
  var local = 123
  console.log(local)
}

teste()
// console.log(local) /*mas quando criada dentro do escopo de uma função, ela apenas existe ali dentro*/

// variaveis com let tem escopo global, escopo de função e escopo de bloco
// variaveis com var tem escopo global e de função