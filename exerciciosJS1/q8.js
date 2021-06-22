let scoreString = "30,40,20,4,51,25,42,38,56,0"

function compararJogos (string) {
  let scores = string.split(',')
  let newRecordQnt = 0
  let worseGame = 0
  let bestScore = scores[0]
  let worseScore = scores [0]

  for(let i=1; i < scores.length; i++){
    if (scores[i] > bestScore){
      bestScore = scores[i]
      newRecordQnt++
      
    } else if (scores[i] < worseScore) {
      worseScore = scores[i]
      worseGame = i + 1
    }
  }

  return [newRecordQnt, worseGame]
}

console.log(compararJogos(scoreString))

