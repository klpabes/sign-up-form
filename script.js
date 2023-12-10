const error = document.querySelector("#password-error");

const password = document.querySelector("#pwd");
const confirmPassword = document.querySelector("#confirm-pwd");

document.addEventListener("DOMContentLoaded", function () {
  if (confirmPassword.value == "" && password.value == "") {
    error.innerHTML = "No password";
  }
});

function createAccount() {
  if (confirmPassword.value !== password.value) {
    error.innerHTML = "Password does not match";
  }
}
