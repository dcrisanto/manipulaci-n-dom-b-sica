//las funciones document.. nos lo brinda el entorno de ejecución (navegador)

//seleccionando por el nombre de la etiqueta
const h1 = document.querySelector('h1'); 
const mainText = document.querySelector('.main-text');
const descriptionText = document.querySelector('#description-text');
const input = document.querySelector('input');

console.log({
    h1,
    mainText,
    descriptionText,
    input
});

h1.innerText = `MANIPULACIÓN DEL DEL <p>holaaaa</p>`; // agregando texto
h1.innerHTML = `<p>agregando elemento html</p>`; // agregando elemento html dentro de la etiqueta h1
let atriClass = h1.getAttribute('class'); //para leer el atributo class de h1
console.log(atriClass);
atriClass = h1.setAttribute('class', 'title-prueba'); //cambiar el valor de la propiedad class
atriClass = h1.classList.add('prueba'); // para agregarle una clase
atriClass = h1.classList.remove('prueba'); // removiendo la clase prueba
h1.classList.toggle('prueba'); // para eventos de js, add y remove dependiendo si tiene la clase o no.
h1.classList.contains('prueba'); // nos devuelve T o F dependiendo si el elemento tiene la clase prueba

input.value = '456'; // cambia el valor del input

const img = document.createElement('img'); // crea un elemento html
img.setAttribute('src', 'https://images.pexels.com/photos/11060014/pexels-photo-11060014.jpeg?cs=srgb&dl=pexels-albina-white-11060014.jpg&fm=jpg');
img.setAttribute('class', 'img');

// eliminando el elemento
//descriptionText.remove();
// eliminando el contenido
descriptionText.innerHTML = ''; 
descriptionText.appendChild(img);
