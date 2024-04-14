import {getTareas} from '../Services/serviceTarea.js';

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
        const notaCreada = await serviceNotas.postTarea(titulo, descripcion,estado,archivada,fechaCreacion,fechaLimite);
        res.status(200).json(notaCreada);
    }catch(err){
        console.error("Error al crear nota", err);
        res.status(500).json({message:"Error al crear tarea", error: err.message})
    }
};


