//al presionar el botón pedir un número. 
//mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.

function mostrar()
{
	let numeroIngresado;
	let i;
	let contador;

	contador = 0;

	numeroIngresado = parseInt(prompt("ingrese un numero"))

	for( i = 1 ; i < numeroIngresado ; i++ )
	{
		if(numeroIngresado % i == 0)
		{
			document.write("los divisores del numero que ingreso son : " + i + "<br>");

			contador = contador + 1;
		}
	}
	
	document.write("la cantidad de divisores del numero que ingreso son : " + contador + "<br>");

	


}//FIN DE LA FUNCIÓN