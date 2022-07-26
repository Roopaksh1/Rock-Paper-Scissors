let computerSelection;
let computerScore = 0;
let playerScore = 0;
let round = 0;

const heading = document.querySelector(".heading");
const menu = document.querySelector(".menu");
const startButton = document.querySelector(".start-btn");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");
const homeButton = document.querySelector(".home-btn");
const gameButtons = document.querySelector(".game-btn")
const gameScreen = document.querySelector(".game-screen");
const matchResult = document.querySelector(".match-result p");
const pScore = document.querySelector(".player-score");
const cScore = document.querySelector(".computer-score");

startButton.addEventListener("click", Start);
rockButton.addEventListener("click", getPlayerChoice);
paperButton.addEventListener("click", getPlayerChoice);
scissorButton.addEventListener("click", getPlayerChoice);
homeButton.addEventListener("click", home);

//function to hide game Screen and show home screen
function home() {
    gameScreen.classList.add("hidden");
    menu.classList.remove("hidden");
    document.body.style.background = "url(images/bg.jpg) no-repeat center center fixed";
    document.body.style.backgroundSize = "100rem 100rem";
}

//function to hide home screen and show game screen
function Start() {
    reset();
    heading.textContent = "Choose Your Object";
    menu.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    document.body.style.background = "#4a4e69";
}


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0)
        return "Rock";
    else if (choice === 1)
        return "Paper";
    else
        return "Scissor";
}

function getPlayerChoice(e) {
    if (e.target === rockButton)
        return game("Rock");
    else if (e.target === paperButton)
        return game("Paper");
    else
        return game("Scissor");
}

function displayChoice(playerSelection, computerSelection) {
    const pChoice = Array.from(document.querySelector(".player-choice").children);
    const cChoice = Array.from(document.querySelector(".computer-choice").children);

    pChoice.forEach(item => item.classList.add("hidden"));
    cChoice.forEach(item => item.classList.add("hidden"));

    switch (playerSelection) {
        case "Rock": pChoice[0].classList.remove("hidden");
            break;
        case "Paper": pChoice[1].classList.remove("hidden");
            break;
        case "Scissor": pChoice[2].classList.remove("hidden");
            break;
    }

    switch (computerSelection) {
        case "Rock": cChoice[0].classList.remove("hidden");
            break;
        case "Paper": cChoice[1].classList.remove("hidden");
            break;
        case "Scissor": cChoice[2].classList.remove("hidden");
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissor") {
        if ((playerSelection === "Rock" && computerSelection === "Scissor") ||
            (playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Scissor" && computerSelection === "Paper"))
            return 1;
        else if (playerSelection === computerSelection)
            return 0;
        else
            return -1;
    }
}

function game(playerSelection) {

    computerSelection = getComputerChoice();

    displayChoice(playerSelection, computerSelection);

    let result = playRound(playerSelection, computerSelection);
    round++;

    if (result === 1){
        playerScore++;
        pScore.textContent = `${playerScore}`;
        cScore.textContent = `${computerScore}`;
        matchResult.textContent = `${playerSelection} beats ${computerSelection}`
    }
    else if (result === -1){
        computerScore++;
        pScore.textContent = `${playerScore}`;
        cScore.textContent = `${computerScore}`;
        matchResult.textContent = `${computerSelection} beats ${playerSelection}`
    }
    else{
        pScore.textContent = `${playerScore}`;
        cScore.textContent = `${computerScore}`;
        matchResult.textContent = `Tie`;
    }

    if (round === 5) {
        gameButtons.classList.add("hidden");
        if (playerScore > computerScore)
            matchResult.textContent = "You Win";
        else if (playerScore === computerScore)
            matchResult.textContent = "Draw";
        else
            matchResult.textContent = "Computer Win";
    }
}

function reset() {
    computerScore = 0;
    playerScore = 0;
    round = 0;
    gameButtons.classList.remove("hidden");
    pScore.textContent = "0";
    cScore.textContent = "0";
    matchResult.textContent = "";

    const pChoice = Array.from(document.querySelector(".player-choice").children);
    const cChoice = Array.from(document.querySelector(".computer-choice").children);

    pChoice.forEach(item => item.classList.add("hidden"));
    cChoice.forEach(item => item.classList.add("hidden"));
}