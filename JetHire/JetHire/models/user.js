import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

// Subesquemas
const workExperienceSchema = new Schema({
    institute: { type: String, required: true },
    role: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: false },
});

const educationSchema = new Schema({
    institute: { type: String, required: true },
    course: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: false },
});

// Esquema principal do utilizador com perfil integrado
const userSchema = new Schema(
    {
        type: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profile: {
            city: String,
            district: String,
            job: String,
            company: String,
            aboutMe: String,
            yearsExperience: String,
            language: [String],
            educationLevel: String,
            phone: String,
            site: String,
            github: String,
            linkedin: String,
            workExperience: [workExperienceSchema],
            education: [educationSchema],
            cv: {
                type: Buffer,
            },
        },
    },
    { timestamps: true }
);

// Middleware para encriptar a palavra-passe
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

// Exportar o modelo
export const User = mongoose.models.User || mongoose.model("User", userSchema);