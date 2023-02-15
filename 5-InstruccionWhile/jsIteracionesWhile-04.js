/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));
	
	//isNaN intenta convertir el parámetro pasado a un número. 
	//Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false
	while(isNaN(numeroIngresado) || numeroIngresado < 0 || numeroIngresado > 10)
	{
		numeroIngresado = parseInt(prompt("ERROR, ingrese un número entre 0 y 10."));
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;

	
}//FIN DE LA FUNCIÓN