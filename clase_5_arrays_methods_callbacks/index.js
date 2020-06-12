//RECORDAMOS CALLBACKS
//GLOBAL
function soyUnaFn(x) {
  //Scope   soyUnaFn
  return x('eyyy estoy dentro de soyUnaFn \n');
}

function logearFn(text) {
  console.log(text);
}
soyUnaFn(logearFn);

//FUNCTION EXPRESSION

//NAMED FUNCTION
function esPar(n) {
  return n % 2 === 0;
}
//FUNCTION EXPRESSION
const esPar2 = function (n) {
  return n % 2 === 0;
};

//ARROW FUNCTION EXPRESSION
const esPar3 = (n) => {
  return n % 2 === 0;
};

//ARROW FUNCTION EXPRESSION CON RETURN INPLICITO
const esPar4 = (n) => n % 2 === 0;

//ARRAY CALLBACKS METHODS - son metodos que tienen los arrays que esperan callback como argumentos

console.log('\n');
console.log('-----------FOREACH-------------');
//FOREACH
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//

// numeros.forEach((value, idx) => {
//   console.log(value, idx);
// });

// for (let index = 0; index < numeros.length; index++) {
//   console.log(numeros[index]);
// }

// for (const num of numeros) {
//   console.log(num);
// }

// numeros.forEach((value) => {
//   if (value % 2 === 0) {
//     console.log(value);
//   }
// });

const ARRAY_DE_ALUMNOS = [
  {
    nombre: 'Lorenzo',
    apellido: 'Lopez',
    materias: ['Algebra', 'Analisis Matetamico', 'Quimica', 'Fisica'],
    tel: {
      cel: 1111111,
      casa: 12321351321,
    },
    recursa: false,
  },
  {
    nombre: 'Mabel',
    apellido: 'Gutierrez',
    materias: ['Algebra', 'Analisis Matetamico', 'Quimica', 'Fisica'],
    tel: {
      cel: 1111111,
      casa: 12321351321,
    },
    recursa: false,
  },
  {
    nombre: 'Lorena',
    apellido: 'Astrada',
    materias: ['Algebra', 'Analisis Matetamico', 'Quimica', 'Fisica'],
    tel: {
      cel: 1111111,
      casa: 12321351321,
    },
    recursa: true,
  },
  {
    nombre: 'Diego Armando',
    apellido: 'Messi',
    materias: ['Algebra', 'Analisis Matetamico', 'Quimica', 'Fisica'],
    tel: {
      cel: 1111111,
      casa: 12321351321,
    },
    recursa: true,
  },
];

ARRAY_DE_ALUMNOS.forEach((obj) => {
  let textoRecursa = obj.recursa
    ? `Recusra materias - Llamar ${obj.tel.casa}`
    : 'No recursa materias';

  console.log(`El alumno: ${obj.nombre} ${obj.apellido} ${textoRecursa} \n`);
});

console.log('\n');
console.log('-----------MAP-------------');

//MAP - Crea un nuevo array con el resultado de la operaciones definidas en el callback

let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let dobles = numeros2.map((n) => {
  return n * 2;
});

console.log('[numeros2]: ' + numeros2);
console.log('[dobles]: ' + dobles);
console.log('\n');

let numObj = numeros2.map((n) => {
  return {
    numero: n,
    esPar: n % 2 === 0,
  };
});

console.log('[dobles]: ', numObj);
console.log('\n');

let nombresAlumnes = ARRAY_DE_ALUMNOS.map((alumno) => {
  return `${alumno.nombre} ${alumno.apellido}`;
});

console.log(nombresAlumnes);
console.log('\n');

console.log('\n');
console.log('-----------FIND-------------');
//FIND - devuelve el primer valor que encuenta que satisface la logica que le pasamos en el callback

let books = [
  'El hobbit',
  'Narnia',
  'Harry Potter',
  'El señor de los Anillos',
  'Yo Robot',
];

let book = books.find((book) => {
  return book.includes('El');
});
console.log(book);

let books2 = [
  {
    id: 123,
    titulo: 'El hobbit',
  },
  {
    id: 1234,
    titulo: 'Narnia',
  },
  {
    id: 12345,
    titulo: 'Harry Potter',
  },
  {
    id: 123456,
    titulo: 'El señor de los Anillos',
  },
  {
    id: 1234567,
    titulo: 'Yo Robot',
  },
];

//SUPON que este valor lo obtenemos de un input del usuario
let idBook = 123456;
let book2 = books2.find((book) => {
  return book.id === idBook;
});

console.log(book2);

console.log('\n');
console.log('-----------FILTER-------------');
// FILTER - devuelve un array con el/los elementos que cumplan con la logica que pasamos en el callback

let books3 = [
  {
    id: 123,
    title: 'El Hobbit',
    author: 'J.R.R Tolkien',
    genres: ['ciencia ficción', 'aventura'],
  },
  {
    id: 1234,
    title: 'Narnia',
    author: 'C.S Lewis',
    genres: ['ciencia ficción', 'aventura'],
  },
  {
    id: 12345,
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    genres: ['ciencia ficción', 'aventura'],
  },
  {
    id: 123456,
    title: 'El Señor de los Anillos',
    author: 'J.R.R Tolkien',
    genres: ['ciencia ficción', 'aventura'],
  },
  {
    id: 12345678,
    title: 'Yo Robot',
    author: 'Isaac Asimov',
    genres: ['ciencia ficcion', 'aventura'],
  },

  {
    id: 123456789,
    title: 'El último Teorema de Fermat',
    author: 'Simon Singh',
    genres: ['ciencia', 'matemáticas', 'divulgación científica'],
  },
  {
    id: 1234567810,
    title: 'La Puerta equivocada',
    author: 'Adrian Paenza',
    genres: ['ciencia', 'matemáticas', 'divulgación científica'],
  },
  {
    id: 1234567811,
    title: 'Historia del Tiempo',
    author: 'Stephen Hawking',
    genres: ['ciencia', 'física', 'divulgación científica'],
  },
];
