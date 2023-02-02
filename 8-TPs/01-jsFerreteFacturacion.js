/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let productoUno;
    let productoDos;
    let productoTres;
    let mensaje;

    productoUno = document.getElementById("txtIdPrecioUno").value;
    productoDos = document.getElementById("txtIdPrecioDos").value;
    productoTres = document.getElementById("txtIdPrecioTres").value;

    productoUno = parseInt(productoUno);
    productoDos = parseInt(productoDos);
    productoTres = parseInt(productoTres);

    mensaje = productoUno + productoDos + productoTres;

    alert(mensaje);

}
function Promedio () 
{
	let productoUno;
    let productoDos;
    let productotres;
    let promedio;
    let mensaje;

    productoUno = document.getElementById("txtIdPrecioUno").value;
    productoDos = document.getElementById("txtIdPrecioDos").value;
    productotres = document.getElementById("txtIdPrecioTres").value;

    productoUno = parseInt(productoUno);
    productoDos = parseInt(productoDos);
    productotres = parseInt(productotres);

    promedio = (productoUno + productoDos + productotres) / 3;

    mensaje = "el promedio de los precios es " + promedio;

    alert(mensaje);


}
function PrecioFinal () 
{
    let productoUno;
    let productoDos;
    let productoTres;
    let mensaje;
    let IVA;  //en caso de que el nombre de la variable implique siglas se escribir en MAYUSCULA
    let sumaPrecios;
    let precioFinal;

    productoUno = document.getElementById("txtIdPrecioUno").value;
    productoDos = document.getElementById("txtIdPrecioDos").value;
    productoTres = document.getElementById("txtIdPrecioTres").value;

    productoUno = parseInt(productoUno);
    productoDos = parseInt(productoDos);
    productoTres = parseInt(productoTres);

    IVA = 21;
    IVA = 1 + IVA / 100;

    sumaPrecios = productoUno + productoDos + productoTres;

    precioFinal = sumaPrecios * IVA;

    mensaje = precioFinal

    alert(mensaje);
	
}