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



// function getComputerChoice() {
//     let randChoice = Math.floor(Math.random() * computerChoice.length);

//     return computerChoice[randChoice]


// }


// function getHumanChoice(choice) {

//     if ((choice !== "ROCK") && (choice !== "PAPER") && (choice !== "SCISSORS")) {
//         return "Hmm, recheck that entry...";
//     } else {
//         return choice.toUpperCase();
//     }

// }

function getComputerChoice() {
    let randChoice = Math.floor(Math.random() * computerChoice.length);
    // let computerThrew = computerChoice[randChoice];

    // if (computerThrew == "ROCK") {
    //     console.log("A tie? How can it be??");
    // } else if (computerThrew == "PAPER") {
    //     console.log("Believe it or not, Paper beats Rock!");
    // } else {
    //     console.log("Rock beats Scissors, you win!");

    // }

    return computerChoice[randChoice]


}

//btnRock.addEventListener("click", getComputerChoice);


const buttons = document.querySelectorAll("button");


// function logText(e) {

//     let humanClick = this.id;
//     console.log(humanClick);
//     console.log(typeof (humanClick));
// }


function playGame() {


    // for (let round = 0; round < 5; round++) {

    let computer = getComputerChoice();

    let human = this.id;
    let humanClick = human.toUpperCase();

    //let human = humanInput.toUpperCase();





    if (humanClick === "PAPER" && computer === "ROCK") {
        humanScore += 1;
        console.log(`You threw ${humanClick} | Computer threw ${computer} - Paper beats rock, you win! Your score: ${humanScore} | Computer score: ${computerScore}`);
    } else if (humanClick == "ROCK" && computer == "PAPER") {
        computerScore += 1;
        console.log(`You threw ${humanClick} | Computer threw ${computer} - Paper beats rock, you lose! Your score: ${humanScore} | Computer score: ${computerScore}`);
    } else if (humanClick == "SCISSORS" && computer == "PAPER") {
        humanScore += 1;
        console.log(`You threw ${humanClick} | Computer threw ${computer} - Scissors beats paper, you win! Your score: ${humanScore} | Computer score: ${computerScore}`);
    } else if (humanClick == "PAPER" && computer == "SCISSORS") {
        computerScore += 1;
        console.log(`You threw ${humanClick} | Computer threw ${computer} - Scissors beats paper, you lose! Your score: ${humanScore} | Computer score: ${computerScore}`);
    } else if (humanClick == "ROCK" && computer == "SCISSORS") {
        humanScore += 1;
        console.log(`You threw ${humanClick} | Computer threw ${computer} - Rock beats Scissors, you win! Your score: ${humanScore} | Computer score: ${computerScore}`);
    } else if (humanClick == "SCISSORS" && computer == "ROCK") {
        computerScore += 1;
        console.log(`You threw ${humanClick} | Computer threw ${computer} - Rock beats Scissors, you lose! Your score: ${humanScore} | Computer score: ${computerScore}`)
    } else if (humanClick == computer) {
        console.log(`You threw ${humanClick} | Computer threw ${computer} - Wow, a tie! Your score: ${humanScore} | Computer score: ${computerScore}`);
    } else {
        computerScore += 1;
        console.log(`You threw ${humanClick} | Computer threw ${computer} - You threw...what? Score for the computer! ${computerScore}`);

    }
    //}
    if (humanScore > computerScore) {
        console.log(`Total score: You ${humanScore} | Computer ${computerScore} - YOU WIN!`);
    } else if (humanScore < computerScore) {
        console.log(`Total score: You ${humanScore} | Computer ${computerScore} - You lose, try again next time!`);
    } else {
        console.log(`Total score: You ${humanScore} | Computer ${computerScore} - It ends in a tie ??? `);
    }


}

buttons.forEach(button => button.addEventListener("click", playGame));


//console.log(playRound(getHumanChoice(humanChoice.toUpperCase()), getComputerChoice()))

//console.log(playGame());

