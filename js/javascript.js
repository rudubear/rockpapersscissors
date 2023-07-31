console.log("Welcome to the rock papers scissors game");

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
    return "Computer chose " + computerChoice;
}

function getRandomInt(max = 3) {
    return Math.floor(Math.random() * max );
}

for(let x = 0; x < 100; x++){
    console.log(getComputerChoice());
}
