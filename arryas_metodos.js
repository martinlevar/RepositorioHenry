// Todos los arrays estan asociados a una serie de Metodos, es decir funciones nativas ya 
// preestablecidad en los lenguajes de programacion.

// Metodos de agregar y eliminar

let colores = ['Amarillo','Azul'];
colores.push('Rojo'); //agrega elemento al final del array
colores.unshift('Verde'); //agrega elemento al principio
colores.pop(); //elimina ultimo elemento
colores.shift(); //elimina primer elemento
//console.log(colores);

// METODO INCLUDE: Sabes si el array incluye un elemento

let pintores = ['Picasso','Velazquez','Van Gogh','Dali'];
//console.log(pintores.includes('Monet'))

// METODO EVERY: Saber si todos los elementos de un array cumplen con una condicion

let numerosEjemplo = [1,6,8,9];

let mayorACinco = numerosEjemplo.every(num => {return num >5}); // = funcion flecha

//console.log(mayorACinco)

// METODO SPLIT JOINT => nos permiten transformar arrays en string y vice versa

let palabra = 'Henri'; // String mal escrito, debemos resolverlo
let palabraSeparada = palabra.split(''); // Indicamos que separe el string en caracteres
//console.log(palabraSeparada) // Nos devuelve un array separado en letras
palabraSeparada.pop();
palabraSeparada.push('y');
console.log(palabraSeparada)
let palabraArreglada = palabraSeparada.join('')
console.log(palabraArreglada)

// METODOS QUE NOS PERMITE RECORRER ARREGLOS

// Metodo For each => este metodod recorre pero no hace ningun cambio

let numeros = [1,2,3,4]
//numeros.forEach(num=>{console.log(num)});

//numeros.forEach(num =>{if (num === 4) (console.log(num))})

// Metodo Map => este metodod podemos hacer cambios mientras lo recorremos

let masUno = numeros.map(num => {return num +1}) // A cada elemento se le suma +1

console.log(masUno);

//  METODO PARA INVERIR UN ARRAY

Array.reverse()

// CONVERTIR A MAYUSCULAS

elemento.toUpperCase();  

// FILTRAR ELEMENTOS

Array.filter()