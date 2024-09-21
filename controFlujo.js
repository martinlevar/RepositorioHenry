function viajar(destino){
    if (destino === 'Brasil'){
        console.log('Gire a la derecha')
    } else if (destino ==='Argentina'){
        console.log('Gire a la izquierda')
    } else {
        console.log('Nos perdimos')
    }
}

function puedeManejar(edad){
    if (edad >= 18){
        console.log('Puede manejar')
    } else {
        console.log('No puede manejar')
    }
}

puedeManejar(17)