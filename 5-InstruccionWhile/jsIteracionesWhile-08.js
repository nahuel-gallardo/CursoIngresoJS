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
	multiplicacionNegativos = 1;


	respuesta = prompt("desea ingresar  numero?");

	

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si")
	{
		numeroIngresado = parseFloat(prompt(" ingrese un numero"));

		while(isNaN(numeroIngresado))//validacion
		{
			numeroIngresado = parseFloat(prompt("error. ingrese un numero"));

		}

		if(numeroIngresado < 0 )
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		else if(numeroIngresado > 0 )
		{
			acumuladorDePositivos =  acumuladorDePositivos + numeroIngresado ;
		}
		
		respuesta = prompt("desea ingresar otro numero?");

	}


	document.getElementById("txtIdSuma").value     = acumuladorDePositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;



	


	//txtIdSuma.value=sumaPositivos;
	//txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN