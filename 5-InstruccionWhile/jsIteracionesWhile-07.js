/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let i;
	let	contador;
	let acumulador;
	let promedio;
	let respuesta;


	i = 0;
	contador = 0;
	acumulador= 0;
	respuesta="si";

	respuesta = prompt("desea ingresar  numero?");

	

	while(respuesta == "si")
	{
		contador = parseFloat(prompt(" ingrese un numero"));

		respuesta = prompt("desea ingresar otro numero?");

		i = i + 1;

		acumulador = acumulador + contador ;

		promedio = acumulador / i;
	}

	

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;


	//txtIdSuma.value=acumulador;
	//txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN