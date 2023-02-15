/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	
	let numeroIngresado;
	let respuesta;
	let acumuladorDePositivos;
	let multiplicacionNegativos;

	
	numeroIngresado = 0;
	acumuladorDePositivos = 0;
	multiplicacionNegativos = 0;


	respuesta = prompt("desea ingresar  numero?");

	

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si")
	{
		numeroIngresado = parseFloat(prompt(" ingrese un numero"));

		while(isNaN(numeroIngresado))//validacion
		{
			numeroIngresado = parseFloat(prompt("error. ingrese un numero"));

		}

		respuesta = prompt("desea ingresar otro numero?");

		if(numeroIngresado < 0)
		{
			multiplicacionNegativos = numeroIngresado * numeroIngresado;
		}
		else if(numeroIngresado > 0)
		{
			acumuladorDePositivos =  numeroIngresado + numeroIngresado ;
		}

	}


	document.getElementById("txtIdSuma").value     = acumuladorDePositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;



	


	//txtIdSuma.value=sumaPositivos;
	//txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN