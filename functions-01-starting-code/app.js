const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER_WINS";
const RESULT_COMPUTER_WIN = "COMPUTER_WINS";

let gameIsRunning = false;
const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WIN
    : RESULT_COMPUTER_WIN;
// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WIN;
// } else {
//   return RESULT_COMPUTER_WIN;
// }

startGameBtn.addEventListener("click",  () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + `had draw.`;
  } else if (winner === RESULT_PLAYER_WIN) {
    message = message + `win.`;
  } else {
    message = message + `lost.`;
  }
  alert(message);
  gameIsRunning = false;
});

// Not related to game 

// rest operator
const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = (number) =>{
      return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers){
    sum += validateNumber(num);
  }
  resultHandler(sum);
}

const substractUp = function() {
  let sum = 0;
  for (const num of arguments){
    sum -= num;
  }
  return sum;
}

const showResult = (result) =>{
  alert("The result after adding all numbers is: " + result);
}
sumUp(showResult, 2, 5, 'abjvo', 6, 3, 7, 4, 7, 8);
console.log(substractUp(2, 5, 3, 6, 3, 7, 4, 7, 8));

