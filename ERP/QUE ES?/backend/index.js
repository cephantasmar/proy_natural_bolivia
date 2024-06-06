import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
const port = 3000;
app.use(cors());
// Conectar a MongoDB
mongoose.connect('mongodb://nico:password@monguito:27017/miapp?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});

// Definir el esquema de usuario
const usuarioSchema = new mongoose.Schema({
  id: { type: Number, auto: true },
  nombre: { type: String, required: true },
  edad: { type: Number, required: true }
  
});

// Crear el modelo de usuario
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Endpoint para obtener todos los usuarios (GET)
app.get('/users', async (_req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint para crear un nuevo usuario (POST)
app.post('/users', async (req, res) => {
  const { id, nombre, edad } = req.body;
  const newUser = new Usuario({ id, nombre, edad });
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
