const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) { // o break pega a estrutura de repetição corrente e para, nesse caso o for.
        break    
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) { // e o continue para e vai pra proxima, ou seja ele para no y == 5 e nao executa essa mas ai vai pro y==6 em diante 
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo:
for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}

// não é nem um pouco recomendado usar esses rótulos