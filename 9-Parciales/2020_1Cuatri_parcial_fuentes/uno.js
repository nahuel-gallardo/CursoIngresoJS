/*Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
  un for que cuente hasta 5
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
  un while similar al de sexo
el precio (validar entre 100 y 300),
  un while entre 100 y 300
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
if y una bandera
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	let i;
	let tipoProducto;
	let precioProducto;
	let cantidadDeUnidades;
	let marcaDelFabricante;
	let banderaAlcohol;
	let alcoholMasBarato;
	let precioAlcoholMasBarato;
	let alcoholMasBaratoFabricante;
	let unidadesAlcoholMasBarato;
	let banderaProductoMasUnidades;
	let productoConMasUnidades;
	let cantidadTipoMasUnidades;
	let acumuladorJabon;
	let acumuladorBarbijo;
	let acumuladorAlcohol;
	let promedio;
	let acumuladorDePrecioAlcohol;
	let acumuladorDePreciobarbijo;
	let acumuladorDePrecioJabon;
	let mayorContador;
	let contadorAlcohol;
	let contadorBarbijo;
	let contadorJabon;



	banderaAlcohol = true;
	banderaProductoMasUnidades = true;
	acumuladorJabon = 0;
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorDePrecioAlcohol = 0;
	acumuladorDePreciobarbijo = 0;
	acumuladorDePrecioJabon = 0;
	mayorContador = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	




	for(i = 0 ; i < 5 ; i++)
	{
		tipoProducto = prompt("que tipo de producto es?");
		while( !isNaN(tipoProducto) || tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol")
		{
			tipoProducto = prompt("ingrese si su tipo de producto es : jabon, barbijo o alcohol");
		}

		precioProducto = parseFloat(prompt("cual es el precio del producto?"));
		while(isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300)
		{
			precioProducto = parseFloat(prompt("el precio del producto debe der entre 100 y 300. ingrse el precio del producto"));
		}

		cantidadDeUnidades = parseInt(prompt("cuantas son las unidades del producto?"));
		while(isNaN(cantidadDeUnidades) || cantidadDeUnidades < 1 || cantidadDeUnidades > 1000)
		{
			cantidadDeUnidades = parseInt(prompt("la cantidad unidades del producto tiene que ser entre 1 y 1000. cuantas son las unidades del producto?"));
		}
		marcaDelFabricante = prompt("cual es la marca del fabricante?");
		while(!isNaN(marcaDelFabricante))
		{
			marcaDelFabricante = prompt("cual es la marca del fabricante?");
		}

		switch(tipoProducto)
		{
			case "alcohol"://a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
				if(banderaAlcohol == true || precioAlcoholMasBarato > precioProducto)
					{
						precioAlcoholMasBarato = precioProducto;
						alcoholMasBaratoFabricante = marcaDelFabricante;
						unidadesAlcoholMasBarato = cantidadDeUnidades;
						banderaAlcohol = false;
					}
				acumuladorAlcohol = acumuladorAlcohol + cantidadDeUnidades;
				acumuladorDePrecioAlcohol = acumuladorDePrecioAlcohol + precioProducto;
				contadorAlcohol = contadorAlcohol + 1;	
				break;
			case "barbijo":
				acumuladorBarbijo = acumuladorBarbijo + cantidadDeUnidades;
				acumuladorDePreciobarbijo = acumuladorDePreciobarbijo + precioProducto;
				contadorBarbijo = contadorBarbijo + 1;
				break;
			case "jabon":
				acumuladorDePrecioJabon = acumuladorDePrecioJabon + precioProducto;
				acumuladorJabon = acumuladorJabon + cantidadDeUnidades;
				contadorJabon = contadorJabon + 1;
				break;
		}

		
	
		
		
		//b) Del tipo con mas unidades, el promedio por compra
		if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
		{
			productoConMasUnidades = acumuladorAlcohol;
		}
		else if(acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon)
		{
			productoConMasUnidades = acumuladorBarbijo;
		}
		else
		{
			productoConMasUnidades = acumuladorJabon;
		}

		if(contadorAlcohol > contadorBarbijo && contadorAlcohol > contadorJabon)
		{
			mayorContador = contadorAlcohol;
		}
		else if(contadorBarbijo > contadorAlcohol && contadorBarbijo > contadorJabon)
		{
			mayorContador = contadorBarbijo;
		}
		else
		{
			mayorContador = contadorJabon;
		}


	}
	promedio = productoConMasUnidades / mayorContador;



	document.write("el alcohol mas barato es: " + alcoholMasBaratoFabricante + "y son " + unidadesAlcoholMasBarato + "<br>" );
	document.write("el promedio de compra del producto con mas cantidad de unidades es: " + promedio + "<br>");
	document.write("las unidades de jabon que hay en totals son : "+ acumuladorJabon+ "<br>");
	
}
