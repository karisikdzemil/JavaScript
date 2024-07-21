// alert("This is my first javascript code 500. times");

const defaultResult = 0;
let currentResult = defaultResult;

function add (){
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
}
  
addBtn.addEventListener("click", add);

