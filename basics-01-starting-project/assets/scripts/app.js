// alert("This is my first javascript code 500. times");

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

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
  currentResult += enteredNumber;
  createAndWritteOutput("+", initialResult, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
}
function substract() {
  const enteredNumber = getUserNumberinput();
  let initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWritteOutput("-", initialResult, enteredNumber);
}
function multiply() {
  const enteredNumber = getUserNumberinput();
  let initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWritteOutput("*", initialResult, enteredNumber);
}
function divide() {
  const enteredNumber = getUserNumberinput();
  let initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWritteOutput("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

