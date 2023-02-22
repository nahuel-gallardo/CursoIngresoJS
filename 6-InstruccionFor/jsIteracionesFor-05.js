//Enunciado:
//al presionar el botón repetir el pedido de número hasta que ingresemos el 9.

function mostrar()
{
	/*let i;
	let numeroIngresado;

	
	for(i = 0   ; i < 10  ; i++ )
	{
		numeroIngresado = parseInt(prompt("ingrese un numero"))

		if(numeroIngresado == 9)
		{
			break;
		}
	}*/


	/*For 5 bis, Realizar el programa que permita el ingreso de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m” o "b") de 7 alumnos, informar por console.log: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) La cantidad de alumnos desaprobados (nota < 4)*/

	let notaIngresada;
	let sexoIngresado;
	let contador;
	let totalDeNotas;
	let promedio;
	let notaMasBaja;
	let banderaDeNotaMasBaja;
	let sexoNotaMasBaja;
	let cantidadDeVarones;
	let cantidadDesaprobados;
	let i;

	contador = 0;
	cantidadDeVarones = 0;
	cantidadDesaprobados = 0;
	totalDeNotas = 0;

	banderaDeNotaMasBaja = true;

	for( i = 0 ; i < 8 ; i++)
	{
		contador = contador + 1;

		notaIngresada = parseInt(prompt("ingrese su nota"))

		while(isNaN(notaIngresada) || notaIngresada < 1 || notaIngresada > 10 )//validacion
			{
				notaIngresada = parseFloat(prompt("error. ingrese un numero entre 1 y 10 incluidos"));
			}

		sexoIngresado = prompt("Ingrese f para femenino ó ingrese m para masculino.");

		while( !isNaN(sexoIngresado) || sexoIngresado != "m" && sexoIngresado != "f")//validacion
		{
			sexoIngresado =  prompt("error. ingrese f ó m .");
		}
		//PROMEDIO DEL TOTAL DE NOTAS
		totalDeNotas = totalDeNotas + notaIngresada;

		promedio = totalDeNotas / contador;
		//NOTA MAS BAJA Y EL SEXO
		if(banderaDeNotaMasBaja == true)
		{
			notaMasBaja = notaIngresada;

			sexoNotaMasBaja = sexoIngresado;

			banderaDeNotaMasBaja = false;
		}

		else if(notaMasBaja > notaIngresada)
		{
			notaMasBaja = notaIngresada;

			sexoNotaMasBaja = sexoIngresado;
		}
		// La cantidad de varones que su nota haya sido mayor o igual a 6.
		if( notaIngresada > 5 && sexoIngresado == "m")
		{
			cantidadDeVarones = cantidadDeVarones + 1;
		}
		// La cantidad de alumnos desaprobados (nota < 4)
		if(notaIngresada < 4)
		{
			cantidadDesaprobados = cantidadDesaprobados + 1;
		}
	}
	
	if(sexoNotaMasBaja == "m")
	{
		sexoNotaMasBaja = "masculino";
	}
	else if(sexoNotaMasBaja == "f")
	{
		sexoNotaMasBaja = "femenino";
	}

	document.write("el promedio de las notas es : " + promedio + "<br>");
	document.write(" La nota más baja es : " + notaMasBaja + ".Y el sexo de esa persona es :"+ sexoNotaMasBaja + "<br>");
	document.write(" La cantidad de varones que su nota haya sido mayor o igual a 6 es: " + cantidadDeVarones + "<br>");
	document.write(" La cantidad de alumnos desaprobados es :" + cantidadDesaprobados + "<br>");



}//FIN DE LA FUNCIÓN