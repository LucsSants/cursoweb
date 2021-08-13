const fs = require('fs')

const path = __dirname + '/dados.txt'

const lerArquivo = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, content) => {
      resolve(content.toString())
      reject(error)
    })
  })
}

lerArquivo(path)
  .then(console.log)
  .catch(e => console.log(e.message))

