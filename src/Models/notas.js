import mongoose from "mongoose";

const notaShema = new mongoose.Schema({
    titulo: {type:String, required:true},
    descripcion:{type:String},
    estado:{type:Boolean,default:true},
    archivada: {type:Boolean, default:false},
    fechaCreacion:{type:Date, default:Date.now},
    fechaLimite:{type: Date}
},{collection:'notas'});

const Nota = mongoose.model('Notas_fran',notaShema);

module.exports = Nota;