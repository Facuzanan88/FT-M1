
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) { // 8 9 10
  var x = 10; 
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) { // 8 9 10
    b = a; 
    console.log(b); // 8
    b = c;
    var x = 5;
  }
  f(a,b,c); // 8 9 10 
  console.log(b); // 9 
}
c(8,9,10); // invoca la funcion
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); // undefined
console.log(baz); // error, porque baz no esta definida
foo(); // 'Hola!'
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // 'Franco'
```

```javascript
var instructor = "Tony";
console.log(instructor); // 'Tony'
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // 'Franco'
   }
})();
console.log(instructor); // 'Tony'
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // 'The Flash'
    console.log(pm); // 'Reverse Flash'
}
console.log(instructor); // 'The Flash'
console.log(pm); // 'Franco'
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 18
"2" * "3" // 6
4 + 5 + "px" // 9px --> primero suma y luego concatena } en el momento que aparece un string
"$" + 4 + 5 // $45 --> se concatena  todo              } comienza a concatenarce
"4" - 2 // 2
"4px" - 2 // Nan
7 / 0 // Infinity
{}[0] // [0]
parseInt("09") // 9 --> de string pasa a numero 
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5 --> considera 0 como falso
[3]+[3]-[10] // 23 --> 33 - 10 concatena dos string  '3' + '3' = 33 luego 33 - 10 = 23
3>2>1 // false ---> 3>2= true > 1 = false 
[] == ![] // True --> evalua tipo de objeto
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // Undefined
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // al ser falsa la condicion la funcion no hace nada y directamente no devuelve nada.   ???  
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // 'Aurelio De Rosa'

var test = obj.prop.getFullname; 

console.log(test()); // 'Juan Perez' ---> ?? This hace referencia al contexto global porque la variable test se declaro ahi.
```
// THIS SIEMPRE HACE REFERENCIA AL CONTEXTO DESDE DONDE ES INVOCADA Y NO DESDE DONDE ES DECLARADA.
### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // primero
   setTimeout(function() { console.log(2); }, 1000); // luego de 1000 milisegundos (1 segundo) cuarto
   setTimeout(function() { console.log(3); }, 0); // tercero
   console.log(4); // segundo
}

printing();
```
