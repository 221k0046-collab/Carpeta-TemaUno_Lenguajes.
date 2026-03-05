import express from "express";
import bodyParser from "body-parser"; 
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
/* import.meta.url proporciona la URL del módulo actual.
fileURLToPath(import.meta.url) convierte esa URL en una ruta de archivo.
dirname() recupera el nombre del directorio a partir de la ruta del archivo. */

console.log(__dirname);

const app = express();
const port = 3000;

var nombreEquipo = "";

function registrador(req, res, next) { // Crear tu propio middleware
  console.log(req.body); // Muestra los datos enviados por el usuario
  nombreEquipo = req.body["mascota"] + req.body["adjetivo"]; // Concatena los datos enviados por el usuario
  next(); // Llama a la siguiente función en la pila de middleware
}

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(registrador); // Usa el middleware

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("<h1>El nombre de tu equipo es: \n</h1><h3>" + nombreEquipo + "</h3>"); // Responde con el nombre del equipo generado
});

app.listen(port, () => {
  console.log(`Servidor ejecutandose en el puerto ${port}`);
});