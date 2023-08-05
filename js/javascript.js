let gameOn = true;
let winners = [];
let playerWinsCounter = 0;
let computerWinsCounter = 0;

const log = document.getElementById("log");
log.style.border = "solid 2px black";

const logEntry = document.createElement('div');
logEntry.style.border = "solid 2px grey";
logEntry.classList.add('logEntry');
log.appendChild(logEntry);

const resetButtons = document.getElementsByClassName("resetButtons");
const resetButton = document.getElementById("resetGameBtn");
const playButtons = document.getElementsByClassName("playButtons");

resetButtons[0].style.display = "none";
resetButton.addEventListener("click",resetGame)
playButtons[0].style.display = "block";

const btns = document.querySelectorAll(".makePlay");

btns.forEach((btn) => {btn.addEventListener('click', function(e) {
        const logEntry = document.createElement('p');
        logEntry.style.border = "solid 2px grey";
        logEntry.classList.add('logEntry')
        logEntry.textContent = "";
    
        const playerChoice = (e.target.getAttribute("value"));
        const computerChoice = getComputerChoice();

        const result = playRockPaperScissors(playerChoice,computerChoice);
        winners.push(result[0]);

        if(result[0] === "player") {
            updateRounds("playerRoundsWon");
        } else if (result[0] === "computer") {
            updateRounds("computerRoundsWon");
        }

        playerWinsCounter = winners.filter(playerWinsCount).length;
        computerWinsCounter = winners.filter(computerWinsCount).length;
        const logEntryPlayerResults = "Player has won " + playerWinsCounter + " times.";
        const logEntryComputerResults = "Computer has won " + computerWinsCounter + " times.";

        logEntry.textContent += "Player chose " + playerChoice + `, Computer chose ` + computerChoice + ".";
        logEntry.textContent += "\n" + result[1];
        
        if (playerWinsCounter >= 5) {
            logEntry.textContent += "Player has won this series!";
            
            winners = [];
            playerWinsCounter = 0;
            computerWinsCounter = 0;
            updateScoreBoard("playerVictoriesCount");
            seriesOver();
        } else if (computerWinsCounter >=5) {
            logEntry.textContent += "Computer has won this series!";
            winners = [];
            playerWinsCounter = 0;
            computerWinsCounter = 0;
            updateScoreBoard("computerVictoriesCount");
            seriesOver();
        }
        log.appendChild(logEntry);
    })

});

function updateScoreBoard(seriesWinnerCount) {
    const victor = document.getElementById(seriesWinnerCount);
    victor.textContent = Number(victor.textContent) + 1;
}

function seriesOver(){
    playButtons[0].style.display = "none";
    resetButtons[0].style.display = "block";
}

function resetRounds(){
    const playerRoundsWon = document.getElementById("playerRoundsWon");
    const computerRoundsWon = document.getElementById("computerRoundsWon");

    playerRoundsWon.textContent = 0;
    computerRoundsWon.textContent = 0;
}

function resetGame(){
    playButtons[0].style.display = "block";
    resetButtons[0].style.display = "none";

    log.textContent = "Starting a new series";
    resetRounds();
}

function updateRounds(roundWinner){
    const roundsWon = document.getElementById(roundWinner);
    roundsWon.textContent = Number(roundsWon.textContent)+1;
}

//game();

function getComputerChoice() {
    let computerChoice;
    switch (getRandomInt(3)){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            console.log("How did we get here?");
            break;
    }
    return computerChoice;
}

function getRandomInt(max = 3) {
    return Math.floor(Math.random() * max );
}
/*
function getPlayerChoice(){
    let playerChoice;
    while(!(["rock", "paper", "scissors", null].includes(playerChoice)) ) {
        playerChoice = prompt("Choose rock, paper or scissors: ");
        playerChoice = playerChoice ? playerChoice.toLowerCase() : playerChoice;
        console.log(playerChoice);
    }
    console.log("Player chose " + playerChoice);
    return playerChoice;    
}
*/

function playRockPaperScissors(playerSelection, computerselection){
    let winner;
    let message;
    switch(playerSelection){
        case "rock":
            switch(computerselection){
                case "rock":
                    winner = "tie";
                    message = "Tie! Rock ties Rock.";
                break;
                case "paper":
                    winner = "computer";
                    message = "You Lose! Paper beats Rock.";
                break;
                case "scissors":
                    winner = "player";
                    message = "You Win! Rock beats Scissors.";
                break;
            }
            break;
        case "paper":
            switch(computerselection){
                case "rock":
                    winner = "player";
                    message = "You Win! Paper beats Rock.";
                break;
                case "paper":
                    winner = "tie";
                    message = "Tie! Paper ties Paper.";
                break;
                case "scissors":
                    winner = "computer";
                    message = "You Lose! Scissors beats Paper.";
                break;
            }
            break;
        case "scissors":
            switch(computerselection){
                case "rock":
                    winner = "computer";
                    message = "You Lose! Rock beats Scissors.";
                break;
                case "paper":
                    winner = "player";
                    message = "You Win! Scissors beats Paper.";
                break;
                case "scissors":
                    winner = "tie";
                    message = "Tie! Scissors ties Scissors.";
                break;
            }
            break;
    }
    return [winner, message];
}

function playerWinsCount(winner){
    return winner === "player";
}

function computerWinsCount(winner){
    return winner === "computer";
}

/*
function game(){
    let gameOn = true;
    let winners = [];
    let playerWinsCounter = 0;
    let computerWinsCounter = 0;
    let round = 1;

    while(gameOn){
        console.log("Round " + parseInt(round++) + "!");
        let playerChoice = getPlayerChoice();
            if (playerChoice === null){
                console.log("Player has exited the game");
                gameOn = false;
                break;
            }

        let computerchoice = getComputerChoice();
        let result = playRockPaperScissors(playerChoice, computerchoice);
        console.log(result[1]);
        winners.push(result[0]);

        if (gameOn){
            playerWinsCounter = winners.filter(playerWinsCount).length;
            computerWinsCounter = winners.filter(computerWinsCount).length;
            console.log("Player has won " + playerWinsCounter + " times.");
            console.log("Computer has won " + computerWinsCounter + " times.");
            }
    
        if (playerWinsCounter >= 5) {
            console.log("Player has won this series!");
            gameOn = false;
        } else if (computerWinsCounter >=5) {
            console.log("Computer has won this series!");
            gameOn = false;
        }
    }    
}*/