//SCOPE
// QUE ES???

// GLOBAL
let a = 'Soy global';
// console.log(a);
//Scope en Funciones
// LAS FUNCIONES CREAN SU PROPIO CONTEXTO DE EJECUCION -

function fn() {
  let b = 'Soy de mi funcion';
  console.log(b);
}

// fn();
//Scope en Bloques - IF ELSE / FOR / WHILE / SWITCH

{
  let c = 'En tu cara GLOBAL';
  //   console.log(c);
}
//CamelCase palabraSegundaTercera
let miVar = 'lalalal';
miVar = 'JSJSJSJSJS';

// console.log(miVar);

// CONST - Es una variable que no puede reasignar su valor.
//ESTO ES ASI CON PRIMITIVE TYPE

const MI_CONST = 'TEXTO';
//MI_CONST = 'otro texto';
const MI_ARR = [];
MI_ARR.push(1);
// console.log(MI_ARR);

//STRING
//let myString = new String('Hola soy un string');
let myString1 = 'Hola soy un string 21351651 "#$1234255555';
let myString2 = 'Hola soy un STRING2';
let myString3 = `Hola soy un string`;
let myString4 = `       Hola soy un string          `;
let otroValor = myString3.toUpperCase();

//METODOS TRANQUI PANQUI
// console.log(myString1.length);
//console.log(myString1[myString1.length - 1]);
// console.log(myString2.toLowerCase());
// console.log(myString3.toUpperCase());
// console.log(myString4.trim());
// console.log(otroValor);
// console.log(myString3);

//METODOS MAS CHETOS
// console.log(myString1.indexOf('a'));
// console.log(myString1.indexOf('H'));
// console.log(myString1.indexOf('#'));
// console.log(myString1.indexOf('9'));
// console.log(myString1.indexOf('soy'));

//SLICE - Te devuelve un pedacito del string desde el indice que pasamos por parametro
let text =
  'Baere ñaskdmfñalskdmfñoskjngñaoeijg{ñLAS,C{ASOJF´Pwoejfñ{lasmdfñjsg';
// console.log(text.slice(5));
// console.log(text.slice(5, 7));
let fakeCSV = '120,M,ROJO';
let textToArray = fakeCSV.split(','); //METODO STRING -> ARRAY
//console.log(textToArray);
let arrayToString = textToArray.join(','); // ARRAY -> STRING
//console.log(arrayToString);

let chageText = 'Mi MI super Texto';
let textoModificado = chageText.replace('Mi', 'TU'); //RegEx EXPRESIONES REGULARES

// console.log(chageText);
// console.log(textoModificado);

let str = 'abcde';

// for (let char of str) {
//   console.log(char.toUpperCase().repeat(3));
// }

//NUMBER
let numero = 10;
let numero2 = 10.9;

//+ * - /
// console.log(Math.PI);
// console.log(Math.round(numero2));
// console.log(Math.ceil(numero2));
// console.log(Math.floor(numero2));
// console.log(Math.abs(-32));
// console.log(Math.pow(5, 2));

//RAMDOM NUMEROS

let myRand = Math.random();
//console.log(myRand);
// UN NUMERO EN 1 - 10
let paso1 = Math.random(); // 0.5123456789
let paso2 = paso1 * 10; // 5.123456789
let paso3 = Math.floor(paso2); // 5
let paso4 = paso3 + 1;

let randomNum = Math.floor(Math.random() * 10) + 1;

console.log('RANDOM DE ONE: ', randomNum);
console.log('RANDOM PASITO A PASITO: ', paso4);

//console.log(paso4);

// PARSEINT / PARSEFLOAT
let textoInt = '5';
let textoFLoat = '5.3213514';

// console.log(typeof textoInt);
// console.log(typeof parseInt(textoInt));
// console.log(typeof textoFLoat);
// console.log(typeof parseFloat(textoFLoat));
