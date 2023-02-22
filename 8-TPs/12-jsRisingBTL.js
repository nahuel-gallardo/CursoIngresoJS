/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e 
ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de letiables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivil;
	let suledoBruto;
	let numeroDeLegajo;
	let nacionalidad;
// A.	Edad, entre 18 y 90 años inclusive.
	edadIngresada = parseInt(prompt("ingrse una edad(entre 18 y 90 años)"));

	while((isNaN(edadIngresada) || edadIngresada < 17 || edadIngresada > 90))
		{
			edadIngresada =  parseInt(prompt("ingrse una edad(entre 18 y 90 años)"));
		}
//  B.	Sexo, “M” para masculino y “F” para femenino
	sexoIngresado = prompt("ingrese su sexo “M” para masculino y “F” para femenino");

	while( !isNaN(sexoIngresado) || sexoIngresado != "M" && sexoIngresado != "F")
		{
			sexoIngresado = prompt("ingrese F ó M .");
		}
//C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
	estadoCivil = parseInt(prompt("Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));

	while(isNaN(estadoCivil) || estadoCivil < 1 || estadoCivil > 4)
	{
		estadoCivil = parseInt(prompt("Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
	}

	switch(estadoCivil)
	{
		case 1:
			estadoCivil = "soltero";
			break;
		case 2:
			estadoCivil = "casado"
			break;
		case 3:
			estadoCivil = "divorciado";
			break;
		case 4:
			estadoCivil = "viudo";
			break;
	}

	suledoBruto = parseInt(prompt("Sueldo bruto, no menor a 8000."));

	while(suledoBruto < 8000)
	{
		suledoBruto = parseInt(prompt("su sueldo es bajo"));
	}

	numeroDeLegajo = parseInt(prompt("Ingrese su número de legajo, numérico de 4 cifras, sin ceros a la izquierda."));

	while(numeroDeLegajo < 999 || numeroDeLegajo > 9999)
	{
		numeroDeLegajo = parseInt(prompt("Ingrese su número de legajo, numérico de 4 cifras, sin ceros a la izquierda."))
	}

	nacionalidad = prompt("Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

	while(!isNaN(nacionalidad) || nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
	{
		nacionalidad = prompt("Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.")
	}

	switch(nacionalidad)
	{
		case "A":
			nacionalidad = "argentino";
			break;
		case "E":
			nacionalidad = "extranjero";
			break;
		case "N":
			nacionalidad = "nacionalizado"
			break;
	}

	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value = estadoCivil; 
	document.getElementById("txtIdSueldo").value = suledoBruto;
	document.getElementById("txtIdLegajo").value = numeroDeLegajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;
	
}
