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

function formateCards(cards) {
  let result = "";
  cards.forEach((card) => {
    result = `${result} ${formateCard(card)}`;
  });

  return result;
}

function getWinner(playerCards, dealerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);
  if (playerTotal > dealerTotal) {
    return "Player";
  } else if (dealerTotal > playerTotal) {
    return "Dealer";
  }

  return null;
}

while (true) {
  let deck = initialiseDeck();

  while (true) {
    let playerCards = dealCards(deck);
    let dealerCards = dealCards(deck);
    // player loop
    while (true) {
      // console.clear();
      prompt(`You have: ${formateCards(playerCards)}`);
      prompt(`Dealer has: ${formateCard(dealerCards[0])} [...]`);

      prompt("[h]it or [s]tay");
      let answer = readline.prompt().toLowerCase();
      if (answer === "s" || busted(playerCards)) break;
      playerCards.push(hit(deck));
    }

    if (busted(playerCards)) {
      displayResult(playerCards, dealerCards);
      break;
    } else {
      // console.clear();
      prompt("You chose to stay");
    }

    // dealer loop
    while (true) {
      if (busted(dealerCards) || total(dealerCards) >= 17) break;
      dealerCards.push(hit(deck));
    }

    if (busted(dealerCards)) {
      displayResult(playerCards, dealerCards);
      break;
    } else if (getWinner(playerCards, dealerCards)) {
      displayResult(playerCards, dealerCards);
      break;
    } else {
      displayResult(playerCards, dealerCards);
      break;
    }
  }

  prompt("Do you want to play again? [y/n]");
  let answer = readline.prompt().toLowerCase();
  if (answer === "n") break;
}

function displayResult(playerCards, dealerCards) {
  let winner = getWinner(playerCards, dealerCards);
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  prompt(`You have: ${formateCards(playerCards)} | Your total: ${playerTotal}`);
  prompt(
    `Dealer has: ${formateCards(dealerCards)} | Dealer total: ${dealerTotal}`
  );
  if (busted(playerCards)) {
    prompt("You Got Busted!");
    prompt("Dealer Win!");
  } else if (busted(dealerCards)) {
    prompt("Dealer Got Busted!");
    prompt("Player Win!");
  } else if (winner) {
    prompt(`${winner} Win!!`);
  } else {
    prompt("It is a tie!");
  }
}
