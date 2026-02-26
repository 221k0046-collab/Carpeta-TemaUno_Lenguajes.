const fs = require('fs'); // importa la herramienta de sistemas de archivos
fs.writeFile('archivo.txt', 'Hola desde NodeJS', (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado con exito.');
});


fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('El archivo dice:', data);
});