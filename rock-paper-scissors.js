function getComputerChoice() {
    //Get random number between 0 and 2
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