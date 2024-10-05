import mongoose from 'mongoose';
import connectToDatabase from './Connection/Connection.js';
import createCat from './CreateCat.js';

async function main() {
    await connectToDatabase();
    await createCat()
    mongoose.connection.close()
}
main()