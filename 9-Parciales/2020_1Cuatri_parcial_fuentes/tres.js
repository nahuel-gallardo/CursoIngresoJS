/*Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	let nombre;
	let edad;
	let sexoIngresado;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta;
	let temperaturaMasAlta;
	let nombrePersonaMasTemperatura;
	let banderaNombrePersonaMasTemperatura;
	let contadorMayoresEdadViudos;
	let contadorDeHombresViudos_Solteros;
	let contadorMayor60_TemperaturaMayor38;
	let contadorHombresSolteros;
	let acumuladorDeEdad;
	let promedioEdadHombresSolteros;
	
	respuesta = "si";
	banderaNombrePersonaMasTemperatura = true;
	contadorMayoresEdadViudos = 0;
	contadorDeHombresViudos_Solteros = 0;
	contadorMayor60_TemperaturaMayor38 = 0;
	contadorHombresSolteros = 0;
	acumuladorDeEdad = 0;

	while(respuesta == "si")
	{
		nombre = prompt("ingrese su nombre");
			while(!isNaN(nombre))
			{
				nombre =  prompt("ingrese su nombre");
			}
		
		edad = parseInt(prompt("cual es su edad?"))
			while(isNaN(edad) || edad < 1 || edad > 130)
			{
				edad = parseInt(prompt("Error. Ingrese una edad correcta."))
			}

		sexoIngresado = prompt("Ingrese f para femenino ó ingrese m para masculino.");
			while( !isNaN(sexoIngresado) || sexoIngresado != "m" && sexoIngresado != "f")//validacion
			{
				sexoIngresado =  prompt("Error. Ingrese f ó m .");
			}

		estadoCivil = parseInt(prompt("Estado civil, 1-para soltero, 2-para casados, 3-para viudos"));
			while(isNaN(estadoCivil) || estadoCivil < 1 || estadoCivil > 4)
			{
				estadoCivil = parseInt(prompt("Estado civil,soltero,casado y viudo"));
			}

			switch(estadoCivil)
			{
				case "soltero":
					if(sexoIngresado == "m")//e) El promedio de edad entre los hombres solteros.*/
					{
						contadorHombresSolteros = contadorHombresSolteros + 1;
						acumuladorDeEdad = acumuladorDeEdad + edad;
						contadorDeHombresViudos_Solteros = contadorDeHombresViudos_Solteros + 1;
					}
					break;
				case "casado":
					break;
				case "viudo"://b) Cuantos mayores de edad estan viudos
					if(sexoIngresado == "m")
					{
						contadorDeHombresViudos_Solteros = contadorDeHombresViudos_Solteros + 1;
					}
					if(edad > 17)
					{
						contadorMayoresEdadViudos = contadorMayoresEdadViudos + 1;
					}
					break;
			}

		temperaturaCorporal = parseFloat(prompt("cual es su temperatura corporal?"));
			while(isNaN(temperaturaCorporal) || temperaturaCorporal < 31 || temperaturaCorporal > 43)
			{
				temperaturaCorporal = parseFloat(prompt("error. Su temperatura corporal no esta en el promedio aceptado"))
			}
			//a) El nombre de la persona con mas temperatura.
		if(banderaNombrePersonaMasTemperatura == true || temperaturaCorporal > temperaturaMasAlta)
		{
			nombrePersonaMasTemperatura = nombre;
			temperaturaMasAlta = temperaturaCorporal;
			banderaNombrePersonaMasTemperatura = false;
		}
		//b) Cuantos mayores de edad estan viudos
		/*if(edad > 17 && estadoCivil == "viudo")
		{
			contadorMayoresEdadViudos = contadorMayoresEdadViudos + 1;
		}*/
		//c) La cantidad de hombres que hay solteros o viudos.
		/*if(sexoIngresado == "m" && estadoCivil == "viudo" || estadoCivil == "soltero")
		{
			contadorDeHombresViudos_Solteros = contadorDeHombresViudos_Solteros + 1;
		}*/
		//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		if(edad > 60 && temperaturaCorporal > 38)
		{
			contadorMayor60_TemperaturaMayor38 = contadorMayor60_TemperaturaMayor38 + 1;
		}
		//e) El promedio de edad entre los hombres solteros.*/
		/*if(sexoIngresado == "m" && estadoCivil == "soltero")
		{
			contadorHombresSolteros = contadorHombresSolteros + 1;
			acumuladorDeEdad = acumuladorDeEdad + edad;
		}*/

		
		respuesta = prompt("desea ingresar mas datos?. Escriba 'si' para continuar");	
	}

	promedioEdadHombresSolteros = acumuladorDeEdad / contadorHombresSolteros;

	document.write("El nombre de la persona con mas temperatura es:" + nombrePersonaMasTemperatura + "<br>");
	document.write("mayores de edad viudos son: " + contadorMayoresEdadViudos+ "<br>");
	document.write("cantidad de hombres que hay solteros o viudos."+ contadorDeHombresViudos_Solteros+ "<br>");
	document.write("personas de la tercera edad( mas de 60 años) , con mas de 38 de temperatura :"+contadorMayor60_TemperaturaMayor38 + "<br>");
	document.write( "El promedio de edad entre los hombres solteros"+promedioEdadHombresSolteros+ "<br>");
}	

