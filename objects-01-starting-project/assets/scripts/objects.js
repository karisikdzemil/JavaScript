const movieList = document.getElementById("movie-list");

movieList.style["background-color"] = "red";
movieList.style.display = "block";

let person = {
    "first name": "Max",
    age: 30,
    hobbies: ["sports", "coocing"],
    greet: function(){
        alert("Hello there!");
    },
    1.5: "hello"
}


// ...

// person.age = 31;
delete person.age;
// person.age = undefined
// person.age = null;
person.isAdmin = true;

console.log(person["first name"]);
console.log(person);
