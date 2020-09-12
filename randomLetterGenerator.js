console.dir(document)

const letter = document.getElementById('generated')
const yeahOrNah = document.getElementById('boolean')

const getRndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const yesOrNo = () => {
  return Math.floor(Math.random() * 2)
}

const generateLetter = () => {
  const randInt = getRndInt(65, 90)
  const genLet = String.fromCharCode(randInt)
  letter.textContent = genLet

  const yayOrNay = yesOrNo()
  if (yayOrNay === 1) {
    yeahOrNah.textContent = 'yes'
  } else {
    yeahOrNah.textContent = 'no'
  }
}
