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

/*This code block checks whether the current file is being run directly by Node.js or being imported as a module into another file. 
The condition `require.main === module` is true only when you execute this file directly (for example, with `node app.js`). 
If that's the case, the code inside the block runs: it starts the Express server by calling `app.listen(3000, ...)`, 
which makes your application listen for HTTP requests on port 3000. The callback function logs a message to the console indicating that the server is running.

This pattern is useful for separating the app's definition from its execution. 
It allows you to import the Express app into other files (such as test files) without automatically starting the server, 
which is important for testing and modularity.*/44

if (require.main === module) {
    app.listen(3000, () => {
        console.log('Modulo-3 corriendo en http://localhost:3000');
    });
}

module.exports = app;