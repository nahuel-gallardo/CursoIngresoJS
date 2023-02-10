function mostrar()
{
	let estacionDelAnio;
	let localidad;
	let mensaje;

	estacionDelAnio = document.getElementById("txtIdEstacion").value;
	localidad       = document.getElementById("txtIdDestino").value;

	switch(estacionDelAnio)
	{
		case "Invierno":
			switch(localidad)
			{
				case "Bariloche":
					mensaje = "Se viaja";
					break;
				default:
					mensaje = "No se viaja";
					break;
	        }
			break;

		case "Verano":
			switch(localidad)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja";
					break;
				default:
					mensaje = "No se viaja";
					break;
			}
			break;	

		case "Otoño":
			switch(localidad)
			{
				default:
					mensaje = "Se viaja";
					break;
			}
			break;
			
		case "Primavera":
			switch(localidad)
			{
				case "Bariloche":
					mensaje = "No se viaja";
					break;
				default:
					mensaje = "Se viaja";
					break;
			}
			break;					
	}
	
	alert(mensaje);
}//FIN DE LA FUNCIÓN