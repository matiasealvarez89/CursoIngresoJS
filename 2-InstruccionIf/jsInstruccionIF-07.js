/*
Matias Ezequiel Alvarez
DIV F
Ejercicio 02 v1 A + B + C + D + E + F + G + H + I + J
*/

function mostrar() {
	let edad;
	let mensaje;
	let nombre;
	let estadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	nombre = prompt("Ingrese su nombre");
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad < 13) {
		mensaje = "feliz día";
		if (nombre == "Ricardo"){
			mensaje = mensaje + " / muy chiquito para ese nombre"
		}
	} else {
		if (edad < 18) {
			mensaje = "usted es adolescente";
			if (nombre == "Violeta") {
				mensaje = mensaje + " / como un color!!"
			}
			if (edad == 17) {
				mensaje = mensaje + " / último año!!!";
			}
			if (estadoCivil == "Divorciado"){
				mensaje = mensaje + " / toda una vida por delante"
			}
		} else {
			mensaje = "tienes edad de laburar";
			if (edad == 33) {
				mensaje = mensaje + " / como cristo";
			}
			if (edad > 60) {
				mensaje = mensaje + " / A jubilarse"				
				if (edad == 88) {
					mensaje = mensaje + " / lindo número"
				}
				if (nombre == "Alfredo"){
					mensaje = mensaje + " / como el de QUEEN"
				}
			}
			if(estadoCivil == "Soltero"){
				mensaje = mensaje + " / a salir";
			}
		}if (estadoCivil == "Casado") {
			mensaje = mensaje + " / casada quiere casa";
		}
	}
	if(edad%2 == 0){
		mensaje = mensaje + " / sos par!!";
	}

	alert(mensaje);
}