import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const puerto = 3000;

const uri = process.env.MONGODB_URI || "mongodb://221k0046_db_user:Eduardo1980@ac-6kdxify-shard-00-00.fzst6t5.mongodb.net:27017,ac-6kdxify-shard-00-01.fzst6t5.mongodb.net:27017,ac-6kdxify-shard-00-02.fzst6t5.mongodb.net:27017/?ssl=true&replicaSet=atlas-136gpg-shard-0&authSource=admin&appName=Backend";

mongoose.connect(uri)
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch((error) => console.error('Error al conectar a la base de datos:', error));

app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});