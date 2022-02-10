/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let radio;
    let resultado;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    radio = document.getElementById("txtIdRadio").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    radio = parseFloat(radio);

    resultado = (largo + ancho)*2*3;

    alert("Comprar " + resultado.toFixed(2) + "m de alambre");
}
function Circulo () 
{
	let largo;
    let ancho;
    let radio;
    let resultado;
    const pi = Math.PI;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    radio = document.getElementById("txtIdRadio").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    radio = parseFloat(radio);

    resultado = (radio*(2*pi))*3;

    resultado 

    alert("Comprar " + resultado.toFixed(2) + "m de alambre");
}
function Materiales () 
{
	let largo;
    let ancho;
    let radio;
    let superficie;
    let cemento;
    let cal;
    
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    radio = document.getElementById("txtIdRadio").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    radio = parseFloat(radio);

    superficie = largo * ancho;

    cemento = superficie * 2;

    cal = superficie * 3;

    alert("Usted debe comprar: " + Math.ceil(cemento) + " bolsa/s de cemnto y " + Math.ceil(cal) + " bolsa/s de cal");
}