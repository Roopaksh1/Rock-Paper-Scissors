let playerSelection;
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
const gameScreen = document.querySelector(".game-screen");

startButton.addEventListener("click", Start);
rockButton.addEventListener("click", game);
paperButton.addEventListener("click", game);
scissorButton.addEventListener("click", game);
homeButton.addEventListener("click", home);

function home() {
    gameScreen.classList.add("hidden");
    menu.classList.remove("hidden");
    document.body.style.background = "url(images/bg.jpg) no-repeat center center fixed";
    document.body.style.backgroundSize = "100rem 100rem";
}

function Start() {
    reset();
    heading.textContent = "Choose Your Object";
    menu.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    document.body.style.background = "black";
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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissor") {
        if ((playerSelection === "Rock" && computerSelection === "Scissor") ||
            (playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Scissor" && computerSelection === "Paper"))
            return 1;
        else if (playerSelection === computerSelection)
            return 0;
        else
            console.log(`YOU LOSE! ${computerSelection} beats ${playerSelection}`);
        return -1;
    }
}

function game(e) {

    computerSelection = getComputerChoice();
    playerSelection = e.target.textContent;

    const pScore = document.querySelector(".player-score");
    const cScore = document.querySelector(".computer-score");
    let result = playRound(playerSelection, computerSelection);
    round++;

    if (result === 1)
        playerScore++;
    else if (result === -1)
        computerScore++;

    pScore.textContent = `${playerScore}`;
    cScore.textContent = `${computerScore}`;

    const resultText = document.querySelector(".result-screen");
    const resultDeclare = document.querySelector(".result-declare");

    resultText.children[round].children[0].textContent = `${playerSelection}`;
    resultText.children[round].children[1].textContent = `${computerSelection}`;

    if (round === 5) {
        rockButton.classList.add("hidden");
        paperButton.classList.add("hidden");
        scissorButton.classList.add("hidden");
        if (playerScore > computerScore)
            resultDeclare.textContent = `Player Wins! ${playerScore} - ${computerScore}`
        else if (playerScore === computerScore)
            resultDeclare.textContent = `DRAW! ${playerScore} - ${computerScore}`
        else
            resultDeclare.textContent = `Computer Wins! ${playerScore} - ${computerScore}`
    }
}

function reset() {
    computerScore = 0;
    playerScore = 0;
    round = 0;
    rockButton.classList.remove("hidden");
    paperButton.classList.remove("hidden");
    scissorButton.classList.remove("hidden");

    const pScore = document.querySelector(".player-score");
    const cScore = document.querySelector(".computer-score");
    pScore.textContent = 0;
    cScore.textContent = 0;

    const resultText = document.querySelector(".result-screen").children;
    for(let i = 1; i < resultText.length; i++){
        resultText[i].children[0].textContent = "";
        resultText[i].children[1].textContent = "";
    }
}