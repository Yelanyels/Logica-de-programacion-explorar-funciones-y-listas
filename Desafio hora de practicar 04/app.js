/*
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

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
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  // Si ya sorteamos todos los números.
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
  } else {
    //Si numero generado esta incluido en la lista.
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto!");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  console.log(numeroSecreto);
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalo de números
  //Generar el número aleatorio
  //Inicializar el número intentos
  condicionesIniciales();
  //Deshabilitar el botón de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
*/
//1.Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//2.Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajeDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

//3.Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajeDeProgramacion.push("Java", "Ruby", "GoLang");

//4.Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLenguaje() {
  lenguajeDeProgramacion.forEach((lenguaje) => {
    console.log(lenguaje);
  });
}
mostrarLenguaje();

//5.Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarLenguajeInverso() {
  for (let i = lenguajeDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguajeDeProgramacion[i]);
  }
}
mostrarLenguajeInverso();

//6.Crea una función que calcule el promedio de los elementos en una lista de números.
function promedioLenguaje(lista) {
  let suma = 0;
  for (i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}
let numeros = [10, 20, 30, 40, 50];
let media = promedioLenguaje(numeros);
console.log("Média: ", media);

//7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function numeroMayorMenor(listas) {
  let mayor = listas[0];
  let menor = listas[0];
  for (let i = 1; i < listas.length; i++) {
    if (listas[i] > mayor) {
      mayor = listas[i];
    }
    if (listas[i] < menor) {
      menor = listas[i];
    }
  }
  console.log("Mayor:", mayor);
  console.log("Menor:", menor);
}
let numero = [15, 8, 25, 5, 12];
numeroMayorMenor(numero);

//8.Crea una función que devuelva la suma de todos los elementos en una lista.
function sumarLista(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

// Ejemplo de uso:
numero = [1, 2, 3, 4, 5];
let total = sumarLista(numero);
console.log("La suma de los elementos es:", total); // Imprime: La suma de los elementos es: 15

//9.Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function buscarElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna la posición si encuentra el elemento
    }
  }
  return -1; // Retorna -1 si el elemento no está en la lista
}

// Ejemplo de uso:
let miLista = [10, 20, 30, 40, 50];
let elementoBuscado = 30;
let posicion = buscarElemento(miLista, elementoBuscado);

if (posicion !== -1) {
  console.log(
    "El elemento",
    elementoBuscado,
    "se encuentra en la posición",
    posicion
  );
} else {
  console.log("El elemento", elementoBuscado, "no se encuentra en la lista");
}

//10.Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
  if (lista1.length !== lista2.length) {
    return "Las listas deben tener el mismo tamaño";
  }

  let listaSuma = [];
  for (let i = 0; i < lista1.length; i++) {
    listaSuma.push(lista1[i] + lista2[i]);
  }

  return listaSuma;
}

// Ejemplo de uso:
let numeros1 = [1, 2, 3, 4, 5];
let numeros2 = [6, 7, 8, 9, 10];

let resultado = sumarListas(numeros1, numeros2);
console.log("La lista con la suma de los elementos es:", resultado); // Imprime: La lista con la suma de los elementos es: [7, 9, 11, 13, 15]

//11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function calcularCuadrados(lista) {
  let listaCuadrados = [];
  for (let i = 0; i < lista.length; i++) {
    listaCuadrados.push(lista[i] * lista[i]);
  }
  return listaCuadrados;
}

// Ejemplo de uso:
numeros = [1, 2, 3, 4, 5];
let cuadrados = calcularCuadrados(numeros);
console.log("La lista con los cuadrados es:", cuadrados); // Imprime: La lista con los cuadrados es: [1, 4, 9, 16, 25]
