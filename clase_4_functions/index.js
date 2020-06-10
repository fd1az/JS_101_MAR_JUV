// fn = funcion
//FUNCIONES - ES UNO DE LOS TEMAS MAS IMPORTANTES EN JS
//DEFINICION: Un bloque reutilizable de código, las funciones nos permiter escribir código que luego podemos volver a usar.

//Las funciones tiene dos partes
//1) LA DECLARACION DE LA FUNCION
//2) Correr la fn o llamar la fn, call a function / run a function!

//DECLARAR FN

function funcName() {
  //Código que va hacer algo....
}

function tresConsolas() {
  console.log('HOLA CHIQUES');
  console.log('HOLA CHIQUES');
  console.log('HOLA CHIQUES');
}

// tresConsolas();
// tresConsolas();

//EJEMPLO DADO

function dadoRandom() {
  let numero = Math.floor(Math.random() * 6) + 1;
  console.log('Dado numero: ' + numero);
}

//PARAMETROS
function lanzarDado(cantida) {
  for (let index = 0; index < cantida; index++) {
    dadoRandom();
  }
}
//ARGUMENTO de la funcion
//lanzarDado(50);

//JS NO VALIDA EL TIPO DE DE LOS PARAMETROS
function sayMyName(nombre) {
  if (typeof nombre === 'string') {
    console.log(`Tu nombre es : ${nombre}`);
  } else {
    console.log('Esperaba un string');
  }
}

sayMyName();

//FN de mates
function cuadrado(num) {
  console.log(num * num);
}

function sumar(a, b) {
  console.log(a + b);
}

function dividir(a, b) {
  console.log(a / b);
}

// cuadrado(5);
// sumar(50, 250);
// dividir(50, 10);
// dividir(10, 50);

// RETURN  - el valor que devuelve la funcion, son super utiles porque podemos guardarlo en una variable o pasarlo a otra funcion.

function cuadradoR(num) {
  return num * num;
}

function sumarR(a, b) {
  return a + b;
}

function dividirR(a, b) {
  return a / b;
}

let cuadradoDe5 = cuadradoR(5); //25;
let sumaDeNum = sumarR(50, 250);
let dividirVar = dividirR(50, 10);

console.log(cuadradoDe5);
console.log(sumaDeNum);
console.log(dividirVar);

function retornaMUchos() {
  return [1, 51, 3515];
}

let arr = retornaMUchos();

console.log(arr);

//EJEMPLO DE FN CON VARIOS PARAMETROS Y QUE VUELVE ARRAY DE TODOS ESOS PARAMETROS

function cuadrados(...args) {
  let miArray = [];
  for (let index = 0; index < args.length; index++) {
    miArray.push(args[index] * args[index]);
  }
  return miArray;
}

//Array Destructuring
let arrayDeCuadros = cuadrados(1, 2, 3, 5, 5, 6, 7, 88, 3);
console.log(arrayDeCuadros);
let [valor1, valor2, valor3] = cuadrados(5, 4, 3);

console.log('Valor1: ' + valor1);
console.log('Valor2: ' + valor2);
console.log('Valor3: ' + valor3);

//APROVECHANDO EL RETURN
//V1
function esRojo(color) {
  if (color.toLowerCase() == 'rojo') {
    return true;
  } else {
    return false;
  }
}

// console.log(esRojo('ROJOiiiiiiii'));

//V2
function esRojo2(color) {
  if (color.toLowerCase() == 'rojo') {
    return true;
  }
  return false;
}

//console.log(esRojo2('ROJO'));

//V2
function esRojo3(color) {
  return color.toLowerCase() == 'rojo';
}

//console.log(esRojo3('ROJO|sf|a|asdfasdfasdf'));

//EJEMPLO DE FN VALIDAR PASSWORD
//Requisitos
// 1 - mayor a 8 caracteres
// 2 - sin espacios en blanco
// 3 - no puede contener el nombre del usuario

//V1
function checkPassword(password, userName) {
  if (password.length < 8) {
    return false;
  } else if (password.includes(' ')) {
    return false;
  } else if (password.includes(userName)) {
    return false;
  }
  return true;
}
let pass = 'supusuasdasdasdario123';
let userId = 'usuario123';

let msjCheckPass = checkPassword(pass, userId)
  ? 'OK tu password es correcto'
  : 'Password invalido!';
console.log(msjCheckPass);

//V2
function checkPassword2(password, userName) {
  let passwordLength = password.length >= 8; // true
  let passworBlanc = !password.includes(' '); // Si hay ' ' -> false -> !false -> true
  let passwordHasUsername = !password.includes(userName); // si hay User -> true -> !true -> false
  //         true             false          true  =>
  return passwordLength && passworBlanc && passwordHasUsername;
}

let msjCheckPass2 = checkPassword2(pass, userId)
  ? 'OK tu password es correcto'
  : 'Password invalido!';
console.log(msjCheckPass);

//FN promedio
let notasAlumne = [10, 5, 10, 10];

function promedio(arr) {
  let total = 0;
  for (let num of arr) {
    // total = total + num
    total += num;
  }
  return total / arr.length;
}
let promedioAlumno = promedio(notasAlumne);
console.log(`Promedio final = ${Math.round(promedioAlumno)}`);

//FUNCTION EXPRESION

let multiplicar = (a, b) => {
  return a * b;
};

let sum = (a, b) => {
  return a + b;
};

let div = (a, b) => {
  return a / b;
};

let mathOperations = [multiplicar, sum, div];

console.log(mathOperations[0](5, 5));

for (let fn of mathOperations) {
  let resultado = fn(5, 5);
  console.log(resultado);
}

//CALLBACKS
let doMath = (a, b, cb) => {
  return cb(a, b);
};

console.log('[doMath]: ' + doMath(5, 5, multiplicar));
console.log('[doMath]: ' + doMath(5, 5, sum));

let cambiarAyB = (a, b, cb) => {
  let num1 = a * a;
  let num2 = b * b;
  return cb(num1, num2);
};

console.log('[cambiarAyB]: ' + cambiarAyB(5, 5, sum));
/*
doMath(5,5, multiplicar ){
    return multiplicar(5,5)
}
*/

const multiplicarBy = (num) => {
  let numeroRecordado = num;
  return (otroNumero) => {
    return numeroRecordado * otroNumero;
  };
};

const doble = multiplicarBy(2);
const triple = multiplicarBy(3);
const cuadruple = multiplicarBy(4);

console.log(doble(50));
console.log(triple(30));
console.log(cuadruple(25));
