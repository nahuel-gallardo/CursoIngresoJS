//al presionar el botón pedir un número. Informar si el numero es PRIMO o no.

function mostrar()
{ 
	let numeroIngresado;
	let i;
	let contador;

	contador = 0;

	numeroIngresado = parseInt(prompt("ingrese un numero"));

	for( i = 1 ; i < numeroIngresado + 1 ; i++ )
	{
		if(numeroIngresado % i == 0)
		{
			contador = contador + 1;
		}
	}

	if(contador == 2)
	{
		alert("el numero que ingreso es primo");
	}
	else
	{
		alert("el numero que ingreso NO es primo");
	}
	
}//FIN DE LA FUNCIÓN