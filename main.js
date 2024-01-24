 /*  EJEMPLO 1
 
     let nombre= "homero";
     let apellido="simpson";
     let edad= 45;

     alert(nombre);
     alert(apellido);
     alert(edad);  */



/*  EJEMPLO 2 

      const CIUDAD1= "BUENOS AIRES";
      const CIUDAD2= "ROSARIO";
      const CIUDAD3= "IGUAZÚ";
      const CIUDAD4= "BARILOCHE";
      const CIUDAD5= "TILCARA";

      alert( CIUDAD1);
      alert(CIUDAD2);
      alert(CIUDAD3);
      alert(CIUDAD4);
      alert(CIUDAD5);   */



/*  EJEMPLO 3

      let nombre= "GONZALO";
      let apellido= "GALVÁN";
      let numeroCarnet= 35812995;
      let direccion= "BARRIO INDEPENDENCIA";
      let sexo= "MASCULINO";

      let carnet="\ NOMBRE: " + nombre +
                  "\n APELLIDO: " + apellido +
                  "\n NUMERO DE CARNET: " + numeroCarnet +
                  "\n DIRECCION: " + direccion +
                  "\n SEXO: " +sexo;
                  alert(carnet);  */
      

/*     EJEMPLO 4    REVISAR CONDICION

      alert("INGRESE 4 NOMBRES");
      let nombre1= prompt ("INGRESE PRIMER NOMBRE");
      let nombre2= prompt("INGRESE SEGUNDO NOMBRE");
      let nombre3= prompt("INGRESE TERCER NOMBRE");
      let nombre4= prompt("INGRESE CUARTO NOMBRE");
      

      if(((nombre1 != "") && (nombre2 != "")) && ((nombre3 !="" && nombre4 !=""))){
        let resultado= alert ( "EL PRIMER NOMBRE ES: "  +nombre1+
        "\n EL SEGUNDO NOMBRE ES: "   + nombre2+
        "\n EL TERCER NOMBRE ES: "   + nombre3+
        "\n EL CUARTO NOMBRE ES: "   + nombre4);


        
      }else{
        alert("LO SIENTO TE FALTO INGRESAR UN NOMBRE");
      }   */
 
     
/* EJEMPLO 5 


    let precio1= parseFloat(prompt("INGRESE UN MONTO DE DINERO."));
    let descuento20= precio1- (precio1 * 0.2);
    let descuento30= precio1 - (precio1 * 0.3);
    alert( " CON DESCUENTO DEL 20% ES: " + descuento20);
    alert( " CON DESCUENTO DEL 30% ES: " + descuento30);
    
    let precio2= parseFloat(prompt("INGRESE OTRO MONTO DE DINERO."));
    let precio2Descuento20= precio2 - (precio2 * 0.2);
    let precio2Descuento30= precio2 - (precio2 * 0.3);
    alert( " CON DESCUENTO DEL 20% ES: " + precio2Descuento20);
    alert( " CON DESCUENTO DEL 30% ES: " + precio2Descuento30);  */


    /* EJEMPLO 6


    let nombre= "gonzalo"; 
    let nombre1="GONZALO";
    let dato= prompt(" INGRESE ENTRE DOS NOMBRES: GONZALO, VALENTINA");
    if ((nombre == dato) || (nombre1 == dato)){
        alert("FUI YO");
     } else { alert("NO FUI YO");
            
        }    */



     /* EJEMPLO 7


    let ingreso= prompt( " INGRESE UNA TECLA ENTRE X, Y, Z"); 
    if ((ingreso == "y") || ( ingreso == "Y")) {
    alert("INGRESASTE LA TECLA CORRECTA")
    } else {
        alert(" INGRESASTE LA INCORRECTA")
    }; */


    
 /* EJEMPLO 8

    let pedidoIngreso= prompt("Elige a un personaje con las opciones del 1 al 4");
    if( pedidoIngreso == 1){
        alert(" ELEGISTE A HOMERO.");
    }else if ( pedidoIngreso == 2){
        alert(" ELEGISTE A MARGE.");
    } else if (pedidoIngreso == 3){
        alert(" ELEGISTE A BART.");
    }else if(pedidoIngreso == 4){
    alert("ELEGISTE A LISA.");
    }else{alert("NO SELECCIONASTE EL NUMERO INDICADO.")}; */


/*   EJEMPLO 9
    
    let numeroIngresado= prompt("INGRESE UN NUMERO HASTA EL 150");
    if ((numeroIngresado <50)  && ( numeroIngresado != "")){
    alert(" PRESUPUESTO BAJO.");
    }else if ( (numeroIngresado < 100) && ( numeroIngresado != "")){
        alert(" PRESUPUESTO MEDIO.");
    } else if ( (numeroIngresado <= 150) && (numeroIngresado != "") ){
        alert(" PRESUPUESTO ALTO");
    }else if (numeroIngresado == ""){
     alert("NO  INGRESASTE NINGUN VALOR");
    }else {  
        alert("ERROR");} */



    /* EJEMPLO 10


    alert( "INGRESE 4 PRODUCTOS DE ALMACÉN");
    let producto1= prompt( "INGRESE PRODUCTO 1.");
    let producto2= prompt( "INGRESE PRODUCTO 2.");
    let producto3= prompt( "INGRESE PRODUCTO 3.");
    let producto4= prompt( "INGRESE PRODUCTO 4.");
    if (producto1 != "" && (producto2 != "") && (producto3 !="") && (producto4 !="" )) {
     let todosProductos = " 1) " + producto1+ 
                          "\n 2) " + producto2+
                          "\n 3) " + producto3+
                          "\n 4) " + producto4;
     alert(todosProductos); }    */
     


