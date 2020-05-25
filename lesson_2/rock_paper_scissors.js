const readline = require('readline-sync');
const colors = require('colors');
const VALID_CHOICES = {
  r: 'rock',
  sc: 'scissors',
  p: 'paper',
  sp: 'spock',
  l: 'lizard'
};

const RESULTS = {
  rock: {
    beats: ['scissors', 'lizard'],
    messages: {
      scissors: "Rock crushed the Scissors",
      lizard: "Rock crushed the Lizard"
    }
  },
  scissors: {
    beats: ['paper', 'lizard'],
    messages: {
      paper: "Scissors cut the Paper",
      lizard: "Scissors decaptitated the Lizard"
    }
  },
  paper: {
    beats: ['rock', 'spock'],
    messages: {
      rock: "Paper covered the Rock",
      spock: "Paper disproved Spock"
    }
  },
  spock: {
    beats: ['rock', 'scissors'],
    messages: {
      rock: "Spock vaporized the Rock",
      scissors: "Spock smashed the Scissors"
    }
  },
  lizard: {
    beats: ['paper', 'spock'],
    messages: {
      paper: "Lizard ate the Paper",
      spock: "Lizard poisoned Spock"
    }
  }
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWin(choice, computerChoice, results) {
  return results[choice].beats.includes(computerChoice);
}

function displayWinner(choice, computerChoice, results) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  let message;
  if (playerWin(choice, computerChoice, results)) {
    message = results[choice].messages[computerChoice];
    prompt(`${message} *** You Win! ***`.bold.green);
  } else if (playerWin(computerChoice, choice, results)) {
    message = results[computerChoice].messages[choice];
    prompt(`${message} *** Computer Win! ***`.bold.red);
  } else {
    prompt("*** It's a tie ***".bold.bgBlue);
  }
}

function getPlayerChoice(message) {
  prompt(`Choose one: ${message.join(', ')}`);
  return readline.question('> ').toLowerCase();
}

function getComputerChoice(choices) {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function invalidPlayerChoice(choice, shortChoices, longChoices) {
  return !shortChoices.includes(choice) && !longChoices.includes(choice);
}

function displayScore(scores) {
  prompt(`Your score: ${scores.user}`.green);
  prompt(`Computer score: ${scores.computer}`.red);
}

function getInstruction(choices) {
  return Object.keys(choices).map(key => {
    return `[${key}/${choices[key]}]`;
  });
}

function incrementScores(choice, computerChoice, results, scores) {
  if (playerWin(choice, computerChoice, results)) {
    scores.user += 1;
  } else if (playerWin(computerChoice, choice, results)) {
    scores.computer += 1;
  }
}

function playAgain() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question('> ').toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question('> ').toLowerCase();
  }
  return answer[0];
}

function printDivider(instruction) {
  let lineLength = `Choose one: ${instruction.join(', ')}`.length;
  prompt(colors.green(`${'-'.repeat(lineLength)}`));
}

function clearScreen() {
  console.clear();
}

const scores = {
  user: 0,
  computer: 0
};

prompt("Welcome to rock paper scissors spock lizard.".bold.green);
prompt("Play with computer. Whoever wins 5 games first wins the game".green);

while (true) {
  let instruction = getInstruction(VALID_CHOICES);
  let shortChoices = Object.keys(VALID_CHOICES);
  let longChoices = Object.values(VALID_CHOICES);
  let playerChoice = getPlayerChoice(instruction);
  let computerChoice = getComputerChoice(longChoices);

  while (invalidPlayerChoice(playerChoice, shortChoices, longChoices)) {
    prompt("That's not a valid choice".red);
    playerChoice = getPlayerChoice(instruction);
  }
  clearScreen();

  playerChoice = playerChoice.length > 2 ?
    playerChoice : VALID_CHOICES[playerChoice];

  displayWinner(playerChoice, computerChoice, RESULTS);
  incrementScores(playerChoice, computerChoice, RESULTS, scores);
  displayScore(scores);

  if (scores.user >= 5) {
    prompt('*** GAME OVER! ***\n*** YOU WIN!***'.bold.green);
    break;
  } else if (scores.computer >= 5) {
    prompt('*** GAME OVER! ***\n*** COMPUTER WIN! ***'.bold.red);
    break;
  }

  if (playAgain() !== 'y') break;
  clearScreen();
  displayScore(scores);
  printDivider(instruction);
}