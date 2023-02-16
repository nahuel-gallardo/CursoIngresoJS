/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{

	let	numeroIngresado;
	let acumulador;
	let promedio;
	let respuesta;
	let contador;

	contador = 0;
	numeroIngresado = 0;
	acumulador= 0;
	respuesta="si";

	respuesta = prompt("desea ingresar  numero?");

	

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si")
	{
		

		numeroIngresado = parseFloat(prompt(" ingrese un numero"));

		while(isNaN(numeroIngresado))//validacion
		{
			numeroIngresado = parseFloat(prompt("error. ingrese un numero"));

		}

		contador = contador + 1;

		acumulador = acumulador + numeroIngresado ;

		respuesta = prompt("desea ingresar otro numero?");
	}

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN