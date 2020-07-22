const app = document.querySelector("#app");

app.innerHTML = `
    <div class="todos">
        <div class="todos-header">
            <h3 class="todos-title">TODO NUC</h3>
            <div>
                <p>Tienes <span class="todos-count"></span> Items por hacer!! </p>
                <button type="button" class="todos-clear" style="display:none;" >Borra Completados</button>
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

const saveInLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

JSON;

//?Selectores

const root = document.querySelector(".todos");
const list = root.querySelector(".todos-list");
const count = root.querySelector(".todos-count");
const clear = root.querySelector(".todos-clear");
const form = document.forms.todos;
const input = form.elements.todo;

let state = JSON.parse(localStorage.getItem("todos")) || [];

//?HANDLERS VIEW
const renderTodos = (todos) => {
  let listString = "";
  todos.forEach((todo, index) => {
    listString += `
        <li data-id="${index}"${todo.complete ? ' class="todos-complete"' : ""}>
            <input type="checkbox"${todo.complete ? " checked" : ""}>
            <span>${todo.label}</span>
            <button type="button"></button>
        </li>
      `;
  });
  list.innerHTML = listString;
  clear.style.display = todos.filter((todo) => todo.complete).length
    ? "block"
    : "none";
  count.innerText = todos.filter((todo) => !todo.complete).length;
};

//?HANDLERS LOGIC

//Add todo
const addTodo = (event) => {
  event.preventDefault();
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
  saveInLocalStorage(state);
  input.value = "";
};

//Update todo
const updateTodo = ({ target }) => {
  //Obtenemos el data-id atributo
  const id = parseInt(target.parentNode.dataset.id);
  //asignar el valor booleano al complete
  const complete = target.checked;

  state = state.map((todo, index) => {
    if (index === id) {
      return {
        ...todo,
        complete,
      };
    }
    return todo;
  });

  console.log(state);
  renderTodos(state);
  saveInLocalStorage(state);
};

const deleteTodo = ({ target }) => {
  if (target.nodeName.toLowerCase() !== "button") {
    return;
  }
  const id = parseInt(target.parentNode.dataset.id);
  const label = target.previousElementSibling.innerText;
  if (window.confirm(`Estas a punto de borrar ${label}, ok???`)) {
    state = state.filter((todo, index) => index !== id);
    renderTodos(state);
    saveInLocalStorage(state);
  }
};

const clearCompletes = () => {
  const todoCompletes = state.filter((todo) => todo.complete).length;
  if (todoCompletes === 0) {
    return;
  }
  if (window.confirm(`Borramos los ${todoCompletes} todos???`)) {
    state = state.filter((todo) => !todo.complete);
    renderTodos(state);
    saveInLocalStorage(state);
  }
};

//?ENTRY POINT - PUNTO DE ENTRADA A LA APP ---- INICIALIZADOR

function init() {
  renderTodos(state);
  form.addEventListener("submit", addTodo);
  list.addEventListener("change", updateTodo);
  list.addEventListener("click", deleteTodo);
  clear.addEventListener("click", clearCompletes);
}

//RUN THE APPPPPPPP!!!!!!!!! BE NUCBER!!!!
init();
