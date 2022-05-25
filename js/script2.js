alert("hi, como vas? ")
let n1 = prompt(" ingrese un numero");
let n2 = prompt(" ingrese un numero");
let n3 = prompt(" ingrese un numero");
console.log(typeof(n1));
console.log(typeof(n2));
console.log(typeof(n3));

if (parseInt(n1) === parseInt(n2) && parseInt(n1) === parseInt(n3)) {
    let suma = Number(n1) + Number(n2);
    let product = suma * parseInt(n3);
    document.write(" el resultado de la suma es: " + suma);
    document.write("  y el resultado de la multiplicacion por el numero 3 es:" + product);
}
console.log(prompt)