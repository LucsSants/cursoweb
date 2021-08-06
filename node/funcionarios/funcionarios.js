const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
  const funcionarios = response.data
  //console.log(funcionarios)
  const getChinese = emp => emp.pais == 'China'
  const getWoman = emp => emp.genero == 'F'
  const getLowestPay = (emp, newEmp) => emp.salario > newEmp.salario ? emp : newEmp

  console.log(funcionarios.filter(getChinese).filter(getWoman).reduce(getLowestPay))
})



