/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	/*
al presionar el botón "mostrar", mostrar 125 repeticiones 
con números ASCENDENTE, desde el 1 al 125. 
a) contar los numeros IMPARES 
b)contar los numeros PARES,
c)el total de la suma de los numeros impares
d)el total de la suma de los numeros pares
e)el mayor de los numeros impares; 
f)el mayor de los numeros; 
*/
/*function mostrar()
{
	//declaro la varible
	let i;
	let contadorNumeroPares; 
	let contadorNumerosImpares; 
	let acumuladorNumeroImpares;
	let acumuladorNumeroPares;
	let mayorNumeroImpar; 
	let mayorNumero; 

	//inicializar la variable
	i = 10; 
	contadorNumeroPares = 0; 
	contadorNumerosImpares = 0; 
	acumuladorNumeroImpares = 0; 
	acumuladorNumeroPares = 0; 
	mayorNumeroImpar = 1; 
	mayorNumero = 0; 


	while(i < 125)
	{
		if(i%2 != 0) // esto es un impar 
		{       
			//a) contar los numeros IMPARES                    0      
			contadorNumerosImpares = contadorNumerosImpares + 1;
			//c)el total de la suma de los numeros impares
			acumuladorNumeroImpares = acumuladorNumeroImpares + i;
			//e)el mayor de los numeros impares; 
			if(i > mayorNumeroImpar)
			{
				mayorNumeroImpar = i; 
			}
		}
		else
		{	//d)el total de la suma de los numeros pares
			contadorNumeroPares = contadorNumeroPares + 1;
			acumuladorNumeroPares = acumuladorNumeroPares + i;	
		}

		if(i > mayorNumero)
		{
			mayorNumero = i; 
		}

		//modificar la condicion de uno en uno 
		i= i + 1; 

		//moestrar el contador
		console.log(i); 
	}//fin de while



	console.log("La cantidad de numeros impares es: " + contadorNumerosImpares); 
	console.log("La cantidad de numeros pares es: " + contadorNumeroPares); 
	console.log("el total de la suma de los numeros Impares "+acumuladorNumeroImpares); 
	console.log("el total de la suma de los numeros Pares "+acumuladorNumeroPares); 
	console.log("el mayor de los numeros impares "+ mayorNumeroImpar); 
	console.log("el mayor de los numeros es: "+ mayorNumero); 
	
}*/

//While 1 bis- edad y nombre , informar el nombre de la persona mas vieja y la mas joven

	let edad;
	let nombre;
	let respuesta;
	let banderaDelPrimero;
	let mayorEdad;
	let nombreMayor;
	let nombreMenor;
	let menorEdad;

	respuesta = "si"

	banderaDelPrimero = true;

	

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si")
	{	
		nombre = prompt("cual es su nombre?");

		edad = parseInt(prompt("cual es su edad?"));

		while(isNaN(edad) || edad < 0 || edad > 123)//validacion
		{
			edad = parseInt(prompt("error. ingrese un numero"));
		}
		if(banderaDelPrimero == true)
		{
			mayorEdad = edad;
			menorEdad = edad;
			nombreMayor = nombre;
			nombreMenor = nombre;
			banderaDelPrimero = false;
		}

		else if(mayorEdad < edad)
		{
			nombreMayor = nombre;
			mayorEdad = edad;
		}

		else if(menorEdad > edad)
		{
			nombreMenor = nombre;
			menorEdad = edad;
		}

		respuesta = prompt("desea ingresar otro nombre y edad?");
	
	}

	document.write("la persona mayor es : " + nombreMayor + " que tiene " + mayorEdad + " años" + "<br>");
	document.write("la persona menor es :" + nombreMenor + " que tiene " + menorEdad + " años"  + "<br>");


	







	
}//FIN DE LA FUNCIÓN