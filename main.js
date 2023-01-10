const choice = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    return choice[Math.floor(Math.random()*choice.length)];
}

playerSelection = '';
computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection == '') {
        message = console.log('Not interested in this game?')
        return undefined;
    } else {
        message = console.log('Let\'s see who wins!');
    }
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);

    if ((playerSelection == 'rock' & computerSelection == 'scissors') || (playerSelection == 'paper' & computerSelection == 'rock') || (playerSelection == 'scissors' & computerSelection == 'paper')) {
        message = console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    } else if ((playerSelection == 'rock' & computerSelection == 'paper') || (playerSelection == 'paper' & computerSelection == 'scissors') || (playerSelection == 'scissors' & computerSelection == 'rock')) {
        message = console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else {
        message = console.log('Tie! Play again?')
    }
    return message;
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
        computerSelection = getComputerChoice();
        console.log(i);
        // playRound();
    }
}