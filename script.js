let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const userMove = document.querySelector('.user-move');
const compMove = document.querySelector('.comp-move');
const userScoreText = document.querySelector('.user-score');
const compScoreText = document.querySelector('.comp-score');
const message = document.querySelector('.msg');
const reset = document.querySelector('.heading');


const draw = (userChoice, compChoice) => {
    userMove.innerText = userChoice[0].toUpperCase() + userChoice.substring(1);
    compMove.innerText = compChoice[0].toUpperCase() + compChoice.substring(1);
    message.innerText = "Wow! It's a Draw";
};

const generateCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*3)];
};

const playGame = (userChoice) => {
    const compChoice = generateCompChoice();
    if (userChoice === compChoice) {
        draw(userChoice, compChoice);
    } else {

        let userWin;

        if (userChoice == "rock") {
            userWin = (compChoice == "paper") ? false : true;
        } else if (userChoice == "paper") {
            userWin = (compChoice == "scissors") ? false : true;
        } else {
            userWin = (compChoice == "rock") ? false : true;
        }

        if (userWin) {
            userScore++;
            message.innerText = "User beats Computer";
        } else {
            compScore++;
            message.innerText = "Computer beats User";
        }

        userMove.innerText = userChoice[0].toUpperCase() + userChoice.substring(1);
        compMove.innerText = compChoice[0].toUpperCase() + compChoice.substring(1);
        userScoreText.innerText = userScore;
        compScoreText.innerText = compScore;
        
    }
}


choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});

reset.addEventListener('click', () => {
    userMove.innerText = "-";
    compMove.innerText = "-";
    userScoreText.innerText = 0;
    compScoreText.innerText = 0;
    message.innerText = "Play Your Move!";
    userScore = 0;
    compScore = 0;
});
