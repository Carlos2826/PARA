const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: '163.123.183.93',
  user: 'estornudo',
  password: 'achu*Salud',
  database: 'desastre',// Cambia esto por tu base de datos
  port: '17664',
  acquireTimeout: 1000
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos como id ' + connection.threadId);
});

// Exportar la conexión para usarla en otros archivos
module.exports = connection;
