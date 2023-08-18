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
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `${getInput(input)} is invalid`);
  }
}

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

// function to get the id of input field with proper naming convention
function getInput(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// function to check length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getInput(input)} should be minimum ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getInput(input)} can be maximum ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// function to confirm password
function checkPassword(pass, pass2) {
  if (pass.value === pass2.value && pass.value.length !== 0) {
    showSuccess(pass2);
  } else {
    showError(pass2, `Wrong confirm password`);
  }
}

//Event Listeners
//Creating event listeners for submit button
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 10);
  checkLength(password, 6, 30);
  checkEmail(email);
  checkPassword(password, password2);
});
