import catSchema from '../Schemas/CatSchema.js';
import mongoose from 'mongoose';

const catModel = mongoose.model('cats', catSchema());

export default catModel;
