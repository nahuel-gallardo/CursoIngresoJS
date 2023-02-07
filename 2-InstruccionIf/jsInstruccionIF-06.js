function mostrar()
{
	let edad;
	let mensaje;
	
	mensaje = "usted es mayor de edad"
	mensaje = "usted es adolescente"
	mensaje = "usted es menor de edad"

	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if(edad >= 18)
	{
		mensaje = "usted es mayor de edad";
	}
	else if(edad >= 13 && edad <= 17)
	{
		mensaje = "usted es adolescente";
	}
    else
	{
		mensaje = "usted es menor de edad";
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN