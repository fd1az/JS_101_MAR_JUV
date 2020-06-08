//VALUES
1; // Number
14.5; //Number
('Hola como estas??');
`Hola como estas??`; //string
true; // Boolean
false; // Boolean
null; // sin valor
undefined; // No definido
[38, 21.5, 3, 5, 'Hola', false]; // Array -> Colecciones de values, indexados en 0 -> N
{
  nombre: 'Facu';
  apellido: 'Diaz';
  edad: 32;
} // Objetos - Colecciones de valores Clave -> Valor

//OPERADORES
1 + 1; // - / * % ** CUANDO HAGAS OPERACIONES MATEMATICAS SIEMPRE USAR TIPO NUMBER

'Hola ' + 'como estas?'; // "Hola como estas?"

!false; // true;
!true; // false;

true || false; // Operador O -> true;
true && false; // Operador Y -> false;

3 == 3; // Tru
3 == '3'; // True - JS COERCION, o sea el == le permite a JS aplicar COERCION, Convierte los tipos de datos para luego compararlos
3 === 3; // True
3 === '3'; // FALSE - no permite coercion

//TYPE
typeof 321; //Number
typeof 'Nucba'; // String
typeof true; // Boolean
typeof undefined; // "undefined"
typeof { edad: 35 }; // Object
typeof function () {}; // Function // son un subtype de Object

typeof null; // Object WTF!!!!! SI NULL ES UN OBJETO!!!
typeof [1, 5, 3.51]; // Object

//Variables
var miVar = 'hola  ñalsdkñasfjkdflñkjvñalskdjfñaklDFJSÑlskdfj';
var miNumero = 321321;
var miArray = [1, 2, 3, 5, 444, 44];
var texto = 'Largo de mi array: ' + miArray.length;

// console.log(miArray[1]);
// console.log('Largo de mi array: ' + miArray.length);
// console.log(typeof texto);
//console.log(typeof console);

var numerito = 40;
numerito++;
console.log(numerito);
numerito += 10;
console.log(numerito);

//CONDICIONALES

var edad = 30;

if (edad > 18) {
  if (edad < 25) {
    console.log('Podes votar y Sos un votante joven');
    return;
  }

  console.log('Podes votar, estas re viejo');
} else {
  console.log('Lo lamento todavia no tenes edad');
}
console.log('------------------------------------------------ \n');
console.log('**** Loops ******');

//LOOPS!!!!!! Esto lo utilizamos para hacer algo en forma repetitiva o recorrer arrays / objetos

var alumnos = ['Mark', 'Shara', 'Seba1', 'Seba2', 'Tito', 'Dami']; // length = 6

console.log('**** Loops FOR TRADICIONAL ****** \n');
for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i]);
}

console.log('------------------------------------------------ \n');
console.log('**** Loops FOR OF ****** \n');

for (const alumno of alumnos) {
  console.log(alumno);
}

console.log('------------------------------------------------ \n');
console.log('**** Loops FOR IN ****** \n');
let miObjeto = { a: 1, b: 2, c: 3 };

for (let propiedad in miObjeto) {
  console.log(`${propiedad}: ${miObjeto[propiedad]}`);
}

console.log('------------------------------------------------ \n');

console.log('***** FUNCTIONS ***** \n');
//FUNCTIONS!!!!!!!!!!!!
function nucbaTeSaluda(nombre) {
  console.log(`Nucba te saluda ${nombre}`);
}

nucbaTeSaluda('Shara');
nucbaTeSaluda('Shara');
nucbaTeSaluda('Shara');
nucbaTeSaluda('Shara');
nucbaTeSaluda('Shara');
nucbaTeSaluda('Shara');
nucbaTeSaluda('Shara');
nucbaTeSaluda('Shara');
nucbaTeSaluda('Shara');

console.log('------------------------------------------------ \n');

const multiplicarBy = (number) => {
  let x = number;
  return function (numeroDespues) {
    return x * numeroDespues;
  };
};

const mutiplicarPor5 = multiplicarBy(5);
console.log(mutiplicarPor5(5));

const mutiplicarPor10 = multiplicarBy(10);
console.log(mutiplicarPor10(10));
