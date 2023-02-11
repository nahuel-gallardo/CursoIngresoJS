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

/*
    if(cantidadDeLamparas >= 6)
    {   
        descuento = 50;
    }    
    
    else if(cantidadDeLamparas == 5)
    {
        if(marcaLamparas == "ArgentinaLuz"){
            descuento = 40;
        }else{
            descuento = 30;
        }
    }

    else if(cantidadDeLamparas == 4)
    {
        if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas"){
            descuento = 25;
        }else{
            descuento = 20;
        } 
    }

    else if(cantidadDeLamparas == 3) 
    {
        if(marcaLamparas == "ArgentinaLuz")
        {
            descuento = 15;
            }else if(marcaLamparas == "felipeLamparas"){
                    descuento = 10;
                }else{
                    descuento = 5;
                }
    }
        else if(cantidadDeLamparas < 3)
        {
            descuento = 0;
        }  
            

        descuento = descuento;
        descuento = 1 - descuento/100;

        precioFinal = cantidadDeLamparas * precioLamparas;

        precioFinalConDescuento = precioFinal * descuento;

        document.getElementById("txtIdprecioDescuento").value =  precioFinalConDescuento.toFixed(2);

        if(precioFinalConDescuento > 120)
        {
            ingresosBrutos = 10;
            ingresosBrutos = 1 + 10/100;
    
            precioConImpuesto = precioFinalConDescuento * ingresosBrutos - precioFinalConDescuento;
    
            mensaje = "Usted pago " + precioConImpuesto.toFixed(2) + "de IIBB.";
    
            alert(mensaje);
        }
        */
        if(cantidadDeLamparas >= 6)
        {   
            descuento = 50;
        }    
        
            else if(cantidadDeLamparas == 5)
            {
                switch(marcaLamparas)
                {
                    case "Argentina":
                        descuento = 40;
                        break;
                    default:
                        descuento = 30
                        break;
                }
                
            }

            else if(cantidadDeLamparas == 4)
            {
                switch(marcaLamparas)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 25;
                        break;
                    default:
                        descuento = 20;
                        break;
                }
                
            }
            
            else if(cantidadDeLamparas == 3)
            {
                switch(marcaLamparas)
                {
                    case "ArgentinaLuz":
                        descuento = 15;
                        break;
                    case "FelipeLamparas":
                        descuento =10
                        break;
                    default:
                        descuento = 5;
                }
                
            }

            else if(cantidadDeLamparas < 3)
            {
                descuento = 0;
            }  

        descuento = descuento;
        descuento = 1 - descuento/100;

        precioFinal = cantidadDeLamparas * precioLamparas;

        precioFinalConDescuento = precioFinal * descuento;

        document.getElementById("txtIdprecioDescuento").value =  precioFinalConDescuento.toFixed(2);

        if(precioFinalConDescuento > 120)
        {
            ingresosBrutos = 10;
            ingresosBrutos = 1 + 10/100;
    
            precioConImpuesto = precioFinalConDescuento * ingresosBrutos - precioFinalConDescuento;
    
            mensaje = "Usted pago " + precioConImpuesto.toFixed(2) + " de IIBB.";
    
            alert(mensaje);
        }





    
        







}
