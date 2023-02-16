/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let contadorPositivos;
	let contadorNegativos;
	let cantidadDeCeros;
	let cantidadDePares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;


	contadorNegativos = 0;
	contadorPositivos = 0;
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadDePares = 0;
	cantidadDeCeros = 0;

	respuesta = prompt("desea ingresar  numero?");

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si")
	{
		

		numeroIngresado = parseFloat(prompt(" ingrese un numero"));

		while(isNaN(numeroIngresado))//validacion
		{
			numeroIngresado = parseFloat(prompt("error. ingrese un numero"));

		}
//      1-Suma de los negativos. 3-Cantidad de positivos.
		if(numeroIngresado < 0)
		{ 
			contadorNegativos = contadorNegativos + 1;
			sumaNegativos = sumaNegativos + numeroIngresado;
		}//suma de positivos y cantidad de positivos
		else if(numeroIngresado > 0)
		{
			contadorPositivos = contadorPositivos + 1;
			sumaPositivos = sumaPositivos + numeroIngresado;
		}//CANTIDAD DE PARES
		if(numeroIngresado%2 == 0)
		{
			cantidadDePares = cantidadDePares + 1;
		}//CANTIDAD DE CEROS
		else 
		{
			cantidadDeCeros = cantidadDeCeros + 1;
		}

		respuesta = prompt("desea ingresar otro numero?");

	}//fin del while

	promedioNegativos = sumaNegativos / contadorNegativos;
	if(contadorNegativos == 0)
	{
		promedioNegativos = 1;
	}

	promedioPositivos = sumaPositivos / contadorPositivos;
	if(contadorPositivos == 0)
	{
		promedioPositivos = 1;
	}

	diferencia = sumaNegativos + sumaPositivos;

	document.write("la suma de negativos es :" + sumaNegativos +"<br>");
	document.write("la suma de positivos es :" + sumaPositivos +"<br>");
	document.write("Cantidad de positivos es:" + contadorPositivos +"<br>");
	document.write("Cantidad de negativos es:" + contadorNegativos +"<br>");
	document.write("Cantidad de números pares es:" + cantidadDePares +"<br>");
	document.write("Cantidad de ceros es:" + cantidadDeCeros +"<br>");	
	document.write("El promedio de positivos es:" + promedioPositivos +"<br>");
	document.write("El promedio de negativos es:" + promedioNegativos +"<br>");
	document.write("Diferencia entre positivos y negativos es:"+ diferencia +"<br>");
}//FIN DE LA FUNCIÓN