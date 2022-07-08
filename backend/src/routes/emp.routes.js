const { Router } = require('express'); //creamos enrutador (guardamos rutas o urls)

const router = Router(); //ejecutamos la funcion y la definimos en una constante para el objeto

const empCtrl = require('../controllers/emp.controller'); //importamos modulo hello 

//crearemos la ruta para cuando con get pidan la ruta / (raiz)
//router.get('/', empCtrl);

//abajo crearemos rutas para empleado
//queda '/' ya que en app definimos la ruta asi evitamos copiar siempre la mismo ruta
router.get('/', empCtrl.getEmps);
router.post('/', empCtrl.createEmp);
router.get('/:id', empCtrl.getEmp);
router.put('/:id', empCtrl.updateEmp);
router.delete('/:id', empCtrl.deleteEmp);

//la peticion al server respondera con hello world

//en la mayoria de apps necesitaremos al menos 5 rutas para las operaciones CRUD 
// POR LO QUE SEPARAMOS LA LOGICA EN CONTROLLERS Y ACA SOLO IMPORTAMOS 



module.exports = router;





