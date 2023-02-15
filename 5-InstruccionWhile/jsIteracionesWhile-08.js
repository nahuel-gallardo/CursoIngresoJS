/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let i;
	let contador;
	let respuesta;
	let acumuladorDePositivos;
	let multiplicacionNegativos;

	i = 0;
	contador = 0;
	acumuladorDePositivos = 0;
	multiplicacionNegativos = 0;


	respuesta = prompt("desea ingresar  numero?");

	

	while(respuesta == "si")
	{
		contador = parseFloat(prompt(" ingrese un numero"));

		respuesta = prompt("desea ingresar otro numero?");

		i = i + 1;

		acumuladorDePositivos =  contador + contador ;

		if(contador < 0)
		{
			multiplicacionNegativos = contador * contador;
		}
	}


	document.getElementById("txtIdSuma").value     = acumuladorDePositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;



	


	//txtIdSuma.value=sumaPositivos;
	//txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN