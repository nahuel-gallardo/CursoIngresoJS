/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let  sexoIngresado;
	let mensaje;

	sexoIngresado = prompt("ingrese f ó m .");

	
	while( !isNaN(sexoIngresado) || sexoIngresado != "m" && sexoIngresado != "f")
	{
		sexoIngresado = prompt("ingrese f ó m .");
	}

	if(sexoIngresado == "f")
	{
		mensaje = "es mujer";
	}
	else if(sexoIngresado == "m")
	{
		mensaje = "es hombre";
	}

		
	
	document.getElementById("txtIdSexo").value = mensaje;






}//FIN DE LA FUNCIÓN