// 1- Crea una variable "nombre" asignar un valor del tipo string. Luego imprime el valor en la consola.

let nombre = "facu";
console.log(nombre);

// 3- Crea dos variables una "nombre" y otra "apellido" asignar  valores del tipo string. Crea una tercer variable que sea "nombre completo" (en camelcase) asignar un valor del tipo string que sea el resultado de concatenar los valores de las primeras dos variables.
// Imprimir resultado en la consola.

let nombre_2 = "facu2";
let apellido = "diaz";
let nombreCompleto = `${nombre_2} ${apellido}`; //nombre_2 + " " + apellido;
console.log(nombreCompleto);

// 4. crea una variable cualquiera asignar un valor del tipo string, imprimir en consola el valor en mayusculas.

let string = "aljknsdlaksdlaksdjaslkdjas";
console.log(string.toUpperCase());

// 5. crea una variable cualquiera asignar un valor del tipo string, imprimir en consola el valor de su cantidad de caracteres.

let string2 = "aaaaaaaaaaaaaaa";
console.log(string2.length);

// 6. Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por consola los doce meses, imprimiendo 1 a 1
let meses = [
  "Enero ",
  "Febrero ",
  "Marzo ",
  "Abril ",
  "Mayo ",
  "Junio ",
  "Julio ",
  "Agosto ",
  "Septiembre ",
  "Octubre ",
  "Noviembre ",
  "Diciembre ",
];
// console.log(meses[0]);
// console.log(meses[1]);
// console.log(meses[2]);
// console.log(meses[3]);
// console.log(meses[4]);
// console.log(meses[5]);
// console.log(meses[6]);
// console.log(meses[7]);
// console.log(meses[8]);
// console.log(meses[9]);
// console.log(meses[10]);
// console.log(meses[11]);

// 7. Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por consola los doce meses, utilizando un for loop

for (const mes of meses) {
  console.log(mes);
}

for (let index = 0; index < meses.length; index++) {
  console.log(meses[index]);
}

// 8. Dado el siguiente código escribe las condiciones para que siempre sean correctas.

let num1 = 5;
let num2 = 8;

if (num1 <= num2) {
  console.log("num1 no es mayor que num2");
}
if (num2 > 0) {
  console.log("num2 es positivo");
}
if (num1 < 0 || num1 != 0) {
  console.log("num1 es negativo o distinto de cero");
}
if (num1 + 1 <= num2) {
  console.log(
    "Incrementar en 1 unidad el valor de num1 no lo hace mayor o igual que num2"
  );
}

// 9. Crear un array llamado números, con los valores del 1 al 10 utiliza un for of para recorrer el array, en cada iteración deberias imprimir en la consola el resultado del la multiplicación del numero actual por el numero 5.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num of numeros) {
  console.log(num * 5);
}

// 10. Crea un objeto persona con los propiedades nombre, apellido, edad, imprime el el objeto en la consola.

const persona = {
  name: "facu",
  apellido: "diaz",
};
console.log(persona);

// 11. En el objeto persona creado en el ejercicio anterior, agregar la propiedad dni con un valor numerico.  Imprime el objeto en la consola.
persona.dni = 12345678;
console.log(persona);

// 12. Al objeto persona que hemos creado, debes modificar el valor de la propiedad apellido. Imprimir el resultado en la consola.
persona.apellido = "lalalala";
console.log(persona);

// 13. En el objeto persona que hemos creado, elimina la propiedad nombre.  Imprimir el resultado en la consola.

delete persona.name;
console.log(persona);

// 14. Crea una función que retorne el valor de la suma de dos números enteros, asigna el valor de retorno a una variable. Imprime el valor de la variable en la consola.
function sumar(a, b) {
  return a + b;
}
let resultado = sumar(5, 5);
console.log(resultado);

// 15. Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Imprimir el resultado en la consola.

function esPar(n) {
  if (n % 2 === 0) {
    console.log(`El numero ${n} es par`);
    return;
  }
  console.log(`El numero ${n} no es par`);
}

esPar(11);

// 16. Escribir el código de una función a la que se pasa como parámetro un Array de enteros y devuelve como resultado la sumatoria de todos los numero del array.
// Imprimir el resultado en la consola.

function sumatoria(args) {
  return args.reduce((a, b) => a + b);
}
console.log(sumatoria([5, 5, 5]));

// 17. Escribir el código de una función llamada "contar" a la que se pasa como parámetro un numero entero,  esta función debe imprimir en consola la secuencia de números desde 0 hasta el numero que recibió como parametro.

function contar(num) {
  for (let index = 0; index <= num; index++) {
    console.log(index);
  }
}

contar(10);
