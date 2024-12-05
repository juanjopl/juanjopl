const text1 = `Antes de que continúe y conozca mis proyectos y habilidades, quiero que sepa que soy un desarrollador web que hace poco terminó sus estudios en DAW. Estoy listo para comenzar mi carrera de forma profesional, siempre con muchas ganas de seguir aprendiendo y con una ambición inimaginable`;
const text2 = `Después de esto, ya está list@ para conocer qué es lo que he hecho en mi primer año.`;

const id1 = document.getElementById("parrafo1");
const id2 = document.getElementById("parrafo2");

function typeText(text, id, delay = 10) {
    let i = 0;

    function write() {
        if (i < text.length) {
            id.textContent += text[i];
            i++;
            setTimeout(write, delay);
        }
    }

    write();
}

function type() {
    typeText(text1, id1, 10);
    setTimeout(() => typeText(text2, id2, 10), text1.length * 10 + 1500);
}

window.addEventListener("load", type);