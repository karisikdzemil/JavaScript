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

function writeToLog(
  operationIdetnifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdetnifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberinput();
  let initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWritteOutput("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
}
function substract() {
  const enteredNumber = getUserNumberinput();
  let initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWritteOutput("-", initialResult, enteredNumber);
  writeToLog("SUBSTRACT", initialResult, enteredNumber, currentResult);
}
function multiply() {
  const enteredNumber = getUserNumberinput();
  let initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWritteOutput("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}
function divide() {
  const enteredNumber = getUserNumberinput();
  let initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWritteOutput("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

