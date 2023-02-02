/*
NAHUEL IAIR GALLARDO
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
/*Ejercicio 3.bis: Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto 
junto al precio aumentado en un 30%. 
Pueden utilizar el html del ejercicio 3 para resolverlo.
*/
function mostrar()
{
	let descripción;
	let precioProducto;
	let mensaje;

	descripción = prompt("ingrese el nombre del producto");

	precioProducto = document.getElementById("txtIdNombre").value;

    precioProducto = parseInt(precioProducto);

	precioProducto = precioProducto * 1.3;

	mensaje = descripción + " " + precioProducto;


    
	alert(mensaje);

}


