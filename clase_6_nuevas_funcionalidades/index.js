//Valor por default en una FUNCION

const sum = (a, b) => {
  return a + b;
};
console.log(sum(5));
// return 5 + 'undefined' => NaN

const sumv2 = (a, b) => {
  let existeA = a === undefined ? 0 : a;
  let existeB = b === undefined ? 0 : b;
  return existeA + existeB;
};

console.log(sumv2());

const sumv3 = (a = 0, b = 0) => {
  return a + b;
};
console.log(sumv3());

const duplicarArray = (arr = []) => {
  if (arr.length !== undefined) {
    return arr.map((v) => v * 2);
  }
  return 'Error esperaba un array';
};
let array1 = duplicarArray([2, 4, 6, 8]);
console.log(array1);

let array2 = duplicarArray(1, 2, 3, 4, 5);
console.log(array2);

let array3 = duplicarArray([]);
console.log(array3);

console.log('\n');
console.log('----- SPREAD  =  Expandir // Con arrays ------');
// SPREAD  =  Expandir
//La sintaxis extendida o spread sintax permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o más argumentos (para llamadas de  función) ó elementos (para Array literales) son esperados, o a un objeto ser expandido en lugares donde cero o más pares de valores clave (para literales Tipo Objeto) son esperados.

let arr1 = [1, 2, 3, 4, 5, 6]; // 0x32135435181
let arr2 = [6, 7, 8, 9, 10];
let todoJunto = [...arr1, ...arr2];
console.log(todoJunto);

let copyArr1 = [...arr1]; //Copyarra1 = [1, 2, 3, 4, 5, 6]
copyArr1.push(1000);
console.log(arr1);
console.log(copyArr1);
console.log(arr1 === copyArr1);
//;[1,2,3,4,5,6] -> 0x32135132151

console.log('\n');
console.log('----- SPREAD  =  Expandir // Con Objetos ------');
//Spread con Objetos

const auto = {
  ruedas: 4,
  carroceria: 'metal',
  motor: true,
};

const sedan = {
  ...auto,
  puertas: 4,
  tipo: 'familiar',
};

const fordFiesta = {
  ...sedan,
  marca: 'ford',
};

const changeFordByChevy = {
  ...fordFiesta,
  marca: 'chevrolet',
};
console.log(changeFordByChevy);

//Nested Object
const orden = {
  id: 'as1321d6a5sf1a35f13sd2f1',
  monto: 500,
  direccion: {
    calle: 'Rivadavia',
    numero: 123,
  },
};

const copyOrden = {
  ...orden,
};

console.log('[Check copia de orden]', copyOrden === orden);
console.log(
  '[Y el objeto nesteado???]',
  copyOrden.direccion === orden.direccion
);

const copyOrden2 = {
  ...orden,
  direccion: {
    ...orden.direccion,
  },
};

console.log('[Check copia de orden2]', copyOrden === orden);
console.log(
  '[Y el objeto nesteado2???]',
  copyOrden2.direccion === orden.direccion
);

console.log('\n');
console.log('----- PARAMETROS REST   ------');

//parametros REST

const imprimirArgumentos = (a, b, c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};
//imprimirArgumentos('hola', 'hello', 'Privet');

function imprimirSaludos() {
  let args = Array.from(arguments);
  for (const saludo of args) {
    console.log(saludo);
  }
}

imprimirSaludos('hola', 'hello', 'Privet', 'Hi');

//Veamos con REST JS moderno!
const imprimirSaludos2 = (...args) => {
  for (const saludo of args) {
    console.log(saludo);
  }
};

imprimirSaludos2('Hola', 'Hello');

//TAREAAAAAA

//1 - mayus("hola") -> HOLA
const mayus = (str) => {
  //CODIGO
  //   let arr = [...str];
  //   let mayus = arr.map((letra) => letra.toUpperCase()).join('');
  //   return mayus;
  return [...str].map((letra) => letra.toUpperCase()).join('');
};

console.log(mayus('hola'));

//PARA EL JUEVES
// contarLetras('abbcccddddeeeee') => {a:1, b:2,c:3,d:4,e:5}
// Reduce!

//DESTRUCTURANTE array == Destructuring arrays
let marvel = [
  'Iron Man',
  'Capitan America',
  'Thor',
  'Hulk',
  'Black Widow',
  'Falcon',
];

let ironMan = marvel[0];

let [elMartir, elJefe, , elVerdeEnorme] = marvel;

console.log(ironMan, elMartir, elJefe, elVerdeEnorme);

const book = {
  autor: 'J.R.R Talkien',
  titulo: 'El Señor De Los Anillos',
  tapa: 'dura',
  medidad: {
    alto: 50,
    ancho: 50,
  },
};

const { titulo, tapa: tapita } = book;

console.log(titulo, tapita);

//Short hand properties

const estadisticas = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr); //
  const sum = arr.reduce((acc, cv) => acc + cv);
  const promedio = sum / arr.length;
  return {
    max,
    min,
    sum,
    promedio: parseFloat(promedio.toFixed(2)),
  };
};

const datos = [1, 5, 32, 7, 8, 55, 66];
const resultados = estadisticas(datos);
console.log(resultados);

//Computed propeties
const role = 'lkajsHFDLKajshfdlkajSHD';
const empleado = 'Facu';

// const equipo = {
//   role: empleado,
// };

// const equipo = {
//     "role": empleado,
//   };

// const equipo = {};
// //equpo["admin"] = "Facu"
//  equipo[role]= empleado;

const equipo = {
  [role]: empleado,
};

console.log(equipo);
