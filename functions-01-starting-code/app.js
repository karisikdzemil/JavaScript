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

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, therefore you `;
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
// const combine = (resultHandler, operator, ...numbers) => {
//   const validateNumber = (number) => {
//     return isNaN(number) ? 0 : number;
//   };

//   let sum = 0;
//   for (const num of numbers) {
//     if (operator === "ADD") {
//       sum += validateNumber(num);
//     } else {
//       sum -= validateNumber(num);
//     }
//   }
//   resultHandler(sum);
// };

// // const substractUp = (resultHandler, ...numbers) => {
// //   let sum = 0;
// //   for (const num of numbers) {
// //     sum -= num;
// //   }
// //   resultHandler(sum);
// // };

// const showResult = (textMessage, result) => {
//   alert(textMessage + " " + result);
// };
// combine(
//   showResult.bind(this, "The result after adding all numbers is: "),
//   "ADD",
//   2,
//   5,
//   "abjvo",
//   6,
//   3,
//   7,
//   4,
//   7,
//   8
// );
// combine(
//   showResult.bind(this, "The result after adding all numbers is: "),
//   "ADD",
//   2,
//   5,
//   23,
//   6,
//   3,
//   7,
//   4,
//   7,
//   8
// );
// combine(
//   showResult.bind(this, "The result after substrackting all numbers is: "),
//   2,
//   5,
//   3,
//   6,
//   3,
//   7,
//   4,
//   7,
//   8
// );

// code wars solution

// function flattenAndSort(array) {
//   // Step 1: Flatten the array
//   let flattenedArray = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       flattenedArray.push(array[i][j]);
//     }
//   }

//   // Step 2: Sort the flattened array using Bubble Sort
//   for (let i = 0; i < flattenedArray.length; i++) {
//     for (let j = 0; j < flattenedArray.length - 1; j++) {
//       if (flattenedArray[j] > flattenedArray[j + 1]) {
//         // Swap elements
//         let temp = flattenedArray[j];
//         flattenedArray[j] = flattenedArray[j + 1];
//         flattenedArray[j + 1] = temp;
//       }
//     }
//   }

//   return flattenedArray;
// }

// // Test the function with the provided example
// const inputArray = [[3, 2, 1], [4, 6, 5], [9, 7, 8]];
// const result = flattenAndSort(inputArray);
// console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function disemvowel(str) {
//   let str2 = "";
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] !== "a" &&
//       str[i] !== "e" &&
//       str[i] !== "i" &&
//       str[i] !== "o" &&
//       str[i] !== "u" &&
//       str[i] !== "A" &&
//       str[i] !== "E" &&
//       str[i] !== "I" &&
//       str[i] !== "O" &&
//       str[i] !== "U"
//     ) {
//       str2 = str2 + str[i];
//     }
//   }
//   str = str2;
//   return str;
// }

// console.log(disemvowel("This website is for losers LOL!"));

// function squareDigits(num){
//    let newNum = "";
//    num = num.toString();
//    for(n of num){
//     n = parseInt(n);
//     newNum += n * n;
//     newNum = newNum.toString();
//    }
//    num = parseInt(newNum);
//    console.log(num);
//   return 0;
// }
// squareDigits(2112);

// function dnaStrand(dna) {
//   let newDna = "";
//   for (d of dna) {
//     if (d === "A") {
//       newDna = newDna + "T";
//     } else if (d === "T") {
//       newDna = newDna + "A";
//     } else if (d === "C") {
//       newDna = newDna + "G";
//     } else if (d === "G") {
//       newDna = newDna + "C";
//     }
//   }
//   return newDna;
// }
// dnaStrand("GTAT");


// function validatePIN (pin) {
//   let strPin = pin.toString();
//   if(strPin.length !== 4 && strPin.length !== 6){
//     return false;
//   }else{
//   for(num of strPin){
//     num = +num;
//     if(isNaN(num)){
//       return false;
//     }else if(num < 0){
//       return false;
//     }else{
//       return true;
//     }
//   }
//   }
// }
// console.log(validatePIN());
