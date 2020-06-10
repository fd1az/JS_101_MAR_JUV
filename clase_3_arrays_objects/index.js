//ARRAYS - 1er estructura de dato!
let miArray = new Array('asdas', 'ss', 15, {});
//console.log(miArray);

let miOtroArray = ['asdas', 'ss', 15, {}];
//console.log(miOtroArray);

let arrayChat = [
  ['hola', '19:59', 'Facu'],
  ['que haces facu', '20:05', 'Nicolas'],
];

// console.log(
//   'Mensaje de ' + arrayChat[0][2] + ' : ',
//   ' Hora: ' + arrayChat[0][1] + '\n' + arrayChat[0][0]
// );
// console.log(
//   'Mensaje de ' + arrayChat[1][2] + ' : ',
//   ' Hora: ' + arrayChat[1][1] + '\n' + arrayChat[1][0]
// );

//METODO PUSH -  Agrega al FINAL del array
arrayChat.push(['Aca andamo en clase de JS', '20:07', 'Facu']);
arrayChat.push(['Buensimo', '20:07', 'Nico']);
arrayChat.push(['Vos que onda???', '20:08', 'Facu']);
arrayChat.push(['🙂', '20:08', 'Facu']);
arrayChat.push(['😠 Porque el profe explica muy rapido', '20:09', 'Nico']);
arrayChat.push(['Che yo soy el Profe!!!!!!🙂', '20:10', 'Facu']);

//METODO UNSHIFT - AGREGA AL INICIO DEL ARRAY
arrayChat.unshift(['DAME BOLAAAA', '18:07', 'Facu']);

// for (let msj of arrayChat) {
//   console.log(
//     'Mensaje de ' + msj[2] + ' : ',
//     'Hora: ' + msj[1] + '\n' + msj[0] + '\n'
//   );
//   //   console.log(msj);
// }

// METODO POP - elimina el ultimo elemento del array
arrayChat.pop();

//METODO SHIFT - elimina el primer elemento del array
arrayChat.shift();

// for (let msj of arrayChat) {
//   console.log(
//     'Mensaje de ' + msj[2] + ' : ',
//     'Hora: ' + msj[1] + '\n' + msj[0] + '\n'
//   );
//   //   console.log(msj);
// }

//SPLICE - (indexStart, indiceABorrar, Nuevo Valor);
// let miOtroChat = arrayChat.splice(1, 2, [
//   'AGREGADO CON SPLICE',
//   '18:07',
//   'Facu',
// ]);

// console.log(miOtroChat);
// console.log(arrayChat);

//SLICE - IGUAL QUE EN LOS STRINGS

//console.log(arrayChat.slice(0, 3));

//IndexOf
let deuda = [500, 'no'];
// console.log(deuda.indexOf('si'));

// if (deuda.indexOf('si') === -1) {
//   console.log('Este loyi no pago!');
// } else {
//   console.log('ATR no tenes Deuda');
// }

//INCLUDES
let misNumeritos = [1, 2, 3, 5, 4, 5, 6, 45, 3215];
//console.log(misNumeritos.includes(10));

//CONCATENAR ARRAYS
let miArrayDeTexto = ['Hola', 'Como Estas'];
let miOtroArrayDeTexto = ['Todo bien'];
let miArrayTodoJunto = miArrayDeTexto.concat(miOtroArrayDeTexto);

// console.log(miArrayTodoJunto);

let miArrayDeTexto2 = ['Hola', 'Como Estas'];
let miOtroArrayDeTexto2 = ['Todo bien'];
let miArrayTodoJunto2 = [...miArrayDeTexto2, ...miOtroArrayDeTexto2];
// console.log(miArrayTodoJunto2);

//REFERENCE TYPES - IN JS
let color = 'rojo'; //Variable tipo VALOR - Se guarda el "VALOR"!
let otroColor = color; // VARIABLE TIPO VALOR - se guardo "rojo"

console.log(color, otroColor);
otroColor = 'Azul'; // Modifique el VALOR de otroColor, Pero Color no fue afectado

console.log(color, otroColor);

let arrayNum = [1, 2, 3, 4, 5]; // VARIABLE tipo Referencial - GUARDA EL VALOR??? NO, GUARDA LA DIRECCION EN MEMOMORIA (0x131351321)
let miOtroArrayNum = arrayNum; // <--- NO guarda [1,2,3,4,5] - GUARDA  (0x131351321) - ESto es una referencia a la direccion en memoria de Arraynum - Como se dice en otros lenguajes un puntero. (pointers);
const miOtroArrayNoPuntero = [...arrayNum];
// miOtroArrayNum.push(6);
// miOtroArrayNum.push(7);
// console.log(arrayNum, miOtroArrayNum);

miOtroArrayNoPuntero.push(6);
miOtroArrayNoPuntero.push(7);

//console.log(arrayNum, miOtroArrayNoPuntero);

// miOtroArrayNoPuntero = [1, 2, 3];

//OBJETOS - Conjuntos de datos pero del Key - Value pairs
let miObj = new Object();

let miOtroObj = {};

let persona = {
  nombre: 'Facu',
  apellido: 'Diaz',
  edad: 32,
  casado: true,
};
let chatObj = {
  usuario: 'Facu',
  msj: 'LALALA',
  hora: 'hora: 20:05',
  23132: 10,
};
console.dir(chatObj['23132']);

//

const colores = {
  rojo: '#eb4d4b',
  amirillo: '#f9ca24',
  azul: '#30336b',
};
//JUGUEMOS A QUE ESTE VALOR LO LEVANTAMOS DE UN INTERFAZ DE USUARIO
// rojo - azul - amarillo
let inputUserValue = 'rojo';
console.log(colores[inputUserValue]);
console.log(colores.rojo);

const alumno = {
  nombre: 'Lorenzo',
  apellido: 'Lopez',
  materias: ['Algebra', 'Analisis Matetamico', 'Quimica', 'Fisica'],
  tel: {
    cel: 1111111,
    casa: 12321351321,
  },
  recursa: false,
};

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

//OPNCION 1
for (const obj of ARRAY_DE_ALUMNOS) {
  if (obj.recursa) {
    console.log(
      `El alumno: ${obj.nombre} ${obj.apellido} Recursa - llamar al tel: ${obj.tel.casa} \n`
    );
  } else {
    console.log(`El alumno: ${obj.nombre} ${obj.apellido} No recursa`);
  }
}

//OPNCION 2
for (const obj of ARRAY_DE_ALUMNOS) {
  let textoRecursa = obj.recursa
    ? `Recusra materias - Llamar ${obj.tel.casa}`
    : 'No recursa materias';

  console.log(`El alumno: ${obj.nombre} ${obj.apellido} ${textoRecursa} \n`);
}
