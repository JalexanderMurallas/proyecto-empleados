// Using Node.js `require()`
const mongoose = require('mongoose'); 

//se crea una conexion a db local que se añadira en index.js
mongoose.connect('mongodb://localhost/mean-empleados',{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

.then((db) =>console.log('db esta conectada'))
.catch((err) => console.log(err));