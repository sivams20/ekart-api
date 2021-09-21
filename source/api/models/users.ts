import mongoose from "mongoose";
import { IUser } from "./interfaces/user";

const { Schema } = mongoose;

const userSchema = new Schema<IUser>({
    _id: mongoose.Schema.Types.ObjectId,
    email: { 
        type: String, 
        required: true, 
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ 
    },
    password: { type: String, required: true }
});

export default mongoose.model('User', userSchema);