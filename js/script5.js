let nump = prompt("numero de personas");
let i = 0;
let suma = 0;
let promedio = 0;
console.log(nump)
while (i < nump) {
    i += 1;
    let numalt = prompt("altura de las personas");
    suma += (parseInt(numalt));
}
promedio = suma / parseFloat(nump);
document.write("el promedio es:", promedio);
console.log((promedio));
console.log((suma));