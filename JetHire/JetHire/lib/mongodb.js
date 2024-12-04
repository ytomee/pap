import mongoose from "mongoose";

export const connectMongoDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Conectado a MONGODB");
    } catch(error){
        console.log("Erro a conectar: ", error);
    }
};