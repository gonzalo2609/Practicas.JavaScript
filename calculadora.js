/*let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt("ESCRIBE UN NÚMERO " );
      this.b = +prompt("ESCRIBE EL OTRO " );
    }
  };
  
  calculator.read();
  alert( "LA SUMA ES " + calculator.sum() );
  alert("LA MULTIPLICACIÓN ES " + calculator.mul() );
*/

/*let myInt= 5;
let myFloat= 6.6667;
myInt;
myFloat;
alert(typeof myFloat);
alert(typeof myInt);

let num1=30;
let num2=23;
alert(9* num1);
alert("el resultado de la division es: "+ num2/num1);
*/

let cantidad = prompt('INGRESAR CANTIDAD DE REPETICIONES');
let texto    = prompt('INGRESAR TEXTO A REPETIR');
for (let index = 0; index < cantidad; index++) {
    alert(texto);

}

let lados = prompt('INGRESAR CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
    if (index > 3) {
        break;
    }
    alert("lado");
}