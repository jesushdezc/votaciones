const express = require('express');
const app = express();
const PORT = 3000;

let votos = {
  1: 0,
  2: 0,
  3: 0,
};

// Middleware para servir archivos estáticos
app.use(express.static('public'));
app.use(express.json());

// Ruta para registrar un voto
app.post('/votar', (req, res) => {
  const { candidatoId } = req.body;
  if (votos[candidatoId] !== undefined) {
    votos[candidatoId] += 1;
    res.json({ votos: votos[candidatoId] });
  } else {
    res.status(400).json({ error: 'Candidato no válido' });
  }
});

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
