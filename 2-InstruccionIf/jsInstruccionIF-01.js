//NAHUEL IAIR GALLARDO
function mostrar()
{/*
	 let distancia;
	 let tiempo;
	 let velocidad;
	 let mensaje;

	 distancia = parseInt(document.getElementById("txtIdEdad").value);
	 tiempo    = parseInt(prompt("¿cuantas horas tardo tardo?"));

	 velocidad = distancia/tiempo;

  if(velocidad <= 60 )
  {
	mensaje =   " es muy lento";

	alert(mensaje);
  }

  else if(velocidad > 60 && velocidad <=80)
  {
	mensaje = velocidad + " lento";

	alert(mensaje);
  }

  else if(velocidad > 80 && velocidad <=100 )
  {
	mensaje = velocidad + " buen ritmo";

	alert(mensaje);
  }

  else if(velocidad > 100 && velocidad <=120 )
  {
	mensaje = velocidad + " ahi de la ley";

	alert(mensaje);
  }
  else
  {
	mensaje = velocidad + " eso no se hace ";

	alert(mensaje);
  }*/

// ejercicio 1 bis bis

  let altura;
  let peso;
  let IMC;
  let mensaje;

    altura = parseInt(prompt("¿cual es tu altura?"));

    peso  = parseInt(document.getElementById("txtIdEdad").value);

 

  IMC = peso / altura * altura ;

  if(IMC < 18.5)
  {
		mensaje = IMC + " bajo peso";

		alert(mensaje);
  }

  else if(IMC > 18.5 && IMC <=24.9)
  {
	mensaje = IMC + " peso normal";

	alert(mensaje);
  }

  else if(IMC >= 25 && IMC <= 26.9)
  {
	mensaje = IMC + "preobesidad";

	alert(mensaje);
  }

  else if(IMC >= 27 && IMC <= 29.9)
  {
	mensaje = IMC + " obesidad 1";

	alert(mensaje);
  }
  else if(IMC >= 30 && IMC <= 34.9)
  {
	mensaje = IMC + " obesidad 2";

	alert(mensaje);
  }

  else 
  {
	mensaje = IMC + " obesidad 3";

	alert(mensaje);
  }









}//FIN DE LA FUNCIÓN
