import mongoose from "mongoose";

function catSchema() {
    const schema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String
        },
        age: {
            type: Number,
            min: 0
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    });
    return schema
}

export default catSchema;
