function mostrar()
//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
{
	let i;
	let promedio;
	let acumulador;
	let contador;

	i = 0;
	acumulador = 0;
	

	contador = parseFloat(prompt("ingrese un numero"));

	while(i < 5)
	{
		i = i + 1;

		contador = parseFloat(prompt("ingrese un numero"));

		acumulador = acumulador + contador;

		promedio = acumulador / i;
	}

	alert(i);

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
	

}//FIN DE LA FUNCIÓN