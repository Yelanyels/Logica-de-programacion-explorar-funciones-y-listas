//1.Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";

//2.Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function mensajeConsola() {
  alert("El botón fue clicado");
}

//3.Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function mostrarAlerta() {
  let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Brasil:");
  alert(`Estuve en ${ciudad} y me acordé de ti`);
}

//4.Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function mensajeJs() {
  alert("Yo amo JS");
}

//5.Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function mensajeDeSuma() {
  let primernumero = parseInt(prompt("Digita el primer número"));
  let segundonumero = parseInt(prompt("Digita el segundo número"));
  let resultado = primernumero + segundonumero;

  alert(`${primernumero} + ${segundonumero} = ${resultado}`);
}
