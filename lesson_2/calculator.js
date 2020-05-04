// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

// check if number is invalid
// -> boolean
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// Welcome user
prompt('Welcome to Calculator!');

let calculate = true;

while (calculate) {
  prompt("What is the first number?");
  let number1 = readline.question('> ');
  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question('> ');
  }

  prompt('What is the second number?');
  let number2 = readline.question('> ');
  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readline.question('> ');
  }

  prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
  let operation = readline.question('> ');
  // as longs as the input isn't one of the value 1, 2, 3, or 4, keep asking
  // the user for a valid operation number
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("Must choose 1, 2, 3 or 4");
    operation = readline.question('> ');
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is: ${output}`);

  prompt('Do you want calculate again? [y/n]');
  let answer = readline.question('> ');
  if (!answer.toLowerCase().startsWith('y')) {
    console.log('Thank you for using calculator. Good Bye!');
    break;
  }
}