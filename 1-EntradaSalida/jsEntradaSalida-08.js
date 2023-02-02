/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."

Ejercicio 8.bis: Ingresar dos numeros por id
Se pide:
mostrar por alert:
a) La suma de los dos numeros
b) El promedio de los numeros
c) El modulo de los numeros (el primero en modulo del segundo)

*/
function SacarResto()
{
	let dividendo;
	let divisor;
	let suma;
	let promedio;
	let modulo;
	let mensaje;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor   = document.getElementById("txtIdNumeroDivisor").value;

	dividendo = parseInt(dividendo);
	divisor   = parseInt(divisor);

	suma = dividendo + divisor;

	promedio = (dividendo + divisor) / 2;
	
	modulo = dividendo % divisor;


	mensaje = suma + " " + promedio + " " + modulo;


	alert(mensaje);
}
