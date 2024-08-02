const task3Element = document.getElementById('task-3');

function Print (){
    alert("sign the contract big boy sign the contract");
}
function printName(name){
    alert("hay fellas " + name);
}
Print();
printName("Djemsi");
task3Element.addEventListener("click", Print);

function thre (first, second, third){
    const combined = first + second + third;
    return combined;
}
alert(thre("Djemsi ", "babusane ", "moj "));