//? Cambiando el contexto de THIS
const UserMethods = {
  increment: function () {
    addScore = () => {
      this.score++;
    };
    addScore();
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

user7.increment();
console.log(user7.score);

let obj = { nombre: 'Juli' };
function lala(apellido) {
  console.log(this);
  console.log(`Mi nombre es ${this.nombre}`);
}

const miFunction = lala.bind(obj);
miFunction();

//?FUNCTION ARE OBJECTS!!

function CreateUser3(name, score) {
  //const newUser = Object.create(CreateUser3.prototype);
  this.name = name;
  this.score = score;
  //return newUser;
}

CreateUser3.prototype.increment = function () {
  addScore = () => {
    this.score++;
  };
  addScore();
};

CreateUser3.prototype.log = function () {
  let name = this.name;
  console.log(name);
};

function CreateUserAdmin(name, score, editMode) {
  CreateUser3.call(this, name, score);
  this.editMode = editMode;
}
CreateUserAdmin.prototype = Object.create(CreateUser3.prototype);

const adminUser1 = new CreateUserAdmin('Dami', 0, true);
adminUser1.increment();
console.log(adminUser1.score);

for (let key in adminUser1) {
  if (adminUser1.hasOwnProperty(key)) {
    console.log(`key ${key} value ${adminUser1[key]}`);
  }
}

//Class key word

class CreateUser4 {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }
  log() {
    console.log('alalal');
  }
}

const user8 = new CreateUser4('Hugo', 0);
user8.increment();
console.log(user8);

class CreateUserAdmin2 extends CreateUser4 {
  constructor(name, score, editMode) {
    super(name, score);
    this.editMode = editMode;
  }
}
const user9 = new CreateUserAdmin2('Hugo', 0, true);
user9.increment();
console.log(user9);
