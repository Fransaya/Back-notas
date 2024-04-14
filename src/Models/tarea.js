import mongoose from "mongoose";

const tareaSchema = new mongoose.Schema({
    titulo: {type:String, required:true},
    descripcion:{type:String},
    estado:{type:Boolean,default:true},
    archivada: {type:Boolean, default:false},
    fechaCreacion:{type:Date, default:Date.now},
    fechaLimite:{type: Date}
},{collection:'tareas'});

const Tarea = mongoose.model('tareas',tareaSchema);

export default Tarea;