//para rear el model requiero mongoose
const {Schema, model} = require('mongoose');

const empSchema = new Schema ({
    name: {type: String},
    position: {type: String},
    office: {type: String},
    salary: {type: Number},  
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('empleado-model', empSchema);