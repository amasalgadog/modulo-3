const express = require('express');
const app = express();

const productos = [
    {id: 1, nombre: 'Sopaipilla congelada', precio: 200, fecha_vencimiento: '2026-10-01'},
    {id: 2, nombre: 'Lechuga hidropónica', precio: 1600, fecha_vencimiento: '2025-07-15'},
    {id: 3, nombre: 'Taza cerámica de pato', precio: 15200, fecha_vencimiento: 's/i'},
    {id: 4, nombre: 'Habas 1 kg', precio: 2400, fecha_vencimiento: '2026-12-31'},
    {id: 5, nombre: 'Bolsas de té verde, 200 u', precio: 3500, fecha_vencimiento: '2025-05-20'},
];

const mensaje = "¡Hola, Módulo 3!";

app.get('/api/productos', (req, res) => {
    res.json(productos);
    res.send(mensaje);
});

app.listen(3000, () => {
    console.log('Modulo-3 corriendo en http://localhost:3000');
});

module.exports = app;