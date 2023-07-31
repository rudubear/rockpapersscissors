console.log("Welcome to the rock papers scissors game");

game();

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
    console.log("Computer chose " + computerChoice);
    return computerChoice;
}

function getRandomInt(max = 3) {
    return Math.floor(Math.random() * max );
}

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
}