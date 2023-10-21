//aca voy a poder como se estructura cada cosa en JS

// los SHORTCUT se hacen con ctrl + }

// VARIABLES:

var variable1 = "tiene valor en todo el dominio"
let variable2 = "tiene valor solo en el bloque en el que esté integrado"
const variable3 = "no cambia de valor"

// TIPOS DE DATOS:

// privimitivos:

var number = 3 //claramente son numeros no hay mas que eso
var string = "Texto" //las strings son cadenas de texto
var boolean = true //los datos boolean son verdadero o falso, son un interruptor
var object = null //Es un dato vacio, siempre va representando a un objeto
var indefinida = undefined // es una variable que no ha sido definida con un dato
const symbol = symbol() //los datos symbol son unicos e inmodificables, evitan errores de colision 

//Objetos:

//objeto:
const Objeto = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
                calle: '123 Calle Principal',
                ciudad: 'Ciudad Ejemplo'
    }
}; //los objetos son variables con multiples pares de datos adentro (nombre:valor)

//array:
const Array1 = [1, 2, 3, 4, 5]; //datos en lista
const Array2 = [{ nombre: 'Juan', edad: 30 }, { nombre: 'Maria', edad: 25 }]; //array de arrays

//funcion:

function funcion(dato1, dato2) {
    return dato1 + dato2
} //las funciones son invocables y se usan para que cumplan una cierta funcion en los lugares de codigo que se necesite

//mapas:

let mapa = new Map();
mapa.set('1', 'Hola');
mapa.set(2, 'Mundo');
//permite unificar pares cualquier tipo de datos no como el object que era nombre:valor

//set:

let set = new Set();
conjunto.add(1);
conjunto.add(2);
conjunto.add(3);
//el set permite armar una lista de valores que no se repiten, son todos diferentes.

//OPERADOR:

//aritmeticos:

let suma =  1 + 1 
let resta = 1 - 1 
let multiplicacion = 1 * 1
let division = 1 / 1
let modulo = 15 % 2 //devuelve el resto de una division, ni idea para que sirve xd+

//logicos:

//AND (&&) devuelve true si ambos son iguales

let datoVerdaderoAND = true;
let datoFalsoAND = false;
let resultadoAnd = datoVerdaderoAND && datoFalsoAND; // false

//OR (||) devuelve true si alguno es true

let datoVerdaderoOR = true;
let datoFalsoOR = false;
let resultadoOr = datoVerdaderoOR ||  datoFalsoOR; // true

//NOT (!) devuelve el valor opuesto al que tiene el dato 

let datoVerdaderoNOT = true;
let resultadoNot = !datoVerdaderoNOT; // false

//comparativo:

let f = 5;
let g = '5';
let comparacion1 = f === g; // false (igualdad estricta es si el dato y el tipo de dato son iguales en ambos)
let comparacion2 = f !== g; // true (desigualdad estricta es si son diferentes el dato y el tipo de dato)

//comparativo relacional:

let h = 10;
let i = 5;
let comparacion3 = h > i; // true (mayor que)
let comparacion4 = h < i; // false (menor que)
let comparacion5 = h >= i; // true (mayor o igual que)
let comparacion6 = h <= i; //false (menor o igual que)

//ESTRUCTURAS DE CONTROL:

//if else: permite ejecutar parte del codigo si la condicion se da y otra parte si no se da

if (condicion) {
    // código a ejecutar si la condición se cumple
    } else {
    // código a ejecutar si la condición no se cumple
    }

//else if: Permite agregar más condiciones a un bloque if-else para realizar verificaciones adicionales.

if (condicion1) {
    // código a ejecutar si la condición1 es verdadera
    } else if (condicion2) {
    // código a ejecutar si la condicion1 es falsa y la condicion2 es verdadera
    } else {
    // código a ejecutar si ninguna de las condiciones anteriores es verdadera
}

//BUCLES:

//bucle FOR: ejecuta un bucle la cantidad de veces que lo pidas

for (inicio; condicion; iteracion) {
    // código a ejecutar en cada iteración
}

//bucle WHILE: Se utiliza para ejecutar un bloque de código siempre que se cumpla una condición.

while (condicion) {
    // código a ejecutar mientras la condición sea verdadera
}

//bucle DO-WHILE: se ejecuta una vez antes de verificar la condicion y luego se ejecuta una vez verificada.

do {
    // código a ejecutar al menos una vez
} while (condicion);

//bucle FOR-IN: Se utiliza para recorrer las propiedades de un objeto.

for (let propiedad in Objeto) {
    // código a ejecutar para cada propiedad
}

//bucle FOR-OF: recorre elementos iterables como arrays

for (let elemento of Array1) {
    // código a ejecutar para cada elemento
}

//ESTRUCTURA DE INTERRUPCION Y SALTO: 

//break: se utiliza para terminar un bucle.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // salir del bucle cuando i sea 5
    }
}

//continue: se utiliza para saltar a la siguiente iteracion de un bucle.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // saltar a la siguiente iteración cuando i sea 5
    }
}


//FUNCIONES: PARTE MUY IMPORTANTE QUE TENES QUE ENTENDER A LA PERFECCION IVAN POR FAVOR.

//funciones regulares: formas de escribir funciones.

// Declaración de función
function funcionDeSumar(a, b) {
    return a + b;
}

// Expresión de función
const funcionDeResta = function(a, b) {
    return a - b;
};

// Función flecha
const funcionDeMultiplicar = (a, b) => a * b;

// funciones anonimas: no tienen un nombre establecido, suelen ser argumentos de otras funciones o variables.

const saludar = function() {
    console.log('Hola');
};

//  funciones flecha: sintazis mas sencilla y una relacion especial con el "this"

const dividir = (a, b) => a / b;

//  funciones de orden superior: 

function operar(a, b, operacion) {
    return operacion(a, b);
}
    const resultado = operar(4, 2, multiplicar); // Devuelve 8

// funciones constructoras: primera letra MAYUSCULA por convencion.
// Crea objetos con propiedades y metodos especificos.

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
        console.log('Hola, soy ' + this.nombre + 'y tengo' + this.edad + 'años');
    };
}

const persona1 = new Persona('Juan', 30);

//  funciones generadoras: generan una secuencia de valores en una serie de pasos.
// estas funciones pueden pausarse y reanudarse luego.

function* generarSecuencia() {
    yield 1;
    yield 2;
    yield 3;
}

const secuencia = generarSecuencia();
  secuencia.next(); // { value: 1, done: false }
  secuencia.next(); // { value: 2, done: false }
  secuencia.next(); // { value: 3, done: false }
  secuencia.next(); // { value: undefined, done: true }


// DOM y manipulacion:
// metodos de acceso y manipulacion del DOM:

document.getElementById('ID') //permite trabajar con el elemento del ID que llamaste
document.getElementsByClassName('classname') //permite trabajar con el elemento de la clase que llamaste
document.getElementsByTagName('h1') //permite trabajar con el elemento de la etiqueta HTML que llamaste
document.querySelector('.clase') //permite trabajar con el elemento que coincida con el selector CSS
document.querySelectorAll('.clase') //permite trabajar con todos los elementos que coincidan con el selector CSS


//EVENTOS Y METODOS DE EVENTOS:

// vamos a categorizarlos.

//EVENTOS DEL TECLADO:se disparan con acciones del teclado

// keydown: presionar una tecla 
document.addEventListener('keydown', function(event) {
    console.log('Se presionó la tecla: ' + event.key);
});


// keyup: soltar una tecla 
document.addEventListener('keyup', function(event) {
    console.log('Se soltó la tecla: ' + event.key);
});

// keypress: al mantener una tecla precionada 
document.addEventListener('keypress', function(event) {
    console.log('Se está precionando la tecla: ' + event.key);
});


//EVENTOS DEL MOUSE: se disparan con acciones del mouse

// click: Se dispara cuando se hace clic con el botón izquierdo del mouse.
const miElemento0 = document.getElementById('miElemento0');

miElemento0.addEventListener('click', function(event) {
    console.log('Se hizo clic en el elemento.');
});

// dblclick: Se dispara cuando se hace doble clic con el botón izquierdo del mouse.
const miElemento1 = document.getElementById('miElemento1');

miElemento1.addEventListener('dbclick', function(event) {
    console.log('Se hizo doble clic en el elemento.');
});

// mouseover: Se dispara cuando el cursor del mouse ingresa a un elemento.
const miElemento2 = document.getElementById('miElemento2');

miElemento2.addEventListener('mouseover', function(event) {
    console.log('el mouse está sobre el elemento.');
});

// mouseout: Se dispara cuando el cursor del mouse sale de un elemento.
const miElemento3 = document.getElementById('miElemento3');

miElemento3.addEventListener('mouseout', function(event) {
    console.log('el mouse salio de el elemento.');
});

// mousemove: Se dispara cuando el cursor del mouse se mueve sobre un elemento.
const miElemento4 = document.getElementById('miElemento4');

miElemento4.addEventListener('mousemvoe', function(event) {
    console.log('El mouse se está moviendo.');
});


//EVENTOS DE FORMULARIO:

// submit: Se dispara cuando se envía un formulario.
const miFormulario = document.getElementById('miFormulario');

miFormulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
        console.log('Se ha evitado la acción predeterminada del enlace.');
});

// change: Se dispara cuando el valor de un elemento cambia.
const miFormulario1 = document.getElementById('miFormulario1');

miFormulario.addEventListener('change', function(event) {
    event.preventDefault(); // Evita que el formulario se modifique
        console.log('Se evito la modificacion del valor del elemento.');
});

// input: Se dispara cuando se ingresa un valor en un elemento <input>, <select> o <textarea>.

const miFormulario2 = document.getElementById('miFormulario2');

miFormulario.addEventListener('input', function(event) {
     event.preventDefault(); // Evita que el formulario se 
        console.log('Se evito la modificacion del valor del elemento.');
});

//EVENTOS DE VENTANA:

// load: Se dispara cuando se completa la carga de la ventana y todos sus recursos.

window.addEventListener('load', function() {
    console.log('La ventana ha cargado completamente.');
});

// resize: Se dispara cuando se cambia el tamaño de la ventana del navegador.

window.addEventListener('resize', function() {
    console.log('La ventana ha cambiado de tamaño.');
});

// scroll: Se dispara cuando se desplaza la ventana.

window.addEventListener('scroll', function() {
    console.log('la ventana esta siendo scrolleada.');
});


//ASINCRONISMO EN JAVASCRIPT:

//CALLBACKS: En JavaScript, las devoluciones de llamada son funciones que se pasan como argumentos a otras funciones y que se llaman después de que se completa una operación asincrónica. Aunque efectivas, las devoluciones de llamada pueden llevar a un código anidado confuso y a un fenómeno conocido como "callback hell".

// Función con devolución de llamada
function operacionAsincrona(callback) {
    setTimeout(function() {
        const resultado = 5;
        callback(resultado);
    }, 1000);
}

  // Llamada a la función con devolución de llamada
    operacionAsincrona(function(resultado) {
        console.log('El resultado es: ' + resultado);
});


//PROMESAS: Las promesas son objetos que representan el resultado eventual de una operación asincrónica. Permiten un mejor manejo de las operaciones asincrónicas y evitan el anidamiento excesivo de devoluciones de llamada. Las promesas pueden estar en uno de tres estados: pendiente, cumplida o rechazada. Esto permite encadenar operaciones asincrónicas y manejar errores de manera más clara.

//ASYNC/AWAIT: El async/await es una característica introducida en ECMAScript 2017 que simplifica aún más el manejo de operaciones asincrónicas. Permite escribir código asincrónico de una manera más similar a código síncrono, lo que facilita la lectura y el mantenimiento. La palabra clave async se utiliza para declarar una función asincrónica, y await se utiliza para esperar el resultado de una promesa dentro de una función asincrónica.



