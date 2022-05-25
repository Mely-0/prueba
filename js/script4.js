alert("hi, como vas? ")
let n1 = prompt(" ingrese un numero");
let n2 = prompt(" ingrese un numero");
let n3 = prompt(" ingrese un numero");
console.log(typeof(n1));
console.log(typeof(n2));
console.log(typeof(n3));
if (parseInt(n1) > parseInt(n2) && parseInt(n1) > parseInt(n3)) {
    document.write(" el numero mayor es ", n1)
} else
if (parseInt(n2) > parseInt(n1) && parseInt(n2) > parseInt(n3)) {
    document.write(" el numero mayor es ", n2)

} else
if (parseInt(n3) > parseInt(n1) && parseInt(n3) > parseInt(n2)) {
    document.write(" el numero mayor es ", n3)

}

if (parseInt(n1) < parseInt(n2) && parseInt(n1) < parseInt(n3)) {
    document.write(" el numero menor es ", n1)

} else if (parseInt(n2) < parseInt(n1) && parseInt(n2) < parseInt(n3)) {
    document.write(" el numero menor es ", n2)

} else if (parseInt(n3) < parseInt(n1) && parseInt(n3) < parseInt(n2)) {
    document.write(" el numero menor es ", n3)

}