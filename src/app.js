const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')
const productsRoutes = require('./routes/productsRoutes');



// Conectarse a la base de datos
mongoose.connect('mongodb://127.0.0.1:27017/trabajointegrador', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conectado a la base de datos');
})
.catch(err => {
    console.error('Error al conectar a la base de datos:', err);
});

/* Configuraciones */
app.use(express.static(path.resolve(__dirname, '../public')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


/* Rutas */
app.use('/products', productsRoutes);

app.listen(3005, () => console.log('Servidor corriendo en el puerto 3005'));