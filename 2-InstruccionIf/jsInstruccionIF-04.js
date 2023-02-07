function mostrar()
{
	let edad;
	let mensaje;

	mensaje = "es adolescente"

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 13 && edad <= 17)
	{
		mensaje = "es adolescente"
	}
	alert(mensaje);


}//FIN DE LA FUNCIÓN