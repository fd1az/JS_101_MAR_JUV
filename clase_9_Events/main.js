const app = document.getElementById("app");

app.innerHTML = `
    <h1> Dom events </h1>
    <button type="button" id="idbotton" class="btn" data-nombre-boton="miBoton">Click</button>
    <br>
    <button type="button" id="idbotton2" class="btn" data-nombre-boton="miBoton">Click</button>
    <!--Event propagation -->
    <div class="uno">
        <div class="dos">
            <button type="button" class="btn btn-violet tres">Click</button>
        </div>
    </div>

    <!-- Prevent Default -->
    <form >
        <label>
            Ingresar
            <input type="email" name="email">
        </label>
        <label>
            <input type="checkbox">Terminos y condiciones
        </label>
    </form>

    <!-- Event Delegation -->
    <div class="list-container">
        <button type="button" class="btn" id="addItem">Agregar</button>
        <ul id="list">
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
        </ul>
    </div>
    <form name="cheto">
      <label>
        Nombre
        <input type="tex" name="fullname" />
      </label>
      <label>
        Ingresar
        <input type="email" name="emailCheto" />
      </label>
      <label>
        <input type="checkbox" name="terms" />Terminos y condiciones
      </label>
      <div class="container">
        <label>
          Azul
          <input type="radio" name="color" value="azul" checked />
        </label>
        <label>
          Verde
          <input type="radio" name="color" value="verde" />
        </label>
        <label>
          Rojo
          <input type="radio" name="color" value="rojo" />
        </label>
      </div>
      <label>
        <select name="bebidas" style="width:100px; heigth:100px">
          <option value="">seleccionar</option>
          <option value="cerveza" selected>Birra 🍺</option>
          <option value="vino">Vino 🍷</option>
          <option value="whisky">whisky 🥃 </option>
        </select>
      </label>
    </form>

`;

//Agregamos un evento al boton

//1) seleccionamos el elemento

const button = document.querySelector("#idbotton");
console.dir(button);

//De esta manera se puede agregar un evento, pero no es la mejor opcion xq facilmente lo podes sobreescribir
button.onclick = () => {
  console.log("yeaahhhh capturaste tu primer eventoooooo!!!");
};

button.onclick = () => {
  console.log("Fuck lo borre!!!");
};

//!Addin events de forma correcta
//? elemento.addEventListener('<nombreEvento>', cb)

//Handler

const handlerClickButton = (e) => {
  e.target.innerText = "JAJAJAJAJAJAJA";
  console.log("solo una vez");
};

// button.addEventListener('click', (evento) => {
//   console.log(evento.target);
//   console.log(this);
//   console.log(evento.target.dataset.nombreBoton);
//   console.log('hizo click');
// });

// button.addEventListener('click', function (evento) {
//   console.dir(this);
//   //   console.log(evento.target.dataset.nombreBoton);
//   console.log('hizo click');
// });

button.addEventListener("click", handlerClickButton);

//!remove event listener

//?1er
const boton2 = document.querySelector("#idbotton2");

const handlerClickButton2 = (e) => {
  console.log("ANtes que el mundo se acabe! Una sola vez");
  boton2.removeEventListener("click", handlerClickButton2);
};

boton2.addEventListener("click", handlerClickButton2);

// setTimeout(() => {
//   boton2.removeEventListener('click', handlerClickButton2);
// }, 5000);

//!Event bubbling - Capturing - Propagation

//Fases de los eventos
//1) capturing - el evento baja al elmento - de arriba hacia abajo
//2) target evento - el evento alcanza al elemento.
//3) Bubbling - burbujear desde el elemento - desde abajo hacia arriba

//seleccionamos los elemento
const uno = document.querySelector(".uno");
const dos = document.querySelector(".dos");
const tres = document.querySelector(".tres");

//handler

const hadlerClickEventsPropa = (e) => {
  //e.stopPropagation();
  e.stopImmediatePropagation();
  console.log(e);
};
uno.addEventListener("click", hadlerClickEventsPropa, { capture: true });
dos.addEventListener("click", hadlerClickEventsPropa, { capture: true });
tres.addEventListener("click", hadlerClickEventsPropa, { capture: true });
tres.addEventListener("click", (e) => {
  console.log(e);
});

//!prevent default
const form = document.querySelector("form");
const email = form.querySelector('input[type="email"]');
const checkbox = form.querySelector('input[type="checkbox"]');

const handlerSubmit = (e) => {
  e.preventDefault();
  if (!checkbox.checked) {
    console.log("Tienes que aceptar terminos y condiciones");
    console.log(e.defaultPrevented);
    return;
  }

  console.log("Se envio un email a: ", email.value);
};

form.addEventListener("submit", handlerSubmit);

//!Event delegation
const list = document.querySelector("#list");
const items = [...list.querySelectorAll("li")];
const addButton = document.querySelector("#addItem");

const handlerClickList = (e) => {
  //Podriamos checkear que el evento se dispare desde el elemento que yo quiera

  if (e.target.nodeName.toLowerCase() !== "li") {
    return;
  }
  console.log(e.target.innerText);
};
const handlerAddItem = () => {
  const items = [...list.querySelectorAll("li")];
  const li = document.createElement("li");
  li.innerText = `Item${items.length + 1}`;
  list.appendChild(li);
};

// items.forEach((item) => {
//   item.addEventListener('click', handlerAddClick);
// });

list.addEventListener("click", handlerClickList);
addButton.addEventListener("click", handlerAddItem);

//! CLASE 11 JS - 14/07/2020

//? Una mejor y mas comoda seleccion de formulario

const formCheto = document.forms.cheto;
console.dir(formCheto);

const { emailCheto, fullname } = formCheto.elements;

console.dir(emailCheto);
console.dir(fullname);

//!Manejo de INPUTS

const handlerInput = (e) => {
  let valueInput = e.target.value;
  if (valueInput.length > 3) {
    console.log("hago algo");
  }
};

const handlerInput2 = (e) => {
  let valueInput = e.target.value;

  console.log(valueInput);
};

//EVENTO CHANGE - se dispara cuando modifico el valor y salgo del input o presiono enter
fullname.addEventListener("change", handlerInput);

//INPUT - se dispara cada vez al que el input cambia aun estando en el elemento
emailCheto.addEventListener("input", handlerInput2);

//FOCUS - se dispara cada vez al el input es seleccionado
fullname.addEventListener("focus", (e) => {
  console.log("[Focus] ", e.target);
});

//BLUR - se dispara al salir del input
fullname.addEventListener("blur", (e) => {
  console.log("[Blur] ", e.target);
});

//!RADIO BUTTON

//UNA MANERA DE CONVERTIR UNA COLLECCION HTML EN UNA ARRAY JS
const radios = Array.from(formCheto.elements.color);

//OTRA MANERA DE CONVERTIR UNA COLLECCION HTML EN UNA ARRAY JS
const radios2 = [...formCheto.elements.color];

radios.forEach((radio) => {
  console.log(radio.value);

  //!NO ES LA MEJOR MANERA DE AGREGAR EVENTOSSS
  radio.addEventListener("click", ({ target }) => {
    console.log(target.value);
  });
});

//!CHECKBOX

const checkBoxCheto = formCheto.elements.terms;

//set Check

checkBoxCheto.checked = false;

checkBoxCheto.addEventListener("change", () => {
  console.log(checkBoxCheto.checked);
});

checkBoxCheto.select();

//!SELECT
const select = formCheto.elements.bebidas;

console.dir(select);

select.value = "whisky";

console.log(select.options[select.selectedIndex].value);

//? KEY EVENTES

document.addEventListener("keydown", (e) => {
  console.log("Apreto", e.key, e.keyCode);
});

document.addEventListener("keyup", (e) => {
  console.log("Suelto", e.key, e.keyCode);
});
