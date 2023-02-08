function mostrar()
{
	let edad;
	let estadoCivil;
	let mensaje;


	edad = parseInt(document.getElementById("txtIdEdad").value);

	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadoCivil != "Soltero")
	{
		mensaje = "es muy pequeño para NO estar soltero";
		alert(mensaje);
	}

	


}//FIN DE LA FUNCIÓN