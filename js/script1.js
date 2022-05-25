alert("hi, como vas? ")
let n1 = prompt(" ingrese un numero");
let n2 = prompt(" ingrese un numero");
let n3 = prompt(" ingrese un numero");

if (parseInt(n1) >= 10 || parseInt(n2) >= 10 || parseInt(n3) >= 10) {
    document.write(" Todos los numeros son mayor que 10")
    console.log("todos lo numeros son mayor que 10");
} else {
    (parseInt(n1) < 10 && parseInt(n2) < 10 && parseInt(n3) < 10)
    document.write("algunos de los numeros es menor que 10")
    console.log("algunos de los numeros es menor que 10 ")
}
console.log(typeof(n1));
console.log(typeof(n2));
console.log(typeof(n3));
console.log();