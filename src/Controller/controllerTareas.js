import {getTareas,postTarea, modificarTarea} from '../Services/serviceTarea.js';

export const getAllTareas = async(req,res)=>{
    try{
        const notas = await getTareas();
        res.status(200).json(notas);
    }catch(err){
        console.error("Error al obtener tarea", err);
        res.status(500).json({message: "Error al obtener las tarea"});
    }
};

export const postTareas = async(req,res)=>{
    try{
        const {titulo, descripcion, estado, archivada, fechaCreacion, fechaLimite} =  req.body;
        const notaCreada = await postTarea(titulo, descripcion,estado,archivada,fechaCreacion,fechaLimite);
        res.status(200).json(notaCreada);
    }catch(err){
        console.error("Error al crear nota", err);
        res.status(500).json({message:"Error al crear tarea", error: err.message})
    }
};

export const patchTarea =   async(req,res)=>{
    try{
        const id= req.params;
        const {  titulo, descripcion, estado, archivada, fechaCreacion, fechaLimite} = req.body;
        const tareaModificada = await modificarTarea(id,titulo,descripcion,estado,archivada,fechaCreacion,fechaLimite);
        res.status(200).json(tareaModificada);
    }catch(err){
        console.error("Error al modificar Tareas")
        res.status(500).json({message:"Error al modificar tarea", error:err.message});
    }
}


