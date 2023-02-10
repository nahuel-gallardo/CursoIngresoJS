function mostrar()
{
	let hora;
	let mensaje;


	hora = parseFloat(document.getElementById("txtIdHora").value);


	if(hora >= 0 && hora <= 24)
	{
		switch(hora)
		{
			case 7 :
			case 8 :
			case 9 :
			case 10:
			case 11:
				mensaje = "es de mañana";
				break;
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
				mensaje = "es de tarde";
				break;
			default:
				mensaje = "es de noche";
				break;

		}
	}
	else
	{
		mensaje = "esa hora no existe";
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN