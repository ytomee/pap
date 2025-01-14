import { connectMongoDB } from "../../../lib/mongodb";
import { User } from "../../../models/user";

export default async function handler(req, res) {
    await connectMongoDB();

    if (req.method === "POST") {
        const { type, name, email, password } = req.body;

        try {
            const newUser = await User.create({
                type,
                name,
                email,
                password,
            });

            return res.status(201).json({
                success: true,
                message: "Utilizador criado com sucesso!",
                user: newUser,
            });
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    } else {
        // Retorna erro caso o método não seja POST
        return res.status(405).json({ success: false, message: "Método não permitido" });
    }
}