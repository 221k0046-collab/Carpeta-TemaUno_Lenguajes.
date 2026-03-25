//Cadena JSON
const jsonString = '{"nombre":"Taco de Pollo","ingredientes":{"proteina":"Pollo","salsa":"Salsa Verde"}}';
//Deserealizar para convertir a un objeto de javaScript
const objetoDeserializado = JSON.parse(jsonString);

console.log(objetoDeserializado);