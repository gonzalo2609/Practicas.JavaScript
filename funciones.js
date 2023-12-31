
// SUMA

function suma (a,b) {

    let sum= a+b;
    alert("La suma es:" + " " + sum);
    
}

suma (23,4);





// FUNCION MENOR QUE

function esMenorQue(a,b) {
 

   return a < b;

}

alert(esMenorQue(3,6));





// PATRÓN DE RETORNO ANTICIPADO

function miFuncion(){

     alert("hola");
    ;
       return  "mundo";
        alert("adios mundo");
}
alert(miFuncion());

// OTRO EJEMPLO 

function calcularRaizCuadrada(num) {

  if (num < 0) {
    return undefined;
  }

  return Math.sqrt(num);  
}

alert(calcularRaizCuadrada(81));

// CARTAS DE BLACK JACK

let conteo= 0; 

function contarCartas(carta) {
let decision;
  switch(carta) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      conteo ++;
      break;

      case 10:
      case 'j':
      case 'Q':
      case 'K':
      case 'A':
      conteo --;
      break;


    default:
      break;
    }
  
    if (conteo > 0) {
    desicion= "APOSTAR";
    } else { 
      desicion="ESPERAR";
        }

return conteo + " " + desicion;

}
 alert(contarCartas(2));
 alert(contarCartas(4));
 alert(contarCartas(6));
 alert(contarCartas("A"));
 alert(contarCartas("K"));
 alert(contarCartas("J"));
 alert(contarCartas(10));