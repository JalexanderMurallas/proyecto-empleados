//importo la conexion de db
const db = require('./database');

//como me lleve la logica al archivo app.js debo importar el modulo app 
const app = require('./app');

app.listen(app.get('port')); //aca indicamos el puerto para el servidor 
console.log('servidor port: ', app.get('port'))