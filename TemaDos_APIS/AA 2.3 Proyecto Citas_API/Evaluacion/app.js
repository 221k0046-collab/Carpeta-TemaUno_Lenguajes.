import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://api.jikan.moe/v4/random/characters");
    console.log(result.data);
    const character = result.data.data.name;
    const quote = result.data.data.about || "Sin descripción disponible";

    res.render("index", {
      quote: quote,
      character: character
    });

  } catch (error) {
    console.log(error.message);
    res.send("Error al obtener datos");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});