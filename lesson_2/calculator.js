// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

// check if number is invalid
// -> boolean
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// Welcome user
prompt(MESSAGES['welcome']);

let calculate = true;

while (calculate) {
  prompt(MESSAGES['firstNumber']);
  let number1 = readline.question('> ');
  while (invalidNumber(number1)) {
    prompt(MESSAGES['invalidNumber']);
    number1 = readline.question('> ');
  }

  prompt(MESSAGES['secondNumber']);
  let number2 = readline.question('> ');
  while (invalidNumber(number2)) {
    prompt(MESSAGES['invalidNumber']);
    number2 = readline.question('> ');
  }

  prompt(MESSAGES['operations']);
  let operation = readline.question('> ');
  // as longs as the input isn't one of the value 1, 2, 3, or 4, keep asking
  // the user for a valid operation number
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['invalidOperation']);
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

  prompt(MESSAGES['again']);
  let answer = readline.question('> ');
  if (!answer.toLowerCase().startsWith('y')) {
    prompt(MESSAGES['goodBye']);
    break;
  }
}