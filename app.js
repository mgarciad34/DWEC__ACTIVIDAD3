/*
Crear una pantalla html con los siguientes campos:

IBAN. Compuesto de dos campos: Uno con 4 caracteres y otro con 20
Tarjeta.
	Número tarjeta: 16 dígitos
	CVV: 3 dígitos
 Tener un botón de Guardar con los siguentes requisitos:
	Se comprobará que los primeros campos del IBAN sean 4 caracteres y solo se admitirán dos valores válidos: ES76 y ES78 
    si no es ningun de ellos se coloreará de color rojo y se mostrá un mensaje en la parte inferior de que IBAN inválido
	Se comprobará que el número de cuenta es correcto de longitud
	Se comprobará de que el número de tarjeta tiene la longitud correcta y que solo contiene número si falla se mostrará 
    el texto de que es incorrecto
	Se comprobará que el CVV tiene la longitud correcta y que sean solo números.

Otros requisitos:
Cuando se cambien el número de tarjeta automáticamente si el CVV esta relleno se limpiará el campo.
*/


const nacionalidad = document.getElementById("nacionalidad");
let numero = document.getElementById("numero");
let tarjeta = document.getElementById("tarjeta");
let ccv = document.getElementById("ccv");
const mensaje = document.getElementById('mensaje')

function validarIBAN() {
	if (nacionalidad.value == "ES76" || nacionalidad.value == "ES78") {
		document.getElementById("nacionalidad").style.color = "green";
		return true;
	} else {
		document.getElementById("nacionalidad").style.color = "red";
		return false;
	}
}

function validarDatos() {
    const expresionRegular = /^[0-9]{20}$/;
    return expresionRegular.test(numero.value);
}

function comprobarTarjeta() {
    const expresionRegular = /^[0-9]{16}$/;
    return expresionRegular.test(tarjeta.value);
}

function comprobarCCV() {
    const expresionRegular = /^[0-9]{3}$/;
    return expresionRegular.test(ccv.value);
}

function guardar() {
	let msg = "";
    if (validarIBAN() != true) {
        msg += "IBAN inválido\n";
    }
    if (validarDatos() != true) {
        msg += "Número de cuenta inválido\n";
    }
    if (comprobarTarjeta() != true) {
        msg += "Número de tarjeta inválido\n";
    }
    if (comprobarCCV() != true) {
        msg += "CCV inválido\n";
    }

	if (msg === "") {
        mensaje.textContent = "Valoración Correcta";
    }else{
		mensaje.textContent = msg;
	}

    
}

// Agrega eventos de cambio a los campos de entrada
nacionalidad.addEventListener('change', validarIBAN);
numero.addEventListener('change', validarDatos);
tarjeta.addEventListener('change', comprobarTarjeta);
ccv.addEventListener('change', comprobarCCV);
tarjeta.addEventListener('change', function() {
    if (ccv.value !== '') {
        ccv.value = '';
    }
    comprobarTarjeta();
});

// Agrega un evento de clic al botón "Enviar" para mostrar el mensaje
const enviarButton = document.querySelector('button');
enviarButton.addEventListener('click', guardar);