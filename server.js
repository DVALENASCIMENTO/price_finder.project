const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve arquivos estáticos da pasta frontend
app.use(express.static(path.join(__dirname, 'frontend')));

// Endpoint para busca de produtos
app.get('/search', (req, res) => {
    const product = req.query.product;
    if (!product) {
        return res.status(400).send('Product query parameter is required');
    }

    // Dados fictícios para demonstração
    const results = [
        { product: product, price: '$10.99', store: 'Supermarket A' },
        { product: product, price: '$9.99', store: 'Supermarket B' }
    ];

    res.json(results);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
