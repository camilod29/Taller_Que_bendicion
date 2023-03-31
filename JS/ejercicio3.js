const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.querySelector('#nombre').value;
    const edad = document.querySelector('#edad').value;
    
    if (nombre === '' || edad === '') {
        mostrarMensaje('Por favor ingrese su nombre y su edad');
    } else if (isNaN(edad)) {
        mostrarMensaje('Por favor ingrese una edad válida');
    } else {
        const edadNum = parseInt(edad);
        
        if (edadNum >= 18) {
            mostrarMensaje(`${nombre}, eres mayor de edad`);
        } else {
            mostrarMensaje(`${nombre}, eres menor de edad`);
        }
    }
});

function mostrarMensaje(mensaje) {
    resultado.innerHTML = mensaje;
}
