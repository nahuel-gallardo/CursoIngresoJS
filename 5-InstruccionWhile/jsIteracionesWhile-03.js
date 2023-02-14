/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("numero clave incorrecto. ingrese el número clave nuevamente.");
	}

	alert("clave corecta")

	
}//FIN DE LA FUNCIÓN
