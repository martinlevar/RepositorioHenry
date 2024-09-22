function esNumeroPrimo(numero) {
    // La función recibe un argumento "numero".
    // Determina si este corresponde a un número primo.
    // De ser así, retorna true.
    // De lo contrario, retorna false.
    // IMPORTANTE: Recuerda que un número primo es aquel que
    // solo es divisible por sí mismo y por 1.
    // Tu código:
  
  primo = true
  if (numero % 2 ===0){
    primo = false
  }else{
     primo = true
  }
  
  return primo
  }

console.log(esNumeroPrimo(4))