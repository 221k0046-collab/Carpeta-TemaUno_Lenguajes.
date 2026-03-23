import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// a. Cadena JSON entre backticks
const recetaJSON = `[
  { "ingredientes": { "proteina": { "nombre": "Puerco" }, "preparacion": "Horneado", "salsa": "Tomate verde (Medio)", "acompanamientos": ["1 cucharada : Cebolla", "2 cucharadas : Guacamole"] } },
  { "ingredientes": { "proteina": { "nombre": "Pollo" }, "preparacion": "Al carbón", "salsa": "Roja", "acompanamientos": ["Cilantro"] } },
  { "ingredientes": { "proteina": { "nombre": "Res" }, "preparacion": "Asada", "salsa": "Pasilla", "acompanamientos": ["Cebollitas"] } },
  { "ingredientes": { "proteina": { "nombre": "Huevo" }, "preparacion": "Revuelto", "salsa": "Morita", "acompanamientos": ["Frijoles"] } }
]`;

// b. Deserializar
const recetasTacos = JSON.parse(recetaJSON);

// c. Middleware para archivos estáticos
app.use(express.static("public"));

// d. Middleware BodyParser
app.use(bodyParser.json());

// e. Handler GET solicitado
app.get("/receta/:type", (req, res) => {
    const elegirTaco = recetasTacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase());
    res.json(elegirTaco || { error: "Receta no encontrada" });
});

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});