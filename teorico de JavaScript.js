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

//  funciones generadoras: 

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
