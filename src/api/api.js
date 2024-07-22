const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./DBConnection_Query'); // Asegúrate de que la ruta sea correcta

const app = express();
const port = 8105;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para obtener un usuario
app.get('/account/:username', (req, res) => {
  const username = req.params.username;
  db.query('SELECT * FROM Usuarios WHERE Usuario = ?', [username], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Ruta para registrar un usuario
app.post('/user/add', (req, res) => {
  const { username, password, nombre, apellido } = req.body;
  const sql = 'INSERT INTO Usuarios (Nombre, Apellido, Usuario, Contraseña) VALUES (?, ?, ?, ?)';
  db.query(sql, [nombre, apellido, username, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});

