
const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');
const logs = require('../middlewares/logger')
const upload = require('../middlewares/storage')

router.get('/', logs, controller.listar);
router.post('/', controller.crear);
router.get('/listar', logs, controller.listar);
router.get('/detalle/:id', logs, controller.detalle); 
router.get ('/:id', controller.detalle);
router.put('/update/:id', controller.update);
router.get('/:id', upload.single('image'), controller.update);
router.post('/crear', upload.single('image'), controller.crear);

module.exports = router;
