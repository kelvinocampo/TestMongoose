import mongoose from 'mongoose';

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/dbTest', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Successfully connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}
connectToDatabase();




