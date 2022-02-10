function mostrar() {
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) {
		alert("Es mayor edad");
	}
	else {
		alert("Es menor de edad");
	}

}