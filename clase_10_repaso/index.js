const movimientos = [
  {
    tipo: 'ingreso',
    monto: 5000,
  },
  {
    tipo: 'ingreso',
    monto: 300,
  },
  {
    tipo: 'extraccion',
    monto: 500,
  },
  {
    tipo: 'ingreso',
    monto: 300,
  },
  {
    tipo: 'extraccion',
    monto: 1000,
  },
  {
    tipo: 'ingreso',
    monto: 500,
  },
  {
    tipo: 'ingreso',
    monto: 500,
  },
  {
    tipo: 'ingreso',
    monto: 500,
  },
  {
    tipo: 'extraccion',
    monto: 2000,
  },
  {
    tipo: 'ingreso',
    monto: 500,
  },
  {
    tipo: 'extraccion',
    monto: 500,
  },
];

//Callback
function hola(name) {
  console.log('Hola', name);
}

function diHola(name, cb) {
  cb(name);
}

diHola('Facu', hola);

// const ingresos = movimientos
//   .map((obj) => {
//     return {
//       ...obj,
//       monto: obj.monto * 2,
//     };
//   })
//   .filter((obj) => obj.tipo === 'ingreso')
//   .reduce((acc, currentValue) => {
//     return { monto: acc.monto + currentValue.monto };
//   });

const ingresos = movimientos.filter((obj) => obj.tipo === 'ingreso');

const extracciones = movimientos.filter((obj) => obj.tipo === 'extraccion');

const totalIngresos = ingresos.reduce((acc, currentValue) => {
  return { monto: acc.monto + currentValue.monto };
});

const totalExtracciones = extracciones.reduce((acc, currentValue) => {
  return { monto: acc.monto + currentValue.monto };
});

const total = totalIngresos.monto - totalExtracciones.monto;

console.log('------- Estado de cuenta ---------');
console.log('\n');
console.log('Total Ingresos:**********', totalIngresos.monto);
console.log('Total Extracciones:**********', totalExtracciones.monto);
console.log('Saldo en Cuenta:**********', total);

console.log('\n');

const obj = {
  porp1: 'uno',
  prop2: 'dos',
};

const obj2 = {
  ...obj,
  prop3: 'tres',
};

const objToArray = Object.keys(obj2).map((key) => obj2[key]);

const array = [];

for (const key in obj2) {
  console.log(key);
  array.push(obj2[key]);
}

console.log(array);
console.log(objToArray);

const string = 'hola';
const arrayString = Array.from(string);

for (const str of string) {
  console.log(str);
}

const lis = document.querySelectorAll('li');
const arrayLi = Array.from(lis);
const arrayLi2 = [...lis];
console.dir(arrayLi2);

