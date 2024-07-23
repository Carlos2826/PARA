const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./DBConnection_Query'); // Asegúrate de que la ruta sea correcta

const app = express();
const port = 8105;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para obtener un usuario por nombre de usuario
app.get('/account/:username', (req, res) => {
  const username = req.params.username;
  db.query('SELECT ID_Usuario, Nombre, Apellido, Usuario, Password, Admin FROM Usuarios WHERE Usuario = ?', [username], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Ruta para registrar un usuario
app.post('/user/add', (req, res) => {
  const { username, password, nombre, apellido } = req.body;
  const sql = 'INSERT INTO Usuarios (Nombre, Apellido, Usuario, Password) VALUES (?, ?, ?, ?)';
  db.query(sql, [nombre, apellido, username, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  });
});

// Ruta para obtener todos los usuarios
app.get('/users', (req, res) => {
  db.query('SELECT ID_Usuario, Nombre, Apellido, Usuario, Password, Admin FROM Usuarios', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Ruta para eliminar un usuario por ID
app.delete('/user/delete/:id', (req, res) => {
  const userId = req.params.id;
  db.query('DELETE FROM Usuarios WHERE ID_Usuario = ?', [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Usuario eliminado exitosamente' });
  });
});

// Ruta para actualizar un usuario
app.post('/user/update', (req, res) => {
  const { ID, nombre, apellido, username, password, admin } = req.body;
  const sql = 'UPDATE Usuarios SET Nombre = ?, Apellido = ?, Usuario = ?, Password = ?, Admin = ? WHERE ID_Usuario = ?';
  db.query(sql, [nombre, apellido, username, password, admin, ID], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Usuario actualizado exitosamente' });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
