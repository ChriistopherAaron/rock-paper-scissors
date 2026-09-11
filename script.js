// ROCK PAPER SCISSORS PSEIDODCODE

// Step 1: Logic to get the computer's choice
// FUNCTION getComputerChoice
// Generate a random number between 0 and 2
// IF number is 0. RETURN "rock"
// IF number is 1, RETURN "paper"
// IF number is 2, RETURN "scissors"

// Step 2: Logic to get the human's choice
// FUNCTION getHumanChoice
// PROMPT user for input ("rock", "paper", or "scissors")
// RETURN user's for input (converted to lowercase)

// Step 3: Declare score variables
// CREATE humanScore variable initialized to 0
// CREATE computerScore variable initialized to 0

// Step 4: Logic to play a single round
// FUNCTION playRound(humanChoice, computerChoice)
// Make choices case-insensitive
// ELSE IF human wins (Rock beats Scissors, Paper beats Rock, Scissors beats Paper):
//    Increment humanScore by 1
//    Log winning message
// ELSE (computer wins):
//  Increment computerScore by 1
//  Log losing message

// Step 5: Logic to play the full game (5 rounds)
// FUNCTIOM playGame
// Call playRound 5 times with fresh choices each time
// Compare humanScore and computerScore
// Log the final winner of the entire game

// CODE STARTS BELOW //

function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice());

// Get Human's Chose //
function getHumanChoice() {
    let userInput = prompt("Please choose rock, paper, or scissors:");
    return userInput.toLowerCase();
}
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }

    console.log(`Current Score -> You: ${humanScore} | Computer: ${computerScore}`);
  }

  // Loop to play 5 rounds automatically
  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // Announce the final winner
  console.log("=== FINAL RESULTS ===");
  if (humanScore > computerScore) {
    console.log(`You won the game! Final Score: ${humanScore} to ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`Computer won the game! Final Score: ${computerScore} to ${humanScore}`);
  } else {
    console.log(`The game ended in a tie! ${humanScore} to ${computerScore}`);
  }
}

// Call the main game function
playGame();