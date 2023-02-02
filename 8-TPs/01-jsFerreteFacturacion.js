/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let producto1;
    let producto2;
    let producto3;
    let mensaje;

    producto1 = document.getElementById("txtIdPrecioUno").value;
    producto2 = document.getElementById("txtIdPrecioDos").value;
    producto3 = document.getElementById("txtIdPrecioTres").value;

    producto1 = parseInt(producto1);
    producto2 = parseInt(producto2);
    producto3 = parseInt(producto3);

    mensaje = producto1 + producto2 + producto3;

    alert(mensaje);

}
function Promedio () 
{
	let producto1;
    let producto2;
    let producto3;
    let mensaje;

    producto1 = document.getElementById("txtIdPrecioUno").value;
    producto2 = document.getElementById("txtIdPrecioDos").value;
    producto3 = document.getElementById("txtIdPrecioTres").value;

    producto1 = parseInt(producto1);
    producto2 = parseInt(producto2);
    producto3 = parseInt(producto3);

    mensaje = (producto1 + producto2 + producto3) / 3;

    alert(mensaje);


}
function PrecioFinal () 
{
    let producto1;
    let producto2;
    let producto3;
    let mensaje;

    producto1 = document.getElementById("txtIdPrecioUno").value;
    producto2 = document.getElementById("txtIdPrecioDos").value;
    producto3 = document.getElementById("txtIdPrecioTres").value;

    producto1 = parseInt(producto1);
    producto2 = parseInt(producto2);
    producto3 = parseInt(producto3);

    mensaje = (producto1 + producto2 + producto3) * 1.21;

    alert(mensaje);
	
}