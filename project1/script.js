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

function checkRequired() {
  //check is username is empty
  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  //check if email is empty
  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!validateEmail(email.value)) {
    showError(email, "Email is invalid");
  } else {
    showSuccess(email);
  }

  //check if password is empty
  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }

  //check if confirm password is empty
  if (password2.value === "") {
    showError(password2, "Password not same");
  } else {
    showSuccess(password2);
  }
}

//Event Listeners
//Creating event listeners for submit button
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired();
});
