/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	/*let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;


	//iniciar variables
	banderaDelPrimero = true;
	respuesta = 'si';

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si")
	{
		numeroIngresado = parseFloat(prompt("ingrese un numero"));

		while(isNaN(numeroIngresado))//validacion
		{
			numeroIngresado = parseFloat(prompt("error. ingrese un numero"));
		}

		if(banderaDelPrimero == true)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}

		else if(numeroMaximo < numeroIngresado)
		{
			numeroMaximo = numeroIngresado;
		}

		else if(numeroMinimo > numeroIngresado)
		{
			numeroMinimo = numeroIngresado;
		}		
		
		respuesta=prompt("desea continuar? si/no");
	}
	
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;*/



	/*While 9 bis: Al presionar el botón pedir  números  hasta que el usuario quiera,
	mostrar el número máximo y el número mínimo ingresado.si
	El menor de los pares y el mayor de los negativos ...(solo si hay)*/

	let numeroMaximo;
	let numeroMinimo;
	let menorPar;
	let mayorNegativos;
	let respuesta;
	let numeroIngresado;
	let banderaDelPrimero;
	let banderaDePares;
	let banderaMayorNegativos;

	respuesta = "si";
	banderaDelPrimero = true;
	banderaDePares = true;
	banderaMayorNegativos = true;


	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si")
	{
		numeroIngresado = parseFloat(prompt(" ingrese un numero"));

		while(isNaN(numeroIngresado))//validacion
		{
			numeroIngresado = parseFloat(prompt("error. ingrese un numero"));

		}

		if(banderaDelPrimero == true)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}
		else if(numeroMaximo < numeroIngresado)
		{
			numeroMaximo = numeroIngresado;
		}
		else if(numeroMinimo > numeroIngresado)
		{
			numeroMinimo = numeroIngresado;
		}

		if(numeroIngresado % 2 == 0)
		{	//con la condicion de la bandera|con esta condicion se va 
			//entra el primer numero par    |pisando el numero par
			if(banderaDePares == true || menorPar > numeroIngresado)
			{
				menorPar = numeroIngresado;
			}
		}

		if(numeroIngresado < 0)
		{
			if(banderaMayorNegativos == true || numeroIngresado > mayorNegativos)
			{
				mayorNegativos = numeroIngresado;
			}
		}

		respuesta = prompt("desea ingresar otro numero?");
	}	

	document.write("el número máximo es : " + numeroMaximo +"<br>");
	document.write("el número mínimo es: " + numeroMinimo +"<br>");
	document.write("El menor de los pares es: " + menorPar +"<br>");
	document.write("el mayor de los negativos es: " + mayorNegativos +"<br>");

}//FIN DE LA FUNCIÓN