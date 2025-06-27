const request = require('supertest');
const app = require('../src/app');

describe('GET /api/productos', () => {
    it('debe retornar una lista de productos', async () => {
        const response = await request(app).get('/api/productos');
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toHaveProperty('nombre');
        expect(response.body[0]).toHaveProperty('precio');
        expect(response.body[0]).toHaveProperty('fecha_vencimiento');
    });
});