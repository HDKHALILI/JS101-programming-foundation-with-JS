const readline = require('readline-sync');
const colors = require('colors');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const RESULTS = [
  ['rock', 'scissors', 'lizard'],
  ['scissors', 'paper', 'lizard'],
  ['paper', 'rock', 'spock'],
  ['spock', 'rock', 'scissors'],
  ['lizard', 'paper', 'spock']
];
const MESSAGES = {
  rock: {
    scissors: "Rock crushed the Scissors",
    lizard: "Rock crushed the Lizard"
  },
  scissors: {
    paper: "Scissors cut the Paper",
    lizard: "Scissors decaptitated the Lizard"
  },
  paper: {
    rock: "Paper covered the Rock",
    spock: "Paper disproved Spock"
  },
  spock: {
    rock: "Spock vaporized the Rock",
    scissors: "Spock smashed the Scissors"
  },
  lizard: {
    paper: "Lizard ate the Paper",
    spock: "Lizard poisoned Spock"
  }

};

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice, results, messages) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  for (let index = 0; index < results.length; index += 1) {
    if (choice === results[index][0] &&
      results[index].slice(1).includes(computerChoice)) {
      return `*** You Win! *** ${messages[choice][computerChoice]}`.bold.green;
    } else if (computerChoice === results[index][0] &&
      results[index].slice(1).includes(choice)) {
      return `*** Computer Win! *** ${messages[computerChoice][choice]}`.bold.red;
    }
  }
  return "*** It's a tie ***".bold.bgBlue;
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question('> ');

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice".red);
    choice = readline.question('> ');
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(displayWinner(choice, computerChoice, RESULTS, MESSAGES));

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question('> ');
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question('> ').toLowerCase();
  }

  if (answer[0] !== 'y') break;

  let lineLength = `Choose one: ${VALID_CHOICES.join(', ')}`.length;
  prompt(colors.green(`${'-'.repeat(lineLength)}`));
}