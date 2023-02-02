/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit;
    let centígrados;
    let mensaje;

    fahrenheit = document.getElementById("txtIdTemperatura").value;

    fahrenheit = parseInt(fahrenheit);

    centígrados = (fahrenheit - 32) / 1.8;

    mensaje = fahrenheit + " Fahrenheit son " + centígrados + " centígrados" ;

    alert(mensaje);

}

function CentigradosFahrenheit () 
{
	let fahrenheit;
    let centígrados;
    let mensaje;

    centígrados  = document.getElementById("txtIdTemperatura").value;

    centígrados = parseInt(centígrados);

    fahrenheit = (centígrados * 1.8) + 32;

    mensaje = centígrados + " centígrados son " + fahrenheit + "Fahrenheit";
    
    alert(mensaje);

    
}
