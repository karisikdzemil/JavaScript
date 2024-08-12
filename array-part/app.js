// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = new Array(2, 5);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers)

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayItems = Array.from(listItems);
// console.log(arrayItems);

// const hobbies = ["coocing", "sports"];
// const personalData = [30, "Max", {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for(data of analyticsData){
//     for(dataPoint of data){
//             console.log(dataPoint);
//     }
// }
// console.log(personalData[1]);
 

// const hobbies = ["sports", 'coocing'];
// hobbies.push("reading");
// hobbies.unshift("coding");
// const popedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = "Coding";
// // hobbies[5] = "Reading";  rareli used
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, "Good Food");
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// HTMLFormControlsCollection.log(hobbies);


// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// // const storedResults = testResults.splice(2);
// const storedResults = testResults.concat([3.99, 2])

// testResults.push(5.91);

// console.log(testResults.includes(10.99));

// console.log(testResults, storedResults);    
// console.log(testResults.indexOf(1.5));

// const personData = [{name: "Max"}, {name: "Manuel"}];
// console.log(personData.indexOf({name: "Manuel"}));

// const manuel = personData.find((person, idx, persons)=>{
//     return person.name === "Manuel";
// }) 

// manuel.name = "Anna";

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons)=>{
//     return person.name === "Max";
// })
// console.log(maxIndex);


// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustPrices = [];

// // for (const price of prices){
// //     taxAdjustPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices)=>{
//         // taxAdjustPrices.push(price * (1 + tax));
//         const priceObj = {index: idx, taxAdjustPrices:price * (1 + tax)};
//         taxAdjustPrices.push(priceObj);
// })
// console.log(taxAdjustPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustPrices = prices.map((price, idx, prices)=>{
        const priceObj = {index: idx, taxAdjustPrices:price * (1 + tax)};
        return priceObj;
})
console.log(prices, taxAdjustPrices);