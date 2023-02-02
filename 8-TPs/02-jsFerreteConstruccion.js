/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetroRectangulo;
    let mensaje;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetroRectangulo = (largo + ancho) * 2;

    mensaje = perimetroRectangulo * 3;

    alert(mensaje);

    
}
function Circulo () 
{
	let radio;
    let perimetroCirculo;
    let mensaje;

    radio = document.getElementById("txtIdRadio").value;

    radio = parseInt(radio);

    perimetroCirculo = (radio * radio) * 3.14;

    mensaje = perimetroCirculo * 3;

    alert(mensaje);


}
function Materiales () 
{
    let largo;
    let ancho;
    let superficieRectangulo;
    let bolsasDeCal;
    let bolsasDecemento;
    let mensaje;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    superficieRectangulo = largo * ancho;

    bolsasDecemento = superficieRectangulo * 2;
    bolsasDeCal     = superficieRectangulo * 3;

    mensaje = "bolsas de cemento necesarias " + bolsasDecemento + " ,bolsas de cal necesarias " + bolsasDeCal;

    alert(mensaje);
    




    
	
}