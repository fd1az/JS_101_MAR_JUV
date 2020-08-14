//PROMISE

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK funcionaaaa!!!");
  }, 2000);
});

function logPromiseValue(elvalordelapromesaresueta) {
  console.log(elvalordelapromesaresueta);
}

let resultado = miPromesa.then(logPromiseValue);
console.log(resultado);
setTimeout(() => {
  console.log(resultado);
}, 2500);

//OLD XHR

const myreq = new XMLHttpRequest();

myreq.onload = function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
};

myreq.onerror = function (err) {
  console.log("FUCK", err);
};

myreq.open("get", "https://jsonplaceholder.typicode.com/todos/1", true);
myreq.setRequestHeader("Accept", "application/json");
myreq.send();

//FECTH API

function setTimer(duration, message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, duration);
  });
}

setTimer(3000, "Time out! Perdiste!!!!! LOOOOOOSSEEEEEERRRRRRR").then((data) =>
  console.log(data)
)(async () => {
  try {
    let response = await fetch("https://jsonplaceholderr.typicode.com/todos/1");
    let jsonResponse = await response.json();
    console.log(jsonResponse);
  } catch (err) {
    console.log(err);
  }
})();
let h1 = document.createElement("h1");

let body = document.querySelector("body");
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => {
    console.log(data);
    return data.json();
  })
  .catch((err) => {
    console.log(err);
  })
  .then((data) => {
    throw new Error("Oopps algo salio mal :(");
  })
  .then((data) => console.log("holaaaaaa"))
  .catch((err) => {
    console.log(err);
    h1.innerText = `${err}`;
    body.append(h1);
  });
