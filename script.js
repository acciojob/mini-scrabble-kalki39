let letter = document.getElementById('evaluatedText')
let out = document.getElementById('letterCount')


let count = () => {
  if (letter.value == "") {
    out.innerText = 0
  }
  else {
    out.innerText = Number(letter.value.length)
  }
}