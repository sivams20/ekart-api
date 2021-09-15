import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true },
    password: { type: String, required: true }
});

export default mongoose.model('User', userSchema);