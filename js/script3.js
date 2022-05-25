alert("hi, como vas? ")
let sueld = prompt(" ingrese cual es su sueldo");
let antiguedad = prompt(" ingrese sus años de antiguedad");
console.log(typeof(sueld));
console.log(typeof(antiguedad));

if (parseInt(sueld) < 500 && parseInt(antiguedad) >= 10) {
    let totaldesueldo = (parseInt(sueld) + 20 % 100);
    document.write(" el sueldo del trabajador es ", totaldesueldo);

    console.log(" el sueldo del trabajador es ", totaldesueldo)

} else
if (parseInt(sueld) < 500 && parseInt(antiguedad) < 10) {
    let totaldesueldito = (parseInt(sueld) + 5 % 100);
    document.write(" el sueldo del trabajador es ", totaldesueldito);

} else
if (parseInt(sueld) >= 500) {
    document.write("el sueldo del trabajador es ", sueld);
    console.log(" el sueldo del trabajador es ", sueld);

}