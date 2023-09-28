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

var msg = "";

function guardar(){
	var digitos = validarIBAN();
	var numeros = validarDatos();
	var tarjeta = comprobarTarjeta();
	var ccv = comprobarCCV();
	alert(msg);
}


//Funcion para comprobar los 4 primeros digitos del IBAN son ES76 O ES78
function validarIBAN() {
	var nacionalidad = document.getElementById("nacionalidad").value;
	// Comprobar si el IBAN es válido
	if (nacionalidad == "ES76" || nacionalidad == "ES78") {
		// IBAN válido, cambia el color del campo a verde si estaba en rojo
		document.getElementById("nacionalidad").style.color = "green";
		return true;
	} else {
		// IBAN inválido, cambia el color del campo a rojo
		document.getElementById("nacionalidad").style.color = "red";
		return false;
	}
}

function validarDatos() {
	var numero = document.getElementById("numero").value;
	var expresionRegular = /^[0-9]{20}$/; // Expresión regular para 20 dígitos
	
	if (expresionRegular.test(numero) == true) {
		return true;
	} else {
		msg += "Revisa los numeros\n";
		return false;
	}
}

function comprobarTarjeta(){
	var tarjeta = document.getElementById("tarjeta").value;
	var expresionRegular = /^[0-9]{16}$/; // Expresión regular para 16 dígitos
	if (expresionRegular.test(tarjeta) == true) {
		return true;
	} else {
		msg += "Revisa los numeros de tu tarjeta\n";
		return false;
	}
}

function comprobarCCV(){
	var ccv = document.getElementById("ccv").value;
	var expresionRegular = /^[0-9]{3}$/; // Expresión regular para 3 dígitos
	if (expresionRegular.test(ccv) == true) {
		return true;
	} else {
		msg += "Revisa los verificación de su CCV\n";
		return false;
	}
}