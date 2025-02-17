import mongoose, { Schema } from "mongoose";

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

const userSchema = new Schema(
    {
        type: { type: String, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String },
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
            pfp: { type: Buffer },
            banner: { type: Buffer },
            cv: { type: Buffer },
        },
    },
    { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;