  
let comparaComThis = function (param) {
  console.log(this === param)
}
// o this dentro de uma função normal se refere ao escopo global
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)
// da pra usar o bind pra mudar o contexto do this

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // já com a arrow function, isso não acontece, pois essa arrwfun. foi definida dentro de um modulo do node, e não no contexto global
comparaComThisArrow(module.exports) 

comparaComThisArrow = comparaComThisArrow.bind(obj) /* a arrow function tem mais pode que o bind, ou seja, mesmo que você tente mudar o contexto com o bind 
a arrow function vai segurar e nao vai mudar!!*/
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)