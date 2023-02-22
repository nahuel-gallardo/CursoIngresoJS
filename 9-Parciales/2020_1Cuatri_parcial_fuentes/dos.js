/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
  while
Tipo validad("arena";"cal";"cemento")
  similar a validacion de sexo
Cantidad de bolsas, > 0 && menor que 1000
Precio por bolsa (más de cero ), mayor a cero y menor a 10mil
  if, variable cantidad y variable de descuento
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
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
        while(precioDeBolsa < 0 || precioDeBolsa > 10000);
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
            break;
          case "arena":
            acumuladorDeArena = acumuladorDeArena + cantidadBolsas;
            break;
          case "cemento":
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

    console.log("el importe tor")

}
