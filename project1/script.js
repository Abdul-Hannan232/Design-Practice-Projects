//Getting elements
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// show error function
function showError(element, message) {
  const formControl = element.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show success function
function showSuccess(element) {
  const formControl = element.parentElement;
  formControl.className = "form-control success";
}

// function to check if email is valid
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// function for checking all the inputs have data
function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value === "") {
      showError(input, `${getInput(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// function for proper naming convention
function getInput(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
//Creating event listeners for submit button
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
});
