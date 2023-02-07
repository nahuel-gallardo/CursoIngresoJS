function mostrar()
{
	let edad;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	mensaje = "usted es mayor";

	if(edad >= 18)
	{
		mensaje = "usted es mayor";
	}

	alert(mensaje);





	
	

}//FIN DE LA FUNCIÓN