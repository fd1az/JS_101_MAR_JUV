//Selección de elementos HTML
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const gandalf = document.getElementById("gandalf");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 4, 7);
  checkLength(password, 6, 15);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});

const showError = (input, mensaje) => {
  const formControl = input.parentElement;
  const showGandalf = gandalf.parentElement;

  formControl.classList.add("error");
  showGandalf.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = mensaje;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  const showGandalf = gandalf.parentElement;
  formControl.className = "form-control success";
  showGandalf.className = "gif-container";
};

const checkRequired = (inputArr = []) => {
  if (inputArr.length === 0) {
    return;
  }
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, "El campo es obligatori! Gato!");
      return;
    }
    showSuccess(input);
  });
};

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `Debe tener al menos ${min} caracteres`);
  } else if (input.value.length > max) {
    showError(input, `Debe ser menor a ${max} caracteres`);
  }
};

const checkPasswordMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "La contraseñas no coinciden");
  }
};

const checkEmail = (input) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "El email no es valido");
  }
};
