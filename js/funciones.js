console.log("Conectado.......")

//opcion 7

let multi = 0;


let multiplo8=0;

function ejercicio() {
    alert("hi, como vas? ")
    let n1 = prompt(" ingrese un numero");
    let n2 = prompt(" ingrese un numero");
    let n3 = prompt(" ingrese un numero");

    if (parseInt(n1) < 10 && parseInt(n2) < 10 && parseInt(n3) < 10) {
        //document.write(" Todos los numeros son menores que 10")
        alert(" Todos los numeros son menores que 10")
        console.log("todos lo numeros son menores que 10");

    } else {
        (parseInt(n1) > 10 && parseInt(n2) > 10 && parseInt(n3) > 10)
        //document.write("no todos los numeros son menores que 10")
        alert("no todos los numeros son menores que 10")
        console.log(" no todos los numeroos son menores que 1o")
    }
    console.log(typeof(n1));
    console.log(typeof(n2));
    console.log(typeof(n3));
    console.log();
}

function ejercicio1() {

    alert("hi, como vas? ")
    let n1 = prompt(" ingrese un numero");
    let n2 = prompt(" ingrese un numero");
    let n3 = prompt(" ingrese un numero");

    if (parseInt(n1) >= 10 || parseInt(n2) >= 10 || parseInt(n3) >= 10) {
        // document.write(" Todos los numeros son mayor que 10")
        alert("algunos de los numeros es menor que 10")
        console.log("todos lo numeros son mayor que 10");
    } else {
        (parseInt(n1) < 10 && parseInt(n2) < 10 && parseInt(n3) < 10)

        // document.write("algunos de los numeros es menor que 10")
       
        alert(" Todos los numeros son mayor que 10")
        console.log("algunos de los numeros es menor que 10 ")
    }
    console.log(typeof(n1));
    console.log(typeof(n2));
    console.log(typeof(n3));
    console.log();
}

function ejercicio2() {

    alert("hi, como vas? ")
    let n1 = prompt(" ingrese un numero");
    let n2 = prompt(" ingrese un numero");
    let n3 = prompt(" ingrese un numero");
    console.log(typeof(n1));
    console.log(typeof(n2));
    console.log(typeof(n3));

    if (parseInt(n1) === parseInt(n2) && parseInt(n1) === parseInt(n3)) {
        let suma = Number(n1) + Number(n2);
        let product = suma * Number(n3);
        // document.write(" el resultado de la suma es: " + suma);
        alert(" el resultado de la suma es: "  + suma+ "  y el resultado de la multiplicacion por el numero 3 es: "  +  product);
        // document.write("  y el resultado de la multiplicacion por el numero 3 es:" + product);

    }
    console.log(prompt)
}

function ejercicio3() {

    alert("hi, como vas? ")
    let sueld = prompt(" ingrese cual es su sueldo");
    let antiguedad = prompt(" ingrese sus años de antiguedad");
    console.log(typeof(sueld));
    console.log(typeof(antiguedad));
    
    if (parseInt(sueld) < 500 && parseInt(antiguedad) >= 10) {
        let totaldesueldo = (parseInt(sueld) + 20 % 100);
        alert(" el sueldo del trabajador es "+ totaldesueldo);
    
        console.log(" el sueldo del trabajador es ", totaldesueldo)
    
    } else
    if (parseInt(sueld) < 500 && parseInt(antiguedad) < 10) {
        let totaldesueldito = (parseInt(sueld) + 5 % 100);
        alert(" el sueldo del trabajador es "+ totaldesueldito);
    
    } else
    if (parseInt(sueld) >= 500) {
        document.write("el sueldo del trabajador es ", sueld);
        alert(" el sueldo del trabajador es "+ sueld);
    
    }
}

function ejercicio4() {
    alert("hi, como vas? ")
    let n1 = prompt(" ingrese un numero");
    let n2 = prompt(" ingrese un numero");
    let n3 = prompt(" ingrese un numero");
    console.log(typeof(n1));
    console.log(typeof(n2));
    console.log(typeof(n3));
    if (parseInt(n1) > parseInt(n2) && parseInt(n1) > parseInt(n3)) {
        // document.write(" el numero mayor es ", n1)
        alert(" el numero mayor es "+ n1)
    } else
    if (parseInt(n2) > parseInt(n1) && parseInt(n2) > parseInt(n3)) {
        // document.write(" el numero mayor es ", n2)
        alert(" el numero mayor es "+ n2)

    } else
    if (parseInt(n3) > parseInt(n1) && parseInt(n3) > parseInt(n2)) {
        // document.write(" el numero mayor es ", n3)
        alert(" el numero mayor es "+ n3)

    }

    if (parseInt(n1) < parseInt(n2) && parseInt(n1) < parseInt(n3)) {
        // document.write(" el numero menor es ", n1)
        alert(" el numero menor es "+ n1)

    } else if (parseInt(n2) < parseInt(n1) && parseInt(n2) < parseInt(n3)) {
        // document.write(" el numero menor es ", n2)
        alert(" el numero menor es "+ n2)

    } else if (parseInt(n3) < parseInt(n1) && parseInt(n3) < parseInt(n2)) {
        // document.write(" el numero menor es ", n3)
        alert(" el numero menor es "+ n3)

    }

}

function ejercicio5() {

    let nump = parseInt(prompt("numero de personas"));
    let i = 0;
    let suma = 0;
    let promedio = 0;
    console.log(nump)
    while (i < nump) {
        i += 1;
        let numalt = prompt("altura de las personas");
        suma += (parseFloat(numalt));
    }
    promedio = suma / (nump);
    // document.write("el promedio es:", promedio);
    alert("el promedio es:"+ promedio);
    console.log((promedio));
    console.log((suma));
}

function ejercicio6() {
    alert("hi, como vas? ")
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

        // document.write("el numero de empleados que ganan 100 y 300 son:  ", menos);
        alert("el numero de empleados que ganan 100 y 300 son:  "+ menos);
        document.write("<br/>");
        // document.write("el numero de empleados que ganan  mas de 300 son  :  ", mas);
        alert("el numero de empleados que ganan  mas de 300 son  :  "+ mas);
        document.write("<br/>");
        // document.write("el reporte de gastos en pagos a los empleados es  :  ", suma);
        document.write("el reporte de gastos en pagos a los empleados es  :  "+suma);
        console.log(typeof(menos))
        console.log(typeof(mas))
}


function ejercicio7() {
    let x;
    x = 1;
    while (x <= 25) {
        x = x + 1;
        multi = multi + 11;
        document.write();
        document.write('<br>');
        document.write(multi)
          
        // alert(multi , "-")
     
    }
}

function ejercicio8() {
    // for (var i = 0; i < 500; i++) {
    //     let multi = i * 8;
    //     document.write(multi, "<br>")
    //     // alert(multi+ "-")
    // }
    while (multiplo8 <= 500) {
        multiplo8 = multiplo8 + 8;
        document.write(multiplo8);
        document.write('<br>');
        console.log("los multiplos son : ",multiplo8)
}
}

function ejercicio9() {
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

    // document.write("los numeros pares son:" + par);
    // document.write(" los numeros impares son:" + impar);
    alert("los numeros pares son:" + par);
    alert(" los numeros impares son:" + impar);

}

function menu1(){

    let opcion_usuario= parseInt (prompt("1) todo son menores que 10 \n 2) alguno es menor que 10\n 3) multiplicacion y suma \n 4) calculo de aumento de salario \n 5) mayor y menor \n 6) promedio de alturas \n 7) sueldos \n  8) generar serie de 11 \n 9) generar multiplos de 8 hasta 500  \n 10) par o impar \n 11) salir"));

    return opcion_usuario
}


// Bloque programa principal


    let opcion = menu1()

    if (opcion === 1) {
        ejercicio()
    }


    if (opcion === 2) {
        ejercicio1()
    }

    if (opcion === 3) {
        ejercicio2()
    }

    if (opcion === 4) {
        ejercicio3()
    }

    if (opcion === 5) {
        ejercicio4()
    }

    if (opcion ===6) {
        ejercicio5()
    }

    if (opcion === 7) {
        ejercicio6()
    }

    if (opcion === 8) {
        ejercicio7()
    }
    if (opcion === 9) {
        ejercicio8()
    }

    if (opcion === 10) {
        ejercicio9()
    }

