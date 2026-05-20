// a) Igualdad exacta con toBe
function suma10mas10() {
  return 10 + 10;
}

// b) Comparación de objetos con toEqual
function crearPersona() {
  return { nombre: 'Ana', edad: 25 };
}

// c) Verificación de valores nulos y definidos
function retornaNull() {
  return null;
}
function retornaUndefined() {
  return undefined;
}
function retornaDefinido() {
  return 'existe';
}

// d) Comparaciones numéricas
function retornaNumero() {
  return 15;
}

// e) Coincidencia de cadenas con toMatch
function retornarCadena() {
  return 'Hola, soy un estudiante de programación';
}

// f) Verificación de contenido en Arrays
function retornarArray() {
  return ['manzana', 'naranja', 'mango', 'uva'];
}

// g) Negación de Matchers con .not
function retornarValor() {
  return 42;
}

// h) Pruebas Asíncronas con Promesas
function promesaExitosa() {
  return new Promise((resolve) => {
    resolve('¡Éxito!');
  });
}
function promesaFallida() {
  return new Promise((_, reject) => {
    reject(new Error('Algo salió mal'));
  });
}

module.exports = {
  suma10mas10,
  crearPersona,
  retornaNull,
  retornaUndefined,
  retornaDefinido,
  retornaNumero,
  retornarCadena,
  retornarArray,
  retornarValor,
  promesaExitosa,
  promesaFallida,
};