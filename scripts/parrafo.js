const text1 = `Antes de scrollear y conocer mis proyectos y mis habilidades, debes saber que soy un desarrollador web que hace poco termino sus estudios en DAW, y estoy listo para comenzar mi carrera de forma profesional, siempre con muchas ganas de seguir aprendiendo y con una ambición inimaginable.`;
const text2 = `Después de esto, ya estás list@ para conocer qué es lo que he hecho en mi primer año.`;

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