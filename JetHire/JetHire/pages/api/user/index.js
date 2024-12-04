import { connectMongoDB } from "../../../lib/mongodb";
import User from "../../../models/user";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            // Lê o body da request no Pages Router
            const { name, email } = req.body;

            await connectMongoDB();
            await User.create({ name, email });

            res.status(201).json({ message: "User Registered" });
        } catch (error) {
            console.error("Erro ao criar utilizador:", error);
            res.status(500).json({ message: "Erro no servidor" });
        }
    } else {
        // Responde com 405 para métodos não permitidos
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ message: `Método ${req.method} não permitido` });
    }
}