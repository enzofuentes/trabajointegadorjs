const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');

router.get('/Listar', controller.listar);
router.get('/Detalle/:id', controller.detalle);

module.exports = router;
