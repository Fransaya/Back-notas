import { MongoClient } from "mongodb";

import dotenv from "dotenv";

dotenv.config();

const DB_CONNECTION = process.env.DB_CONNECTION;
const client = new MongoClient(DB_CONNECTION,{useNewUrlParser:true, connectTimeoutMS: 30000 });

const connectDB = async()=>{
    try{
        await client.connect();
        console.log("Conexion con la base de datos establecida");
    }catch(err){
        console.error("Error al conectar la base de datos", err);
    }
};

export default connectDB;