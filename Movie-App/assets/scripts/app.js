const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal");
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector("header").lastElementChild;
const backdrop = document.getElementById("backdrop");
// const backdrop = document.body.firstElementChild;
const cancelMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
// const userInputs = addMovieModal.getElementsByClassName("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");


let movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};


const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const cancelMovieDelitionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
}


const deleteMovieHandler = movieId =>{
  let movieIndex = 0;
  for(const movie of movies){
    if(movie.id === movieId){
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(listRoot.children[movieIndex]);
  cancelMovieDelitionModal();
  updateUI();
}


const startDeleteMovieHandler = movieId => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();
  const cancelDelitionButton = deleteMovieModal.querySelector(".btn--passive");
  let confirmDelitionButton = deleteMovieModal.querySelector(".btn--danger");

  confirmDelitionButton.replaceWith(confirmDelitionButton.cloneNode(true));

  confirmDelitionButton = deleteMovieModal.querySelector(".btn--danger");
  // confirmDelitionButton.removeEventListener("click", deleteMovieHandler.bind(null, movieId)); didn't work ;)
  cancelDelitionButton.removeEventListener("click", cancelMovieDelitionModal);

  cancelDelitionButton.addEventListener("click", cancelMovieDelitionModal);
  confirmDelitionButton.addEventListener("click", deleteMovieHandler.bind(null, movieId));

};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
  <img src="${imageUrl}" alt="${title}">
  </div>
  <div class="movie-element__info">
  <h2>${title}</h2>
  <p>${rating}/5 stars</p>
  </div>
  `;
  newMovieElement.addEventListener("click", startDeleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};


const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
}

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (between 1 and 5.");
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const backdropClickHandler = () => {
  closeMovieModal();
  cancelMovieDelitionModal();
  clearMovieInput();
};

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
