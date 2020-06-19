//SOLUCION TAREA DE CLASE ANTERIOR
//contarLetras('abbcccddddeeeee') => {a:1 ,b:2, c:3, d:4,e:5}

// let contarLetras = 'abbcccddddeeeee';
// let letras = contarLetras.split('');//['a','a'.......]
// let cantidadLetras = letras.reduce((contadorLetra, 'a') => {
//     contadorLetra['a'] = (contadorLetra['a'] || 0) + 1;
//   return contadorLetra;
// }, {});

// let arr = str.split('');
// let result = arr.sort().reduce((counter, letter) => {
//     counter[letter] ? counter[letter]++ : (counter[letter] = 1);
//     return counter;
// }, {});

console.log('------ TAREA ------- \n');
const contarLetras = (string) => {
  return [...string].reduce((acc, value) => {
    return {
      ...acc,
      [value]: acc[value] ? ++acc[value] : 1,
    };
  }, {});
};

const contarLetrasv2 = (string) => {
  let stringToArray = [...string];
  let objLetras = stringToArray.reduce((acc, value) => {
    return {
      ...acc,
      [value]: acc[value] ? ++acc[value] : 1,
    };
  }, {});
  return objLetras;
};

console.log(contarLetrasv2('abbcccddddeeeee'));

//SPREAD
let mistring = 'abbcccddddeeeee';
let toArray = [...mistring];
console.log(...toArray);

let obj = {
  prop: 'lala',
  pro2: 'lolo',
};

let obj2 = {
  ...obj,
  miprop: 'lelel',
};
console.log(obj2);
console.log('\n');
console.log('------ METODOSSSSS ------- \n');
//METODOSSSSS
const doMath = {
  multiplicar: function (a, b) {
    return a * b;
  },
  sumar: function () {
    return a + b;
  },
  restar: function (a, b) {
    return a - b;
  },
  dividir: function (a, b) {
    return a / b;
  },
};

console.log(doMath.multiplicar(5, 5));
console.log('\n');

const doMathV2 = {
  multiplicar(...args) {
    console.log(args);
  },
  sumar(a, b) {
    return a + b;
  },
  restar(a, b) {
    return a - b;
  },
  dividir(a, b) {
    return a / b;
  },
};
doMathV2.multiplicar(5, 5, 10, 5, 11, 32, 150, 948);

// THIS - hace referencia al scope de su contexto de ejecucion
// a veces hace referencia al scope global (browser = window / Node = Global), pero otras vece no es asi, sino que hace referencia a el objeto que lo contiene
//Pero tampoco esto es una regla general, sino que puede cambiar dependiedo  el contexto de ejecucion.

//En una funcion declarada this apunta al objeto windows
function hola() {
  console.log(this);
}

//Con objetos la cosa se pone interesante cuando cramos un metodo dentro del objeto, this va hacer referencia al mismo objeto-
//Esto no simpre es asi, pero para los casos que vamos a ver si lo es.

// const perrito = {
//   sonido: 'GUAUF!',
//   ladrar() {
//     console.log(this);
//   },
// };

// const alumno = {
//   nombre: 'Hernan',
//   apellido: 'Estalella',
//   nombreCompleto() {
//     console.log(`El Alumno es: ${this.nombre} ${this.apellido}`);
//   },
// };
// alumno.nombre = 'Facundo';

//Repaso destructuring arrays y objs
let array = [1, 2];
let [uno, dos] = array;

console.log(uno, dos);

let objlala = {
  prop1: 'lala',
  prop2: 'lolo',
};

let { prop1: miVarNameCustom, prop2 } = objlala;

console.log(miVarNameCustom, prop2);

const alumno = {
  nombre: 'Hernan',
  apellido: 'Estalella',
  notas: {
    algebra: 10,
    fisica: 8,
    quimica: 10,
  },
  nombreCompleto() {
    console.log(this);
    let { nombre, apellido } = this; // - alumno{};
    return `${nombre} ${apellido}`;
  },
  promedio() {
    let materias = Object.keys(this.notas);
    //["algebra", "fisica","quimica"]
    return (
      materias
        .map((materia) => {
          console.log(this);
          //alumno.notas['quimica']
          return this.notas[materia];
          //[10,8,10] - RESULTADO FINAL DE TODAS LAS ITERACIONES
        })
        .reduce((acc, val) => acc + val) / materias.length
    );
  },
  printPresentacion() {
    console.log(this);
    console.log(
      `El alumno ${this.nombreCompleto()} tiene un promedio de ${this.promedio()}`
    );
  },
};
