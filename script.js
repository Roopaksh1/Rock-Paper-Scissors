let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0)
        return "rock";
    else if (choice === 1)
        return "paper";
    else
        return "scissor";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissor") {
        if ((playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissor" && computerSelection === "paper")) {
            console.log(`YOU WIN! ${playerSelection} beats ${computerSelection}`);
            return 1;
        }
        else if (playerSelection === computerSelection) {
            console.log("It's a TIE");
            return 0;
        }
        else {
            console.log(`YOU LOSE! ${computerSelection} beats ${playerSelection}`);
            return -1;
        }
    }
    else
        alert("Enter valid choice!");
}

function game() {
    for (let i = 0; i < 5; i++) {

        computerSelection = getComputerChoice();
        playerSelection = prompt("Enter your choice").toLowerCase();

        let result = playRound(playerSelection, computerSelection);
        if (result === 1)
            playerScore++;
        else if (result === -1)
            computerScore++;
        console.log(`${playerScore} - ${computerScore}`)
    }

    if (playerScore > computerScore)
        console.log(`Player Wins! ${playerScore} - ${computerScore}`)
    else if (playerScore === computerScore)
        console.log(`DRAW! ${playerScore} - ${computerScore}`)
    else
        console.log(`Computer Wins! ${playerScore} - ${computerScore}`)
}