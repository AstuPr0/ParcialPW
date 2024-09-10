// Función para cambiar el contenido del texto
function cambiarContenido() {
    const parrafo = document.querySelector('p');
    parrafo.textContent = 'La Institución Educativa Antonio Baraya es un referente en la educación de calidad en la región. Con un enfoque innovador y adaptado a las demandas actuales, esta escuela se distingue por su compromiso con el desarrollo integral de sus estudiantes. Ofrece una educación que integra la teoría con la práctica, promoviendo habilidades críticas y creativas a través de métodos pedagógicos contemporáneos. Su ambiente escolar está diseñado para incentivar el aprendizaje colaborativo y el crecimiento personal, apoyado por un equipo docente apasionado y comprometido. La Institución Educativa Antonio Baraya no solo forma estudiantes competentes, sino ciudadanos conscientes y comprometidos con su entorno.';
}

// Función para cambiar el color de fondo de la página
function cambiarFondo() {
    document.body.style.backgroundColor = 'lightblue';  desees
}

// Asignar las funciones a los botones
document.querySelector('.btn-primary').addEventListener('click', cambiarContenido);
document.querySelector('.btn-secondary').addEventListener('click', cambiarFondo);
