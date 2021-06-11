const funcs = []

for (var i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i)
  })
}

funcs[2]()
funcs[8]()

/* Mesmo com o console log sendo definido dentro no for e sendo preenchida por uma função dentro do for, ele ainda fica visivel globalmente.*/