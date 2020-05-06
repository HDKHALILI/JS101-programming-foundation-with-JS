// Formula: m = p * (j / (1 - Math.pow((1 + j),(-n))));
// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months

// ask the user for loan amount, APR and loan duration
// calculate the monthly repayment using formula
// show the user the result

// START
// SET loanAmount = GET loan amount
// SET apr = GET apr
// SET loadDuration = GET load duration
// SET monthlyRepayment = loanAmount * (apr / (1 - Math.pow((1 + apr), (-n))))
// PRINT monthlyRepayment
// END

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("Welcome to Mortgage Calculator!");


prompt("Enter Loan Amount");
let loanAmount = readline.question('> ');
while (invalidNumber(loanAmount)) {
  prompt("Please enter a correct value");
  loanAmount = readline.question('> ');
}

prompt("Enter the Anual Percentage Rate (APR) [5 for 5%]");
let apr = readline.question('> ');
while (invalidNumber(apr)) {
  prompt("Please enter a correct value [5 for 5%");
  apr = readline.question('> ');
}
// let mpr = (apr / 100) / 12;

prompt("Enter the Loan Duration in months");
let duration = readline.question('> ');
while (invalidNumber(duration)) {
  prompt("Please enter a correct value [60 for 5 years]");
  duration = readline.question('> ');
}

let monthlyRepayment = loanAmount * (mpr / (1 - Math.pow((1 + mpr), (-duration))));

console.log(`Monthly Repayment: $${monthlyRepayment.toFixed(2)}`);