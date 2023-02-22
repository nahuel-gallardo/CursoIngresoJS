//Enunciado:
//al presionar el botón pedir un número. 
//mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.


function mostrar()
{
 
	let i;
	let numeroIngresado;
	let contador;

	contador = 0;

	numeroIngresado = parseInt(prompt("ingrese un numero"));

	for(i = 1   ; i < numeroIngresado + 1; i++ )
	{
		if(i%2 == 0)
		{
			document.write("los numeros pares son : " + i + "<br>");

			contador = contador + 1;
		}
	}

	document.write("la cantidad de pares es : " +contador + "<br>");




}//FIN DE LA FUNCIÓN