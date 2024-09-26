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

//-----------------------------------------------------------------------------------
// Arrays  02

function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:

  return array[array.length -1]
}

//-----------------------------------------------------------------------------------
// Arrays  07

function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  return array.sort();
}

//-----------------------------------------------------------------------------------
// Arrays  08

function encontrarElemento(num, array) {
  // Busca el número pasado por argumento dentro del array.
  // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:

return array.indexOf(num);

}

//-----------------------------------------------------------------------------------
// Arrays  09

function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:

let randomIndex = Math.floor(Math.random() * array.length);
return array[randomIndex];

}

//Explicacion: 

// Math.random() genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo).
// Es decir, podría generar valores como 0.123, 0.857, etc.

// Multiplicamos este valor aleatorio por array.length, lo que nos da un número entre 0 y 
//el tamaño del arreglo (pero sin llegar a incluir el tamaño del arreglo).

// Ejemplo: Si el arreglo tiene 5 elementos (array.length === 5), el resultado será un número
// entre 0 y 4.999....

//Luego, aplicamos Math.floor(), que redondea hacia abajo el valor generado. Esto garantiza que 
//obtendremos un número entero válido para usar como índice del arreglo. Así, los posibles 
//valores del índice serán números enteros entre 0 y array.length - 1.

// Ejemplo: Si Math.random() * array.length da como resultado 3.75, Math.floor(3.75) lo 
// convertirá en 3, que es un índice válido del arreglo.

//-----------------------------------------------------------------------------------
// Arrays  10

function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for( let i = 0; i < array.length; i++ ){
    let indiceAnalizado = array[i]
    if (indiceAnalizado.length >= 5) {
        return indiceAnalizado
    }
    }

}

//-----------------------------------------------------------------------------------
// Arrays  11

function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  // Usamos map para duplicar cada elemento del array
  return array.map(elemento => {return elemento * 2})
    
}

//-----------------------------------------------------------------------------------
// Arrays  12

function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

    // Usamos map para recorrer y convertir a mayúsculas los strings
    return array.map(function(elemento) {
      // Verificamos si el elemento es un string
      if (typeof elemento === 'string') {
        return elemento.toUpperCase();  // Convertir a mayúsculas
      }
      return elemento;  // Si no es string, devolver el elemento tal cual
    });
  }

//-----------------------------------------------------------------------------------
// Arrays  12

function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  
  // Inicializamos las variables para almacenar el índice y el número mayor

  let indiceMayor = 0;
  let numeroMayor = array[0];

  // Iteramos sobre el array para encontrar el índice del número más grande
  for (let i = 1; i < array.length; i++) {
    if (array[i] > numeroMayor) {
      numeroMayor = array[i]; // Actualizamos el número mayor
      indiceMayor = i; // Actualizamos el índice del número mayor
    }
  }

  // Devolvemos el índice del número más grande
  return indiceMayor;
}

// EXPLICACION DEL CODIGO:

// Variables indiceMayor y numeroMayor:

  //indiceMayor: Se inicializa con 0, que es el índice del primer elemento. Este será actualizado 
  //conforme encontremos números más grandes.
  
  //numeroMayor: S
  //se inicializa con el primer valor del array (array[0]). Luego, durante la iteración, será
  // comparado con otros elementos del array.

//Bucle for:

  //Comenzamos el bucle en i = 1 porque ya inicializamos numeroMayor con el primer valor del array.
  //En cada iteración, comparamos el elemento actual array[i] con numeroMayor. Si encontramos 
  //un número más grande, actualizamos tanto el valor de numeroMayor como el indiceMayor.
 
//Retorno:

  // Al final del bucle, la función devuelve el índice del número más grande.

//-----------------------------------------------------------------------------------
// Arrays  16

function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

    // Usamos map para multiplicar cada elemento por su índice
    return array.map(function(elemento, indice) {
      return elemento * indice;
    });
  }

  // EXPLICACION:

  // map(): El método map() recorre cada elemento del array y aplica una función. En este caso,
  // la función toma dos parámetros: el elemento y su índice.

  // elemento * indice: Dentro de la función, multiplicamos el valor del elemento (elemento) por
  // su índice (indice).

  // Retorno: map() devuelve un nuevo arreglo con los resultados de estas multiplicaciones.

//-----------------------------------------------------------------------------------
// Arrays  19

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

    // Si no hay argumentos, retornar 0
    if (arguments.length === 0) return 0;
  
    // Si hay un solo argumento, retornarlo
    if (arguments.length === 1) return arguments[0];
  
    // Si hay varios argumentos, multiplicarlos
    let producto = 1;
    for (let i = 0; i < arguments.length; i++) {
      producto *= arguments[i];  // Multiplicamos cada argumento
    }
  
    return producto;  // Retornamos el producto de todos los argumentos
  }

//-----------------------------------------------------------------------------------
// Arrays  21

function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  let mesesEncontrados = [];

  // Recorremos el array original
  for (let i = 0; i < array.length; i++) {
    // Verificamos si el mes actual es "Enero", "Marzo" o "Noviembre"
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      mesesEncontrados.push(array[i]); // Guardamos el mes en el nuevo arreglo
    }
  }

  // Verificamos si encontramos los 3 meses
  if (mesesEncontrados.length === 3) {
    return mesesEncontrados;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

//-----------------------------------------------------------------------------------
// Arrays  23

function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:

  // Arreglo para almacenar los nuevos valores
  let nuevoValor = [];

  // Iterar hasta un límite de 10 veces
  for (let i = 0; i < 10; i++) {
    num += 2;  // Aumentamos el número recibido en 2

    // Si el valor de num coincide con la cantidad de iteraciones, interrumpimos
    if (num === i) {
      break;  // Rompemos el ciclo
    }

    // Guardamos el nuevo valor en el arreglo
    nuevoValor.push(num);
  }

  // Verificamos si el ciclo se interrumpió
  if (nuevoValor.length < 10) {
    return "Se interrumpió la ejecución";
  }

  // Si no se interrumpió, retornamos el arreglo con los valores
  return nuevoValor;
}

//-----------------------------------------------------------------------------------
// Arrays  26

function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:

  let numeroRetornado = undefined
  for (let i = 0; i < secuencia.length; i++) {
      if(secuencia[i]%n===0){
          numeroRetornado=secuencia[i]
          break
      }
  }
  return numeroRetornado
}

//-----------------------------------------------------------------------------------
// Arrays  29

function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length === 0) {
    return null;
}

// Recorremos el array y buscamos la diferencia entre números consecutivos
for (let i = 0; i < numeros.length - 1; i++) {
    // Si la diferencia entre números consecutivos es mayor a 1
    if (numeros[i + 1] - numeros[i] > 1) {
        // Devolvemos el número faltante
        return numeros[i] + 1;
    }
}

// Si no hay números faltantes, devolvemos null
return null;
}

//EXPLICAION:

// Recorrido del array: Usamos un bucle for para recorrer el array de números. La idea es
// comparar cada número con el siguiente número en el array.

// se usa la condición i < numeros.length - 1, se está haciendo para evitar que se intente 
// acceder a un índice que no existe. Cuando usas i < numeros.length - 1, te aseguras de que 
//numeros[i + 1] sea un índice válido en el array y no te pases del último índice. 
//El bucle solo compara el número actual (numeros[i]) con el siguiente (numeros[i + 1]), y no 
//debe intentar comparar cuando el último número no tiene un número "siguiente".

//Comprobación de la diferencia: Si la diferencia entre dos números consecutivos es mayor que 1,
// entonces significa que falta un número entre ellos. En ese caso, devolvemos el número 
//faltante (numeros[i] + 1).

//-----------------------------------------------------------------------------------
// Arrays  30

function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  let numerosVistos = new Set();

  // Recorremos el array de números
  for (let i = 0; i < numeros.length; i++) {
    // Si el número ya está en el Set, lo retornamos como el primer repetido
    // En un Set, el método has() se utiliza para comprobar si un valor está presente en el conjunto.
    if (numerosVistos.has(numeros[i])) {
      return numeros[i];  // Retornamos el primer número repetido
    }
    numerosVistos.add(numeros[i]);

}
}

//EXPLICACION

// Set: El Set es una estructura de datos que solo permite almacenar valores únicos, por lo que 
// lo usamos para verificar si ya hemos encontrado un número antes.

// Bucle for: Recorremos el array numeros. Si encontramos un número que ya existe en el Set, 
// lo devolvemos inmediatamente como el primer número repetido. Si no, lo añadimos al Set.

//-----------------------------------------------------------------------------------
// Arrays  31


function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:




return texto.split('').reverse().join('');

}

//-----------------------------------------------------------------------------------
// Arrays  32

function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

    // Elimina espacios y convierte a minúsculas para una comparación más precisa
    let texto = string.replace(/\s+/g, '').toLowerCase(); //Esta parte usa una expresión regular para eliminar todos los espacios en blanco de la cadena
    let checkTexto = texto.split('').reverse().join('');
    
    if (texto === checkTexto) {
        return true;
    } else {
        return false;
    }
}

//-----------------------------------------------------------------------------------
// Arrays  33

function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:

      // Determinar la longitud máxima de las tres cadenas
      const maxLength = Math.max(str1.length, str2.length, str3.length);

      // Variable para almacenar el resultado
      let combined = "";
  
      // Recorremos todas las posiciones hasta la longitud máxima
      for (let i = 0; i < maxLength; i++) {
          // Si str1 tiene un carácter en la posición i, lo agregamos al resultado
          if (i < str1.length) {
              combined += str1[i];
          }
  
          // Si str2 tiene un carácter en la posición i, lo agregamos al resultado
          if (i < str2.length) {
              combined += str2[i];
          }
  
          // Si str3 tiene un carácter en la posición i, lo agregamos al resultado
          if (i < str3.length) {
              combined += str3[i];
          }
      }
  
      // Devolvemos el string combinado
      return combined;
  }
