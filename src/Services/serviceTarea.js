
//? MODELO DE Tarea
//import { connect } from 'mongoose';
import Tarea from '../Models/tarea.js';
import { ObjectId } from 'mongodb';


export const getTareas = async() =>{
    try{
        const tareas = await Tarea.find({})
        return tareas;
    }catch(err){
        console.error("Error al obtener las Tarea", err);
        throw err;
    };
};

export const getTareasById = async(id_nota) =>{
    try{
        const tareaId = await Tarea.findById(id_nota);
        return tareaId;
    }catch(err){
        console.error("Error al obtener Tarea por id", err);
        throw err;
    }
};

export const postTarea = async(titulo, descripcion, estado, archivada,fechaCreacion,fechaLimite)=>{
    try{
        const tarea = Tarea({
            titulo,
            descripcion,
            estado: estado ? true : false,
            archivada: archivada ? false : true,
            fechaCreacion: new Date(),
            fechaLimite,
        });
        await tarea.save()
        return tarea;
    }catch(err){
        console.error("Error al crear Tarea", err);
        throw err;
    }
};

export const modificarTarea = async(id,titulo, descripcion, estado, archivada, fechaCreacion, fechaLimite)=>{
    try{    
        const TareaModificada = await Tarea.updateOne({_id:new ObjectId(id)},{$set:{titulo,descripcion,estado,archivada,fechaCreacion,fechaLimite}});
        console.log("tarea", TareaModificada)
        return TareaModificada
    }catch(err){
        console.error("Error al modificar tarea", err);
        throw err;
    }
};

export const eliminarTarea= async(id)=>{
    try{
        const tareaEliminada = await Tarea.deleteOne({_id: new ObjectId(id)});
        return tareaEliminada;
    }catch(err){
        console.error("Error al eliminar tarea", err);
        throw err
    }
}