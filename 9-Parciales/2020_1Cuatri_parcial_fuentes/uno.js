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
	let cantidadTotalDeJabones;

	banderaAlcohol = true;
	banderaProductoMasUnidades = true;
	cantidadTotalDeJabones = 0;



	for(i = 0 ; i < 6 ; i++)
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
		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
		if(banderaAlcohol == true && tipoProducto == "alcohol")
		{
			precioAlcoholMasBarato = precioProducto;
			alcoholMasBaratoFabricante = marcaDelFabricante;
			unidadesAlcoholMasBarato = cantidadDeUnidades;

			banderaAlcohol = false;
		}
		else if(tipoProducto == "alcohol" && precioAlcoholMasBarato > precioProducto)
		{
			precioAlcoholMasBarato = precioProducto;
			alcoholMasBaratoFabricante = marcaDelFabricante;
			unidadesAlcoholMasBarato = cantidadDeUnidades;
		}
		//b) Del tipo con mas unidades, el promedio por compra
		if(banderaProductoMasUnidades == true)
		{
			productoConMasUnidades = tipoProducto;
			cantidadTipoMasUnidades = cantidadDeUnidades;
		}
		else if(cantidadTipoMasUnidades < cantidadDeUnidades)
		{
			cantidadTipoMasUnidades = cantidadDeUnidades;
			productoConMasUnidades  = tipoProducto;
		}
		//c) Cuántas unidades de jabones hay en total
		if(tipoProducto == "jabon")
		{
			cantidadTotalDeJabones = cantidadTotalDeJabones + cantidadDeUnidades;
		}
	}
	mensaje = document.write("el alcohol mas barato es: " + alcoholMasBaratoFabricante + "y son " + unidadesAlcoholMasBarato + "<br>" );
	
	
}
