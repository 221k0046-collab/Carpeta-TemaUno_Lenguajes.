import { jest } from '@jest/globals';

// ── El mock DEBE declararse ANTES de importar app ────────────
const mockUsuario = {
  create: jest.fn(),
  find: jest.fn(),
  findById: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  findByIdAndDelete: jest.fn(),
};

jest.unstable_mockModule('../models/usuario.model.js', () => ({
  default: mockUsuario,
}));

// ── Importaciones DESPUÉS del mock ───────────────────────────
const { default: app } = await import('../app.js');
const { default: request } = await import('supertest');

// ── Datos de prueba ──────────────────────────────────────────
const usuarioEjemplo = {
  _id: '64b1f1e2c3d4e5f6a7b8c9d0',
  nombre: 'Juan Pérez',
  edad: 25,
  correo: 'juan@ejemplo.com',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ── Limpiar mocks entre pruebas ──────────────────────────────
beforeEach(() => {
  jest.clearAllMocks();
});

// ── POST /usuarios ───────────────────────────────────────────
describe('POST /usuarios', () => {
  test('debe crear un usuario y retornar 201', async () => {
    mockUsuario.create.mockResolvedValue(usuarioEjemplo);
    const res = await request(app)
      .post('/usuarios')
      .send({ nombre: 'Juan Pérez', edad: 25, correo: 'juan@ejemplo.com' });
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({ nombre: 'Juan Pérez' });
  });

  test('debe retornar 500 si hay un error al crear', async () => {
    mockUsuario.create.mockRejectedValue(new Error('Error DB'));
    const res = await request(app)
      .post('/usuarios')
      .send({ nombre: 'Juan Pérez', edad: 25, correo: 'juan@ejemplo.com' });
    expect(res.status).toBe(500);
    expect(res.body).toHaveProperty('error', 'Error al crear el usuario');
  });
});

// ── GET /usuarios ────────────────────────────────────────────
describe('GET /usuarios', () => {
  test('debe retornar todos los usuarios con status 200', async () => {
    mockUsuario.find.mockResolvedValue([usuarioEjemplo]);
    const res = await request(app).get('/usuarios');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(1);
  });

  test('debe retornar arreglo vacío si no hay usuarios', async () => {
    mockUsuario.find.mockResolvedValue([]);
    const res = await request(app).get('/usuarios');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  test('debe retornar 500 si hay un error', async () => {
    mockUsuario.find.mockRejectedValue(new Error('Error DB'));
    const res = await request(app).get('/usuarios');
    expect(res.status).toBe(500);
    expect(res.body).toHaveProperty('error', 'Error al obtener los usuarios');
  });
});

// ── GET /usuarios/:id ────────────────────────────────────────
describe('GET /usuarios/:id', () => {
  test('debe retornar el usuario con status 200', async () => {
    mockUsuario.findById.mockResolvedValue(usuarioEjemplo);
    const res = await request(app).get(`/usuarios/${usuarioEjemplo._id}`);
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ correo: 'juan@ejemplo.com' });
  });

  test('debe retornar 404 si el usuario no existe', async () => {
    mockUsuario.findById.mockResolvedValue(null);
    const res = await request(app).get('/usuarios/idInexistente');
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error', 'Usuario no encontrado');
  });

  test('debe retornar 500 si ocurre un error', async () => {
    mockUsuario.findById.mockRejectedValue(new Error('Error DB'));
    const res = await request(app).get(`/usuarios/${usuarioEjemplo._id}`);
    expect(res.status).toBe(500);
    expect(res.body).toHaveProperty('error', 'Error al obtener el usuario');
  });
});

// ── PUT /usuarios/:id ────────────────────────────────────────
describe('PUT /usuarios/:id', () => {
  test('debe actualizar el usuario y retornar 200', async () => {
    const actualizado = { ...usuarioEjemplo, nombre: 'Juan Actualizado' };
    mockUsuario.findByIdAndUpdate.mockResolvedValue(usuarioEjemplo);
    mockUsuario.findById.mockResolvedValue(actualizado);
    const res = await request(app)
      .put(`/usuarios/${usuarioEjemplo._id}`)
      .send({ nombre: 'Juan Actualizado' });
    expect(res.status).toBe(200);
    expect(res.body.nombre).toBe('Juan Actualizado');
  });

  test('debe retornar 404 si el usuario no existe', async () => {
    mockUsuario.findByIdAndUpdate.mockResolvedValue(null);
    const res = await request(app)
      .put('/usuarios/idInexistente')
      .send({ nombre: 'Otro' });
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error', 'Usuario no encontrado');
  });

  test('debe retornar 500 si ocurre un error', async () => {
    mockUsuario.findByIdAndUpdate.mockRejectedValue(new Error('Error DB'));
    const res = await request(app)
      .put(`/usuarios/${usuarioEjemplo._id}`)
      .send({ nombre: 'Error' });
    expect(res.status).toBe(500);
    expect(res.body).toHaveProperty('error', 'Error al actualizar el usuario');
  });
});

// ── DELETE /usuarios/:id ─────────────────────────────────────
describe('DELETE /usuarios/:id', () => {
  test('debe eliminar el usuario y retornar 200', async () => {
    mockUsuario.findByIdAndDelete.mockResolvedValue(usuarioEjemplo);
    const res = await request(app).delete(`/usuarios/${usuarioEjemplo._id}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('message', 'Usuario eliminado');
  });

  test('debe retornar 404 si el usuario no existe', async () => {
    mockUsuario.findByIdAndDelete.mockResolvedValue(null);
    const res = await request(app).delete('/usuarios/idInexistente');
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error', 'Usuario no encontrado');
  });

  test('debe retornar 500 si ocurre un error', async () => {
    mockUsuario.findByIdAndDelete.mockRejectedValue(new Error('Error DB'));
    const res = await request(app).delete(`/usuarios/${usuarioEjemplo._id}`);
    expect(res.status).toBe(500);
    expect(res.body).toHaveProperty('error', 'Error al eliminar el usuario');
  });
});