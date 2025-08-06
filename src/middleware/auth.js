const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  // Permitir acceso libre al endpoint de login
  if (req.path === '/login' && req.method === 'POST') {
    return next();
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'secreto'); // Usa tu clave secreta real
    req.usuario = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
}

module.exports = authMiddleware;