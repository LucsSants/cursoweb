function rand(min,max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

console.log(rand(9,16))