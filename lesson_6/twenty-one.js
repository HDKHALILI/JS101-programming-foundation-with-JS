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

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index -= 1) {
    let otherIndex = Math.floor(Math.random() * (index - 1));
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];
  }
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

function busted(total) {
  return total > 21;
}

function formateCard(card) {
  let [name, value] = card;
  return `[${name} ${value}] `;
}

function displayCards(cards, player) {
  let message = "You have: ";
  if (player === "player") {
    cards.forEach((card) => {
      message += formateCard(card);
    });
  } else {
    message = `Dealer has: ${formateCard(cards)} [...]`;
  }
  prompt(message);
}

function finalCardsDisplay(cards) {
  let message = "";
  cards.forEach((card) => {
    message += formateCard(card);
  });

  return message;
}

function getWinner(playerCards, dealerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);
  let winner = "";
  if (playerTotal > dealerTotal) {
    winner = "Player";
  } else if (dealerTotal > playerTotal) {
    winner = "Dealer";
  }

  return winner;
}

let deck = initialiseDeck();
shuffle(deck);

while (true) {
  let playerCards = dealCards(deck);
  let dealerCards = dealCards(deck);
  let winner;
  // player loop
  while (true) {
    displayCards(playerCards, "player");
    displayCards(dealerCards[0]);

    prompt("[h]it or [s]tay");
    let answer = readline.prompt().toLowerCase();
    if (answer === "s" || busted(total(playerCards))) break;
    playerCards.push(hit(deck));
  }

  if (busted(total(playerCards))) {
    prompt(`You have ${finalCardsDisplay(playerCards)}`);
    prompt(`Dealer has: ${finalCardsDisplay(dealerCards)}`);
    winner = "Dealer";
    console.log("Busted!");
    console.log(`${winner} Won!`);
    break;
  } else {
    prompt("You chose to stay");
  }

  // dealer loop
  while (true) {
    if (busted(total(dealerCards)) || total(dealerCards) >= 17) break;
    dealerCards.push(hit(deck));
  }

  if (busted(total(dealerCards))) {
    prompt(`You have ${finalCardsDisplay(playerCards)}`);
    prompt(`Dealer has: ${finalCardsDisplay(dealerCards)}`);
    prompt("Busted!");
    prompt("Player Win!");
    break;
  } else {
    winner = getWinner(playerCards, dealerCards);
    prompt(`You have ${finalCardsDisplay(playerCards)}`);
    prompt(`Dealer has: ${finalCardsDisplay(dealerCards)}`);
    console.log(`${winner} Won!`);
    break;
  }
}
