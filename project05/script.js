// Get DOM Elements
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const filterBtn = document.getElementById("filter");
const sortBtn = document.getElementById("sort");
const sumBtn = document.getElementById("sum");

// Initialize the User data array
let data = [];

// Fetch random user from randomuser.me API
async function getResponse() {
  // Wait for the results from API
  const res = await fetch("https://randomuser.me/api/");
  // Wait for response to convert into JSON
  const newData = await res.json();

  const user = newData.results[0].name;

  const newUser = {
    name: `${user.title} ${user.first} ${user.last}`,
    balance: Math.ceil(Math.random() * 1000000),
  };

  addUser(newUser);
}

function addUser(newUser) {
  data.push(newUser);
  updateDOM();
}

// Update the UI from with the data from the user data array
function updateDOM(userData = data) {
  // Clear previous UI
  main.innerHTML = "<h2><strong> User </strong> Wealth</h2>";

  // Loop through userdata and render UI
  userData.forEach((user) => {
    // Create a new div element for the user
    const userDiv = document.createElement("div");
    // apply the user class to new div
    userDiv.classList.add("user");
    // Add inner html to user div
    userDiv.innerHTML = `<strong> ${user.name} </strong> ${user.balance}`;
    // Add the new element into DOM
    main.appendChild(userDiv);
  });
}

// Function to double money for all users
function doubleMoney() {
  // Loop through all users in the users data array
  // For each user, return the user data
  // Override the data array with new data array created with map
  data = data.map((user) => {
    return { ...user, balance: user.balance * 2 };
  });

  // Update  DOM using new User Data
  updateDOM(data);
}

// Function to filter Millionaire
function filterMillionaire() {
  // Filter Loop through all users in the users data array
  // For each user, return only millionaire user data
  // Override the data array with new data filtered array created with filter
  data = data.filter((user) => user.balance > 1000000);

  // Update  DOM using new filtered Data
  updateDOM(data);
}

// function to sort users by comparing money
function sortByBalance() {
  // Sort data using compare function inside sort
  data = data.sort((a, b) => b.balance - a.balance);

  // Update DOM using new sorted data
  updateDOM();
}

// function to sum wealth of all users
function sumAllWealth() {
  const sum = data.reduce((prev, current) => prev.balance + current.balance);
  console.log(sum);
}

// Event Listeners
// 1. Add Button Listener
addUserBtn.addEventListener("click", getResponse);
// 2. Double Money of Users Listener
doubleBtn.addEventListener("click", doubleMoney);
// 3. Filter Millionaire
filterBtn.addEventListener("click", filterMillionaire);
// 4. Sort Users By Money
sortBtn.addEventListener("click", sortByBalance);
// 5. Add all wealth
sumBtn.addEventListener("click", sumAllWealth);
