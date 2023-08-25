let movie = document.querySelector("#select-movie");
let moviePrice = +movie.value;

let container = document.querySelector(".container");
let screen = document.querySelector(".screen");
let seats = document.querySelectorAll(".row .seat:not(.occupied)");

let count = document.getElementById("count");
let price = document.getElementById("price");

function updateCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  let selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  price.innerText = selectedSeatsCount * moviePrice;
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
  moviePrice = e.target.value;
  updateCount();
});
