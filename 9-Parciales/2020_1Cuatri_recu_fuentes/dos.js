/*Recuperatorio de Parcial 2020: Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
          Tipo validad("arena";"cal";"cemento")
          Cantidad de bolsas(0-300),
          Precio por bolsa (más de cero y menor a 10000 ),
          al terminar la compra el cliente accede a un descuento segun las bolsas en total
            Si compro más de 15 bolsas en total tenes 10% de descuento sobre el total a pagar.
            Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar.
                a)
                El importe total a pagar , bruto sin descuento y...
                b)
                el importe total a pagar con descuento(solo si corresponde)
                d)
                Informar la bolsa mas cara de Cal y la mas barata de Cemento.
                e)
                Cuantas bolsas de arena se compraron en total, y el promedio por compra.*/
function mostrar()
{
  let cantidadBolsas;
    let tipoDeBolsa;
    let precioDeBolsa;
    let acumuladordorDeBolsas;
    let acumuladorDecal;
    let acumuladorDeArena;
    let acumuladorDeCemento;
    let banderaDelTipoMasCaro;
    let TipoConMasCantidadDeBolsas;
    let respuesta;
    let descuento;
    let precioSubtotalDeBolsas;
    let precioTotalDeBolsas;
    let importeTotalConDescuento;
    let precioDeBolsaMasCara;
    let tipoMasCaro;
    let mensaje;
    let bolsaMasCaraCal;
    let bolsaMasBarataCemento;;
    let banderaBolsaMasCaraCal = true;
    let banderaBolsaMasBarataCemento = true;
    let acumuladorDeArenaPrecio = 0;
    let promedioBolsasArena;
    
    
    precioSubtotalDeBolsas = 0;
    precioTotalDeBolsas = 0;
    acumuladordorDeBolsas = 0;
    acumuladorDeArena = 0;
    contadorDeBolsas = 0;
    acumuladorDeCemento = 0;
    acumuladorDecal = 0;
    respuesta = "si"
    banderaDelTipoMasCaro = true;
   



    while(respuesta == "si"  )
    {
        tipoDeBolsa = prompt("Ingrese tipo de bolsa: 'cal' , 'arena', 'cemento'");
          while(tipoDeBolsa != "cal" && tipoDeBolsa != "arena" && tipoDeBolsa != "cemento")
            {
              tipoDeBolsa = prompt("Error. Ingrese tipo de bolsa: 'cal' , 'arena', 'cemento'");
            }

        cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas(0 y 1000)."));
          while(cantidadBolsas < 0 || cantidadBolsas > 1000)
            {
              cantidadBolsas = parseInt(prompt("Ingrese una cantidad de bolsas entre 0 y 1000"))
            }

        precioDeBolsa = parseFloat(prompt("Ingrese el precio por unidad de bolsa($0 y $10000)"))
          while(precioDeBolsa < 0 || precioDeBolsa > 10000)
            {
              precioDeBolsa = parseFloat(prompt("Ingrese el precio por unidad de bolsa entre $0 y $10000"))
            }

        precioSubtotalDeBolsas = cantidadBolsas * precioDeBolsa;

        acumuladordorDeBolsas = acumuladordorDeBolsas + cantidadBolsas;

        precioTotalDeBolsas = precioTotalDeBolsas + precioSubtotalDeBolsas;

        switch(tipoDeBolsa)
        {
          case "cal":
            acumuladorDecal = acumuladorDecal + cantidadBolsas;
            if(banderaBolsaMasCaraCal == true || precioDeBolsa > bolsaMasCaraCal)
            {
              bolsaMasCaraCal = precioDeBolsa;
              banderaBolsaMasCaraCal =  false;
            }
            break;
          case "arena":
            acumuladorDeArena = acumuladorDeArena + cantidadBolsas;
            acumuladorDeArenaPrecio = acumuladorDeArenaPrecio + precioDeBolsa;
           
            break;
          case "cemento":
            if(banderaBolsaMasBarataCemento == true || precioDeBolsa > bolsaMasBarataCemento)
            {
              bolsaMasBarataCemento = precioDeBolsa;
              banderaBolsaMasBarataCemento = false;
            }
            acumuladorDeCemento = acumuladorDeCemento + cantidadBolsas;
            break;
        }

        if(acumuladorDecal > acumuladorDeArena && acumuladorDecal > acumuladorDeCemento)
        {
          TipoConMasCantidadDeBolsas = "cal"  
        }
        else if(acumuladorDeArena > acumuladorDecal && acumuladorDeArena > acumuladorDeCemento)
        {
          TipoConMasCantidadDeBolsas = "arena";
        }
        else
        {
          TipoConMasCantidadDeBolsas = "cemento";
        }

        if(banderaDelTipoMasCaro == true || precioDeBolsaMasCara < precioDeBolsa)
        {
            precioDeBolsaMasCara = precioDeBolsa;
            tipoMasCaro = tipoDeBolsa;
            banderaDelTipoMasCaro = false;
        }
        
        respuesta = prompt("desea ingresar mas datos? Ingrese : 'si' ")
    }
    promedioBolsasArena = acumuladorDeArenaPrecio / acumuladorDeArena;

    if(cantidadBolsas > 29)
    {
      descuento = 25;
    }
    else if(cantidadBolsas < 10)
    {
      descuento = 15;
    }
    else
    {
      descuento = 0;
    }

    if(descuento != 0)
    {
      descuento = 1 - (descuento / 100);
      importeTotalConDescuento = precioTotalDeBolsas * descuento;
      mensaje = "el importe con descuento es : " + importeTotalConDescuento;
    }
    else
    {
      mensaje = "no se aplico el descuento";
    }

    document.write(" El importe total a pagar , bruto sin descuento es: " +precioTotalDeBolsas + "<br>");
    document.write("el importe total a pagar con descuento es: "+ mensaje + "<br>");
    document.write("la bolsa mas cara del cal es: "+ bolsaMasCaraCal + " y las mas barata de cemento es: "+ bolsaMasBarataCemento+ "<br>");
    document.write("total de bolasas de cemento es: "+acumuladorDeArena+ "y el promedio por compra es: "+acumuladorDeArenaPrecio+ "<br>");
}
