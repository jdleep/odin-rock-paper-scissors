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

    // Default round result is "LOSE"
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
    // SCISSORS wins if computer chose PAPER
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
            console.error('roundResult outside of TIE, WIN, or LOSE given to function');
    }

    return resultStatement;
}

function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1).toLowerCase();
}

function validateSelection(playerSelection) {
    const validSelections = new Set(['ROCK', 'PAPER', 'SCISSORS']);
    let isValid = validSelections.has(playerSelection.toUpperCase());
    return isValid;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = '';
    let computerSelection = '';
    let roundResult = '';
    let roundResultStatement = '';

    for (let i = 1; i <= 5; i++) {
        playerSelection = prompt(`Round ${i}: Please enter "ROCK", "PAPER", or "SCISSORS"`);

        // Player canceled
        if (playerSelection === null) {
            console.log('Goodbye!');
            return;
        }

        if (validateSelection(playerSelection)) {
            computerSelection = getComputerChoice();
            roundResult = playRound(playerSelection, computerSelection)
            
            if (roundResult === 'WIN') {
                playerScore++;
            } else if (roundResult == 'LOSE') {
                computerScore++;
            } else {
                // If tie, nothing happens
            }
            let roundResultStatement = 
                createResultStatement(playerSelection, computerSelection,
                    roundResult);
            console.log(`Round ${i}: ${roundResultStatement}`);
        } else {
            computerScore++;
            console.log('Incorrect value! You lose!')
        }
    }

    if (computerScore > playerScore) {
        console.log(`You Lost the Game! Computer: ${computerScore}, Player: ${playerScore}`);
    } else if (playerScore > computerScore) {
        console.log(`You Won the Game! Computer: ${computerScore}, Player: ${playerScore}`);
    } else {
        console.log('You Tied with the Computer!');
    }
}

playGame();