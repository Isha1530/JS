let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.getElementById('msg');
const userScoreEl = document.querySelector('#user-score p');
const computerScoreEl = document.querySelector('#computer-score p');
const resetBtn = document.getElementById('reset-btn');

const getComputerChoice = () => {
    const options = ['rock', 'paper', 'scissor']; // Fixed spelling issue
    return options[Math.floor(Math.random() * 3)];
};

const drawGame = () => {
    msg.innerText = 'It\'s a draw! Play again.';
};

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScoreEl.innerText = userScore;
        msg.innerText = 'You win!';
    } else {
        computerScore++;
        computerScoreEl.innerText = computerScore;
        msg.innerText = 'Computer wins!';
    }
};

const playGame = (userChoice) => {
    console.log("User choice:", userChoice);
    const computerChoice = getComputerChoice();
    console.log("Computer choice:", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        const winConditions = {
            rock: "scissor",
            paper: "rock",
            scissor: "paper"
        };
        showWinner(winConditions[userChoice] === computerChoice);
    }
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});

resetBtn.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    userScoreEl.innerText = userScore;
    computerScoreEl.innerText = computerScore;
    msg.innerText = 'Play your move';
});
