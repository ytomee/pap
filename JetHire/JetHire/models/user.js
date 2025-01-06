import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

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
    },
    { timestamps: true }
);

const profileSchema = new Schema(
    {
        userID: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true,
        },
    }
);


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    try {
        // Gera o salt
        const salt = await bcrypt.genSalt(10);
        // Encripta a palavra-passe
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema);