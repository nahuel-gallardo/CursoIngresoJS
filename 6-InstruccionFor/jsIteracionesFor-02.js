//Enunciado:
//al presionar el botón mostrar 10 repeticiones con números ,
// desde el 10 al 1


function mostrar()
{
	let i;
	let contador;

	contador = 11;
	//	 1°ra     //2°da  //3°ra      // en la primer i ponemos desde donde inician la repeticiones.EN ESTE CASO SON 10 REPETICIONES: 0,1,2,3,4,5,6,7,8,9
	for(i = 0   ; i < 10 ; i++ )//con la segunda i limito la cantidad de repeticiones. EN ESTE CASO HASTA QUE i SEA MENOR QUE 10
	{						//3°ra i aumenta la cantidad de repeticiones 1 en 1 con el ++

		contador = contador - 1 ;// aca ya empiezo con  uno menos en el contador

		document.write(contador + "<br>");
	}



	
}