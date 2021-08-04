const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45} ',
  '{ "nome": "Caderno", "preco": 13.90} ',
  '{ "nome": "Kit de lápis", "preco": 41.22} ',
  '{ "nome": "Caneta", "preco": 7.50} ',
]

const getObject = e => JSON.parse(e) 
const getPrice = e  => e.preco

console.log(carrinho.map(getObject).map(getPrice))