function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);

    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    return choices[randomNum];
}

function playRound(playerChoice, computerChoice) {

    // Default round result is "LOSE"
    let roundResult = 'LOSE';

    playerChoice = playerChoice.toUpperCase();

    // Player tied with computer
    if (playerChoice == computerChoice) {
        roundResult = 'TIE';
        return roundResult;
    }

    // TODO: Update this using OR statements.
    if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (playerChoice === 'PAPER' && computerChoice === 'ROCK') ||
        (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')
    ) {
        roundResult = 'WIN'
    }

    return roundResult;
}

function createResultStatement(playerChoice, computerChoice, roundResult) {
    let resultStatement = '';
    playerChoice = capitalize(playerChoice);
    computerChoice = capitalize(computerChoice);
    switch (roundResult) {
        case 'TIE':
            resultStatement = 
                `You Tie! You both chose ${playerChoice}`;
            break;
        case 'WIN':
            resultStatement = 
                `You Win! ${playerChoice} beats ${computerChoice}`;
            break;
        case 'LOSE':
            resultStatement =
            `You Lose! ${computerChoice} beats ${playerChoice}`;
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

function validateSelection(playerChoice) {
    const validSelections = new Set(['ROCK', 'PAPER', 'SCISSORS']);
    let isValid = validSelections.has(playerChoice.toUpperCase());
    return isValid;
}

const buttonsDiv = document.querySelector('.buttons');
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score')
let resultText = document.querySelector('.result-text')

buttonsDiv.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        let playerChoice = e.target.value;
        let computerChoice = getComputerChoice();

        let result = playRound(playerChoice, computerChoice)
        if (result === 'WIN') {
            playerScore.innerText++;
        } else if (result === 'LOSE') {
            computerScore.innerText++;
        }
        resultText.innerText = createResultStatement(playerChoice, computerChoice, result);

        if (computerScore.innerText >= 5) {
            resultText.innerText = "YOU LOST THE GAME"
            playerScore.innerText = 0;
            computerScore.innerText = 0;
        }

        if (playerScore.innerText >= 5) {
            resultText.innerText = "YOU WON THE GAME"
            playerScore.innerText = 0;
            computerScore.innerText = 0;
        }
    }
});




/*
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let playerChoice = '';
    let computerChoice = '';
    let roundResult = '';
    let roundResultStatement = '';

    for (let i = 1; i <= 5; i++) {
        playerChoice = prompt(`Round ${i}: Please enter "ROCK", "PAPER", or "SCISSORS"`);

        // Player canceled
        if (playerChoice === null) {
            console.log('Goodbye!');
            return;
        }

        if (validateSelection(playerChoice)) {
            computerChoice = getComputerChoice();
            roundResult = playRound(playerChoice, computerChoice)
            
            if (roundResult === 'WIN') {
                playerScore++;
            } else if (roundResult == 'LOSE') {
                computerScore++;
            } else {
                // If tie, nothing happens
            }
            let roundResultStatement = 
                createResultStatement(playerChoice, computerChoice,
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
*/