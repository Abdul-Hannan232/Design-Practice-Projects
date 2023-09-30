// Get DOM Elements
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const filterBtn = document.getElementById("filter");
const sortBtn = document.getElementById("sort");
const sumBtn = document.getElementById("sum");

// Initialize the User data array
const data = [];

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

getResponse();
getResponse();
getResponse();
getResponse();
getResponse();
