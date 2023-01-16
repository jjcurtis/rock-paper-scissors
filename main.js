const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choice[Math.floor(Math.random()*choice.length)];
}
let playerScore = 0;
let computerScore = 0;
// let playerSelection;

let rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound();
})

let paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound();
})

let scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound();
})

function playRound() {
    // playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection == '') {
        message = console.log('Not interested in this game?')
        return undefined;
    } else {
        message = console.log('Let\'s see who wins!');
    }
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);

    if ((playerSelection == 'rock' & computerSelection == 'scissors') || 
    (playerSelection == 'paper' & computerSelection == 'rock') ||
    (playerSelection == 'scissors' & computerSelection == 'paper')) {
        playerScore += 1;
        message = console.log
        (`You win! ${playerSelection} beats ${computerSelection}`);
    } else if ((playerSelection == 'rock' & computerSelection == 'paper') ||
    (playerSelection == 'paper' & computerSelection == 'scissors') ||
    (playerSelection == 'scissors' & computerSelection == 'rock')) {
        computerScore += 1;
        message = console.log
        (`You lose! ${computerSelection} beats ${playerSelection}`);
    } else {
        message = console.log('Tie!')
    }
    return message;
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        playRound();
    }
    
    console.log(`FINAL SCORE:
Player: ${playerScore} Computer: ${computerScore}`);

    if (playerScore == computerScore) {
        alert('Draw');
    } else if (playerScore > computerScore) {
        alert('You win!');
    } else {
        alert('You lose!')
    }
}