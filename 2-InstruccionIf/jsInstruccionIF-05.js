function mostrar()
{
	let edad;
	let mensaje;

	mensaje = "usted no es adolescente";

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad < 13 || edad > 17)
	{
		mensaje = "usted no es adolescente";
		alert(mensaje);
	}
	

	//tomo la edad  
	

}//FIN DE LA FUNCIÓN