// No arquivo utils/auth.js

const jwt = require('jsonwebtoken');

const gerarToken = (usuarioId) => {
  return jwt.sign({ id: usuarioId }, 'seuSegredo', { expiresIn: '1h' });
};

const verificarToken = (token) => {
  return jwt.verify(token, 'seuSegredo');
};

module.exports = { gerarToken, verificarToken };
