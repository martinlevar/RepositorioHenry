function mayorYMenoryPar(num){
    if (num > 5 && num <10 && num % 2 ===0){ console.log(true)}
        else {console.log(false)};
    }



function operadorOr(string){
    if (string ==='Henry' || string.length < 2){
        console.log(true);
    } else {
        console.log(false);
    }
}


function negacion2(permiso){
    if (permiso) console.log('Tiene permiso en la terminal');
}


function negacion(permiso){
    if (!permiso) console.log('Tiene permiso');
}

function condicionCompleja(num){
    if (num > 9 && num % 2 === 0 || num ===3) console.log(true);
        else console.log(false);
};

condicionCompleja(10)
condicionCompleja(6)
condicionCompleja(3)
condicionCompleja(5)