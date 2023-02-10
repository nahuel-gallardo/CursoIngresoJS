function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche": 
			mensaje = "Se encuentra en el oeste";
			break;
		case "Cataratas":
			mensaje = "se encuentra al norte";
			break;
		case "Mar del plata":
			mensaje = "se encuentra en el este";
			break;
		case "Ushuaia":
			mensaje = "Se encuentra en el sur";
			break;
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN