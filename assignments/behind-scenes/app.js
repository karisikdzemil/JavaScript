// let name = "max";
// let hobbies = ["sports", "cooking"];

// if (name === "max"){
//     console.log(hobbies);
// }
// function greet (){
//     let age = 30;
//     let name = "manuel";
//     console.log(name, age, hobbies);
// }
// console.log(name, hobbies);
// greet();

// "use strict";

// const userName = "max";
// var undefined = 5;
// console.log(userName);

function getName(){
    return prompt("Enter your name", "");
}

function greet (){
    const name = getName();
    console.log("hello " + name);
}
greet();