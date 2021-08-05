Array.prototype.filter2 = function(callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this))
    newArray.push(this[i])
  }
  return newArray
}

const produtos = [
  {nome: "Notebook", preco: 2499, fragil: true},
  {nome: "Ipad", preco: 4999, fragil: true},
  {nome: "Copo de vidro", preco: 24.99, fragil: true},
  {nome: "Copo de plástico", preco: 2.49, fragil: false},
]

const maiorQue500 = produto => produto.preco >= 500
const fragil = produto => produto.fragil

const fragilMenorQue500 = produtos.filter2(maiorQue500).filter2(fragil)
console.log(fragilMenorQue500)