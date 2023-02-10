function mostrar()
{
	let hora;
	let mensaje;


	hora = parseFloat(document.getElementById("txtIdHora").value);


	if(hora >= 1 && hora <= 24)
	{
		switch(hora){
			case 7 :
			case 8 :
			case 9 :
			case 10:
			case 11:
				mensaje = "es de mañana"
			default:
				break;
		}
	}
	else
	{
		mensaje = "esa hora no existe";
	}

	alert(mensaje);



}//FIN DE LA FUNCIÓN