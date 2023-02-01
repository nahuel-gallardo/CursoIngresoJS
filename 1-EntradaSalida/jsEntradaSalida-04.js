/* 
NAHUEL IAIR GALLARDO
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
    let datoIngresado;

	//pido el dato

	datoIngresado = prompt("Ingresar dato");

	document.getElementById("txtIdNombre").value = datoIngresado;

	//busco como acceder a la cajita del HTML

	//alert("ok");
}

