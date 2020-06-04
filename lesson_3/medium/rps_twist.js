// Question 9:
// Method calls can take expressions as an arguments. Suppose we define
// a function called 'rps' as follows, which follows the classic rules of
// the rock-paper-scissors game, but with a slight twist: in the event of
// a tie, it awards the win to the first of the two fists.

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

// What is the result of the following call?
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// starting from inner most calls
// rps(rps('rock', 'paper'), rps('rock', 'scissors))
//   - rps('rock', 'paper') => 'paper'
//   - rps('rock', 'scissors') => 'rock'
//   -> rps('paper', 'rock') => 'paper'
// rps('paper', 'rock') => 'paper'
