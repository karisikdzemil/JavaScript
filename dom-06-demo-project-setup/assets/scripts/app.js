const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal");
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector("header").lastElementChild;
const backDrop = document.getElementById("backdrop");

const toggleMovieModal = () =>{
    addMovieModal.classList.toggle("visible");
    backDropControling();
}

const backDropControling = ()=>{
    backDrop.classList.toggle("visible");
}

startAddMovieButton.addEventListener("click", toggleMovieModal);
