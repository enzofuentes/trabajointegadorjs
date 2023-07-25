const express = require('express');
const app = express();
const productsRoutes = require('./routes/productsRoutes');

app.use('/productos', productsRoutes);

app.get('/', (req, res) => {
    res.json('List');
});

app.listen(4000, () => console.log('Servidor corriendo en el puerto 4000'));
