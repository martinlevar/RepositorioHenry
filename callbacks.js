// Las funciones callbacks son un tipo de funciones que se pasan por parametro a otras funciones.
// cuando la funcion 1 ejecuta la funcion 2 en su interior se produce un proceso llamado
// Call back. Y son muy importantes porque nos aseguran que no se cumpla un funciones sin
// antes se ejectu otra

    let devueloUsuario = function(){
        return 'Camilo';
    };

    let devuelvoSaludo  = function(){
    return 'Hola';
    };

    let saludar = function(cb1, cb2 ){
    return cb1() + " " + cb2();
    } 

    let resultado = saludar(devueloUsuario,devuelvoSaludo);

    // console.log(resultado)

// Nuevo ejemplo

    let devuelvoFrase = function(comida){
        return 'Hoy quiero comer: ' + comida
    };

    let hablar = function(comida, cb){
        return cb(comida);
    }

    let resultadoFinal = hablar('Pizza', devuelvoFrase);

    console.log(resultadoFinal)

    //

    