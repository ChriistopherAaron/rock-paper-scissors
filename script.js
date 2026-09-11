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

