const readline = require('readline-sync');
const colors = require('colors');
const VALID_CHOICES = {
  r: 'rock',
  sc: 'scissors',
  p: 'paper',
  sp: 'spock',
  l: 'lizard'
};

const OUTCOMES = {
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

function displayWinner(choice, computerChoice, results) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  let message;
  if (results[choice].beats.includes(computerChoice)) {
    message = results[choice].messages[computerChoice];
    return `${message} *** You Win! ***`.bold.green;
  } else if (results[computerChoice].beats.includes(choice)) {
    message = results[computerChoice].messages[choice];
    return `${message} *** Computer Win! ***`.bold.red;
  } else {
    return "*** It's a tie ***".bold.bgBlue;
  }
}

let userWin = 0;
let computerWin = 0;

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
  let result = displayWinner(choice, computerChoice, OUTCOMES);
  prompt(result);

  if (result.includes('You')) {
    userWin += 1;
  } else if (result.includes('Computer')) {
    computerWin += 1;
  }

  if (userWin >= 5) {
    prompt('*** GAME OVER! ***\n*** YOU WIN! ***'.bold.green);
    break;
  } else if (computerWin >= 5) {
    prompt('*** GAME OVER! ***\n*** COMPUTER WIN! ***'.bold.red);
    break;
  }

  prompt(`Your win: ${userWin}`.green);
  prompt(`Computer's win: ${computerWin}`.red);

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