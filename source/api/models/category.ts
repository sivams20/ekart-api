import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
});

export default mongoose.model('Categories', categorySchema);