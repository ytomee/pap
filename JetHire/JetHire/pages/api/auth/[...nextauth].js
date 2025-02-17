import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";  // Adicionar o provedor de credenciais
import { compare } from "bcrypt";
import connectMongoDB from "../../../lib/mongodb";
import User from "../../../models/user";

const authOptions = {
    providers: [
        // Provedor Google
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        
        // Provedor de Credenciais (Email e Senha)
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await connectMongoDB();
                
                const user = await User.findOne({ email: credentials.email });

                if (!user) {
                    throw new Error("Utilizador não encontrado");
                }

                const isValidPassword = await compare(credentials.password, user.password);
                
                if (!isValidPassword) {
                    throw new Error("Password incorreta");
                }

                return user;  // Retorna o usuário se as credenciais estiverem corretas
            }
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            // Lógica para Google (já existe no teu código)
            if (account.provider === 'google') {
                const { name, email } = user;
                try {
                    await connectMongoDB();
                    const userExists = await User.findOne({ email });
                    if (!userExists) {
                        const res = await fetch('/api/user', {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                name,
                                email,
                            }),
                        });
                        if (res.ok) {
                            return user;
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            return user;
        }
    },
    session: {
        strategy: "jwt", // Usar JWT para a sessão
    }
};

export default NextAuth(authOptions);