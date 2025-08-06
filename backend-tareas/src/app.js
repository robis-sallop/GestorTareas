const express = require('express');
const mongoose = require('mongoose');
const tareasRoutes = require('./routes/tareas');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors({ origin: 'http://localhost:8080' }));

// Middleware
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api', tareasRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const usuarioRoutes = require('./routes/usuarioRoutes');
app.use('/api/usuarios', usuarioRoutes);