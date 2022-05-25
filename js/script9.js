let numprocesar = prompt(" cuantos numero desea procesar ");
let i = 0;
let par = 0;
let impar = 0;
while (i < numprocesar) {
    i = i + 1;
    let num = prompt(" ingrese un numero ");
    if (num % 2 == 0) {
        par = par + 1;
        console.log(par);
    } else {
        impar = impar + 1;
        console.log(impar);
    }
}

document.write("los numeros pares son:" + par);
document.write(" los numeros impares son:" + impar);