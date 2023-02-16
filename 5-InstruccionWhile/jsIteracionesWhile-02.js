/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	/*let i;

	i = 10;

	while(i > 0 && i < 11)
	{
		console.log(i);
	
		i = i -1;
	}*/
	
	//while 2 bis: Ingresar 5 números, y determinar la cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos)

	/*let i;
	let numeroIngresado;
	let contador;
	let mensaje;

	i = 0;
	
	contador = 0;
	

	for(i = 0   ; i < 5   ; i++ )
	{
	
		numeroIngresado = parseFloat(prompt("ingrese un numero"));

		while(isNaN(numeroIngresado))//validacion
		{
			numeroIngresado = parseFloat(prompt("error. ingrese un numero"));
		}

		if(numeroIngresado > 9 && numeroIngresado < 21)
		{
			contador = contador + 1;
		}
	}

	mensaje = "la cantidad de numeros mayores que 10 y menores 20 es: " + contador;

	alert(mensaje)*/

	//While 2 bis bis: Ingresar numeros hasta que el usuario quiera. 
	//Determinar la cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos).
	//También el promedio de los números que cumplen la condición anterior.

	
	let numeroIngresado;
	let contador;
	let acumulador;
	let promedio;
	
	respuesta = "si";

	contador = 0;
	acumulador = 0;

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si")
	{
		numeroIngresado = parseFloat(prompt(" ingrese un numero"));

		while(isNaN(numeroIngresado))//validacion
		{
			numeroIngresado = parseFloat(prompt("error. ingrese un numero"));

		}
		if(numeroIngresado > 9 && numeroIngresado < 21)
		{
			contador = contador + 1;

			acumulador = numeroIngresado + acumulador;
		}

		respuesta = prompt("desea ingresar otro numero?");
	}

	promedio = acumulador / contador;

	document.write("a cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos) es: "+ contador + "<br>");
	document.write("promedio de los números que cumplen la condición anterior es: "+ promedio +"<br>");

	

}//FIN DE LA FUNCIÓN