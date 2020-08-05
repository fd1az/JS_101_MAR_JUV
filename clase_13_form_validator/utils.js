const utils = (() => {
  function showError(input, mensaje, gif) {
    const formControl = input.parentElement;
    const showGandalf = gif.parentElement;

    formControl.classList.add("error");
    gif.classList.add("error");
    const small = formControl.querySelector("small");
    small.innerText = mensaje;
  }

  function showSuccess(input, gif) {
    const formControl = input.parentElement;
    const showGandalf = gif.parentElement;
    formControl.className = "form-control success";
    gif.className = "gif-container";
  }

  function checkRequired(inputArr = [], gif) {
    if (inputArr.length === 0) {
      return;
    }
    inputArr.forEach((input) => {
      if (input.value.trim() === "") {
        showError(input, "El campo es obligatori! Gato!", gif);
        return;
      }
      showSuccess(input, gif);
    });
  }

  function checkLength(input, min, max, gif) {
    if (input.value.length < min) {
      showError(input, `Debe tener al menos ${min} caracteres`, gif);
    } else if (input.value.length > max) {
      showError(input, `Debe ser menor a ${max} caracteres`, gif);
    }
  }

  function checkPasswordMatch(input1, input2, gif) {
    if (input1.value !== input2.value) {
      showError(input2, "La contraseñas no coinciden", gif);
    }
  }

  const checkEmail = (input, gif) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, "El email no es valido", gif);
    }
  };
  return {
    checkEmail: checkEmail,
    checkPasswordMatch: checkPasswordMatch,
    checkLength: checkLength,
    checkRequired: checkRequired,
  };
})();
