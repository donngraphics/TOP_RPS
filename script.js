const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

// btnRock.onclick = () => {

//     console.log("ROCK");
// }

// btnPaper.onclick = () => {

//     console.log("Paper");
// }

// btnScissors.onclick = () => {

//     console.log("Scissors");
// }



const computerChoice = ["ROCK", "PAPER", "SCISSORS"];

let humanScore = 0;
let computerScore = 0;





function getComputerChoice() {
    let randChoice = Math.floor(Math.random() * computerChoice.length);


    return computerChoice[randChoice]


}



const buttons = document.querySelectorAll("button");


// function logText(e) {

//     let humanClick = this.id;
//     console.log(humanClick);
//     console.log(typeof (humanClick));
// }

const container = document.getElementById("container")
const outCome = document.createElement("p");
const endSore = document.createElement('p');

outCome.setAttribute("class", "settings");
endSore.setAttribute("class", "settings");
outCome.textContent = "Get Ready to Throw!";

container.appendChild(outCome);

let round = 0;

function playGame() {

    let computer = getComputerChoice();

    let human = this.id;
    let humanClick = human.toUpperCase();

    while (round < 5) {

        console.log(`ROUND: ${round}`);

        if (humanClick === "PAPER" && computer === "ROCK") {
            humanScore += 1;
            console.log(`You threw ${humanClick} | Computer threw ${computer} - Paper beats rock, you win! Your score: ${humanScore} | Computer score: ${computerScore}`);
            outCome.textContent = `You threw ${humanClick} | Computer threw ${computer} - Paper beats rock, you win! Your score: ${humanScore} | Computer score: ${computerScore}`;


        } else if (humanClick == "ROCK" && computer == "PAPER") {
            computerScore += 1;
            console.log(`You threw ${humanClick} | Computer threw ${computer} - Paper beats rock, you lose! Your score: ${humanScore} | Computer score: ${computerScore}`);
            outCome.textContent = `You threw ${humanClick} | Computer threw ${computer} - Paper beats rock, you lose! Your score: ${humanScore} | Computer score: ${computerScore}`;


        } else if (humanClick == "SCISSORS" && computer == "PAPER") {
            humanScore += 1;
            console.log(`You threw ${humanClick} | Computer threw ${computer} - Scissors beats paper, you win! Your score: ${humanScore} | Computer score: ${computerScore}`);
            outCome.textContent = `You threw ${humanClick} | Computer threw ${computer} - Scissors beats paper, you win! Your score: ${humanScore} | Computer score: ${computerScore}`;


        } else if (humanClick == "PAPER" && computer == "SCISSORS") {
            computerScore += 1;
            console.log(`You threw ${humanClick} | Computer threw ${computer} - Scissors beats paper, you lose! Your score: ${humanScore} | Computer score: ${computerScore}`);
            outCome.textContent = `You threw ${humanClick} | Computer threw ${computer} - Scissors beats paper, you lose! Your score: ${humanScore} | Computer score: ${computerScore}`;


        } else if (humanClick == "ROCK" && computer == "SCISSORS") {
            humanScore += 1;
            console.log(`You threw ${humanClick} | Computer threw ${computer} - Rock beats Scissors, you win! Your score: ${humanScore} | Computer score: ${computerScore}`);
            outCome.textContent = `You threw ${humanClick} | Computer threw ${computer} - Rock beats Scissors, you win! Your score: ${humanScore} | Computer score: ${computerScore}`;


        } else if (humanClick == "SCISSORS" && computer == "ROCK") {
            computerScore += 1;
            console.log(`You threw ${humanClick} | Computer threw ${computer} - Rock beats Scissors, you lose! Your score: ${humanScore} | Computer score: ${computerScore}`)
            outCome.textContent = `You threw ${humanClick} | Computer threw ${computer} - Rock beats Scissors, you lose! Your score: ${humanScore} | Computer score: ${computerScore}`;


        } else if (humanClick == computer) {
            console.log(`You threw ${humanClick} | Computer threw ${computer} - Wow, a tie! Your score: ${humanScore} | Computer score: ${computerScore}`);
            outCome.textContent = `You threw ${humanClick} | Computer threw ${computer} - Wow, a tie! Your score: ${humanScore} | Computer score: ${computerScore}`;


        } else {
            computerScore += 1;
            console.log(`You threw ${humanClick} | Computer threw ${computer} - You threw...what ? Score for the computer! ${computerScore} `);


        }
        round++;
        break;
    }


    if (round == 5) {
        container.appendChild(endSore);
        if (humanScore > computerScore) {
            console.log(`Total score: You ${humanScore} | Computer ${computerScore} - YOU WIN!`);
            endSore.textContent = `Total score: You ${humanScore} | Computer ${computerScore} - YOU WIN!`;

        } else if (humanScore < computerScore) {
            console.log(`Total score: You ${humanScore} | Computer ${computerScore} - You lose, try again next time!`);
            endSore.textContent = `Total score: You ${humanScore} | Computer ${computerScore} - You lose, try again next time!`;

        } else {
            console.log(`Total score: You ${humanScore} | Computer ${computerScore} - It ends in a tie ??? `);
            endSore.textContent = `Total score: You ${humanScore} | Computer ${computerScore} - It ends in a tie ???`;

        }
    }



}

buttons.forEach(button => button.addEventListener("click", playGame));



