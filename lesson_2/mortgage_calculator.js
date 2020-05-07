const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trim() === '' ||
    Number(number) < 0 ||
    Number.isNaN(Number(number));
}

prompt("Welcome to Mortgage Calculator!");

while (true) {
  prompt(`*${'-'.repeat(50)}*`);
  prompt("Enter Loan Amount");
  let amount = readline.question('> ');
  while (invalidNumber(amount)) {
    prompt("Please enter a correct value");
    amount = readline.question('> ');
  }

  prompt("Enter the interest rate\n [5 for 5% or 2.5 for 2.5%]");
  let interestRate = readline.question('> ');
  while (invalidNumber(interestRate)) {
    prompt("Please enter a correct value [5 for 5%");
    interestRate = readline.question('> ');
  }

  prompt("Enter the Loan Duration (in months)");
  let duration = readline.question('> ');
  while (invalidNumber(duration)) {
    prompt("Please enter a correct value [60 for 5 years]");
    duration = readline.question('> ');
  }

  let anualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = anualInterestRate / 12;


  let monthlyRepayment = Number(amount) *
    (monthlyInterestRate /
      (1 - Math.pow((1 + monthlyInterestRate), (-Number(duration)))));

  console.log(`Monthly Repayment: $${monthlyRepayment.toFixed(2)}`);

  prompt("Do you want to calculate again?");
  let answer = readline.question('> ').toLowerCase();
  while (!answer.startsWith('n') && !answer.startsWith('y')) {
    prompt("Please enter yes(y) or no(n)");
    answer = readline.question('> ');
  }

  if (answer.toLowerCase().startsWith('n')) break;
}
