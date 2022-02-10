function mostrar()
{
	let maximo = 10;
	let minimo = 1;
	let comentario;
	
	let numero = Math.round(Math.random() * (maximo - minimo) + minimo);

	if(numero >= 9 && numero <= 10){
		comentario = "EXCELENTE";
		
	} else if(numero >= 4){
		comentario = "APROBÓ";
	}else{
		comentario = "Vamos, la proxima se puede";
	}

	alert(comentario + " su nota es " + numero);
}