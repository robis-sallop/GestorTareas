const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    detalle: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    estado: {
        type: String,
        enum: ['Pendiente', 'En progreso', 'Completada'],
        default: 'Pendiente'
    }
});

module.exports = mongoose.model('Tarea', tareaSchema);