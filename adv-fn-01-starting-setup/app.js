function add(num1, num2){
    return num1 + num2;
}
console.log(add(1, 5));
console.log(add(12, 15));

function addRandom(num1){
    return num1 + Math.random();
}
console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2){
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
}
console.log(addMoreNumbers(1, 5));

const hobbies = ["sports", "cooking"];

function printHobbies(h){
    h.push("NEW HOBBY");
    console.log(h);
}
printHobbies(hobbies);

// Factory functionst 

let multiplier = 1.1;

function createTaxCalculator(tax){
    function calculateTax(amount){
        return amount * tax * multiplier;
    }
    return calculateTax
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(200));

let userName = "Max";

function greetUser(){
    // let name = "Anna";
    console.log("Hi ", name);
}

let name = "Maximilian";

userName = "Manuel";

greetUser();

// function powerOf(x, n){
//     let result = 1;

//     for(let i = 0; i < n; i++){
//         result *= x;
//     }
//     return result;
// }

// console.log(powerOf(2, 3));

function powerOf(x, n){
//    if(n === 1){
//     return x;
//    }
//    return x + powerOf(x, n-1);
return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));

const myself = {
    name: "Max",
    friends: [
        {
            name: "Manuel",
            friends: [
                {
                    name: "Cris",
                   friends: [
                    {
                        name: "Amilia",
                        friends: [
                            {
                                name: "Julia"
                            }
                        ]
                    }
                   ]
                }
            ]
        },
        {
        name: "Julia"
        }
    ]
};

function getFriendNames(person){
    const collectedNames = [];

    if(!person.friends){
        return [];
    }

    for(friend of person.friends){
        collectedNames.push(friend.name);
        collectedNames.push(...getFriendNames(friend));
    }
    return collectedNames;
}

console.log(getFriendNames(myself)); 