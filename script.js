
const computerChoice = ["ROCK", "PAPER", "SCISSORS"];

//let humanChoice = prompt("Get ready to throw!", "");

let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    let randChoice = Math.floor(Math.random() * computerChoice.length);

    return computerChoice[randChoice]


}

//console.log(getComputerChoice())

function getHumanChoice(choice) {

    if ((choice !== "ROCK") && (choice !== "PAPER") && (choice !== "SCISSORS")) {
        return "Hmm, recheck that entry...";
    } else {
        return choice.toUpperCase();
    }

}

//console.log(getHumanChoice(humanChoice.toUpperCase()));


function playGame() {


    for (let round = 0; round < 5; round++) {

        let computer = getComputerChoice();

        let humanInput = prompt("Get ready to throw!", "");
        let human = humanInput.toUpperCase();

        if (human === "PAPER" && computer === "ROCK") {
            humanScore += 1;
            console.log(`You threw ${human} | Computer threw ${computer} - Paper beats rock, you win! Your score: ${humanScore} | Computer score: ${computerScore}`);
        } else if (human == "ROCK" && computer == "PAPER") {
            computerScore += 1;
            console.log(`You threw ${human} | Computer threw ${computer} - Paper beats rock, you lose! Your score: ${humanScore} | Computer score: ${computerScore}`);
        } else if (human == "SCISSORS" && computer == "PAPER") {
            humanScore += 1;
            console.log(`You threw ${human} | Computer threw ${computer} - Scissors beats paper, you win! Your score: ${humanScore} | Computer score: ${computerScore}`);
        } else if (human == "PAPER" && computer == "SCISSORS") {
            computerScore += 1;
            console.log(`You threw ${human} | Computer threw ${computer} - Scissors beats paper, you lose! Your score: ${humanScore} | Computer score: ${computerScore}`);
        } else if (human == "ROCK" && computer == "SCISSORS") {
            humanScore += 1;
            console.log(`You threw ${human} | Computer threw ${computer} - Rock beats Scissors, you win! Your score: ${humanScore} | Computer score: ${computerScore}`);
        } else if (human == "SCISSORS" && computer == "ROCK") {
            computerScore += 1;
            console.log(`You threw ${human} | Computer threw ${computer} - Rock beats Scissors, you lose! Your score: ${humanScore} | Computer score: ${computerScore}`)
        } else if (human == computer) {
            console.log(`You threw ${human} | Computer threw ${computer} - Wow, a tie! Your score: ${humanScore} | Computer score: ${computerScore}`);
        } else {
            computerScore += 1;
            console.log(`You threw ${human} | Computer threw ${computer} - You threw...what? Score for the computer! ${computerScore}`);

        }
    }
    if (humanScore > computerScore) {
        console.log(`Total score: You ${humanScore} | Computer ${computerScore} - YOU WIN!`);
    } else if (humanScore < computerScore) {
        console.log(`Total score: You ${humanScore} | Computer ${computerScore} - You lose, try again next time!`);
    } else {
        console.log(`Total score: You ${humanScore} | Computer ${computerScore} - It ends in a tie ??? `);
    }


}



//console.log(playRound(getHumanChoice(humanChoice.toUpperCase()), getComputerChoice()))

console.log(playGame());

