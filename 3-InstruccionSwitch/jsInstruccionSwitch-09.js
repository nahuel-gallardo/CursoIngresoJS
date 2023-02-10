function mostrar()
{
	let estacionDelAnio; 
	let localidad;
	let precioBase;
	let porcentaje;
	let precioFinal;
	let mensaje;

	precioBase      = 15000;
	estacionDelAnio = document.getElementById("txtIdEstacion").value;
	localidad       = document.getElementById("txtIdDestino").value;

	switch(estacionDelAnio)
	{
		case "Invierno":
			switch(localidad)
			{
				case "Bariloche":
					porcentaje = 20;
					break;
				case "Cordoba":
					porcentaje = -10;
					break;
				case "Cataratas":
					porcentaje = -10;
					break;
				case "Mar del plata":
					porcentaje = -20;
					break;
			}
			break;

		case "Verano":
			switch(localidad)
			{
				case "Bariloche":
					porcentaje = -20;
					break;
				case "Cordoba":
					porcentaje = 10;
					break;
				case "Cataratas":
					porcentaje = 10;
					break;
				case "Mar del plata":
					porcentaje = 20;
					break;
			}
			break;
		
		case "Otoño":
		case "Primavera":
			switch(localidad)
			{
				case "Bariloche":
					porcentaje = 10;
					break;
				case "Cordoba":
					porcentaje = 0;
					break;
				case "Cataratas":
					porcentaje = 10;
					break;
				case "Mar del plata":
					porcentaje = 10;
					break;
			}
			break;
	}

	porcentaje = 1 + (porcentaje/100);

	precioFinal = precioBase * porcentaje;

	mensaje = precioFinal;

	alert(mensaje);





}//FIN DE LA FUNCIÓN