console.dir(document)

const letter = document.getElementById('generated')

const getRndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateLetter = () => {
  const randInt = getRndInt(65, 90)
  const genLet = String.fromCharCode(randInt)
  letter.textContent = genLet
}
