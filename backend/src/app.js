const express = require('express'); //permite crear el servidor, peticiones que recibiremos
const morgan = require('morgan'); //middleware escucha y muestra por consola cada peticion nueva
const app = express(); //dentro de esta constante 'app' lo ejecuto para poder usarlo

app.set('port', process.env.PORT || 3000); //buscar variable de entorno port o usar 3000 config solo en app.js

app.use(morgan('dev'));

//debemos traer de express el metodo json
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//agregaremos la ruta para evitar repetir emp sera /api/empleados
app.use('/api/empleados' , require ('./routes/emp.routes'));

//por buenas practicas es mejor separar la logica del servidor del index.js

module.exports = app; //aca exportamos el modulo
