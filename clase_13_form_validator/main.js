//Selección de elementos HTML
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const gandalf = document.getElementById("gandalf");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  utils.checkRequired([username, email, password, password2], gandalf);
  utils.checkLength(username, 4, 7, gandalf);
  utils.checkLength(password, 6, 15, gandalf);
  utils.checkEmail(email, gandalf);
  utils.checkPasswordMatch(password, password2, gandalf);
});
