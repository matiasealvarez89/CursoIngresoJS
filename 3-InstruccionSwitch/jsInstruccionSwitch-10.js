function mostrar()
{
	let destino;
	let estacion;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch (estacion) {
		case "Invierno":
		switch(destino){
		case "Bariloche":
			mensaje = "Se viaja";
			break;	
		default:
			mensaje = "No se viaja";
			break;
		}
		case "Verano":
			switch(destino){
		case "Mar del plata":
		case "Cataratas":
			mensaje = "Se viaja";
			break;
		default:
			mensaje = "No se viaja";
			}	
		case "Otoño":
			mensaje = "Se viaja";
			break;
			
		case "Primavera":
			switch (destino){
				case "Bariloche":
				mensaje = "No se viaja";
				break;
				default:
				mensaje = "Se viaja";
				break;
			}	
	}

	alert(mensaje);
}