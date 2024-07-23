// alert("This is my first javascript code 500. times");

const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberinput() {
  return parseInt(userInput.value);
}

function createAndWritteOutput(operator, resultBefCalc, calcNumber) {
  const calcDescrition = `${resultBefCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescrition);
}

function add() {
  const enteredNumber = getUserNumberinput();
  let initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWritteOutput("+", initialResult, enteredNumber);
}
function substract() {
  const enteredNumber = getUserNumberinput();
  let initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWritteOutput("-", initialResult, enteredNumber);
}
function multiply() {
  const enteredNumber = getUserNumberinput();
  let initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWritteOutput("*", initialResult, enteredNumber);
}
function divide() {
  const enteredNumber = getUserNumberinput();
  let initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWritteOutput("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

