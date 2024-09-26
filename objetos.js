// Creacion de un objeto estructura( Key: Value)
let deportes = {conBalon: ['Futbol','Basquet','Rugby'], 
                SinBalon: ['Surf', 'Karate','Cross']
    };

// Objeto dentro de un Objeto
    let persona = {nombre: 'Martin', edad: 41, estudios: {esprogramador: true}  };

//Accediendo a las propiedades del objeto
    //console.log(persona.edad)

//Cambio de value 
    persona.nombre = 'Tincho'
    //console.log(persona.nombre)

// Creacion de objetos y propiedades
    let autos = {};
    autos.marcas = ['Ford','Audi','Ferrari'];
    //console.log(autos)

// Eliminar propiedades en los objetos

    delete autos.marcas
    //console.log(autos)

// Guardar funcion dentro de los objetos

let misFunciones = {saludar: function(){
    console.log('Hola')}};
    
    // Mostrar el objeto
    //misFunciones.saludar()

// Escribir objetos con Dot-Notation. se llama asi porque accedemos con un . a las propiedades

    let atuendos = {manos:['Guantes','Anillos'], pies:['Zapatos','Soquetes']}
    //console.log(atuendos.manos);

 // Agregar propiedad utilizando Bracke-Notation   
    atuendos['piernas'] = ['Bermudas','Pantalones'];
    //console.log(atuendos);

// Diferencias entre Dot y Bracket notation en su uso.
    let comidas ={};
    let diferenciaDeNotaciones = function(propUno, propDos) {
        comidas.prop1 = ['Frutas','Vegetales'];
        // Cuando vamos a recibir una variable o un parable debemos sacarle las comillas
        comidas[propDos] = ['Hamburguesas','Papas Fritas'];
    };

    diferenciaDeNotaciones('saludables','no saludables');
    //console.log(comidas)

