let d = document;
let $enlace = d.querySelector(".enlace");

// console.log($enlace);
// console.log($enlace.attributes);
// console.log(getComputedStyle($enlace));
// console.log(getComputedStyle($enlace).getPropertyValue("color"));

// console.log($enlace.getAttribute("href"));
// console.log($enlace.setAttribute("href", "https://google.com.ar"));

// console.log($enlace.style);
// console.log($enlace.attributes.style.value);

// En este caso la estoy agergando al objeto como si no existiera, pero ya existe
$enlace.style.setProperty("font-size", "40px");

// En este caso voy a la prop que ya esta anidada, por defecto va a estar vacia -> ""
// Como ya existen le puedo reasignar los valores
$enlace.style.textDecoration = "none";
$enlace.style.border = "2px solid red";
$enlace.style.borderRadius = "6px";
$enlace.style.padding = "6px";

// --------------------------------------
let $html = d.documentElement, //acceso a las variables css
  $body = d.body;

// console.log($html);
// console.log($body);

let greyColor = getComputedStyle($html).getPropertyValue("--grey-color");
let yellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// console.log(greyColor);
// console.log(yellowColor);

$body.style.backgroundColor = greyColor;
$body.style.color = yellowColor;

// --------------------------------------
let $enlace2 = d.querySelector(".enlace2");
// console.log($enlace2.getAttribute("class"));
// console.log($enlace2.classList);

$enlace2.classList.add("agregar-estilos");
$enlace2.classList.remove("agregar-estilos");

// EVENTOS
// console.log(window); // Para ver todos los eventos que podemos usar

let $boton = d.getElementById("boton");

$boton.onclick = () => {
  $boton.classList.add("agregar-estilos");
};

const holaMundo = (nombre = "Axel") => {
  alert(`Hola ${nombre}`);
};

    // $boton.onclick = holaMundo; // No lleva paréntesis la función que le paso, si lo hago se ejecuta automaticamente

// Cuando suceda tal evento, ejecutame tal callback
// No se le suele pasar la función porque surgen problemas con los parametros. Evito hoisting
    // $boton.addEventListener("click", holaMundo);

// En este caso si la tengo que llamar con parentesis dentro de la función anínima
// No nos podemos saltear el paso de crear antes la función, si le pasamos los parámetros a la f.anónima no va a funcionar
$boton.addEventListener("click", () => {
  holaMundo("Pepe");
});

// ----------------------
let $divEventos = d.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
    e.stopPropagation();
    console.log(`Hola, te saluda ${this.className}, el click lo origino ${e.target.className}`)
}

$divEventos.forEach(function (div) {
    div.addEventListener("click", flujoEventos)
})

// ----------
// Entro a todo el documento entero
// Solo corto la propagación por defecto de la etiqueta <a> que esta dentro de la class .seccion
d.addEventListener("click", function(e) {
    console.log("Hiciste click en ", e.target)
    // if (e.target.matches(".seccion a")) {
    //     e.preventDefault()
    // }
    e.target.matches(".seccion a") && e.preventDefault(); // Forma simple de escribir un if
})
