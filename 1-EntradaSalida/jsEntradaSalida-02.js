/*
NAHUEL IAIR GALLARDO
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombrePersona;
	nombrePersona = prompt("cuál es tu nombre?");
	let apellidoPersona;
	apellidoPersona = prompt("cual es tu apeliido?");
	alert("Tu nombre es:  " + nombrePersona + " tu apeliido es: " + apellidoPersona);
}

