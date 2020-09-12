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
  const generate = () => {
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

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  async function run() {
    for (i = 0; i < 20; i++) {
      generate()
      await timeout(i * 20)
    }
  }

  run()
}
