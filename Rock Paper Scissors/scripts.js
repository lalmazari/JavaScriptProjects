const computerChoiceEl = document.getElementById('computer-choice')
const userChoiceEl = document.getElementById('user-choice')
const resultEl = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceEl.innerHTML = userChoice.toUpperCase()
    generateComputerChoice()
    getResult()
}))

// Function to Generate Computer Choice
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    if (randomNumber === 1) {
        computerChoice = 'rock'
    } else if (randomNumber === 2) {
         computerChoice = 'scissors'
     } else if (randomNumber === 3) {
        computerChoice = 'paper'
    }

    computerChoiceEl.innerHTML = computerChoice.toUpperCase()
}

// Function to get result
function getResult(){
    if (computerChoice === userChoice) {
        result = ' Its a Draw 🙃'
    }
    else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Win 🥳'
    }
    else if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You Lost 😤'
    }
    else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You Win 🥳'
    }
    else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lost! 😤' 
    }
    else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You Win! 🥳'
    }
    else if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You Lost! 😤'
    }

    resultEl.innerHTML = result
    
}