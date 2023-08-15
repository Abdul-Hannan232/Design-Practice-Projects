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
function validateEmail(mail) {
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)
  ) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

function checkRequired() {
  //check is username is empty
  if (username.value === "") {
    showError(username, "Username required");
  } else if (username.value.length < 3) {
    console.log(username.value.length);
    showError(email, "Minimum 3 characters required");
  } else {
    showSuccess(username);
  }

  //check if email is empty
  if (email.value === "") {
    showError(email, "Email required");
  } else if (!validateEmail) {
    showError(email, "Enter correct email");
  } else {
    showSuccess(email);
  }

  //check if password is empty
  if (password.value === "") {
    showError(password, "Enter correct password");
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
