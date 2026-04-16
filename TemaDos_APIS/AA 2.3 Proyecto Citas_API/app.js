import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
        const result = await axios.get('https://api.animechan.io/v1/quotes/random');
        const quote = result.data.data.content; 
        const character = result.data.data.character.name;

    res.render("index", {
      quote: quote,
      character: character,
    });

  } catch (error) {
    console.log(error.message);
    res.send("Error al obtener la cita");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});