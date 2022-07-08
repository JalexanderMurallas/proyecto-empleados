//const hello = (req, res) => res.send('Hello World'); //creamos una constante para exportar el modulo
//module.exports = hello;
//con este ejemplo solo creamos una ruta, debido a q necesito varias creo un object con metodos para cada peticion

const empCtrl = {};

const empModel = require('../models/empleado-model');

//obtener los empleados
//esta es una funcion asincrona que usa find() para devolver todos los registros
empCtrl.getEmps = async(req, res) => {
    const empleados = await empModel.find() 
    res.json(empleados)   
}; 

//crear un emp
empCtrl.createEmp = async (req, res) => {
    const newEmp = new empModel(req.body)
    //console.log(newEmp)

    await newEmp.save()
    res.send({message: 'Se creo el empleado'})
}; 

//obtener solo un emp
empCtrl.getEmp = async (req, res) => {
    console.log(req.params)
    //empModel.findOne({_id: req.params.id})
    const emp = await empModel.findById(req.params.id)
    res.send(emp)
}; 

//actualizar info emp 
empCtrl.updateEmp = async (req, res) => {
    await empModel.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Updated empleado'})
};  

//eliminar empleado
empCtrl.deleteEmp = async (req, res) => {
    await empModel.findByIdAndDelete(req.params.id)
    res.json({status: 'Deleted empleado'})
}; 

//asi definimos el CRUD

module.exports = empCtrl;