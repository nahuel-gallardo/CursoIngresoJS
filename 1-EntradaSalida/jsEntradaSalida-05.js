/*
NAHUEL IAIR GALLARDO
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 

Ejercicio 5.bis: 
 se debe mostrar un mensaje :
 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan 


*/
function mostrar()
{	
    let nombre;
	let edad;
	let apellido;
	let mensaje;



	nombre = document.getElementById("txtIdNombre").value;
	edad   = document.getElementById("txtIdEdad").value;

	apellido = prompt("¿cual es su apellido?");

	mensaje = apellido + " , usted se llama " + nombre +  " y tiene " + edad + " años";


	alert(mensaje);
}

