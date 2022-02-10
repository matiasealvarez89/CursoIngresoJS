/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let farenheit;
    let centigrados;
    let temperatura;

    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    
    farenheit = temperatura;
    centigrados = (farenheit - 32)*5/9;

    alert(farenheit + "°F equivalen a " + centigrados + "°C");
}

function CentigradosFahrenheit () 
{
    let farenheit;
    let centigrados;
    let temperatura;

    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    
    centigrados = temperatura;
    farenheit = (centigrados*9/5) + 32;

    alert(centigrados + "°C equivalen a " + farenheit + "°F");
}
