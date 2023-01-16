const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choice[Math.floor(Math.random()*choice.length)];
}

let playerScore = 0;
let computerScore = 0;
let display = document.querySelector('.results');
let choices = document.querySelector('.choices')
let tally = document.querySelector('.score')

let rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound();
    choices.textContent = `Player: ${playerSelection}
    Computer: ${computerSelection}`;
    display.textContent = `${message}`;
    tally.textContent = `${score}`;
})

let paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound();
    choices.textContent = `Player: ${playerSelection}
    Computer: ${computerSelection}`;
    display.textContent = `${message}`;
    tally.textContent = `${score}`;
})

let scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound();
    choices.textContent = `Player: ${playerSelection}
    Computer: ${computerSelection}`;
    display.textContent = `${message}`;
    tally.textContent = `${score}`;
})

function playRound() {
    computerSelection = getComputerChoice();
    if ((playerSelection == 'rock' & computerSelection == 'scissors') || 
    (playerSelection == 'paper' & computerSelection == 'rock') ||
    (playerSelection == 'scissors' & computerSelection == 'paper')) {
        message = `You win! ${playerSelection} beats ${computerSelection}`
        score = `Player: ${playerScore += 1} Computer: ${computerScore}`;
    } else if ((playerSelection == 'rock' & computerSelection == 'paper') ||
    (playerSelection == 'paper' & computerSelection == 'scissors') ||
    (playerSelection == 'scissors' & computerSelection == 'rock')) {
        message = `You lose! ${computerSelection} beats ${playerSelection}`
        score = `Player: ${playerScore} Computer: ${computerScore += 1}`;
    } else {
        message = 'Tie!';
        score = `Player: ${playerScore} Computer: ${computerScore}`;
    }

    if (computerScore >= 5 & playerScore < computerScore)  {
        score = 'Game over. Computer wins';
        return score;
    } else if (playerScore >= 5 & computerScore < playerScore) {
        score = 'Congratulations! You win the game!';
        return score;
    }
}