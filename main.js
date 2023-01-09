const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choice[Math.floor(Math.random()*choice.length)];
}

function game(playerSelection, computerSelection) {
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

    if (playerSelection == 'rock' & computerSelection == 'scissors') {
        message = console.log('You win! Rock beats Scissors');
    } else if (playerSelection == 'rock' & computerSelection == 'paper') {
        message = console.log('You lose! Paper beats Rock');
    } else if (playerSelection == 'paper' & computerSelection == 'rock') {
        message = console.log('You win! Paper beats Rock');
    } else if (playerSelection == 'paper' & computerSelection == 'scissors') {
        message = console.log('You lose! Scissors beats Paper');
    } else if (playerSelection == 'scissors' & computerSelection == 'paper') {
        message = console.log('You win! Scissors beats Paper');
    } else if (playerSelection == 'scissors' & computerSelection == 'rock') {
        message = console.log('You lose! Rock beats Scissors');
    } else {
        message = console.log('Tie! Play again?')
    }
    return message;
}