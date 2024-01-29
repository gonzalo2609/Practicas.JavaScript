/*

                         // ARREGLOS

let array= [ " GONZALO " , " DANIEL " , " VALENTINA " , " MAYRA " , " FIORELLA " ] ;

alert(array);





                         // ACCEDER A LOS INDICES DE UN ARREGLO


let acceso= [" ESTOY " , " APREDIENDO " , " JAVASCRIPT ", " CON GONZALO "];

// INDICES       0             1                2               3 

alert( acceso);

alert (acceso [0] );
alert (acceso [1] );
alert (acceso [2] );
alert (acceso [3] );





                         // MODIFICAR INDICE DE UN ARREGLO ( LOS ARREGLOS SON MUTABLES, ASI QUE SI SE PUEDEN CAMBIAR EL VALOR DE LOS INDICES)

let valor = [1, 2, 3, 4];

// INDICES   0  1  2  3


alert (valor);


valor [0] = 5;
valor [1] = 6;
valor [2] = 7;
valor [3] = 8;

alert (valor);





                         // ACCEDER A ARREGLOS ANIDADOS

let anidacion= [ [" GONZALO ", 32] , [" VALENTINA " , 5] , [" MAYRA " , 29] ];

// INDICES               0                    1                    2

alert(anidacion);


alert(anidacion[0]);

alert(anidacion[1]);

alert(anidacion[2]);

alert(anidacion[3]);





                          //  ACCEDER A INDICES E INDICES INTERNOS


let arrayAnidado = [ [ 1 , 2 , 3 ] , [ 4 , 5 , 6] , [7 , 8 , 9 , 10]];

alert(arrayAnidado);

// indices                 0               1               2

// indices internos    0   1   2       0   1   2     0   1   2   3



alert(arrayAnidado [0] );

alert(arrayAnidado [1] );

alert(arrayAnidado [2] );


alert(arrayAnidado [0] [2] );

alert(arrayAnidado [1] [0] );

alert(arrayAnidado [2] [3] ); 





                          // METODO  PUSH () => AGREGA UN ELEMENTO AL FINAL DEL ARRAY


 let estaciones = [ " OTOÑO " , " INVIERNO " , " PRIMAVERA " ];

 alert (estaciones);

 alert ( JSON.stringify (estaciones)); 


 estaciones.push ( " VERANO ");

 alert (estaciones);

 alert ( JSON.stringify (estaciones)); */





                          // METODO POP () => REMUEVE EL ÚLTIMO ELEMENTO DEL ARRAY


 /*  let motos = [ " CG 150 " , " CRYPTON " , " WAVE " , " TWISTER " , " C 90 " , " COROLLA " ];

   alert ( motos);

alert ( JSON.stringify (motos) );

motos.pop ();

alert (motos);

alert (JSON.stringify (motos) ); 





                          //  METODO UNSHIFT () => AGREGA UN ELEMENTO AL PRINCIPIO DEL ARRAY


let rutina = [ " ALMUERZO " , " MERIENDA " , " CENA " ]; 

alert (rutina);

alert( JSON.stringify (rutina) );

rutina.unshift (" DESAYUNO ");

alert (rutina);

alert ( JSON.stringify (rutina));  


                          // METODO SHIFT() REMUEVE EL PRIMER ELEMENTO DEL ARRAY

let rutinaDelDia = [ "HOLA ", 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ];

alert ( rutinaDelDia);

alert ( JSON.stringify (rutinaDelDia));

rutinaDelDia.shift ();

alert(rutinaDelDia);

alert( JSON.stringify(rutinaDelDia)); */





let listaDeCompras = [ [ " CEREAL " , 3 ] , [ " LECHE " , 2 ] , [ " PAN " , 5 ] , [ " REFRESCO " , 4 ] ];
 
alert ( listaDeCompras);


alert ( " VOY A COMPRAR " + listaDeCompras [0] [1] + " UNIDADES DE " + listaDeCompras [0] [0] + "." ); 

alert ( " VOY A COMPRAR " + listaDeCompras [1] [1] + " UNIDADES DE " + listaDeCompras [1] [0] + "." );

alert ( " VOY A COMPRAR " + listaDeCompras [2] [1] + " UNIDADES DE " + listaDeCompras [2] [0] + "." ); 

alert ( " VOY A COMPRAR " + listaDeCompras [3] [1] + " UNIDADES DE " + listaDeCompras [3] [0] + "." ); 
  


listaDeCompras.push ( [ " SALCHICHAS " , 3 ]);

listaDeCompras.unshift( [ " manteca " , 6 ]);

alert (listaDeCompras); 

listaDeCompras.pop();

alert (listaDeCompras);

listaDeCompras.shift();

alert(listaDeCompras);
