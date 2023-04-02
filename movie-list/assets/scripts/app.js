const addModelBtn = document.querySelector("header button");
const backDrop = document.getElementById("backdrop");
const addModel = document.getElementById("add-modal");
const cancelMovieBtn = addModel.querySelector(".modal__actions button");
const addMovieBtn = addModel.querySelector(".btn--success");
const movieList = document.getElementById("movie-list");
const deleteModel = document.getElementById("delete-modal");

function openBackdrop() {
  backDrop.classList.add("visible");
}
function closeBackdrop() {
  backDrop.classList.remove("visible");
  deleteModel.classList.remove("visible");
}

function showMovieModel() {
  addModel.classList.add("visible");
  openBackdrop();
}
function closeMovieModel() {
  addModel.classList.remove("visible");
  closeBackdrop();
}
function restInpust() {
  document.getElementById("title").value = "";
  document.getElementById("image-url").value = "";
  document.getElementById("rating").value = "";
}

function addMovieHandler() {
  const title = document.getElementById("title").value;
  const url = document.getElementById("image-url").value;
  const rate = document.getElementById("rating").value;

  if (title.trim() === "" || url === "" || rate < 1 || rate > 5) {
    alert("enter valid data & rating from 1 to 5");
    return;
  }
  const newMovie = {
    title: title,
    Image: url,
    rate: rate,
  };

  closeMovieModel();
  showMovieUi(newMovie);
  restInpust();
  entryModelVisibilty();
}
//show and remove entry text
function entryModelVisibilty() {
  const entryModel = document.getElementById("entry-text");

  if (movieList.childElementCount > 0) {
    entryModel.style.display = "none";
  } else {
    entryModel.style.display = "block";
  }
}
//show moive on the page
function showMovieUi(movie) {
  const movieEl = document.createElement("li");

  movieEl.className = "movie-element";
  movieEl.innerHTML = `
    <div class="movie-element__image">
      <img src="${movie.url}" alt="${movie.title}">
    </div>
    <div class="movie-element__info">
      <h2>${movie.title}</h2>
      <p>${movie.rate}/5 stars</p>
    </div> 
 `;
  movieList.append(movieEl);
}
// movieList.addEventListener("click", (eventd) => {
// confirmDelete();
//   eventd.target.closest("li").remove();

// });
//removing movies
movieList.addEventListener("click", (eventremove) => {
  openBackdrop();
  // const deleteModel = document.getElementById("delete-modal");
  deleteModel.classList.add("visible");
  const cancelbtn = deleteModel.querySelector("button");
  console.log(cancelbtn, "btn");
  cancelbtn.addEventListener("click", () => {
    deleteModel.classList.remove("visible");
    closeBackdrop();
  });
  const yesBtn = document.getElementById("yes");
  yesBtn.addEventListener("click", () => {
    closeBackdrop();
    deleteModel.classList.remove("visible");
    eventremove.target.closest("li").remove();
    entryModelVisibilty();
  });
});

addModelBtn.addEventListener("click", showMovieModel);
backDrop.addEventListener("click", closeMovieModel);
cancelMovieBtn.addEventListener("click", closeMovieModel);
addMovieBtn.addEventListener("click", addMovieHandler);
