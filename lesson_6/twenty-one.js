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

function dealACard(deck) {
  let card = Math.floor(Math.random() * deck.length);
  return deck.splice(card, 1).flat();
}

function dealCards(deck) {
  return [dealACard(deck), dealACard(deck)];
}

// display cards:
function displayCards(cards, player) {
  let message;
  if (player === "player") {
    message = "Your cards: ";
    cards.forEach((card) => {
      let [name, value] = card;
      message += `[${name} ${value}] `;
    });
  } else {
    message = `Dealer's cards: [${cards[0][0]} ${cards[0][1]}] [...]`;
  }

  prompt(message);
}

let playersCard = dealCards(deck);
let dealersCard = dealCards(deck);

displayCards(playersCard, "player");
displayCards(dealersCard, "dealer");
