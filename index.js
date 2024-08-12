// TRIVIA GAME
// Feel free to modify the questions and answers
const prompt=require('prompt-sync')()
const questions = [
  "What is the largest species of penguin?",
  "What is the smallest breed of dog in the world?",
  "What is the only mammal capable of sustained flight?",
];

const answers = [
  "Emperor penguin",
  "Chihuahua",
  "Bat",
];

let score = 0

// Write a function called askQuestion that takes in index as a parameter. The code block should:
// - print the question at the index
// - prompt the user to guess
// - return the user's guess

function askQuestion (index){
  console.log(questions[index])
let user = prompt(" take a guess")
return (user)
}

// Write a function called checkAnswer that takes in an index and the guess as parameters. The code block should:
// - print "The answer is " with the answer at the index
// - have an if statement that checks if the guess is equal to the answer
// - if they are equal, increase score by 1 and print "You got it correct"
// - else, print "Sorry, you got it wrong"
// - not return anything
function checkAnswer(index)





// Write a function called playGame that takes in no parameters. The code block should:
// - have a for loop that goes through every element of the questions array. 
// - in the for loop, call the askQuestion function with the index and save the return value in a variable called guess.
// - in the same for loop, call the checkAnswer function with the index and the guess 
// \- after the for loop, print "Your final score is" with their score




// Call playGame to start!





// EXTRA CREDIT CHALLENGES
// - in checkAnswer, make the condition work for lower and uppercase answers
// - in playGame, put the function calls in a while loop such that the user can play the game again after they finish
// - in askQuestion, after the user types in their guess, print their guess and ask if they want to change their answer. If they say yes, prompt them again and return the new guess. Else, return the original guess.

