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
    playerChoice = capitalizeFirst(playerChoice);
    computerChoice = capitalizeFirst(computerChoice);
    switch (roundResult) {
        case 'TIE':
            resultStatement = 
                `YOU TIE THE ROUND! \n\nYou both chose ${playerChoice}`;
            break;
        case 'WIN':
            resultStatement = 
                `YOU WIN THE ROUND! \n\n${playerChoice} beats ${computerChoice}`;
            break;
        case 'LOSE':
            resultStatement =
                `YOU LOSE THE ROUND! \n\n${playerChoice} loses to ${computerChoice}`;
            break;
        default:
            console.error('roundResult outside of TIE, WIN, or LOSE given to function');
    }

    return resultStatement;
}

function capitalizeFirst(s)
{
    return s && s[0].toUpperCase() + s.slice(1).toLowerCase();
}

function setChoiceImgSrc(img, choice) {
    const ROCK_IMG_PATH = './images/rock.png';
    const PAPER_IMG_PATH = './images/paper.png';
    const SCISSORS_IMG_PATH = './images/scissors.png';
    const DACHSHUND_IMG_PATH = './images/dachshund.png';

    switch (choice) {
        case 'ROCK':
            img.src = ROCK_IMG_PATH;
            break;
        case 'PAPER':
            img.src = PAPER_IMG_PATH;
            break;
        case 'SCISSORS':
            img.src = SCISSORS_IMG_PATH;
            break;
        default:
            img.src = DACHSHUND_IMG_PATH;
    }
}

const buttonsDiv = document.querySelector('.buttons');
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score')
let resultText = document.querySelector('.result-text')
let playerChoiceImg = document.querySelector('.player-choice-image');
let computerChoiceImg = document.querySelector('.computer-choice-image');

buttonsDiv.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        let playerChoice = e.target.value;
        let computerChoice = getComputerChoice();

        setChoiceImgSrc(playerChoiceImg, playerChoice);
        setChoiceImgSrc(computerChoiceImg, computerChoice);

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
            setChoiceImgSrc(playerChoiceImg, 'DACHSHUND');
            setChoiceImgSrc(computerChoiceImg, 'DACHSHUND');
        }

        if (playerScore.innerText >= 5) {
            resultText.innerText = "YOU WON THE GAME"
            playerScore.innerText = 0;
            computerScore.innerText = 0;
            setChoiceImgSrc(playerChoiceImg, 'DACHSHUND');
            setChoiceImgSrc(computerChoiceImg, 'DACHSHUND');
        }
    }
});