const nomes = ["Carlos", "Pedro", "Ricardo"]

nomes.pop() // remove o último elemento do array!
console.log(nomes)

nomes.push("Roberto") // adciona na última posição do array!
console.log(nomes)

nomes.shift() // remove o primeiro elemento do array!
console.log(nomes)

nomes.unshift("João") // adiciona na primeira posição do array!
console.log(nomes)

// splice pode adicionar e remover
/*Adicionar:*/

nomes.splice(2,0,"Rodrigo") // na posição 2, ira remover 0, e adicionar o rodrigo nessa posição!!
console.log(nomes)

/*Remover:*/

nomes.splice(3,1) // na posição 3, irei remover 1 elemento!!
console.log(nomes)

nomes.push("José","Igor","Hugo")
console.log(nomes)

const algunsNomes = nomes.slice(2) // gera um novo array a partir do indice, que nesse caso é 2!!!
console.log(algunsNomes)

const algunsNomes2 = nomes.slice(1, 4) // pega do indice primeiro indice passado, até o segundo, sem incluir o item do segundo!!! Nesse caso ele ira pegar do indice 1 até o indice 4, mas não irá incluir o elemento do 4!!
console.log(algunsNomes2)

