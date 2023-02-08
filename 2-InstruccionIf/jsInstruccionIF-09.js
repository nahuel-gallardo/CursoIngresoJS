function mostrar()
{
	let numeroRandom;
	let max;
	let min;
	let mensaje;

	max = 10;//multiplico por 10 el numero random sin llegar a 10 por que el numero random nunca llega a 1
	min = 1;// Sumo uno el numo random, asi da como minimo 1,ALGO es decir 1,Math.random()
	//
                                                                  
	numeroRandom = Math.floor(Math.random()*max + min);
//   Math.floor : Devuelve el máximo entero menor o igual a un número.EJ: 9,8778 LO REDONDEA A 9

// Math.random() devuelve un número ALEATORIO, comprendido en el rango de 0 a menor que 1 (es decir, incluido el 0 pero NO el 1)
	mensaje = "numero random: " + numeroRandom;

	alert(mensaje);

}//FIN DE LA FUNCIÓN