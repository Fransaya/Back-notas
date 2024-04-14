import express from 'express';

//? CONTROLADOR DE NOTAS
import {getAllTareas, postTareas}  from '../Controller/controllerTareas.js';


const tareasRoute = express.Router();

//? get all tareas
tareasRoute.get('/', getAllTareas);

//? get tarea by id

//? post tarea
tareasRoute.post('/crearTarea',postTareas);

//? patch tarea

//? delete tarea

export default tareasRoute;