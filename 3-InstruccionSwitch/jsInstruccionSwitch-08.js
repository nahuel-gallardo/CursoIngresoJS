//Enunciado:
//Al seleccionar un destino informar si hace FRIO o CALOR en ese destino

function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia"  :
			mensaje = "Hace FRIO";
			break;
		case "Mar del plata":
		case "Cataratas":
			mensaje = "Hace CALOR";
			break;
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN