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

  updateDOM(data);
}

// Event Listeners
// 1. Add Button Listener
addUserBtn.addEventListener("click", getResponse);

// 2. Double Money of Users Listener
doubleBtn.addEventListener("click", doubleMoney);
