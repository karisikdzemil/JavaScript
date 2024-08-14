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

// console.log(prices, taxAdjustPrices);

//     function transformToObjects(numberArray) {
//         const newArr = [];
//     const logic = numberArray.map((value, index, arr)=>{
//         newArr.push({val: value});
//     })
//     }
// transformToObjects([1, 2, 3])




const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustPrices = prices.map((price, idx, prices)=>{
        const priceObj = {index: idx, taxAdjustPrices:price * (1 + tax)};
        return priceObj;
})

const sortedPrice = prices.sort((a, b)=>{
    if(a > b){
        return 1;
    }else if (a === b){
        return 0;
    }else{
        return -1;
    }
})
// console.log(sortedPrice.reverse());
console.log(sortedPrice);

const filteredArray = prices.filter((price, index, prices)=>{
    return price > 6;
});
console.log(filteredArray)

// let sum = 0;

// prices.forEach((price)=>{
//     sum += price;
// })
// console.log(sum)

const sum = prices.reduce((prevValue, curValue, curIndex, prices)=>{
    return prevValue + curValue;
}, 0)

console.log(sum);

const data = "new york;10.99;2000";

const transformedData = data.split(";");
transformedData[1] = +transformedData[1];
console.log(transformedData);

const nameFragments = ["Max", "Schwartz"];
const name = nameFragments.join(" ");
console.log(name);