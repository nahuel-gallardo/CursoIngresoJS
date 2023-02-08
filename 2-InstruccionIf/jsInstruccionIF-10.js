function mostrar()
{
	let numeroRandom;
	let mensaje;
	let max;
	let min;

	max = 10;
	min = 1;
               
	numeroRandom = Math.floor(Math.random()*max + min);
	//Math.floor : redondea el numeropa

	
	if(numeroRandom == 9 || numeroRandom == 10 )
	{
		mensaje = "EXCELENTE";
	}
	else if(numeroRandom >= 4 && numeroRandom < 9)
	{
		mensaje = "APROBÓ";
	}
	else
	{
		mensaje = " Vamos, la proxima se puede";
	}

	alert(mensaje);

	

}//FIN DE LA FUNCIÓN