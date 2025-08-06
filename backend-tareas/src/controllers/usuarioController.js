const Usuario = require('../models/usuario');
const jwt = require('jsonwebtoken');

// Crear usuario
exports.crearUsuario = async (req, res) => {
  try {
    const { nombre, apellidos, correo, clave } = req.body;
    const usuario = new Usuario({ nombre, apellidos, correo, clave });
    await usuario.save();
    res.status(201).json({ mensaje: 'Usuario creado' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Editar usuario (sin clave)
exports.editarUsuario = async (req, res) => {
  try {
    const { nombre, apellidos, correo } = req.body;
    await Usuario.findByIdAndUpdate(req.params.id, { nombre, apellidos, correo });
    res.json({ mensaje: 'Usuario actualizado' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar usuario
exports.eliminarUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Usuario eliminado' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar usuarios (sin clave)
exports.listarUsuarios = async (req, res) => {
  const usuarios = await Usuario.find({}, '-clave');
  res.json(usuarios);
};

// Detalle usuario (sin clave)
exports.detalleUsuario = async (req, res) => {
  const usuario = await Usuario.findById(req.params.id, '-clave');
  if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.json(usuario);
};

// Login usuario
exports.login = async (req, res) => {
  const { correo, clave } = req.body;
  const usuario = await Usuario.findOne({ correo });
  if (!usuario) return res.status(401).json({ error: 'Credenciales inválidas' });
  const valido = await usuario.compararClave(clave);
  if (!valido) return res.status(401).json({ error: 'Credenciales inválidas' });
  const token = jwt.sign({ id: usuario._id }, 'secreto', { expiresIn: '1h' });
  const { clave: _, ...usuarioSinClave } = usuario.toObject();
  res.json({ usuario: usuarioSinClave, token });
};