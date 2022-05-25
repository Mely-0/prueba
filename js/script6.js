alert("hi nataly , como vas? ")
let nemple = prompt("numero de empleados");
let i = 0
let suma = 0
let menos = 0
let mas = 0
console.log(nemple)
while (i < nemple) {
    i = i + 1
    let sueldo = prompt(" sueldo de los empleados")
    suma += (parseInt(sueldo));
    if (parseInt(sueldo) >= 100 && parseInt(sueldo) <= 300) {
        menos = menos + 1
    } else if (parseInt(sueldo) > 300) {
        mas += 1
    }
}

document.write("el numero de empleados que ganan 100 y 300 son:  ", menos);
document.write("<br/>");
document.write("el numero de empleados que ganan  mas de 300 son  :  ", mas);
document.write("<br/>");
document.write("el reporte de gastos en pagos a los empleados es  :  ", suma);
console.log(typeof(menos))
console.log(typeof(mas))