// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

// check if number is invalid
// -> boolean
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// Welcome user
prompt('welcome');

let calculate = true;

while (calculate) {
  prompt('firstNumber');
  let number1 = readline.question('> ');
  while (invalidNumber(number1)) {
    prompt('invalidNumber');
    number1 = readline.question('> ');
  }

  prompt('secondNumber');
  let number2 = readline.question('> ');
  while (invalidNumber(number2)) {
    prompt('invalidNumber');
    number2 = readline.question('> ');
  }

  prompt('operations');
  let operation = readline.question('> ');
  // as longs as the input isn't one of the value 1, 2, 3, or 4, keep asking
  // the user for a valid operation number
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('invalidOperation');
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

  console.log(`=> The result is: ${output}`);

  prompt('again');
  let answer = readline.question('> ');
  if (!answer.toLowerCase().startsWith('y')) {
    prompt('goodBye');
    calculate = false;
  }
}