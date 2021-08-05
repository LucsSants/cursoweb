const produtos = [
  {nome: "Notebook", preco: 2499, fragil: true},
  {nome: "Ipad", preco: 4999, fragil: true},
  {nome: "Copo de vidro", preco: 24.99, fragil: true},
  {nome: "Copo de plástico", preco: 2.49, fragil: false},
]

const maiorQue500 = produto => produto.preco >= 500
const fragil = produto => produto.fragil


console.log(produtos.filter(function(p) { // para cada elemento que der true ele vai retornar
  return false
}))

const fragilMenorQue500 = produtos.filter(maiorQue500).filter(fragil)
console.log(fragilMenorQue500)