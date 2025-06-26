> ***src/app.js***

- require('express'); importa una librería llamada Express 
- app = express(); es una función que genera un objeto de la aplicaciónción de Express, utilizada para **definir rutas, manejar requests y configurar middleware para servidores web**
const express = require('express');
const app = express();

const inmuebles = [
    {id: 1, direccion: 'Calle 123', precio: 150000, tipo: 'Apartamento'},
    {id: 2, direccion: 'Avenida 456', precio: 120000, tipo: 'Casa'},
    {id: 3, direccion: 'Carrera 789', precio: 200000, tipo: 'Estudio'},
];

- app.get() es un método de Express que define una ruta para manejar solicitudes GET
- 'api/inmuebles' es la ruta que se va a manejar
- 'req' es el objeto de solicitud que contiene información sobre la solicitud del cliente
- 'res' es el objeto de respuesta que se utiliza para enviar una respuesta al cliente

app.get('/api/inmuebles', (req, res) => {
    res.json(inmuebles);
});

- En app.test.js se define una ruta para manejar solicitudes GET a '/api/inmuebles'
- Express ejecuta la función y responde con la lista de inmuebles en formato JSON

module.exports = app;
- modulo.exports es una forma de exportar el objeto 'app' para que pueda ser utilizado en otros archivos



> ***tests/app.test.js***

const request = require('supertest');
const app     = require('../src/app');

describe('GET /api/inmuebles', () => {
  it('debería retornar una lista de inmuebles', async () => {
    const res = await request(app).get('/api/inmuebles');

    // Verifico que regrese HTTP 200 (OK)
    expect(res.statusCode).toBe(200);

    // Verifico que el body sea un array no vacío
    expect(res.body.length).toBeGreaterThan(0);

    // Verifico que cada inmueble tenga las propiedades esperadas
    expect(res.body[0]).toHaveProperty('direccion');
    expect(res.body[0]).toHaveProperty('precio');
  });
});


**Importaciones**

- supertest: permite disparar peticiones HTTP a tu servidor express sin levantar un puerto real.
- app: tu aplicación Express exportada en src/app.js.

Bloque describe() agrupa un conjunto de tests bajo el título **"GET /api/inmuebles"**. Sirve para organizar y leer mejor los reportes de Jest.

**Test individual** con it()

Descripción: "debería retornar una lista de inmuebles".

Marca la función como ***async*** porque usamos ***await*** al disparar la petición.

> const res = ***await*** request(app).get('/api/inmuebles');

Lanza una petición GET contra la ruta /api/inmuebles.

Devuelve un objeto res con:

res.statusCode: código de estado HTTP.

res.body: payload parseado (en este caso un array de inmuebles).

**Aserciones (expect)**

- .toBe(200): aseguramos que el endpoint responde con éxito.

- .toBeGreaterThan(0): el array no está vacío.

- .toHaveProperty('direccion') y .toHaveProperty('precio'): cada objeto debe incluir esos campos.




> ***pm install -D owasp-dependency-check***

The command installs the `owasp-dependency-check` package as a development dependency (`-D` flag).

`owasp-dependency-check` is a tool for performing dependency-checking, which involves scanning a project's dependencies for known vulnerabilities. It is part of the Open Web Application Security Project (OWASP), a nonprofit organization dedicated to improving the security of software.

In simple terms, the command you provided will install a tool that helps ensure the security of your project's dependencies by checking for any known vulnerabilities. This can help prevent potential security issues in your project.

The easiest way is to add a new NPM script to your package.json
You can specify any arguments that the OWASP dependency-check-cli provides. For example, to generate an HTML and JSON report, you can use:

> "scripts": {
>   ...
>  "owasp": "owasp-dependency-check --project \"YOUR PROJECT NAME\" -f HTML -f JSON"
> }