//SOLUCION TAREAAAA!!

function toggle(...vals) {
  let unset = {};
  let cur = unset;

  return function next() {
    if (cur != unset) {
      vals.push(cur);
    }
    cur = vals.unshift();
    return cur;
  };
}

let hola = toggle('hola');
let onOff = toggle('on', 'off');
let speed = toggle('slow', 'medium', 'fast');

//hola(); // "hola"
// hola(); // "hola"

// onOff(); // "on"
// onOff(); // "off"
// onOff(); // "on"

// speed(); // "slow"
// speed(); // "medium"
// speed(); // "fast"
// speed(); // "slow”
function array() {
  let arr = Object.create(array.prototype);
  arr.length = 0;

  for (key in arguments) {
    arr[key] = arguments[key]; //
    arr.length++;
  }

  return arr;
}

array.prototype.push = function (element) {
  //
  this[this.length] = element;
  this.length++;
  return this.length;
};

array.prototype.pop = function () {
  this.length--;
  const element = this[this.length];
  delete this[this.length];
  return element;
};

array.prototype.filter = function (cb) {
  let result = array();

  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      const element = this[index];
      if (cb(element, index)) {
        result.push(element);
      }
    }
  }
  return result;
};

let mascotas = array('gato', 'perro', 'caballo', 'cebra', 'cerdo');

mascotas.push('vaca');
console.log(mascotas);
mascotas.pop();
console.log(mascotas);
let conC = mascotas.filter((v) => v.chartAt(0) === 'c');

console.log()
