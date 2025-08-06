const express = require('express');
const router = express.Router();
const usuarioCtrl = require('../controllers/usuarioController');
const auth = require('../middleware/auth');

router.post('/login', usuarioCtrl.login); // Login sin protección

// Proteger todos los demás endpoints
router.use(auth);

router.post('/', usuarioCtrl.crearUsuario);
router.put('/:id', usuarioCtrl.editarUsuario);
router.delete('/:id', usuarioCtrl.eliminarUsuario);
router.get('/', usuarioCtrl.listarUsuarios);
router.get('/:id', usuarioCtrl.detalleUsuario);

module.exports = router;