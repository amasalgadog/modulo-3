const express = require('express');
const app = express();

const productos = [
    {id: 1, nombre: 'Sopaipilla congelada', precio: 200, fecha_vencimiento: '2026-10-01'},
    {id: 2, nombre: 'Lechuga hidropónica', precio: 1600, fecha_vencimiento: '2025-07-15'},
    {id: 3, nombre: 'Taza cerámica de pato', precio: 15200, fecha_vencimiento: 's/i'},
    {id: 4, nombre: 'Habas 1 kg', precio: 2400, fecha_vencimiento: '2026-12-31'},
    {id: 5, nombre: 'Bolsas de té verde, 200 u', precio: 3500, fecha_vencimiento: '2025-05-20'},
];

const clientes = [
    {id: 1, nombre: 'Juan Pérez', email: 'juan.perez@gmail.com', telefono: '123456789'},
    {id: 2, nombre: 'María López', email: 'maria.lopez@gmail.com', telefono: '987654321'},
    {id: 3, nombre: 'Carlos García', email: 'carlos.garcia@gmail.com', telefono: '456789123'},
];

app.get('/api/clientes', (req, res) => {
    res.send(clientes);
});

app.listen(3000, () => {
    console.log('Modulo-3 corriendo en http://localhost:3000');
});

app.get('/api/productos', (req, res) => {
    res.json(productos);
});


module.exports = app;