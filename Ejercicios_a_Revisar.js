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


