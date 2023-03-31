const searchBtn = document.getElementById('search-btn');
const textArea = document.getElementById('text');
const searchTerm = document.getElementById('search');
const resultsDiv = document.getElementById('results');

searchBtn.addEventListener('click', () => {
	const text = textArea.value;
	const term = searchTerm.value;

	if (text.trim() === '' || term.trim() === '') {
		alert('Ingrese texto y término de búsqueda');
		return;
	}

	const regex = new RegExp(term, 'gi');
	const matches = text.match(regex);

	if (matches === null) {
		resultsDiv.innerHTML = 'No se encontraron coincidencias';
	} else {
		const highlighted = text.replace(regex, `<mark>${term}</mark>`);
		resultsDiv.innerHTML = highlighted;
	}
});
