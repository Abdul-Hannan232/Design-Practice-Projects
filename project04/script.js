// Get DOM elements
const currencyOne = document.getElementById("currency-one");
const amountCurrencyOne = document.getElementById("amount-one");
const currencyTwo = document.getElementById("currency-two");
const amountCurrencyTwo = document.getElementById("amount-two");

// Function to fetch data (currency rates) and Update DOM
function calculateRate() {
  // Currency codes
  const currencyOneCode = currencyOne.value;
  const currencyTwoCode = currencyTwo.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/98cc2f8c53dbd4f93714f624/${currencyOneCode}/${currencyTwoCode}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// Event Listeners
// Recalculate exchange rate when currency one is updated
currencyOne.addEventListener("change", calculateRate);
// Recalculate exchange rate when currency one amount is updated
amountCurrencyOne.addEventListener("input", calculateRate);
// Recalculate exchange rate  when currency Two is updated
currencyTwo.addEventListener("change", calculateRate);
// Recalculate exchange rate when currency Two amount is updated
amountCurrencyTwo.addEventListener("input", calculateRate);

//Exchange calculate function when page loads
calculateRate();
