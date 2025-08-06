const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellidos: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  clave: { type: String, required: true }
});

// Encriptar clave antes de guardar
usuarioSchema.pre('save', async function(next) {
  if (!this.isModified('clave')) return next();
  this.clave = await bcrypt.hash(this.clave, 10);
  next();
});

// Método para comparar clave
usuarioSchema.methods.compararClave = function(clave) {
  return bcrypt.compare(clave, this.clave);
};

module.exports = mongoose.model('Usuario', usuarioSchema, 'usuarios');