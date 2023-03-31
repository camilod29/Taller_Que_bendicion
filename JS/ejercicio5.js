const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const numero = parseInt(document.querySelector('#numero').value);
    
    if (isNaN(numero) || !Number.isInteger(numero) || numero < 0) {
        alert('Debe ingresar números enteros positivos');
    } else if (numero % 2 === 0) {
        alert('Par');
    } else {
        alert('Impar');
    }
});
