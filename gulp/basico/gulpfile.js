const gulp = require('gulp')
const {series, parallel} = require('gulp')

const antes1 = cb => {
  console.log('tarefa antes 1')
  return cb()
}

const antes2 = cb => {
  console.log('tarefa antes 2')
  return cb()
}

function copiar(cb) {
// gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
    // .pipe(imagemPelaMetade())
    // .pipe(filtroPretoEBranco())
    // .pipte(tramsformA())
    // .pipte(tramsformB())
    .pipe(gulp.dest('pastaB'))
  console.log('Tarefa de copiar')
  return cb()
}

const fim = cb => {
  console.log('tarefa final')
  return cb()
}

module.exports.default = series(
  parallel(antes1,antes2),
  copiar,
  fim
  )