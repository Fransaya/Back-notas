
//? MODELO DE Tarea
import Tarea from '../Models/tarea.js';

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
        const nota = await Tarea.create({
            titulo,
            descripcion,
            estado: estado ? true: false,
            archivada: archivada ? false : true,
            fechaCreacion: new Date,
            fechaLimite,
        })
        return nota;
    }catch(err){
        console.error("Error al crear Tarea", err);
        throw err;
    }
};