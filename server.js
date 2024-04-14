import express from 'express';
import cors from 'cors';
import http from 'http';

//? ROUTES DE NOTAS
import tareasRoute from './src/Routes/routes.tareas.js';
//? CONEXION CON BASE DE DATOS
import connectDB from './src/config/db.js';

const app = express();

const CorsOptions={
    origin: '*',
    methods: 'GET,POST,PUT,DELETE,PATCH',
    allowHeaders: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MDS. Content-Type, Date, X-Api-Version',
    credentials: true,
};

connectDB();

app.use(express.json());
app.use(cors(CorsOptions))

app.use('/tareas',tareasRoute);


const server= http.createServer(app);
const port= 3000;
server.listen(port,()=>{
    
    console.log("Server online in " + port);
});
