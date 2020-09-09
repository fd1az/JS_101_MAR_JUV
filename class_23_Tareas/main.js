// Escribir la función once, que acepte una función como parámetro, retorne el valor de la misma, pero que tenga la habilidad de saber si esa función ya fue ejecutada, en caso positivo no debería permitir que se ejecute otra vez.

function once(fn) {
  let yaCorrio = false;
  return () => {
    if (!yaCorrio) {
      yaCorrio = true;
      return fn();
    }
    return `La funcion ${fn.name} no puede ser ejecutada mas de una vez!`;
  };
}

function finDelJuego() {
  return 'Ganaste!!';
}

const onceFindelJuego = once(finDelJuego);

onceFindelJuego(); // -> "Ganaste!!"
onceFindelJuego(); // -> Nop! solo una vez!!

function memoize(func) {
  let cache = {}; //
  return (...args) => {
    const key = [...args].toString();
    return key in cache ? cache[key] : (cache[key] = func(key));
  };
}

const fibonacci = (n) => {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

const factorial = (n) => {
  return n <= 1 ? 1 : n * factorial(n - 1);
};

const memoizeFibonacci = memoize(fibonacci);
const memoizeFactorial = memoize(factorial);
debugger;
memoizeFactorial(30);
memoizeFactorial(30);

// Composition -
// personajeDelJugo
//    energy
//     comer()
//     dormir()
//     popo()
//     pipi()

//     usuarios
//        email
//         userName
//         adoptarAnimal()
//         hacerAmigo()

//     Animal
//         name
//
//         Perro
//             raza
//             ladrar()
//         Gato
//             tipos
//             maullar()

// The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle. - Joe Armstrong. Creator of Erlang.

//El problema con los lenguajes orientados a objetos es que tienen todo este entorno implícito que llevan consigo. Querías un Banana, pero lo que obtuviste fue un gorila sosteniendo el Banana y toda la jungla. - Joe Armstrong. Creador de Erlang.

const comerdor = (state) => ({
  comer(cantidad) {
    console.log(`${state.name} esta comiendo!`);
    state.energy += cantidad;
  },
});

const dormilon = (state) => ({
  dormir(tiempo) {
    console.log(`${state.name} esta durmiendo!`);
    state.energy += tiempo;
  },
});

const ladrador = (state) => ({
  ladrar() {
    console.log(`${state.name} esta ladrando!`);
    state.energy -= 0.1;
  },
});

const maullador = (state) => ({
  maullar() {
    console.log(`${state.name} esta maullando!`);
    state.energy -= 0.1;
  },
});

const adoptador = (state) => ({
  adoptarAnimal(animal) {
    state.mascotas.push(animal);
  },
});

function Perro(name, energy, raza) {
  let perro = {
    name,
    energy,
    raza,
  };
  //Object.assing(objetivo, ....params)

  return Object.assign(
    perro,
    comerdor(perro),
    dormilon(perro),
    ladrador(perro)
  );
}

function Gato(name, energy, tipo) {
  let gato = {
    name,
    energy,
    tipo,
  };
  //Object.assing(objetivo, ....params)

  return Object.assign(gato, comerdor(gato), dormilon(gato), maullador(gato));
}

function Usuario(email, userName) {
  let user = {
    email,
    userName,
  };
  //Object.assing(objetivo, ....params)

  return Object.assign(user, comerdor(user), dormilon(user), adoptador(user));
}
