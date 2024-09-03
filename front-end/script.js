document.getElementById('searchButton').addEventListener('click', async () => {
    const product = document.getElementById('productInput').value;
    try {
        const response = await fetch(`/search?product=${encodeURIComponent(product)}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const results = await response.json();

        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = ''; // Limpa resultados anteriores

        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.textContent = `Produto: ${result.product}, Preço: ${result.price}, Loja: ${result.store}`;
            resultsContainer.appendChild(resultElement);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
