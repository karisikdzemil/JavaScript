const arr = [2, 5, 3, 7, 5, 8, 9, 21, 2, 14];

const filteredArr = arr.filter(price=>   {return price > 5;})
const mapArr = arr.map(mapedEl => {return {num: mapedEl};});
const reduceArr = arr.reduce((prevVal, curVal)=>{
    return prevVal * curVal;
}, 1)

console.log(filteredArr);
console.log(mapArr);
console.log(reduceArr);

const findMax = [Math.max(...arr), Math.min(...arr)]
   const [MaxNum, MinNum] = findMax;
console.log(findMax);