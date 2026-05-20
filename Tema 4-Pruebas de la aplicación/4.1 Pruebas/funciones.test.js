const {
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
} = require('./funciones');

// a) toBe
test('10 + 10 es igual a 20', () => {
  expect(suma10mas10()).toBe(20);
});

// b) toEqual
test('dos objetos con las mismas propiedades son iguales', () => {
  expect(crearPersona()).toEqual({ nombre: 'Ana', edad: 25 });
});

// c) toBeNull / toBeUndefined / toBeDefined
test('la variable es null', () => {
  expect(retornaNull()).toBeNull();
});
test('la variable es undefined', () => {
  expect(retornaUndefined()).toBeUndefined();
});
test('la variable está definida', () => {
  expect(retornaDefinido()).toBeDefined();
});

// d) Comparaciones numéricas
test('el número es mayor que 10', () => {
  expect(retornaNumero()).toBeGreaterThan(10);
});
test('el número es menor que 20', () => {
  expect(retornaNumero()).toBeLessThan(20);
});
test('el número es mayor o igual a 15', () => {
  expect(retornaNumero()).toBeGreaterThanOrEqual(15);
});

// e) toMatch
test('la cadena contiene "programación"', () => {
  expect(retornarCadena()).toMatch(/programación/);
});

// f) toContain
test('el array contiene mango', () => {
  expect(retornarArray()).toContain('mango');
});

// g) .not
test('el valor no es igual a 100', () => {
  expect(retornarValor()).not.toBe(100);
});

// h) Promesas
test('la promesa se resuelve correctamente', async () => {
  await expect(promesaExitosa()).resolves.toBe('¡Éxito!');
});
test('la promesa es rechazada', async () => {
  await expect(promesaFallida()).rejects.toThrow('Algo salió mal');
});