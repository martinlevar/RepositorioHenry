let arr = [1,2,3,4,5];

for (let i =0; i < arr.length; i++){
    //console.log(arr[i])
}

function encontrarLetra(string){
    let letra = string.split('');
    for (let i =0; i < letra.length;i++){
        if (letra[i]==='p'){
            console.log('Contiene P');
        }
    }
}

//encontrarLetra('Javascript')

// Con bucle While le agregamos palabras al arreglo

let arry =[]

while (arry.length < 5){
    arry.push('Boom');
}

console.log(arry);
