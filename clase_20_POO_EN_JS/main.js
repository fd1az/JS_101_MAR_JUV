//OOP INTRO EN JS
// JS tiene una implementacion distinta de POO en comparacion con lenguajes como JAVA, Python, PHP

//Users - admi - pagos - deudas
//Productos - stock - ubicaciones distintas
//payments - user - products
//carrito - user - productos

//? Como creamos objetos en JS

//! Objects Literals
const user1 = {
  name: 'Facu',
  score: 0,
  increment: function () {
    user1.score++;
  },
};

user1.increment();
console.log(user1);

//! Object dot Notation

const user2 = {};

user2.name = 'Augusto';
user2.score = 0;
user2.increment = function () {
  user1.score++;
};

//! Object Object.create
const user3 = Object.create(null);
user3.name = 'Seba';
user3.score = 0;
user3.increment = function () {
  user1.score++;
};

//? QUE PRINCIO ESTAMOS ROMPIENDO ------ DRYYYY
//???? COMO LO RESOLVEMOS -- CON FUNCIONES!!! YEAAAAAAHHHHH (Facu Baila!)

function CreateUser(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };

  return newUser;
}

const user4 = CreateUser('Karen', 0);
const user5 = CreateUser('Nico', 0);

user4.increment();
user4.increment();
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);

// {} === {} // FALSEEEEE!!!
// [] === [] // FALSEEEEE!!!
// ()=>{} === ()=>{} // FALSEEEEE!!!

//? POR QUE ESTO ESTA MAAAAAALLLLLL ES UNA PESIMA PRACTICA!!!!!
//? QUIEN NOS SALVA???? EL prototype Chain!!!!!
const UserMethods = {
  increment: function () {
    this.score++;
  },
  logUser: function () {
    let name = this.name;
    console.log(name);
  },
};

function CreateUser2(name, score) {
  const newUser = Object.create(UserMethods);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const user6 = CreateUser2('Hugo', 0);
const user7 = CreateUser2('Herni', 0);
