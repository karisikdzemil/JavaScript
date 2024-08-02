let input = document.getElementById("inp");
let addBtn = document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");
let multBtn = document.getElementById("multBtn");
let divBtn = document.getElementById("devBtn");

let descript = document.getElementById("current-operations");
let result = document.getElementById("result");

function outputResult(result, text) {
    descript.textContent = result;
    result.textContent = text;
  }


let currentResult = 0;

function inpValue(){
    return parseInt(input.value);
  }


function add(){
    console.log(input.value);
    console.log(parseInt(input.value) + currentResult);
    descript.textContent = `${currentResult} + ${parseInt(input.value)}`
    currentResult += parseInt(input.value)
    result.textContent = currentResult;
}
function substract(){
    console.log(input.value);
    console.log(parseInt(input.value) - currentResult);
    descript.textContent = `${currentResult} - ${parseInt(input.value)}`
    currentResult -= parseInt(input.value)
    result.textContent = currentResult;
}
function multiply(){
    console.log(input.value);
    console.log(parseInt(input.value) * currentResult);
    descript.textContent = `${currentResult} * ${parseInt(input.value)}`
    currentResult = currentResult * parseInt(input.value)
    result.textContent = currentResult;
}
function divide(){
    console.log(input.value);
    console.log(parseInt(input.value) / currentResult);
    descript.textContent = `${currentResult} / ${parseInt(input.value)}`
    currentResult = currentResult / parseInt(input.value)
    result.textContent = currentResult;
}

addBtn.addEventListener("click", add);
subBtn.addEventListener("click", substract);
multBtn.addEventListener("click", multiply);
divBtn.addEventListener("click", divide);
