const randomNumber = Math.random(); 
const secondRandom = Math.random();
if(randomNumber > 0.7){
    alert("Number is greater!");
}
const arr = [2, 5, 3, 6, 8];

for(let i = arr.length; i >= 0; i--){
    console.log(arr[i]);
}
for (const items of arr){
    console.log(items);
}
if(randomNumber > 0.7 && secondRandom > 0.7){
    alert("Numbers are greater!");
}else if (randomNumber < 0.2 || secondRandom < 0.2){
    alert("One of the two is not greater than 0.2!");
}