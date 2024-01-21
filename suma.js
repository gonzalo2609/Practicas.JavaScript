/* let datoA= parseInt(prompt("Ingrese Numero A"));
   let datoB= parseInt(prompt("Ingrese Numero B"));

   let suma = parseInt(datoA+datoB);
   let resta= parseInt(datoA-datoB);
   let multiplicacion= parseInt(datoA*datoB);
   let division= parseInt(datoA/datoB);

   alert('La Suma es: '+ suma +
      '\nLa Resta es: ' + resta +
      '\nLa Multiplicacion es: ' + multiplicacion +
      '\nLa Division es: ' + division);

   console.log('La Suma es: ' + suma +
      '\nLa Resta es: ' + resta +
      '\nLa Multiplicacion es:' + multiplicacion +
      '\nLa Division es: ' + division); */


const sumar = (num1,num2) => {
return parseInt(num1) + parseInt(num2);     
}

const restar = (num1,num2) =>{
return parseInt(num1) - parseInt(num2);
}

const multiplicar= (num1,num2) => {
return parseInt(num1) * parseInt(num2);
}

const dividir= (num1,num2) =>{

return parseInt(num1) / parseInt(num2);

}

alert("¿Que operación desea realizar?");
      let operacion= prompt(" 1: SUMA, 2: RESTA, 3: MULTIPLICAR, 4: DIVIDIR ");

 if (operacion == 1) {
      let num1= prompt( " PRIMER NUMERO PARA SUMAR.");
      let num2= prompt( "SEGUNDO NUMERO PARA SUMAR.");
      let resultado= sumar(num1 , num2);
      alert (`EL RESULTADO DE LA SUMA ES: ${resultado} `);
 }

 else if (operacion == 2) {
      let num1= prompt(" PRIMER NUMERO PARA RESTAR.");
      let num2= prompt( " SEGUNDO NUMERO PARA RESTAR.");
      let resultado= restar(num1 , num2);
            alert (`EL RESULTADO DE LA RESTA ES: ${resultado} `);
      }


else if (operacion == 3) {
      let num1= prompt(" PRIMER NUMERO PARA MULTIPLICAR.");
      let num2= prompt( " SEGUNDO NUMERO PARA MULTIPLICAR.");
      let resultado= multiplicar(num1 , num2);
      alert (`EL RESULTADO DE LA MULTIPLICACIÓN ES: ${resultado} `);
            }


 else if (operacion == 4) {
      let num1= prompt(" EL PRIMER NUMERO PARA DIVIDIR.");
      let num2= prompt( " EL SEGUNDO NUMERO PARA DIVIDIR.");
      let resultado= dividir(num1 , num2);
       alert (`EL RESULTADO DE LA DIVISIÓN ES: ${resultado} `); 

  }  else {  
  alert(" NO SE PUDO COMPLETAR LA OPERACIÓN POR QUE NO ESCRIBISTE UNO DE LOS NUMEROS");
}
 