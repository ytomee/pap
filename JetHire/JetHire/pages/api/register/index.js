import { connectMongoDB } from "../../../lib/mongodb";
import { User } from "../../../models/user";
import { Profile } from "../../../models/user";

export default async function handler(req, res) {
    await connectMongoDB();

    if (req.method === "POST") {
        const { type, name, email, password } = req.body;

        try {
            // Cria o utilizador
            const newUser = await User.create({
                type,
                name,
                email,
                password,
            });

            const newProfile = await Profile.create({
                userID: newUser._id,
                name: newUser.name,
                city: "",
                country: "",
                job: "",
                aboutMe: "",
                yearsExperience: "",
                language: "",
                educationLevel: "",
                phone: "",
                email: newUser.email,
                address: "",
                site: "",
                github: "",
                linkedin: "",
                workExperience: [],
                education: [],
                cv: null, 
            });

            return res.status(201).json({
                success: true,
                message: "Utilizador e perfil criados com sucesso!",
                user: newUser,
                profile: newProfile,
            });
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    } else {
        // Retorna erro caso o método não seja POST
        return res.status(405).json({ success: false, message: "Método não permitido" });
    }
}