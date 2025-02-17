// lib/mongodb.js
import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log("Já conectado ao MongoDB");
            return;
        }

        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Conectado ao MongoDB");

    } catch (error) {
        console.log("Erro a conectar: ", error);
    }
};

export default connectMongoDB;  // exportação da função diretamente