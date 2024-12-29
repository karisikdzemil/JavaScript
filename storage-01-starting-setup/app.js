const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const userId = "u123";
const user = {
    name: "Max",
    age: 30,
    hobies: ["sports", "cooking"]
}

storeBtn.addEventListener("click", () => {
    localStorage.setItem('uid', userId);
    localStorage.setItem('user', JSON.stringify(user));
})

retrBtn.addEventListener("click", () => {
    const extractedId = localStorage.getItem("uid");
    const extractedUser = JSON.parse(localStorage.getItem('user'))
    console.log(extractedUser)
    if(extractedId){
        console.log("got the Id - " + extractedId);
    }else{
        console.log("Could not find Id");
    }
})