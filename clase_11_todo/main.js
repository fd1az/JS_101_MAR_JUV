const app = document.querySelector("#app");

app.innerHTML = `
    <div class="todos">
        <div class="todos-header">
            <h3 class="todos-title">TODO NUC</h3>
            <div>
                <p>Tienes <span class="todos-count"></span> Items por hacer!! </p>
                <button type="button" class="todos-clear" style="display:none;">Borra Completados</button>
            </div>
        </div>
        <form class="todos-form" name="todos">
            <input type="text" placeholder="Que vas hacer KING????" name="todo">
            <small>Escribi algo KING!!!!</small>
        </form>
        <ul class="todos-list">

        </ul>
    </div>

`;

//?Selectores

const root = document.querySelector(".todos");
const list = root.querySelector(".todos-list");
const count = root.querySelector(".todos-count");
const form = document.forms.todos;
const input = form.elements.todo;

let state = [];

//?HANDLERS VIEW
const renderTodos = (todos) => {
  let listString = "";
  todos.forEach((todo, index) => {
    listString += `
        <li data-id="${index}">
            <input type="checkbox">
            <span>${todo.label}</span>
            <button type="button"></button>
        </li>
      `;
  });
  list.innerHTML = listString;
};

//?HANDLERS
const addTodo = (e) => {
  e.preventDefault();
  const label = input.value.trim();
  const complete = false;
  if (label.length === 0) {
    form.classList.add("error");
    return;
  }
  form.classList.remove("error");
  state = [
    ...state,
    {
      label,
      complete,
    },
  ];

  console.log(state);
  //RENDERIZADO DE LOS TODOS
  renderTodos(state);
  input.value = "";
};

//?ENTRY POINT - PUNTO DE ENTRADA A LA APP ---- INICIALIZADOR

function init() {
  form.addEventListener("submit", addTodo);
}

//RUN THE APPPPPPPP!!!!!!!!! BE NUCBER!!!!
init();
