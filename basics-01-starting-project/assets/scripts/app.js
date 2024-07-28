const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberinput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBefCalc, calcNumber) {
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

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberinput();
  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE" ||
    !enteredNumber
  ) {
    return;
  }
  let initialResult = currentResult;
  let mathOperatior;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperatior = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperatior = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperatior = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperatior = "/";
  }
  createAndWriteOutput(mathOperatior, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  // const enteredNumber = getUserNumberinput();
  // let initialResult = currentResult;
  // currentResult += enteredNumber;
  // createAndWritteOutput("+", initialResult, enteredNumber);
  // writeToLog("ADD", initialResult, enteredNumber, currentResult);
  calculateResult("ADD");
}
function subtract() {
  // const enteredNumber = getUserNumberinput();
  // let initialResult = currentResult;
  // currentResult -= enteredNumber;
  // createAndWritteOutput("-", initialResult, enteredNumber);
  // writeToLog("SUBSTRACT", initialResult, enteredNumber, currentResult);
  calculateResult("SUBTRACT");
}
function multiply() {
  // const enteredNumber = getUserNumberinput();
  // let initialResult = currentResult;
  // currentResult *= enteredNumber;
  // createAndWritteOutput("*", initialResult, enteredNumber);
  // writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
  calculateResult("MULTIPLY");
}
function divide() {
  // const enteredNumber = getUserNumberinput();
  // let initialResult = currentResult;
  // currentResult /= enteredNumber;
  // createAndWritteOutput("/", initialResult, enteredNumber);
  // writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
