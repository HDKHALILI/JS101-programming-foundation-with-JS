const readline = require("readline-sync");

const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";
const WINNING_GAME_NUMBER = 5;
const DEFAULT_PLAYER = "computer";
const WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], // rows
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9], // columns
  [1, 5, 9],
  [3, 5, 7], // diagonals
];

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log("     |     |");
  console.log("");
}

function initialiseBoard() {
  let board = {};
  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function emptySquares(board) {
  return Object.keys(board).filter((key) => {
    return board[key] === INITIAL_MARKER;
  });
}

function joinOr(array, delimeter = ", ", conjunction = "or") {
  if (array.length === 2) {
    return array.join(` ${conjunction} `);
  } else if (array.length === 1) {
    return array[0];
  }

  let lastElement = array.splice(array.length - 1, 1);
  return `${array.join(delimeter)}${delimeter}${conjunction} ${lastElement}`;
}

function playerChoosesSquare(board) {
  let square; // declared here so we can use it outside the loop

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map((square) => board[square]);
  let atRisk = markersInLine.filter((val) => val === marker).length === 2;

  if (atRisk) {
    let unusedSquare = line.find((square) => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function randomSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  return emptySquares(board)[randomIndex];
}

function defend(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }

  return square;
}

function attack(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }
  return square;
}

function computerChoosesSquare(board) {
  let square = attack(board);

  if (!square) {
    square = defend(board);
  }

  if (!square && board[5] === INITIAL_MARKER) {
    square = 5;
  }

  if (!square) {
    square = randomSquare(board);
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return "Player";
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return "Computer";
    }
  }

  return null;
}

function someoneWon(board) {
  // !! convert truthy values to true
  //    converts undefined and null to false
  return !!detectWinner(board);
}

function updateScores(scores, winner) {
  if (winner) {
    scores[winner.toLowerCase()] += 1;
  }
}

function matchWinner(scores) {
  if (scores.player > scores.computer) {
    return "Player";
  } else if (scores.computer > scores.player) {
    return "Computer";
  }

  return null;
}

function displayScores(scores) {
  let message = `Player Score: ${scores.player}, Computer Score: ${scores.computer}`;
  prompt(message);
}

function palyAgain(message) {
  prompt(message);
  let answer = readline.question().toLowerCase();
  while (answer !== "y" && answer !== "n") {
    prompt("That is an invalid response");
    prompt(message);
    answer = readline.question().toLowerCase();
  }

  return answer;
}

function selectPlayer() {
  prompt("Who goes first? (computer, player or choose)");
  prompt("choose: randomly select a player");
  let answer = readline.question().toLowerCase();
  if (answer === "computer") {
    return DEFAULT_PLAYER;
  } else if (answer === "player") {
    return "player";
  }
  let players = [DEFAULT_PLAYER, "player"];
  let randomIndex = Math.floor(Math.random() * players.length);
  return players[randomIndex];
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === "player") {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === DEFAULT_PLAYER) {
    return "player";
  }

  return DEFAULT_PLAYER;
}

while (true) {
  let scores = {
    player: 0,
    computer: 0,
  };

  while (true) {
    let board = initialiseBoard();
    let currentPlayer = selectPlayer();
    while (true) {
      displayBoard(board);
      displayScores(scores);

      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      let winner = detectWinner(board);
      updateScores(scores, winner);
      prompt(`${winner} won!`);
      displayScores(scores);
    } else {
      prompt("It's a tie!");
    }

    if (
      scores.player < WINNING_GAME_NUMBER &&
      scores.computer < WINNING_GAME_NUMBER
    ) {
      let answer = palyAgain("Play another game? (y or n)");
      if (answer === "n") {
        prompt(`${matchWinner(scores)} Won the Match!`);
        break;
      }
    } else if (matchWinner(scores)) {
      prompt(`${matchWinner(scores)} Won the Match!`);
      break;
    } else {
      prompt(`The match is a tie!`);
      break;
    }
  }

  let answer = palyAgain("Play another match? (y or n)");
  if (answer[0] !== "y") break;
}
