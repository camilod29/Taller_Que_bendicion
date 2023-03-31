const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.querySelector('#nombre').value;
    const materia = document.querySelector('#materia').value;
    const nota1 = parseFloat(document.querySelector('#nota1').value);
    const nota2 = parseFloat(document.querySelector('#nota2').value);
    const nota3 = parseFloat(document.querySelector('#nota3').value);
    
    if (nombre === '' || materia === '' || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        mostrarMensaje('Por favor complete todos los campos');
    } else {
        const promedio = (nota1 + nota2 + nota3) / 3;
        
        if (promedio >= 3.0) {
            mostrarResultado(`Felicitaciones ${nombre}, su nota es ${promedio.toFixed(2)}, pasaste la materia ${materia}.`, 'green');
        } else {
            mostrarResultado(`Lo siento ${nombre}, su nota es ${promedio.toFixed(2)}, perdiste la materia ${materia}.`, 'red');
        }
    }
});

function mostrarResultado(mensaje, color) {
    resultado.innerHTML = mensaje;
    resultado.style.backgroundColor = color;
}

function mostrarMensaje(mensaje) {
    alert(mensaje);
}
