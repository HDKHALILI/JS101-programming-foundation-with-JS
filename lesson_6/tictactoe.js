const readline = require("readline-sync");

const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";
const WINNING_GAME_NUMBER = 5;

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

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}
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

function gameWinner(scores) {
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
  return readline.question().toLowerCase()[0];
}

while (true) {
  let scores = {
    player: 0,
    computer: 0,
  };

  while (true) {
    let board = initialiseBoard();

    while (true) {
      displayBoard(board);
      displayScores(scores);

      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

      computerChoosesSquare(board);
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
      if (answer !== "y") {
        prompt(`${gameWinner(scores)} Won the Match!`);
        break;
      }
    } else {
      prompt(`${gameWinner(scores)} Won the Match!`);
      break;
    }
  }

  let answer = palyAgain("Play another match? (y or n)");
  if (answer[0] !== "y") break;
}
