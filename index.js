var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/prueba', (request, response) => {
    response.status(200).send('Esta es una respuesta http');
});

app.post('/post-formulario', (req, response) => {
    const username = req.body.nombre;
    console.log(username);
    response.status(200).send('OK');
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Servidor listo');
});
