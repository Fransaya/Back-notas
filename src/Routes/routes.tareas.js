import express from 'express';

//? CONTROLADOR DE NOTAS
import {getAllTareas, postTareas,patchTarea}  from '../Controller/controllerTareas.js';


const tareasRoute = express.Router();

//? get all tareas
tareasRoute.get('/', getAllTareas);

//? post tarea
tareasRoute.post('/crearTarea',postTareas);

//? patch tarea
tareasRoute.patch('/modificarTarea/:id',patchTarea);

//? delete tarea
tareasRoute.delete('/eliminarTarea',)

export default tareasRoute;