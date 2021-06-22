// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

let jurosSimples = (cInicial,taxa,tempo) => {
  let jurosS = cInicial * taxa * tempo
  return jurosS
}

let jurosComposto = (cInicial,taxa,tempo) => {
  let jurosC = cInicial * (1 + taxa) ** tempo
  return jurosC
}


console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));
