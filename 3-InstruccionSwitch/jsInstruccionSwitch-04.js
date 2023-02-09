function mostrar()
{
	let mesDelAnio;
	let mensaje;

	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
		case "Enero":
			mensaje = " tiene 31 días.";
			break;
		case "Febrero":
			mensaje = "tiene 28 días";
			break;
		case "Marzo":
			mensaje = " tiene 31 días.";
			break;
		case "Abril":
			mensaje = " tiene 30 días.";
			break;
		case "Mayo":
			mensaje = " tiene 31 días.";
			break;
		case "Junio":
			mensaje = " tiene 30 días.";
			break;
		case "Julio":
			mensaje = " tiene 31 días.";
			break;
		case "Agosto":
			mensaje = " tiene 31 días.";
			break;
		case "Septiembre":
			mensaje = " tiene 30 días.";
			break;
		case "Octubre":
			mensaje = " tiene 31 días.";
			break;
		case "Noviembre":
			mensaje = " tiene 30 días.";
			break;
		case "Diciembre":
			mensaje = " tiene 31 días.";
			break;
	}

	alert(mensaje);
	



}//FIN DE LA FUNCIÓN