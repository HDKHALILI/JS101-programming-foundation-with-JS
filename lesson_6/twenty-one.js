// GOAL: get as close to 21 with going over

// Understanding the Problem
// hit: get another card
// stay: next player's turn
// bust: game lost
// deal card: give each player two cards at random

// Card:      Value:
// 2 - 10     face value
// J, Q, K    10
// Ace        1 or 11 (first card = 11, each subsequent card is 1)
const readline = require("readline-sync");
const VALUES = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

const SUITS = ["H", "D", "C", "S"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function bannerise(message, size) {
  let boxLength = size ? size + 2 : message.length + 2;
  let horizontalLine = `+${"-".repeat(boxLength)}+`;
  let emptyLine = `|${" ".repeat(boxLength)}|`;
  let messageLine = `| ${message.slice(0, size)} |`;

  console.log(horizontalLine);
  console.log(emptyLine);
  console.log(messageLine);
  console.log(emptyLine);
  console.log(horizontalLine);
}

function banneriseNoPadd(message, size) {
  let boxLength = size ? size + 2 : message.length + 2;
  let horizontalLine = `+${"-".repeat(boxLength)}+`;
  let messageLine = `| ${message.slice(0, size)} |`;

  console.log(horizontalLine);
  console.log(messageLine);
  console.log(horizontalLine);
}

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index -= 1) {
    let otherIndex = Math.floor(Math.random() * (index - 1));
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];
  }

  return deck;
}

function initialiseDeck() {
  let deck = [];
  SUITS.forEach((suit) => {
    VALUES.forEach((value) => {
      deck.push([suit, value]);
    });
  });

  return shuffle(deck);
}

function hit(deck) {
  let card = Math.floor(Math.random() * deck.length);
  return deck.splice(card, 1).flat();
}

function dealCards(deck) {
  return [hit(deck), hit(deck)];
}

function numberValue(value) {
  if (value === "A") {
    return 11;
  } else if (["J", "K", "Q"].includes(value)) {
    return 10;
  } else {
    return Number(value);
  }
}

function getAces(cards) {
  return cards.filter((card) => card === "A");
}

function total(cards) {
  let values = cards.map((card) => card[1]);
  let sum = values.reduce((total, card) => total + numberValue(card), 0);

  let aces = getAces(values);
  aces.forEach((_) => {
    if (sum > 21) {
      sum -= 10;
    }
  });

  return sum;
}

function busted(cards) {
  return total(cards) > 21;
}

function formateCard(card) {
  let [name, value] = card;
  return `[${name} ${value}]`;
}

function hand(cards) {
  return cards.map((card) => formateCard(card)).join(" ");
}

function detectResult(playerCards, dealerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  if (busted(playerCards)) {
    return "PLAYER_BUSTED";
  } else if (busted(dealerCards)) {
    return "DEALER_BUSTED";
  } else if (dealerTotal < playerTotal) {
    return "PLAYER";
  } else if (dealerTotal > playerTotal) {
    return "DEALER";
  } else {
    return "TIE";
  }
}

function displayResults(playerCards, dealerCards) {
  let result = detectResult(playerCards, dealerCards);

  switch (result) {
    case "PLAYER_BUSTED":
      bannerise("You Busted! Dealer Wins!");
      break;
    case "DEALER_BUSTED":
      bannerise("Dealer Busted! You Win!");
      break;
    case "PLAYER":
      bannerise("You Win!");
      break;
    case "DEALER":
      bannerise("Dealer Win!");
      break;
    case "TIE":
      bannerise("It's a Tie!");
  }
}

function hitOrStay() {
  prompt("Would you like to (h)it or (s)tay?");
  let answer;
  while (true) {
    answer = readline.prompt().toLowerCase();
    if (["s", "h"].includes(answer)) break;
    prompt("Invalid! please enter 'h' or 's'");
  }

  return answer;
}

function playAgain() {
  banneriseNoPadd("Do you want to play again? (y or n)");
  let answer = readline.prompt().toLowerCase();
  return answer.toLowerCase()[0] === "y";
}

while (true) {
  bannerise("Welcome to Twenty One!");

  let deck = initialiseDeck();
  let playerCards = dealCards(deck);
  let dealerCards = dealCards(deck);

  prompt(`You have: ${hand(playerCards)}, total: ${total(playerCards)}`);
  prompt(`Dealer has: ${formateCard(dealerCards[0])} [?]`);

  // player loop
  while (true) {
    let move = hitOrStay();
    if (move === "h") {
      console.clear();
      playerCards.push(hit(deck));
      prompt(
        `You now have: ${hand(playerCards)}, new total: ${total(playerCards)}`
      );
    }

    if (move === "s" || busted(playerCards)) break;
  }

  if (busted(playerCards)) {
    displayResults(playerCards, dealerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`You stayed at ${total(playerCards)}`);
  }

  // dealer loop
  prompt("Dealer's turn");

  while (total(dealerCards) < 17) {
    prompt("Dealer hits");
    dealerCards.push(hit(deck));
    prompt(`Dealer now has: ${hand(dealerCards)}`);
  }

  if (busted(dealerCards)) {
    prompt(`Dealer total: ${total(dealerCards)}`);
    displayResults(playerCards, dealerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stays at ${total(dealerCards)}`);
  }

  banneriseNoPadd(`Dealer has ${dealerCards}, total: ${total(dealerCards)}`);
  banneriseNoPadd(`Player has ${playerCards}, total: ${total(playerCards)}`);

  displayResults(playerCards, dealerCards);

  if (!playAgain()) break;
  console.clear();
}
