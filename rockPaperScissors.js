const userChoice = process.argv[2];
const choices = ['rock', 'paper', 'scissors'];

function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(user, computer) {
    if (user === computer) return 'It\'s a draw!';
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    }
    return 'Computer wins!';
};


if (!userChoice) {
    console.log("Welcome to 'Rock Paper Scissors' Game");
    console.log("To play the game, please run 'rockPaperScissors.js <user-choice>' ");
} else {
    console.log(determineWinner(userChoice, getRandomChoice()));
}
