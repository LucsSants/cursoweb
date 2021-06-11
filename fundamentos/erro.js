function tratarErroELancar(erro) {
  //throw new Error("ERRO ERRO ERRO")
  //throw 10
  //throw true
  //throw 'Mensagem'

 throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date
  }
}

function imprimirNomeGritando(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!!')  
  }
  catch (e) {
    tratarErroELancar(e)
  } finally {
    console.log("Final")
  }
}

imprimirNomeGritando({name : "abc"})