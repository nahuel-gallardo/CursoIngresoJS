/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let i;
	let	numeroIngresado;
	let acumulador;
	let promedio;
	let respuesta;
	let contador;


	i = 0;
	contador = 0;
	numeroIngresado = 0;
	acumulador= 0;
	respuesta="si";

	respuesta = prompt("desea ingresar  numero?");

	

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si")
	{
		i = i + 1;

		numeroIngresado = parseFloat(prompt(" ingrese un numero"));

		while(isNaN(numeroIngresado))//validacion
		{
			numeroIngresado = parseFloat(prompt("error. ingrese un numero"));

		}

		respuesta = prompt("desea ingresar otro numero?");

		contador = contador + 1;

		acumulador = acumulador + numeroIngresado ;
	}

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;


	//txtIdSuma.value=acumulador;
	//txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN