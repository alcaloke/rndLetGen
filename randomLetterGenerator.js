console.dir(document)

const title = document.getElementById('title')
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
    // random letter
    const randInt = getRndInt(65, 90)
    const genLet = String.fromCharCode(randInt)
    letter.textContent = genLet

    // random letter colour
    const x = 10
    const colours = [
      'mediumturquoise',
      'darkslateblue',
      'cornflowerblue',
      'deeppink',
      'gold',
      'orange',
      'palevioletred',
      'palegreen',
      'orchid',
      'yellowgreen',
    ]
    letter.style.color = colours[Math.floor(Math.random() * x)]

    // yes or no
    const yayOrNay = yesOrNo()
    if (yayOrNay === 1) {
      yeahOrNah.textContent = 'yes'
    } else {
      yeahOrNah.textContent = 'no'
    }

    // yes or no random colour
    yeahOrNah.style.color = colours[Math.floor(Math.random() * x)]
  }

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  async function run() {
    if (title.style.color === 'violet') {
      title.style.color = 'tomato'
    }
    for (i = 0; i < 20; i++) {
      generate()
      await timeout(i * 20)
    }
  }

  run().then(() => (title.style.color = 'violet'))
}
