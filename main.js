const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choice[Math.floor(Math.random()*choice.length)];
}

function game(playerSelection, computerSelection) {
    playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    computerSelection = getComputerChoice();
    return computerSelection;
}