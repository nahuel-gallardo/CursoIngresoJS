function mostrar()
//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
{
	let i;
	let promedio;
	let acumulador;
	let numeroIngresado;
	let contador;

	i = 0;
	acumulador = 0;
	contador = 0;
	

	for(i = 0   ; i < 5   ; i++ )
	{
	
		numeroIngresado = parseFloat(prompt("ingrese un numero"));

		while(isNaN(numeroIngresado))//validacion
		{
			numeroIngresado = parseFloat(prompt("error. ingrese un numero"));

		}

		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
	}

	/*while(i < 5)
	{
		i = i + 1;

		numeroIngresado = parseFloat(prompt("ingrese un numero"));

		while(isNaN(numeroIngresado))//validacion
		{
			numeroIngresado = parseFloat(prompt("error. ingrese un numero"));

		}

		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
	}*/

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value     = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
	

}//FIN DE LA FUNCIÓN