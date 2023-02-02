/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"

Ejercicio 10.bis: Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
pedirle al usuario un % de descuento y mostrar el importe en el cuadro de texto "RESULTADO"
Profe Orne — hoy a las 17:38

*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;

	importe = document.getElementById("txtIdImporte").value;

	importe = parseInt(importe);

	descuento = prompt("ingrese un porcentaje de descuento");
	descuento = parseInt(descuento);
	descuento =  1 - descuento / 100;

	resultado = descuento * importe;

	document.getElementById("txtIdResultado").value = resultado;

	
}
