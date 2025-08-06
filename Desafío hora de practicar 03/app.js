/*let numeroSecreto = 0;
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no acertó.
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto!");
  asignarTextoElemento("p", `Indica un número del 1 al 10`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //Limpiar la caja.
  limpiarCaja();
  //Indicar mensaje de intervalos de números.
  //Generar el numero aleatorio.
  //Inicializar el número de intentos.
  condicionesIniciales();
  //Deshabilitar el boton de nuevo juego.
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
//
function calcularDobleTriple(numero) {
  const doble = numero * 2;
  const triple = numero * 3;

  return `El doble de ${numero} es ${doble} y el triple es ${triple}.`;
}
*/
//1.Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function masaCorporal(altura, peso) {
  return (imc = peso / altura ** 2);
}
console.log(masaCorporal(1.6, 95));

//2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}

let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

//3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function cambioDolar(dolar) {
  var valorDeDolar = 4.8;
  var soles = dolar * valorDeDolar;
  return soles;
}
let soles = parseFloat(prompt("¿Cuantos Dolares deseas convertir a Soles:?"));
console.log(`Ingreso, ${soles} dolares`);
let valorDelSol = cambioDolar(soles);
alert(`${soles} dolares es igual a ${valorDelSol} soles `);
console.log(`Sus ${soles} dolares es igual a ${valorDelSol} soles`);

//4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function areaYPerimetro(largo, ancho) {
  largo = parseFloat(prompt("Medida de largo: "));
  console.log(largo);
  ancho = parseFloat(prompt("Medida de ancho: "));
  console.log(ancho);
  resultadoPerYAre = alert(
    `El perimero es ${(largo + ancho) * 2} m y el area ${largo * ancho} m`
  );
}
areaYPerimetro();

//5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function circular(radio) {
  radio = parseInt(prompt("Ingrese el radio de la circunferencia: "));
  resultadoCir = alert(
    `El perimetro es : ${3.14 * (radio * 2)} y el area ${
      3.14 * (radio * radio)
    }`
  );
}
circular();

//6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaDeMultiplicar(numer) {
  numer = parseInt(prompt("Ingresa el número que deseas la tabla: "));
  let resulta = 0;
  for (let conta = 1; conta < 12 + 1; conta++) {
    resulta = alert(`${numer} por ${conta} es ${numer * conta}`);
  }
  return;
}
tablaDeMultiplicar();
