/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/

function mostrar()
{
	/*let i;
	let tipoProducto;
	let precioProducto;
	let cantidadDeUnidades;
	let marcaDelFabricante;
	let banderaJabon;
	//let alcoholMasBarato;
	let precioJabonMasCaro;
	let JabonMasCaroFabricante;
	let unidadesJabonMasCaroFabricante;
	let acumuladorJabon;
	let banderaProductoMasUnidades;
	let productoConMasUnidades;
	let cantidadTipoMasUnidades;
	let cantidadTotalDeBarbijos;


	banderaJabon = true;
	banderaProductoMasUnidades = true;
	cantidadTotalDeBarbijos = 0;



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
		//a) Del más caro de los jabon, la cantidad de unidades y el fabricante
		if(banderaJabon == true && tipoProducto == "jabon")
		{
			precioJabonMasCaro = precioProducto;
			JabonMasCaroFabricante = marcaDelFabricante;
			unidadesJabonMasCaroFabricante= cantidadDeUnidades;

			banderaJabon = false;
		}
		else if(tipoProducto == "jabon" && precioJabonMasCaro > precioProducto)
		{
			precioJabonMasCaro = precioProducto;
			JabonMasCaroFabricante = marcaDelFabricante;
			unidadesJabonMasCaroFabricante = cantidadDeUnidades;
		}
		//b) Del tipo con mas unidades, el promedio por compra
		
		//c) Cuántas unidades de barbijos hay en total
		if(tipoProducto == "barbijo")
		{
			cantidadTotalDeBarbijos = cantidadTotalDeBarbijos + cantidadDeUnidades;
		}
	}


	document.write("el jabon mas caro es: " + JabonMasCaroFabricante + "y son " + unidadesJabonMasCaroFabricante + "<br>" );
	document.write("las unidades de jabon que hay en totals son : "+ cantidadTotalDeBarbijos+ "<br>");*/

}

