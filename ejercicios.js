
//validad numeros
function validar(numero) {
    numero = parseFloat(numero);
    if (isNaN(numero)) {
        Swal.fire({
            title: "Error en numeros",
            text: "Por favor digite solo numeros numeros ",
            icon: "error"
        });

        return false;
    }
    else {
        return true;
    }
}

//ejercicio 1
function ejercicioN1(edad) {

    if (validar(edad)) {

        var mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
        Swal.fire({
            title: mensaje,
            text: "Bien echo ",
            icon: "success"
        });
    }


}

//ejercicio 2
function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {

    if (examen < 0 || examen > 10 || tareas < 0 || tareas > 10 || asistencia < 0 || asistencia > 10 || investigacion < 0 || investigacion > 10) {
        Swal.fire({
            title: "Erorr",
            text: "las notas son de rango de 0 a 10 ",
            icon: "error"
        });
    }
    else {
        // Calcular la nota final
        var notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);

        Swal.fire({
            title: `Alumno ${nombre}`,
            text: `con Carnet: ${carnet} Obtiene Nota Final de: ${notaFinal}`,
            icon: "info"
        });
    }

}

//ejercicio 3
function calcularAumento(salario, categoria, Nombre) {
    let aumento = 0;
    salario = parseFloat(salario);
    if (validar(salario)) {

        switch (categoria.toUpperCase()) {
            case '1':
                aumento = salario * 0.15;
                break;
            case '2':
                aumento = salario * 0.3;
                break;
            case '3':
                aumento = salario * 0.1;
                break;
            case '4':
                aumento = salario * 0.2;
                break;
        }

        let ConAumento = salario + aumento;
        Swal.fire({
            title: `Empleado ${Nombre}`,
            text: `Su nuevo Saliro correspondiente es:$${ConAumento}`,
            icon: "success"
        });

    }

}

//ejercicio 4

function Mayor(n1, n2) {

    if (validar(n1) && validar(n2)) {
        let mensaje = n1 > n2 ? n1 + " es mayor que " + n2 : n2 > n1 ? n2 + " es mayor que " + n1 : "Ambos números son iguales";
        Swal.fire({
            title: mensaje,
            text: "Respuesta Obtenida ",
            icon: "success"
        });
    }



}

//ejercicio 5

function calculardesceutno(card) {

    let descu = card.querySelector('.card-title');
    let carro = card.querySelector('.card-text').innerHTML;
    let precioElement = card.querySelector('.precio');
    let htmlTar = card.outerHTML;

    // Verifica si se encontró el elemento
    if (precioElement && descu) {
        var precio = parseFloat(precioElement.innerHTML.replace('$', '').replace(',', ''));
        var descue = parseFloat(descu.innerHTML.replace('% OFF', '').replace(',', ''));
        descue = descue / 100;
        var descuento = precio * descue;
        var precioConDescuento = precio - descuento;
        precioConDescuento.toFixed(2);
        // Actualiza el innerHTML del elemento con el nuevo precio con descuento
        Swal.fire({
            title: `Su carro ${carro} Precio Con descuento es:$${precioConDescuento} `,
            text: `${htmlTar}`,
            icon: "success"
        });

    }


}

//ejercicio 6
function descuentoTurista(origen, destino) {
    let descuento = "";

    if (origen === 'Palma' && destino === 'costa') {
        descuento = "5% OFF";
    } else if (destino === 'panchimalco') {
        descuento = "10% OFF";
    } else if (destino === 'puerto') {
        descuento = "15% OFF";
    }
    if (descuento == "") {
        Swal.fire({
            title: `Su tarifa es de precio regular`,
            text: `Gracias`,
            icon: "info"
        });
    }
    else {
        Swal.fire({
            title: `Aplicar para un descuento de ${descuento} `,
            text: `Aprocha`,
            icon: "success"
        });
    }


}

//ejercicio 7 
function analizarNumeros() {
    let Negativos = 0;
    let Positivos = 0;
    let Multiplos15 = 0;
    let acumuladoPares = 0;

    for (var i = 1; i <= 10; i++) {

        let numero = parseInt(document.getElementById(`numero${i}`).value);

        if (numero < 0) {
            Negativos++;
        } else if (numero > 0) {
            Positivos++;
        }

        if (numero % 15 === 0) {
            Multiplos15++;
        }

        if (numero % 2 === 0) {
            acumuladoPares += numero;
        }
    }
    Swal.fire({
        title: `Analicis de Numeros`,
        text: `Cantidad de números negativos:#${Negativos}, Cantidad de Numeros Positivos: #${Positivos}, Cantidad de múltiplos de 15: #${Multiplos15}
                 Acumulado de números pares: ${acumuladoPares}`,
        icon: "success"
    });

}

//ejercicio 8

function tabla(numero) {
    let tablaM = "";

    numero = parseInt(numero);
    if (isNaN(numero)) {
        Swal.fire({
            title: "Error en numeros",
            text: "Por favor digite solo numeros enteros ",
            icon: "error"
        });


    }
    else {
        for (var i = 1; i <= 10; i++) {
            tablaM += numero + " x " + i + " = " + (numero * i) + " .... ";
        }

        Swal.fire({
            title: `Tabla de Multiplicar del ${numero}`,
            text: tablaM,
            icon: "info"
        });

    }

}


//ejercicio 9
function temperatura(tempera) {
    let msj = "";
    let temperaturaFahrenheit = 0;
    if (validar(tempera)) {
        temperaturaFahrenheit = (tempera * 9 / 5) + 32;
        if (temperaturaFahrenheit >= 14 && temperaturaFahrenheit < 32) {
            msj = "Temperatura baja";
        } else if (temperaturaFahrenheit >= 32 && temperaturaFahrenheit < 68) {
            msj = "Temperatura adecuada";
        } else if (temperaturaFahrenheit >= 68 && temperaturaFahrenheit < 96) {
            msj = "Temperatura alta";
        } else {
            msj = "Temperatura desconocida";
        }

        Swal.fire({
            title: `Analicis de Temperatura en Fahrenheit ${temperaturaFahrenheit}`,
            text: msj,
            icon: "info"
        });
    }



}

//promedio 
function promediN(asta, inpu, Tur) {
    let promeF = 0;
    let inNom = "";
    for (var i = 1; i <= asta; i++) {
        //alert(`${inpu}${i}`); break;
        inNom = `${inpu}${i}`;
        if (document.getElementById(inNom)) {
            // alert(document.getElementById(inNom).value); break;
            var eda = parseInt(document.getElementById(inNom).value);


            if (isNaN(eda)) {
                Swal.fire({
                    title: `Error en edad del Estudiante del Turno ${Tur}`,
                    text: "Por favor digite solo numeros enteros ",
                    icon: "error"
                });
            }
            else {
                promeF = promeF + eda;
            }

        }


    }
    promeF = promeF / asta;
    return promeF;
}
//ejercicio 10
function alumnos() {
    let prome = 0;

    let ma = promediN(5, 'EsMnumero', 'Mañana');
    let tar = promediN(6, 'EsTnumero', 'Tarde');
    let noche = promediN(11, 'EsNnumero', 'Noche');
    let mayor = ma > tar && ma > noche ? " Turno de Mañana Tiene un promedio de edades mayor " :
        tar > ma && tar > noche ? " Turno de Tarde Tiene un promedio de edades mayor " :
            noche > ma && noche > tar ? " Turno de Noche Tiene un promedio de edades mayor " :
                "Todos los son iguales";

    Swal.fire({
        title: `Promedios de Edades`,
        text: `Promedio del Turno de Mañana ${ma}..  Promedio del Turno de Tarde ${tar}..  Promedio del Turno de Noche ${noche}.. ${mayor} `,
        icon: "info"
    });

}