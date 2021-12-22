//---------------------------Containers + Form----------------------
let header = document.createElement("div");
header.classList.add("header");

let header_h2 = document.createElement("h2");
header_h2.innerHTML = "Create an Account";
header.appendChild(header_h2);

let form_container = document.createElement("form");
form_container.classList.add("form");
form_container.id = "form";

//Each Div inside of form
let username_div = document.createElement("div");
let email_div = document.createElement("div");
let password_div = document.createElement("div");
let passwordVal_div = document.createElement("div");
username_div.classList.add("form-control");
email_div.classList.add("form-control");
password_div.classList.add("form-control");
passwordVal_div.classList.add("form-control");

//Label + Input
let username_label = document.createElement("label");
username_label.innerHTML = "Username";
let username_input = document.createElement("input");
username_input.setAttribute("type", "text");
username_input.setAttribute("placeholder", "Username");
username_input.id = "username";

let email_label = document.createElement("label");
email_label.innerHTML = "Email";
let email_input = document.createElement("input");
//email -> type = "text" (not "email") to avoid the automatic email validation by HTML,
//and I am using "isEmail()" function instead to validate the email inserted by the user.
email_input.setAttribute("type", "text");
email_input.setAttribute("placeholder", "Email");
email_input.id = "email";

let password_label = document.createElement("label");
password_label.innerHTML = "Password";
let password_input = document.createElement("input");
password_input.setAttribute("type", "password");
password_input.setAttribute("placeholder", "Password");
password_input.id = "password1";

let passwordVal_label = document.createElement("label");
passwordVal_label.innerHTML = "Confirm Password";
let passwordVal_input = document.createElement("input");
passwordVal_input.setAttribute("type", "password");
passwordVal_input.setAttribute("placeholder", "Confirm Password");
passwordVal_input.id = "password2";

//Submit Button
let submitButton = document.createElement("button");
submitButton.innerHTML = "Submit";

//Small HTML Tag
let username_small = document.createElement("small");
username_small.innerHTML = "Error message";

let email_small = document.createElement("small");
email_small.innerHTML = "Error message";

let password_small = document.createElement("small");
password_small.innerHTML = "Error message";

let passwordVal_small = document.createElement("small");
passwordVal_small.innerHTML = "Error message";

//Check (Green) Circle 
let username_greenCircle = document.createElement("i");
username_greenCircle.classList = "fas fa-check-circle";
let username_redCircle = document.createElement("i");
username_redCircle.classList = "fas fa-exclamation-circle";

let email_greenCircle = document.createElement("i");
email_greenCircle.classList = "fas fa-check-circle";
let email_redCircle = document.createElement("i");
email_redCircle.classList = "fas fa-exclamation-circle";

let password_greenCircle = document.createElement("i");
password_greenCircle.classList = "fas fa-check-circle";
let password_redCircle = document.createElement("i");
password_redCircle.classList = "fas fa-exclamation-circle";

let passwordVal_greenCircle = document.createElement("i");
passwordVal_greenCircle.classList = "fas fa-check-circle";
let passwordVal_redCircle = document.createElement("i");
passwordVal_redCircle.classList = "fas fa-exclamation-circle";

username_div.append(username_label, username_input, username_small);
email_div.append(email_label, email_input, email_small);
password_div.append(password_label, password_input, password_small);
passwordVal_div.append(passwordVal_label, passwordVal_input, passwordVal_small);

form_container.append(
  username_div,
  email_div,
  password_div,
  passwordVal_div,
  submitButton
);

let secondContainer = document.createElement("div");
secondContainer.classList.add("container");
secondContainer.append(header, form_container);

let firstContainer = document.createElement("div");
firstContainer.classList.add("flex-container");
firstContainer.appendChild(secondContainer);

document.body.append(firstContainer);

//----------------------Footer-------------------------------
let footer = document.createElement("footer");

let linkedin_icon = document.createElement("a");
linkedin_icon.classList = "fab fa-linkedin";
linkedin_icon.setAttribute("href", "https://linkedin.com/in/bolaghaly63");
linkedin_icon.setAttribute("target", "_blank");

let github_icon = document.createElement("a");
github_icon.classList = "fab fa-github";
github_icon.setAttribute("href", "https://github.com/BolaGhaly");
github_icon.setAttribute("target", "_blank");

let footer_p = document.createElement("p");
footer_p.innerHTML = "Copyright &copy; 2021 Bola Ghaly. All Rights Reserved.";
footer.append(linkedin_icon, github_icon, footer_p);

document.body.appendChild(footer);

//---------------------------Check User's Input-----------------------------
const form = form_container;
const username = username_input;
const email = email_input;
const password1 = password_input;
const password2 = passwordVal_input;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const password1Value = password1.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username);
    username_small.innerHTML = "Username cannot be blank!";
    username_div.append(
      username_label,
      username_input,
      username_redCircle,
      username_small
    );
  } else {
    setSuccessFor(username);
    username_div.append(
      username_label,
      username_input,
      username_greenCircle,
      username_small
    );
  }

  if (emailValue === "") {
    setErrorFor(email);
    email_small.innerHTML = "Email cannot be blank!";
    email_div.append(email_label, email_input, email_redCircle, email_small);
  } else if (!isEmail(emailValue)) {
    setErrorFor(email);
    email_small.innerHTML = "Not a valid email.";
    email_div.append(email_label, email_input, email_redCircle, email_small);
  } else {
    setSuccessFor(email);
    email_div.append(email_label, email_input, email_greenCircle, email_small);
  }

  if (password1Value === "") {
    setErrorFor(password1);
    password_small.innerHTML = "Password cannot be blank!";
    password_div.append(
      password_label,
      password_input,
      password_redCircle,
      password_small
    );
  } else {
    setSuccessFor(password1);
    password_div.append(
      password_label,
      password_input,
      password_greenCircle,
      password_small
    );
  }

  if (password2Value === "") {
    setErrorFor(password2);
    passwordVal_small.innerHTML = "Password cannot be blank!";
    passwordVal_div.append(
      passwordVal_label,
      passwordVal_input,
      passwordVal_redCircle,
      passwordVal_small
    );
  } else if (password1Value !== password2Value) {
    setErrorFor(password2);
    passwordVal_small.innerHTML = "Passwords do not match.";
    passwordVal_div.append(
      passwordVal_label,
      passwordVal_input,
      passwordVal_redCircle,
      passwordVal_small
    );
  } else {
    setSuccessFor(password2);
    passwordVal_div.append(
      passwordVal_label,
      passwordVal_input,
      passwordVal_greenCircle,
      passwordVal_small
    );
  }
}

function setErrorFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check if it is a valid email or not
function isEmail(email) {
  const validation =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validation.test(String(email).toLowerCase());
}