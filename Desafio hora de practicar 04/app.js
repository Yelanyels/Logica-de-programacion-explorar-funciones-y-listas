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

/*Contexto: Imagina que eres una persona desarrolladora que trabaja para Buscante, una importante tienda en línea de libros. Tu jefe te ha pedido que crees una función para sortear libros a los clientes. El sorteo debe hacerse de manera que todos los libros tengan la oportunidad de ser sorteados al menos una vez, y después de eso, el sorteo debe comenzar de nuevo. Recordaste la lección sobre la adición de la variable "numeroLimite" en el curso "Lógica de programación: explore funciones y listas". ¿Cómo implementarás el sorteo del libro teniendo en cuenta lo que se enseñó?

function sortearLibro() {
    let libroElegido = parseInt(Math.random() * numeroLimite + 1);
    let cantidadDeLibrosSorteados = listaDeLibrosSorteados.length;
    if (cantidadDeLibrosSorteados == numeroLimite) {
        listaDeLibrosSorteados = [];
    }
    // Código omitido
}
    */
/*//////////////////////////////////////////////////////////////////////////
Un array, arreglo o lista en JavaScript es una estructura de datos que permite almacenar y organizar múltiples valores en una sola variable. Los valores en un array pueden ser de cualquier tipo de dato, como números, strings, objetos, otros arrays, y así sucesivamente. Los arrays en JavaScript son indexados, lo que significa que cada valor dentro de ellos está asociado con un índice numérico, generalmente comenzando desde el índice 0.

Creando un array
Puedes crear un array en JavaScript declarando una variable y asignándole valores entre corchetes [].

let frutas = ["Manzana", "Uva", "Naranja"];

Accediendo a los valores Los elementos de un array se acceden mediante índices numéricos, que comienzan en 0.

Índice	Elemento
0	"Manzana"
1	"Uva"
2	"Naranja"

console.log(frutas[0]); // Salida: "Manzana"
console.log(frutas[2]); // Salida: "Naranja"

Añadiendo nuevos elementos
Para agregar un elemento al final del array, puedes usar el método push.

frutas.push("Fresa");
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja", "Fresa"]

Eliminando el último elemento
Para eliminar el último elemento, puedes usar el método pop.

frutas.pop();
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]

¿Qué lenguajes de programación utilizan arrays?
Aquí tienes una lista de algunos lenguajes de programación que utilizan arrays:

JavaScript
Python
Java
C++
C#
Ruby
PHP
Swift
Kotlin
Go

Otros lenguajes también admiten el uso de arrays o estructuras de datos similares para almacenar colecciones de valores. Aprender sobre arrays es importante porque desempeñan un papel fundamental en el desarrollo de aplicaciones de software.

Las listas o arrays proporcionan una manera eficiente de almacenar y acceder a conjuntos de datos, lo que permite a los programadores organizar la información de manera lógica y manipular estos datos de manera efectiva.

Con el conocimiento de cómo trabajar con arrays, es posible crear algoritmos más poderosos, resolver problemas de programación de manera más eficiente y crear aplicaciones más dinámicas e interactivas.

*/
