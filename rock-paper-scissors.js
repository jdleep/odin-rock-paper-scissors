function getComputerChoice() {
    // Get random number between 0 and 2
    let random = Math.floor(Math.random()*3);

    let choice = '';

    switch (random) {
        case 0:
            choice = 'ROCK';
            break;
        case 1:
            choice = 'PAPER';
            break;
        case 2:
            choice = 'SCISSORS';
            break;
        default:
            console.error('Random number used for choice outside of 0-2');
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {

    let roundResult = 'LOSE';

    // Player tied with computer
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        roundResult = 'TIE';
        return roundResult;
    }

    if (playerSelection.toUpperCase() === 'ROCK') {
        // ROCK wins if computer chose SCISSORS
        if (computerSelection === 'SCISSORS') {
            roundResult = 'WIN'
        }
    } else if (playerSelection.toUpperCase() === 'PAPER') {
        // PAPER wins if computer chose ROCK
        if (computerSelection === 'ROCK') {
            roundResult = 'WIN';
        }
    // player selection is: SCISSORS
    } else {
        if (computerSelection === 'PAPER') {
            roundResult = 'WIN'
        }
    }

    return roundResult;
}

function createResultStatement(playerSelection, computerSelection, roundResult) {
    let resultStatement = '';
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    switch(roundResult) {
        case 'TIE':
            resultStatement = 
                `You Tie! You both chose ${playerSelection}`;
            break;
        case 'WIN':
            resultStatement = 
                `You Win! ${playerSelection} beats ${computerSelection}`;
            break;
        case 'LOSE':
            resultStatement =
            `You Lose! ${computerSelection} beats ${playerSelection}`;
            break;
        default:
    }

    return resultStatement;
}

function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1).toLowerCase();
}

const gameSelections = ['ROCK', 'PAPER', 'SCISSORS']


let isWin = false;

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`Player: ${gameSelections[i]},` +
        ` Computer: ${gameSelections[j]}`);
        console.log(playRound(gameSelections[i], gameSelections[j]));
        console.log(createResultStatement(gameSelections[i], gameSelections[j], playRound(gameSelections[i], gameSelections[j])));
    }
}