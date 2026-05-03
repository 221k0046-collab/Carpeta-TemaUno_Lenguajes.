// ── Importaciones ───────────────────────────────────────────
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Usuario from './models/usuario.model.js';

// ── Variables de entorno ─────────────────────────────────────
dotenv.config();

// ── Configuración de Express ─────────────────────────────────
const app = express();
const puerto = 3000;

// ── Middlewares ──────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// ── Conexión a MongoDB ───────────────────────────────────────


const uri = "mongodb://221k0046_db_user:Eduardo1980@ac-6kdxify-shard-00-00.fzst6t5.mongodb.net:27017,ac-6kdxify-shard-00-01.fzst6t5.mongodb.net:27017,ac-6kdxify-shard-00-02.fzst6t5.mongodb.net:27017/?ssl=true&replicaSet=atlas-136gpg-shard-0&authSource=admin&appName=Backend";

mongoose.connect(uri)
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

// ── Ruta raíz ────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API CRUD');
});

// ── POST /usuarios — Crear usuario ───────────────────────────
app.post('/usuarios', async (req, res) => { //
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

// ── Servidor ─────────────────────────────────────────────────
app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});