// alert("This is my first javascript code 500. times");

const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberinput (){
    return parseInt(userInput.value);
}

function add (){
    const enteredNumber = getUserNumberinput()
    let calcDesript = currentResult;    
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, `${calcDesript} + ${enteredNumber}`);
}
  
addBtn.addEventListener("click", add);
console.log('test');

