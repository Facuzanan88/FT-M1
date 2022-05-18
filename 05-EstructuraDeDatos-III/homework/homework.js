'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  if (value > this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) return true;
  if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value)
  }
  if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value)
  }
}

BinarySearchTree.prototype.size = function () {
  if (this.right === null && this.left === null) return 1;
  if (this.right !== null && this.left === null) return 1 + this.right.size();
  if (this.right === null && this.left !== null) return 1 + this.left.size();
  if (this.right !== null && this.left !== null) return 1 + this.right.size() + this.left.size();
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  if (order === 'pre-order') { // rot - izq - der
    cb(this.value)
    if (this.left !== null) this.left.depthFirstForEach(cb, order)
    if (this.right !== null) this.right.depthFirstForEach(cb, order)
  }
  else if (order === 'post-order') { // izq - der - rot
    if (this.left !== null) this.left.depthFirstForEach(cb, order)
    if (this.right !== null) this.right.depthFirstForEach(cb, order)
    cb(this.value)
  }
  else { // order = in-order  -> izq - rot - der
    if (this.left !== null) this.left.depthFirstForEach(cb, order)
    cb(this.value)
    if (this.right !== null) this.right.depthFirstForEach(cb, order)
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
if (this.left !== null) array.push(this.left);
if (this.right !== null) array.push(this.right);
cb(this.value);
if (array.length !== 0) array.shift().breadthFirstForEach (cb, array);
}


// tambien se puede resolver tmb con el metodo 'Switch' a 'depthFirstForEach' 
/*  Switch(order) {
   case 'pre-order':
     ///
     break;
     case 'post-order'
     ///
     break;
     default: // in-order
     ///
     break;
 }
 } */


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
