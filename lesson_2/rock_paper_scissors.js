const readline = require('readline-sync');
const colors = require('colors');
const VALID_CHOICES = {
  r: 'rock',
  sc: 'scissors',
  p: 'paper',
  sp: 'spock',
  l: 'lizard'
};
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
      return `${messages[choice][computerChoice]} *** You Win! ***`.bold.green;
    } else if (computerChoice === results[index][0] &&
      results[index].slice(1).includes(choice)) {
      return `${messages[computerChoice][choice]} *** Computer Win! ***`.bold.red;
    }
  }
  return "*** It's a tie ***".bold.bgBlue;
}

while (true) {
  let choiceMessage = Object.keys(VALID_CHOICES).map(key => {
    return `[${key}/${VALID_CHOICES[key]}]`;
  });
  prompt(`Choose one: ${choiceMessage.join(', ')}`);
  let choice = readline.question('> ');

  let shortChoices = Object.keys(VALID_CHOICES);
  let longChoices = Object.values(VALID_CHOICES);
  while (!shortChoices.includes(choice) && !longChoices.includes(choice)) {
    prompt("That's not a valid choice".red);
    choice = readline.question('> ');
  }

  let randomIndex = Math.floor(Math.random() * longChoices.length);
  let computerChoice = longChoices[randomIndex];

  choice = choice.length > 2 ? choice : VALID_CHOICES[choice];
  prompt(displayWinner(choice, computerChoice, RESULTS, MESSAGES));

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question('> ');
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question('> ').toLowerCase();
  }

  if (answer[0] !== 'y') break;

  let lineLength = `Choose one: ${choiceMessage.join(', ')}`.length;
  prompt(colors.green(`${'-'.repeat(lineLength)}`));
}