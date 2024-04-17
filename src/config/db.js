import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const DB_CONNECTION = process.env.DB_CONNECTION;
const client = new MongoClient(DB_CONNECTION);

const connectDB = async()=>{
    try{
        await mongoose.connect(DB_CONNECTION);
        console.log("Conexion con la base de datos establecida");
    }catch(err){
        console.error("Error al conectar la base de datos", err);
    }
};


export default connectDB;