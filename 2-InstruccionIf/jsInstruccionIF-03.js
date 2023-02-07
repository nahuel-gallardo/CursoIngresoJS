function mostrar()
{
	let edad;
	let mensaje;
	
	
	edad = parseInt(document.getElementById("txtIdEdad").value);


	if(edad >= 18)
	{
		mensaje = "usted es mayor";
	}	
	else{
		mensaje = "usted es menor";
	}	

	alert(mensaje);
	


}//FIN DE LA FUNCIÓN