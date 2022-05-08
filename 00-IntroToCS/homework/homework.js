'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  
let decimal = 0;
let numArray = num.split('');
for (let i = 0; i < numArray.length; i++) {
  decimal += numArray[i] * 2 ** (numArray.length - 1 - i); 
}
return decimal;
}


// return parseInt(num, 2)

/*
return num.split('').reverse().map(function(element, index) {
  return element * Math.pow(2, index);
}).reduce( (a,b) => a + b);
}*/

function DecimalABinario(num) {
  // tu codigo aca
let numero = num;
let array = [];
while (numero > 0) {
  array.unshift(numero % 2);
  numero = Math.floor(numero / 2);
 
}
return array.join('');
}
// return num.toString(2);


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}