// ── Importaciones ───────────────────────────────────────────
import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

// ── Variables de entorno ─────────────────────────────────────
dotenv.config();

// ── Configuración de Express ─────────────────────────────────
const app = express();
const puerto = 3000;

// ── Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// ── Conexión con driver oficial de MongoDB 
const uri = "mongodb://221k0046_db_user:Eduardo1980@ac-6kdxify-shard-00-00.fzst6t5.mongodb.net:27017,ac-6kdxify-shard-00-01.fzst6t5.mongodb.net:27017,ac-6kdxify-shard-00-02.fzst6t5.mongodb.net:27017/?ssl=true&replicaSet=atlas-136gpg-shard-0&authSource=admin&appName=Backend";

const client = new MongoClient(uri);
let db;

async function conectar() {
  await client.connect();
  db = client.db('test');
  console.log('Conexión exitosa a MongoDB');
}
conectar().catch(console.error);

// ── Ruta raíz 
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API CRUD sin ORM');
});

// ── POST /usuarios — Crear usuario 
app.post('/usuarios', async (req, res) => {
  try {
    const resultado = await db.collection('usuarios').insertOne(req.body);
    res.status(201).json(resultado);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

// ── GET /usuarios — Obtener todos los usuarios 
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await db.collection('usuarios').find().toArray();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

// ── GET /usuarios/:id — Obtener usuario por ID 
app.get('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await db.collection('usuarios')
      .findOne({ _id: new ObjectId(req.params.id) });
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.status(200).json(usuario);
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
});

// ── PUT /usuarios/:id — Actualizar usuario 
app.put('/usuarios/:id', async (req, res) => {
  try {
    const resultado = await db.collection('usuarios').findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body },
      { returnDocument: 'after' }
    );
    if (!resultado) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.status(200).json(resultado);
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
});

// ── DELETE /usuarios/:id — Eliminar usuario 
app.delete('/usuarios/:id', async (req, res) => {
  try {
    const resultado = await db.collection('usuarios')
      .findOneAndDelete({ _id: new ObjectId(req.params.id) });
    if (!resultado) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.status(200).json({ message: 'Usuario eliminado' });
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});

// ── Servidor g     
app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});