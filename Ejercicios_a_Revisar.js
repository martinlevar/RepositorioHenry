// Fundamentos de JavaScript, 07

function esTipoDato(valor) {
    // La función recibe un argumento llamado valor.
    // Retorna el tipo de dato de este valor.
    // Por ejemplo: "string", "number", "boolean", "object", etc.
    // Tu código:
  
return typeof valor; // typeof es un operador en JavaScript que se utiliza para 
                       // determinar el tipo de dato de una variable o expresión.
}
//-----------------------------------------------------------------------------------

// Fundamentos de JavaScript, 08

function esNumeroEntero(numero) {
    // La función recibe un argumento llamado numero.
    // Verifica si este es un número entero o no.
    // Retorna true si lo es, de lo contrario, retorna false.
    // Por ejemplo: 
    // 24 ---> true 
    // -1212 ---> true 
    // 121.212 ---> false 
    // Tu código:
  
return Number.isInteger(numero); //Number.isInteger() es un método en JavaScript que determina si 
                                     //el valor pasado como argumento es un número entero.

}

//-----------------------------------------------------------------------------------
// Fundamentos de JavaScript, 09


function esNuloOIndefinido(valor) {
  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:

return valor === null || valor === undefined;
}

//-----------------------------------------------------------------------------------

// Bucle , 05
function esVerdadero(valor) {

if (valor){
  return 'Soy verdadero';
}else{
  return 'Soy falso'
}

//-----------------------------------------------------------------------------------

// Bucle , 18

function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  if (a <=0 || b  <= 0){
    return 0;
  } else{
    let producto = 1;
    for (let i = a; i <=b; i++){
      producto *=i;
    }
    return producto
  }
}
}

//-----------------------------------------------------------------------------------

// Bucle  21

function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

    // Si el número es menor que 1, no puede ser una potencia de 2
    if (numero < 1) {
      return false;
    }
    
    // Mientras el número sea divisible por 2 sin dejar residuo
    while (numero % 2 === 0) {
      // Dividimos el número entre 2
      numero = numero / 2;
    }
    
    // Si al final el número es 1, significa que era una potencia de 2
    return numero === 1;
  }

//-----------------------------------------------------------------------------------
// Bucle  22

function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let i = 0; // Inicializamos el contador en 0
  
  do {
    num += 5; // Aumentamos "num" en 5
    i++; // Incrementamos el contador
  } while (i < 8); // El bucle se repite hasta que "i" llegue a 8
  
  return num; // Retornamos el valor final de "num"
}
//-----------------------------------------------------------------------------------
// Bucle  23


function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  if (numero < 2) {
    return false;
  }
  
  // Verificamos si tiene divisores hasta la raíz cuadrada del número
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    // Si "numero" es divisible por "i", no es primo
    if (numero % i === 0) {
      return false;
    }
  }

  // Si no se encontró ningún divisor, el número es primo
  return true;
}