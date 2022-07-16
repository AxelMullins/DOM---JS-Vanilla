// Multiples métodos que reciben selectores

// Selector de etiqueta - "HTMLCollection"
console.log(document.getElementsByTagName("li"));

// Selector de clase - "HTMLCollection"
console.log(document.getElementsByClassName("elemento"));

// Selector de nombre. Accedemos por medio de un nodo - "NodeList"
console.log(document.getElementsByName("name"));
console.log(document.getElementsByName("number"));
console.log(document.getElementsByName("email"));

// Selector de Id
console.log(document.getElementById("titulo"));

// Selector universal individual
console.log(document.querySelector("#seccion")); // Mejor usar getElementById, es mas rápido.
console.log(document.querySelector(".subtitulo"));
console.log(document.querySelector("[name='name']"));
console.log(document.querySelector("h2"));

// Selector universal colectivo o de coleccion
console.log(document.querySelectorAll("li"));

// ---------------------------------------------
let d = document;

// Obtener atributo
console.log(d.querySelector("ol").getAttribute("name"));

// Setear atributo
d.querySelector("a").setAttribute("target", "_blank");

// Le asigno " $ " para sabe que tiene contenido del DOM
let $articulo = d.getElementById("articulo");
let texto = 
    `<p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, commodi.
    </p>`;

console.log($articulo);
$articulo.textContent = texto; // Reasigna-reemplaza el contenido existente
$articulo.innerHTML = texto; // Respeta la etiquetas internas - Asigna dentro de <article>
$articulo.outerHTML = texto; // Desaparece la etiqueta article - Reemplaza <article>

// DOM Traversing o recorriendo el DOM
let $estaciones = d.getElementById("estaciones");
console.log($estaciones.children); // Todos los li
console.log($estaciones.children[2]); // "Invierno"
console.log($estaciones.firstElementChild);
console.log($estaciones.lastElementChild);
console.log($estaciones.parentElement); // Elemento padre, en este caso la <section>

// Creando elementos del DOM
let $cards = d.querySelector('.cards'),
    $figure = d.createElement('figure'),
    $img = d.createElement('img'),
    $figcaption = d.createElement('figcaption'),
    $figcaptionText = d.createTextNode('Si que eres lento Homero');

$cards.appendChild($figure);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$figcaption.appendChild($figcaptionText);

$img.setAttribute("src", "https://i.pinimg.com/originals/4c/f0/0d/4cf00df046e9f2fc35f39543eac13761.jpg");
$img.setAttribute("alt", "Homero");
$img.setAttribute("width", "50%");

// Crear una lista e insertarle data iterando un array
let estaciones = ["Verano", "Otoño", "Invierno", "Primavera"];
let $ul = d.createElement("ul");

d.write("<h3>Estaciones del año</h3>") // Escribir algo puntual
d.body.appendChild($ul);

estaciones.forEach(item => {
    var $li = d.createElement('li')
    $li.textContent = item;
    $ul.appendChild($li)
})

// Crear muchas tarjetas
let $tarjetas = d.querySelector(".tarjetas"),
    $template = d.getElementById("template-tarjetas").content,
    // Fragmento
    $fragment = d.createDocumentFragment();

    console.log($template)

let contenidoTarjetas = [
    {title: "Homero", img: "https://indiehoy.com/wp-content/uploads/2022/04/los-simpson.jpg"},
    {title: "Lisa", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_R5x6Pm0Bxk5nKpnlJihH5xKLbqWPImcGzf9l6Bm6QePUHO69frAB4evnnc5dW-AfxYg&usqp=CAU"},
    {title: "Bart", img: "https://i.discogs.com/jtlykYk336toKQUjrLIQNtGJaF0vVRn8ORrWRvDIUW0/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEwMTA4/MjMtMTMzNTcyODAx/Ni5wbmc.jpeg"}
]

contenidoTarjetas.forEach(item => {
    // Insertar atributos a la IMG
    $template.querySelector("img").setAttribute("src", item.img)
    $template.querySelector("img").setAttribute("alt", item.title)
    $template.querySelector("img").setAttribute("width", "auto")
    $template.querySelector("img").setAttribute("height", "150px")

    // Insertar el figcaption text
    $template.querySelector("figcaption").textContent = item.title;

    // Clonamos el modelo del template y los insertamos en el fragmento
    let $clone = d.importNode($template, true)
    // $tarjetas.appendChild($clone) // Si hacemos esto va a impactar 3 veces en el DOM
    $fragment.appendChild($clone)
})

$tarjetas.appendChild($fragment) // De este modo ya viene con todos los clones, tiene menor impacto en el DOM
$tarjetas.style.display = "flex"