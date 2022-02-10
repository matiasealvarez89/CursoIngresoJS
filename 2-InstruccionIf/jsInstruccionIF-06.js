function mostrar() {
	let edad;
	let mensaje = "";

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13) {
		mensaje = "Es un niño";
	}
	else if (edad >= 13 && edad <= 17) 
	{
		mensaje = "Es adolescente";
	}
	else {
		mensaje = "Es mayor de edad";
	}

	alert(mensaje);


}