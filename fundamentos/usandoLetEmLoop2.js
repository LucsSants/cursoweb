const funcs = []

for (let i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i)
  })
}

funcs[2]()
funcs[8]() 

/* pelo fato do let ter escopo de bloco quando a função for definida ele vai ter a memória de qual era o valor naquele momento */