const readline = require("readline-sync");

const VALID_CHOICES = ["rock", "paper", "scissors", "spock", "lizard"];

const PLAYERS = {
  user: "user",
  computer: "computer",
};

let scoreBoard = {
  user: 0,
  computer: 0,
};

function resetScoreBoard() {
  scoreBoard.user = 0;
  scoreBoard.computer = 0;
}

const CHOICES_AND_INFERIORS = {
  rock: ["lizard", "scissors"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  spock: ["scissors", "rock"],
  lizard: ["spock", "paper"],
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function getWinner(choice, computerChoice) {
  if (CHOICES_AND_INFERIORS[choice].includes(computerChoice)) {
    return PLAYERS["user"];
  } else if (CHOICES_AND_INFERIORS[computerChoice].includes(choice)) {
    return PLAYERS["computer"];
  } else {
    return null;
  }
}

function updateScoreBoard(winner) {
  scoreBoard[winner] += 1;
}

function displayWinner(winner) {
  prompt(
    `${winner === PLAYERS["user"] ? "You are" : "Computer is"} the grand winner`
  );
}

while (true) {
  prompt(
    `choose one: ${VALID_CHOICES.join(
      ", "
    )} OR the first letter of any. Note: ("sp.." for spock, "sc.." for scissors)`
  );

  let choice;

  while (true) {
    choice = readline.question().toLowerCase();

    if (VALID_CHOICES.includes(choice)) {
      break;
    }

    if (VALID_CHOICES[0].includes(choice)) {
      choice = VALID_CHOICES[0];
      break;
    } else if (VALID_CHOICES[1].includes(choice)) {
      choice = VALID_CHOICES[1];
      break;
    } else if (VALID_CHOICES[2].includes(choice) && choice.length > 1) {
      choice = VALID_CHOICES[2];
      break;
    } else if (VALID_CHOICES[3].includes(choice) && choice.length > 1) {
      choice = VALID_CHOICES[3];
      break;
    } else if (VALID_CHOICES[4].includes(choice)) {
      choice = VALID_CHOICES[4];
      break;
    } else {
      prompt(
        `choose one: ${VALID_CHOICES.join(
          ", "
        )} OR the first letter of any. Note: ("sp.." for spock, "sc.." for scissors)`
      );
    }
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  const thisRoundWinner = getWinner(choice, computerChoice);

  if (thisRoundWinner) {
    updateScoreBoard(thisRoundWinner);
  }

  console.log(scoreBoard);

  if (scoreBoard[thisRoundWinner] === 3) {
    displayWinner(thisRoundWinner);
    resetScoreBoard();

    prompt("Do you want to play again (y/n)?");
    let answer = readline.question().toLowerCase();

    while (answer[0] !== "n" && answer[0] !== "y") {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

    if (answer[0] !== "y") {
      break;
    }
  }
}
