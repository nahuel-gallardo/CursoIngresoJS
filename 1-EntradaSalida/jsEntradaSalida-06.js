/*
NAHUEL IAIR GALLARDO
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    let numUno;
	let numDos;
	let mensaje;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;


	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	mensaje = "La suma es " + (numUno + numDos);


	alert(mensaje);
}

