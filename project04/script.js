// Get DOM elements
const currencyOne = document.getElementById("currency-one");
const amountCurrencyOne = document.getElementById("amount-one");
const currencyTwo = document.getElementById("currency-two");
const amountCurrencyTwo = document.getElementById("amount-two");
const rate = document.getElementById("rate");
const swap = document.getElementById("swap");

// Function to fetch data (currency rates) and Update DOM
function calculateRate() {
  // Currency codes
  const currencyOneCode = currencyOne.value;
  const currencyTwoCode = currencyTwo.value;

  // Send request to ExchangeRate-API to get conversion rates
  fetch(
    `https://v6.exchangerate-api.com/v6/98cc2f8c53dbd4f93714f624/pair/${currencyOneCode}/${currencyTwoCode}`
  )
    .then((res) => res.json())
    .then((data) => {
      // Update the DOM to display the conversion rate
      rate.innerText = `1 ${currencyOneCode} = ${data.conversion_rate} ${currencyTwoCode}`;

      // Update currency two amount
      amountCurrencyTwo.value = (
        amountCurrencyOne.value * data.conversion_rate
      ).toFixed(2);
    });
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
// Swap currencies
swap.addEventListener("click", () => {
  // variable to hold currency one value
  const temp = currencyOne.value;

  // shift currencies values
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;

  // recalculate conversion rates
  calculateRate();
});

//Exchange calculate function when page loads
calculateRate();
