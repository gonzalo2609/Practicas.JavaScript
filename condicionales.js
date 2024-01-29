let precio = parseInt( prompt(" INGRESE UN NÚMERO DEL 1 AL 100 ")); 

if ( precio < 20) {
     
    alert( "EL NÚMERO ES  MENOR A 20 "); 

} else if ( precio < 50) {

alert ( " EL NÚMERO ES MENOR A 50 ");

} else if ( precio < 70) {

    alert( " EL NÚMERO ES MENOR A 70 ")

} else if ( precio < 100 ) {

    alert( " EL NÚMERO ES MENOR A 100 ") 

} else if ( precio == 100) {

    alert( " EL NÚMERO ES 100 ");

} else {

alert ( " NO INGRESASTE EL NÚMERO INDICADO ");

}



let color = prompt ( "INGRESE UN COLOR ENTRE EL ROJO , VERDE , AZUL , BLANCO ");

if ( (color == "rojo") || ( color == "ROJO") ) {

    alert ( " EL COLOR INGRESADO FUE ' ROJO ' ");

} else if ( (color == "verde") || ( color == "VERDE")) {

alert ( " EL COLOR INGRESADO FUE ' VERDE ' ");

} else if ((color == "azul") || ( color == "AZUL")) {

alert( " EL COLOR INGRESADO FUE ' AZUL ' ");

} else if ((color == "blanco") || (color == "BLANCO")) {

alert( " EL COLOR INGRESADO ES ' BLANCO ' ");

}else {
    alert (" ERROR");
}

