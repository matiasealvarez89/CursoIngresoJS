/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar() {
	//let ladoMayor;
	//let ladoMenor;
	let diametroMayor;
	let diametroMenor;
	let areaRombo;
	let totalVarillas;
	let totalTelas;
	
	
	//ladoMayor =prompt("Ingreso el largo del lado mayor en cm");
	//ladoMenor =prompt("Ingrese el largo del lado menor en cm");
	diametroMayor = prompt("Ingrese el largo del diametro Mayor en cm");
	diametroMenor = prompt("Ingrese el largo del diametro menor en cm");
	
	diametroMayor = diametroMayor/100;
	diametroMenor = diametroMenor/100;
	
	areaRombo = (diametroMayor * diametroMenor)/2;
	totalVarillas = (diametroMayor + diametroMenor)*10;
	totalTelas = (areaRombo + areaRombo*10/100)*10;

	alert("Se necesitan: " + totalVarillas + "mts de varilla y " + totalTelas + "mts cuadrados de tela");



}

