function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

module.exports = { suma, resta, multiplicacion, division };



function operacionAsincrona(callback) {
  setTimeout(() => {
    const resultado = "Operación terminada";
    callback(resultado);
  }, 2000);
}

// Uso de la función
operacionAsincrona(function(res) {
  console.log(res);
});



function convertirANumero(cadena) {
  try {
    let numero = Number(cadena);

    if (isNaN(numero)) {
      throw new Error("No es un número válido");
    }

    console.log("Número convertido:", numero);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// Pruebas
convertirANumero("123");
convertirANumero("abc");
