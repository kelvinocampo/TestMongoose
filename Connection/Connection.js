import mongoose from 'mongoose';

let conn;

async function connectToDatabase() {
    if (!conn) {
        try {
            conn = await mongoose.connect('mongodb://127.0.0.1:27017/dbTest');
            console.log('Successfully connected to MongoDB');
        } catch (err) {
            console.error('Error connecting to MongoDB:', err);
        }
    }
    return conn;
}

export default connectToDatabase;
