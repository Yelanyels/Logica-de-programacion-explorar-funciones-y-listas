/*let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(typeof numeroDeUsuario);
  console.log(numeroSecreto);
  console.log(typeof numeroSecreto);
  console.log(numeroDeUsuario);
  console.log(numeroDeUsuario === numeroSecreto);
  return;
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento("h1", "Juego del número secreto!");
asignarTextoElemento("p", "Indica un número del 1 al 100");
*/

//1.Crear una función que muestre "¡Hola, mundo!" en la consola.
function mostrarHola() {
  console.log("¡Hola Mundo!");
}
mostrarHola();

//2.Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}
mostrarHolaNombre("Junnior");

//3.Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function duplicarNumero(numero) {
  return numero * 2;
}
let resultadoDoble = duplicarNumero(5);
console.log(resultadoDoble);

//4.Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedioDeNumero(a, b, c) {
  return (a + b + c) / 3;
}
let promedioTotal = Math.round(promedioDeNumero(5, 8, 55));
console.log(promedioTotal);
//para redondear el numero que tenga decimales
/*let promedio = 8.6;
let promedioRedondeado = Math.round(promedio); // Redondea a 9
console.log(promedioRedondeado);

let promedio2 = 8.2;
let promedioRedondeado2 = Math.round(promedio2); // Redondea a 8
console.log(promedioRedondeado2);

let promedio3 = 8.5;
let promedioRedondeado3 = Math.round(promedio3); // Redondea a 9
console.log(promedioRedondeado3);
*/

//5.Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function devolverMayor(a, b) {
  return a > b ? a : b;
}
let numeroMayor = devolverMayor(5, 19);
console.log(numeroMayor);

//6.Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function multiplicar(numero) {
  return numero * numero;
}
let resultado = multiplicar(8);
console.log(resultado);
