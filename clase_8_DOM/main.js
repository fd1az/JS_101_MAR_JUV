/*
DOM -> Document Object Model
- Es una representacion en JS de una pagina WEB
- Es un monton de objetos con lo que podemos interactuar con JS
- 

*/
console.dir(document);

//SELECCION DE ELEMENTO

//documen.getElementByid('')
//Los ids tienen que unicos - en caso de que haya mas de un elemento con el mismo id, va traer el primero que encuentre.

const myH1 = document.getElementById('titulo');
console.dir(myH1);

const myP = document.getElementById('text');
console.dir(myP);

//documento.getElementByTagName('')
const myTags = document.getElementsByTagName('input');
const myTapsArrays = Array.from(myTags);
myTapsArrays.map((obj) => console.dir(obj));

for (const input of myTags) {
  console.dir(input);
}

//document.getElementByClassName('cheto')
const myUl = document.getElementById('ul_1');
const myList = myUl.getElementsByClassName('cheto');
console.dir(myList);

//document.querySelector()
const myul_2 = document.querySelector('#ul_1');
console.log(myul_2);

const myP2 = document.querySelectorAll('p');
console.log(myP2);

const myList_2 = document.querySelectorAll('#ul_1 .cheto');
console.log(myList_2);

const myImg = document.querySelectorAll('.more img');
console.log(myImg);

//MODIFICAR ELEMENTOS

const inputs = document.querySelectorAll('form input');
console.dir(inputs);

for (const input of inputs) {
  input.value = 'Te modifique';
}

//innerText -
const miTitulo_2 = document.querySelector('#titulo_2');
console.log(miTitulo_2.innerText);

setTimeout(() => {
  miTitulo_2.innerText = 'Soy Otro Titulo';
}, 3000);

const litext = document.querySelector('#ul_2 .cheto');

console.log(litext.innerText);
console.log(litext.textContent);

//innerHTML - nos devuelve un string de html dentro de un elemento
const form = document.querySelector('form');

console.log(form.innerHTML);

const heroes = document.querySelector('#heroes');

setTimeout(() => {
  heroes.innerHTML += '<li>Hulk</li>';
}, 3000);

//VALUE - HREF - SRC
console.log(inputs[0].value);

const url = document.querySelector('.more a');
console.log(url.href);

console.log(myImg[0].src);

//
console.log(inputs[3].getAttribute('max'));
console.log(inputs[3].getAttribute('miAtributoCustom'));
inputs[3].setAttribute('superOculto', 'Shhhhhhhhhh');

//PARENT / CHINDREN / Sibiling

console.log(form.children);
console.log(inputs[3].parentElement.parentElement);
console.log(inputs[2].nextElementSibling);
console.log(inputs[2].previousElementSibling);

//Styles

myH1.style.color = 'blue';

//todos
const todo = document.querySelector('.todo');
// todo.style.color = 'gray';
// todo.style.opacity = '50%';
// todo.style.textDecoration = 'line-through';

//NO RECOMENDADOOOOOOO PARA NADAAAA
// todo.setAttribute('class', 'todo realizado');
// CHETO CHETO MALLLL
console.dir(todo);
todo.classList.add('realizado');
todo.classList.remove('realizado');

//CREAR ELEMENTOS
const nuevoH2 = document.createElement('h2');
nuevoH2.innerText = 'Soy un H2 creado por JS';

const dinamico = document.querySelector('#dinamico');

dinamico.appendChild(nuevoH2);

const nuevoHeroe = document.createElement('li');
nuevoHeroe.innerText = 'Batman';

heroes.insertBefore(nuevoHeroe, heroes.children[2]);

const comprarVino = document.createElement('li');
comprarVino.classList.add('todo');
comprarVino.innerText = 'Comprar Vino';
const comprarPan = document.createElement('li');
comprarPan.classList.add('todo');
comprarPan.innerText = 'Comprar Queso';

const todos = document.querySelector('#todos');
todos.append(comprarVino, comprarPan);

todos.removeChild(todos.children[4]);

setTimeout(() => {
  nuevoH2.remove();
}, 2000);
