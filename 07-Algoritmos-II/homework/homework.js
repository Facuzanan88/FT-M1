'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
 
  if (array.length <= 1) return array;

  let pivot = array[0];
  let izq = [];
  let der = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      izq.push(array[i]);
    } else {
      der.push(array[i]);
    }
  }
  return quickSort(izq).concat(pivot).concat(quickSort(der));
}

 /*
if (array.length <= 1) return array;
  let pivot = array[Math.floor(Math.random()* array.length)];
  let left = [];
  let right = [];
  let equal = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      equal.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}
*/

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length === 1) return array;

  let div = split(array);
  let left = div[0];
  let right = div[1];

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){

  let leftIndex = 0;
  let rightIndex = 0;
  let array = [];

  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      array.push(left[leftIndex]);
      leftIndex++;
    }else{
      array.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function split(array){

  let middle = Math.floor(array.length/2);
  let left = array.slice(0, middle); 
  let right = array.slice(middle);   

  return [left, right];
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
