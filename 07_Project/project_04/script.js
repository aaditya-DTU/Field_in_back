let randomNumber = parseInt((Math.random() * 100) + 1)

const submit = document.querySelector('#subt')
const userNum = document.querySelector('#guessField')
const previousGuess = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const para = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userNum.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if (guess < 1) {
        alert('Please enter number greater than 0')
    }
    else if (guess > 100) {
        alert('Please enter number less than 100')
    }
    else {
        prevGuess.push(guess)
        if(numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is TOOO Low`)
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is TOOO High`)
    }
}

function displayGuess(guess) {
    userNum.value = ''
    previousGuess.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userNum.value = ''
    userNum.setAttribute('disabled', '')
    para.classList.add('button')
    para.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(para)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt((Math.random() * 100) + 1)
        prevGuess = []
        numGuess = 1
        previousGuess.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userNum.removeAttribute('disabled')
        startOver.removeChild(para)

        playGame = true
    })
}
