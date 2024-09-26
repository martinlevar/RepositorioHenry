// Al igual que los arrays existe una palabra reservada llamada Objetc que extiende diferentes 
//metodos a los objetos

// Metodo HasOwnProperty: Nos permite saber si el objeto tiene una propiedad especifica
// Este metodo es util cuando tengas que validar algun tipo de informacion

    let libro = {autor:'Borges', genero:'Policial', año: 1990};
    let tienePropiedad = libro.hasOwnProperty('autor');
    //console.log(tienePropiedad)

// Metodo Keys: Nos devuelve un arreglo con el nombre de todas las propiedades de un objeto

    let todasLasPropiedades = Object.keys(libro);
    //console.log(todasLasPropiedades)

// Recorrer Objetos con FOR IN (Solo sirve para recorrer objetos propiedad por propiedad)

    let mundo = {continentes: 7, paises: 195, oceanos: 5};
    for(let propiedades in mundo){
       // console.log("Esta es la propiedad " + propiedades)
       //console.log("Este es el valor " + mundo[propiedades])
    }   

// Objeto THIS: Estamos haciendo referencia a un contexto

    let mascotas = {animal: 'Perro', 
                    raza: 'Ovejero Aleman', 
                    amistoso: true, 
                    dueño: 'Maria Lopez',
                    info: function(){
                        // Con this indicamos que el contexto es el objeto mascota
                        console.log("Mi perro es un " + this.raza);
                    },
    };

mascotas.info()