const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	
	const texto = document.querySelector('#texto').value;
	const buscar = document.querySelector('#buscar').value;
	
	if (buscar === '') {
		mostrarMensaje('Por favor ingrese el texto a buscar');
		return;
	}
	
	const regex = new RegExp(buscar, 'gi');
	const textoResaltado = texto.replace(regex, '<span class="highlight">$&</span>');
	
	resultado.innerHTML = textoResaltado;
});

function mostrarMensaje(mensaje) {
	alert(mensaje);
}
