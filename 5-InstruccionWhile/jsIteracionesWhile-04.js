/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));

	while(isNaN(numeroIngresado) || numeroIngresado < 0 || numeroIngresado > 10)
	{
		numeroIngresado = parseInt(prompt("ERROR, ingrese un número entre 0 y 10."));

	}

	
}//FIN DE LA FUNCIÓN