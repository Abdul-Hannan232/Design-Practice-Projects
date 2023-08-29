let movie = document.querySelector("#select-movie");
let moviePrice = +movie.value;

let container = document.querySelector(".container");
let screen = document.querySelector(".screen");
let seats = document.querySelectorAll(".row .seat:not(.occupied)");

let count = document.getElementById("count");
let price = document.getElementById("price");

populateUI();

function updateCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  let selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  price.innerText = selectedSeatsCount * moviePrice;

  localStorage.setItem("Selected Seats", JSON.stringify(seatsIndex));
}

// Funtion for saving movie data to local storage
function saveMovieData(movieIndex, moviePrice) {
  console.log(movieIndex, moviePrice);
  localStorage.setItem("Selected Movies Index", movieIndex);
  localStorage.setItem("Selected Movies Price", moviePrice);
}

// Use data stored in Local Storage
function populateUI() {
  const selectedSeatsIndex = JSON.parse(localStorage.getItem("Selected Seats"));
  if (selectedSeatsIndex !== null && selectedSeatsIndex.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeatsIndex.indexOf(index) > -1) {
        seat.classList.toggle("selected");
      }
    });
  }

  const selectedMoviesIndex = localStorage.getItem("Selected Movies Index");
  if (selectedMoviesIndex > -1) {
    movie.selectedIndex = selectedMoviesIndex;
  }
}

// Event Listeners
// 1. Event listener for selecting seats
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateCount();
  }
});

// 2. Event listener for selecting movies
movie.addEventListener("change", (e) => {
  moviePrice = +e.target.value;
  saveMovieData(e.target.selectedIndex, e.target.value);
  updateCount();
});

// calling UpdateCount function in the end to update UI ( Initial movie count and total price ) if getting data from LocalStorage
updateCount();
