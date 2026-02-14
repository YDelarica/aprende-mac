const express = require('express');
const path = require('path');
const os = require('os');

const app = express();
const PORT = 3333;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'aprende-mac.html'));
});

// Obtener IP local
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

app.listen(PORT, '0.0.0.0', () => {
  const ip = getLocalIP();
  console.log('');
  console.log('============================================');
  console.log('  SERVIDOR APRENDE MAC - ENCENDIDO');
  console.log('============================================');
  console.log('');
  console.log('  Desde ESTE PC:');
  console.log(`    http://localhost:${PORT}`);
  console.log('');
  console.log('  Desde el MAC MINI de tu abuelo:');
  console.log(`    http://${ip}:${PORT}`);
  console.log('');
  console.log('  (Abre Safari en el Mac Mini y escribe esa dirección)');
  console.log('');
  console.log('============================================');
  console.log('  No cierres esta ventana mientras lo use');
  console.log('============================================');
});
