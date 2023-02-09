/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidadDeLamparas;
    let precioLamparas;
    let descuento;
    let precioFinal;
    let precioFinalConDescuento;
    let marcaLamparas;
    let precioConImpuesto;
    let ingresosBrutos;
    let mensaje;


    precioLamparas     = 35
    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);

    marcaLamparas = document.getElementById("Marca").value;


    if(cantidadDeLamparas >= 6)
    {   
        descuento = 50
        descuento = 1 - 50/100

        precioFinal = cantidadDeLamparas * precioLamparas;

        precioFinalConDescuento = precioFinal * descuento;

        document.getElementById("txtIdprecioDescuento").value =  precioFinalConDescuento;

        if(precioFinalConDescuento > 120)
        {
            ingresosBrutos = 10;
            ingresosBrutos = 1 + 10/100;
    
            precioConImpuesto = precioFinalConDescuento * ingresosBrutos - precioFinalConDescuento;
    
            mensaje = "Usted pago " + precioConImpuesto.toFixed(2) + "de IIBB.";
    
            alert(mensaje);
        }
    }

    else if(cantidadDeLamparas == 5 && marcaLamparas == "ArgentinaLuz")
    {
        descuento = 40
        descuento = 1 - descuento/100

        precioFinal = cantidadDeLamparas * precioLamparas;

        precioFinalConDescuento = precioFinal * descuento;

        document.getElementById("txtIdprecioDescuento").value =  precioFinalConDescuento.toFixed(2);
    }

    else if(cantidadDeLamparas == 5 && marcaLamparas != "ArgentinaLuz" )
    {
        descuento = 30
        descuento = 1 - descuento/100

        precioFinal = cantidadDeLamparas * precioLamparas;

        precioFinalConDescuento = precioFinal * descuento;

        document.getElementById("txtIdprecioDescuento").value =  precioFinalConDescuento.toFixed(2);
    }

    else if(cantidadDeLamparas == 4 && (marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas" ))
    {
        descuento = 25;
        descuento = 1 - descuento/100;

        precioFinal = cantidadDeLamparas * precioLamparas;

        precioFinalConDescuento = precioFinal * descuento;

        document.getElementById("txtIdprecioDescuento").value =  precioFinalConDescuento.toFixed(2);
    }

    else if(cantidadDeLamparas == 4 && (marcaLamparas  != "ArgentinaLuz" || marcaLamparas != "FelipeLamparas" ))
    {
        descuento = 20;
        descuento = 1 - descuento/100;

        precioFinal = cantidadDeLamparas * precioLamparas;

        precioFinalConDescuento = precioFinal * descuento;

        document.getElementById("txtIdprecioDescuento").value =  precioFinalConDescuento.toFixed(2);
    }
    
    else if(cantidadDeLamparas == 3 && marcaLamparas == "ArgentinaLuz")
    {
        descuento = 15;
        descuento = 1 - descuento/100;

        precioFinal = cantidadDeLamparas * precioLamparas;

        precioFinalConDescuento = precioFinal * descuento;

        document.getElementById("txtIdprecioDescuento").value =  precioFinalConDescuento.toFixed(2);
    }
    
    else if(cantidadDeLamparas == 3 && marcaLamparas == "FelipeLamparas")
    {
        descuento = 10;
        descuento = 1 - descuento/100;

        precioFinal = cantidadDeLamparas * precioLamparas;

        precioFinalConDescuento = precioFinal * descuento;

        document.getElementById("txtIdprecioDescuento").value =  precioFinalConDescuento.toFixed(2);
    } 

    else if(cantidadDeLamparas == 3 && (marcaLamparas != "ArgentinaLuz" && marcaLamparas != "FelipeLamparas")) 
    {
        descuento = 5;
        descuento = 1 - descuento/100;

        precioFinal = cantidadDeLamparas * precioLamparas;

        precioFinalConDescuento = precioFinal * descuento;

        document.getElementById("txtIdprecioDescuento").value =  precioFinalConDescuento.toFixed(2);
    
    }
    else if (precioFinalConDescuento > 120)
    {
        ingresosBrutos = 10;
        ingresosBrutos = 1 + 10/100;

        precioConImpuesto = precioFinalConDescuento * ingresosBrutos;

        mensaje = "Usted pago " + precioConImpuesto + "de IIBB.";

        alert(mensaje);
    }


    
        







}
