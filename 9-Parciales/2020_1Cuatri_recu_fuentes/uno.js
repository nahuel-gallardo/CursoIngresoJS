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

	/*Parcial 1 2020 bis: /"Super chino" Se pide el ingreso de mercadería de un supermercado , 
	hasta que el usuario quiera,se pide :
	tipo(limpieza , comestible , otros)solo estos tres tipos
	nombre del producto
	importe del producto (no mayor a 1000 pesos)
	procedencia(importado, nacional, elaborado)
	Peso (no mayor a 30 kilos)
	
	nformar SOLO SI HAY
	a) el NOMBRE del mas pesado de los comestibles
	b) el NOMBRE del mas caro de todos los productos
	c) el NOMBRE del mas barato de los elaborados
	d)el tipo de mercadería que mas aparece
	e)el porcentaje de productos elaborados por sobre el total
	f) el promedio de pesos por cada tipo ingresado/
	*/

	let tipoDeproducto;
	let nombreProducto;
	let importeProducto;
	let procedencia;
	let peso;
	let respuesta;
	let nombreProductoMasPesadoComestible;
	let comestibleMasPesado;
	let nombreProductoMasCaro;
	let importeProductoMasCaro;
	let nombreProductoMasBaratoElaborado;
	let productoMasCantidad;
	let cantidadTotalDeProductos;
	let porcentajeElaboradosDelTotal;
	let promedioPesoLimpieza;
	let promedioPesoComestible;
	let promedioPesoOtros;
	let banderaNombreProductoMasPesadoComestible;
	let banderaProductoMasCaro;
	let banderaNombreProductoMasBaratoElaborado;
	let importeProductoMasBaratoElaborado;
	let contadorLimpieza;
	let contadorComestible;
	let contadorOtros;

	banderaNombreProductoMasPesadoComestible = true;
	banderaProductoMasCaro = true;
	banderaNombreProductoMasBaratoElaborado = true;


	while(respuesta == "si")
	{
		nombreProducto = prompt("ingrese su nombre");
			while(!isNaN(nombreProducto))
			{
				nombreProducto =  prompt("Error.ingrese su nombre");
			}
		
		tipoDeproducto = prompt("de que tipo es el producto?.'limpieza', 'comestible' ó 'otros'.");
			while(!isNaN(tipoDeproducto) || tipoDeproducto != "limpieza" && tipoDeproducto != "comestible" && tipoDeproducto != "otros")
			{
				tipoDeproducto = prompt("Error.De que tipo es el producto?.'limpieza', 'comestible' ó 'otros'.");
			}
		importeProducto = parseFloat(prompt("cual es el importe del producto?(no mayor a 1000 pesos)"));
			while(isNaN(importeProducto) || importeProducto < 0 || importeProducto > 1000)
			{
				importeProducto = parseFloat(prompt("Error.cual es el importe del producto?(no mayor a 1000 pesos)"));
			}
		procedencia = prompt("cual es la procedencia?(importado, nacional, elaborado)");
			while(!isNaN(procedencia) || procedencia != "importado" && procedencia != "nacional" && procedencia != "elaborado")
			{
				procedencia = prompt("Error.Cual es la procedencia?(importado, nacional, elaborado)");
			}
		peso = parseFloat(prompt("cuanto pesa el producto?(no mayor a 30 kilos)"));
			while(isNaN(peso) || peso < 0 || peso > 30)
			{
				peso = parseFloat(prompt("Error.cuanto pesa el producto?(no mayor a 30 kilos)"));
			}
			
		switch(tipoDeproducto)
		{
			case "limpieza":
				break;
			case "comestible":
				//a) el NOMBRE del mas pesado de los comestibles
				if(banderaNombreProductoMasPesadoComestible == true || peso > comestibleMasPesado)
				{
					comestibleMasPesado = peso;
					nombreProductoMasPesadoComestible = nombreProducto;
					banderaNombreProductoMasPesadoComestible = false;
				}
				break;
			case "otros":
				break
		}
		switch(procedencia)
		{
			case "elaborado":
				break;
			case "nacional":
				break;
			case "importado":
				break;
		}
		//b) el NOMBRE del mas caro de todos los productos
		if(banderaProductoMasCaro == true || importeProducto > importeProductoMasCaro)
		{
			importeProductoMasCaro = importeProducto;
			nombreProductoMasCaro = nombreProducto;
			banderaProductoMasCaro = false;
		}
		//c) el NOMBRE del mas barato de los elaborados
		if(banderaNombreProductoMasBaratoElaborado == true || importeProductoMasBaratoElaborado > importeProducto)
		{
			importeProductoMasBaratoElaborado = importeProducto;
			nombreProductoMasBaratoElaborado = nombreProducto;
			banderaNombreProductoMasBaratoElaborado = false;
		}
		
		if

		
		
	}
}
