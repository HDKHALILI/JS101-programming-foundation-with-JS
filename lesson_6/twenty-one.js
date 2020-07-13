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

function initialiseDeck() {
  let deck = [];
  SUITS.forEach((suit) => {
    VALUES.forEach((value) => {
      deck.push([suit, value]);
    });
  });

  return deck;
}

let deck = initialiseDeck();

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

function displayCards(cards, player) {
  let message;
  if (player === "player") {
    message = "Your have: ";
    cards.forEach((card) => {
      let [name, value] = card;
      message += `[${name} ${value}] `;
    });
  } else {
    message = `Dealer has: [${cards[0][0]} ${cards[0][1]}] [...]`;
  }

  prompt(message);
}

while (true) {
  let playerCards = dealCards(deck);
  let dealerCards = dealCards(deck);

  while (true) {
    displayCards(playerCards, "player");
    displayCards(dealerCards, "player");

    prompt("[H]it or [S]tay");
    let answer = readline.prompt().toLowerCase();
    if (answer === "h") {
      playerCards.push(hit(deck));
    }
  }
}
