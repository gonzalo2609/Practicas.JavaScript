alert("BIENVENIDO:\n (SI ERES MENOR DE EDAD NO PODRAS ACCEDER A LA PAGINA)");
let nombre=prompt('INGRESE SU NOMBRE:');
let edad=prompt("INGRESE SU EDAD");
if (edad <=17){
 alert("LO SIENTO NO PUEDES ACCEDER A LA PAGINA");
}
console.log(nombre);
console.log(edad);
let opinion=prompt("PODRIAS CALIFICARME? RESPONDE CON SI O CON NO");
if (opinion=="si"){
let valorCalificacion=prompt("INGRESE SU CALIFICACIÓN");
alert("MUCHAS GRACIAS POR TU OPINIÓN.")}
if (opinion=="no"){
alert("Muchas Gracias por tu visita.");} 