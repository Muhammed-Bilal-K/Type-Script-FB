import mongoose from "mongoose";

interface User {
    id?:string,
    name: string,
    email: string,
    password: string,
    _doc: {
        password: string;
    };
}

const userSchema = new mongoose.Schema<User>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);


export default mongoose.model<User>('User', userSchema);

