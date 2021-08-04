Array.prototype.map2 = function(callback) {
  const newArray = []
  for(let i=0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray 
}


const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45} ',
  '{ "nome": "Caderno", "preco": 13.90} ',
  '{ "nome": "Kit de lápis", "preco": 41.22} ',
  '{ "nome": "Caneta", "preco": 7.50} ',
]

const getObject = e => JSON.parse(e) 
const getPrice = e  => e.preco

console.log(carrinho.map2(getObject).map2(getPrice))